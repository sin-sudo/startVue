<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">独り言アプリ</h1>
        <p class="lead">思いのままに思いついたことを書き殴りましょう！！</p>
      </div>
    </div>
    <router-link to='/create' class="btn btn-outline-success">新しい独り言</router-link>
    <router-link to='/list' class="btn btn-outline-primary">独り言を一覧表示する</router-link>
    <router-view @addtion='addtion'></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      content: '',
    }
  },
  methods: {
    addtion(value) {
      this.content = value;
    }
  }
}
</script>