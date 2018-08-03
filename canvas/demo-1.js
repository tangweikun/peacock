export function createDemo1() {
  const ctx = wx.createCanvasContext('demo-1')
  ctx.fillRect(25, 25, 100, 100)
  ctx.clearRect(45, 45, 60, 60)
  ctx.strokeRect(50, 50, 50, 50)
  ctx.draw()
}
