let module1 = require('./module1')
let module2 = require('./module2')
let module3 = require('./module3')
let uniq = require('uniq')

let arr = [1,4,5,7,8,2,0,5,4,9]

module1.bar()
module1.foo()
module2()
module3.test()
console.log(uniq(arr))

