//统一暴露
function test() {
    console.log('module2中统一暴露函数test')
}
let obj = {
    username: 'tom',
    age: 18,
    showName(){
        console.log(`my name is ${this.name},age is ${this.age}`)
    }
}

export {test,obj}