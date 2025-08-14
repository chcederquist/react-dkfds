import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/preview-api";
import { ToggleSwitch } from "../../components/ToggleSwitch/ToggleSwitch";

const meta = {
  title: "DKFDS/ToggleSwitch",
  component: ToggleSwitch,
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
    const [{ checked }, updateArgs] = useArgs();
    return (
      <div style={{ width: "300px", paddingTop: 20 }}>
        <ToggleSwitch
          {...args}
          checked={checked}
          onSwitch={() => {
            updateArgs({ checked: !checked });
          }}
        />
      </div>
    );
  },
};
