<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">独り言アプリ</h1>
        <p class="lead">思いのままに思いついたことを書き殴りましょう！！</p>
      </div>
    </div>
    <!-- <button type="button" class="btn btn-outline-success">新しい独り言</button> -->
    <router-link to='/create' class="btn btn-outline-success">新しい独り言</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>