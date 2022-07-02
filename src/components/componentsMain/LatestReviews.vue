<template>
  <section class="latest-reviews">
    <h1 class="latest-reviews__title title">Latest Product Reviews</h1>
    <div class="latest-reviews__latest-items-wrapper">
      <div
        class="latest-reviews__item-img"
        v-for="(item, index) in latestReviewsItems"
        :key="index"
      >
        <div class="latest-reviews__img-wrapper">
          <img :src="item.img" alt="our advantages" />
        </div>
        <h1 class="latest-reviews__item-title title">{{ item.title }}</h1>
        <p class="latest-reviews__item-subtitle subtitle">
          {{ item.subtitle }}
        </p>
      </div>
    </div>
    <a href="#" class="latest-reviews__link-view link-view"
      >View all Product Reviews</a
    >
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["latestReviewsItems"]),
};
</script>

<style lang="scss">
.latest-reviews {
  margin: 0 0 100px 0;
  .latest-reviews__title {
    font-size: 38px;
    margin: 0 0 33px 0;
  }

  &__latest-items-wrapper {
    display: flex;
    justify-content: space-between;
    flex: 1 1 200px;
    margin: 0 0 40px 0;
    gap: 5px;
  }

  &__item-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #f7f9fa;
    border-radius: 10px;
    min-height: 100%;
    overflow: hidden;
    flex: 0 1 350px;
    padding: 0 0 40px 0;
  }

  &__img-wrapper {
    font-size: 0;
    max-width: 357px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .latest-reviews__item-title {
    font-weight: 400;
    font-size: 30px;
  }

  .latest-reviews__item-subtitle {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    max-width: 300px;
    flex: 1 1 auto;
  }
}
@media (max-width: 991.98px) {
  .latest-reviews {
    text-align: center;
    .latest-reviews__title {
      font-size: 48px;
    }

    &__latest-items-wrapper {
      flex-direction: column;
    }

    &__item-img {
      padding: 30px 0;
      margin: 0 0 20px 0;
      flex: 1;
    }
  }
}

@media (max-width: 767.98px) {

}
</style>
