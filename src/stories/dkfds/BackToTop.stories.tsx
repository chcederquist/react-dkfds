import type { Meta, StoryObj } from "@storybook/react";
import { BackToTop } from "../../components/BackToTop/BackToTop";

const meta = {
  title: "DKFDS/BackToTop",
  component: BackToTop,
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainBackToTop: Story = {
  args: {},
  render: () => (
    <>
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>
          Scroll down to see the Back to Top button appear. Click it to return
          to the top of the page.
        </p>
        <p>
          This component is useful for long pages where users may want to
          quickly navigate back to the top.
        </p>
      </div>
      <BackToTop />
    </>
  ),
};
