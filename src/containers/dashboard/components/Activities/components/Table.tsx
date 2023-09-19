import { useState } from 'react';
import { tableConfig } from '../tableConfig';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styled from '@emotion/styled';

export const ActivitiesTable = () => {
  const [data, _setData] = useState(tableConfig.data);

  const table = useReactTable({
    data: data.map((d) => ({ ...d, buyer: d.buyer.substring(0, 6) + '..' })),
    columns: tableConfig.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Wrapper className="p-6 sm:w-full w-full lg:w-full">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: auto;
  table {
    display: grid;
    gap: 20px;
    width: 100%;
  }

  tbody {
    display: grid;
    gap: 5px;
  }

  tr {
    display: grid;
    /* grid-template-columns: 75px 1fr 90px 50px; */
    grid-template-columns: minmax(75px, 1fr) repeat(3, 90px);
  }

  td,
  th {
    color: #808f93;
    text-align: left;
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 26px;
  }

  th {
    text-transform: capitalize;

    &:first-of-type {
      color: var(--green);
    }
  }
`;
