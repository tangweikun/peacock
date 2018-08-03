export function createDemoTriangle() {
  const ctx = wx.createCanvasContext('demo-triangle')
  ctx.beginPath()
  ctx.moveTo(40, 20)
  ctx.lineTo(40, 60)
  ctx.lineTo(0, 0)
  ctx.lineTo(0, 80)
  ctx.fill()
  ctx.draw()
}
