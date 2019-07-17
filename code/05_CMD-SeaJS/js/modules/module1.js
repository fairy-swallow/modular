define(function (require,exports,module) {
    function fun() {
        console.log('module1')
    }
    //暴露模块
    exports.showName = {fun}
})