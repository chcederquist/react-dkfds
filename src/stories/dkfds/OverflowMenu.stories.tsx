import type { Meta, StoryObj } from "@storybook/react";
import {
  OverflowMenu,
  OverflowMenuProps,
  OverflowMenuSort,
} from "../../components/OverflowMenu/OverflowMenu";

const meta = {
  title: "DKFDS/OverflowMenu",
  component: OverflowMenu,
} satisfies Meta<typeof OverflowMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainOverflowMenu: Story = {
  args: {
    id: "main-overflow-menu",
    label: "Menu",
    side: "right",
    menuItems: [
      {
        id: "item1",
        label: "Mulighed 1",
        action: () => {},
      },
      {
        id: "item2",
        label: "Mulighed 2",
        action: () => {},
      },
      {
        id: "item3",
        label: "Mulighed 3 er et link",
        href: "#",
      },
      {
        id: "item4",
        label: "Mulighed 4 er en længere tekst",
        action: () => {},
      },
    ],
  },
};

export const OverflowMenuSorting: Story = {
  args: {} as OverflowMenuProps,
  render: () => {
    return (
      <OverflowMenuSort
        id="overflow-menu-sort-example"
        label="Sortér"
        side="right"
        menuItems={[
          {
            id: "item1",
            label: "Nyeste først",
            isCurrent: true,
            action: () => {},
          },
          {
            id: "item2",
            label: "Ældste først",
            action: () => {},
          },
          {
            id: "item3",
            label: "Affaldstype (A-Å)",
            action: () => {},
          },
          {
            id: "item4",
            label: "Affaldstype (A-Å)",
            action: () => {},
          },
        ]}
      ></OverflowMenuSort>
    );
  },
};
