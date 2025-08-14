import type { Meta, StoryObj } from "@storybook/react";
import {
  SelectAllRowsCheckbox,
  SelectRowCheckbox,
  Table,
  Td,
  Th,
  Tr,
} from "../../components/Table/Table";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { Icon } from "../../components/Shared/Icon";
import { ScreenReaderLabel } from "../../components/ScreenReaderLabel/ScreenReaderLabel";

const meta = {
  title: "DKFDS/Tables",
  component: Table,
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
          <Tr>
            {tableData.columns.map((column) => (
              <Th scope="col" key={column.name}>
                {column.name}
              </Th>
            ))}
          </Tr>
        </thead>
        <tbody>
          {tableData.rows.map((row) => (
            <Tr key={row.join(",")}>
              {row.map((cell) => (
                <Td key={cell}>{cell}</Td>
              ))}
            </Tr>
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
          <Tr>
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
          </Tr>
        </thead>
        <tbody>
          {sortedTableData.map((row) => (
            <Tr key={row.join(",")}>
              {row.map((cell) => (
                <Td key={cell}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
    );
  },
};

export const ResponsiveTable: Story = {
  render: () => (
    <Table responsiveHeaders="sm">
      <thead>
        <Tr>
          {tableData.columns.map((column) => (
            <Th scope="col" key={column.name}>
              {column.name}
            </Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {tableData.rows.map((row) => (
          <Tr key={row.join(",")}>
            {row.map((cell, i) => (
              <Td
                thResponsiveTitle={tableData.columns[i].name}
                responsiveHeadersSize={"sm"}
                key={cell}
              >
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </Table>
  ),
};

export const SelectableTable: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    return (
      <Table selectable>
        <thead>
          <Tr>
            <Th>
              <SelectAllRowsCheckbox
                onDeselectedAll={() => setSelectedRows([])}
                onSelectedAll={() =>
                  setSelectedRows(
                    Array(tableData.rows.length)
                      .fill(0)
                      .map((_, i) => i),
                  )
                }
                rowIds={Array(tableData.rows.length)
                  .fill(0)
                  .map((_, i) => `selectable-row-${i}`)}
                totalRowsCount={tableData.rows.length}
                selectedRowsCount={selectedRows.length}
              ></SelectAllRowsCheckbox>
            </Th>
            {tableData.columns.map((column) => (
              <Th scope="col" key={column.name}>
                {column.name}
              </Th>
            ))}
          </Tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, i) => (
            <Tr key={row.join(",")} selected={selectedRows.includes(i)}>
              <Td>
                <SelectRowCheckbox
                  checked={selectedRows.includes(i)}
                  onRowSelected={(checked) => {
                    setSelectedRows((prev) =>
                      checked
                        ? [...prev, i]
                        : prev.filter((rowIndex) => rowIndex !== i),
                    );
                  }}
                  id={`selectable-row-${i}`}
                ></SelectRowCheckbox>
              </Td>
              {row.map((cell) => (
                <Td key={cell}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
    );
  },
};

// TODO: Selectable rows, pagination
