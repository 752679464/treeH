// pages/roll/roll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yonghuming: '',
    shoujihao: '',
    denglumima: '',
    querenmima: '',
  },
  username: function (e) {
    // console.log(this.data.shoujihao)
    this.data.yonghuming = e.detail.value
    // console.log(this.data.shoujihao)
  },

  phonenumber: function (e) {
    // console.log(this.data.shoujihao)
    this.data.shoujihao = e.detail.value
    // console.log(this.data.shoujihao)
  },

  password: function (e) {
    // console.log(this.data.denglumima)
    this.data.denglumima = e.detail.value
    // console.log(this.data.denglumima)
  },

  passwordack: function (e) {
    // console.log(this.data.querenmima)
    this.data.querenmima = e.detail.value
    // console.log(this.data.querenmima)
  },

  regest: function (e) {
    var that = this
    // console.log(this.data.yonghuming)
    if (that.data.yonghuming == '') {
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel: false,
        success(res) { }
      })
    }
    else if (that.data.shoujihao == '') {
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel: false,
        success(res) { }
      })
    }
    // else if 校验手机号是否正确
    else if (that.data.denglumima == '') {
      wx.showModal({
        title: '提示',
        content: '请输入登录密码',
        showCancel: false,
        success(res) { }
      })
    }
    else if (that.data.querenmima == '') {
      wx.showModal({
        title: '提示',
        content: '请输入确认密码',
        showCancel: false,
        success(res) { }
      })
    }
    else if (that.data.querenmima != that.data.denglumima) {
      wx.showModal({
        title: '提示',
        content: '两次密码不一致',
        showCancel: false,
        success(res) { }
      })
    }
    else {
      // console.log("success")
      console.log(getApp().globalData.server + '/treehole/index.php/Home/User/sign')

      wx.request({
        url: getApp().globalData.server + '/treehole/index.php/Home/User/sign',
        data: {
          username: that.data.yonghuming,
          phone: that.data.shoujihao,
          password: that.data.denglumima,
          password_again: that.data.querenmima,
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res) {
          // console.log(res.data)
          if (res.data.error_code != 0) {
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
          }
          else{
            wx.showModal({
              title: '恭喜',
              content: '注册成功',
              complete: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
                wx.reLaunch({
                  url: '/pages/square/square'
                })
              }
            })
          }
        }
      })
    }
  },

  sigin: function (e) {
    console.log("ddd")

    // wx.redirectTo({
    //   url: '/pages/login/login',
    wx.navigateBack({
      delta: 1,
    })//跳转页面
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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