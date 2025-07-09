import type { Meta, StoryObj } from "@storybook/react";
import { LeftMenu, LeftMenuItem } from "../../components/LeftMenu/LeftMenu";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/LeftMenu",
  component: LeftMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof LeftMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainLeftMenu: Story = {
  args: {
    ariaLabel: "Venstremenu - Main",
    children: (
      <>
        <LeftMenuItem
          url="#"
          title="Side"
          current={false}
          active={false}
        ></LeftMenuItem>
        <LeftMenuItem
          url="#"
          title="Side"
          current={true}
          active={true}
        ></LeftMenuItem>
        <LeftMenuItem
          url="#"
          title="Side"
          current={false}
          active={false}
        ></LeftMenuItem>
      </>
    ),
  },
};

export const LeftMenuWithSubMenu: Story = {
  args: {
    ariaLabel: "Venstremenu - Main",
    children: (
      <>
        <LeftMenuItem
          url="#"
          title="Side"
          current={false}
          active={false}
        ></LeftMenuItem>
        <LeftMenuItem url="#" title="Side" current={true} active={true}>
          <LeftMenuItem url="#" title="Underside" />
          <LeftMenuItem url="#" title="Underside" />
          <LeftMenuItem url="#" title="Underside" />
          <LeftMenuItem url="#" title="Underside" />
          <LeftMenuItem url="#" title="Underside" />
        </LeftMenuItem>
        <LeftMenuItem
          url="#"
          title="Side"
          current={false}
          active={false}
        ></LeftMenuItem>
      </>
    ),
  },
};

export const LeftMenuWithSubSubMenu: Story = {
  args: {
    ariaLabel: "Venstremenu - Main",
    children: (
      <>
        <LeftMenuItem
          url="#"
          title="Side"
          current={false}
          active={false}
        ></LeftMenuItem>
        <LeftMenuItem url="#" title="Side" current={true} active={true}>
          <LeftMenuItem url="#" title="Underside" />
          <LeftMenuItem url="#" title="Underside" />
          <LeftMenuItem url="#" title="Underside">
            <LeftMenuItem url="#" title="Underunderside" />
            <LeftMenuItem url="#" title="Underunderside" />
            <LeftMenuItem url="#" title="Underunderside" />
            <LeftMenuItem url="#" title="Underunderside" />
          </LeftMenuItem>
          <LeftMenuItem url="#" title="Underside" />
        </LeftMenuItem>
        <LeftMenuItem
          url="#"
          title="Side"
          current={false}
          active={false}
        ></LeftMenuItem>
      </>
    ),
  },
};

export const LeftMenuWithExtraInfo: Story = {
  args: {
    ariaLabel: "Venstremenu - Main",
    children: (
      <>
        <LeftMenuItem
          url="#"
          title="Side"
          information="Informationstekst for side"
          current={false}
          active={false}
        ></LeftMenuItem>
        <LeftMenuItem
          url="#"
          title="Side"
          information="Informationstekst for side"
          current={true}
          active={true}
        ></LeftMenuItem>
        <LeftMenuItem
          url="#"
          title="Side"
          information="Informationstekst for side"
          current={false}
          active={false}
        ></LeftMenuItem>
      </>
    ),
  },
};
