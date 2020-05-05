Page({
  data: {
    current: 0,
    leftTitle: [
      "华为手机",
      "荣耀手机",
      "笔记本&平板",
      "智慧屏",
      "智能家居",
      "耳机音响",
      "专属配件",
      "通用配件",
      "生态产品",
      "增值服务",
      "智能计算"
    ],
    // 页面总高度将会放在这里
    windowHeight: 0,
    // search的高度
    searchHeight: 0,
    scrollViewHeight: 0,
    rightArr: [
      {
        title: "华为手机"
      },
      {
        title: "荣耀手机"
      },
      {
        title: "笔记本&平板"
      },
      {
        title: "智慧屏"
      },
      {
        title: "智能家居"
      },
      {
        title: "耳机音响"
      },
      {
        title: "专属配件"
      },
      {
        title: "通用配件"
      },
      {
        title: "生态产品"
      },
      {
        title: "增值服务"
      },
      {
        title: "智能计算"
      }
    ]
  },
  onLoad(option){
    wx.getSystemInfo({
      success: res => {
        //https://www.cnblogs.com/fps2tao/p/11195473.html
        console.log(res.screenHeight, res.windowHeight);
        this.setData({
          windowHeight: res.windowHeight
        })
      },
    })

    let query = wx.createSelectorQuery().in(this);
    query.select("#searchBar").boundingClientRect();
    query.exec((res)=>{
      let searchBarHeight = res[0].height;
      let scrollViewHeight = this.data.windowHeight - searchBarHeight;
      this.setData({
        scrollViewHeight: scrollViewHeight
      })
    })
  },
  //https://blog.csdn.net/H_c_l/article/details/99732256?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1
  catchTouchMove(){
    return false;
  },
  tapTitle(event){
    let curIndex = event.currentTarget.dataset.index;
    this.setData({
      current: curIndex
    })
  }
})