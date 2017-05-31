import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state,
    actions,
    mutations
  })
}
