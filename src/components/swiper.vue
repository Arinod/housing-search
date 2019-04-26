<template>
  <swiper
    class="swiper"
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
    :circular="circular"
  >
    <block v-for="(item, index) in images" :key="index">
      <swiper-item>
        <img :src="item.url" class="slide-image" mode="aspectFill">
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      circular: true
    };
  }
};
</script>

<style scoped>
.swiper {
  height: 40%;
}
image {
  height: 100%;
  width: 100%;
}
</style>
