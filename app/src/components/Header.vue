<template>
  <header :class="props.homePage ? 'home-page' : ''">
    <div id="header-logo">
      <NuxtLink to="/"><NuxtImg src="images/logo.png"></NuxtImg></NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: calc(100% - 8px);
  height: 104px;
  padding: 8px 0 8px 8px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  #header-logo {
    width: fit-content;
    height: 100%;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
}
</style>

<script setup>
// Props
const props = defineProps({
  "home-page": {
    type: Boolean,
    default: false
  }
});
</script>