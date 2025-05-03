import { ReactNode, useState } from "react";

export type TabsProps = {
  tabs: Array<{id: string | number; title: string; content: ReactNode;}>;
}

export function Tabs({tabs}: Readonly<TabsProps>) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
<div className="tab-container">
  <div className="tab-list">
  {tabs.map((tab) => {
    return (
      <button className="tab-button" onClick={() => setActiveTab(tab.id)} role="tab" aria-controls={tab.id.toString()} aria-selected={activeTab === tab.id} id={`tabcontrol${tab.id}`}>{tab.title}</button>
    );
  })}
  </div>
  {tabs.map((tab) => {
    return (
      <div className="tab-panel" role="tabpanel" tabIndex={0} id={`tabpanel${tab.id}`} aria-labelledby={`tabcontrol${tab.id}`} hidden={activeTab !== tab.id}>
        {tab.content}
    </div>
    );
  })}
</div>
  );
}