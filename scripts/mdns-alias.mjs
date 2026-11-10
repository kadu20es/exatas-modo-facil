import dgram from "node:dgram";
import { isIPv4 } from "node:net";
import os from "node:os";

const hostname = (process.env.MDNS_NAME || "matematicafacil.local")
  .replace(/\.$/, "")
  .toLowerCase();
const multicastAddress = "224.0.0.251";

function currentAddress() {
  if (process.env.MDNS_ADDRESS) return process.env.MDNS_ADDRESS;
  const addresses = Object.values(os.networkInterfaces())
    .flatMap((entries) => entries || [])
    .filter((entry) => entry.family === "IPv4" && !entry.internal)
    .map((entry) => entry.address);
  return addresses.find((value) => /^192\.168\.|^10\.|^172\.(1[6-9]|2\d|3[01])\./.test(value)) || addresses[0];
}

if (!hostname.endsWith(".local")) {
  throw new Error("Use um nome terminado em .local.");
}

function readName(packet, offset) {
  const labels = [];
  let cursor = offset;
  let next = offset;
  let jumped = false;

  while (cursor < packet.length) {
    const size = packet[cursor];
    if (size === 0) {
      if (!jumped) next = cursor + 1;
      break;
    }
    if ((size & 0xc0) === 0xc0) {
      if (cursor + 1 >= packet.length) return null;
      if (!jumped) next = cursor + 2;
      cursor = ((size & 0x3f) << 8) | packet[cursor + 1];
      jumped = true;
      continue;
    }
    if ((size & 0xc0) !== 0 || cursor + size + 1 > packet.length) return null;
    labels.push(packet.toString("ascii", cursor + 1, cursor + 1 + size));
    cursor += size + 1;
  }

  return { name: labels.join("."), next };
}

function encodeName(name) {
  return Buffer.concat([
    ...name.split(".").map((label) => {
      const bytes = Buffer.from(label, "ascii");
      return Buffer.concat([Buffer.from([bytes.length]), bytes]);
    }),
    Buffer.from([0]),
  ]);
}

const socket = dgram.createSocket({ type: "udp4", reuseAddr: true });
socket.on("error", (error) => {
  console.error(`mDNS: ${error.message}`);
  process.exitCode = 1;
  socket.close();
});

socket.on("message", (query, peer) => {
  if (query.length < 12 || (query.readUInt16BE(2) & 0x8000) !== 0) return;
  const questionCount = query.readUInt16BE(4);
  let cursor = 12;
  let unicast = false;
  let matches = false;

  for (let index = 0; index < questionCount; index += 1) {
    const question = readName(query, cursor);
    if (!question || question.next + 4 > query.length) return;
    const type = query.readUInt16BE(question.next);
    const klass = query.readUInt16BE(question.next + 2);
    cursor = question.next + 4;
    if (question.name.toLowerCase() !== hostname) continue;
    if (type !== 1 && type !== 255) continue;
    if ((klass & 0x7fff) !== 1) continue;
    matches = true;
    unicast ||= (klass & 0x8000) !== 0;
  }

  if (!matches) return;

  const response = Buffer.alloc(12);
  response.writeUInt16BE(0x8400, 2); // authoritative mDNS answer
  response.writeUInt16BE(1, 6); // one answer

  const address = currentAddress();
  if (!address || !isIPv4(address)) return;
  const ip = Buffer.from(address.split(".").map(Number));
  const answer = Buffer.alloc(10);
  answer.writeUInt16BE(1, 0); // A record
  answer.writeUInt16BE(1, 2); // IN class
  answer.writeUInt32BE(120, 4); // TTL
  answer.writeUInt16BE(4, 8);
  const packet = Buffer.concat([response, encodeName(hostname), answer, ip]);
  socket.send(
    packet,
    unicast ? peer.port : 5353,
    unicast ? peer.address : multicastAddress,
  );
});

socket.bind(5353, "0.0.0.0", () => {
  try {
    socket.addMembership(multicastAddress);
    console.log(`mDNS respondendo por ${hostname} em ${currentAddress()}`);
  } catch (error) {
    console.error(`Não foi possível participar do mDNS: ${error.message}`);
    process.exitCode = 1;
    socket.close();
  }
});
