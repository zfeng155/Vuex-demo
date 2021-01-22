<template>
  <div>
    <h3>{{ id }}的个人信息</h3>
    <img src="~@/assets/mylover.jpg" height="300">
    <p>姓名：刘亦菲</p>
    <p>年龄：18</p>
    <p>籍贯：布吉岛</p>
    <p>个人简介：这个人很懒，什么都没有留下哦。</p>
  </div>
</template>

<script>
export default {
  name: "personalDetails",
  props: ["id"]
}
</script>

<style scoped>

</style>