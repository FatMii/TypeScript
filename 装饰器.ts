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
function logClass(params: any) {
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
httpClient.getData();

//2.
