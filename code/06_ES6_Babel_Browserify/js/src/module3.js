//默认暴露
let msg = 'sonia is fairy'
export default function () {
    console.log(msg)
}

//分别暴露
export let like = {
    object: 'chinese'
}

//统一暴露
function ang() {
    console.log('module3中的ang,我只能想到昂了')
}
export {ang}
