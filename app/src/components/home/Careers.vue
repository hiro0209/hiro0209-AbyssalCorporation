<template>
  <NuxtLink id="careers" to="/">
    <div class="background-override" id="careers-container">
      <h2><NuxtImg src="images/icon.png" /><span class="section-title" id="careers-title"><span>採</span>用情報</span></h2>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
#careers {
  display: block;
  width: 100%;
  height: 600px;
  text-decoration: none;
  background-image: url("images/recruit.png");
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover::after {
    opacity: 0.2;
  }
  #careers-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    h2 {
      display: flex;
      align-items: center;
      img {
        width: 124px;
        height: 124px;
      }
      #careers-title {
        // font-size: 64px
        font-size: 4rem;
        color: white;
        margin-left: 16px;
        &::before {
          display: none;
        }
        span {
          // font-size: 76px
          font-size: 4.75rem;
        }
      }
    }
  }
}
</style>