//“类型断言更像是类型的选择，而不是类型转换”


//两种写法

//1.尖括号

let str: any = "to be or not to be";
let strLength: number = (<string>str).length;

//2.as 写法 (推荐以 as 方式，因为 jsx 这样的语法中只支持 as 方式。)
let strLength1: number = (str as string).length;

//3.非空断言
//在上下文中当类型检查器无法断定类型时，
//可以使用缀表达式操作符 ! 进行断言操作对象是非 null 和非 undefined 的类型，即x!的值不会为 null 或 undefined
let user: string | null | undefined;
console.log(user!.toUpperCase()); // 编译正确
console.log(user.toUpperCase()); // 错误


//4.确定赋值断言
let value:number
console.log(value); 
// Variable 'value' is used before being assigned.
//我们定义了变量, 没有赋值就使用，则会报错

//通过 let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。
let value1!:number
console.log(value1); // undefined 编译正确
