<template>
<div :class="$style.main">
  <div :class="$style.nothingTip">
    工作区
  </div>
  <div>
    <label>{{ title }}</label>
    <div :class="$style.templateFrame">

    </div>

  </div>

</div>
</template>

<script>

export default {
  data () {
    return {
      'title': '顶部组件'
    }
  }
}
</script>

<style module src="./mainContent.postcss"></style>
