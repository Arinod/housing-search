// 项目详情
<template>
  <div class="container">
    <van-toast id="van-toast"/>
    <div class="housing-img">
      <img :src="imgsrc" alt="housing-img">
      <van-tag class="tag" color="#ffe1e1" text-color="#ad0000">25张照片>></van-tag>
    </div>
    <van-panel class="housing-main-info">
      <div class="housing-main-info-header" slot="header">
        <div class="title">碧桂园奥能·罗马世纪城</div>
        <div class="edsc">
          <span class="edsc-tit">今日价格</span>
          <span class="edsc-con">￥5000元/㎡</span>
        </div>
      </div>
      <div class="housing-main-info-content">
        <van-cell-group>
          <van-cell title="主力户型" value="91-139㎡"/>
          <van-cell title="开盘时间" value="热销中"/>
          <van-cell title="物业类型" value="住宅"/>
          <van-cell title="开发房企" value="碧桂园控股"/>
          <van-cell title="物业公司" value="碧桂园物业"/>
          <van-cell title="项目地址" clickable url="/pages/map">
            <van-icon slot="right-icon" name="location-o"></van-icon>
          </van-cell>
          <van-cell title="最新动态" clickable>
            <van-icon slot="right-icon" name="new-o" color="#ad0000"></van-icon>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel>
    <div class="housing-subscribe">
      <van-button size="large" type="warning">订阅楼盘信息</van-button>
    </div>
    <!-- <div class="housing-dynamic">
      <van-panel>
        <div slot="header">
          <van-cell title="最新动态" is-link></van-cell>
        </div>
        <div class="housing-dynamic-latest">
          <div class="housing-dynamic-latest-time">
            <van-icon name="clock-o"></van-icon>
            <span>2018.06.25</span>
            <van-tag plain type="danger">NEW</van-tag>
          </div>
        </div>
      </van-panel>
    </div>-->
    <div class="housing-analyze">
      <van-tabs swipeable animated>
        <van-tab title="交通">
          <p>花样年喜年中心位于鼓楼区中央北路河路道1号，项目周围地铁有1号线南京站和3号线小市站，均距离项目十分靠近，出行便利</p>
        </van-tab>
        <van-tab title="生活">
          <p>项目自带近6万方商业，此外项目1公里内还有南京商厦、玉桥商业广场、金盛百货等，商业配套十分丰富w</p>
        </van-tab>
        <van-tab title="教育">
          <p>项目周边学校有南京市建宁中学、建宁小学、小市中心小学、东方开心幼儿园等，教育资源十分丰富</p>
        </van-tab>
      </van-tabs>
    </div>
    <div class="housing-gps">
      <van-cell-group>
        <van-cell title="位置及周边" is-link clickable url="/pages/map"/>
      </van-cell-group>
      <div class="gps">
        <map
          id="map"
          latitude="32.1195739450"
          longitude="118.9352309704"
          scale="16"
          :markers="markers"
          :enable-zoom="enableZoom"
          :enable-scroll="enableScroll"
          show-location
          show-compass
          style="width: 100%; height: 375rpx;"
        ></map>
      </div>
    </div>
    <div class="housing-order">
      <van-button size="large" type="warning">预约看房</van-button>
    </div>
  </div>
</template>
<script>
import Toast from "vant-weapp/dist/toast/toast";
export default {
  config: {
    navigationBarTitleText: "项目详情"
  },
  data() {
    return {
      enableZoom: false,
      enableScroll: false,
      imgsrc:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556103352986&di=dc0176ad6941ff21d1f5fe143cdad42a&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fs%2F21%2F1462887228143aa.jpg",
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
  },
  onReady() {
    console.log("do this");
    Toast.loading({
      mask: true,
      message: "加载中..."
    });
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  .housing-img {
    position: relative;
    img {
      width: 100%;
      height: 450rpx;
    }
    .tag {
      position: absolute;
      right: 0;
      bottom: 8rpx;
    }
  }
  .housing-main-info {
    .housing-main-info-header {
      padding: 0 30rpx;
      .title {
        font-size: 20px;
      }
      .edsc {
        .edsc-tit {
          font-size: 10px;
          color: #999;
        }
        .edsc-con {
          font-size: 14px;
          color: #ff4444;
        }
      }
    }
  }
  .housing-subscribe,
  .housing-order {
    margin: 40rpx 30rpx;
  }
  .housing-analyze {
    margin-bottom: 20rpx;
    background-color: #fff;
    p {
      color: #999;
      font-size: 14px;
      margin: 30rpx;
    }
  }
}
</style>


