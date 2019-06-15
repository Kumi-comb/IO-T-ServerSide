export const state = () => ({
  isDisplay: false,
  level: null,
  title: null,
  content: null
})

export const getters = {
  modal: state => state
}

export const mutations = {
  setDataInState(state, { isDisplay, level, title, content }) {
    state.isDisplay = isDisplay
    state.level = level
    state.title = title
    state.content = content
  }
}

export const actions = {
  display({ commit }, { level, title, content }) {
    commit('setDataInState', { isDisplay: true, level, title, content })
  },

  hide({ commit }) {
    commit('setDataInState', {
      isDisplay: false,
      level: '',
      title: '',
      content: ''
    })
  }
}
