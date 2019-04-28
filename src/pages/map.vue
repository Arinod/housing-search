// 地图页
<template>
  <div class="container">
    <map
      id="map"
      latitude="32.1195739450"
      longitude="118.9352309704"
      scale="18"
      :markers="markers"
      show-location
      show-compass
      style="width: 100%; height: 100%;"
    ></map>
  </div>
</template>
<script>
export default {
  config: {
    navigationBarTitleText: "房源地址GPS"
  },
  data() {
    return {
      markers: [
        {
          id: 1,
          latitude: 32.119573945,
          longitude: 118.9352309704,
          title: "楼盘地址",
          iconPath: "/static/img/map.png"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.container{
  height: 100%;
}
</style>
