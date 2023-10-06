// pages/load/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  next:function(){
    console.log('66666')
    console.log("userInfo",getApp().globalData.userInfo)//显示一下保存的用户信息（全家变量）
    wx.redirectTo({
      url: '/pages/login/login',
    })//跳转页面

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;

    wx.login({
      success(res) {
        if (res.code) {
          //   //发起网络请求
          //   wx.request({
          //     url: 'https://example.com/onLogin',
          //     data: {
          //       code: res.code
          //     }
          //   })
          console.log('成功获取授权')
          // getApp().globalData.userInfo = res.userInfo//把微信用户信息存储到全局变量
          // that.next();
        }
        else {
        //   // 查看是否授权          
          console.log('授权失败')

        //   // wx.getSetting({
        //   //   success(res) {
        //   //     if (res.authSetting['scope.userInfo']) {
        //   //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        //   //       wx.getUserInfo({
        //   //         success: function (res) {
        //   //           console.log(res.userInfo)
        //   //         }
        //   //       })
        //     //   }
        //     //   else
        //     //     console.log('登录失败！' + res.errMsg)
        //     // }
        //   })
        }
      }
    })
    wx.showLoading({
      title: '加载中',
    })


    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

  },

  bindGetUserInfop(e) {
    getApp().globalData.userInfo = e.detail.userInfo//把微信用户信息存储到全局变量
    this.next();
    // console.log(e.detail.userInfo)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})