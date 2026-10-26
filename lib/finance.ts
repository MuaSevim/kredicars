export const formatMoney = (n: number) => new Intl.NumberFormat('tr-TR', {maximumFractionDigits: 0}).format(n);
function validModel(amount:number, rate:number, months:number) {
  return Number.isFinite(amount) && amount > 0 && Number.isFinite(rate) && rate >= 0 && Number.isInteger(months) && months > 0 && months <= 600;
}
export function monthlyPayment(principal:number, monthlyRate:number, months:number):number|null {
  if (!validModel(principal,monthlyRate,months)) return null;
  if (monthlyRate === 0) return principal / months;
  return principal * monthlyRate / -Math.expm1(-months * Math.log1p(monthlyRate));
}
export function principalFromPayment(payment:number, monthlyRate:number, months:number):number|null {
  if (!validModel(payment,monthlyRate,months)) return null;
  if (monthlyRate === 0) return payment * months;
  return payment * -Math.expm1(-months * Math.log1p(monthlyRate)) / monthlyRate;
}
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
