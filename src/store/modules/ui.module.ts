import { ActionContext, Module } from 'vuex'

import { ACTION_UI } from '../actions.type'
import { MUTATION_UI } from '../mutations.type'
import { IAppState } from '../index'

declare const window: any;

export interface IUIState {
  orgName: string
  title: string
  logo: string
  theme: string
  langs: string[]
  sidenav: {
    gamburger: boolean
    closed: boolean
    items: []
    expanded: string[]
  }
}

const state: IUIState = {
  orgName: '',
  title: '',
  logo: '',
  theme: 'azul',
  langs: ['kk', 'en', 'ru'],
  sidenav: {
    gamburger: true,
    closed: false,
    items: [],
    expanded: []
  }
}

const getters = {
  sideNavItems(state: IUIState) {
    return state.sidenav.items
  },

  sideNavClosed(state: IUIState) {
    return state.sidenav.closed
  },

  sideNavSectionExpanded(state: IUIState, id: string) {
    return state.sidenav.expanded.indexOf(id) != -1
  }
}

const actions = {
  [ACTION_UI.TOGGLE_SIDENAV](context: ActionContext < IUIState, IAppState > ) {
    context.commit(MUTATION_UI.TOGGLE_SIDENAV)
  },

  [ACTION_UI.TOGGLE_SIDENAV_SECTION_EXPANDED](context: ActionContext < IUIState, IAppState > , id: string) {
    context.commit(MUTATION_UI.TOGGLE_SIDENAV_SECTION_EXPANDED, id)
  },

  [ACTION_UI.SET_STATE](context: ActionContext < IUIState, IAppState > , state: IUIState) {
    context.commit(MUTATION_UI.SET_STATE, state)
  }
}

const mutations = {
  [MUTATION_UI.TOGGLE_SIDENAV](state: IUIState) {
    state.sidenav.closed = !state.sidenav.closed
  },

  [MUTATION_UI.TOGGLE_SIDENAV_SECTION_EXPANDED](state: IUIState, id: string) {
    const index = state.sidenav.expanded.indexOf(id)
    if (index == -1) {
      state.sidenav.expanded.push(id);
    } else {
      state.sidenav.expanded.splice(index, 1)
    }
  },

  [MUTATION_UI.SET_STATE](state: IUIState, newState: IUIState) {
    state.title = newState.title || state.title
    state.logo = newState.logo || state.logo
    state.orgName = newState.orgName || state.orgName
    state.theme = newState.theme || state.theme
    state.sidenav = Object.assign({}, state.sidenav, newState.sidenav)
  }
}

export const UIModule: Module < IUIState, IAppState > = {
  // namespaced: true,
  state,
  actions,
  mutations,
  getters
}
