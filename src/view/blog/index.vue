<template>
  <div>
    <h2>博客主页</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  props: ["id"],
  computed: {
    routerInfo(){
      const { fullPath, path, title, params, query, meta } = this.$route;
      return{
        fullPath, path, title, params, query, meta
      };
    }
  }
}
</script>

<style scoped>

</style>