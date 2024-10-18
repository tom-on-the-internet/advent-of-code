export function findWrappingPaperSquareFeet(input: Array<string>): number {
    let grandTotal = 0

    for (let item of input) {
        // dimensions, smallest to largest
        let [a, b, c] = item.split("x").map(Number).sort((a, b) => a - b)

        // the 3 is because we need slack
        let itemTotal = (a * b * 3) + (a * c * 2) + (b * c * 2)
        grandTotal += itemTotal
    }

    return grandTotal
}

export function findRibbonSquareFeet(input: Array<string>): number {
    let grandTotal = 0

    for (let item of input) {
        // dimensions, smallest to largest
        let [a, b, c] = item.split("x").map(Number).sort((a, b) => a - b)

        // the 3 is because we need slack
        let itemTotal = a + a + b + b + (a * b * c)
        grandTotal += itemTotal
    }

    return grandTotal
}
