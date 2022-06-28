export default {
  popupMenuOpen(state) {
    state.popupMenu.active = true;
  },
  popupMenuClose(state) {
    state.popupMenu.active = false;
  },
};
