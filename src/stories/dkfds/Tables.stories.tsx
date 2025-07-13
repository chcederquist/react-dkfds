import type { Meta, StoryObj } from "@storybook/react";
import { Table, Td, Th } from "../../components/Table/Table";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { Icon } from "../../components/Shared/Icon";
import { ScreenReaderLabel } from "../../components/ScreenReaderLabel/ScreenReaderLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Tables",
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const tableData = {
  columns: [
    { name: "Affaldstype", sortable: true },
    { name: "Farvekode", sortable: true },
    { name: "Beskrivelse", sortable: false },
    { name: "Hvor ender det?", sortable: false },
  ],
  rows: [
    [
      "Dagrenovation",
      "Grøn",
      "Madaffald, samt papir, pap eller plastik der ikke kan genanvendes, fordi der er madrester eller andet snask på.",
      "Alt det affald, du smider ud i din primære skraldespand, som er dagrenovationen, bliver hentet og kørt på forbrændingen.",
    ],
    [
      "Bioaffald og kompost",
      "Beige",
      "Alt madaffald uden fødevareemballage.",
      "Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld.",
    ],
    [
      "Glas",
      "Hvid",
      "Alle typer glas og flasker.",
      "De hele vinflasker rengøres og genbruges af vinhuse, mens glasskårene bliver smeltet om til nyt glas.",
    ],
    [
      "Elektronik",
      "Orange",
      "Genstande der har brugt strøm.",
      "Det elektroniske affald bliver typisk kørt til et demonteringsanlæg, hvor det bliver skilt ad, så de forskellige dele kan genanvendes separat.",
    ],
  ],
};

export const MainTable: Story = {
  args: {
    children: (
      <>
        <thead>
          <tr>
            {tableData.columns.map((column) => (
              <Th scope="col" key={column.name}>
                {column.name}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row) => (
            <tr key={row.join(",")}>
              {row.map((cell) => (
                <Td key={cell}>{cell}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </>
    ),
  },
};

export const NoFrameTable: Story = {
  args: {
    ...MainTable.args,
    borderless: true,
  },
};

export const ZebraTable: Story = {
  args: {
    ...MainTable.args,
    zebra: true,
  },
};

export const CompactTable: Story = {
  args: {
    ...MainTable.args,
    compact: "compact",
  },
};

export const ExtraCompactTable: Story = {
  args: {
    ...MainTable.args,
    compact: "extra-compact",
  },
};

export const SortingTable: Story = {
  render: () => {
    const [sortColumn, setSortColumn] = useState<
      { columnName: string; direction: "asc" | "desc" } | undefined
    >();
    const sortedTableData = [...tableData.rows].sort((a, b) => {
      if (!sortColumn) return 0;
      const columnIndex = tableData.columns.findIndex(
        (col) => col.name === sortColumn.columnName,
      );
      if (columnIndex === -1) return 0;

      const aValue = a[columnIndex];
      const bValue = b[columnIndex];

      if (aValue < bValue) {
        return sortColumn.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortColumn.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    return (
      <Table>
        <thead>
          <tr>
            {tableData.columns.map((column) => (
              <Th noWrap scope="col" key={column.name}>
                {column.sortable && (
                  <Button
                    buttonType="unstyled"
                    onClick={() => {
                      setSortColumn({
                        columnName: column.name,
                        direction:
                          sortColumn?.direction === "asc" ? "desc" : "asc",
                      });
                    }}
                  >
                    {column.name}
                    <ScreenReaderLabel className="sr-only">
                      Klik for at sortere{" "}
                      {column.name === sortColumn?.columnName
                        ? sortColumn.direction === "asc"
                          ? "faldende"
                          : "stigende"
                        : "efter denne kolonne"}
                    </ScreenReaderLabel>
                    {column.name === sortColumn?.columnName && (
                      <Icon
                        icon={
                          sortColumn.direction === "asc"
                            ? "sort-table-ascending"
                            : "sort-table-descending"
                        }
                      ></Icon>
                    )}
                    {column.name !== sortColumn?.columnName && (
                      <Icon icon="sort-table-none"></Icon>
                    )}
                  </Button>
                )}
                {!column.sortable && column.name}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedTableData.map((row) => (
            <tr key={row.join(",")}>
              {row.map((cell) => (
                <Td key={cell}>{cell}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  },
};

// TODO: Selectable rows, pagination
