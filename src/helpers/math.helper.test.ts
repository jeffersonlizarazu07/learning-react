import { describe, expect, test } from 'vitest'
import { add, divide, multiliply, subtract } from './math.helper'


// describe('add', () => {
//     test('should add two positives numbers', () => {
//         // ! 1. Arrange

//         const a = 2;
//         const b = 2;

//         // ! 2. Act

//         const result = add(a, b)

//         // ! Assert

//         expect(result).toBe(a + b)
//     })
// })

// describe('subtract', () => {
//     test('should add two negative numbers', () => {


//         const a = 10
//         const b = 2

//         const result = subtract(a, b)
//         expect(result).toBe(a - b)
//     })
// })

describe('multiply', () => {
    test('should add two multiply numbers', () => {
        const a = 10
        const b = 2

        const result = multiliply(a, b)
        console.log({result})
        expect(result).toBe(a * b)
    })
})