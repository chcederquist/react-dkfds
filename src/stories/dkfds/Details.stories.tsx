import type { Meta, StoryObj } from "@storybook/react";
import { Details } from "../../components/Details/Details";

const meta = {
  title: "DKFDS/Details",
  component: Details,
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
