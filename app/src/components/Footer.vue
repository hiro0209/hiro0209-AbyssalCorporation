<template>
  <footer>
    <div class="wrapper">
      <nav id="footer-menu">
        <div class="footer-menu-container">
          <FooterMenu :title="footerMenu.getComInfo.title" :content="footerMenu.getComInfo.content" />
          <FooterMenu :title="footerMenu.careers.title" :content="footerMenu.careers.content" />
        </div>
        <div class="footer-menu-container">
          <FooterMenu :title="footerMenu.employees.title" :content="footerMenu.employees.content" />
          <FooterMenu :title="footerMenu.others.title" :content="footerMenu.others.content" />
        </div>
      </nav>
      <section id="com-info">
        <h3><NuxtImg src="images/logo.png" alt="logo" /></h3>
        <div id="com-info-container">
          <p>住所　〇〇県〇〇市〇〇　〇－〇－〇</p>
          <p>郵便番号　〇〇〇－〇〇〇〇</p>
          <p>代表　〇〇〇〇</p>
          <p>電話番号　〇〇〇－〇〇〇〇－〇〇〇〇</p>
        </div>
      </section>
    </div>
    <div id="copy-right">
      <p><small>&copy; {{ nowYear }} Abyssal Corporation.inc All rights reserved</small></p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: #E8E8E8;
  .wrapper {
    display: flex;
    justify-content: space-between;
    padding: 100px 0;
    #footer-menu {
      display: flex;
      width: min(540px, 50%);
      justify-content: space-between;
      .footer-menu-container {
        width: fit-content;
        .footer-menu-main:not(:first-child) {
          margin-top: 64px;
        }
      }
    }
    #com-info {
      max-width: 50%;
      img {
        width: min(400px, 100%);
      }
      p {
        margin-top: 16px;
      }
    }
  }
  #copy-right {
    display: flex;
    width: 100%;
    padding: 24px 0;
    border-top: 2px solid #C8C8C8;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script setup>
// フッターメニュー内容
const footerMenu = {
  getComInfo: {
    title: "会社を知る",
    content: [
      {
        name: "会社概要",
        url: "/"
      },
      {
        name: "企業理念",
        url: "/"
      },
      {
        name: "事業紹介",
        url: "/"
      }
    ]
  },
  employees: {
    title: "社員紹介",
    content: [
      {
        name: "社長のあいさつ",
        url: "/"
      },
      {
        name: "役員紹介",
        url: "/"
      },
      {
        name: "主力人員紹介",
        url: "/"
      }
    ]
  },
  careers: {
    title: "採用情報",
    content: [
      {
        name: "概要",
        url: "/"
      },
      {
        name: "求める人材",
        url: "/"
      },
      {
        name: "エントリー",
        url: "/"
      }
    ]
  },
  others: {
    title: "その他",
    content: [
      {
        name: "アクセス",
        url: "/"
      },
      {
        name: "お問い合わせ",
        url: "/"
      }
    ]
  }
};

// 今の西暦
const nowYear = new Date().getFullYear();
</script>