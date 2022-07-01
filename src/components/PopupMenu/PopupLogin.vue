<template>
  <PopupMenu>
    <template v-slot:header>
      <h1 class="title">Login</h1>
    </template>
    <template v-slot:body>
      <form class="form" @submit.prevent="onCreatePost">
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
          <button class="popup-btn-send btn" type="submit">Send</button>
        </footer>
      </form>
    </template>
  </PopupMenu>
</template>

<script>
import PopupMenu from "./PopupMenu.vue";
import axios from "axios";

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  components: {
    PopupMenu,
  },
  methods: {
    onCreatePost() {
      axios
        .post("http://localhost:3000/posts", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.form > .password-login {
  margin-bottom: 40px;
}
.footer-popup {
  display: flex;
  justify-content: center;
}
</style>
