export default {
  popupMenuOpen(state) {
    state.popupMenu.active = true;
  },
  popupMenuClose(state) {
    state.popupMenu.active = false;
  },
  popupMenuBuyOpen(state) {
    state.popupMenu.activeBuy = true;
  },
  popupMenuBuyClose(state) {
    state.popupMenu.activeBuy = false;
  },
};
