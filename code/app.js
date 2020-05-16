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

