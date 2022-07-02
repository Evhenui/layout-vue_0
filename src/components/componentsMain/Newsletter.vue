<template>
  <section class="newsletter">
    <div class="newsletter__wrapper">
      <div class="newsletter__img-wrapper">
        <img src="@/assets/girl-with-letter.svg" alt="girl" />
      </div>
      <div class="newsletter__main-input">
        <h1 class="newsletter__title title">Newsletter Signup</h1>
        <p class="newsletter__subtitle subtitle">
          Be the first to receive updates on articles, product reviews, courses,
          and more!
        </p>
        <form class="newsletter__form" action="">
          <input 
            type="email" 
            class="newsletter__input input" 
            placeholder="Your email"
            required
        />
          <div class="newsletter__btns">
            <button class="newsletter__btn-yellow btn">Submit</button>
            <a class="newsletter__link link-view" href="#">Privacy Policy</a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.newsletter {
  &__wrapper {
    background-image: url("@/assets/bg-image-newsletter.png");
    background-size: cover;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
  }

  &__img-wrapper {
    max-width: 500px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .newsletter__title {
    font-weight: 400;
    font-size: 30px;
    margin: 0 0 45px 0;
  }

  .newsletter__subtitle {
    max-width: 500px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 25px 0;
  }

  .newsletter__btn-yellow {
    background: #ffc728;
    color: #000000;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 12px;
  }

  .newsletter__link {
    position: static;
    padding: 0;
    &::before {
      background-image: none;
    }
  }
  &__btns {
    button {
      margin: 0 15px 0 0;
    }
    a {
      font-size: 12px;
    }
  }
}
@media (max-width: 991.98px) {
  .newsletter {
  &__wrapper {
    padding: 50px;
  }

  .newsletter__title {
    font-size: 30px;
    margin: 0 0 15px 0;
  }

  .newsletter__subtitle {
    max-width: 100%;
    margin: 0 0 15px 0;
  }
  .newsletter__input {
    padding: 10px 180px 10px 10px;
  }
  .newsletter__btn-yellow {
    font-size: 15px;
  }

  .newsletter__link {
    font-size: 15px;
  }
  }
}
@media (max-width: 767.98px) {
    .newsletter {
  &__wrapper {
   padding: 20px;
   flex-direction: column;
   text-align: center;
   align-items: center;
  }
  &__img-wrapper {
    display: none;
  }
  .newsletter__title {
    font-size: 48px;
  }
  .newsletter__input {
    max-width: 250px;
    width: 100%;
    padding: 10px;
  }
  }
}
@media (max-width: 330.98px) {
  .newsletter {
    .newsletter__title {
    font-size: 28px;
    line-height: 40px;
  }
  .newsletter__input {
    max-width: 150px;
    width: 100%;
    padding: 10px;
  }
  }
}
</style>
