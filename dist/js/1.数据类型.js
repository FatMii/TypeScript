"use strict";
var b = true;
var n = 123;
var s = "123";
//数组类型
//1.简单方式
var ar = [1, 2, 3, 4];
var ar1 = ["1", "2"];
//2.数组泛型方式
var arr = ["1", "2"];
var userArr1 = ["1", "2"];
console.log(userArr);
//元组类型,属于数组的一种,指定数组内部元素的类型
//当访问一个越界的元素，会使用联合类型替代：
var tup = ["1", 1, true];
//any类型
//缺点:any类型的对象访问不存在的属性,运行时才会报错
var a = undefined;
var a1 = null;
var a2 = 1;
//void类型,一般只用在函数没有返回值
function get() {
}
//null和undefined是所有类型的子类型
//null类型
var p2 = null;
p2 = 12;
//undefined类型
var u = undefined;
var u2 = undefined;
u2 = 12;
//never类型表示的是那些永不存在的值的类型 
//例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
//变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
//never类型包含(null,undefined)
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
//Object
//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
//联合类型:1.赋值的时候确定是哪个类型
//let a = number | string
