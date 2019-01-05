import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      html: ''
    }
  },

  computed: {
    query(): string {
      return this.$route.path
    }
  },

  watch: {
    $route(to, from) {
      this.loadView()
    }
  },

  mounted() {
    this.loadView()
  },

  methods: {
    loadView() {
      fetch('/XSmart/xpage/jsp' + this.$route.path).then((response) => {
        console.log(this.$route, response);
        response.text().then(r => {
          this.html = r
        })
      })
    }
  }
})
