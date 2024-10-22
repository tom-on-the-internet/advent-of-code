export function howManyHouses(input: string): number {
    let x = 0
    let y = 0

    // a set let's us keep a record of unique values
    let set = new Set<string>()

    set.add(`x:${x},y:${y}`)

    for (let char of input) {
        switch (char) {
            case "^":
                y--
                break
            case "v":
                y++
                break
            case "<":
                x--
                break
            case ">":
                x++
                break
        }
        set.add(`x:${x},y:${y}`)
    }

    return set.size
}

export function howManyHousesWithRoboSanta(input: string): number {
    let santa = { x: 0, y: 0 }
    let robo = { x: 0, y: 0 }

    // a set let's us keep a record of unique values
    let set = new Set<string>()

    set.add(`x:0,y:0`)

    let isSantaTurn = true
    for (let char of input) {
        let giver = isSantaTurn ? santa : robo
        switch (char) {
            case "^":
                giver.y--
                break
            case "v":
                giver.y++
                break
            case "<":
                giver.x--
                break
            case ">":
                giver.x++
                break
        }
        set.add(`x:${giver.x},y:${giver.y}`)
        isSantaTurn = !isSantaTurn
    }

    return set.size
}
