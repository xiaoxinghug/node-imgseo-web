<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './less/reset.less';
#app{
  overflow:hidden;
}
</style>
