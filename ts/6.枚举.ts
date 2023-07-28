//枚举类型,如果不赋值,值就是索引值

//1.数字枚举
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
let f: Direction = Direction.Up;
console.log(f); //0

//2.字符串枚举

//3.反向映射
//注意:不会为字符串枚举成员生成反向映射。
enum Enum {
  A,
}
let enumA = Enum.A;
let nameOfA = Enum[a]; // "A"
//反向映射原理
//枚举是如何做到反向映射的呢，我们不妨来看一下被编译后的代码

// var Direction;
// (function (Direction) {
//     Direction[Direction["Up"] = 6] = "Up";
//     Direction[Direction["Down"] = 7] = "Down";
//     Direction[Direction["Left"] = 8] = "Left";
//     Direction[Direction["Right"] = 9] = "Right";
// })(Direction || (Direction = {}));
