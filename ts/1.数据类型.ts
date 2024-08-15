let b: Boolean = true;
let n: Number = 123;
let s: String = "123";

//数组类型
//1.简单方式
let ar: number[] = [1, 2, 3, 4];
let ar1: string[] = ["1", "2"];

//2.数组泛型方式
let arr: Array<String> = ["1", "2"];

//3.interface方式
interface UserArr1 {
  [index: number]: string;
}

let userArr1: UserArr1 = ["1", "2"];
console.log(userArr1);

//3.元组类型,属于数组的一种,指定数组内部元素的类型
//当访问一个越界的元素，会使用联合类型替代：

let tup: [string, number, boolean] = ["1", 1, true];

//4.any类型
//缺点:any类型的对象访问不存在的属性,运行时才会报错
let a: any = undefined;
let a1: any = null;
let a2: any = 1;

//5.unknown类型，可以看作是安全版的any类型

//unknown类型和any的最大区别：
//任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。
//unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any

//6.void类型,一般只用在函数没有返回值
function get(): void {}

// 有个特殊情况用type定义void的函数
type LogFunc = () => void
const f1:LogFunc =function(){ return 66 }
let x =f1(); console.log(x); // 66

//因为要考虑Array.prototype.push方法会返回一个number，如果在一个foreach里面调用push方法，严格限制就会有问题



//7.null类型
//null和undefined是所有类型的子类型
//但是如果指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自，不然会报错。

let p2 = null;
p2 = 12;

//undefined类型
let u: undefined = undefined;
let u2 = undefined;
u2 = 12;

//8.never类型表示的是那些永不存在的值的类型
//never 类型是任何类型的子类型，也可以赋值给任何类型
//例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
//变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
//never类型包含(null,undefined)

// never和void的区别

// void表示没有任何类型（可以被赋值为null和undefined）
// never表示一个不包含值的类型，即表示永远不存在的值。
// 拥有void返回值类型的函数能正常运行。拥有never返回值类型的函数无法正常返回，无法终止，或会抛出异常。



// 返回never的函数必须存在无法达到的终点
// 无法到达终点的意思就是：正常一个函数都会有return，如果你没写return，也会自动帮你写一个return undefined. 如果函数返回never，这个函数就没有return。
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

//9.枚举
enum Color {
  RED = "红色",
  PINK = "粉色",
  BLUE = "蓝色",
}

const pink: Color = Color.PINK;
console.log(pink); // 粉色

//10.Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// Object存储的类型是可以调用的Object方法的类型，也可以存储原始类型。null和undefined依然不行。

//11.联合类型:1.赋值的时候确定是哪个类型
// let variable: string | number;
// variable = "to be or not to be";
// variable = 1;

//12.类型别名,一般用于联合类型
//用来给一个类型起个新名字。它只是起了一个新名字，并没有创建新类型
// type count = number | number[];
// function hello(value: count) {}

//13.交叉类型:交叉类型就是两个类型必须存在
interface IpersonA {
  name: string;
  age: number;
}
interface IpersonB {
  name: string;
  gender: string;
}

let person: IpersonA & IpersonB = {
  name: "师爷",
  age: 18,
  gender: "男",
};

//如果两个类型中含有相同的key但是类型不同呢,则该key为never类型
// interface IpersonA {
//   name: string
// }

// interface IpersonB {
//   name: number
// }

// function testAndFn(params: IpersonA & IpersonB) {
//   console.log(params)
// }

// testAndFn({name: "黄老爷"}) // error TS2322: Type 'string' is not assignable to type 'never'.

//14.类型守卫:类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。
//(1) in
interface InObj1 {
  a: number;
  x: string;
}
interface InObj2 {
  a: number;
  y: string;
}
function isIn(arg: InObj1 | InObj2) {
  // x 在 arg 打印 x
  if ("x" in arg) console.log("x");
  // y 在 arg 打印 y
  if ("y" in arg) console.log("y");
}
isIn({ a: 1, x: "xxx" });
isIn({ a: 1, y: "yyy" });


//(2) typeof 关键字
function isTypeof( val: string | number) {
  if (typeof val === "number") return 'number'
  if (typeof val === "string") return 'string'
  return '啥也不是'
}

//(3) instanceof
function creatDate(date: Date | string){
  console.log(date)
  if(date instanceof Date){
      date.getDate()
  }else {
      return new Date(date)
  }
}

//(4) 自定义类型保护的类型谓词
function isNumber(num: any): num is number {
  return typeof num === 'number';
}
function isString(str: any): str is string{
  return typeof str=== 'string';
}