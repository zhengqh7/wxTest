<<<<<<< HEAD
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  },
  onLoad: function () {
  },

})
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
=======
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  },
  onLoad: function () {
  },

})
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
>>>>>>> 961ee8632be9b0e718ab19666a88d2a9259bbdb5
})