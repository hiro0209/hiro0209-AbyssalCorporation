<template>
  <div class="background-override" id="home-top-view">
    <div id="home-top-view-wrapper">
      <div id="home-top-view-title">
        <h2 id="com-catch-copy">夢を現実にする会社</h2>
        <h1 id="com-name"><span>ア</span>ビサル<span></span>コーポレーション</h1>
        <p id="com-name-en">Abyssal Corporation</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home-top-view {
  width: 100%;
  height: calc(100vh - 120px);
  padding-top: $header-height;
  @include mq(sp) {
    padding-top: $header-height-sp;
  }
  #home-top-view-wrapper {
    display: flex;
    width: min(1400px, 100%);
    height: 100%;
    margin: 0 auto;
    align-items: center;
    @include mq(sp) {
      width: calc(100% - 16px);
      padding: 0 8px;
    }
    #home-top-view-title {
      width: 100%;
      margin-bottom: 200px;
      #com-catch-copy {
        // font-size: 20px <= 38px(pc) <= 42px
        font-size: clamp(1.25rem, convert_px_to_vw(38), 2.625rem);
        font-weight: 400;
        color: white;
        line-height: 1;
        margin-bottom: 40px;
        padding-left: 8px;
        @include mq(sp) {
          margin-bottom: 8px;
          padding: 0;
        }
      }
      #com-name {
        // font-size: 50px <= 100px(pc)
        font-size: clamp(2rem, convert_px_to_vw(100), 6.25rem);
        font-weight: 400;
        line-height: 1.1;
        color: white;
        span:first-child {
          // font-size: 42px <= 110px(pc)
          font-size: clamp(2.625rem, convert_px_to_vw(110), 6.875rem);
          color: $main-color;
        }
        span:nth-child(2)::before {
          content: "・";
        }
        @include mq(sp) {
          span:nth-child(2)::before {
            content: "\A";
            white-space: pre;
          }
          span:nth-child(2)::after {
            content: "　";
          }
        }
      }
      #com-name-en {
        /* font-size: 32px <= 36px(pc) */
        font-size: clamp(2rem, convert_px_to_vw(36), 2.25rem);
        color: $main-color;
        padding-left: 8px;
      }
    }
  }
}
</style>