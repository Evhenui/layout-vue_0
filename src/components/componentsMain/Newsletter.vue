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
    &::before {
      content: "";
    }
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
  &__form {

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
.title {
}
.subtitle {
}

.btn {
}
</style>
