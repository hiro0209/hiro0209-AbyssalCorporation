<template>
  <header :class="(props.homePage ? 'home-page' : '') + ' background-override'">
    <div id="header-logo">
      <NuxtLink to="/">
        <picture>
          <source srcset="@/public/images/icon.png" media="(max-width: 768px)" type="image/png">
          <NuxtImg src="images/logo.png" alt=""></NuxtImg>
        </picture>
      </NuxtLink>
    </div>
    <nav id="header-menu">
      <div id="header-menu-top">
        <ul>
          <li><NuxtLink to="/">事業紹介</NuxtLink></li>
          <li><NuxtLink to="/">社長のあいさつ</NuxtLink></li>
          <li><NuxtLink to="/">エントリー</NuxtLink></li>
          <li><NuxtLink to="/">アクセス</NuxtLink></li>
        </ul>
      </div>
      <ul id="header-menu-bottom">
        <li id="header-menu-home-link"><NuxtLink to="/">ホーム</NuxtLink></li>
        <li><NuxtLink to="/">会社を知る</NuxtLink></li>
        <li><NuxtLink to="/">社員紹介</NuxtLink></li>
        <li><NuxtLink to="/">採用情報</NuxtLink></li>
        <li><NuxtLink to="/">その他</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  width: calc(100% - 8px);
  height: calc($header-height - 16px);
  padding: 8px 0 8px 8px;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  @include mq(sp) {
    height: calc($header-height-sp - 16px);
    background-color: $base-color;
    box-shadow: 0 1px 8px 1px $accent-color;
  }
  #header-logo {
    width: fit-content;
    height: 100%;
    padding-right: 32px;
    border-right: 2px solid white;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
  #header-menu {
    width: min(1000px, 70%);
    height: 100%;
    #header-menu-top {
      width: 100%;
      height: calc(50% - 1px);
      border-bottom: 1px solid $main-color;
      ul {
        display: flex;
        width: 80%;
        height: 100%;
        margin-left: auto;
      }
    }
    #header-menu-bottom {
      display: flex;
      width: 100%;
      height: calc(50% - 1px);
      border-top: 1px solid $main-color;
    }
    ul li {
      height: 100%;
      flex: 1;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 1.35rem;
        color: white;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        position: relative;
        &::after {
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          background-color: white;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.2s;
        }
        &:hover::after {
          opacity: 0.2;
        }
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