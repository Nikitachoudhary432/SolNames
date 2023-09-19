import { createColumnHelper } from '@tanstack/react-table';

export type ActivityData = {
  time: string;
  domain: string;
  price: string;
  buyer: string;
};

const data: ActivityData[] = Array.from({ length: 12 }, () => ({
  time: '22s',
  domain: 'james.sol',
  price: '$5.00',
  buyer: '0x17c6d8djdjdjdjdjdjdjdjdjdjdjdjdjdj',
}));

const columnHelper = createColumnHelper<ActivityData>();

const columns = [
  columnHelper.accessor('time', {}),
  columnHelper.accessor('domain', {}),
  columnHelper.accessor('price', {}),
  columnHelper.accessor('buyer', {}),
];

export const tableConfig = {
  data,
  columns,
};
