import Vue from 'vue'

import { ACTION_UI } from '../../store/actions.type'

const Nav = Vue.extend({
  props: {
    root: {
      type: Boolean,
      required: false,
      default: true
    },
    items: {
      type: Array
    }
  },

  methods: {
    itemClass(item) {
      return {
        '-collapsible': item.children,
        '-collapsed': this.$store.state.ui.sidenav.expanded.indexOf(item.id) == -1,
        '-divider-after': false
      }
    },

    collapsed(item) {
      return this.$store.state.ui.sidenav.expanded.indexOf(item.id) == -1
    },

    toggleCollapsible(item) {
      this.$store.dispatch(ACTION_UI.TOGGLE_SIDENAV_SECTION_EXPANDED, item.id)
    }
  }
})

Vue.component('xpage-nav', Nav)

export default Nav
