"use strict";
//多参数传递
function getInfo() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    console.log(result);
}
getInfo(1, 2, 3, 4, 5);
//函数重载
/* function getName(name: string);

function getName(name: string, id: number);

getName("2", 1);
 */ 
