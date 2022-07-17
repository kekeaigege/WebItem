import {
  createStore
} from 'vuex'
const accountOption = {
  //开启命名空间
  namespaced: true,
  //用来存放变量,使用方式this.$store.state.sum
  state: {
    sum: 0
  },
  //相当于具有返回值的方法 this.$store.getters.userSum
  getters: {
    userSum(state) {
      return state.sum * 1;
    }
  },
  //提交更新数据方法必须是同步的 只有mutations可以修改值
  //this.$store.commit('SET_USER','123456')
  mutations: {
    INCREASE_SHOPCART: (state, value) => {
      // console.log(token)
      state.sum += value;
    },

  },
  //提交数据是异步的,功能与mutaion基本一致,this.$store.dispatch(‘mutations方法名’,值)
  //异步调用mutations中的方法,只能通过commit,调用actions,只能dispatch
  actions: { //context指的是一整个对象
    inc(context, value) {
      context.commit("INCREASE_SHOPCART", value);
    },
  },
}
export default createStore({

  /*
  模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
　简单来说就是可以把以上的 state、mutation、action、getters 整合成一个user.js,然后放到store.js里面
  */

  modules: {
    accountAbout:accountOption,
  }
})