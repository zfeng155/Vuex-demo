<template>
  <div>
    <a href="https://www.baidu.com/">百度</a>
    <br>
    <br>
    <button @click="baidu">新窗口百度</button>
  </div>
</template>

<script>
export default {
  name: "baidu",
  methods:{
    baidu(){
      window.open("https://www.baidu.com/")
    }
  }
}
</script>

<style scoped>

</style>