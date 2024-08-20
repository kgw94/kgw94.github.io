import { NumberProp } from "./NumberProp.js";

export class SquareFreeNumberGenerator extends NumberProp {
    constructor(number) {
        super("square-free", number);
    }

    // Check if a number is square-free
    isSquareFree(n) {
        if (n < 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % (i * i) === 0) {
                return false;
            }
        }
        return true;
    }

    // Get the nth square-free number
    getSquareFreeNumber(n) {
        
        let count = 0;
        let num = 1;
        while (count < n) {
            if (this.isSquareFree(num)) {
                count++;
            }
            num++;
        }
        return num - 1; // Adjust for the last increment
    }

    // Generate square-free numbers up to a given maximum value
    getSquareFreeNumbersUpTo(max) {
        let squareFreeNumbers = [];
        for (let i = 1; i <= max; i++) {
            if (this.isSquareFree(i)) {
                squareFreeNumbers.push(i);
            }
        }
        return squareFreeNumbers;
    }

    // Get the position of a specific number if it is square-free
    getPositionOfNumber() {
        if (!this.isSquareFree(this.number)) {
            return -1;
        }
        let count = 0;
        let num = 1;
        while (num <= this.number) {
            if (this.isSquareFree(num)) {
                count++;
            }
            num++;
        }
        return count;
    }

    // Get the index of the instance's number in the sequence of square-free numbers
    getIndexOfN() {
        return this.getPositionOfNumber();
    }

    // Check if the instance's number is square-free
    isSquareFreeInstance() {
        return this.isSquareFree(this.number);
    }
}
