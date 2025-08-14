import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

const meta = {
  title: "DKFDS/Breadcrumb",
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainBreadcrumb: Story = {
  args: {
    breadcrumbList: [
      {
        id: "root",
        href: "#",
        text: "Forside",
      },
      {
        id: "level-1",
        href: "#",
        text: "Underside",
      },
      {
        id: "level-2",
        href: "#",
        text: "Aktuelle side",
      },
    ],
  },
};
