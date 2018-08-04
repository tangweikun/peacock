const app = getApp()
const { TEXTBOOKS, LIAR_LEVEL } = require('../../constants/index.js')
const { createElementaryTextbooks } = require('../../canvas/index')
const { saveCanvas } = require('../../utils/index')

Page({
  data: {
    questions: TEXTBOOKS,
    current: 0,
    currentQuestion: {},
    score: 0,
    currentAnswer: '',
    gameover: false,
    progress: '0',
    liarLever: LIAR_LEVEL,
  },

  onLoad: function() {
    this.setData({
      currentQuestion: TEXTBOOKS[0],
    })
  },

  onShareAppMessage: function() {
    return {
      title: '我不是学霸?',
      path: '/pages/index/index',
    }
  },

  _saveCanvas: function() {
    saveCanvas('elementary-textbooks')
  },

  _goNextQuestion: function() {
    if (this.data.currentQuestion.answer === this.data.currentAnswer) {
      this.setData({
        score: this.data.score + 1,
        currentQuestion: this.data.questions[this.data.current],
        currentAnswer: '',
      })
    } else {
      this.setData({
        currentQuestion: this.data.questions[this.data.current],
        currentAnswer: '',
      })
    }
  },

  _goResultPage: function() {
    if (this.data.currentQuestion.answer === this.data.currentAnswer) {
      this.setData({
        score: this.data.score + 1,
        currentQuestion: {},
        currentAnswer: '',
        gameover: true,
      })
    } else {
      this.setData({
        currentQuestion: {},
        currentAnswer: '',
        gameover: true,
      })
    }

    createElementaryTextbooks(app.globalData.userInfo, this.data.score)
  },

  radioChange: function(e) {
    if (this.data.currentAnswer === '') {
      this.setData({
        currentAnswer: e.detail.value,
        current: this.data.current + 1,
        progress:
          (100 * (this.data.current + 1)) / this.data.questions.length + '%',
      })
    } else {
      this.setData({
        currentAnswer: e.detail.value,
      })
    }
  },
})
