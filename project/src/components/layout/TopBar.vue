<template>
  <div class="bar">
    <div class="barCom w">
      <div class="leftNav">
        <ul>
          <li><a href="https://www.lagou.com/" class="logo"></a></li>
          <li>
            <a href="" class="cIcon green">全国站<em></em></a>
          </li>
          <li class="defaultNav">
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link
              :to="{
                path: '/home/JobView',
                query: {
                  title: 'query路由传值JobView',
                },
              }"
            >
              职位</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'myComPany',
                params: {
                  title: '使用params进行company路由传参必须要用name命名',
                },
              }"
              >公司</router-link
            >
          </li>
          <li>
            <router-link :to="`/home/comPus/666/使用params传值`" class="botTabFather"
              >校园招聘<span class="hotTab"
                ><p class="txt">hot</p></span
              ></router-link
            >
          </li>
          <li>
            <a href="" class="botTabFather"
              >课程<span class="hotTab"><p class="txt">hot</p></span></a
            >
          </li>
          <li><a href="" class="green">拉勾App</a></li>
        </ul>
      </div>
      <div class="rightNav">
        <ul>
          <li><a href="">登录</a></li>
          <li><span class="grey">|</span></li>
          <li><a href="">注册</a></li>
          <li><a href="">进入企业版</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.barCom {
  line-height: 40px;
  color: white;
  font-size: 13px;
}
.leftNav {
  float: left;
}
.leftNav ul li {
  float: left;
}
a,
router-link {
  display: block;
  padding: 0 21px;
  color: #afb5c0;
  transition: color 0.3s;
}
a:hover,
router-link {
  color: #ffffff;
}
.logo {
  width: 66px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 66px auto;
  background-position: center center;
  background-image: url(https://lagou-zhaopin-fe.lagou.com/fed/lg-www-fed/image/20210624/1624523613071.png);
}
.cIcon {
  height: 40px;
  position: relative;
  margin-right: 20px;
}
em {
  position: absolute;
  height: 0;
  width: 0;
  border-width: 5px;
  border-style: solid;
  border-color: #5f646d transparent transparent;
  right: 3px;
  top: 18px;
}
.green {
  color: #00b188;
}
.defaultNav {
  background-color: #24282c;
}
.defaultNav a {
  color: #fff;
}
.grey {
  color: #afb5c0;
}
.leftNav ul li:nth-child(2) a:hover,
.leftNav ul li:nth-child(8) a:hover {
  color: #00b188;
}

.leftNav ul li:nth-child(8) a:before {
  content: "";
  display: inline-block;
  margin: 0 2px 0 13px;
  width: 13px;
  height: 16px;
  vertical-align: text-bottom;
  background-repeat: no-repeat;
  background-size: 13px auto;
  background-position: center center;
  background-image: url("https://www.lgstatic.com/lg-www-fed/common/widgets/header_c/modules/topbar/img/icon_phone_a4c2aad.png");
}
.botTabFather {
  position: relative;
}

.hotTab {
  position: absolute;
  top: 3px;
  right: -3px;
  width: 27px;
  height: 16px;
  line-height: 14px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  background: #ff7452;
  border-radius: 9px;
  z-index: 1;
}
.txt {
  -webkit-transform: scale(0.9);
}

.rightNav {
  float: right;
  margin-right: 20px;
}
.rightNav ul li {
  float: left;
}
.rightNav ul li:nth-child(1) a,
.rightNav ul li:nth-child(3) a {
  padding: 0;
}
.rightNav ul li:nth-child(3) a {
  padding-right: 21px;
}
.rightNav ul li:nth-child(2) span {
  padding: 0 7px;
}
.rightNav ul li:nth-child(1) a {
  position: relative;
}
.rightNav ul li:nth-child(1) a:before {
  position: absolute;
  top: 11px;
  left: -26px;
  width: 18px;
  height: 18px;
  content: "";
  vertical-align: text-bottom;
  background-repeat: no-repeat;
  background-size: 18px auto;
  background-position: center center;
  background-image: url("https://www.lgstatic.com/lg-www-fed/common/widgets/header_c/modules/topbar/img/icon_login@2x_a6d7b9d.png");
}
</style>
