<template>
  <section class="background-override" id="top-menu">
    <div class="wrapper">
      <h2 id="top-menu-title">
        <span>会</span>社について知る
      </h2>
      <nav>
        <ul id="top-menu-main">
          <li>
            <NuxtLink class="top-menu-link" top="/">
              <h3 class="top-menu-caption">企業理念</h3>
              <NuxtImg class="top-menu-image" src="images/philosophy.png" alt="" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="top-menu-link" top="/">
              <h3 class="top-menu-caption">事業紹介</h3>
              <NuxtImg class="top-menu-image" src="images/business.png" alt="" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="top-menu-link" top="/">
              <h3 class="top-menu-caption">会社概要</h3>
              <NuxtImg class="top-menu-image" src="images/overview.png" alt="" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#top-menu {
  display: flex;
  width: 100%;
  padding: 64px 0 160px 0;
  flex-direction: column;
  @include mq(sp) {
    align-items: center;
    .wrapper {
      width: calc(100% - 48px);
      background-color: $base-color;
      border-radius: 4px;
      padding: 12px 8px;
    }
  }
  // タイトル(会社について知る)
  #top-menu-title {
    display: block;
    width: calc(100% - 50px);
    /* font-size: 24px <= 45px(pc) <= 56px  */
    font-size: clamp(1.5rem, convert_px_to_vw(45), 3.5rem);
    font-weight: 400;
    line-height: 1;
    color: white;
    margin-left: 50px;
    position: relative;
    @include mq(sp) {
      color: black;
      margin-left: 28px;
    }
    span {
      /* font-size: 28px <= 56px(px) <= 70px */
      font-size: clamp(1.75rem, convert_px_to_vw(56), 4.375rem);
      color: $main-color;
    }
    &::before {
      display: block;
      content: "";
      width: 20px;
      height: 26px;
      border: 2px solid $main-color;
      margin-right: 20px;
      position: absolute;
      left: -50px;
      bottom: 10px;
      @include mq(sp) {
        width: 16px;
        height: 16px;
        left: -28px;
        bottom: 3px;
      }
    }
  }
  // メニュー本体
  #top-menu-main {
    display: flex;
    width: 100%;
    margin-top: 64px;
    justify-content: space-around;
    @include mq(sp) {
      width: calc(100% - 32px);
      margin-top: 24px;
      padding: 0 16px;
      flex-direction: column;
    }
    li {
      width: min(368px, 33.333%);
      @include mq(sp) {
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 16px;
        }
      }
      .top-menu-link {
        display: block;
        width: 100%;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          .top-menu-caption {
            color: $main-color;
          }
          .top-menu-image {
            box-shadow: 0 0 4px 4px white;
            transform: scale(1.04);
          }
        }
      }
      .top-menu-caption {
        // font-size: 20px <= 28px(pc)
        font-size: clamp(1.25rem, convert_px_to_vw(28), 1.75rem);
        font-weight: 400;
        color: white;
        text-align: center;
        transition: color 0.3s;
        @include mq(sp) {
          font-weight: 600;
          color: $accent-color;
        }
      }
      .top-menu-image {
        width: 100%;
        margin-top: 16px;
        transition: transform 0.3s, box-shadow 0.5s;
        @include mq(sp) {
          margin-top: 4px;
        }
      }
    }
  }
}
</style>