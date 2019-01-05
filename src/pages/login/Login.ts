import Vue from 'vue'

import { LOGIN } from '../../store/actions.type'

const BODY_CLASS_NAME = 'sign-in-page'

export default Vue.extend({
  data() {
    return {
      ...this.$store.state,
      login: '',
      pwd: '',
      saveauth: ''
    }
  },

  mounted() {
    document.body.classList.add(BODY_CLASS_NAME)
  },

  destroyed() {
    document.body.classList.remove(BODY_CLASS_NAME)
  },

  methods: {
    onSubmit() {
      this.$store
        .dispatch(LOGIN, { login: this.login, password: this.pwd, saveauth: this.saveauth })
        .then(() => {
          this.$router.push({ name: 'workspace' })
        })
    }
  }
})
