export function turnOnLights(instructions: Array<string>): number {
    // don't make a 2d array
    // just use a map, and add what you need
    let map = new Map<string, true>()

    for (let instruction of instructions) {
        let matches = instruction.match(/(\d+,\d+)/g) as RegExpMatchArray
        let [start, end] = matches.map((coord) => coord.split(",").map(Number))

        let action = "toggle"
        if (instruction.startsWith("turn on")) {
            action = "turn on"
        } else if (instruction.startsWith("turn off")) {
            action = "turn off"
        }

        for (let x = start[0]; x <= end[0]; x++) {
            for (let y = start[1]; y <= end[1]; y++) {
                if (action === "turn on") {
                    map.set(x + "," + y, true)
                }

                if (action === "turn off") {
                    map.delete(x + "," + y)
                }

                if (action === "toggle") {
                    if (map.has(x + "," + y)) {
                        map.delete(x + "," + y)
                    } else {
                        map.set(x + "," + y, true)
                    }
                }
            }
        }
    }

    return map.size
}
export function turnOnLightsPartTwo(instructions: Array<string>): number {
    // don't make a 2d array
    // just use a map, and add what you need
    let map = new Map<string, number>()

    for (let instruction of instructions) {
        let matches = instruction.match(/(\d+,\d+)/g) as RegExpMatchArray
        let [start, end] = matches.map((coord) => coord.split(",").map(Number))

        let action = "toggle"
        if (instruction.startsWith("turn on")) {
            action = "turn on"
        } else if (instruction.startsWith("turn off")) {
            action = "turn off"
        }

        for (let x = start[0]; x <= end[0]; x++) {
            for (let y = start[1]; y <= end[1]; y++) {
                if (action === "turn on") {
                    map.set(x + "," + y, (map.get(x + "," + y) ?? 0) + 1)
                }

                if (action === "turn off") {
                    map.set(
                        x + "," + y,
                        Math.max((map.get(x + "," + y) ?? 0) - 1, 0),
                    )
                }

                if (action === "toggle") {
                    map.set(x + "," + y, (map.get(x + "," + y) ?? 0) + 2)
                }
            }
        }
    }

    let total = 0
    map.forEach((v) => total += v)

    return total
}
