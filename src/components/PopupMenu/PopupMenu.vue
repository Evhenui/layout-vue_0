<template>
  <section class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <header class="modal-header">
          <slot name="header">
            <h1 class="header__popup-title title">
              title
            </h1>
          </slot>
          <div class="modal-header-close-btn" @click="$emit('close')"></div>
        </header>
        <main class="modal-body">
          <slot name="body">title</slot>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../Header.vue";
import { mapGetters } from "vuex";

export default {
  components: { Header },
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: all 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  transition: all 0.3s ease;
}

.modal-container {
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  background: #E3EBF1;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #536D7A;
  & > h1 {
    font-family: "Bitter", serif;
    font-weight: 400;
    font-size: 37px;
    line-height: 52px;
    color: #1D2F38;
  }
  .modal-header-close-btn {
    cursor: pointer;
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    &::after {
      content: "";
      background-color: #72727e;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      top: 16px;
      transform: rotate(45deg);
    }
    &::before {
      content: "";
      background-color: #72727e;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      top: 16px;
      transform: rotate(-45deg);
    }
  }
}

.modal-body {
  padding: 40px 0;
  margin: 0 0 20px 0;
  border-bottom: 1px solid #536D7A;
  & > form > div {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > label {
      font-family: "Raleway", serif;
      font-weight: 400;
      font-size: 18px;
      color: #b7b7c0;
    }
    & > ::placeholder {
      font-family: "Raleway", serif;
      line-height: 28px;
      color: #070707;
    }
    & > input {
      border: 1px solid #b7b7c0;
      border-radius: 10px;
      padding: 9px 0 9px 5px;
      &:focus,
      &:active,
      &:read-only,
      &:read-write {
        font-family: "Raleway", serif;
        color: #070707;
        outline: 0;
        outline-offset: 0;
      }
    }
  }
}
</style>
