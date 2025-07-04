// import { NumberProp } from "./NumberProp.js";
//
// export class SquareFreeNumberGenerator extends NumberProp {
//     constructor(number) {
//         super("square-free", number);
//     }
//
//     // Check if a number is square-free
//     isSquareFree(n) {
//         if (n < 1) return false;
//         for (let i = 2; i * i <= n; i++) {
//             if (n % (i * i) === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//
//     // Get the nth square-free number
//     getSquareFreeNumber(n) {
//         let count = 0;
//         let num = 1;
//         while (count < n) {
//             if (this.isSquareFree(num)) {
//                 count++;
//             }
//             num++;
//         }
//         return num - 1; // Adjust for the last increment
//     }
//
//     // Generate square-free numbers up to a given maximum value
//     getSquareFreeNumbersUpTo(max) {
//         let squareFreeNumbers = [];
//         for (let i = 1; i <= max; i++) {
//             if (this.isSquareFree(i)) {
//                 squareFreeNumbers.push(i);
//             }
//         }
//         return squareFreeNumbers;
//     }
//
//     // Get the position of a specific number if it is square-free
//     getPositionOfNumber() {
//         if (!this.isSquareFree(this.number)) {
//             return -1;
//         }
//         let count = 0;
//         let num = 1;
//         while (num <= this.number) {
//             if (this.isSquareFree(num)) {
//                 count++;
//             }
//             num++;
//         }
//         return count;
//     }
//
//     // Get the index of the instance's number in the sequence of square-free numbers
//     getIndexOfN() {
//         return this.getPositionOfNumber();
//     }
//
//     // Check if the instance's number is square-free
//     isSquareFreeInstance() {
//         return this.isSquareFree(this.number);
//     }
// }

/**
 * Improved SquareFreeNumberGenerator
 * - Adds argument validation
 * - Refactors method names for clarity
 * - Adds comments and modern JS practices
 */

import { NumberProp } from "./NumberProp.js";

/**
 * Generates and checks square-free numbers.
 */
export class SquareFreeNumberGenerator extends NumberProp {
    constructor(number) {
        super("square-free", number);
    }

    /**
     * Check if a number is square-free.
     * @param {number} n - The number to check.
     * @returns {boolean}
     */
    isSquareFree(n) {
        if (!Number.isInteger(n) || n < 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % (i * i) === 0) return false;
        }
        return true;
    }

    /**
     * Get the nth square-free number.
     * @param {number} n
     * @returns {number}
     */
    getSquareFreeNumber(n) {
        if (!Number.isInteger(n) || n < 1) throw new Error("n must be a positive integer");
        let count = 0, num = 1;
        while (count < n) {
            if (this.isSquareFree(num)) count++;
            num++;
        }
        return num - 1;
    }

    /**
     * Generate all square-free numbers up to max (inclusive).
     * @param {number} max
     * @returns {number[]}
     */
    getSquareFreeNumbersUpTo(max) {
        if (!Number.isInteger(max) || max < 1) return [];
        const result = [];
        for (let i = 1; i <= max; i++) {
            if (this.isSquareFree(i)) result.push(i);
        }
        return result;
    }

    /**
     * Get the index (1-based) of this.number if it is square-free, or -1.
     * @returns {number}
     */
    getIndexOfNumber() {
        if (!this.isSquareFree(this.number)) return -1;
        let count = 0;
        for (let i = 1; i <= this.number; i++) {
            if (this.isSquareFree(i)) count++;
        }
        return count;
    }

    /**
     * Check if the instance's number is square-free.
     * @returns {boolean}
     */
    isSquareFreeInstance() {
        return this.isSquareFree(this.number);
    }
}
