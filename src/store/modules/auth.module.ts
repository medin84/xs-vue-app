import { ActionContext, Module } from 'vuex'

import ApiService from '../../api/api.service'
import JwtService from '../../api/jwt.service'
import { ACTION_UI, LOGIN, LOGOUT, CHECK_AUTH, FETCH_SESSION } from '../actions.type'
import { MUTATION_UI, SET_AUTH, PURGE_AUTH, SET_ERROR } from '../mutations.type'
import { IAppState } from '../index'

export interface IAuthState {
  errors: any
  user: {
    name: string
    token: string
    displayMailLink ? : boolean
    mailLink ? : string
    theme ? : string
  }
  isAuthenticated: boolean
}

const state: IAuthState = {
  errors: [],
  user: {
    name: '',
    token: '',
    displayMailLink: false,
    mailLink: '',
    theme: 'azul'
  },
  isAuthenticated: false
}

const getters = {
  errors(state: IAuthState) {
    return state.errors
  },

  user(state: IAuthState) {
    return state.user || {}
  },

  isAuthenticated(state: IAuthState) {
    return state.isAuthenticated || false
  }
}

const actions = {
  [LOGIN](context: ActionContext < IAuthState, IAppState > , credentials: any) {
    return ApiService.login(credentials.login, credentials.password, credentials.saveauth)
      .then(response => {
        context.commit(ACTION_UI.SET_STATE, response)
        context.commit(SET_AUTH, response.user)
        return response
      })
      .catch(response => {
        context.commit(SET_ERROR, response)
        return response
      })
  },

  [LOGOUT](context: ActionContext < IAuthState, IAppState > ) {
    return ApiService.logout().then(() => {
      context.commit(PURGE_AUTH)
    })
  },

  [CHECK_AUTH](context: ActionContext < IAuthState, IAppState > ) {
    if (JwtService.getToken()) {
      if (context.state.isAuthenticated) {
        return Promise.resolve()
      }
      return ApiService.fetchSession().then(response => {
        if (response.isAuthenticated) {
          context.commit(ACTION_UI.SET_STATE, response)
          context.commit(SET_AUTH, response.user)
        } else {
          context.commit(ACTION_UI.SET_STATE, response)
          context.commit(PURGE_AUTH)
        }
        return response
      }).catch(response => {
        context.commit(SET_ERROR, [response.error])
        return response
      })
      // ApiService.setHeader();
      // ApiService.get("user")
      //   .then(({ data }) => {
      //     context.commit(SET_AUTH, data.user);
      //   })
      //   .catch(({ response }) => {
      //     context.commit(SET_ERROR, response.data.errors);
      //   });
    } else {
      // context.commit(PURGE_AUTH)
    }
  },

  [FETCH_SESSION](context: ActionContext < IAuthState, IAppState > ) {
    return ApiService.fetchSession().then(response => {
      if (response.isAuthenticated) {
        return response
      }
      context.commit(PURGE_AUTH)
    })
  }
}

const mutations = {
  [SET_ERROR](state: IAuthState, error: any) {
    state.errors = error
  },

  [SET_AUTH](state: IAuthState, user: any) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
    JwtService.saveToken(state.user.token || 'token')
  },

  [PURGE_AUTH](state: IAuthState) {
    state.isAuthenticated = false
    state.user = { name: '', token: '' }
    state.errors = {}
    JwtService.destroyToken()
  }
}

export const AuthModule: Module < IAuthState, IAppState > = {
  // namespaced: true,
  state,
  actions,
  mutations,
  getters
}
