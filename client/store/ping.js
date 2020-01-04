import axios from 'axios'

export const state = () => ({
  response: ''
})

// export const getters = {
// }

export const mutations = {
  updateResponse (state, payload) {
    state.response = payload
  }
}

export const actions = {
  async fetch (ctx) {
    const res = await axios.get('/api/ping')
    ctx.commit('updateResponse', res.data)
    setTimeout(() => {
      ctx.commit('updateResponse', '')
    }, 2000)
  }
}
