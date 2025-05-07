import { ReactNode } from "react";

export type LeftMenuItem = {
  id: string;
  url: string;
  title: ReactNode;
  information: ReactNode;
  current?: boolean;
  childItems?: LeftMenuItem[];
}

export type LeftMenuProps = {
  menuItems: LeftMenuItem[];
  ariaLabel: string;
}

export function LeftMenu({ariaLabel, menuItems}: Readonly<LeftMenuProps>) {
  return (
    <nav aria-label={ariaLabel}>
      <LeftMenuItemList menuItems={menuItems} />
    </nav>
  )
}

function LeftMenuItemList({ menuItems }: { menuItems: LeftMenuItem[] }) {
     return <ul className="sidemenu">
        {menuItems.map((item) => (
          <LeftMenuItem item={item}></LeftMenuItem>
        ))}
      </ul>

}

function LeftMenuItem({ item }: { item: LeftMenuItem }) {
  return (
    <li>
      <a href={item.url} className="nav-link">
        {item.title}
        {item.information && <span className="sidenav-information">{item.information}</span>}
        {item.childItems?.length && <LeftMenuItemList menuItems={item.childItems}></LeftMenuItemList>}
      </a>
    </li>
  )
}