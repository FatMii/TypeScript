class Person {
  public static staticInfo: string = "staticInfo";
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  say(): void {
    console.log(this.name);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
  static staticSay() {
    console.log("I am static function");
  }
}

Person.staticSay();

let p = new Person("owllai");
p.setName("hero");
console.log(p.getName());

/* 
普通继承
class Student extends Person {
  constructor(name: string) {
    super(name);
  }
    say(): void {
    //spuer正常只能在构造函数中使用，下面使用相当于是代表父类的原型对象
    spuer.say()
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
 * public:1.自身调用 2.实例调用 3.子类调用
 * protected:1.自身调用 2.子类调用  3.实例不能调用  4.外部无法访问
 * private:1.自身调用  2.子类和外部无法访问
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
 * 抽象方法一定要实现
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


