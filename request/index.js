//3.0同时发送异步代码的次数
let ajaxTimes=0;
export const request=(params)=>{
 // 3.1
 ajaxTimes++;
  //显示加载中 效果
  wx.showLoading({
    title: '加载中',
    mask:true
  });
  //定义公共的url
  const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1";
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
      },
      complete: ()=> {
        //3.2
        ajaxTimes--;
        //关闭正在等待的图标(此用法有页面局限性不能用于同时请求多个页面异步请求)
       // wx.hideLoading();
       //3.3 
       if(ajaxTimes===0){
         //
          wx.hideLoading();
        //
      }
      }
    });
  }) 
}