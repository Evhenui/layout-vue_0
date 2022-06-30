import { createStore } from "vuex";
import state from "@/modules/state";
import getters from "@/modules/getters";
import mutations from "@/modules/mutations";
import axios from "axios";

export default createStore({
  modules: { state, getters, mutations },
  state: state,
  getters: getters,
  mutations: mutations,
  actions: {
    
  }
});
