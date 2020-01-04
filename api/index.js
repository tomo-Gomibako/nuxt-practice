const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/ping', (ctx) => {
  ctx.body = 'pong'
})

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = {
  path: '/api/',
  handler: app.callback()
}
