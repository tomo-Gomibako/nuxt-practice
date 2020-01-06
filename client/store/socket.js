import io from 'socket.io-client'

const socket = io({ path: '/api/socket.io' })
console.log(socket.connected)

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
  console.log('hoge')
})
