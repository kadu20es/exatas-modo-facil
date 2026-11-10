#!/usr/bin/env bash
set -euo pipefail

if [[ "${EUID}" -ne 0 ]]; then
  echo "Execute este script com sudo." >&2
  exit 1
fi

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
source_config="${script_dir}/exatasmodofacil.com.br.nginx"
target_config="/etc/nginx/sites-available/exatasmodofacil.com.br"
backup_config="${target_config}.pre-codex.$(date +%Y%m%d%H%M%S)"

if [[ ! -r "${source_config}" ]]; then
  echo "Não encontrei ${source_config}" >&2
  exit 1
fi

cp -a "${target_config}" "${backup_config}"
install -o root -g root -m 0644 "${source_config}" "${target_config}"

if ! /usr/sbin/nginx -t; then
  cp -a "${backup_config}" "${target_config}"
  echo "Configuração inválida; restaurei a versão anterior. O site atual segue ativo." >&2
  exit 1
fi

systemctl disable --now exatas-web-port80.service

if ! systemctl enable --now nginx; then
  systemctl stop nginx 2>/dev/null || true
  cp -a "${backup_config}" "${target_config}"
  systemctl enable --now exatas-web-port80.service
  echo "Nginx não iniciou; restaurei a configuração e o serviço HTTP anterior." >&2
  exit 1
fi

echo "Nginx ativo. Backup da configuração anterior: ${backup_config}"
