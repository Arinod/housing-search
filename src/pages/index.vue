// 首页
<template>
  <div class="container">
    <Swiper :images="images"></Swiper>
    <div class="tag">
      <van-tag round plain v-for="tag in tags" :key="tag">{{tag.info}}</van-tag>
    </div>
    <div class="main-function">
      <div v-for="(item,index) in mainOperation" :key="index">
        <van-icon :name="item.icon" :size="item.size"/>
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="slider-function">
      <div v-for="(item,index) in sliderOperation" :key="index" @click="handleOperation(item.icon)">
        <van-icon :name="item.icon" :size="item.size"/>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/swiper";

export default {
  mpType: "page",

  data() {
    return {
      value: "",
      images: [
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556103352986&di=dc0176ad6941ff21d1f5fe143cdad42a&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fs%2F21%2F1462887228143aa.jpg"
        },
        {
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2348670669,1057046514&fm=26&gp=0.jpg"
        }
      ],
      tags: [
        {
          info: "高铁大城"
        },
        {
          info: "海景洋房"
        },
        {
          info: "轻轨旁"
        },
        {
          info: "自主买房"
        }
      ],
      mainOperation: [
        {
          icon: "browsing-history-o",
          name: "预约看房",
          size: "150rpx"
        },
        {
          icon: "question-o",
          name: "置业顾问",
          size: "150rpx"
        },
        {
          icon: "aim",
          name: "热门活动",
          size: "150rpx"
        }
      ],
      sliderOperation: [
        {
          icon: "phone",
          size: "90rpx"
        },
        {
          icon: "location",
          size: "90rpx"
        }
      ]
    };
  },

  components: {
    Swiper
  },

  methods: {
    clickHandle(msg, ev) {
      //@click="clickHandle('test click', $event)"
      console.log("clickHandle:", msg, ev);
    },
    handleOperation(icon) {
      console.log(icon);

      switch (icon) {
        case "phone":
          wx.makePhoneCall({
            phoneNumber: "13951012218"
          });
          break;
        case "location":
          this.$router.push("/pages/map");
          break;
      }
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    console.log("do");
    console.log(this.$store.state.windowHeight);
    this.windowHeight = this.$store.state.windowHeight + "px";
  }
};
</script>

<style scoped lang="scss">
@mixin flex($flex-direction: row, $justify-content: center) {
  display: flex;
  flex-direction: $flex-direction;
  justify-content: $justify-content;
  align-items: center;
}

.container {
  height: 100%;
  .tag {
    @include flex($flex-direction: row, $justify-content: space-around);
    height: 10%;
    border-bottom: 1rpx solid #f4f4f4;
  }
  .main-function {
    @include flex($flex-direction: row, $justify-content: space-around);
    padding: 15% 0;
    div {
      @include flex($flex-direction: column, $justify-content: center);
      p {
        text-align: center;
      }
    }
  }
  .slider-function {
    @include flex($flex-direction: row, $justify-content: center);
    div {
      margin: 0 30rpx;
    }
  }
}
</style>
