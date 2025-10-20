import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { Button } from "../../components/Button/Button";
import { RadioButtons } from "../../components/RadioButtons/RadioButtons";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { InputField } from "../../components/InputField/InputField";

const meta = {
  title: "DKFDS/Tooltip",
  component: Tooltip,
  subcomponents: { Button },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTooltip: Story = {
  render: (args) => {
    return (
      <>
        <p>
          Den her tekst har et tooltip, der er placeret over hjælpeikonet{" "}
          <Tooltip {...args} />
        </p>
        <p>
          Her er tooltip placeret under hjælpeikonet{" "}
          <Tooltip {...args} position="below" />
        </p>
      </>
    );
  },
  args: {
    tooltip: "Dette er et tooltip",
    position: "above",
    trigger: "click",
  },
};

export const RadioButtonWithTooltip: Story = {
  render: (args) => {
    return (
      <RadioButtons
        options={[
          { id: "radio1", label: "Valg 1", value: "1" },
          {
            id: "radio2",
            label: "Valg 2",
            value: "2",
            hint: "Hjælpetekst kan stå her",
          },
        ]}
        id="radio-buttons-with-tooltip"
        name="radio-choice"
        label="Radioknapper"
        tooltip={args}
      ></RadioButtons>
    );
  },
  args: {
    tooltip: "Dette er et tooltip",
    position: "above",
    trigger: "click",
  },
};

export const CheckboxWithTooltip: Story = {
  render: (args) => {
    return (
      <Checkbox
        id="checkbox-with-tooltip"
        name="checkbox-tooltip"
        options={[
          {
            id: "checkbox1",
            checked: true,
            label: "Udfyldt checkbox",
            tooltip: args,
            value: "1",
          },
        ]}
      ></Checkbox>
    );
  },
  args: {
    tooltip: "Dette er et tooltip",
    position: "above",
    trigger: "click",
  },
};

export const InputFieldWithTooltip: Story = {
  render: (args) => {
    return (
      <InputField
        inputProps={{
          id: "input-tooltip",
          name: "input-tooltip",
        }}
        label="Inputfelt"
        tooltip={args}
      ></InputField>
    );
  },
  args: {
    tooltip: "Dette er et tooltip",
    position: "above",
    trigger: "click",
  },
};

export const TextWithTooltip: Story = {
  render: (args) => {
    return (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et <strong>dolore magna</strong>
        <Tooltip {...args} />
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    );
  },
  args: {
    tooltip: "Dette er et tooltip",
    position: "above",
    inText: true,
    trigger: "click",
  },
};

export const IconWithHoverTooltip: Story = {
  args: {
    tooltip: "Slet",
    position: "below",
    icon: "delete",
    tooltipIsLabel: true,
    trigger: "hover",
  },
};
