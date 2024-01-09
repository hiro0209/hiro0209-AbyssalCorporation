<template>
  <main>
    <HomeTopView />
    <HomeTopMenu />
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 100vh;
  background-image: url("/images/top.png");
  background-position: center;
  background-size: cover;
}
</style>

<script setup>
// ページメタ情報
definePageMeta({ layout: "home-page" });
</script>