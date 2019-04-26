<template>
  <div class="container">
    <div class="housing-aerial-view">
      <img :src="aerialViewUrl" alt="bird's eye view">
    </div>
    <div class="housing-sold">
      <div class="housing-sold-header">
        在售
        <img class="triangle" src="/static/img/triangle.png" alt="triangle">
      </div>
      <div class="housing-sold-display">
        <OnSolding
          v-for="(item,index) in info"
          :key="index"
          :id="item.id"
          :openTime="item.openTime"
          :deadline="item.deadline"
        ></OnSolding>
      </div>
      <div class="housing-sold-more">
        <van-cell title="查看更多在售类型" is-link clickable url="/pages/moreSold"/>
      </div>
    </div>
    <div class="housing-type">
      <van-panel title="全部户型" status="共24种">
        <div class="housing-type-classify">
          <van-tabs>
            <van-tab title="全部">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
            <van-tab title="标签 5">内容 5</van-tab>
            <van-tab title="标签 6">内容 6</van-tab>
          </van-tabs>
        </div>
      </van-panel>
    </div>
  </div>
</template>
<script>
import OnSolding from "../components/onSolding";
export default {
  config: {
    navigationBarTitleText: "开盘动态"
  },
  components: {
    OnSolding
  },
  data() {
    return {
      aerialViewUrl:
        "http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9zcGlkZXJfcHJvamVjdF9pbWdcLzJcLzMwMTc0Njk2XC83NTdhMTQyM2M5MGQ4ZTVkMzQxNTEyNGUzMzVkYjZlYS5qcGciLCJpbWdfcGFyYW1fYXJyIjpbXSwieC1vc3MtcHJvY2VzcyI6IiJ9",
      info: [
        {
          id: "12#",
          openTime: "更新中",
          deadline: "更新中"
        },
        {
          id: "16#",
          openTime: "2018.05",
          deadline: "2019.06"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  .housing-aerial-view {
    height: 450rpx;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .housing-sold {
    .housing-sold-header {
      position: relative;
      height: 70rpx;
      line-height: 70rpx;
      color: #fff;
      background-color: #f4a300;
      text-align: center;
      .triangle {
        position: absolute;
        left: 50%;
        bottom: -16rpx;
        margin-left: -8rpx;
        width: 16rpx;
        height: 16rpx;
      }
    }
    .housing-sold-display {
      padding: 20rpx;
      background-color: #fff8e9;
      font-size: 10px;
    }
  }
  .housing-type {
    margin-top: 10rpx;
  }
}
</style>


