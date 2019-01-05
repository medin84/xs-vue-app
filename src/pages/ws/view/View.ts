import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      html: '',
      viewSelectFormListener: (e: any) => {}
    }
  },

  computed: {
    query(): string {
      return this.$route.path
    }
  },

  watch: {
    $route(to, from) {
      this.fetchView()
    }
  },

  mounted() {
    this.fetchView()
  },

  methods: {
    fetchView() {
      const context = window.location.pathname.split('/')[1]
      fetch(`/${context}/xpage/jsp/` + this.$route.query.v).then((response) => {
        response.text().then(r => {
          this.html = r
          // this.$store.dispatch(ACTION_UI.SET_VIEW, r)
          // let v = document.getElementById('view')
          // if (v) {
          //   v.innerHTML = r
          // }
        }).then(() => {
          this.initListener()
        })
      })
    },

    initListener() {
      if (this.viewSelectFormListener) {
        // destroy listener
      }
      const viewForm: any = this.$el.querySelector('form[name=viewSelectForm]')
      if (viewForm) {
        const listenerFn = (e: any): any => {
          e.preventDefault()
          console.log(e)

          const activeEl = e && e.target || e && e.currentTarget && e.currentTarget.activeElement || e;
          var elName = activeEl.name;
          var elValue = activeEl.value;
          const form = activeEl.form || e.target

          if (elName.indexOf('_spage') !== -1) {
            elName = elName.substring(1);
          } else if (elName === '_page') {
            elName = 'page';
          }

          const ellll = viewForm.querySelector('input[name=' + elName + ']')
          if (ellll) {
            ellll.value = elValue
          } else {
            const el = document.createElement('input')
            el.name = elName
            el.value = elValue
            el.type = 'hidden'
            viewForm.appendChild(el)
          }

          const vvvvvv = new FormData(form)
          vvvvvv.forEach((v, k) => {
            console.log(k, v)
          })

          const data = new URLSearchParams();
          let formData = new FormData();
          for (let i = 0; i < form.length; ++i) {
            if (form[i].type === 'hidden' || form[i].type === 'text' || form[i].type === 'number') {
              let f = form[i]
              formData.append(f.name, f.value)
              data.append(f.name, f.value)
            }
          }

          // const data = new URLSearchParams(formData);

          fetch(form.action, {
            method: 'POST',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data
          }).then((response) => {
            response.text().then(r => {
              this.html = r
              // this.$store.dispatch(ACTION_UI.SET_VIEW, r)
              // let v = document.getElementById('view')
              // if (v) {
              //   v.innerHTML = r
              // }
            }).then(() => {
              this.initListener()
            })
          })
        }
        this.viewSelectFormListener = listenerFn
        viewForm.addEventListener('submit', listenerFn)
        const els = viewForm.querySelectorAll('button')
        if (els) {
          els.forEach((_el: any) => _el.addEventListener('click', listenerFn))
        }
      }
    }
  }
})
