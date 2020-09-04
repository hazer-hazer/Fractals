import Complex from './complex.js'

const cvs = document.querySelector('#cvs')
const ctx = cvs.getContext('2d')

let style_height = +getComputedStyle(cvs).getPropertyValue("height").slice(0, -2);
let style_width = +getComputedStyle(cvs).getPropertyValue("width").slice(0, -2);
const dpi = window.devicePixelRatio
cvs.setAttribute('height', String(style_height * dpi))
cvs.setAttribute('width', String(style_width * dpi))

const drawDot = (x, y, color = '#000000') => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, 1, 1)
}

const mandelbrot = () => {
    const epsilon = 0.01
    const maxIter = 10
    const maxColors = 256

    let z
    let c
    let iter

    ctx.translate(cvs.width / 2, cvs.height / 2)

    for (let x = -2; x <= 2; x += epsilon) {
        for (let y = -2; y <= 2; y += epsilon) {
            iter = 0
            c = new Complex(x, y)
            z = new Complex(0, 0)
            while (z.abs() < 2 && iter < maxIter) {
                console.log(z.abs())
                z = z.mul(z).add(c)
                console.log(z)
                iter++
            }
            drawDot(x * 100, y * 100)
        }
    }
}

mandelbrot()
