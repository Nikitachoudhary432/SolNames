import { useState } from 'react';
import { GridConfig } from './gridConfig';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styled from '@emotion/styled';
import { FiArrowUpRight } from 'react-icons/fi';

export const DomainGrid = () => {
  const [data, _setData] = useState(GridConfig.data);

  const table = useReactTable({
    data,
    columns: GridConfig.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Wrapper className="p-6 sm:w-4/5 w-5/6 lg:w-4/5">
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
              <th>
                <select className="bg-[#1b1b1b] outline-none border-none rounded-lg p-1">
                  <option value="">24</option>
                  <option value="">12</option>
                  <option value="">08</option>
                  <option value="">04</option>
                </select>
              </th>
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={cell.id} className="flex  gap-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {index === 0 && <FiArrowUpRight className="text-xl" />}
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
  background-color: black;
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
    grid-template-columns: minmax(200px, 1fr) repeat(5, 150px);
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
