<template>
 <div>
   <h2>问题列表页</h2>
   <router-link :to="{ name: 'questionView', params:{ id: '1' } }">
     题一
   </router-link>
   <br>
   <br>
   <router-link :to="{ name: 'questionView', params:{ id: '2' } }">
     题二
   </router-link>
   <br>
   <br>
   <router-link :to="{ name: 'questionView', params:{ id: '3' } }">
     思考SPA的缺点
   </router-link>
 </div>
</template>

<script>
export default {
  name: "questionList"
}
</script>

<style scoped>

</style>