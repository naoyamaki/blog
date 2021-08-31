<template>
  <div class="rgb-checker">
    <div class="rgb-input">
      <input v-model="red" type="range" min="0" max="255" step="1">
      <p>red is: {{ red }}</p>
      <input v-model="green" type="range" min="0" max="255" step="1">
      <p>green is: {{ green }}</p>
      <input v-model="blue" type="range" min="0" max="255" step="1">
      <p>blue is: {{ blue }}</p>
    </div>
    <p class="rgb-output">rgb({{red}},{{green}},{{blue}})の結果は
      <span v-bind:style="{ backgroundColor: 'rgb('+red+','+green+','+blue+')'}"></span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.rgb-checker {
  border-radius: 8px;
  background-color: #eeeeee;
  margin: 8px;
  padding: 8px;
  .rgb-input {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    >input {
      box-sizing: border-box;
      width: 60%;
      margin: 0;
    }
    >p {
      box-sizing: border-box;
      width: 40%;
      margin: 0;
      padding-left:16px;
    }
  }
  .rgb-output > span {
    width: 16px;
    height: 16px;
    display: inline-block;
  }
}
</style>

<script>
  export default {
    data() {
      return {
        red: 0,
        green: 0,
        blue: 0,
        sample: 'red'
      }
    }
  }
</script>