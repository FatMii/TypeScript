"use strict";
/**
 * 属性接口
 * 函数类型接口
 * 可索引接口
 * 类类型接口
 * 接口扩展
 */
function printUser(usr) {
    console.log(usr);
}
printUser({ name: "owllai", age: 18 });
printUser({ age: 18 });
var md5 = function (key, value) {
    //模拟操作
    return key + value;
};
console.log(md5("name", "zhangsan"));
var sha1 = function (key, value) {
    //模拟操作
    return key + "----" + value;
};
//3.可索引接口:对数组和对象的约束,不常用
//数组类型的申明
var arr1 = [];
var arr2 = [];
var userArr = ["1", "2"];
console.log(userArr);
var userObj = {
    0: "owllai",
    1: "22",
};
console.log(userObj);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (str) {
        console.log(this.name + " is eating");
    };
    return Dog;
}());
var dog = new Dog("dog");
dog.eat("str");
var p1 = { name: "1", age: 28, sex: "2" };
