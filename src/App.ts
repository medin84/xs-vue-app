import Vue from "vue";

export default Vue.extend({
  template: "<router-view></router-view>",

  computed: {
    uiTheme(): string {
      return this.$store.state.auth.user.theme || this.$store.state.ui.theme;
    }
  },

  watch: {
    uiTheme(newValue: string, oldValue: string) {
      document.body.classList.remove(oldValue);
      document.body.classList.add(newValue);
    }
  },

  mounted() {
    document.body.classList.add(this.uiTheme);
  }
});
