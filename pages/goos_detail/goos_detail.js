//import { request } from "../../request/index.js";
//import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{}
    // goodsObj:{
    //   "goods_id": 8888,
    //     "cat_id": 1085,
    //     "goods_name": "spike 经典武士大马士革直刀(微型) 户外野营直刀 收藏礼品刀 饰品刀具",
    //     "goods_price": 500,
    //     "goods_number": 100,
    //     "goods_weight": 100,
    //     "goods_introduce":"富文本内容",
    //     "goods_state": 2,
    //     "is_del": "0",
    //     "add_time": 1516361489,
    //     "upd_time": 1516361489,
    //     "delete_time": null,
    //     "hot_mumber": 0,
    //     "is_promote": false,
    //     "cat_one_id": 995,
    //     "cat_two_id": 1075,
    //     "cat_three_id": 1085,
    //     "goods_cat": "995,1075,1085",
    //     "pics": [
    //         {
    //             "pics_id": 38711,
    //             "goods_id": 8888,
    //             "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //             "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
    //             "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
    //             "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //             "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
    //             "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
    //         },
    //         {
    //           "pics_id": 38712,
    //           "goods_id": 8889,
    //           "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //           "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
    //           "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
    //           "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //           "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
    //           "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
    //       },
    //       {
    //         "pics_id": 38713,
    //         "goods_id": 8890,
    //         "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //         "pics_mid": "https://gw.alicdn.com/imgextra/i3/1400312/O1CN01wH90RK1EAwA0jnB36_!!1400312-0-lubanu.jpg",
    //         "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
    //         "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //         "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
    //         "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
    //     },
    //     {
    //       "pics_id": 38714,
    //       "goods_id": 8891,
    //       "pics_big": "https://img.alicdn.com/tfs/TB1VZo7x4v1gK0jSZFFXXb0sXXa-520-280.jpg_q90_.webp",
    //       "pics_mid": "https://img.alicdn.com/simba/img/TB1JIFLxFY7gK0jSZKzSuuikpXa.jpg",
    //       "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
    //       "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //       "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
    //       "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
    //   },
    //   {
    //     "pics_id": 38715,
    //     "goods_id": 8892,
    //     "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //     "pics_mid": "https://img.alicdn.com/tfs/TB114f0xYH1gK0jSZFwXXc7aXXa-520-280.jpg_q90_.webp",
    //     "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
    //     "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
    //     "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
    //     "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
    // }
    //     ],
    //     "attrs": [
    //         {
    //             "goods_id": 8888,
    //             "attr_id": 9210,
    //             "attr_value": "户外直刀",
    //             "add_price": 0,
    //             "attr_name": "主体参数-类别",
    //             "attr_sel": "only",
    //             "attr_write": "manual",
    //             "attr_vals": "放大镜"
    //         }
    //     ]
    // },
    // "meta": {
    //     "msg": "获取成功",
    //     "status": 200
    // }
  },
   //商品对象
   GoodsInfo:{},
  onLoad:function(){
  
   },
   getGoodsDetail(){
    wx.request({
      //1.3注意这个用法出过问题 ：是小程序APPID合法域名设置问题
      url: 'https://github.com/xl19901211/test01/blob/master/category.json' 
        });
        this.GoodsInfo = goodsObj;
         },
     handleyulantupian(e){
    console.log("yulan")
    const urls = this.GoodsInfo.pics_big;
    //console.log(url)
    // const urls=this.GoodsInfo.pic.map(v=>v.pics_mid);
    // wx.previewImage({
    //   //1构造要预览的图片
    //   current: urls[0],
    //   urls: urls,
    //   });
  }
  /**
   * 生命周期函数--监听页面加载
   */
  //2020.5.10接口数据失效
//   onLoad: function (options) {
//     const {goods_id}=options;
//    // console.log(goods_id);
//     this.getGoodsDetail(goods_id);
//   },
//   async getGoodsDetail(goods_id){
//    // const res=await request({url:'/goods/detail',data:{goods_id}});
//     //console.log(res);
//     const goodsObj = await request({ url: "/goods/detail", data: { goods_id } });
//     this.setData({
//       goodsObj
//     }) 
//   }
 })