const app = getApp()
const { LIAR_QUESTIONS, LIAR_LEVEL } = require('../../constants/index.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    questions: LIAR_QUESTIONS,
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
      currentQuestion: LIAR_QUESTIONS[0],
    })
  },

  onShareAppMessage: function() {
    return {
      title: '智商666',
      path: '/pages/index/index',
    }
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

    console.log('radio发生change事件，携带value值为：', e.detail.value, e)
  },
})
