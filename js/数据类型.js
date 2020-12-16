"use strict";
var b = true;
var n = 123;
var s = "123";
var ar = [1, 2, 3, 4];
var ar1 = ["1", "2"];
var arr = ["1", "2"];
//元组类型,属于数组的一种,指定数组内部元素的类型
var tup = ["1", 1, true];
//枚举类型,如果不赋值,值就是索引值
var Flag;
(function (Flag) {
    Flag[Flag["fail"] = 0] = "fail";
    Flag[Flag["success"] = 1] = "success";
})(Flag || (Flag = {}));
var f = Flag.fail;
console.log(f); //0
var a = undefined;
var a1 = null;
var a2 = 1;
var u = undefined;
function get() {
}
//never类型包含(null,undefined)
