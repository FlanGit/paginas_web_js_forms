/* export function factorial (n) {
    if (n <= 0) { return}
    if (n === 1) { return 1}
    return n * factorial (n-1)
} */

export function factorial (n) {
    if (n <= 0) { return}
    return (n === 1)  ? 1 : n * factorial (n-1)
}