function generateScore() {
  const scores = [0, 1, 2, 3].map(_ => Math.round(90 + Math.random() * 10))
  const average = Math.round(scores.reduce((acc, n) => acc + n, 0) / 4)
  return { scores, average }
}

export function createLifeTranscript(userInfo = { nickName: '请先授权' }) {
  const { scores, average } = generateScore()
  const [appearance, intelligenceQuotient, nature, love] = scores

  const ctx = wx.createCanvasContext('life-transcript')
  ctx.fillStyle = '#DAE6B2'
  ctx.fillRect(0, 0, 280, 380)

  ctx.fillStyle = 'black'
  ctx.font = '20px sans-serif'
  ctx.fillText('人生成绩单', 90, 40)

  ctx.font = '14px sans-serif'
  ctx.fillText('姓名:', 20, 70)
  ctx.fillText(userInfo.nickName, 60, 70)
  ctx.fillText('平均分:', 190, 70)
  ctx.fillStyle = 'red'
  ctx.font = 'italic bold 16px sans-serif'
  ctx.fillText(average, 244, 70)

  ctx.beginPath()
  ctx.fillStyle = '#32689B'
  ctx.arc(50, 120, 24, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 14px sans-serif'
  ctx.fillText('颜值', 36, 125)
  ctx.fillStyle = 'black'
  ctx.font = '12px sans-serif'
  ctx.fillText(appearance + '分', 86, 115)
  ctx.fillText('一枝独秀压海棠,玉树临风胜潘安', 86, 135)

  ctx.beginPath()
  ctx.fillStyle = '#42BFAD'
  ctx.arc(50, 180, 24, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 14px sans-serif'
  ctx.fillText('智商', 36, 185)
  ctx.fillStyle = 'black'
  ctx.font = '12px sans-serif'
  ctx.fillText(intelligenceQuotient + '分', 86, 175)
  ctx.fillText('天生聪颖,眼光独到', 86, 195)

  ctx.beginPath()
  ctx.fillStyle = '#562673'
  ctx.arc(50, 240, 24, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 14px sans-serif'
  ctx.fillText('性格', 36, 245)
  ctx.fillStyle = 'black'
  ctx.font = '12px sans-serif'
  ctx.fillText(nature + '分', 86, 235)
  ctx.fillText('对朋友很有义气,EQ高', 86, 255)

  ctx.beginPath()
  ctx.fillStyle = '#BCA043'
  ctx.arc(50, 300, 24, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 14px sans-serif'
  ctx.fillText('恋爱', 36, 305)
  ctx.fillStyle = 'black'
  ctx.font = '12px sans-serif'
  ctx.fillText(love + '分', 86, 295)
  ctx.fillText('超级护短,能将另一半宠上天', 86, 315)

  ctx.drawImage('/statics/images/qr-code.jpg', 230, 330, 50, 50)

  ctx.draw()
}
