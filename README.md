# vue-pithy-rate

## 方式一：从Github下载

github地址：

```
https://github.com/Jane-He628/vue-pithy-rate
```

```
yarn install
或者
cnpm install
```

运行：

```
yarn serve
或者
npm run serve
```

## 方式二：从npm下载
npm packages地址：

```
https://www.npmjs.com/package/vue-pithy-rate
```

```
cnpm install vue-pithy-rate --save 
或者
yarn add vue-pithy-rate
```

引入：

在`mian.js`中引入

```
import VuePithyRate from 'vue-pithy-rate'

import 'vue-pithy-rate/dist/vue-pithy-rate.css'

Vue.use(VuePithyRate)
```

使用：

```
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


```

说明：

|  参数名   |  类型   | 是否必传 |                 说明                  |
| :-------: | :-----: | :------: | :-----------------------------------: |
|   score   | Number  |    是    |      分数 ，默认0，保留一位小数       |
| disabled  | Boolean |    否    | 是否只读，默认false，鼠标点击可以打分 |
| showScore | Boolean |    否    |        是否显示分数，默认false        |

效果：

![](https://i.loli.net/2021/05/11/B3QyHCUxEe9cji4.png)