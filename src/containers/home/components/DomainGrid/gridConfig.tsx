import { createColumnHelper } from '@tanstack/react-table';
import { BuyAction } from './components/BuyAction';
import { DomainCell } from './components/DomainCell';

export type DomainData = {
  NameServices: string;
  Registration: string;
  Sales: string;
  Volume: string;
  UniqueHolders: string;
};

const data: DomainData[] = Array.from({ length: 2 }, () => ({
  NameServices: '.SOLANA',
  Registration: '0',
  Sales: '0',
  Volume: '0',
  UniqueHolders: '0',
}));

const columnHelper = createColumnHelper<DomainData>();

const columns = [
  columnHelper.accessor('NameServices', {
    header: 'Name Services',
    cell: (info) => <DomainCell name={info.cell.getValue()} />,
  }),

  columnHelper.accessor('Registration', {}),

  columnHelper.accessor('Sales', {}),

  columnHelper.accessor('Volume', {}),

  columnHelper.accessor('UniqueHolders', {}),

  // columnHelper.display({
  //   id: 'action',
  //   header: 'Action',
  //   cell: (info) => {
  //     return <BuyAction />;
  //   },
  // }),
];

export const GridConfig = {
  data,
  columns,
};
