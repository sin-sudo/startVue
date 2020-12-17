<template>
  <div>
    <label for="content"></label>
    <div class="form-group">
      <label for="content">独り言</label>
      <textarea class="form-control" id="content" rows="3" v-model='content'></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        content: '',
      }
    }
  }
</script>