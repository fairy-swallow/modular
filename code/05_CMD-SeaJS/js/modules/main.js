define(function (require) {
    var m1 = require('./module1')
    var m4 = require('./module4')
    m1.showName.fun()
    m4.foo()
})