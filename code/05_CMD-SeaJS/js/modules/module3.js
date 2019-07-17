define(function (require,exports,module) {
    function fun() {
        console.log('module3')
    }
    //暴露模块
    module.exports = {fun}
})