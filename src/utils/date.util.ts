const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export function get_date_birth(birth: string): string {
  const date = new Date(birth);
  const year = date.getFullYear();
  return date.getDate() + 1 + " de " + meses[date.getMonth()] + ", " + year;
}
export function get_date_work(birth: string): string {
  const date = new Date(birth);
  const year = date.getFullYear();
  return meses[date.getMonth()] + " " + year;
}
