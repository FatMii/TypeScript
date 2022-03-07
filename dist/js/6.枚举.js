"use strict";
//枚举类型,如果不赋值,值就是索引值
//1.数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var f = Direction.Up;
console.log(f); //0
