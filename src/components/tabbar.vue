<!-- 底部tabbar导航 -->
<template>
  <div class='tabbarFrom'>
    <div class="tabbar">
      <div class="tabIcon">
        <span><a>首页</a></span>
      </div>
      <div class="tabIcon">
        <span>分类</span>
      </div>
      <div class="tabIcon">
        <span><van-icon name="add" color="#3c3c3c"/></span>
      </div>
      <div class="tabIcon">
        <span>
          <van-badge :content="contentData" max="99">
            消息
          </van-badge>
        </span>
      </div>
      <div class="tabIcon">
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
// import引入的组件需要注入到对象中才能使用
  name: 'tabbar',
  components: {},
  data () {
    return {
      active: 5,
      contentData: 185
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.tabbarFrom{
  margin-top: 100%;
  width: 100%;
  background-color:#fff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 49px;
  z-index: 1010;
  .tabbar{
    width:100%;
    display: flex;
    height: 100%;
  }
}
  a:visited {
    color:red;
  }
.tabIcon{
  width: 20%;
  height: 100%;
  // padding-top:5px;
  /deep/.van-badge--fixed{
    position: absolute;
    top:8px;
  }
  span{
    width: 100%;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    font-family:Arial,Helvetica,sans-serif;
  }
  i{
    font-size: 32px;
    line-height: 38px;
  }
}
.tabbarFrom[data-v-04ac836e]{
  line-height: 12px;
}
</style>
