/**
 * This code is modified from https://github.com/hustcc/ribbon.js/blob/master/src/ribbon.js
 */

interface Point {
  x: number
  y: number
}

export default function initRibbonUnder(selector: string) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const pixelRatio = window.devicePixelRatio || 1
  const width = window.innerWidth
  const height = window.innerHeight

  const alpha = 0.6
  const size = 90

  let q: Point[] = []
  let t
  let r = 0

  canvas.width = width * pixelRatio
  canvas.height = height * pixelRatio
  ctx.globalAlpha = alpha
  ctx.scale(pixelRatio, pixelRatio)
  canvas.style.cssText = `opacity: ${alpha}; position: fixed; top: 0; left: 0; z-index: -999; width: 100%; height: 100%; pointer-events: none;`

  // create canvas
  document.querySelector(selector)!.appendChild(canvas)

  function redraw() {
    ctx.clearRect(0, 0, width, height)
    q = [
      { x: 0, y: height * 0.7 + size },
      { x: 0, y: height * 0.7 - size },
    ]
    while (q[1].x < width + size) draw(q[0], q[1])
  }

  function draw(a: Point, b: Point) {
    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    const k = b.x + (Math.random() * 2 - 0.25) * size
    const n = line(b.y)
    ctx.lineTo(k, n)
    ctx.closePath()
    r -= (Math.PI * 2) / -50
    ctx.fillStyle =
      '#' +
      (
        ((Math.cos(r) * 127 + 128) << 16) |
        ((Math.cos(r + (Math.PI * 2) / 3) * 127 + 128) << 8) |
        (Math.cos(r + ((Math.PI * 2) / 3) * 2) * 127 + 128)
      ).toString(16)
    ctx.fill()
    q[0] = q[1]
    q[1] = { x: k, y: n }
  }
  function line(p: number): number {
    t = p + (Math.random() * 2 - 1.1) * size
    return t > height || t < 0 ? line(p) : t
  }

  document.addEventListener('click', redraw)
  document.addEventListener('touchstart', redraw)

  redraw()
}
