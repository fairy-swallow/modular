let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')
let a = require('uniq')

console.log(module1.name)
console.log(module1.age)
module2()
console.log(module3)