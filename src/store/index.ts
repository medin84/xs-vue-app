import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import { AuthModule, IAuthState } from './modules/auth.module';
import { UIModule, IUIState } from './modules/ui.module';

Vue.use(Vuex)

export interface IAppState {
  auth ? : IAuthState;
  ui ? : IUIState;
}

export const store: Store < IAppState > = new Vuex.Store({
  strict: true,
  modules: {
    auth: AuthModule,
    ui: UIModule
  }
})
