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
  age: number;
}

function printUser(usr: MyUser): void {
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
