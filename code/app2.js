//异步编程模块

//Promise
// const promise = new Promise(function(resolve, reject) {
//     // resolve(100) //成功，参数作为一个成功之后的返回值

//     reject(new Error('promise rejected')) //失败，一般返回一个错误的对象
// })

// promise.then((resolve) => {
//     //成功之后的回调
//     console.log(resolve)
// }, (error) => {
//     //失败的回调
//     console.log(error)
// })

function ajax(url) {
    return new Promise(function(resolve, rejected) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.onload = function () {
            if(this.status === 200) {
                resolve(this.response)
            } else {
                rejected(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}
// ajax('./api/user.json')
//     .then((resolve) => {
//         console.log(resolve)
//         // return ajax('./api/uss.json')
//     })
//     .then((resolve) => {
//         console.log(resolve)
//         return ajax('./api/uss22.json')
//     })
//     .then((resolve) => {
//         console.log(resolve)
//         return ajax('./api/uss33.json')
//     })
//     .catch((rejected) => {
//         console.log(rejected)
//     })

// Promise.resolve('foo').then( resolve => {console.log(resolve)})
// //等同于
// new Promise(function(resolve, reject) {
//     resolve('foo')
// })

// Promise.resolve({
//     then: function(onFullfilled, onRejected) {
//         onFullfilled('foo')
//     }
// }).then((resolve) => {
//     console.log(resolve) //foo
// })

//Generator异步方案
// function * foo() {
//     console.log(1)
//     yield 'foo'
// }

// const generator = foo()
// // const result = generator.next()

// function * main () {
//     try {
//         yield ajax('./api/user.json')
//         yield ajax('./api/user1.json')
//     } catch (e) {
//         console.log(e)
//     }
// }

// const result = g.next()
// result.value.then(data => {
//     // console.log(data)
//     const result2 = g.next()
//     console.log(result2.value)
// })
// function co (generator) {
//     const g = generator()
//     function handleResult (result) {
//         if(result.done) return //生成器结束
//         result.value.then(data => {
//             handleResult(g.next())
//         }, error => {
//             g.throw(error)
//         })
//     }
//     handleResult(g.next())
// }
// co(main)

//Async/await
async function main () {
    try {
        await ajax('./api/user.json')
        console.log(1)
        await ajax('./api/user.json')
        console.log(2)
    } catch (e) {
        console.log(e)
    }
}

const g = main()
g.then(data => {
    console.log(data)
})