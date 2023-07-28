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

//2.Partial
//与 Required 相反，将所有属性转换为可选属性
// type User = Partial<Person>

// const shuge: User={
//   name:'树哥'
// } // 编译正确

//3.Exclude
//Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉,剩余的属性构成新的类型
// type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
// type T2 = Exclude<string | number | (() => void), Function>; // string | number

//4.Extract
//和 Exclude 相反，Extract<T,U> 从 T 中提取出 U。
// type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
// type T1 = Extract<string | number | (() => void), Function>; // () =>void

//5.Readonly
//把数组或对象的所有属性值转换为只读的，这就意味着这些属性不能被重新赋值。
// interface Person {
//   name: string;
//   age: number;
//   gender?: "male" | "female";
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

//7.Pick 从某个类型中挑出一些属性出来
// type Person = {
//     name: string;
//     age:number;
//     gender:string
//   }

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

//9.NonNullable 去除类型中的 null 和 undefined
// type P1 = NonNullable<string | number | undefined>; // string | number
// type P2 = NonNullable<string[] | null | undefined>; // string[]

//10.ReturnType 用来得到一个函数的返回值类型
type Func = (value: string) => string;
const test: ReturnType<Func> = "1";

//11.Parameters 用于获得函数的参数类型所组成的元组类型
type P1 = Parameters<(a: number, b: string) => void>; // [number, string]

//12.InstanceType 返回构造函数类型T的实例类型
class C {
  x = 0;
  y = 0;
}

type D = InstanceType<typeof C>; // C
