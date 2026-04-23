export function isRequired(value: string) {
  return value.trim().length > 0;
}

export function isNumeric(value: string) {
  return /^\d+(\.\d+)?$/.test(value);
}
