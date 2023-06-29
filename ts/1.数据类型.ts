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
console.log(userArr);

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

//null和undefined是所有类型的子类型
//null类型
let p2 = null;
p2 = 12;

//undefined类型
let u: undefined = undefined;
let u2 = undefined;
u2 = 12;

//never类型表示的是那些永不存在的值的类型
//例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
//变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
//never类型包含(null,undefined)

// 返回never的函数必须存在无法达到的终点
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

//Object
//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

//交叉类型

//type C = A & B
// interface Props {
//   name: string;
//   age: number;
// }
// interface WithHOCProps {
//   options: {
//     size: number;
//   };
// }

// const App: React.FC<Props & WithHOCProps> = ({ options }) => {
//   options.size; // number
// };

//联合类型:1.赋值的时候确定是哪个类型
//let a = number | string
