"use strict";
//枚举类型,如果不赋值,值就是索引值
var Flag;
(function (Flag) {
    Flag[Flag["fail"] = 0] = "fail";
    Flag[Flag["success"] = 1] = "success";
})(Flag || (Flag = {}));
var f = Flag.fail;
console.log(f); //0
