## 1.声明文件:

 - TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。
  

 
 - 虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查,代码补全，接口提示等特性功能。


 
 - 为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。


## 2. 什么是声明语句
假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过<script> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。如：
```
$('body')

```

但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西:
```javascript
$('body') //Cannot find name '$'. Do you need to install type definitions for jQuery? Try `npm i @types/jquery`.
```

这时，我们需要使用 declare var 来定义它的类型:

```javascript
declare var $: (selector: string) => any;
$('body')
```

declare var 并没有真的定义一个变量，只是定义了全局变量 $ 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。



## 3.什么是声明文件

通常我们会把声明语句放到一个单独的文件（index.d.ts）中，这就是声明文件：

```javascript
interface myInfoType {
    name?: string;
    age?: number;
    [params:string]: any;
}
declare const myInfo: myInfoType;
declare const $: (selector: string) => any;

//声明文件必须以.d.ts为后缀。

```


## 第三方声明文件
我们可以直接下载下来使用，但是更推荐的是使用 @types 统一管理第三方库的声明文件。

@types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：

```javascript
npm install @types/jquery --save-dev
```


## 书写声明文件
在不同的场景下，声明文件的内容和使用方式会有所区别。

库的使用场景主要有以下几种：

- 全局变量：通过 <script> 标签引入第三方库，注入全局变量
- npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范
- UMD 库：既可以通过 <script> 标签引入，又可以通过 import 导入
- 直接扩展全局变量：通过 <script> 标签引入后，改变一个全局变量的结构
- 在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构
- 模块插件：通过 <script> 或 import 导入后，改变另一个模块的结构
- 直接扩展全局变量：通过 <script> 标签引入后，改变一个全局变量的结构




## declare var/const/let
用来定义一个全局变量的类型;

```javascript
interface myInfoType {
    name?: string;
    age?: number;
    [params:string]: any;
}
declare var myInfo:myInfoType;
declare let myInfo:myInfoType;
declare const myInfo:myInfoType; //此时全局变量是一个常量不允许修改
// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let。
```


需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现
```javascript
declare const test = function(para) {
    return para;
}
//An implementation cannot be declared in ambient contexts.
```

## declare function 用来定义全局函数的类型

```javascript
declare function test(para: string):any;
```

```javascript
统一也是只能定义类型 不能定义具体实现；
declare function test(para: string):any{
    return para;
//An implementation cannot be declared in ambient contexts.ts(1183)
```


## declare class
当全局变量是一个类的时候，我们用 declare class 来定义它的类型

```javascript

declare class student {
    name: string;
    constructor(name: string);
    hello(): string;

```

同样的，declare class 语句也只能用来定义类型，不能用来定义具体的实现，比如定义 hello` 方法的具体实现则会报错：

```javascript

declare class student {
    name: string;
    constructor(name: string);
    hello(){
        return this.name;
    };
}
//An implementation cannot be declared in ambient contexts.ts(1183)
```


## declare namespace
namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。

namespace本质上是带有名字的js对象

随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了，故我们不再需要学习 namespace 的使用了。

namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。

```javascript
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}
```


## 防止命名冲突
暴露在最外层的 interface 或 type 会作为全局类型作用于整个项目中，我们应该尽可能的减少全局变量或全局类型的数量。故最好将他们放到 namespace 下

```javascript
declare namespace fetchSetting {
    interface fetchOptions {
        method?: 'GET' | 'POST';
        credentials?: string;
        [params: string]: any;
    }
}
let options: fetchSetting.fetchOptions = {
    method: 'GET',
    credentials: 'include'
}
```