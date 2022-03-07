"use strict";
console.log("泛型:");
//1.泛型函数
function getInfo(value) {
    console.log(value);
    return value;
}
getInfo(123);
getInfo("1234");
//2.泛型类
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        this.list.forEach(function (element) {
            if (minNum > element) {
                minNum = element;
            }
        });
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(231);
m.add(131);
m.add(252);
console.log(m.min());
var setData = function (value1) {
    return value1;
};
setData(123);
setData("123");
//4.将类作为参数类型的泛型类
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
var mysqlDB = /** @class */ (function () {
    function mysqlDB() {
    }
    mysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return mysqlDB;
}());
var u1 = new User();
u1.username = "owllai";
u1.password = "123456";
var db = new mysqlDB();
db.add(u1);
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
//在泛型约束中使用类型参数
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
