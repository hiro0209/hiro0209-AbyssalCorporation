<template>
  <section class="footer-menu-main">
    <h3 class="footer-menu-caption">{{ props.title }}</h3>
    <ol class="footer-menu-links">
      <li v-for="link in props.content" :key="link"><NuxtLink :to="link.url">{{ link.name }}</NuxtLink></li>
    </ol>
  </section>
</template>

<style lang="scss" scoped>
.footer-menu-main {
  .footer-menu-caption {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
  }
  .footer-menu-links {
    max-width: calc(100% - 22px);
    list-style: decimal;
    margin-top: 4px;
    padding-left: 22px;
    li {
      width: fit-content;
      a {
        display: block;
        width: fit-content;
        font-size: 1.35rem;
        color: black;
        text-decoration: none;
        line-height: 1.5;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>

<script setup>
// プロパティ
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  }
});
</script>