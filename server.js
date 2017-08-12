var log = console.log.bind()
var http = require('http')
var url = require('url')

// 服务器程序（路由模块，请求处理分发模块）
function start (route, handle) {

  //http.createServer(callback)
  var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname
    log('request received. ' + pathname)
    route(handle, pathname, response)
    // 将response交给route下的handle来处理,以达到非阻塞的目的。eg. upload耗时过长时hello仍可以正常反应。
    // response.writeHead(200,{
    //   'Content-Type': 'text/plain'
    // })
    // response.write('Hello world')
    // response.end()
  })

  server.listen('8888')
  log('Server started.')
}

exports.start = start
