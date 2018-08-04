const app = getApp()

Page({
  data: {},

  _saveCanvas: function() {
    saveCanvas('life-transcript')
  },

  onLoad: function() {},

  onShareAppMessage: function() {
    return {
      title: '我不是学霸?',
      path: '/pages/index/index',
    }
  },

  bindGetUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    wx.navigateTo({ url: '/pages/elementary-textbooks/index' })
  },
})
