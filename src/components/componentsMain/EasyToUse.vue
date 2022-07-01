<template>
  <section class="easy-to-use-section">
    <div class="easy-to-use-section__wrapper">
      <div class="easy-to-use-section__main-img">
        <img
          src="@/assets/girl-with-table.png"
          alt="girl with table"
          width="500"
          height="386"
        />
      </div>
      <div class="easy-to-use-section__main-text-info">
        <p class="easy-to-use-section__subtitle-top subtitle">
          Introducing Affiliate Template for Webflow
        </p>
        <h1 class="easy-to-use-section__title-top title">
          Easy-to-use Template for building Affiliate Sites
        </h1>
        <p class="easy-to-use-section__subtitle-bottom subtitle">
          Affiliate is a Webflow template made for entrepreneurs who want a
          professional and polished site ready to start and grow their affiliate
          marketing business in any niche.
        </p>
        <button
          class="easy-to-use-section__btn-green-small btn"
          @click="popupMenuBuyOpen"
        >
          Buy this Template
        </button>
      </div>
    </div>
    <Transition name="modal">
      <PopupBuy v-if="popupMenu.activeBuy" @close="popupMenuBuyClose" />
    </Transition>
  </section>
</template>

<script>
import PopupBuy from "../PopupMenu/PopupBuy.vue";
import PopupMenu from "../PopupMenu/PopupMenu.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { PopupBuy, PopupMenu },
  computed: mapGetters(["headerMenuItems", "popupMenu"]),
  methods: mapMutations(["popupMenuBuyOpen", "popupMenuBuyClose"]),
};
</script>

<style lang="scss">
.easy-to-use-section {
  margin: 0 0 77px 0;
  &__wrapper {
    display: flex;
    align-items: center;
    background: #e3ebf1;
    border-radius: 10px;
    padding: 80px 100px;
    justify-content: space-between;
  }

  &__main-img {
    max-width: 500px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }

  &__main-text-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  &__subtitle-top {
    color: #10843f;
  }

  &__title-top {
    max-width: 490px;
  }

  &__subtitle-bottom {
    max-width: 470px;
  }
}

@media (max-width: 991.98px) {
  .easy-to-use-section {
    &__wrapper {
      padding: 50px 20px;
      gap: 20px;
    }

    &__main-text-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }

    .easy-to-use-section__subtitle-top {
      font-size: 15px;
      max-width: 100%;
    }

    .easy-to-use-section__title-top {
      font-size: 20px;
      line-height: 34px;
    }

    .easy-to-use-section__subtitle-bottom {
      font-size: 15px;
    }
  }
}
@media (max-width: 767.98px) {
  .easy-to-use-section {
    &__main-img {
      display: none;
    }

    &__main-text-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 30px;
    }

    &__subtitle-top, &__title-top, &__subtitle-bottom {
      max-width: 100%;
    }
  }
}
</style>
