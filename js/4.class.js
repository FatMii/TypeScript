"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.say = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.staticSay = function () {
        console.log("I am static function");
    };
    Person.staticInfo = "staticInfo";
    return Person;
}());
Person.staticSay();
var p = new Person("owllai");
p.setName("hero");
console.log(p.getName());
/*
普通继承
class Student extends Person {
  constructor(name: string) {
    super(name);
  }
}

let student = new Student("学生");
console.log(student.getName());
*/
/*
class Student extends Person {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age:number): void {
    this.age = age;
  }
}

let student = new Student("张三",18);
console.log(student.getAge()); */
/**
 * public:
 * protected:类里和子类可访问,外部无法访问
 * private:类里可访问,子类和外部无法访问
 */
//多态:父类定义一个方法不实现,由子类来实现
/**
 * class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(){
   console.log("I am Animal eat function");
  };
}

class Dog extends Animal{
  constructor(name:string){
    super(name);
  }

  eat(){
    return "dog is eating"
  }
}

class Cat extends Animal{
  constructor(name:string){
    super(name);
  }

  eat(){
    return "cat is eating"
  }
}

let dog =new Dog("dog")
console.log(dog.eat());

let cat = new Cat("cat")
console.log(cat.eat());
 */
/**
 * 抽象类:不可实例化
 * 抽象方法只能放在抽象类里面
 *
 *
 *
 *    abstract class Animal {
          abstract eat(): void;
        }

        class Dog extends Animal {
          name: string;
          constructor(name: string) {
            super();
            this.name = name;
          }
          eat(): void {
            console.log("dog is eating");
          }
        }

        let dog = new Dog("dog");
        dog.eat()
 */
