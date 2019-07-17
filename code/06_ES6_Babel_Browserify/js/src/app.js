//分别暴露引入   ----一般不使用此种方法和统一暴露方法暴露模块，有命名冲突问题，通常使用默认暴露模块
import {fun,bar} from './module1'
// import * as module1 from './module1'     //引入全部暴露的，用来解决命名冲突问题，但若一般只使用此模块中几个暴露数据，一般不使用as全部暴露出来

//统一暴露引入
import {obj,test} from './module2'
// import * as module2 from './module2'

//默认暴露引入   -----默认暴露可结合分别暴露和统一暴露使用，但不能一个模块使用两个及以上默认暴露方法
// import module3 from './module3'
import module3,{like,ang} from './module3'

import $ from 'jquery'

fun()
bar()
console.log(obj)
test()
console.log(module3)
module3()
console.log(like.object)
ang()

$('body').css('background','plum')

//记得添加.babelrc文件，内容输入以下代码
//{
//  "presets": ["es2015"]
//}