"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function logProperty(params) {
    return function (target, arr) {
        console.log(params);
        console.log(target);
        console.log(arr);
        target[arr] = params;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient(url) {
        this.url = url;
    }
    __decorate([
        logProperty("test")
    ], HttpClient.prototype, "url", void 0);
    return HttpClient;
}());
var httpClient = new HttpClient("xxxx");
console.log(httpClient.url);
