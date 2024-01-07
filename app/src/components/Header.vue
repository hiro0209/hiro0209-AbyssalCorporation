<template>
  <header :class="props.topPage ? 'top_page' : ''">
    
  </header>
</template>

<style type="scss">
</style>

<script setup>
// Props
const props = defineProps({
  "top-page": {
    type: Boolean,
    default: false
  }
});
</script>