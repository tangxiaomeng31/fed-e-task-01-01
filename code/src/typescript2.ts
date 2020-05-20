// const foo: object = {}
// const obj: { key: string, bar: number } = { key: 'text', bar: 10 }

// const arr: Array<number> = [1,2]

// const arr2: number[] = [1,2]

// const tuple: [string, number] = ['11', 2]
// const [name, age] = tuple;

// enum PostState {
//     Draf = 0,
//     Unpublished = 1,
//     published = 2
// }
// const post = {
//     status: PostState.published
// }
// const enum PostState2 {
//     Draf = '2',
//     Unpublished = '3',
//     published = '4'
// }

// function fn (a: number, b: number): string {
//     return 'aaaa'
// }

// const abc: (a: number) => string = function (a: number): string {
//     return '123'
// }

// function stringfy (value: any) {
//     return JSON.stringify(value)
// }

// const nums = [1,2,3,4]
// const res = nums.find(i => i>0)
// const num1 = res as number
// const num2 = <number>res

// interface Post {
//     title: string
//     content: string
//     readonly summery: string
// }

// function printPost (post: Post) {
//     console.log(post.title)
//     console.log(post.content)
// }

// const hello: Post = {
//     title: '1',
//     content: '2',
//     summery: '44'
// }

// interface Cache {
//     [key: string]: string
// }

// class Person {
//     public name: string
//     private age: number //类的私有属性，只能在类中进行访问
//     protected gender: boolean //只允许在此类中访问

//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//         this.gender = true
//     }
    
//     sayHi (msg: string): void {
//         console.log(msg)
//         console.log(this.age)
//     }
// }

// const tom = new Person('tom', 8)
// console.log(tom.name)
// // tom.genger 不能访问
// // tom.age 不能访问

// class Student extends Person {
//     private constructor (name: string, age: number) {
//         super(name, age)
//         console.log(this.gender) //true 可以访问
//     }

//     static create (name: string, age: number) {
//         return new Student(name, age)
//     }
// }

// const merrag = Student.create('merry', 10)


// interface EatAndRun {
//     eat(food: string): void
//     run(distance: number): void
// }

// interface Eat {
//     eat(food: string): void
// }

// interface Run {
//     run(distance: number): void
// }

// class Person implements Eat, Run {
//     eat (food: string): void {
//         console.log(`优雅的进餐${food}`)
//     }

//     run (distance: number) {
//         console.log(`直立行走${distance}`)
//     }
// }

// class Animal implements EatAndRun {
//     eat (food: string): void {
//         console.log(`呼噜呼噜的吃${food}`)
//     }

//     run (distance: number) {
//         console.log(`爬行${distance}`)
//     }
// }

// abstract class Animal {
//     eat (food: string): void {
//         console.log(`呼噜呼噜的吃${food}`)
//     }
//     //抽象方法不需要方法体
//     abstract run (distance: number): void
// }

// class Dog extends Animal {
//     run(distance: number): void {
//         console.log(distance)
//     }
// }

// const d = new Dog()
// d.eat('grass')
// d.run(11)



function createNumberArray (length: number, value: number): number[] {
    const arr = Array<number>(length).fill(value)
    return arr
}

function createStringArray (length: number, value: string): string[] {
    const arr = Array<string>(length).fill(value)
    return arr
}

const res = createNumberArray(3, 100)
console.log(res) //[100, 100, 100]

function createArray<T> (length: number, value: T): T[] {
    const arr = Array<T>(length).fill(value)
    return arr
}

const res2 = createArray<number>(3, 100)
console.log(res) //[100, 100, 100]

export {}