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
```dotnetcli
$('body') //Cannot find name '$'. Do you need to install type definitions for jQuery? Try `npm i @types/jquery`.
```

这时，我们需要使用 declare var 来定义它的类型:

```dotnetcli
declare var $: (selector: string) => any;
$('body')
```

declare var 并没有真的定义一个变量，只是定义了全局变量 $ 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。



## 3.什么是声明文件

通常我们会把声明语句放到一个单独的文件（index.d.ts）中，这就是声明文件：

```dotnetcli
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

```dotnetcli
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


## 2.库的类型

1.全局库

   全局库是指能在全局命名空间下访问的（例如：不需要使用任何形式的import）。 许多库都是简单的暴露出一个或多个全局变量。 比如，如果你使用过 jQuery，$变量可以被够简单的引用：

2.模块化库

  一些库只能工作在模块加载器的环境下。 比如，像 express只能在Node.js里工作所以必须使用CommonJS的require函数加载。
  (express,gulp)


UMD模块:

UMD模块是指那些既可以作为模块使用（通过导入）又可以作为全局（在没有模块加载器的环境里）使用的模块。 许多流行的库，比如 Moment.js，就是这样的形式。 比如，在Node.js或RequireJS里，你可以这样写
大多数流行的库现在都能够被当成UMD包。 比如 jQuery,Moment.js,lodash和许多其它的。