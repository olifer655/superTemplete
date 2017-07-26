<template>
<div>
  <div :class="$style.configArea">
    <div :class="$style.baseConfig">
      <!-- :class="{ show: isShow, 'noShow': !isShow }" -->
      <label :class="$style.baseTitle" @click="isShow = !isShow">活动基础设置 </label>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      'isShow': true
    }
  },
  mounted() {
    (()=> {
      console.log(SyApp)
    })()

  }
}
</script>

<style module src="./configuration.postcss"></style>
