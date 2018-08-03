const app = getApp()
const { createSmilingFace } = require('../../canvas/index')
const { saveCanvas } = require('../../utils/index')

Page({
  data: {},

  _saveCanvas: function() {
    saveCanvas('smiling-face')
  },

  onLoad: function() {
    createSmilingFace()
  },

  onShareAppMessage: function() {
    return {
      title: '智商666',
      path: '/pages/index/index',
    }
  },

  _goLiarExam: function() {
    wx.navigateTo({ url: '/pages/liar/index' })
  },
})
