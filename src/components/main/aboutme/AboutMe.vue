<template>
  <div class="about-content">
    <div class="about-img">
      <img :src="aboutImg" alt="">
    </div>
    <div class="about-title">
      <div class="about-portrait">
        <img :src="userPortrait" alt="">
      </div>
      <div class="about-name">{{ userName }}</div>
    </div>
    <div class="about-skill">
      <ul>
        <li v-for="(index) in percentage.length" :key="index">
          <div>{{ percentageName[index-1]}}</div>
          <el-progress :percentage="percentage[index-1]" :color="customColors"></el-progress>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  props: {
    userPortrait: {
      type: String,
      default: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2703494503,2233850001&fm=111&gp=0.jpg',
    },
    userName: {
      type: String,
      default: "weiwei3344"
    },
    aboutImg: {
      type: String,
      default: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'
    },
    percentageName: {
      type: Array,
      default: () => []
    },
    percentage: {
      type: Array,
      default: () => []
    },
    customColors: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.about-content {
  margin-top: 40px;
  margin-left: 20px;
  background: #fff;

  .about-img {
    display: flex;
    justify-content: center;
    overflow: hidden;

    &:hover{
      img{
        width: 110%;
        opacity: 1;
      }
    }

    img {
      width: 100%;
      opacity: 0.8;
      transition: .5s;
    }
  }

  .about-title {
    display: flex;
    flex-direction: row;
    align-items: center;

    .about-portrait {
      width: 50px;
      height: 50px;
      margin-left: 20px;
      margin-right: 10px;

      img {
        border-radius: 50%;
        width: 100%;
      }
    }

    .about-name {
      font-size: 20px;
      font-weight: 700;
      color: #4dd9d5;
    }
  }

  .about-skill {
    ul {
      list-style: none;

      li {
        font-size: 14px;
      }
    }
  }
}
</style>
