import { createColumnHelper } from '@tanstack/react-table';
import { BuyAction } from './components/BuyAction';
import { DomainCell } from './components/DomainCell';


export type DomainData = {
  domain: string;
  expiration: string;
  price: string;
};

const data: DomainData[] = Array.from({ length: 8 }, () => ({
  domain: 'Jamalmusa.solana',
  expiration: '1 Year',
  price: '25 Sol',
}));

const columnHelper = createColumnHelper<DomainData>();

const columns = [
  columnHelper.accessor('domain', {
    header: 'Domains',
    cell: (info) => <DomainCell name={info.cell.getValue()} />,
  }),

  columnHelper.accessor('expiration', {}),

  columnHelper.accessor('price', {}),

  columnHelper.display({
    id: 'action',
    header: 'Action',
    cell: (info) => {
      return <BuyAction />;
    },
  }),
];

export const GridConfig = {
  data,
  columns,
};
