import { assertEquals } from "jsr:@std/assert"
import { findFloor, firstBasementEntry } from "./2015-01.ts"

Deno.test("santa can find the right floor", () => {
    assertEquals(findFloor("(())"), 0)
    assertEquals(findFloor("()()"), 0)
    assertEquals(findFloor("))((((("), 3)
})

Deno.test("santa can find step that leads to basement", () => {
    assertEquals(firstBasementEntry(")"), 1)
    assertEquals(firstBasementEntry("()())"), 5)
})
