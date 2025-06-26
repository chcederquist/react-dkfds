import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationProps,
} from "../../components/Pagination/Pagination";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Pagination",
  component: Pagination,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPagination: Story = {
  args: {
    currentPageNumber: 8,
    pageCount: 12,
  },
  render: (args: PaginationProps) => {
    const [selectedPage, setSelectedPage] = useState(args.currentPageNumber);
    return (
      <Pagination
        {...args}
        currentPageNumber={selectedPage}
        pageCount={args.pageCount}
        onPageSelected={(pageNumber) => {
          setSelectedPage(pageNumber);
        }}
      />
    );
  },
};

export const Pagination7OrLess: Story = {
  args: {
    currentPageNumber: 1,
    pageCount: 7,
  },
  render: (args: PaginationProps) => {
    const [selectedPage, setSelectedPage] = useState(args.currentPageNumber);
    return (
      <>
        <Pagination
          {...args}
          currentPageNumber={selectedPage}
          pageCount={args.pageCount}
          onPageSelected={(pageNumber) => {
            setSelectedPage(pageNumber);
          }}
        />
      </>
    );
  },
};
