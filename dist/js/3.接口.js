"use strict";
/**
 * 属性接口
 * 函数类型接口
 * 可索引接口
 * 类类型接口
 * 接口扩展
 */
function printUser(usr) {
    //usr.age = 1;报错,因为是readonly
    console.log(usr);
}
var usr1 = {
    name: "owllai",
    age: 18,
};
printUser(usr1);
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
//6.接口可以继承类
//当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
//接口同样会继承到类的private和protected成员。 
//这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
//7.混合类型
