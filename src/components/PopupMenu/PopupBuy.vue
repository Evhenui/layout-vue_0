<template>
  <PopupMenu>
    <template v-slot:header>
      <h1 class="title">Our products</h1>
    </template>
    <template v-slot:body>
      <form action="">
        <ul>
          <li class="subtitle">slot-1</li>
          <li class="subtitle">slot-2</li>
          <li class="subtitle">slot-3</li>
        </ul>
        <footer class="footer-popup">
          <button class="popup-btn-send btn">Ok</button>
        </footer>
      </form>
    </template>
  </PopupMenu>
</template>

<script>
import PopupMenu from "./PopupMenu.vue";
export default {
  components: {
    PopupMenu,
  },
};
</script>

<style lang="scss">
.footer-popup {
  display: flex;
  justify-content: center;
}
</style>
