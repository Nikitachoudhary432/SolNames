import { useState } from 'react';
import { GridConfig } from './gridConfig';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styled from '@emotion/styled';

export const DomainGrid = () => {
  const [data, _setData] = useState(GridConfig.data);

  const table = useReactTable({
    data,
    columns: GridConfig.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Wrapper className="p-6 sm:w-full  lg:w-full">
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
  // width: 1000px;
  background-color: #201e1e;
  border-radius: 20px;
  // padding: 20px;
  overflow: auto;
  table {
    display: grid;
    gap: 20px;
    width: 100%;
  }

  thead {
    border-bottom: 1px solid #696363;
    padding-block: 10px;
  }

  tbody {
    display: grid;
    gap: 20px;
  }

  tr {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) repeat(3, 150px);
  }

  td,
  th {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Plus Jakarta Sans;
    font-weight: 600;
    /* border: 1px solid white; */

    &:first-of-type {
      justify-content: flex-start;
    }
  }

  th {
    color: #becfcd;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
  }

  td {
    color: #fff;
    font-size: 14px;
    line-height: 28px;
  }
`;
