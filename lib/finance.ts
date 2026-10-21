export const formatMoney = (n: number) => new Intl.NumberFormat('tr-TR', {maximumFractionDigits: 0}).format(n);
export function getNeed(price: number, deposit: number) {
  if (!Number.isFinite(price) || !Number.isFinite(deposit) || price <= 0 || deposit < 0 || deposit > price) return null;
  return price - deposit;
}
export function normalizePhone(value: string) {
  if (!/^[\d\s+().-]+$/.test(value)) return null;
  let n = value.replace(/\D/g, '');
  if (n.startsWith('90') && n.length === 12) n = n.slice(2);
  if (n.startsWith('0') && n.length === 11) n = n.slice(1);
  return /^5\d{9}$/.test(n) ? '+90'+n : null;
}
