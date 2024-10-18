export function findFloor(input: string): number {
    let floor = 0

    for (let char of input) {
        if (char === "(") {
            floor++
        } else {
            floor--
        }
    }

    return floor
}

export function firstBasementEntry(input: string): number {
    let floor = 0

    for (let i = 0; i < input.length; i++) {
        let char = input[i]
        if (char === "(") {
            floor++
        } else {
            floor--
        }
        if (floor === -1) {
            return i + 1
        }
    }

    return 0
}
