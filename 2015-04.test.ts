import { assertEquals } from "jsr:@std/assert"
import {
    lowestMatchingHash5zeroes,
    lowestMatchingHash6zeroes,
} from "./2015-04.ts"

Deno.test("find lowest matching hash 5 zeroes", () => {
    assertEquals(lowestMatchingHash5zeroes("abcdef"), 609043)
    assertEquals(lowestMatchingHash5zeroes("pqrstuv"), 1048970)
})

Deno.test("find lowest matching hash 6 zeroes", () => {
    assertEquals(lowestMatchingHash6zeroes("bgvyzdsv"), 1038736)
})
