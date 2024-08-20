import { NumberProp } from "./NumberProp.js";

export class StarNumberGenerator extends NumberProp {
    constructor(number) {
        super("star", number);
    }

    // Check if a number is a star number
    isStarNumber(n) {
        // Reverse calculation to check if n is a star number
        const discriminant = 1 + 24 * n;
        const sqrtDiscriminant = Math.sqrt(discriminant);
        return sqrtDiscriminant % 1 === 0 && (sqrtDiscriminant + 1) % 6 === 0;
    }

    // Get the nth star number
    getStarNumber(n) {
        return (6 * n * (n - 1) + 1) / 2;
    }

    // Function to get the position of n in a list of star numbers <= n
    getPosition() {
        let i = 1;
        while (true) {
            const starNum = this.getStarNumber(i);
            if (starNum === this.number) {
                return i;
            }
            if (starNum > this.number) {
                return -1; // If number is not a star number or not found
            }
            i++;
        }
    }

    // Function to get the nth star number of this instance's number
    getNth() {
        return this.getStarNumber(this.number);
    }

    // Function to get the index of the instance's number in the sequence of star numbers
    getIndexOfN() {
        return this.getPosition();
    }

    // Check if the instance's number is a star number
    isStarNumberInstance() {
        return this.isStarNumber(this.number);
    }
}
