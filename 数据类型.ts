let b: Boolean = true;
let n: Number = 123;
let s: String = "123";

let ar: number[] = [1, 2, 3, 4];
let ar1: string[] = ["1", "2"];
let arr: Array<String> = ["1", "2"];

//元组类型,属于数组的一种,指定数组内部元素的类型
let tup: [string, number, boolean] = ["1", 1, true];

//枚举类型,如果不赋值,值就是索引值
enum Flag {
  fail = 0,
  success = 1,
}

let f: Flag = Flag.fail;
console.log(f); //0

let a: any = undefined;
let a1: any = null;
let a2: any = 1;

let u: undefined = undefined;

function get():void{

}

//never类型包含(null,undefined)