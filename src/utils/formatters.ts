export function formatAmount(amount: number) {
  return amount.toLocaleString();
}

export function formatAccountNumber(value: string) {
  return value.replace(/(\d{4})(?=\d)/g, '$1 ');
}
