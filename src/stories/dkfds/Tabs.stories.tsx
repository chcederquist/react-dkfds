import type { Meta, StoryObj } from "@storybook/react";
import { TabContainer } from "../../components/Tabs/TabContainer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Tabs",
  component: TabContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof TabContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTabs: Story = {
  args: {
    tabs: [
      {
        label: "Faneblad 1",
        id: "tab1",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, enim eu fringilla varius, massa lectus molestie lacus, sed malesuada justo magna sit amet eros. Nam accumsan dignissim dignissim. In hac habitasse platea dictumst. Cras feugiat maximus turpis, id ullamcorper purus congue ut.",
      },
      {
        label: "Faneblad 2",
        id: "tab2",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, enim eu fringilla varius, massa lectus molestie lacus, sed malesuada justo magna sit amet eros. Nam accumsan dignissim dignissim. In hac habitasse platea dictumst. Cras feugiat maximus turpis, id ullamcorper purus congue ut.",
      },
      {
        label: "Faneblad 3",
        id: "tab3",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, enim eu fringilla varius, massa lectus molestie lacus, sed malesuada justo magna sit amet eros. Nam accumsan dignissim dignissim. In hac habitasse platea dictumst. Cras feugiat maximus turpis, id ullamcorper purus congue ut.",
      },
    ],
  },
};

export const IconTabs: Story = {
  args: {
    tabs: [
      {
        label: "Billede",
        id: "tab1",
        icon: "file-image",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, enim eu fringilla varius, massa lectus molestie lacus, sed malesuada justo magna sit amet eros. Nam accumsan dignissim dignissim. In hac habitasse platea dictumst. Cras feugiat maximus turpis, id ullamcorper purus congue ut.",
      },
      {
        label: "Dokument",
        id: "tab2",
        icon: "file-pdf",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, enim eu fringilla varius, massa lectus molestie lacus, sed malesuada justo magna sit amet eros. Nam accumsan dignissim dignissim. In hac habitasse platea dictumst. Cras feugiat maximus turpis, id ullamcorper purus congue ut.",
      },
    ],
  },
};
