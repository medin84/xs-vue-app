import Vue from 'vue'

import { ACTION_UI } from '../../store/actions.type'

const Navbar = Vue.component('xpage-navbar', {
  data() {
    return this.$store.state
  },

  methods: {
    toggleSidenav() {
      this.$store.dispatch(ACTION_UI.TOGGLE_SIDENAV)
    }
  }
})

export default Navbar
