import { ReactNode, useState } from "react";

export type TabsProps = {
  tabs: Array<{ id: string | number; title: string; content: ReactNode }>;
};

export function Tabs({ tabs }: Readonly<TabsProps>) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="tab-container">
      <div className="tab-list">
        {tabs.map((tab, index) => {
          return (
            <button
              key={tab.id}
              className="tab-button"
              onKeyDown={(ev) => {
                ev.preventDefault();
                if (ev.repeat) {
                  return;
                }
                switch (ev.key) {
                  case "ArrowRight":
                    setActiveTabIndex((index + 1) % tabs.length);
                    break;
                  case "ArrowLeft":
                    setActiveTabIndex((index - 1 + tabs.length) % tabs.length);
                    break;
                  case "Home":
                    setActiveTabIndex(0);
                    break;
                  case "End":
                    setActiveTabIndex(tabs.length - 1);
                    break;
                }
              }}
              onClick={() => setActiveTabIndex(index)}
              role="tab"
              aria-controls={tab.id.toString()}
              aria-selected={activeTabIndex === tab.id}
              id={`tabcontrol${tab.id}`}
              tabIndex={activeTabIndex === index ? 0 : -1}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, index) => {
        return (
          <div
            key={tab.id}
            className="tab-panel"
            role="tabpanel"
            tabIndex={0}
            id={`tabpanel${tab.id}`}
            aria-labelledby={`tabcontrol${tab.id}`}
            hidden={activeTabIndex !== index}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}
