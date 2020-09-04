class Complex {
    constructor(num, im = 0) {
        if (num instanceof Complex) {
            this.re = num.re
            this.im = num.im
        } else if(typeof num === 'number' && typeof im === 'number') {
            this.re = num
            this.im = im
        } else {
            throw new Error('Invalid params in Complex constructor')
        }
    }

    abs() {
        return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2))
    }

    add(other) {
        return new Complex(this.re + other.re, this.im + other.im)
    }

    mul(other) {
        return new Complex(this.re * other.re - this.im * other.im, this.re * other.im + this.im * other.re)
    }
}

const complexTests = () => {
    let z1 = new Complex(1, 3)
    let z2 = new Complex(2, 5)

    console.log(z1.add(z2))
    console.log(z1.mul(z2))
}

complexTests()

export default Complex
