<script>
import { mapState, mapMutations } from "vuex";
export default {
  globalConfig: {
    usingComponents: {
      "van-toast": "vant-weapp/dist/toast/index",
      "van-tag": "vant-weapp/dist/tag/index",
      "van-search": "vant-weapp/dist/search/index",
      "van-tag": "vant-weapp/dist/tag/index",
      "van-icon": "vant-weapp/dist/icon/index",
      "van-panel": "vant-weapp/dist/panel/index",
      "van-button": "vant-weapp/dist/button/index",
      "van-cell": "vant-weapp/dist/cell/index",
      "van-cell-group": "vant-weapp/dist/cell-group/index",
      "van-tab": "vant-weapp/dist/tab/index",
      "van-tabs": "vant-weapp/dist/tabs/index"
    }
  },
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    // 获取设备的宽高
    // this.$store.dispatch('checkoutWidthAndHeight');
    wx.setStorageSync("logs", logs);
    console.log("app created and cache logs by setStorageSync");
  }
};
</script>

<style>
page {
  height: 100%;
}

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
