var log = console.log.bind()

// 路由模块，将路由地址传递给requestHandlers,由其调用对应的请求处理程序
function route(handle, pathname, response) {
  log('Redirecting to ' + pathname)
  if (typeof handle[pathname] === 'function') {
    // 将response交给请求处理程序来处理
    handle[pathname](response)
  } else {
    log('No request handlers for ' + pathname)
    response.writeHead(404,
      {
        'Content-Type':'text/plain'
      }
    )
    response.write('404 Not found.')
    response.end()
  }
}

exports.route = route
