import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../../components/Button/Button";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    children: "Primærknap",
    buttonType: "primary",
  },
};

export const SecondaryButton: Story = {
  args: {
    children: "Sekundærknap",
    buttonType: "secondary",
  },
};

export const TertiaryButton: Story = {
  args: {
    children: "Tertiærknap",
    buttonType: "tertiary",
  },
};

export const PrimaryButtonFullWidthOnSmallScreens: Story = {
  args: {
    children: "Primærknap (fuld bredde på små skærme)",
    buttonType: "primary",
    xsFullWidth: true,
  },
};

export const IconButton: Story = {
  args: {
    children: "Genindlæs",
    buttonType: "primary",
    icon: "refresh",
  },
};

export const ButtonGroup: Story = {
  args: {} as ButtonProps,
  render: () => (
    <div className="button-group">
      <Button buttonType="primary">Gem</Button>
      <Button buttonType="secondary">Fortryd</Button>
    </div>
  ),
};

export const ClickableIcon: Story = {
  args: {
    icon: "delete",
    buttonType: "icon-only",
    srLabel: "Slet",
  },
};

export const LoadingButton: Story = {
  args: {
    children: "Gem",
    buttonType: "primary",
  },
  render: (args) => {
    const [loading, setLoading] = useState(false);
    return (
      <Button
        {...args}
        loading={loading}
        onClick={() => {
          if (loading) {
            return;
          }
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 6000);
        }}
      >
        Gem
      </Button>
    );
  },
};
