<template>
  <div class="hello">
    <div class="loadCenter">
      <div class="topImg">
        <!-- <van-image :src="require('./image.png')" /> -->
        <!-- <van-image round cover width="5rem" height="5rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" /> -->
        <img src="../assets/images/logoimg02.png" />
        <!-- <p class="uresName"><b>{{uresName}}</b></p> -->
      </div>
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="手机号"
          label="手机号" placeholder="请输入手机号"
          :rules="[{ validator, message: '请输入正确手机号' }]"
          @input="numberStyle('username')" maxlength="11"/>
        <p class="err" id="err_phonenum" v-show="phoneerrmsg"><span>{{phoneerrmsg}}</span></p>
        <van-field v-model="password" center clearable label="验证码"  placeholder="请输入验证码" @input="numberStyle('password')" maxlength="6">
          <template #button>
            <van-button size="small" type="info" round v-if="username&&!count" @click="clickCode()">发送验证码</van-button>
            <van-button size="small" type="info" round v-if="count" disabled>{{countdown}}秒后重试</van-button>
            <van-button size="small" type="info" round disabled v-show="!username">发送验证码</van-button>
          </template>
        </van-field>
        <p class="forgetPassword" @click="toastForm()">忘记密码?</p>
        <div class="ladBtn">
          <van-button round block type="info" native-type="submit" @click="ladingCode()">登 &nbsp; 录</van-button>
        </div>
      </van-form>
      <div class="bottom">
        <van-divider>第三方登录</van-divider>
        <div class="bomIcon">
          <van-icon name="setting-o" @click="toastForm()"/>
          <van-icon name="fire-o" @click="toastForm()"/>
          <van-icon name="gift-o" @click="toastForm()"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      username: '',
      password: '',
      isActive: true,
      phoneerrmsg: '', // 手机号验证错误提示
      count: false, // 倒计时显示
      countdown: 60,
      timer: '',
      time: 60,
      uresName: '尼古拉斯·赵四' // 名称
    }
  },
  created () {
  },
  computed: {
  },
  watch: {},
  mounted () {
    // this.countdown = setInterval(this.get, 1000)
  },
  methods: {
    validator (val) {
      return /1\d{10}/.test(val)
    },
    get () {
      this.countdown--
    },
    clickCode () {
      this.count = true
      this.$toast({
        message: '么鱼 手机验证码: 134655',
        position: 'top'
      })
      this.password = '134655'
      // ===================================
    },
    ladingCode () {
      if (this.password === '134655') {
        this.$router.push({ path: '/index' })
      } else {
        this.$toast({
          message: '验证码不正确',
          position: 'top'
        })
      }
    },
    numberStyle (val) {
      this[val] = this[val].replace(/[^0-9]/g, '')
    },
    numValid (val) { // 验证输入类型,只能输入数字
      this.phoneerrmsg = '' // 验证输入的提示信息
      let filtered = val.target.value.replace(/^0|[^\d]/g, '')
      if (this.phone !== filtered) {
        this.phone = filtered
      }
      console.log(this.phone.length, this.phone, val)
    },
    onSubmit (values) {
      console.log('submit', values)
    },
    toastForm () {
      this.$toast({
        message: '功能维护中~~',
        position: 'top'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  position:relative;
  .topImg{
    margin-bottom: 1.875rem;
    img{
      width: 8rem;
      height:3.5rem;
    }
    .uresName{
      font-size: 16px;
    }
  }
  .loadCenter{
    height: 11.25rem;
    margin-top: 30%;
    // position: absolute;
    /deep/.van-field__label{
      width: 5em;
    }
    .van-button--small{
      padding:0 0.875rem;
    }
    .forgetPassword{
      margin-top: 1.25rem;
      margin-left: 1rem;
      width:90%;
      color: rgb(148, 147, 147);
      text-align: left;
    }
    .ladBtn{
      width: 100%;
      margin-top: 1.8rem;
      .van-button__text[data-v-24a16d5c]{
        font-size: 1.125rem;
      }
    }
  }
  .bottom{
    width:100%;
    margin-top: 15%;
    .bomIcon{
      display: flex;
      .van-icon{
        font-size: 28.8px;
        width:33.3%;
      }
    }
  }
}
// @media screen and (min-width:600px) and (max-width:900px){
//   body {background-color:#f5f5f5;}
// }
@media screen and (width:300px){
  .topImg img{
    width: 6rem;
    height:3rem;
  }
}
// @media screen and (max-height: 500px) {
//     .bottom{
//       width:100%;
//       margin-top: 10%;
//       background-color: red;
//     }
// }
</style>
