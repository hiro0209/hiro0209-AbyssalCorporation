<template>
  <div class="background-override" id="home-top-view">
    <div id="home-top-view-wrapper">
      <div id="home-top-view-title">
        <h2 id="com-catch-copy">夢を現実にする会社</h2>
        <h1 id="com-name"><span>ア</span>ビサル・コーポレーション</h1>
        <p id="com-name-en">Abyssal Corporation</p>
      </div>
    </div>
  </div>
</template>

<style type="scss" scoped>
#home-top-view {
  width: 100%;
  height: calc(100vh - 120px);
  padding-top: 120px;
  #home-top-view-wrapper {
    display: flex;
    width: min(1400px, 100%);
    height: 100%;
    margin: 0 auto;
    align-items: center;
    #home-top-view-title {
      width: 100%;
      margin-bottom: 200px;
      #com-catch-copy {
        /* font-size: 38px */
        font-size: 2.111rem;
        font-weight: 400;
        color: white;
        line-height: 1;
        margin-bottom: 40px;
        padding-left: 8px;
      }
      #com-name {
        /* font-size: 100px */
        font-size: 5.556rem;
        font-weight: 400;
        line-height: 1.1;
        color: white;
        span {
          font-size: 6.222rem;
          color: #5296ff;
        }
      }
      #com-name-en {
        /* font-size: 38px */
        font-size: 2.111rem;
        color: #5296ff;
        padding-left: 8px;
      }
    }
  }
}
</style>