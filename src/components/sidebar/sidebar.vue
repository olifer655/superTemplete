<template>
<div>
  <ul :class="$style.sidebar">
    <label :class="$style.title">模块</label>
    <li :class="$style.moudel" draggable="true" v-for="item in templateName">
        <span :class="$style.moudelName">{{ item.name }}</span>
        <i class="glyphicon glyphicon-plus-sign"></i>
    </li>
  </ul>
</div>
</template>

<script>
import TemplateName from './sidebar.json'

export default {
  data () {
    return {
      templateName: TemplateName
    }
  },
  mounted() {

  }
}
</script>

<style module src="./sidebar.postcss"></style>
