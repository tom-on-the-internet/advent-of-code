import { assertEquals } from "jsr:@std/assert"
import { findRibbonSquareFeet, findWrappingPaperSquareFeet } from "./2015-02.ts"

Deno.test("find wrapping paper required", () => {
    assertEquals(findWrappingPaperSquareFeet(["2x3x4", "1x1x10"]), 58 + 43)
})
Deno.test("find ribbon required", () => {
    assertEquals(findRibbonSquareFeet(["2x3x4", "1x1x10"]), 34 + 14)
})
