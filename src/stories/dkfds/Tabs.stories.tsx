import type { Meta, StoryObj } from "@storybook/react";
import {
  Tab,
  TabContainer,
  TabContainerProps,
  TabProps,
} from "../../components/Tabs/TabContainer";
import { useState } from "react";

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
  name: "Main Tabs Uncontrolled",
  args: {
    children: undefined as unknown as TabContainerProps["children"], // This will be overridden in the render function
    defaultActiveKey: "tab1", // Default active tab
    activeKey: undefined, // No active tab set initially
  },
  render: () => (
    <TabContainer defaultActiveKey={"tab1"}>
      <Tab id="tab1" label="Faneblad 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        ullamcorper, enim eu fringilla varius, massa lectus molestie lacus, sed
        malesuada justo magna sit amet eros. Nam accumsan dignissim dignissim.
        In hac habitasse platea dictumst. Cras feugiat maximus turpis, id
        ullamcorper purus congue ut.
      </Tab>
      <Tab id="tab2" label="Faneblad 2">
        Praesent consequat erat nec felis semper dignissim. Duis mattis massa in
        hendrerit varius. Sed commodo at augue sit amet auctor. Maecenas ligula
        massa, rutrum quis porttitor id, semper ut libero. Nam quis felis porta
        lorem consequat eleifend a rutrum ante.
      </Tab>
      <Tab id="tab3" label="Faneblad 3">
        Phasellus sodales lectus mi, vel pellentesque massa semper non. Sed
        iaculis sed nisl id dapibus. Aenean vitae tristique purus. Sed faucibus
        sit amet eros vitae commodo. Integer bibendum, justo nec scelerisque
        malesuada, nunc risus ultricies diam, euismod dignissim orci eros eget
        neque.
      </Tab>
    </TabContainer>
  ),
};

export const MainTabsControlled: Story = {
  args: {
    children: undefined as unknown as TabContainerProps["children"], // This will be overridden in the render function
    defaultActiveKey: undefined, // Default active tab
    activeKey: "tab1", // No active tab set initially
  },
  render: () => {
    const [activeKey, setActiveKey] = useState<TabProps["id"]>("tab1");
    const handleSelect = (key: TabProps["id"]) => {
      setActiveKey(key);
    };
    return (
      <TabContainer activeKey={activeKey} onSelect={handleSelect}>
        <Tab id="tab1" label="Faneblad 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ullamcorper, enim eu fringilla varius, massa lectus molestie lacus,
          sed malesuada justo magna sit amet eros. Nam accumsan dignissim
          dignissim. In hac habitasse platea dictumst. Cras feugiat maximus
          turpis, id ullamcorper purus congue ut.
        </Tab>
        <Tab id="tab2" label="Faneblad 2">
          Praesent consequat erat nec felis semper dignissim. Duis mattis massa
          in hendrerit varius. Sed commodo at augue sit amet auctor. Maecenas
          ligula massa, rutrum quis porttitor id, semper ut libero. Nam quis
          felis porta lorem consequat eleifend a rutrum ante.
        </Tab>
        <Tab id="tab3" label="Faneblad 3">
          Phasellus sodales lectus mi, vel pellentesque massa semper non. Sed
          iaculis sed nisl id dapibus. Aenean vitae tristique purus. Sed
          faucibus sit amet eros vitae commodo. Integer bibendum, justo nec
          scelerisque malesuada, nunc risus ultricies diam, euismod dignissim
          orci eros eget neque.
        </Tab>
      </TabContainer>
    );
  },
};

export const TabsWithIcons: Story = {
  args: {
    children: undefined as unknown as TabContainerProps["children"], // This will be overridden in the render function
    defaultActiveKey: "tab1", // Default active tab
    activeKey: undefined, // No active tab set initially
  },
  render: () => (
    <TabContainer defaultActiveKey={"tab1"}>
      <Tab id="tab1" label="Faneblad 1" icon="file-image">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        ullamcorper, enim eu fringilla varius, massa lectus molestie lacus, sed
        malesuada justo magna sit amet eros. Nam accumsan dignissim dignissim.
        In hac habitasse platea dictumst. Cras feugiat maximus turpis, id
        ullamcorper purus congue ut.
      </Tab>
      <Tab id="tab2" label="Faneblad 2" icon="file-word">
        Praesent consequat erat nec felis semper dignissim. Duis mattis massa in
        hendrerit varius. Sed commodo at augue sit amet auctor. Maecenas ligula
        massa, rutrum quis porttitor id, semper ut libero. Nam quis felis porta
        lorem consequat eleifend a rutrum ante.
      </Tab>
    </TabContainer>
  ),
};
