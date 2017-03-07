var app=getApp()
Page({
  data:{
    id:null,
    index:null
  },
  onLoad:function(){
    var that=this;
    var id=Math.round(Math.random()*1000);
    that.setData({
            id:id
        });
   
   wx.request({
  url: 'http://www.tngou.net/api/cook/show?id='+id,
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // success
    console.log(res);
    res.data.message=res.data.message.replace(/<[^>]+>/g,"");
    that.setData({
            index:res.data
        });
    
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
   onPullDownRefresh: function(){
     this.onLoad();
    wx.stopPullDownRefresh();
  }
  
})