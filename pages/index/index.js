import { request } from "../../request/index.js";
Page({
  data: {
    //1轮播图数组
    swiperList:[],
    //2导航图标准数组
    catesList:[],
    //3楼层标准方法数组
    floorList:[]
  },
  onLoad:function(options){
  //1.0发送异步请求获取轮播图数据
  // request({
  //   url: '/home/swiperdata'})
  //   .then(result=>{
  //    // console.log(result)
  //    this.setData({
  //     swiperList:result.data.message
  //    })
  //   })
  //1.02
  this.getSwiperList();
  //2.02
  this.getCateList();
  //3.01
  this.getFloorList();
  },
  //1.01获取轮播图数据
  getSwiperList(){
    request({
      url: '/home/swiperdata'})
      .then(result=>{
       // console.log(result)
       this.setData({
        swiperList:result.data.message
       })
      })
  },
  //2.01获取分类导航数据
  getCateList(){
    request({
      url: '/home/catitems'})
      .then(result=>{
       // console.log(result)
       this.setData({
        catesList:result.data.message
       })
      })
  },
  //3.01获取楼层数据
  getFloorList(){
    request({
      url: '/home/floordata'})
      .then(result=>{
       // console.log(result)
       this.setData({
        floorList:result.data.message
       })
      })
  }
  })
  