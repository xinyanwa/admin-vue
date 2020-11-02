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
    <div class="pie-chart">
      <div class="pie-chart-count">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(index) in 3" :key="index">
            <PieChart :pie-data="pieChart[index-1]" class="pie-chart-index"/>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="about-target">
      <el-row :gutter=20>
        <el-col :span="6">
          <AboutMe :percentage-name="percentageName" :percentage="percent" :custom-colors="customColors"/>
        </el-col>
        <el-col :span="6">
          <TodoMVC/>
        </el-col>
        <el-col :span="12">
          <Target/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import LineChart from "@/components/main/LineChart";
import PieChart from "@/components/main/PieChart";
import AboutMe from "@/components/main/aboutme/AboutMe";
import TodoMVC from "@/components/main/todomvc/TodoMVC";
import Target from "@/components/main/target/Target";

export default {
  name: "Index",
  components: {Target, TodoMVC, AboutMe, PieChart, LineChart},
  data() {
    return {
      option: {
        title: {
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
          data: ['预计人数', '实际人数']
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
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '预计人数',
            type: 'line',
            color: '#0ee7d5',
            smooth: true,
            stack: '总量',
            data: [30, 20, 10, 95, 60, 140, 56, 38, 56, 48, 56, 86]
          },
          {
            name: '实际人数',
            type: 'line',
            color: '#ab1acb',
            smooth: true,
            stack: '总量',
            data: [30, 20, 100, 15, 48, 56, 28, 68, 95, 94, 56, 86]
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
          index: '33',
        },
        {
          img: 'el-icon-s-finance',
          title: '金额交易',
          index: '3124',
        },
        {
          img: 'el-icon-s-shop',
          title: '商品数量',
          index: '3586',
        },
      ],
      percent: [
        78, 68, 80, 72
      ],
      percentageName: [
        'Vue', 'JavaScript', 'HTML', 'CSS'
      ],
      customColors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#1989fa', percentage: 60},
        {color: '#48ff9f', percentage: 70},
        {color: '#5cb87a', percentage: 80},
        {color: '#6f7ad3', percentage: 100},
      ],
      pieChart: [
        [
          {value: 225, name: '我喜欢你', itemStyle: {color: '#2ec7c9'}},
          {value: 274, name: '无论啥时', itemStyle: {color: '#b6a2de'}},
          {value: 310, name: '无论何地', itemStyle: {color: '#5ab1ef'}},
          {value: 335, name: '义无反顾', itemStyle: {color: '#ffb980'}},
          {value: 400, name: '去支持你', itemStyle: {color: '#d87a80'}}
        ],
        [
          {value: 225, name: '网站消息', itemStyle: {color: '#2eb7c9'}},
          {value: 274, name: '客服私聊', itemStyle: {color: '#d8a2de'}},
          {value: 310, name: '联系站长', itemStyle: {color: '#5aefd9'}},
          {value: 335, name: '商品消息', itemStyle: {color: '#ffd080'}},
          {value: 400, name: '人工服务', itemStyle: {color: '#d87aa3'}}
        ],
        [
          {value: 225, name: '菠萝系列', itemStyle: {color: '#2ec98b'}},
          {value: 274, name: '大米系列', itemStyle: {color: '#a2b1de'}},
          {value: 310, name: '蓝米系列', itemStyle: {color: '#c75aef'}},
          {value: 335, name: '山寨系列', itemStyle: {color: '#ffdf80'}},
          {value: 400, name: '蓝光系列', itemStyle: {color: '#cad87a'}}
        ]
      ],
    }
  },
  computed: {},
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

  .pie-chart {
    width: 100%;
    height: 200px;
    background: #f7f7f7;

    .pie-chart-count {
      margin-top: 20px;
      height: 200px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;

      .el-row {
        width: 100%;
        margin-left: 20px !important;
        margin-right: 20px !important;

        .el-col {
          &:first-child {
            padding-left: 0 !important;
          }

          &:last-child {
            padding-right: 0 !important;
          }
        }
      }
    }
  }

  .about-target {
    .el-row {
      width: 100%;
      margin-right: 20px !important;
    }
  }

}
</style>
