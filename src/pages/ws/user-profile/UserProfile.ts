import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      user: this.$store.state.auth.user
    }
  },

  computed: {
    langs(): string[] {
      return this.$store.state.ui.langs
    }
  },

  methods: {
    goBack() {
      window.history.length > 1 ?
        this.$router.go(-1) :
        this.$router.push('/')
    }
  }
})
