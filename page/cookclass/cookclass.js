var md5=require('md5.js');

Page({
  data:{
    list:[],
    name:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('aaaa');
    var that=this;
    wx.request({
      url: 'http://www.tngou.net/api/cook/classify',
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      data:{id:options.id},
      success: function(res){
        // success
        //console.log(res.data.tngou+'res');
        that.setData({list:res.data.tngou})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
   
  },
  onHide:function(){
    // 页面隐藏
   
  },
  onUnload:function(){
    // 页面关闭
   
  },
  navigation:function(event){
     console.log(event);
    var id=event.currentTarget.dataset.classid;
    wx.navigateTo({
    url:'../cooktype/cooktype?id='+id,

    });

  },
  surf:function(event){
    console.log(this.data.name);
wx.navigateTo({
    url:'../cookname/cookname?name='+this.data.name,

    });

  },
  namecontent:function(event){
var that=this;
that.data.name=event.detail.value;
  },
  test:function(){

var stringA='nonceStr=test&package=prepay_id=119&signType=MD5&timeStamp='+(new Date()).getTime();
var stringSignTemp=stringA+"&key=192006250b4c09247ec02edce69f6a2d" ;
var ss= md5.hex_md5(stringSignTemp).toUpperCase();


wx.requestPayment({
  timeStamp: +(new Date()).getTime(),
  nonceStr: 'test',
  package: 'prepay_id=119',
  signType: 'MD5',
  paySign: ss,
  success: function(res){
    // success
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
});

  }
})