//用闭包问题解决var的情况
// var element = [{}, {}, {}]
// for (var i = 0; i < element.length; i++) {
//     element[i].onclick = (function(i) {
//         return function() {
//             console.log(i)
//         }
//     }(i))
// }
// element[0].onclick()

//数组解构
// const arr = [1, 2, 3]
// const [a, b, c] = arr;
// const [,,c] = arr;
// const [ftt,...rest] = arr;
// const [a,b,c=4,d='xx'] = arr;


//对象解构
// const obj = {name: 'aa', age: 12};
// var name = 'bb';
// const { name: objName = '默认值' } = obj;//对象解构重命名

//带标签的模板字符串
// const name = 'aaa'
// const age = 10
// function tage(strings, name, age) {
//     console.log(strings, name, age) //['name:','age:']  'aaa'  10
// }
// const result = tags`name:${name}age:${age}`

//字符串扩展方法
// const MESSAGE = 'Error: foo is undefined.'
// function strFun(message) {
//     //判断字符串的开头是否以xx开始
//     console.log(message.startsWith('Error')) //true
//     //判断字符串是否以xxx结尾
//     console.log(message.endsWith('.')) //true
//     //判断字符串是否包含xxx
//     console.log(message.includes('foo')) //true
// }
// strFun(MESSAGE);

//箭头函数与this
// const person = {
//     name: 'aaa',
//     sayHi: function() {
//         console.log(this.name)
//     }
// }
// person.sayHi() //aaa
// const person = {
//     name: 'aaa',
//     sayHi: () => {
//         console.log(this.name) 
//     },
//     sayHiAync: function () {
//         setTimeout(function() {
//             console.log(this.name) 
//         }, 1000)
//     }
// }
// person.sayHi() //aaa
// person.sayHiAync() //undefined

//对象字面量增强
// const name = 'abc';
// let obj = {
//     method1() {
//         console.log(111)
//     },
//     [name]: 'myName'
// }
// console.log(obj.method1()) //111
// console.log(obj.abc) //myName

//对象扩展方法Object.assign
// const assigns = {
//     a: 123,
//     b: 456
// };
// const assign2 = {
//     d: 222
// };
// const target = {
//     a: 456,
//     c: 789
// }
// let result = Object.assign(target, assigns, assign2)
// console.log(result) // {a: 123, b: 456, c: 789}
// console.log(result === target) //true

// function funs(obj) {
//     // obj.name = 'name1'
//     // console.log(obj)
//     let objs = Object.assign({}, obj) //新的内存地址，不会覆盖obj1
//     objs.name = 'name1'
//     console.log(objs)
// }

// const obj1 = {name: 'glob obj'}
// funs(obj1)


// Proxy
// const person = {
//     name: 'name',
//     age: 10
// }
// const personPoxy = new Proxy(person, {
//     //监视代理目标属性的访问
//     get(target, property) {
//         //target为代理目标对象，外部访问的property属性名
//         console.log(target, property);
//     },
//     //监视代理目标设置属性的过程
//     set(target, property, value) {
//         //target为代理目标对象，外部设置的property属性名, value为设置的属性值
//         console.log(target, property, value);
//         target[property] = value;
//     },
//     //监视代理目标删除操作
//     deleteProperty(target, property) {
//         //target为代理目标对象，property要删除的属性名
//         console.log('delet:', property);
//         delete target[property]
//     }
// }) //第一个参数是需要代理的目标对象, 第二个参数是代理的处理对象
// console.log(personPoxy.name)
// personPoxy.sex = '女';
// console.log(person)
// delete personPoxy['sex']
// console.log(person)

// const list = []
// const proxyList = new Proxy(list, {
//     //用于监视数组的写入操作
//     set(target, property, value) {
//         //property此时对应的是数组的下标
//         console.log('set', property, value)
//         target[property] = value
//         return true //表示写入成功
//     }
// })
// proxyList.push(100)

//Reflect
// const obj = {
//     name: 'zzz',
//     age: 10
// }
// console.log(Reflect.has(obj, 'name'))
// console.log(Reflect.deleteProperty(obj, 'age'))
// console.log(Reflect.ownKeys(obj))

//Class类
// function Person(name) {
//     this.name
// }
// Person.prototype.say = function() {
//     console.log('say')
// }

// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     say() {
//         console.log('say'+this.name)
//     }

//     //静态方法，用于创建Person类型的实例
//     static create(name) {
//         return new Person(name)
//     }
// }
// // const p = new Person('tom')
// // p.create()
// const tom = Person.create('tom') //由于静态方法是挂载到类型上面的，所以静态方法的内部的this指向的是当前的类型，而不是一个新的实例对象
// tom.say()

//继承
// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     say() {
//         console.log('say'+this.name)
//     }
// }

// class Student extends Person {
//     constructor(name, number) {
//         //super指向父类，调用他等于调用父类的构造函数
//         super(name);
//         this.number = number;
//     }

//     hello () {
//         //调用父类的方法
//         super.say();
//         console.log('my number is', this.number)
//     }
// }
// const s = new Student(1414)
// s.hello()

//Set
// const s = new Set();
// //add方法会返回集合对象本身，所以可以链式调用，添加过程中重复的值会被忽略
// s.add(1).add(2).add(3).add(1)
// s.size//获取数组长度
// s.has(100) //false
// s.delete(1) //true
// s.clear() //清除

// const arr = [1,2,1,2,4,5,7,5]
// const result1 = new Set(arr)
// const result2 = Array.from(new Set(arr))
// const result3= [...new Set(arr)]

//Map
// const obj = {}
// obj[true] = 'value'
// obj[123] = 'value'
// obj[{a: 1}] = 'value'
// //被toString转换,object对象作为键的话全部都被转译成了'[object Object]'
// console.log(Object.keys(obj)) //[ '123', 'true', '[object Object]' ]

// const m = new Map()
// const tom = {name: 'tom'}
// m.set(tom, 90)
// console.log(m) // { { name: 'tom' } => 90 }
// m.get(tom) //90

//Symbol
// const s = Symbol('abc')//参数是对当前symbol的描述文本，对象可以用string和symbol作为键
// console.log(typeof s)// --> symbol

// //在全局对象中复用一个相同的symbol值
// const s1 = Symbol.for('123')
// const s2 = Symbol.for('123')
// console.log(s1===s2)//true

// const obj = {
//     [Symbol.toStringTag]: 'Xobj'
// }
// console.log(obj.toString()) //[object Xobj]

//for...of循环
// const arr = [100, 200, 300, 400]
// for(const item of arr) {
//     // console.log(item) //数组中的每个值
//     if(item > 200) {
//         // break; 可以用break跳出for...of循环
//     }
// }
// const m = new Map()
// m.set('a',10)
// m.set('b',20)
// for(const [key, value] of m) {
//     //map对象遍历每个是键值对的数组
//     console.log(key, value)
// }

//可迭代接口Iterator
// const set = new Set(['foo', 'bar', 'baz'])
// const iterator = set[Symbol.iterator]() //执行set对象自带的iterator方法,成为迭代器
// console.log(iterator.next()) //迭代器的next方法{ value: 'foo', done: false }
// console.log(iterator.next()) //迭代器的next方法
// console.log(iterator.next()) //迭代器的next方法

//实现可迭代接口
// const obj = {
//     //可迭代接口iterable
//     [Symbol.iterator]: function () {
//         return {
//             //迭代器iterator
//             next: function() {
//                 //迭代结果iterationResult
//                 return {
//                     value: 'zc',
//                     done: true
//                 }
//             }
//         }
//     }
// }
// const obj = {
//     store: ['aaa', 'bbb', 'ccc'],
//     //可迭代接口iterable
//     [Symbol.iterator]: function () {
//         let this_ = this
//         let index = 0
//         return {
//             //迭代器iterator
//             next: function() {
//                 //迭代结果iterationResult
//                 const result = {
//                     value: this_.store[index],
//                     done: this_.store.length >= index ? false : true
//                 }
//                 index ++ 
//                 return result
//             }
//         }
//     }
// }
// for(const item of obj) {
//     console.log(item)
// }

//对外统一迭代接口，让外部不需要再去遍历特定的对象
// const todos = {
//     life: ['吃饭', '睡觉', '打豆豆'],
//     learn: ['语文', '数学', '外语'],
//     works: ['喝茶'],

//     [Symbol.iterator]: function() {
//         const all = [...this.life, ...this.learn, ...this.works]
//         let index = 0
//         return {
//             next: function () {
//                 return {
//                     value: all[index],
//                     done: index++ >= all.length
//                 }
//             }
//         }
//     }
// }
// for(const item of todos) {
//     console.log(item)
// }

//Generator生成器
//yield后面的值将作为next()的结果返回
// function * foo() {
//     console.log(1111)
//     yield 100;
//     console.log(222)
//     yield 200;
//     console.log(333)
//     yield 300;
// }
// const generator = foo()
// console.log(generator.next()) //111 { value: 100, done: false }
// console.log(generator.next()) //222 { value: 200, done: false }
// console.log(generator.next()) //333 { value: 300, done: false }
// console.log(generator.next()) // { value: undefined, done: true }

// function * createIDMaker () {
//     let id = 1
//     while (true) {
//         yield id++
//     }
// }
// const idMaker = createIDMaker()
// console.log(idMaker.next().value)

// const todos = {
//     life: ['吃饭', '睡觉', '打豆豆'],
//     learn: ['语文', '数学', '外语'],
//     works: ['喝茶'],

//     [Symbol.iterator]: function * () {
//         const all = [...this.life, ...this.learn, ...this.works]
//         for(const item of all) {
//             yield item
//         }
//     }
// }
// for(const item of todos) {
//     console.log(item)
// }

//ECMAScript2017
// const obj = {
//     foo: 'value1',
//     bar: 'value2'
// }
// console.log(Object.values(obj)) //[ 'value1', 'value2' ]
// console.log(Object.entries(obj)) //[ [ 'foo', 'value1' ], [ 'bar', 'value2' ] ]
// for( const [key, value] of Object.entries(obj)) {
//     console.log(key, value)
// }
// console.log(new Map(Object.entries(obj)))

// const p1 = {
//     firstName: 'value1',
//     lastName: 'value2',
//     get fullName () {
//         return this.firstName + this.lastName
//     }
// }
// // const p2 = Object.assign({}, p1);
// // p2.firstName = 'aaa'
// // //set方法无法复制
// // console.log(p2)

// const description = Object.getOwnPropertyDescriptors(p1)
// console.log(description)
// const p2 = Object.assign({}, description)
// console.log(p2)

// const books = {
//     html: 5,
//     css: 16,
//     javascript: 120
// }
// for(const [key, value] of Object.entries(books)) {
//     console.log(`${key.padEnd(16, '-')}|${value.toString().padStart(3, '0')}`)
// }

// setTimeout(function () {
//     var a = 'hello'
//     setTimeout(function () {
//         var b = 'lagou'
//         setTimeout(function () {
//             var c = 'love'
//             console.log(a+b+c)
//         }, 10)
//     }, 10)
// }, 10)


