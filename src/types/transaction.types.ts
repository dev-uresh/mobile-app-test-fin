export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: 'debit' | 'credit';
}
