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
  return function (target: any,arr:any) {
    console.log(params);
    console.log(target); // 类的原型对象
    console.log(arr);   // 属性名字key
    target[arr] =params
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

//3.装饰器执行顺序 属性=>方法=>方法参数=>类 ,如果有多个相同类型的装饰器,执行顺序从后到前
