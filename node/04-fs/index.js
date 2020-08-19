const http = require('http')
const fs = require('fs')

fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  //fd 是文件描述符。
})
console.log(111)
fs.open('./cs.txt', 'r', (err, fd) => {
  //fd 是文件描述符。
  console.log(fd)
})
try {
  const fd = fs.openSync('./cs.txt', 'r')
  console.log(fd)
} catch (err) {
  console.error(err)
}

fs.stat('./cs.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('stat', stats)
  //   使用 stats.isFile() 和 stats.isDirectory() 判断文件是否目录或文件。
  // 使用 stats.isSymbolicLink() 判断文件是否符号链接。
  // 使用 stats.size 获取文件的大小（以字节为单位）。
  console.log(stats.isFile()) //true 是否为文件
  console.log(stats.isDirectory()) //false
  console.log(stats.isSymbolicLink()) //false
  console.log(stats.size) //19
})

// 读取文件  同步的版本 fs.readFileSync()：
fs.readFile('./cs.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('readFile', data)
})

//写入内容 同步的版本 fs.writeFileSync()
const content = '一些内容'
fs.writeFile('./test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})

//使用 fs.mkdir() 或 fs.mkdirSync() 可以创建新的文件夹。
const folderName = './test'
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}

// fs.readdir() 或 fs.readdirSync() 可以读取目录的内容
const folderPath = '/Users/joe'
fs.readdirSync(folderPath)

// fs.rename() 或 fs.renameSync() 可以重命名文件夹
fs.rename('/Users/joe', '/Users/roger', err => {
  if (err) {
    console.error(err)
    return
  }
  //完成
})

/**
 * fs.access(): 检查文件是否存在，以及 Node.js 是否有权限访问。
fs.appendFile(): 追加数据到文件。如果文件不存在，则创建文件。
fs.chmod(): 更改文件（通过传入的文件名指定）的权限。相关方法：fs.lchmod()、fs.fchmod()。
fs.chown(): 更改文件（通过传入的文件名指定）的所有者和群组。相关方法：fs.fchown()、fs.lchown()。
fs.close(): 关闭文件描述符。
fs.copyFile(): 拷贝文件。
fs.createReadStream(): 创建可读的文件流。
fs.createWriteStream(): 创建可写的文件流。
fs.link(): 新建指向文件的硬链接。
fs.mkdir(): 新建文件夹。
fs.mkdtemp(): 创建临时目录。
fs.open(): 设置文件模式。
fs.readdir(): 读取目录的内容。
fs.readFile(): 读取文件的内容。相关方法：fs.read()。
fs.readlink(): 读取符号链接的值。
fs.realpath(): 将相对的文件路径指针（.、..）解析为完整的路径。
fs.rename(): 重命名文件或文件夹。
fs.rmdir(): 删除文件夹。
fs.stat(): 返回文件（通过传入的文件名指定）的状态。相关方法：fs.fstat()、fs.lstat()。
fs.symlink(): 新建文件的符号链接。
fs.truncate(): 将传递的文件名标识的文件截断为指定的长度。相关方法：fs.ftruncate()。
fs.unlink(): 删除文件或符号链接。
fs.unwatchFile(): 停止监视文件上的更改。
fs.utimes(): 更改文件（通过传入的文件名指定）的时间戳。相关方法：fs.futimes()。
fs.watchFile(): 开始监视文件上的更改。相关方法：fs.watch()。
fs.writeFile(): 将数据写入文件。相关方法：fs.write()。
*/

const server = http.createServer((req, res) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'text/plain')
  // res.end('hello world\n')
})
server.listen('3003')
