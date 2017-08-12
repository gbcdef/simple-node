//《Node入门：一本全面的Node.js教程》笔记
// 2017/08/12

var server = require('./server')
var router = require('./router')
var rH = require('./requestHandlers')


var handle = {
  '/': rH.start,
  '/start': rH.start,
  '/upload': rH.upload,
  '/hello': rH.hello,
}

// "依赖注入"，将route作为参数传递给server.start()
server.start(router.route, handle)
