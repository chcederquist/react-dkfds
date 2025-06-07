import type { Meta, StoryObj } from "@storybook/react";
import { Details } from "../../components/Details/Details";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Details",
  component: Details,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainDetails: Story = {
  args: {
    children: (
      <>
        Pellentesque nulla mi, pulvinar id blandit eu, volutpat at libero.
        Integer euismod augue leo.
        <br /> Morbi faucibus nunc tortor, condimentum vulputate urna
        sollicitudin non. Nam commodo nulla metus. Phasellus varius eu dolor nec
        ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris ac leo finibus, blandit velit nec, consequat est. Nulla facilisi.
      </>
    ),
    summaryProps: {
      children: "Mere information",
    },
  },
};
