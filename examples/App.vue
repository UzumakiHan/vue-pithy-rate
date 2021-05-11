<template>
  <div id="app">
    <!-- 可评分，显示分数 -->
    <vue-pithy-rate :score.sync="score" showScore />
    <!-- 只读，不显示分数 -->
    <vue-pithy-rate :score="1.5" disabled />
    <!-- 只读，显示分数 -->
    <vue-pithy-rate :score="3.6" disabled showScore />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      score: 0,
    };
  },
};
</script>

<style>
</style>
