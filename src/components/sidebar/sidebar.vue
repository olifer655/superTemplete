<template>
<div>
  <ul class="sidebar">
    <label class="title">模块</label>
    <li class="moudel" v-for="item in templateName">
        <span>{{ item.name }}</span>
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
  }
}
</script>

<style src="./sidebar.postcss"></style>
