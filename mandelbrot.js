import Complex from './complex.js'

const cvs = document.querySelector('#cvs')
const ctx = cvs.getContext('2d')

let style_height = +getComputedStyle(cvs).getPropertyValue("height").slice(0, -2);
let style_width = +getComputedStyle(cvs).getPropertyValue("width").slice(0, -2);
const dpi = window.devicePixelRatio
cvs.setAttribute('height', String(style_height * dpi))
cvs.setAttribute('width', String(style_width * dpi))

const isInSet = (x, y) => {
    let re = x
    let im = y
    const maxIter = 100

    for (let i = 0; i < maxIter; i++) {
        let tempRe = re * re - im * im + x
        let tempIm = 2 * re * im + y
        re = tempRe
        im = tempIm

        if (re * im > 5) {
            return [i / maxIter * 360, re, im]
        }
    }
    return [0, 0, 0]
}

const abs = (x, y) => Math.sqrt(Math.pow(x, 2) - Math.pow(y, 2))

const mandelbrot = () => {
    const magniFactor = 200
    let panX = 5
    let panY = 2

    for (let x = 0; x < cvs.width; x++) {
        for (let y = 0; y < cvs.height; y++) {
            let [lightness, re, im] = isInSet(x / magniFactor - panX, y / magniFactor - panY)
            if (lightness === 0) {
                ctx.fillStyle = '#000'
                ctx.fillRect(x, y, 1, 1)
            } else {
                ctx.fillStyle = `hsl(${1 / abs(re, im) * 360}, 100%, ${lightness}%)`
                ctx.fillRect(x, y, 1, 1)
            }
        }
    }
}

mandelbrot()
