Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
<<<<<<< HEAD
      pagePath: "/pages/Wxmls/wxml",
=======
      pagePath: "/pages/lists/lists",
>>>>>>> 961ee8632be9b0e718ab19666a88d2a9259bbdb5
      iconPath: "/images/icon_component.png",
      selectedIconPath: "/images/icon_component_HL.png",
      text: "组件"
    }, {
<<<<<<< HEAD
        pagePath: "/pages/Wxmls/wxml",
=======
      pagePath: "/pages/lists/lists",
>>>>>>> 961ee8632be9b0e718ab19666a88d2a9259bbdb5
      iconPath: "/images/icon_API.png",
      selectedIconPath: "/images/icon_API_HL.png",
      text: "接口"
    }]
<<<<<<< HEAD
  }, 
=======
  },
>>>>>>> 961ee8632be9b0e718ab19666a88d2a9259bbdb5
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})