define(function (require,exports,module) {
    function fun() {
        console.log('module2')
    }
    //暴露模块
    module.exports = fun
})