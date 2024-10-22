import { assertEquals } from "jsr:@std/assert"
import { countNicerStrings, countNiceStrings } from "./2015-05.ts"

Deno.test("it counts nice strings", () => {
    assertEquals(
        countNiceStrings([
            "ugknbfddgicrmopn",
            "aaa",
            "jchzalrnumimnmhp",
            "haegwjzuvuyypxyu",
            "dvszwmarrgswjxmb",
        ]),
        2,
    )
})

Deno.test("it counts nicer strings", () => {
    assertEquals(
        countNicerStrings([
            "qjhvhtzxzqqjkmpb",
            "xxyxx",
            "uurcxstgmygtbstg",
            "ieodomkazucvgmuy",
        ]),
        2,
    )
})
