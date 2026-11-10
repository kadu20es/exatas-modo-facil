import { useState, type ReactNode } from 'react';
import { StudyHeader } from './StudyHeader';

type TopicTab = { id: string; label: string; content: ReactNode };
export function TopicPageLayout({ title, tagline, tabs, footer }: { title: string; tagline: string; tabs: TopicTab[]; footer: string }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '');
  const active = tabs.find(tab => tab.id === activeTab)?.content;
  return <>
    <StudyHeader title={title} tagline={tagline} tabs={tabs.map(({ id, label }) => ({ id, label }))} activeTab={activeTab} onTabChange={setActiveTab} />
    <main className="max-w-7xl mx-auto px-4 py-7">{active}</main>
    <footer className="border-t bg-white mt-8"><div className="max-w-7xl mx-auto px-4 py-7 text-center text-sm text-slate-500">{footer} • Fórmulas renderizadas em notação matemática</div></footer>
  </>;
}
