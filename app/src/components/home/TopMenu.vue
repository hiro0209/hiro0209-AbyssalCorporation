<template>
  <section class="background-override" id="top-menu">
    <div class="wrapper">
      <h2 class="section-title" id="top-menu-title">
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
  position: relative;
  z-index: 1;
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
    color: white;
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