// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_tab2:0,
    current: 'consultation',
    indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    value4:'输入框已禁用',
    current : 0,
    other_role:true
},
  webview_ask:function(e){
    console.log(e.currentTarget.dataset.type)
    wx.navigateTo({
      url: '/pages/webview/webview?type=' + e.currentTarget.dataset.type,
    })
  },
  webview_case:function(e){
    console.log(e.currentTarget.dataset.type)
    wx.navigateTo({
      url: '/pages/webview/webview?type=' + e.currentTarget.dataset.type,
    })
  },
  handleClick:function () {
    const addCurrent = this.data.current + 1;
    const current = addCurrent > 2 ? 0 : addCurrent;
    this.setData({
        'current' : current
    })
  },
  handleClickLast:function(){
    const addCurrent = this.data.current - 1;
    const current = addCurrent > 2 ? 0 : addCurrent;
    this.setData({
        'current' : current
    })
  },

  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
    if(detail.key=="find"){
      wx.redirectTo({
        url: '../index/index',
      })
    } 
    else if(detail.key=="consultation"){
    }
    else if(detail.key=="admin"){
      wx.redirectTo({
        url: '../admin/index',
      })
    }
    else {
      wx.redirectTo({
        url: '../mine/index',
      })
    }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})