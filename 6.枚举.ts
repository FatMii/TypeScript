//枚举类型,如果不赋值,值就是索引值

//1.数字枚举
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
let f: Direction = Direction.Up;
console.log(f); //0
