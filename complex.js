class Complex {
    constructor(num, im = 0) {
        if (num instanceof Complex) {
            this.re = num.re
            this.im = num.im
        } else {
            this.re = num
            this.im = im
        }
    }

    abs() {
        return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2))
    }

    add(other) {
        return new Complex(this.re + other.re, this.im + other.im)
    }

    mul(other) {
        return new Complex(this.re * other.re - this.im * other.image, this.re * other.im + this.im * other.re)
    }
}

export default Complex
