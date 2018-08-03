export function createDemo4() {
  const ctx = wx.createCanvasContext('demo-4')

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath()
      const x = 25 + j * 50
      const y = 25 + i * 50
      const radius = 20
      const startAngle = 0
      const endAngle = Math.PI + (Math.PI * j) / 2
      const anticlockwise = i % 2 !== 0
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
      if (i > 1) {
        ctx.fill()
      } else {
        ctx.stroke()
      }
    }
  }

  ctx.draw()
}
