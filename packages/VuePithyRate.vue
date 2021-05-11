<template>
  <div class="rate">
    <i
      v-for="i in 5"
      class="iconfont"
      @mouseenter="disabled ? '' : (currentScore = i)"
      @mouseleave="disabled ? '' : (currentScore = '')"
      @click="disabled ? '' : setScore(i)"
      :class="[
        getClass(i),
        disabled && i == Math.floor(score) + 1 ? 'icon-star-half' : '',
      ]"
      :key="i"
    >
    </i>
    <span v-if="showScore">{{ currentScore || score }}分</span>
  </div>
</template>
<script>
export default {
  name: "vue-pithy-rate",
  props: {
    score: {
      type: Number,
      default: 0,
      //required: true
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentScore: "",
    };
  },
  methods: {
    getClass(i) {
        // console.log(i);
      if (this.currentScore === "") {
        return i <= this.score ? "icon-star-o" : "icon-star";
      } else {
        return i <= this.currentScore ? "icon-star-o" : "icon-star";
      }
    },
    setScore(i) {
      this.$emit("update:score", i); //使用`.sync`修饰符，对score 进行“双向绑定
    },
  },
};
</script>