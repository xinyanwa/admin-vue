<template>
  <div class="index-echarts">
    <div class="echarts" ref="myChart">
    </div>
  </div>
</template>

<script>
export default {
  name: "LineChart",
  data() {
    return {
    }
  },
  props:{
    option:{
      default:Object,
    }
  },
  methods:{
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

<style lang="scss" scoped>
.index-echarts {
  width: 100%;
  height: 200px;
  margin: 0 auto;
  background: #f7f7f7;
  .echarts{
    margin: 20px;
    height: 200px;
    background: #fff;
  }
}
</style>
