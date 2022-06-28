<template>
  <PopupMenu>
    <template v-slot:header>
      <h1>Login</h1>
    </template>
    <template v-slot:body>
      <form class="form" action="" method="">
        <div class="input-email">
          <label for="email">Email</label>
          <input
            class="email"
            type="email"
            placeholder="enter you email"
            v-model="email"
            required
          />
        </div>
        <div class="input-password password-login">
          <label for="password">Pass</label>
          <input
            class="password"
            type="password"
            placeholder="password"
            v-model="password"
            required
            maxlength="16"
            minlength="6"
          />
        </div>
        <footer class="footer-popup">
          <button class="btn-login popup-btn-login" type="submit">
            Send
          </button>
        </footer>
      </form>
    </template>
  </PopupMenu>
</template>

<script>
import PopupMenu from "./PopupMenu.vue";
export default {
  data: () => ({
    email: null,
    password: null,
  }),
  components: {
    PopupMenu,
  },
};
</script>

<style lang="scss">
.form > .password-login {
  margin-bottom: 40px;
}
</style>
