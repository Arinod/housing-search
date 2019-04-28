// 户型组件
<template>
  <div class="container">
    <div class="img" @click="previewImg">
      <img :src="img" alt="Floor plan">
      <div class="tag">
        <van-tag type="danger">在售</van-tag>
      </div>
    </div>
    <div class="info">
      <p>户型: {{model}}</p>
      <p>面积: {{area}}</p>
      <p>楼栋: {{building}}</p>
      <p>评论: {{review}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["img", "model", "area", "building", "review"],
  methods: {
    previewImg() {
      wx.previewImage({
        urls: [this.img]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin-bottom: 10px;
  .img {
    position: relative;
    width: 100%;
    max-height: 167px;
    overflow-y: hidden;
    img {
      width: 100%;
    }
    .tag {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .info {
    margin-top: 10rpx;
    font-size: 12px;
  }
}
</style>


