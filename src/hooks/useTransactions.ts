import { useAppSelector } from './useStore';

export function useTransactions() {
  const transactions = useAppSelector((state) => state.transactions.transactions);
  return { transactions };
}
