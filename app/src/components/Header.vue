<template>
  <header :class="props.homePage ? 'home-page' : ''">
    <div id="header-logo">
      <NuxtLink to="/">
        <picture>
          <source srcset="@/public/images/icon.png" media="(max-width: 768px)" type="image/png">
          <NuxtImg src="images/logo.png" alt=""></NuxtImg>
        </picture>
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: calc(100% - 8px);
  height: calc($header-height - 16px);
  padding: 8px 0 8px 8px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  @include mq(sp) {
    height: calc($header-height-sp - 16px);
  }
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