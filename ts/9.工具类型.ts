//1.Required 将类型的属性变成必选
interface Person2 {
  name?: string;
  age?: number;
  hobby?: string[];
}

const user2: Required<Person2> = {
  name: "树哥",
  age: 18,
  hobby: ["code"],
};

/**
 * 原理
 * Make all properties in T optional
 */
//  type Partial<T> = {
//   [P in keyof T]-?: T[P];
// }
//  -? 符号用于移除这些属性上的可选性

//2.Partial
//与 Required 相反，将所有属性转换为可选属性
type PartialUser = Partial<Person>

const shuge: PartialUser={
  name:'树哥'
} // 编译正确

/**
 * 原理
 * Make all properties in T optional
 */
//  type Partial<T> = {
//   [P in keyof T]?: T[P]
// }

//3.Exclude
//Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉,剩余的属性构成新的类型
// type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
// type T2 = Exclude<string | number | (() => void), Function>; // string | number
/**
 * 原理
 * Exclude from T those types that are assignable to U
 */
//  type Exclude<T, U> = T extends U ? never : T

//4.Extract
//和 Exclude 相反，Extract<T,U> 从 T 中提取出 U。
// type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
// type T1 = Extract<string | number | (() => void), Function>; // () =>void
/**
 * 原理
 * Extract from T those types that are assignable to U
 */
//  type Extract<T, U> = T extends U ? T : never

//5.Readonly
//把数组或对象的所有属性值转换为只读的，这就意味着这些属性不能被重新赋值。
// interface Person {
//   name: string;
//   age: number;
//   gender?: "male" | "female";
// }
/**
 * 原理
 */
//  type Readonly<T> = {
//   readonly [P in keyof T]: T[P]
// }

// let p: Readonly<Person> = {
//   name: "hello",
//   age: 10,
//   gender: "male",
// };
// p.age = 11; // error  Cannot assign to 'age' because it is a read-only property.

//6.Record
//Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型
// type Property = 'key1'|'key2'
// type Person = Record<Property, string>;

// const p: Person = {
//   key1: "hello 啊",
//   key2: "树哥",
// };
/**
 * 原理
 * Construct a type with a set of properties K of type T
 */
//  type Record<K extends keyof any, T> = {
//   [P in K]: T
// }

//7.Pick 从某个类型中挑出一些属性出来
// type Person = {
//     name: string;
//     age:number;
//     gender:string
//   }
/**
 * 原理
 * From T, pick a set of properties whose keys are in the union K
 */
//  type Pick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

//   type P1 = Pick<Person, "name" | "age">; // { name: string; age: number; }

//   const user:P1={
//     name:'树哥',
//     age:18
//   }

//8.Omit 与Pick相反，Omit<T,K> 从T中取出除去K的其他所有属性。
// interface Person {
//     name: string,
//     age: number,
//     gender: string
//   }
//   type P1 = Omit<Person, "age" | "gender">
//   const user:P1  = {
//     name: '树哥'
//   }

/**
 * 原理
 * Construct a type with the properties of T except for those in type K.
 */
//  type Omit<T, K extends keyof any> = 
//  Pick<T, Exclude<keyof T, K>

//9.NonNullable 去除类型中的 null 和 undefined
// type P1 = NonNullable<string | number | undefined>; // string | number
// type P2 = NonNullable<string[] | null | undefined>; // string[]

/**
 * 原理
 * Exclude null and undefined from T
 */
//  type NonNullable<T> = 
//  T extends null | undefined ? never : T

//10.ReturnType 用来得到一个函数的返回值类型
type Func = (value: string) => string;
const test: ReturnType<Func> = "1";

/**
 * 原理
 * Obtain the return type of a function type
 */
//  type ReturnType<T extends (...args: any) => any> = 
//  T extends (...args: any) => infer R ? R : any

//11.Parameters 用于获得函数的参数类型所组成的元组类型
type P1 = Parameters<(a: number, b: string) => void>; // [number, string]
/**
 * 原理
 * Obtain the parameters of a function type in a tuple
 */
//  type Parameters<T extends (...args: any) => any> = 
//  T extends (...args: infer P) => any ? P : never

//12.InstanceType 返回构造函数类型T的实例类型
class C {
  x = 0;
  y = 0;
}

type D = InstanceType<typeof C>; // C
