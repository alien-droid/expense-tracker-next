export function numberCommas(amount: number): string {
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}