define(['dataService','jquery'],function (dataService,$) {
    let username = 'sonia'
    function showMsg() {
        $('body').css('background','plum')
        console.log(dataService.getMsg() + username)
    }
    return {showMsg}
})