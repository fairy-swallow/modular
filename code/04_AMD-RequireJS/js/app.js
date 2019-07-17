//官网中查看可，在app.js下模块查看
requirejs.config({
    //模块标识名与模块路径映射
    paths: {
        //所有要使用的模块路径全部写入
        "loger": "modules/loger", //loger的路径,不写.js后缀
        "dataService": "modules/dataService", //dataService的路径
        "jquery": "libs/jquery-1.10.1"
    }
})

requirejs(['loger'],function (loger) {
    loger.showMsg()
})