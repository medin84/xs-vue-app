import Vue from "vue";

import { LOGOUT } from "../../store/actions.type";
import { IAuthState } from "../../store/modules/auth.module";

const UserMenu = Vue.component("xpage-navbar-user-menu", {
  data() {
    return {
      auth: <IAuthState>this.$store.state.auth
    };
  },

  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
});

export default UserMenu;
