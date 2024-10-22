export function countNiceStrings(input: Array<string>): number {
    const VOWELS = ["a", "e", "i", "o", "u"]
    let total = 0

    for (let str of input) {
        let vowelCount = 0
        let hasDouble = false
        let hasIllegalPattern = false

        for (let i = 0; i < str.length; i++) {
            let char = str[i]
            if (VOWELS.some((v) => v === char)) {
                vowelCount++
            }
            if (i === 0) {
                continue
            }
            let prev = str[i - 1]

            if (char === prev) {
                hasDouble = true
            }

            if (
                (char === "b" && prev === "a") ||
                (char === "d" && prev === "c") ||
                (char === "q" && prev === "p") ||
                (char === "y" && prev === "x")
            ) {
                hasIllegalPattern = true
                break
            }
        }

        if (hasDouble && vowelCount >= 3 && !hasIllegalPattern) {
            total++
        }
    }

    return total
}

export function countNicerStrings(input: Array<string>): number {
    let total = 0

    for (let str of input) {
        let hasTwoUniquePairs = false
        let hasLetterRepeatsWithSingleSeparator = false
        let set = new Set<string>()

        for (let i = 0; i < str.length; i++) {
            if (i <= 1) {
                continue
            }

            // these patterns require us to know the last 3 chars
            let char = str[i]
            let prev = str[i - 1]
            let prevPrev = str[i - 2]

            if (char === prevPrev) {
                hasLetterRepeatsWithSingleSeparator = true
            }

            if (set.has(prev + char)) {
                hasTwoUniquePairs = true
            }

            // only add once we know we're not overlapping
            set.add(prevPrev + prev)
        }

        if (hasTwoUniquePairs && hasLetterRepeatsWithSingleSeparator) {
            total++
        }
    }

    return total
}
