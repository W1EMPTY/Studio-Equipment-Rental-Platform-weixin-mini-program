// const { Scene } = require('XrFrame/elements.js')

// app.js
App({
  onLaunch() {
        //引用Utils公共函数
        const util = require('utils/util.js')
        //将当前的系统时间格式化输出
        console.log(util.formatTime(new Date(Date.now())))
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSetting({
      success: res =>{
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:res =>{
              this.globalData.userInfo = res.userInfo
            }
          })
        }
      }
    })
  },
  onShow:function(opts){
  console.log(opts.scene)
  },
  onHide:function(opts){
    console.log('hidden')
  },
  GetGoodsArr(){

  },
  GetGood(){
    
  },

  globalData: {
    userInfo: null
  }
})
