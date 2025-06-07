import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
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
