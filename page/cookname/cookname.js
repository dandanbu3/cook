Page({
  data:{
    list:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    
    wx.request({
      url: 'http://www.tngou.net/api/cook/name?name='+options.name,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
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
  descrip:function(event){
var that=this;
var id=event.currentTarget.dataset.id;
wx.navigateTo({
    url:'../cookshow/cookshow?id='+id,

    });

  }
})