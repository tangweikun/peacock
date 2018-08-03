export function saveCanvas(canvasId) {
  wx.canvasToTempFilePath(
    {
      canvasId,
      success: function(res) {
        return wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function() {
            wx.showToast({
              title: '已保存到相册',
            })
          },
        })
      },
    },
    this,
  )
}
