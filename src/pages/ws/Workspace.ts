import Vue from 'vue'

import UserMenu from '../../layouts/user-menu/UserMenu.vue'

export default Vue.extend({
  components: {
    UserMenu
  },

  data() {
    return this.$store.state
  },

  computed: {
    layoutClassList(): any {
      return {
        'sidenav-toggled': this.$store.state.ui.sidenav.closed
      }
    }
  },

  watch: {
    $route(to, from) {
      if (!this.$store.state.auth.isAuthenticated) {
        this.$router.push({ name: 'login' })
      }
    }
  }
})
