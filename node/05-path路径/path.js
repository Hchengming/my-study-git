const path = require('path')

// 给定一个路径，可以使用以下方法从其中提取信息：

// dirname: 获取文件的父文件夹。
// basename: 获取文件名部分。
// extname: 获取文件的扩展名。

// 例如：

const notes = '/users/joe/notes.txt'

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt


// 可以通过为 basename 指定第二个参数来获取不带扩展名的文件名：
path.basename(notes, path.extname(notes)) //notes

// 可以使用 path.join() 连接路径的两个或多个片段：
const name = 'joe'
path.join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'

// 可以使用 path.resolve() 获得相对路径的绝对路径计算：
path.resolve('joe.txt') //'/Users/joe/joe.txt' 如果从主文件夹运行。

// 在此示例中，Node.js 只是简单地将 /joe.txt 附加到当前工作目录。 如果指定第二个文件夹参数，则 resolve 会使用第一个作为第二个的基础：
path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' 如果从主文件夹运行。

// 如果第一个参数以斜杠开头，则表示它是绝对路径：
path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'