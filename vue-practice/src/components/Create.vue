<template>
  <div>
    <label for="content"></label>
    <div class="form-group">
      <CreateContent @addtion='addtion'></CreateContent>
    </div>
  </div>
</template>

<script>
import CreateContent from './CreateContent';

  export default {
    components: {
      CreateContent,
    },
    methods: {
      addtion(value) {
        this.$emit('addtion', value)
      }
    }
  }
</script>