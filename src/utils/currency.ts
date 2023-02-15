export default function currency(num: number) {
  return `$ ${new Intl.NumberFormat().format(num)}`
}
