<template>
  <main>
    <HomeTopView />
    <HomeTopMenu />
    <HomeNews />

    <div id="background">
      <NuxtImg src="images/top.png" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 100vh;
  #background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    img {
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

<script setup>
// ページメタ情報
definePageMeta({ layout: "home-page" });
</script>