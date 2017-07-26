<template>
<div id="app">
  <div class="operation clearfix">
    <div class="pull-right">
      <button type="button" class="btn btn-default btn-sm">
        <span class="glyphicon glyphicon-time"></span>关闭自动保存
      </button>
      <button type="button" class="btn btn-warning btn-sm">
        <span class="glyphicon glyphicon-qrcode"></span> 微信效果测试
  			</button>
      </button>
      <button type="button" class="btn btn-info btn-sm">
        <span class="glyphicon glyphicon-search"></span> 阅览活动
      </button>
      <button type="button" class="btn btn-info btn-sm">
  			<span class="glyphicon glyphicon-floppy-open"></span> 保存活动
  		</button>
    </div>
  </div>
  <div :class="$style.content">
    <sidebar></sidebar>
    <main-content></main-content>
    <configuration></configuration>
  </div>

</div>
</template>

<script>
import Sidebar from './components/sidebar/sidebar'
import MainContent from './components/mainContent/mainContent'
import Configuration from './components/configuration/configuration'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Sidebar,
    MainContent,
    Configuration
  }
}
</script>

<style module>
  .operation {
    width: 100%;
    padding: 10px;
  }
  .content {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 40px 0;
    display: flex;
    justify-content: center;
  }
</style>
