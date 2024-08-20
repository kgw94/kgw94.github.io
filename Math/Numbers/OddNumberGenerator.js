import { NumberProp } from "./NumberProp.js";

export class OddNumberGenerator extends NumberProp {
    constructor(number) {
        super("odd", number);
    }

    // Check if a number is odd
    isOdd() {
        return this.number % 2 !== 0;
    }

    // Get the nth odd number
    getOddNumber(n) {
        return 2 * n - 1;
    }

    // Get the position of this.number in the sequence of odd numbers
    getPosition() {
        if (this.number % 2 === 0) {
            return -1; // Even number is not in the sequence of odd numbers
        }
        return (this.number + 1) / 2;
    }

    // Function to return the nth odd number of this instance's number
    getNth() {
        return this.getOddNumber(this.number);
    }

    // Function to return the position of the instance's number in the sequence of odd numbers
    getIndexOfN() {
        return this.getPosition();
    }
}
