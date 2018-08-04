const { LEARNING_LEVEL } = require('../constants/index')

function generateScore() {
  const scores = [0, 1, 2, 3].map(_ => Math.round(90 + Math.random() * 10))
  const average = Math.round(scores.reduce((acc, n) => acc + n, 0) / 4)
  return { scores, average }
}

export function createElementaryTextbooks(
  userInfo = { nickName: '请先授权' },
  score,
) {
  const { scores, average } = generateScore()
  const [appearance, intelligenceQuotient, nature, love] = scores

  const BOY_GIRL = ['girlDesc', 'boyDesc']
  const index = Math.round(Math.random() * 2)
  const description = LEARNING_LEVEL[score][BOY_GIRL[userInfo.gender]][index]
  const ctx = wx.createCanvasContext('elementary-textbooks')

  ctx.fillStyle = '#B2C9E6'
  ctx.fillRect(0, 0, 306, 225)

  ctx.drawImage(
    '/statics/images/elementary-textbooks/award.png',
    0,
    0,
    306,
    225,
  )

  // ctx.font = '20px sans-serif'
  // ctx.fillText('小学语文知识考查', 60, 40)
  // ctx.fillText('成绩单', 110, 60)

  ctx.fillStyle = 'black'
  ctx.font = '14px sans-serif'
  ctx.fillText(userInfo.nickName + ' 同学:', 40, 110)

  ctx.fillText(description, 56, 132)
  ctx.fillText('被评为', 40, 155)

  ctx.fillStyle = 'red'
  ctx.font = 'italic bold 16px sans-serif'
  ctx.fillText(LEARNING_LEVEL[score].title, 90, 155)

  // ctx.fillStyle = 'black'
  // ctx.font = '14px sans-serif'
  // ctx.fillText('称号。特发此状,以资鼓励!', 110, 150)

  ctx.drawImage('/statics/images/qr-code.jpg', 256, 175, 50, 50)
  // ctx.drawImage(userInfo.avatarUrl, 0, 175, 50, 50)

  ctx.draw()
}
