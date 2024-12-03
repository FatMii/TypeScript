// 装饰器函数会在类定义的时候就执行
//1.类装饰器
/* 不带参数 
function logClass(params: any) {
  params.prototype.url = "xxx";
  console.log(params);
}

@logClass
class HttpClient {
  constructor() {}

  getData() {}
}

var httpClient = new HttpClient();
console.log(httpClient.url);
 */

//带参数
/* function logClass(params: any) {
  return function (target: any) {
    console.log(target);
    console.log(params);
  };
}

@logClass("hello")
class HttpClient {
  constructor() {}

  getData() {}
}

var httpClient = new HttpClient(); */

//操作构造函数
// 如果类装饰器返回一个新的类，那这个新类将替换掉被装饰的类
/* function logClass(params: any) {
  console.log(params);
  return class extends params {
    url: string = "被修改后的url";
    getData() {
      console.log(this.url + "---");
    }
  };
}
@logClass
class HttpClient {
  public url: string | undefined;
  constructor(url: string) {
    this.url = url;
  }

  getData() {
    console.log(this.url);
  }
}

var httpClient = new HttpClient("xxxx");
httpClient.getData(); */

//2.属性装饰器

function logProperty(params: any) {
  return function (target: any, arr: any) {
    console.log(params);
    console.log(target); // 对于实例属性是类的原型对象，对于静态属性来说值就是类。
    console.log(arr); // 属性名字key
    target[arr] = params;
  };
}
class HttpClient {
  @logProperty("test")
  public url: string | undefined;
  constructor(url: string) {
    this.url = url;
  }
}

var httpClient = new HttpClient("xxxx");
console.log(httpClient.url);


//3.方法装饰器
function Logger(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // 存储原始方法
  const originnal = descriptor.value;
  // 替换原始方法
  descriptor.value = function (...args) {
    console.log(`${propertyKey}开始执行。。。。`);
    originnal.call(this, ...args);
    console.log(`${propertyKey}结束执行。。。。。`);
  };
}

class Person1 {
  constructor(public name: string, public age: number) {}
  @Logger
  say(message: string) {
    console.log(message);
  }
}

// 4. 装饰器执行顺序 属性=>方法=>方法参数=>类 ,如果有多个相同类型的装饰器,执行顺序从后到前
// 如果存在装饰器工厂的情况下（也就是带参数），就先从上到下执行装饰器工厂，得到装饰器函数后，再从下到上
function test1(target: Function){
  console.log("test1");
}
function test2(){
  console.log("test2工厂");
  return function (target: Function){
    console.log("test2");
  }
}

function test3(){
  console.log("test3工厂");
  return function (target: Function){
    console.log("test3");
  }
}

function test4(target: Function){
  console.log("test4");
}

@test1
@test2()
@test3()
@test4
class Person2{}

// test2工厂
// test3工厂
// test4
// test3
// test2
// test1
