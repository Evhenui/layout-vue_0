<template>
  <section class="latest-section">
    <div class="latest-section-wrapper">
      <div class="latest-section__left-part-wrapper">
        <h1 class="latest-section__title title">Latest from the Blog</h1>
        <div class="latest-section__wrapper-img">
          <img src="@/assets/house.jpg" alt="nature" width="555" height="400" />
        </div>
        <h1 class="latest-section__title-description title">
          How to Prep Your Lawn in the Spring
        </h1>
        <p class="latest-section__subtitle-discription subtitle">
          This is the blog description text. This is the blog description text.
          This is the blog description text.
        </p>
        <a class="latest-section__link-view link-view" href="#"
          >View All Blog Articles</a
        >
      </div>
      <div class="latest-section__right-part-wrapper">
        <div
          class="image-blocks"
          v-for="(item, index) in latestImgBlocks"
          :key="index"
        >
          <div class="latest-section__img-block image-blocks__wrapper">
            <img :src="item.img" alt="" width="245" height="150" />
          </div>
          <p class="image-blocks__discription subtitle">
            {{ item.discription }}
          </p>
        </div>
      </div>
    </div>
    <div class="latest-section__footer-input">
      <h1 class="latest-section__title-footer title">
        View our list of the best products in lawncare.
      </h1>
      <button class="latest-section__btn-footer btn">See the list</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["latestImgBlocks"]),
};
</script>

<style lang="scss">
.latest-section-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 100px 0;
  .latest-section__title {
    font-size: 38px;
    margin: 0 0 30px 0;
  }

  .latest-section__wrapper-img {
    max-width: 555px;
    width: 100%;
    margin: 0 0 10px 0;
    font-size: 0;
    img {
      width: 100%;
      height: auto;
      background: #abc7bb;
      //	#3e5c27
    }
  }

  .latest-section__title-description {
    font-size: 30px;
    margin: 0 0 13px 0;
  }

  .latest-section__subtitle-discription {
    max-width: 520px;
    font-size: 15px;
    margin: 0 0 74px 0;
  }

  .latest-section__right-part-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
.latest-section {
  margin: 0 0 100px 0;

  &__footer-input {
    padding: 30px 25px;
    border-radius: 10px;
    background-image: url("@/assets/bg-image-input.png");
    background-size: cover;
    display: flex;
    justify-content: space-between;
  }

  .latest-section__title-footer {
    font-family: "Bitter", sans-serif;
    font-weight: 400;
    font-size: 28px;
    color: #1d2f38;
    position: relative;
    padding: 0 0 0 70px;
    &::before {
      content: "";
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-image: url("@/assets/input-img.svg");
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .image-blocks {
    .latest-section__img-block {
        max-width: 245px;
      }
      p {
        font-size: 18px;
      }
  }
 
}
</style>
