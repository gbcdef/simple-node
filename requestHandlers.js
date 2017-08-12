var log = console.log.bind()

function start(response) {
  log('START was called')
  response.writeHead(200,{'Content-Type': 'text/plain'})
  response.write('This is START')
  response.end()
}

function upload(response) {
  log('UPLOAD was called')

  // 错误的处理方式：会
  // exec(someFunc(), callback(){
  //    do something
  // })
  // return someResult -> someResult是空的，因为exec()异步执行

  // 正确的处理方式：在回调函数中操作response
  // exec(someFunc(), callback(){
  //   response
  // })
}

function hello(response) {
  log('HELLO was called')
}

exports.start = start
exports.upload = upload
exports.hello = hello
