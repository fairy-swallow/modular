define(function (require,exports,module) {
    function foo() {
        console.log('module4')
    }
    let module2 = require('./module2')
    module2()
    require.async('./module3',function (m3) {
        m3.fun()
    })
    module.exports = {foo}
})