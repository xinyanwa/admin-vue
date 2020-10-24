<template>
  <div class="pie-chart-count">
    <div class="pie-chart" ref="pieChart"></div>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  data() {
    return {
      option: {
        backgroundColor: '#fff',
        /*visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },*/
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              {value: 235, name: '视频广告', itemStyle: {color: '#2ec7c9'}},
              {value: 274, name: '联盟广告', itemStyle: {color: '#b6a2de'}},
              {value: 310, name: '邮件营销', itemStyle: {color: '#5ab1ef'}},
              {value: 335, name: '直接访问', itemStyle: {color: '#ffb980'}},
              {value: 400, name: '搜索引擎', itemStyle: {color: '#d87a80'}}
              // b6a2de
            ],
            roseType: 'angle',
            label: {
              position: 'outer',
              alignTo: 'edge',
              margin: 10
            },
            /*label: {
              normal: {
                textStyle: {
                  color: '#b6a2de'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: '#b6a2de'
                }
              }
            },*/
            /*itemStyle: {
              normal: {
                color: '#c01dec',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }*/
          }
        ]
      }
    }
  },
  methods: {
    initChart() {
      const indexChart = this.$echarts.init(this.$refs.pieChart)
      indexChart.setOption(this.option)
    }
  },
  mounted() {
    setTimeout(() => {
      this.initChart()
    })
    window.onreset = ()=>{
      this.initChart.resize()
    }
  }
}
</script>

<style lang="scss" scoped>
.pie-chart-count {
  width: 100%;
  height: 200px;

  .pie-chart {
    width: 100%;
    height: 200px;
  }
}
</style>
