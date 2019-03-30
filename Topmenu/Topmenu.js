// Topmenu/Topmenu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
<<<<<<< HEAD
    TopMenuList: [{
      pagePath: "/pages/lists/lists",
      text: "文章推荐"
    }, {
      pagePath: "/pages/lists/lists",
        text: "经典代码"
      }, {
        pagePath: "/pages/lists/lists",
        text: "应用案例"
      }, {
        pagePath: "/pages/lists/lists",
        text: "服务购买"
      }, {
        pagePath: "/pages/lists/lists",
        text: "环境配置"
      }
    ]
=======

>>>>>>> 961ee8632be9b0e718ab19666a88d2a9259bbdb5
  },
  attached() {
  },
  methods: {
<<<<<<< HEAD

=======
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
>>>>>>> 961ee8632be9b0e718ab19666a88d2a9259bbdb5
  }
})
