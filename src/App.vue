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
  <div class="content col-md-12">
    <sidebar class="col-md-2"></sidebar>
  </div>

</div>
</template>

<script>
import Sidebar from './components/sidebar/sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style module>
  .operation {
    width: 100%;
    padding: 10px;
  }
  .content {
    padding: 0 86px;
  }
</style>
