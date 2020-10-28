<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'APP',
  provide() {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true                    //控制视图是否显示的变量
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;            //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true;         //再打开
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  padding: 0;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
