const http = require('http')
const express = require('express')
const socket = require('socket.io')

const app = express()

app.get('/ping', function (req, res) {
  res.send('pong')
})

const server = http.Server(app)
const io = socket(server)
io.path('/api')

io.on('connection', (socket) => {
  console.log(socket)
  socket.emit('message', [])
})

module.exports = {
  path: '/api/',
  handler: app
}
