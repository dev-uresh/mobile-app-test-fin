import { useAppSelector } from './useStore';

export function useBalance() {
  const balance = useAppSelector((state) => state.account.balance);
  return { balance };
}
