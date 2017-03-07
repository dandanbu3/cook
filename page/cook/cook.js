var app=getApp()
Page({
  data:{
    list:[],
    rows:20,
    id:null,
    pageNo:1,
    loadMore:false
  },
  onLoad:function(options){
    console.log('zzzzzzzzzz');
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    this.setData({
            id:options.id
        });
   
    wx.request({
      url: 'http://www.tngou.net/api/cook/list?id='+options.id+'&page='+this.data.pageNo,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        res.data.tngou.length>19 ? that.setData({loadMore:true}) :that.setData({loadMore:false});
        that.setData({list:res.data.tngou});
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
  navigation:function(){
    wx.navigateTo({
url:'../cookclass/cook?id='+id,

    });

  },
  lower:function(event){
 var that=this;
 if(that.data.loadMore){
  that.data.pageNo=that.data.pageNo+1;
wx.request({
      url: 'http://www.tngou.net/api/cook/list?id='+that.data.id+'&page='+that.data.pageNo,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        //console.log(res.data.tngou+'res');
        res.data.tngou.length>19? that.setData({loadMore:true}) :that.setData({loadMore:false});
        that.setData({list:that.data.list.concat(res.data.tngou)})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
 }
  },
  descrip:function(event){
var that=this;
var id=event.currentTarget.dataset.id;
wx.navigateTo({
    url:'../cookshow/cookshow?id='+id,

    });

  }
})