<template>
  <div class="info">
    <van-panel :title="id" :desc="desc">
      <!-- <div slot="header">
            <van-row gutter="20">
              <van-col class="house-id" span="8">{{info.id}}</van-col>
              <van-col span="8">开盘时间:{{info.openTime}}</van-col>
              <van-col span="8">交付时间:{{info.deadline}}</van-col>
            </van-row>
      </div>-->
      <div class="content">
        <van-row>
          <van-col span="12">总楼层: 16层</van-col>
          <van-col span="12">总套数: 64套</van-col>
        </van-row>
        <van-row>
          <van-col span="12">主力户型: 140㎡</van-col>
          <van-col span="12">物业类型: 住宅</van-col>
        </van-row>
      </div>
    </van-panel>
  </div>
</template>
<script>
export default {
  props: ["id", "openTime", "deadline"],
  data() {
    return {};
  },
  computed: {
    desc() {
      return "开盘时间: " + this.openTime + " 交付时间: " + this.deadline;
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.info {
  margin: 10px 0;
  .content {
    font-size: 12px;
    padding: 10px 12px;
  }
}
</style>
