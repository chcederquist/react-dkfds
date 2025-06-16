import { ReactElement, ReactNode, useState } from "react";
import { IconName } from "../../types/icon-names";
import { Icon } from "../Shared/Icon";

export type TabProps = {
  id: string | number;
  label: string;
  icon?: IconName;
  children: ReactNode;
};

type TabPropsInternal = TabProps & { active: boolean };
function TabInternal({ id, children, active }: Readonly<TabPropsInternal>) {
  return (
    <div
      key={id}
      className="tab-panel"
      role="tabpanel"
      tabIndex={0}
      id={`tabpanel${id}`}
      aria-labelledby={`tabcontrol${id}`}
      hidden={!active}
    >
      {children}
    </div>
  );
}

export function Tab(_: Readonly<TabProps>) {
  return <></>;
}

export type TabContainerProps = {
  children: ReactElement<Omit<TabProps, "active">, typeof Tab>[];
} & (
  | {
      defaultActiveKey: TabProps["id"];
      activeKey?: never;
      onSelect?: never;
    }
  | {
      activeKey: TabProps["id"];
      defaultActiveKey?: never;
      onSelect?: (key: TabProps["id"]) => void;
    }
);

export function TabContainer({
  children,
  ...props
}: Readonly<TabContainerProps>) {
  const [activeTabKey, setActiveTabKey] = useState(props.defaultActiveKey);
  const selectedKey = props.activeKey ?? activeTabKey;
  const setKey = props.onSelect ?? setActiveTabKey;
  const tabs = children.map((child) => {
    return {
      id: child.props.id,
      label: child.props.label,
      icon: child.props.icon,
      children: child.props.children,
      active: child.props.id === selectedKey,
    };
  });
  const mappedChildren = children.map((child) => {
    return (
      <TabInternal
        key={child.props.id}
        id={child.props.id}
        label={child.props.label}
        icon={child.props.icon}
        active={child.props.id === selectedKey} // Show the active tab content
      >
        {child.props.children}
      </TabInternal>
    );
  });
  return (
    <div className="tab-container">
      <div className="tab-list">
        {tabs.map((tab, index, array) => {
          return (
            <button
              key={tab.id}
              className="tab-button"
              onKeyDown={(ev) => {
                ev.preventDefault();
                const currentKeyIndex = array.findIndex(
                  (t) => t.id === selectedKey,
                );
                if (ev.repeat) {
                  return;
                }
                switch (ev.key) {
                  case "ArrowRight":
                    setKey(array[(currentKeyIndex + 1) % tabs.length].id);
                    break;
                  case "ArrowLeft":
                    setKey(
                      array[(currentKeyIndex - 1 + tabs.length) % tabs.length]
                        .id,
                    );
                    break;
                  case "Home":
                    setKey(array[0].id);
                    break;
                  case "End":
                    setKey(array[array.length - 1].id);
                    break;
                }
              }}
              onClick={() => setKey(tab.id)}
              role="tab"
              aria-controls={tab.id.toString()}
              aria-selected={selectedKey === tab.id}
              id={`tabcontrol${tab.id}`}
              tabIndex={selectedKey === index ? 0 : -1}
            >
              {tab.icon && <Icon icon={tab.icon}></Icon>} {tab.label}
            </button>
          );
        })}
      </div>
      {mappedChildren}
    </div>
  );
}
