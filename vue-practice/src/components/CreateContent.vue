<template>
  <div>
    <label for="content">独り言</label>
    <textarea class="form-control" id="content" rows="3" v-model='content'></textarea>
    <button @click='persist' type="button" class="btn btn-outline-success">保存</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        content: '',
      }
    },
    mounted() {
      if(localStorage.content) {
        this.content = localStorage.content;
      }
    },
    methods: {
      persist() {
        localStorage.content = this.content;
        this.$emit('addtion', this.content);
        // 初期化処理
        this.content = '';
      },
    }
  }
</script>