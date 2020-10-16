import { createStore } from "vuex";
import getters from "./getters";
import app from "./modules/app";
import permission from "./modules/permission";

export default createStore({
  modules: {
    app,
    permission
  },
  getters
});
