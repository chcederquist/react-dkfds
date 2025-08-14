import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationProps,
} from "../../components/Pagination/Pagination";
import { useState } from "react";

const meta = {
  title: "DKFDS/Pagination",
  component: Pagination,
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
