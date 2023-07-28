// 接口是对象的状态(属性)和行为(方法)的抽象(描述)


/**
 * 属性接口
 * 函数类型接口
 * 可索引接口
 * 类类型接口
 * 接口扩展
 */

//1.属性接口
interface MyUser {
  name?: string; //可选属性
  readonly age: number;
}

function printUser(usr: MyUser): void {
  //usr.age = 1;报错,因为是readonly
  console.log(usr);
}

let usr1: MyUser = {
  name: "owllai",
  age: 18,
};

printUser(usr1);
printUser({ age: 18 });

//2. 函数类型接口
interface encrypt {
  (key: string, value: string): string;
}

var md5: encrypt = function (key: string, value: string): string {
  //模拟操作
  return key + value;
};

console.log(md5("name", "zhangsan"));

var sha1: encrypt = function (key: string, value: string): string {
  //模拟操作
  return key + "----" + value;
};

//3.可索引接口:对数组和对象的约束,不常用
//数组类型的申明
let arr1: number[] = [];
let arr2: Array<number> = [];

//可索引接口对数组的约束
interface UserArr {
  [index: number]: string;
}

let userArr: UserArr = ["1", "2"];
console.log(userArr);

//可索引接口对对象的约束
//TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
//这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
//也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
interface UserObj {
  [index: number]: string;
}

let userObj: UserObj = {
  0: "owllai",
  1: "22",
};
console.log(userObj);


//4.类类型接口,跟抽象类相似
interface Animal {
  name: string;
  eat(str: string): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(str: string): void {
    console.log(this.name + " is eating");
  }
}

let dog = new Dog("dog");
dog.eat("str");

//5.接口的扩展:接口可以继承接口
interface Base {
  name: string;
  age: number;
}

interface P extends Base {
  sex: string;
}

var p1: P = { name: "1", age: 28, sex: "2" };


//6.接口可以继承类
//当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
//接口同样会继承到类的private和protected成员。 
//这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现


//7.混合类型


//type与interface差异与相同
//type不会创建一个新类型
//语法不同
// type MyTYpe = {
//   name: string;
//   say(): void;
// }

// interface MyInterface {
//   name: string;
//   say(): void;
// }

//都允许扩展
interface MyInterface {
  name: string;
  say(): void;
}

interface MyInterface2 extends MyInterface {
  sex: string;
}

let person1:MyInterface2 = {
  name:'树哥',
  sex:'男',
  say(): void {
    console.log("hello 啊，树哥！");
  }
}
//type 使用 & 实现扩展
type MyType = {
  name:string;
  say(): void;
}
type MyType2 = MyType & {
  sex:string;
}
let value: MyType2 = {
  name:'树哥',
  sex:'男',
  say(): void {
    console.log("hello 啊，树哥！");
  }
}


//type可以声明基本数据类型别名/联合类型/元组等，而interface不行
// type Username = string;
// type Username = string |number
// // 联合类型
// type Animal = Pig | Dog | Cat;
// type List = [string, boolean, number];

//interface能够合并声明，而type不行
interface Person {
  name: string
}
interface Person {
  age: number
}