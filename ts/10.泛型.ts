// 泛型允许我们在定义函数、类或接口时，使⽤类型参数来表示未指定的类型，这些参数在具体使用时，才被指定具体的类型（可以不是基本类型，比如type声明的类型），
// 泛型能让同一段代码适用于多种类型，同时仍然保持类型的安全性。


// 1. 泛型函数
// 定义参数和返回值类型的时候我们不确定，使用泛型规定
// function logData<T>(data: T): T {
//   console.log(data)
//   return data
// }
// // 在调用时，我们确定了具体的类型
// logData<number>(100)
// logData<string>('hello')

// 泛型可以有多个：
// 这里有两个泛型
// function logData<T, U>(data1: T, data2: U): T | U {
//   console.log(data1, data2)
//   return Date.now() % 2 ? data1 : data2
// }
// logData<number, string>(100, 'hello')
// logData<string, boolean>('ok', false)

// 2. 泛型接口

// interface PersonInterface<T> {
//   name: string
//   age: number
//   extraInfo: T // 这里用到了泛型
// }
// let p1: PersonInterface<string>
// let p2: PersonInterface<number>
// p1 = { name: '张三', age: 18, extraInfo: '⼀个好⼈' }
// p2 = { name: '李四', age: 18, extraInfo: 250 }

// 3. 泛型约束

interface LengthInterface {
  length: number
}
// 约束规则是：传⼊的类型T必须具有 length 属性
// function logPerson<T extends LengthInterface>(data: T): void {
//   console.log(data.length)
// }
// logPerson<string>('hello')
// // 以下行代码报错：因为number不具备length属性
// logPerson<number>(100) 

// 44. 泛型类

// class Person<T> {
//   constructor(
//     public name: string, 
//      public age: number, 
//      public extraInfo: T // 这里用到了泛型
//     ) {}
//   speak() {
//     console.log(`我叫${this.name}今年${this.age}岁了`)
//     console.log(this.extraInfo)
//   }
// }
// 测试代码1
// const p1 = new Person<number>('tom', 30, 250)
// // 测试代码2
// type JobInfo = { // 这里时typo声明的高级类型
//   title: string
//   company: string
// }
// const p2 = new Person<JobInfo>('tom', 30, { title: '研发总监', company: '发发发科技公司' })