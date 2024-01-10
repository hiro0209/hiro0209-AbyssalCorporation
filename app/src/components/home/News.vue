<template>
  <section id="news">
    <div class="wrapper">
      <div id="news-header">
        <h2 class="section-title" id="news-title">
          <span>新</span>着情報
        </h2>
        <NuxtLink id="news-link" to="/">すべてのお知らせを見る</NuxtLink>
      </div>
      <ul id="news-list">
        <li v-for="news in newsList" :key="news" :id="news.id">
          <div class="news-list-date">
            <span>{{ news.date.year }}</span>
            <span>{{ `${news.date.month}`.length < 2 ? `0${news.date.month}` : news.date.month }}</span>
            <span>{{ `${news.date.day}`.length < 2 ? `0${news.date.day}` : news.date.day }}</span>
          </div>
          <div class="news-list-content">
            <span>{{ news.content }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#news {
  width: 100%;
  background-color: $base-color;
  padding: 64px 0;
  // タイトル含めた上部
  #news-header {
    display: flex;
    align-items: flex-end;
    // タイトル(新着情報)
    #news-title {
      width: fit-content;
    }
    // すべてのお知らせを見る
    #news-link {
      font-size: 1.25rem;
      color: $main-color;
      margin: 0 auto 0 64px;
      &:visited {
        color: $accent-color;
      }
      &:hover {
        color: #7cb0ff;
      }
    }
  }
  // お知らせ一覧
  #news-list {
    width: calc(100% - 32px - 32px - 4px);
    margin: 64px 16px 0 16px;
    padding: 0 16px;
    border-left: 2px solid $accent-color;
    border-right: 2px solid $accent-color;
    li {
      display: flex;
      width: calc(100% - 12px);
      height: 80px;
      font-size: 1.35rem;
      padding: 0 6px;
      align-items: center;
      &:not(:last-child) {
        border-bottom: 1px solid black;
      }
      .news-list-date {
        margin-right: 64px;
        span:not(:last-child)::after {
          content: ".";
        }
      }
    }
  }
}
</style>

<script setup>
// ニュースリスト
const { data: newsList } = await useFetch("/api/news");
</script>