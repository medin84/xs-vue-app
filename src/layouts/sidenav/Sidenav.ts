import Vue from 'vue'

const Sidenav = Vue.component('xpage-sidenav', {
  data() {
    return { ui: this.$store.state.ui }
  }
})

export default Sidenav
