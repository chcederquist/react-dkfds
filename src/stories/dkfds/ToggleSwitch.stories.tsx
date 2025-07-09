import type { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from "../../components/ToggleSwitch/ToggleSwitch";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainToggleSwitch: Story = {
  args: {
    checked: false,
    id: "toggle-switch-example",
    label: "Toggle switch with label",
    onSwitch: () => {},
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <div style={{ width: "300px", paddingTop: 20 }}>
        <ToggleSwitch
          {...args}
          checked={checked}
          onSwitch={() => {
            setChecked(!checked);
          }}
        />
      </div>
    );
  },
};
