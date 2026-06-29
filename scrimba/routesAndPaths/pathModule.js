import path from "node:path"

const filepath=path.join("user","admin","index.js")
console.log(path.basename(filepath)) // output  is file index.js
console.log(path.extname(filepath)) // ouput is file extension .js
console.log(filepath) //output is relative path : user\admin\index.js
console.log(path.resolve("user","admin","index.js")) // output is absolute path :C:\Users\NV TECHNOLOGIES LTD\Downloads\The-Gym\The-Gym-Node.js-learning\scrimba\routesAndPaths\user\admin\index.js
console.log(path.dirname(filepath)) //  output is folders or directory :user\admin
console.log(path.parse(filepath)) /* object  {
  root: '',
  dir: 'user\\admin',
  base: 'index.js',
  ext: '.js',
  name: 'index'
} */
console.log(path.format({root:"",dir:"user\\admin",base:"index.js",ext:".js",name:"index"}))
console.log(path.delimiter) //output ;
