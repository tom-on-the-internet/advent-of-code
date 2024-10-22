import { md5 } from "@takker/md5"
import { encodeHex } from "jsr:@std/encoding@1/hex"

export function lowestMatchingHash5zeroes(input: string): number {
    let num = 1
    while (true) {
        let hash = encodeHex(md5(input + num))
        if (hash.startsWith("00000")) return num
        num++
    }
}

export function lowestMatchingHash6zeroes(input: string): number {
    let num = 1
    while (true) {
        let hash = encodeHex(md5(input + num))
        if (hash.startsWith("000000")) return num
        num++
    }
}
