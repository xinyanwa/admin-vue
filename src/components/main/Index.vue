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
    <LineChart :option="option"/>
  </div>
</template>

<script>

import LineChart from "@/components/main/LineChart";
export default {
  name: "Index",
  components: {LineChart},
  data() {
    return {
      option: {title: {
          /*text: '最近2天pv图',
          textStyle:{
            color: 'blue',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
          }*/
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['预计人数','实际人数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'预计人数',
            type:'line',
            color:'#0ee7d5',
            smooth:true,
            stack: '总量',
            data:[30,20,10,15]
          },
          {
            name:'实际人数',
            type:'line',
            color:'#ab1acb',
            smooth:true,
            stack: '总量',
            data:[30,20,10,15]
          }
        ]
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
  methods: {},
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

        &:hover {
          .user-img {
            color: #ffffff !important;
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
}
</style>
