import io from 'socket.io-client'

// const socket = io({ path: '/api/socket.io' })
const socket = io()

export const state = () => ({
  timeline: []
})

export const mutations = {
}

export const actions = {
  getTimeline () {
    socket.emit('message', null)
  }
}

socket.on('connect', (socket) => {
  console.log('connected!')
})
