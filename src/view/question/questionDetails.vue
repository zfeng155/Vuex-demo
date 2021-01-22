<template>
  <div>
    <h2>问题详情页</h2>
    问题{{ id }}:
    <b v-if="id==1">
      1+1=2
    </b>
    <b v-if="id==2">
      2+2=4
    </b>
    <b v-if="id==3">
      它可以改变父组件的router-view，但是父组件中除router-view之外的东西仍然会保留下来，
      <br>
      可是有时候我并不想要他，又不知道怎么去掉。其次就是通过写的例子感觉有点像分叉数，从一个分支
      <br>
      跳到另一个分支的时候，要一层一层跳出去直到他们的共同父节点再进入另一个分支。
      <br>
      还有就是初次加载耗时比较长。
    </b>
  </div>
</template>

<script>
export default {
  name: "questionDetails",
  props: ["id"]
}
</script>

<style scoped>

</style>