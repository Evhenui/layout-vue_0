<template>
  <footer class="footer">
    <section class="footer__left-section">
      <a href="" class="footer__logo">
        <img src="@/assets/logo.png" alt="logo" />
      </a>
      <div class="footer__links-wrapper">
        <a href="https://www.facebook.com/business/help/166603445593574">
          <img src="@/assets/facebook-item.png" alt="facebook link" />
        </a>
        <a href="https://twitter.com/tipsaffiliates">
          <img src="@/assets/twitter-item.png" alt="twitter link" />
        </a>
        <a href="https://creators.instagram.com/earn-money/affiliate">
          <img src="@/assets/instagram-item.png" alt="instagram link" />
        </a>
      </div>
      <p class="footer__subtitle subtitle">
        Affiliate is a Webflow template made for entrepreneurs who want a
        professional and polished site ready to start and grow their affiliate
        marketing business in any niche.
      </p>
    </section>
    <section class="footer__central-section">
      <h1 class="footer__title title">Latest Articles</h1>
      <div class="image-blocks" v-for="(item, index) in footerImg" :key="index">
        <div class="image-blocks__wrapper">
          <img :src="item.img" alt="" width="139" height="100" />
        </div>
        <p class="image-blocks__discription subtitle">
          {{ item.discription }}
        </p>
      </div>
    </section>
    <section class="footer__right-section">
      <h1 class="footer__title title">Browse</h1>
      <form action="" class="footer__form">
        <input type="text" class="footer__input input" />
        <button class="footer__btn-grey btn">Search</button>
      </form>
      <nav class="footer__nav">
        <ul class="footer__list-menu">
          <li
            class="footer__item-menu"
            v-for="(item, index) in footerNavigationItems"
            :key="index"
          >
            <a href="" class="item-link">{{ item.itemName }}</a>
          </li>
        </ul>
      </nav>
      <p class="footer__subtitle subtitle">©2022 Your Brand Name</p>
    </section>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: mapGetters([
    "latestImgBlocks",
    "footerNavigationItems",
    "footerImg",
  ]),
};
</script>

<style lang="scss">
.footer {
  padding: 60px 125px;
  display: flex;
  justify-content: space-between;
  background: #F7F9FA;
  &__left-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .footer__logo {
      display: inline-block;
      font-size: 0;
      max-width: 155px;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  &__links-wrapper {
    a {
      display: inline-block;
      font-size: 0;
    }
  }

  .footer__subtitle {
    max-width: 340px;
    font-size: 16px;
    line-height: 20px;
    color: #1d2f38;
  }

  &__central-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer__title {
    font-size: 30px;
    color: #333333;
  }

  &__right-section {
    .footer__title {
      margin: 0 0 10px 0;
    }
  }

  &__form {
    margin: 0 0 20px 0;
  }

  .footer__input {
    padding: 120x 0;
    border-radius: 5px 0px 0px 5px;
  }

  .footer__btn-grey {
    padding: 12px;
    background: #768f9c;
    border-radius: 0px 5px 5px 0px;
  }

  &__nav {
    margin: 0 0 20px 0;
    border-bottom: 1px solid #536D7A;
    padding: 0 0 25px 0;
  }

  &__list-menu {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  &__item-menu {
    a {
      font-size: 16px;
    }
  }
}
.image-blocks {
  .image-blocks__wrapper {
    max-width: 139px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .image-blocks__discription {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #1d2f38;
  }
}
@media (max-width: 767.98px) {
  .footer {display: none;}
}
</style>
