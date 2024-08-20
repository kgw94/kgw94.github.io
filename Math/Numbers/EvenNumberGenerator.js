import { NumberProp } from "./NumberProp.js";

export class EvenNumberGenerator extends NumberProp {
    constructor(number) {
        super("even", number);
    }

    // Check if a number is even
    isEven() {
        return this.number % 2 === 0;
    }

    // Get the nth even number
    getEvenNumber(n) {
        return 2 * n;
    }

    // Get the position of this.number in the sequence of even numbers
    getPosition() {
        if (this.number % 2 !== 0) {
            return -1; // Odd number is not in the sequence of even numbers
        }
        return this.number / 2;
    }

    // Function to return the nth even number of this instance's number
    getNth() {
        return this.getEvenNumber(this.number);
    }

    // Function to return the position of the instance's number in the sequence of even numbers
    getIndexOfN() {
        return this.getPosition();
    }
}
