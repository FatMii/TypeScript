# TypeScript

## 特点
- 跨平台：TypeScript 编译器可以安装在任何操作系统上，包括 Windows、macOS 和 Linux。
- ES6 特性：TypeScript 包含计划中的 ECMAScript 2015 (ES6) 的大部分特性，例如箭头函数。
- 面向对象的语言：TypeScript 提供所有标准的 OOP 功能，如类、接口和模块。
- 静态类型检查：TypeScript 使用静态类型并帮助在编译时进行类型检查。因此，你可以在编写代码时发现编译时错误，而无需运行脚本。
- 类型推断： ts中没有批注变量类型会自动推断变量的类型
- 可选的静态类型：如果你习惯了 JavaScript 的动态类型，TypeScript 还允许可选的静态类型。

## 优点

- 类型检查
- 面向对象
- 接口
- 泛型
- TypeScript 更具表现力，这意味着它的语法混乱更少。
- 由于高级调试器专注于在编译时之前捕获逻辑错误，因此调试很容易。
- 静态类型使 TypeScript 比 JavaScript 的动态类型更易于阅读和结构化。
- 由于通用的转译，它可以跨平台使用，在客户端和服务器端项目中。

## 缺点

## 运行准备

```javascript
安装：npm install -g typescript

查看版本 tsc -v

生成 tsconfig.json 文件: tsc --init

编译某个 ts 文件 tsc index.ts

然后再执行编译后的 js 文件 node index.js

tsc -w 执行启动

如果不想每次都手动编译，可以安装 ts-node 插件

ts-node index.ts
```

```javascript
配置文件
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}

```


# 协变、逆变、双变和抗变的理解？

1. 协变：X=Y Y类型可以赋值给X类型的情况。也可以说是X类型兼容Y类型

```javascript
interface X { name: string; age: number; } 
interface Y { name: string; age: number; hobbies: string[] }
let x: X = { name: 'xiaoming', age: 16 }
let y: Y = { name: 'xiaohong', age: 18, hobbies: ['eat'] }
x = y

```

2. 双变：methodY=methodX 函数X类型可以赋值给函数Y类型，因为函数Y在调用的时候参数是按照Y类型进行约束的，但是用到的是函数X的属性和方法。

```javascript
let methodY: (y: Y) => void
methodY = (y) => { console.log(y.hobbies) }
let methodX: (x: X) => void
methodX = (x) => { console.log(x.name) }
methodY = methodX

```

3. 双变（双向协变）：X = Y；Y = X 
   
   父类型可以赋值给子类型，子类型可以赋值给父类型，既逆变又协变。（ts2.x 之前支持这种赋值，之后 ts 加了一个编译选项 strictFunctionTypes，设置为 true 就只支持函数参数的逆变，设置为 false 则支持双向协变）

4. 抗变（不变）：非父子类型之间不会发生型变，只要类型不一样就会报错.



