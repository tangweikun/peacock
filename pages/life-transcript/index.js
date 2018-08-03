const app = getApp()
const { LIAR_QUESTIONS, LIAR_LEVEL } = require('../../constants/index.js')
const { createLifeTranscript } = require('../../canvas/index')
const { saveCanvas } = require('../../utils/index')

Page({
  data: {},

  onLoad: function() {
    createLifeTranscript(app.globalData.userInfo)
    console.log('---', app.globalData.userInfo)
  },

  onShareAppMessage: function(res) {
    return {
      title: '快来开启你的人生成绩单吧',
      path: '/pages/index/index',
    }
  },

  _saveCanvas: function() {
    saveCanvas('life-transcript')
  },
})
