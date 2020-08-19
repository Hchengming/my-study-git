const http = require('http')
const port = 3000
const hostname = require('os').hostname()
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello world\n')
})
/**获取本机ip**/
function getIPAdress() {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      ) {
        return alias.address
      }
    }
  }
}
server.listen(port, () => {
  console.log(getIPAdress())
  console.log(`服务器运行在 http://localhost:${port}/`)
})
