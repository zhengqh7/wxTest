Page({
  data: {
  },
  onload: function (options) {
    app.globalData.selected = 1;
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset() {
    console.log('form发生了reset事件')
  }
})