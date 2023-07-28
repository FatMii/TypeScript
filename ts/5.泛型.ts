console.log("泛型:");
//泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
//举个例子，比如我们现在有个这样的需求，我们要实现一个这样的函数，函数的参数可以是任何值，
//返回值就是将参数原样返回，并且参数的类型是 string，函数返回类型就为 string？
//1.泛型函数
//泛型的语法是尖括号 <> 里面写类型参数，一般用 T 来表示第一个类型变量名称，其实它可以用任何有效名称来代替,比如我们用NIUBI也是编译正常的
function getInfo<T>(value: T): T {
  console.log(value);
  return value;
}

getInfo<number>(123);
getInfo<string>("1234");

//多个参数
function getValue<T, U>(arg: [T, U]): [T, U] {
  return arg;
}
// 使用
const towParams = getValue(["树哥", 18]);

//2.泛型类
class MinClass<T> {
  public list: T[] = [];
  add(num: T): void {
    this.list.push(num);
  }

  min(): T {
    var minNum = this.list[0];
    this.list.forEach((element) => {
      if (minNum > element) {
        minNum = element;
      }
    });
    return minNum;
  }
}
var m = new MinClass<number>();
m.add(231);
m.add(131);
m.add(252);

console.log(m.min());

//3.泛型接口
interface Config {
  <T>(value1: T): T;
}

var setData: Config = function <T>(value1: T): T {
  return value1;
};

setData<number>(123);
setData<string>("123");

//4.将类作为参数类型的泛型类
class User {
  username: string | undefined;
  password: string | undefined;
}

class Article {
  title: string | undefined;
  desc: string | undefined;
}

class mysqlDB<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
  }
}

var u1 = new User();
u1.username = "owllai";
u1.password = "123456";

var db = new mysqlDB<User>();
db.add(u1);

//5.泛型约束
//相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。
//只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。
//为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });

//在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

//泛型约束接口
interface IKeyValue<T, U> {
  key: T
  value: U
}

const k1:IKeyValue<number, string> = { key: 18, value: 'lin'}
const k2:IKeyValue<string, number> = { key: 'lin', value: 18}


//泛型参数的默认类型
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

//泛型工具类型
//(1)keyof
// interface Person {
//   name: string;
//   age: number;
//   gender: "male" | "female";
// }

// type PersonKey = keyof Person; //type PersonKey = 'name'|'age'|'gender';

// function getValueByKey(p: Person, key: PersonKey) {
//   return p[key];
// }
// let val = getValueByKey({ name: "树哥", age: 18, gender: "male" }, "name");
// console.log(val); // 树哥

//(2) in

type Keys = "a" | "b" | "c";

type Obj = {
  [p in Keys]: any;
}; // -> { a: any, b: any, c: any }

//(3) infer 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。
//    infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

//(4) extends 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。
