const app = getApp()

Page({
  data: {},

  _saveCanvas: function() {
    saveCanvas('life-transcript')
  },

  onLoad: function() {},

  onShareAppMessage: function() {
    return {
      title: '智商666',
      path: '/pages/index/index',
    }
  },

  bindGetUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    wx.navigateTo({ url: '/pages/life-transcript/index' })
  },
})
