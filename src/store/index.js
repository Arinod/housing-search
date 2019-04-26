// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    windowWidth: 0,
    windowHeight: 0,
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    changeWindowWidth: (state, n) => {
      state.windowWidth = n;
    },
    changeWindowHeight: (state, n) => {
      state.windowHeight = n;
    }
  },
  actions: {
    checkoutWidthAndHeight({
      commit,
      state
    }) {
      wx.getSystemInfo({
        success(res) {
          console.log(res);
          commit('changeWindowWidth', res.windowWidth);
          commit('changeWindowHeight', res.windowHeight);
        }
      });
    }
  }
})

export default store
