import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';//3.0引入文件，有关语法使用
Page({
  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    // 右侧的商品数据
    rightContent: [],
    // 被点击的左侧的菜单
    currentIndex: 0,
    // 右侧内容的滚动条距离顶部的距离
    scrollTop: 0
  },
  // 接口的返回数据
  Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       //1.7获取分类数据
    //this.getcates();
    /*2.0先判断一下本地存储有没有旧的数据
    2.1没有 直接发送请求
    2.3有旧的数据 同时旧的数据也没有过期 就使用  */
    //2.5获取本地存储的数据; key不必全部一致，但与下文
    const Cates = wx.getStorageSync("cates");
    //2.6 判断
    if(!Cates){
      //2.6.1不存在
      this.getcates();
    }else{
      //可以使用旧的数据 定义过期时间 
      if(Date.now() - Cates.time > 1000*10){
        //重新发送请求
        this.getcates();
      }else{
        //可以使用旧的数据
       // console.log("可以使用旧的数据");
       this.Cates=Cates.data;
       // 构造左侧的大菜单数据，注意单词大小写是否正确
     let leftMenuList = this.Cates.map(v => v.cat_name);
     //     // 构造右侧的商品数据
       let rightContent = this.Cates[0].children;
      this.setData({
       leftMenuList,
       rightContent
       })
      }
    }
     },
//1.2获取分类数据
/*getcates(){
    //1.3注意这个用法出过问题 ：是小程序APPID合法域名设置问题
        request({
      url: "/categories"//经过改造的请求
     })
    .then(res => {
    this.Cates = res.data.message;
      // 2.7把接口的数据存入到本地存储中     
         wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
    // 构造左侧的大菜单数据，注意单词大小写是否正确
     let leftMenuList = this.Cates.map(v => v.cat_name);
    //     // 构造右侧的商品数据
      let rightContent = this.Cates[0].children;
     this.setData({
      leftMenuList,
      rightContent
      })
      })
},  */
//3.1  async语法改造
    async getcates(){
     // 3.2使用es7的 async和await语法
      const res = await request({ url: "/categories"});
      this.Cates = res.data.message;
      // 2.7把接口的数据存入到本地存储中     
         wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
    // 构造左侧的大菜单数据，注意单词大小写是否正确
     let leftMenuList = this.Cates.map(v => v.cat_name);
    //     // 构造右侧的商品数据
      let rightContent = this.Cates[0].children;
     this.setData({
      leftMenuList,
      rightContent
      })
      },
       //左侧菜单点击事件
       handleItemTap(e) {
         //console.log(e);
        /* 
        1 获取被点击的标题身上的索引
        2 给data中的currentIndex赋值就可以了
        3 根据不同的索引来渲染右侧的商品内容
         */
       // 注意此处必须加大括号才能定义这个值
        const {index}= e.currentTarget.dataset;
        let rightContent = this.Cates[index].children;
        this.setData({
          currentIndex: index,
          rightContent,
          // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
          scrollTop: 0
        })
      } 
})

