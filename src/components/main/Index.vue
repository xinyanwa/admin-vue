<template>
  <div class="index-content">
    <div class="index-number">
      <el-row :gutter=20 class="number-row">
        <el-col :span="6" v-for="(item,index) in numberInfo" :key="index">
          <div class="number-user">
            <div class="user-img">
              <i :class="item.img"></i>
            </div>
            <div class="user-number">
              <div class="user-title">{{ item.title }}</div>
              <div class="user-index">{{ item.index }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="index-echarts" ref="myChart"></div>
  </div>
</template>

<script>

export default {
  name: "Index",
  data() {
    return {
      option: {
        color:["#85f15a"],
        title: {
          text: '用户注册人数',
          show:false
        },
        tooltip: {},
        legend: {
          data: ['人数']
        },
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月','六月','七月','八月','九月','十月','十一月','十二月']
        },
        yAxis: {},
        series: [{
          name: '人数',
          type: 'line',
          data: [5, 20, 36, 58, 96,20,30,50,60,80,30,10]
        }]
      },
      numberInfo: [
        {
          img: 'el-icon-user-solid',
          title: '访问人数',
          index: '3344',
        },
        {
          img: 'el-icon-s-comment',
          title: '消息通知',
          index: '3344',
        },
        {
          img: 'el-icon-s-finance',
          title: '金额交易',
          index: '3344',
        },
        {
          img: 'el-icon-s-shop',
          title: '商品数量',
          index: '3344',
        },
      ],
    }
  },
  methods: {
    initEcharts() {
      const indexChaert = this.$echarts.init(this.$refs.myChart)
      indexChaert.setOption(this.option)
    },
  },
  mounted() {
    this.initEcharts()
  }
}
</script>

<style scoped lang="scss">
.index-content {
  background: #f7f7f7;

  .index-number {
    .number-row {
      padding: 20px;

      .number-user {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 15px;
        background: #fff;
        &:hover{
          .user-img{
            color: #ffffff!important;
            background: #40c9c6;
          }
        }

        .user-img {
          font-size: 45px;
          padding: 10px 20px;
          border-radius: 10px;
          color: #40c9c6;
        }

        .user-number {
          .user-title {
            color: rgba(0, 0, 0, .45);
            font-size: 16px;
            margin-bottom: 10px;
          }

          .user-index {
            font-size: 20px;
            color: #666;
          }
        }
      }
    }
  }

  .index-echarts {
    width: 100%;
    height: 200px;
  }
}
</style>
