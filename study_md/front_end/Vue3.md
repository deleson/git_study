# 额外介绍



## 1.vue-cli、vite介绍

**1.1 什么是脚手架？**

> **脚手架**（Scaffolding）在软件开发中是指一类工具，它能够自动生成项目的基本结构、配置文件和必要的依赖，使开发者能够快速启动项目，专注于业务逻辑的实现。脚手架工具通常提供命令行界面，用于创建和配置新项目。
>
> **经典的脚手架工具**：
>
> - **Vue CLI**：用于生成 Vue.js 项目，自动配置 Webpack、Babel 等工具。
> - **Create React App**：用于生成 React 项目，自动配置 Webpack、Babel 等工具。
> - **Angular CLI**：用于生成 Angular 项目，自动配置 TypeScript、Webpack 等工具。
> - **Yeoman**：一个通用的脚手架工具，可以通过各种生成器创建不同类型的项目。
>

**1.2 Vue CLI 与Webpack？**

> - **Vue CLI** 是一个脚手架工具。它用于生成 Vue.js 项目，提供了预配置的项目结构、开发环境和构建工具，使开发者能够快速启动 Vue.js 项目。
>
> - **Webpack** 不是脚手架工具。Webpack 是一个模块打包工具（module bundler），用于将项目中的各种资源（如 JavaScript 文件、CSS 文件、图片等）打包成一个或多个文件，以便于在浏览器中运行。Webpack 本身不生成项目结构，它主要负责构建过程中的资源处理。
>

**1.3 Vite 为什么不是脚手架？**

> **Vite** 主要是一个构建工具，它专注于提供快速的开发体验和高效的生产构建。尽管 Vite 也可以用于生成项目并提供开发服务器，但它本质上不是一个脚手架工具。以下是 Vite 和 Vue CLI 的主要区别：
>
> - **Vite 的特点**：
>   - 提供快速启动的开发服务器。
>   - 支持即时热更新（HMR）。
>   - 使用 Rollup 进行生产构建，提供高效的代码拆分和优化。
>   - 配置相对简单，主要关注构建和开发体验。
>
> - **Vue CLI 的特点**：
>   - 提供项目生成功能，可以通过交互式命令行生成预配置的 Vue.js 项目。
>   - 配置和管理 Webpack，提供许多开箱即用的功能和插件。
>   - 支持 Vue 项目的全生命周期管理，包括开发、测试和构建。
>   - 提供插件机制，可以扩展项目功能（如 TypeScript 支持、PWA 支持等）。
>

> **总结**：
>
> - **脚手架工具**：主要功能是生成项目结构和配置，帮助开发者快速启动新项目。典型的例子有 Vue CLI、Create React App 和 Angular CLI。
> - **构建工具**：主要功能是处理项目的依赖和资源，提供开发和构建支持。Vite 和 Webpack 都属于构建工具。
>
> Vite 之所以不被称为脚手架，是因为它的主要目标是提供快速的开发和高效的构建体验，而不是生成项目结构和配置。因此，Vite 更适合作为构建工具，而 Vue CLI 则是一个完整的脚手架工具，帮助开发者从零开始搭建和管理项目。

<br>

## 2.Typescript

**TypeScript 是什么**

> TypeScript 是由微软开发和维护的一种开源编程语言。它是 JavaScript 的一个超集，扩展了 JavaScript 的语法，使得在开发大型应用时更加可控和可靠。TypeScript 主要增加了对静态类型的支持，允许开发者在编写代码时指定变量、函数和对象的类型。
>



**TypeScript 与 JavaScript 的区别**

> 1. **类型系统**：TypeScript 是静态类型语言，而 JavaScript 是动态类型语言。在 TypeScript 中，变量的类型在编译时确定，可以在代码编写过程中发现并修正类型错误。
>
> 2. **编译**：TypeScript 需要经过编译（transpile）成 JavaScript 代码才能在浏览器或 Node.js 环境中运行。JavaScript 是解释执行的，不需要编译。
>
> 3. **现代特性**：TypeScript 支持现代 JavaScript 特性，并且可以在旧的运行环境中使用这些特性，因为编译器会将这些特性转换为兼容的 JavaScript 代码。
>
> 4. **IDE 支持**：TypeScript 提供了更好的代码补全、重构、导航等开发工具支持，极大提高了开发者的生产力。
>



**TypeScript 的历史**

> TypeScript 由微软在 2012 年首次发布，旨在解决 JavaScript 在开发大型复杂应用程序时的不足。由于 JavaScript 的灵活性和弱类型特性，开发大型应用程序时容易出现类型相关的错误和维护难题。TypeScript 的出现提供了一种在编写代码时确保类型安全的方法，帮助开发者在早期发现并修复错误。
>



**TypeScript 的优缺点**

> 优点
>
> 1. **类型安全**：提供静态类型检查，减少运行时错误，提高代码的健壮性和可维护性。
> 2. **开发工具支持**：增强的代码编辑体验，包括代码补全、类型提示、重构工具等。
> 3. **现代特性支持**：可以使用最新的 JavaScript 特性，并在旧环境中运行。
> 4. **大型项目的可维护性**：更好的模块化和类型定义，使大型项目的代码更加易于理解和维护。
> 5. **社区和生态系统**：有庞大的社区和丰富的第三方库的类型定义（通过 DefinitelyTyped 项目）。
>
> 缺点
>
> 1. **学习曲线**：对于没有类型语言经验的开发者来说，可能需要一些时间来学习和适应 TypeScript 的类型系统。
> 2. **编译步骤**：需要一个编译步骤来将 TypeScript 转换为 JavaScript，增加了构建过程的复杂性。
> 3. **开发速度**：在小型项目或原型开发中，可能会因为需要额外的类型定义而降低开发速度。
>





**TypeScript 的应用场景**

> 场景一：大型企业应用
>
> 大型企业应用通常包含成千上万行代码和多个模块，维护难度大。TypeScript 的类型检查和模块化特性可以帮助开发团队在编写代码时发现错误，并且提高代码的可维护性。例如，微软的 Visual Studio Code 编辑器就是用 TypeScript 编写的。
>
> 场景二：团队合作
>
> 在团队合作中，不同开发者编写的代码需要整合在一起。TypeScript 的类型定义使得接口和模块的约定更加明确，减少了因为类型不匹配导致的错误，增强了团队之间的协作效率。
>
> 场景三：前端开发
>
> 在前端开发中，尤其是使用框架（如 Angular、React、Vue）时，TypeScript 提供了更好的开发体验和工具支持。例如，Angular 框架是完全使用 TypeScript 编写的，提供了强类型的开发体验。
>



**使用 TypeScript 的故事展现**

> 故事背景
>
> 假设有一个中型科技公司，负责开发一款复杂的项目管理工具。这个工具涉及用户管理、任务分配、时间跟踪等功能，代码库已经发展到几万行，并且有多个开发者同时在项目上工作。
>
> 面临的问题
>
> - **频繁的运行时错误**：由于 JavaScript 的动态类型特性，许多类型相关的错误只能在运行时发现，导致了许多线上故障。
> - **开发和维护成本高**：随着代码库的增长，代码的可维护性变差，开发者需要花费大量时间理解和修复代码。
> - **团队协作效率低**：不同开发者编写的代码接口不统一，导致集成过程中出现许多问题。
>
> 引入 TypeScript
>
> 为了提高代码的健壮性和可维护性，技术负责人决定引入 TypeScript：
>
> 1. **类型检查**：开发者在编写代码时立即能发现类型错误，减少了运行时错误的发生。
> 2. **模块化**：使用 TypeScript 的模块和接口特性，将代码拆分成多个模块，每个模块有明确的接口定义，增强了代码的可维护性。
> 3. **开发工具支持**：使用 TypeScript 后，开发工具（如 Visual Studio Code）提供了更好的代码补全、类型提示和重构工具，提高了开发效率。
> 4. **团队协作**：定义了统一的接口和类型规范，团队成员之间的协作更加顺畅，减少了集成过程中出现的问题。
>
> 结果
>
> 引入 TypeScript 后，项目管理工具的开发效率显著提高，运行时错误大幅减少，代码的可维护性和团队协作也得到了改善。整个开发团队对 TypeScript 的引入给予了积极的反馈，项目进展更加顺利。
>



<br>

**总结**

> TypeScript 是一种增强版的 JavaScript，通过引入静态类型检查和现代特性，帮助开发者编写更加健壮、可维护的代码。它特别适用于大型项目和团队协作的场景，通过类型系统提高代码的质量和开发效率。虽然引入 TypeScript 需要一定的学习成本，但其带来的长期收益使得它在许多项目中成为了首选的开发语言。

## 3. JavaScript箭头函数

JavaScript的箭头函数（Arrow Functions）是ES6（ECMAScript 2015）引入的一种更简洁的函数定义方式。下面是对箭头函数的详细介绍：

**基本语法**

> 箭头函数使用箭头符号 `=>` 定义。基本形式如下：
>
> ```javascript
> (param1, param2, ..., paramN) => { 
>   // 函数体
> }
> ```
>
> 如果只有一个参数，参数括号可以省略：
>
> ```javascript
> param => {
>   // 函数体
> }
> ```
>
> 如果函数体只有一个表达式，可以省略大括号 `{}` 和 `return` 关键字：
>
> ```javascript
> (param1, param2) => expression
> ```
>



**示例**

> 无参数箭头函数
>
> ```javascript
> () => console.log('Hello, world!');
> ```
>
> 单参数箭头函数
>
> ```javascript
> x => x * x
> ```
> 等同于：
> ```javascript
> function(x) {
>   return x * x;
> }
> ```
>
> 多参数箭头函数
>
> ```javascript
> (a, b) => a + b
> ```
> 等同于：
> ```javascript
> function(a, b) {
>   return a + b;
> }
> ```
>
> 复杂函数体
>
> 如果函数体包含多条语句，需要使用大括号 `{}` 并显式返回值：
> ```javascript
> (a, b) => {
>   const result = a + b;
>   return result;
> }
> ```
>

**箭头函数的特点**

> `this` 绑定
>
> 箭头函数不创建自己的 `this`，它会捕获其所在上下文的 `this` 值（即封闭作用域内的 `this` 值）。这一特性使得箭头函数特别适用于回调函数和需要保持上下文 `this` 的场景。
>
> 示例：
> ```javascript
> function Person() {
>   this.age = 0;
> 
>   setInterval(() => {
>     this.age++; // this正确地指向了Person对象
>   }, 1000);
> }
> 
> let p = new Person();
> ```
>
> 不绑定 `arguments` 对象
>
> 箭头函数没有自己的 `arguments` 对象。如果需要访问参数对象，可以使用 `rest` 参数：
>
> ```javascript
> const sum = (...args) => {
>   return args.reduce((total, current) => total + current, 0);
> };
> ```
>
> 不能作为构造函数
>
> 箭头函数不能使用 `new` 关键字调用，因为它们没有 `[[Construct]]` 方法和 `prototype` 属性。
>
> 没有 `prototype` 属性
>
> 箭头函数没有 `prototype` 属性，因此不能用作构造函数。

**适用场景**

> - 简单的回调函数
> - 不需要绑定 `this` 的函数
> - 一行函数（使代码更简洁）
>
> 示例总结
>
> ```javascript
> // 无参数
> const greet = () => console.log('Hello, world!');
> 
> // 单参数
> const square = x => x * x;
> 
> // 多参数
> const add = (a, b) => a + b;
> 
> // 复杂函数体
> const multiply = (a, b) => {
>   const result = a * b;
>   return result;
> };
> 
> // 使用箭头函数保持上下文的this
> function Timer() {
>   this.seconds = 0;
> 
>   setInterval(() => {
>     this.seconds++;
>     console.log(this.seconds);
>   }, 1000);
> }
> 
> const timer = new Timer();
> ```
>
> 箭头函数使代码更简洁易读，特别适合简短的函数和需要保持上下文 `this` 的情况。不过在使用箭头函数时，需要了解它的一些限制和特性，以避免意外行为。

<br>

## 4.回顾TS中的接口/泛型/自定义类型

```vue
// js写法
let person = {id:'ege',name:'ligne',age:66}
```

上面这种数据定义方法容易将英文拼写错误，导致在文件多次传送的时候，在最终文件无法通过.访问想要的内部数据

可以使用ts的接口来限制具体属性

```vue
//定义一个接口，用于限制person对象的具体属性
export interface PersonInter {
    id:string,
    name:string,
    age:number
}
```

在对应的person.vue中引入并应用

```vue
<script lang="ts" setup name="person">
//由于PersonInter不是值，而是一种规范，所以要加type
import {type PersonInter } from '@/types'

// js写法
let person:PersonInter = {id:'ege',name:'ligne',age:66}

</script>
```

当key键和值格式对应不上时，会报错

如果要应用数组对象，需要使用泛型

方法一：使用泛型

```vue
//将规范应用于数组
let personList:Array<PersonInter> = [
    { id: 'ege', name: 'ligne', age: 66 },
    { id: 'king', name: 'ligne2', age: 66 },
    { id: 'exeg', name: 'ligne3', age: 66 }
]
```

方法二：自定义类型+泛型

```vue

//定义一个接口，用于限制person对象的具体属性
export interface PersonInter {
    id:string,
    name:string,
    age:number
}

//一个自定义类型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
```

```vue
<script lang="ts" setup name="person">
//由于PersonInter不是值，而是一种规范，所以要加type
import { type Persons} from '@/types'

// js写法
// let person:PersonInter = {id:'ege',name:'ligne',age:66}


//将规范应用于数组
let personList:Persons = [
    { id: 'ege', name: 'ligne', age: 66 },
    { id: 'king', name: 'ligne2', age: 66 },
    { id: 'exeg', name: 'ligne3', age: 66 }
]

```



<br>

##  5.axios

### axios介绍

Axios 是一个基于 Promise 的 HTTP 客户端，适用于浏览器和 Node.js。它由 Matt Zabriskie 开发，并在 GitHub 上开源发布，受到前端开发者的广泛欢迎。Axios 的出现背景主要是为了解决以下几个问题：

1. **简化 AJAX 请求**：在使用原生 JavaScript 进行 AJAX 请求时，代码通常比较冗长且不够直观。Axios 提供了一个更简洁和直观的 API，使得发送 HTTP 请求变得更加简单。
2. **Promise 支持**：原生的 XMLHttpRequest 不支持 Promise，而 Promise 是现代 JavaScript 中处理异步操作的标准方式。Axios 内置了对 Promise 的支持，使得处理异步请求更加方便。
3. **统一的 API**：无论是在浏览器还是在 Node.js 环境中，Axios 提供了统一的 API，这使得代码可以在不同环境中无缝运行。
4. **更好的错误处理**：Axios 提供了更好的错误处理机制，相比于原生的 XMLHttpRequest，更加易于捕获和处理请求错误。

<br>

> Promise 基础
>
> 在开始之前，先了解一下 Promise。Promise 是 JavaScript 异步编程的一种解决方案，用来处理异步操作（如网络请求）。一个 Promise 有三种状态：
>
> 1. **Pending**（进行中）：操作尚未完成。
> 2. **Fulfilled**（已成功）：操作完成，且成功。
> 3. **Rejected**（已失败）：操作完成，但失败。
>
> Promise 可以通过 `then` 方法来处理成功的结果，通过 `catch` 方法来处理错误。
>
> **Axios 使用 Promise**
>
> Axios 的每个请求方法（如 `get`, `post` 等）都会返回一个 Promise，因此你可以使用 `then` 和 `catch` 方法来处理请求的结果。
>
> `then` 方法
>
> `then` 方法用于处理成功的响应。它接受两个参数：
>
> 1. **onFulfilled**（可选）：当 Promise 状态变为 `fulfilled` 时调用的函数。
> 2. **onRejected**（可选）：当 Promise 状态变为 `rejected` 时调用的函数。
>
> ```javascript
> axios.get('https://jsonplaceholder.typicode.com/posts/1')
>   .then(response => {
>     // 当请求成功时，这里的代码会被执行
>     console.log(response.data);
>   })
>   .catch(error => {
>     // 当请求失败时，这里的代码会被执行
>     console.error('Error:', error);
>   });
> ```
>
> 在上面的例子中，当 GET 请求成功时，`then` 方法会接收到一个 `response` 对象。这个对象包含许多属性，比如：
>
> - `data`：服务器返回的数据。
> - `status`：HTTP 状态码（如 200 表示成功）。
> - `statusText`：HTTP 状态文本（如 "OK"）。
> - `headers`：响应头。
> - `config`：请求的配置信息。
> - `request`：表示请求的 XMLHttpRequest 对象（浏览器）或 http.ClientRequest 对象（Node.js）。
>
> `catch` 方法
>
> `catch` 方法用于处理错误。它只接受一个参数，即错误处理函数：
>
> ```javascript
> axios.get('https://jsonplaceholder.typicode.com/posts/1')
>   .then(response => {
>     console.log(response.data);
>   })
>   .catch(error => {
>     // 错误处理
>     console.error('Error:', error);
>   });
> ```
>
> 在上面的例子中，如果 GET 请求失败，`catch` 方法会被调用，并接收到一个 `error` 对象。这个对象包含许多属性，比如：
>
> - `message`：错误消息。
> - `response`：服务器返回的响应（如果有的话）。
> - `request`：表示请求的 XMLHttpRequest 对象（浏览器）或 http.ClientRequest 对象（Node.js）（如果请求已发送）。
> - `config`：请求的配置信息。
>
> 更详细的错误处理
>
> 在 `catch` 方法中，你可以对不同类型的错误进行详细处理：
>
> ```javascript
> axios.get('https://jsonplaceholder.typicode.com/posts/1')
>   .then(response => {
>     console.log(response.data);
>   })
>   .catch(error => {
>     if (error.response) {
>       // 请求已发出，但服务器响应了状态码不在 2xx 范围内
>       console.error('Error data:', error.response.data);
>       console.error('Error status:', error.response.status);
>       console.error('Error headers:', error.response.headers);
>     } else if (error.request) {
>       // 请求已发出，但没有收到响应
>       console.error('Error request:', error.request);
>     } else {
>       // 发生了一些错误，在设置请求时触发
>       console.error('Error message:', error.message);
>     }
>     console.error('Error config:', error.config);
>   });
> ```
>
> 链式调用
>
> 你可以链式调用多个 `then` 和 `catch` 方法来处理多个异步操作：
>
> ```javascript
> axios.get('https://jsonplaceholder.typicode.com/posts/1')
>   .then(response => {
>     console.log('First request:', response.data);
>     return axios.get('https://jsonplaceholder.typicode.com/posts/2');
>   })
>   .then(response => {
>     console.log('Second request:', response.data);
>   })
>   .catch(error => {
>     console.error('Error:', error);
>   });
> ```
>
> 在上面的例子中，第一个 `then` 方法处理了第一个 GET 请求并返回第二个 GET 请求的 Promise，第二个 `then` 方法处理第二个 GET 请求的结果。`catch` 方法会捕获所有请求中的错误。
>
> 总结
>
> - **`then` 方法**：用于处理成功的响应，接受两个参数（成功回调和失败回调）。
> - **`catch` 方法**：用于处理错误，接受一个参数（错误回调）。
> - **`response` 对象**：包含服务器返回的各种信息（如数据、状态码、状态文本、响应头等）。
> - **`error` 对象**：包含错误的详细信息（如错误消息、响应、请求、配置信息等）。
>
> 通过这些内容，你应该能够更好地理解如何使用 Axios 处理 HTTP 请求及其响应。

好的，下面我们详细介绍 Axios 中配置请求的参数。你可以在全局配置、实例配置、或单个请求中使用这些配置参数。





### axios基本使用



**配置请求参数**

Axios 的配置选项可以在创建实例时设置，也可以在单个请求中设置。常用的配置选项包括：

- `url`: 请求的地址
- `method`: 请求的方法（如 `get`, `post`, `put`, `delete` 等）
- `baseURL`: 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
- `headers`: 自定义 HTTP 头
- `params`: URL 查询参数对象
- `data`: 请求体数据
- `timeout`: 请求超时时间（毫秒）
- `auth`: 基本认证 `{ username: '', password: '' }`
- `responseType`: 服务器响应的数据类型，如 `json`, `blob`, `document`, `arraybuffer`, `text`, `stream`
- `cancelToken`: 用于取消请求的标记
- `withCredentials`: 跨域请求时是否需要使用凭证

全局配置

你可以在创建 Axios 实例时设置全局配置：

```javascript
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

单个请求配置

你也可以在每个请求中单独设置这些配置：

配置示例

```javascript
axios({
  method: 'post', // 请求方法
  url: 'https://jsonplaceholder.typicode.com/posts', // 请求地址
  baseURL: 'https://api.example.com', // 基础 URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token'
  }, // 自定义头部
  params: {
    userId: 1
  }, // URL 查询参数
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  }, // 请求体数据
  timeout: 1000, // 超时时间
  responseType: 'json', // 响应类型
  withCredentials: true, // 跨域请求时是否使用凭证
  cancelToken: new axios.CancelToken(cancel => {
    // 取消请求的标记
  })
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error);
});
```

配置选项详解

- **`url`**: 请求的地址。如果设置了 `baseURL`，并且 `url` 是相对地址，则 `baseURL` 会加在 `url` 前面。

  ```javascript
  axios({
    url: '/posts',
    baseURL: 'https://jsonplaceholder.typicode.com'
  });
  ```

- **`method`**: 请求的方法。默认是 `get`。

  ```javascript
  axios({
    method: 'post',
    url: '/posts'
  });
  ```

- **`baseURL`**: 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。这有助于为 Axios 实例设置一个基础 URL。

  ```javascript
  const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });
  ```

- **`headers`**: 自定义 HTTP 头。可以用于设置认证信息、内容类型等。

  ```javascript
  axios({
    url: '/posts',
    headers: {
      'Authorization': 'Bearer your-token',
      'Content-Type': 'application/json'
    }
  });
  ```

- **`params`**: URL 查询参数对象。会自动转换为查询字符串并附加到 URL 后面。

  ```javascript
  axios({
    url: '/posts',
    params: {
      userId: 1
    }
  });
  ```

- **`data`**: 请求体数据。用于 `post`, `put`, `patch` 等请求方法。

  ```javascript
  axios({
    method: 'post',
    url: '/posts',
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  });
  ```

- **`timeout`**: 请求超时时间（毫秒）。如果请求超过这个时间，Promise 会被 `reject`。

  ```javascript
  axios({
    url: '/posts',
    timeout: 1000
  });
  ```

- **`auth`**: 基本认证 `{ username: '', password: '' }`。会自动设置 `Authorization` 头。

  ```javascript
  axios({
    url: '/posts',
    auth: {
      username: 'user',
      password: 'pass'
    }
  });
  ```

- **`responseType`**: 服务器响应的数据类型。默认是 `json`。

  ```javascript
  axios({
    url: '/posts',
    responseType: 'json'
  });
  ```

- **`cancelToken`**: 用于取消请求的标记。

  ```javascript
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  axios({
    url: '/posts',
    cancelToken: source.token
  });

  // 取消请求
  source.cancel('Operation canceled by the user.');
  ```

- **`withCredentials`**: 跨域请求时是否需要使用凭证。默认是 `false`。

  ```javascript
  axios({
    url: '/posts',
    withCredentials: true
  });
  ```





拦截器（interceptors）是 Axios 提供的一个强大功能，用于在发送请求或响应到达 then 或 catch 之前拦截它们。拦截器允许你在请求或响应被处理前对它们进行改变或者执行额外的操作。让我来详细解释一下拦截器和 `.then/.catch` 的区别和作用：

### 拦截器（Interceptors）

在 Axios 中，拦截器允许你在请求或响应被处理前对它们进行拦截和转换。主要有两种类型的拦截器：

1. **请求拦截器**：在请求被发送之前执行的操作，比如添加认证信息、设置请求头等。
   
2. **响应拦截器**：在接收到响应之前执行的操作，比如处理数据格式、统一处理错误等。

示例代码：

```javascript
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在请求发送之前做些什么
    console.log('请求拦截器:', config);
    return config;
}, error => {
    // 对请求错误做些什么
    console.error('请求拦截器错误:', error);
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做些什么
    console.log('响应拦截器:', response);
    return response;
}, error => {
    // 对响应错误做些什么
    console.error('响应拦截器错误:', error);
    return Promise.reject(error);
});

// 发送请求
axios.get('https://api.example.com/data')
  .then(response => {
    // 处理成功的情况
    console.log('请求成功:', response.data);
  })
  .catch(error => {
    // 处理失败的情况
    console.error('请求失败:', error);
  });
```

`.then` 和 `.catch`

`.then` 和 `.catch` 是 Promise 提供的方法，用于处理异步操作的成功和失败情况。它们不是拦截器，而是 Promise 链式调用的一部分，用于在请求成功或失败时执行相应的操作。

- **`.then` 方法**：用于处理请求成功时的逻辑，接收一个成功回调函数作为参数。
  
- **`.catch` 方法**：用于处理请求失败时的逻辑，接收一个错误回调函数作为参数。

示例代码：

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('请求成功:', response.data);
    // 处理成功逻辑
  })
  .catch(error => {
    console.error('请求失败:', error);
    // 处理失败逻辑
  });
```

**区别和作用**

- **拦截器（interceptors）**：
  - 允许在请求或响应被处理前对它们进行拦截和处理。
  - 可以在请求或响应被发送或接收之前，对其进行全局性的处理，比如添加认证信息、统一处理错误等。

- **`.then` 和 `.catch`**：
  - 是 Promise 的方法，用于处理异步操作的成功和失败情况。
  - 只能在单个请求的链式调用中使用，处理特定请求的成功或失败。

总结

拦截器（interceptors）和 `.then/.catch` 都是 Axios 提供的处理请求和响应的重要机制，但它们的作用和使用方式有所不同。拦截器用于全局处理请求和响应的中间过程，而 `.then/.catch` 用于处理单个请求的成功和失败结果。

<br>

# 6.localStorage

localStorage 是 Web Storage API 的一部分，是一种在客户端（浏览器）中存储数据的方式。它允许你将数据以键值对的形式存储在浏览器中，即使浏览器关闭并重新打开，这些数据仍然保留。这使得 localStorage 成为一种持久化存储数据的简单方式。

localStorage 的特点

- **持久性**: 数据会在浏览器会话中持久存在，直到显式删除它。
- **存储容量**: 通常每个域名可以存储 5-10MB 的数据。
- **数据类型**: 只能存储字符串数据，如果需要存储复杂数据类型，需要先将其转换为 JSON 字符串。
- **同源策略**: localStorage 遵循同源策略，不同域名下的数据互不可见。

常见方法

localStorage 提供了一些方法来进行数据存取和管理：

- **setItem(key, value)**: 将数据存储到 localStorage 中。
- **getItem(key)**: 从 localStorage 中读取数据。
- **removeItem(key)**: 从 localStorage 中删除数据。
- **clear()**: 清除所有存储在 localStorage 中的数据。
- **key(index)**: 获取存储中的第 `index` 个键名。

使用示例

存储数据

将一个对象存储到 localStorage 中：
```javascript
let user = {
  name: "Alice",
  age: 25
};

// 将对象转换为 JSON 字符串并存储到 localStorage 中
localStorage.setItem('user', JSON.stringify(user));
```

读取数据

从 localStorage 中读取并解析对象：
```javascript
let storedUser = localStorage.getItem('user');
if (storedUser) {
  let user = JSON.parse(storedUser);
  console.log(user.name); // 输出: Alice
}
```

删除数据

从 localStorage 中删除数据：
```javascript
localStorage.removeItem('user');
```

清空所有数据

清空 localStorage 中的所有数据：
```javascript
localStorage.clear();
```

实际应用

localStorage 通常用于以下场景：
- **保存用户偏好**: 例如主题设置、语言选择等。
- **保存表单数据**: 用户在填写表单过程中关闭页面，再次打开时可以恢复填写的数据。
- **缓存数据**: 缓存一些不会频繁改变的数据，减少服务器请求。

localStorage 与 sessionStorage 的区别

- **localStorage**: 数据持久存在，直到显式删除。
- **sessionStorage**: 数据在页面会话期间存在，关闭浏览器或标签页后数据被清除。

安全性

需要注意的是，localStorage 中存储的数据对同源下的所有脚本都是可见的，因此不要存储敏感数据，例如用户密码、敏感的个人信息等。对于这些数据，应使用更安全的存储方式（如服务器端存储）并确保数据传输的安全性（如使用 HTTPS）。

<br>



# 7.\$event

`@input="userName =(<HTMLInputElement>$event.target).value"`

上述代码出现了\$event的使用，这个是什么？







# 0.课程介绍

本文件是bilibili尚硅谷的Vue3课程笔记，发布时间是2023年12月



<br>

# 1.Vue3 简介

Vue3在2020年9月18日发布，代号one piece

## 1.1 性能的提升

- 打包大小减少41%
- 初次渲染快55%，更新渲染快133%
- 内存减少54%

<br>

## 1.2 源码的提升

- 使用Proxy代替defineProperty实现响应式
- 重写虚拟DOM的实现和Tree-Shaking

<br>



## 1.3 拥抱TypeScript

- Vue3可以更好的支持TypeScript

<br>



## 1.4新的特性

1. Composition APi（组合式API）

   - setup

   - ref与reactive

   - computed与watch

     ...

2. 新的内置组件：

   - Fragment

   - Teleport

   - Suspense

     ...

3. 其他改变：

   - 新的生命周期钩子

   - data选项应始终被声明为一个函数

   - 移除keyCode支持作为v-on的修饰符

     ...

<br>





# 2.创建Vue3工程

## 2.1 基于vue-cli创建

ps：目前vue-cli已处于维护模式，官方推荐基于vite创建项目

``` 
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version

## 安装或者升级你的@vue/cli
npm install -g @vue/cli

## 执行创建命令
vue create vue_test

##	随后选择3.x
##	choose a version of vue.js that you want to start the project with (use arrow keys)
## >3.x
##  2.x

## 启动
cd vue_test
npm run server

```



<br>



## 2.2 基于vite创建（推荐）

vite是新一代前端构建工具，官网地址：`https//vitejs.cn` ,vite的优势如下：

- 轻量快速的热重载（HMR），能实现极速的服务启动。
- 对TypeScript，JSX、CSS等支持开箱即用
- 真正的按需编译，不再等待整个应用编译完成
- 具体操作如下

``` vue
## 1.创建命令
npm create vue@latest

## 2.具体配置
## 配置项目名称
Project name: vue3_test
## 是否添加TypeScript支持
Add TypeScript？ Yes
## 是否添加JSX支持
Add JSX Support？ No
## 是否添加路由环境
Add Vue Router for Single Page Application development? No
## 是否添加pinia环境
Add Pinia for state management? No
## 是否添加单元测试
Add Vitest for Unit Testing? No
## 是否添加端到端测试方案
Add an End-to-End Testing Solution?  No
## 是否添加Prettiert代码化
Add EsLint for code quality? No
```

创建的项目目录如下图所示（vscode打开）

![vite](../../public/vue3/vite_create.png)

介绍相关目录和文件

- .vscode里面有个extensions.json文件，负责提示vscode是否安装里面的默认插件
- public里面只有个favicon.ico文件，即页签图标
- src里面是所有前端工程师的工作目录（写js、css和vue的）
- .gitignore，这个是git的忽略文件，负责在提交时候决定忽略什么文件
- env.d.ts，此时只有一条代码且报错，需要允许`npm i `安装所有依赖，本文件的具体功能是
  - 让你的项目可以认识txt、ts等文件，否则导入文件会失败

​		之所以爆红是由于要使用一些依赖，因此需要执行`npm i`创建node_module目录

- index.html，入口文件（区别于vue-cli的main.js）
- package-lock.json和package.json都是包的管理文件
- tsconfig.app.json、tsconfig.json、tsconfig.node.json都是js的配置文件
- vite.config.ts是整个工程的配置文件

 想要执行该前端项目，可以查询package.json，寻找短命令

` npm run dev` 

查看到的效果就是index.html效果，该页面中引入了src的main.ts



<br>

#### 2.2.1 编写App组件

本节开始详细介绍src目录的文件

- main.ts 的内容如下

``` typescript
import './assets/main.css'

import { createApp } from 'vue'		//创建应用（相当于种花的花盆）
import App from './App.vue'			//组件（相当于种花的根）

createApp(App).mount('#app')		//创建应用且传入根组件，并将挂载在id为app的div内（把花插到花盆上）
									//id=app的地方在index.html中

```

- App.vue就是根组件，是根
- components是所有的子组件，树叶

由此上述可知，src重要的两个文件App.vue和main.ts

App.vue要写三种结构

- template里面写html
- script里面写Js或Ts代码
- style里面写样式

``` vue
<template>
    <!-- html -->
    <div class="app">
        <h1>你好</h1>
    </div>

</template>

<script lang="ts">
  // JS 或 TS
    export default{
        name:'App'      //组件名
    }

</script>

<style>
    /* 样式 */
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding:20px;
    }

</style>
```

总结：

- vite项目中，index.html是项目的入口我呢见，在项目最外层

- 加载index.html后，vite解析`<script type="module" src="xxx">`指向的JavaScript

- Vue3中式通过createApp函数创建一个应用实例

  



<br>

## 2.3 一个简单的效果

首先编写一个Person组件，并且在App中注册

```vue
<template>
    <!-- html -->
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="showTel">查看联系方式</button>
    </div>

</template>

<script lang="ts">
  // JS 或 TS
    export default{
        name:'Person',      //组件名
        data(){
            return {
                name:'张三',
                age:18,
                tel:1232142141,
            }
        },
        methods:{
            showTel(){
                alert(this.tel)
            }
        }
    }

</script>

<style>
    /* 样式 */
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding:20px;
    }

</style>
```

```vue
<template>
    <!-- html -->
    <div class="app">
        <h1>你好</h1>
        <Person/>
    </div>

</template>

<script lang="ts">
  // JS 或 TS 
    import Person from './components/Person.vue'
    export default{
        name:'App',      //组件名
        components:{Person} //注册组件
    }

</script>

<style>
    /* 样式 */
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding:20px;
    }

</style>
```

上述使用的是vue2的语法，这是由于vue3支持向下兼容





<br>



# 3.Vue核心语法

上述简单效果使用vue2，其中配置data、methods属于是选项式API

## 3.1 OptionsAPI与CompositionAPI

- Vue2的API设计式Options（配置）风格的
- Vue3的API设计式Composition（组合）风格的



**Options API的弊端**

Options类型的API，数据、方法、计算属性等，是分散在data、methods、computed中的，若向新增或修个一个需求，

就需要分别修改data、methods、computed，不便于维护和复用

> 出处[做了一夜动画，就为让大家更好的理解Vue3的Composition Api - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv10685553/)
>

选项式api

<img src="../../public/vue3/option1.gif" alt="1.gif" style="zoom:70%;border-radius:20px" />

<br><img src="../../public/vue3/option2.gif" alt="2.gif" style="zoom:70%;border-radius:20px" />

组合式api

<img src="../../public/vue3/Composition1.gif" alt="3.gif" style="height:300px;border-radius:10px"    />

<br>

<img src="../../public/vue3/Composition2.gif" alt="4.gif" style="height:300px;border-radius:10px"  />



**Composition的优势**

可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起

<br>

## 3.2 拉开序幕的setup

set是Vue3中一个新的配置项，值是一个函数，他是Composition API “表演的舞台”，组件中所用到的：数据、方法、计算属性、监视...等等，均配置在setup中。

特点如下：

- setup函数返回的对象中的内容，可以直接在模板中使用
- setup中访问this是undefined
- setup函数会在beforeCreate之前调用，他是“领先”所有钩子函数执行的
- setup的返回值可以是一个渲染函数

```vue
<template>
    <!-- html -->
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>

</template>

<script lang="ts">
  // JS 或 TS
    export default{
        name:'Person',      //组件名
        setup(){
            //数据
            let name = '张三'
            let age  = 18
            let tel  = '1546489855'


            //方法
            function changeName(){
                name = 'zhang-han'
            }
            function changeAge(){
                age += 1
            }
            function showTel(){
                alert(tel)
            }

            return {name,age,changeName,changeAge,showTel}
        }
    }

</script>

<style>
    /* 样式 */
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding:20px;
    }

</style>
```

setup里面的函数不能使用this，此外如果直接使用let定义数据，那么数据就不是响应式的，即点击数据页面不会同步更新
ps：响应式，修改数据会更新用到的地方

``` vue
return {name,age,changeName,changeAge,showTel}

//另一种返回
// return ()=>'哈哈'
// 相当于 return function (){ return '哈哈'}
```

<br>

**setup与OptionAPI**

在vue3中，组合式写法和选项式写法可以共存。

setup由于执行是最早的（比data、methods更早），所以在OptionApi的写法中可以读取setup函数里面定义的数据（this.xx）,但setup中不能够读取选项式写法中的data数据。

```vue
export default{
        name:'Person',      //组件名
        data(){
            return {
                a:100,
                c:this.name
            }
        },
        methods:{
            b(){
                console.log('b')
            }
        },
        setup(){
            //数据
            let name = '张三'
            let age  = 18
            let tel  = '1546489855'


            //方法
            function changeName(){
                name = 'zhang-han'
            }
            function changeAge(){
                age += 1
            }
            function showTel(){
                alert(tel)
            }

            return {name,age,changeName,changeAge,showTel}
            
            // return ()=>'哈哈'
            // 相当于 return function (){ return '哈哈'}
        }
    }

```

上面的混合写法不推荐

<br>

**setup的语法糖**

```vue
<template>
    <!-- html -->
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>

</template>

<script lang="ts">
  // JS 或 TS
    export default {
        name:'Person',      //组件名
        
    }

</script>

<!-- 相当于setup()，且会自动return -->
<script lang="ts" setup>
    //数据
    let name = '张三'
    let age  = 18
    let tel  = '1546489855'


    //方法
    function changeName(){
        name = 'zhang-han'
    }
    function changeAge(){
        age += 1
    }
    function showTel(){
        alert(tel)
    }
 
</script>


<style scoped>
    /* 样式 */
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding:20px;
    }

</style>
```

可以通过scirpt setup  实现定义数据自动返回（既不用写return）

注意不能将export default和 script setup写到一起

<br>

为了避免每次为了写个name，额外写出script里面的export  ...，可以使用一个插件，安装如下

1. ` npm i vite-plugin-vue-setup-extend -D `

2. 安装完成后，还要在vite.config.ts中import引入，引入名字可以任意

```
` import xxx from 'vite-plugin-vue-setup-extend'`
```

3. vite.config.ts中追加调用

   ` plugins:[vue(),xx()]`

4. 在script中应用

``` vue
<script lang="ts" setup name="person">
 ...
</script>
```

此外，如果工作中组件名和文件名相同，可以不写组件名

<br>

## 3.3 ref创建：基本类型的响应式数据

vue2中，只要在data中配置，那么就是响应式数据

vue3中，有两个东西定义响应式数据

- ref
- reactive



本小节使用ref进行介绍

1.首先使用需要在vue中引入ref（命名导入）

 ` import {ref} from 'vue' `

2.将想要变成响应式的数据，使用ref包裹

```vue
let name = ref('king')
let age  = ref(18)
```

打印数据，得到的是某个对象的实例化（实际的数据包在.value中，但是在template中自动调用.value，即直接使用变量名）

但是有个关键在于，在js中操作的时候必须操作变量名.value的值

3.修改对应的方法

```vue
function changeName(){
name.value = 'zhang-han'
}
function changeAge(){
age.value += 1
}
```

<br>

## 3.4 `reactive`创建：对象类型的响应式数据

```vue
<template>
    <!-- html -->
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{car.price  }}万</h2>
        <button @click="changPrice">修改汽车价格</button>
    </div>

</template>


<!-- 相当于setup()，且会自动return -->
<script lang="ts" setup name="person223">
    import { reactive } from 'vue'

    let car = reactive({brand:"宝马",price:100})


    function changPrice(){
        car.price += 10
    }

</script>


<style scoped>
    /* 样式 */
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding:20px;
    }

</style>
```

打印`reactive`包含的对象，得到是`Proxy`对象（原生js就有的），`Proxy`是代理

只要用`reacitve`包裹，里面对象所有的变量都是响应式的，无论有多少层（就算是100层字典也一样）



<br>



## 3.5 ref创建：对象类型的响应式数据

reactive只能定义：对象类型的响应式数据

ref可以定义基本类型，还可以定义对象类型的

但是在ref创建对象的时候，在js中同样需要使用.value 来访问数据

``` vue
<template>
    <!-- html -->
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}车，价值{{car.price  }}万</h2>
        <button @click="changPrice">修改汽车价格</button>
        
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改游戏名字</button>
    </div>

</template>


<!-- 相当于setup()，且会自动return -->
<script lang="ts" setup name="person223">
    import { ref } from 'vue';

    let car = ref({brand:"宝马",price:100})

    let games = ref([
        {id:'1',name:'backrooms'},
        {id:'2',name:'fata'},
        {id:'3',name:'shit'}
    ])


    function changPrice(){
        car.value.price += 10
    }
    function changeFirstGame(){
        games.value[0].name = 'shenme'
    }
</script>


<style scoped>
    /* 样式 */
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding:20px;
    }

</style>
```

为什么ref也可以定义对现象？

这个是因为，在ref对象对应的RefImpl对象中的value值会被封装成Proxy对象（reactive定义对象类生成的实例化对象）

即ref其实是通过reactive实现的

<br>

## 3.6 ref 对比reactive

宏观角度看

1. ref用来定义：基本类型数据、对象类型数据
2. reactive用来定义：对象类型数据

区别

1. ref创建的变量必须使用`.value`(js中)，也可使用volar插件自动添加

2. reactive重新分配一个新对象，就会失去响应式（可以使用object.assign去整体替换)，这个是局限性

   ``` vue
   let car = reactive({brand:'baoma',price:100})
   
   function changeCar(){
   	car = {brand:"tgge",price:100}
   }
   ```

   上述函数操作后，car不再是响应式数据（即使再加reactive也不行）

   正确用法如下

   ```vue
       function changeCar(){
           //object.assign(obj1,obj2,obj3)
           Object.assign(car.{brand:"kebi",price:1})
       }
   ```

   对于ref，可以直接赋值（这是由于value相当于是响应式数据的内部数据）



使用原则

1. 若需要一个基本类型的响应式数据，必须使用ref
2. 若需要一个响应式对象，层级不深，ref、reactive都可以
3. 若需要一个响应式对象，且层级较深，推荐使用reactive



<br>



## 3.7 toRefs与toRef







```vue
let person = reactive({
name:"king",
age:18
})

let {name,age} = person
```

上述方法进行赋值后，对name和age的数据不再是响应式

如何让解构后数据变成响应式的？

引入toRefs即可

```vue
import{reactive,toRefs} from 'vue' 
let person = reactive({
name:"king",
age:18
})

let {name,age} = toRefs(person)
```

此时name和age变成ObjectRefImpl对象，所以修改需要添加`.value`，此时修改name和age也会同时修改person对应的数据（类似引用）

<br>

除了toRefs外，还有toRef，这个是基本类型转换（toRefs是对象解构）

<br>

## 3.8 computed计算属性

在vue2中，计算属性使用如下

```vue
<script>
export default{
    computed:{
        
    }
}
</script>	
```

在vue3中，使用方法如下

```vue
<template>
    <!-- html -->
    <div class="person">
        姓：<input type=text v-model="firstname"> <br>
        名：<input type=text v-model="lastname"> <br>
        全名：<span>{{fullname }}</span>
    </div>

</template>


<script lang="ts" setup name="person223">
import {ref,computed} from 'vue'
let firstname = ref('king')
let lastname  = ref('shit')

//定义计算属性，只读
let fullname  = computed(()=>{
  return firstname.value.slice(0,1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
})

```

只要计算属性发生变化，就会调用一次，但是如果多次调用相同的计算属性，只会调用一次

计算属性是有缓存的（另外方法没有缓存）

上述方法的计算数学是只读的，如何让计算属性可读可写？操作如下

```vue
let fullname = computed({
    get(){
        return firstname.value.slice(0,1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
    },
    set(val){
        console.log('set',val)
    }
})

```

设置set和get函数，只要对fullname（计算属性）进行赋值，那么就会调用set函数，并传入fullname当前值

注意：即使赋值改变了fullname的数据，计算属性相关的firstname和lastname不变，当前页面展示的函数老的fullname

所以要确实改变计算属性，需要对set进行操作

```	vue
    set(val){
		const [str1,str2] = val.split('-')
        firstname.value = str1
		lastname.value  = str2
    }
```

<br>

## 3.9 watch监视

```vue
import {watch} from 'vue'

//监视
watch(监视谁,回调函数)
```





- 作用：监视数据的变化（和vue2的watch作用一致）
- 特点：Vue3中的watch只能监视以下四种数据
  1. ref定义的数据
  2. reactive定义的数据
  3. 函数返回一个值(getter函数)
  4. 一个包含上述内容的数组

我们在vue3中使用watch的时候，通常会遇到以下几种情况：

### 情况一

监听ref定义的【基本类型】数据：直接写数据名即可，监视的是其value值的改变。

```vue
<template>
    <!-- html -->
    <div class="person">
        <h1>情况一：监视【ref】定义的基本类型数据</h1>
        <h2>目前求和为:{{ sum }}</h2>
        <button @click="changSum">点击sum+1</button>
    </div>

</template>


<script lang="ts" setup name="person223">
import { ref,watch} from 'vue';


//数据
let sum = ref(0)

//方法
function changSum(){
    sum.value+=1
}

//监视
watch(sum,(newValue,oldValue)=>{
    console.log('sum改变了',newValue,oldValue)
})

</script>
```

监视器的sum不用使用.value



如何解除监视（例如sum大于10时候，解除监视）？

```vue
const stopWatch = watch(sum,(newValue,oldValue)=>{
    console.log('sum改变了',newValue,oldValue)
	if(nelValue){
		stopWatch()
	}
})
```

<br>

### 情况二

监视ref定义的【对象类型】数据：直接写数据名，监视的是对象的【地址值】，若像监视对象内部的数据，要手动开启深度监视

> 注意：
>
> - 若修改的是ref定义的对象中的属性，newVaule和oldValue都是新值，因为他们是同一个对象
> - 若修改整个ref定义的对象，newValue是新值，oldValue是旧值，因为不是同一个对象了

```vue
<template>
    <!-- html -->
    <div class="person">
        <h1>情况二:监视【ref】定义的对象类型数据</h1>
        <h2>姓名：{{person.name}}</h2>
        <h2>年龄：{{person.age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>

    </div>

</template>


<script lang="ts" setup name="person223">

import { ref, watch } from 'vue'
let person = ref({
    name: 'king',
    age: 18
})

function changeName(){
    person.value.name+='~'
}

function changeAge(){
    person.value.age+=1
}

function changePerson(){
    person.value = {name:'lgeg',age:1545}
}


//监视，情况一，监视ref的对象类型的数据，监视的是对象的地址值
watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
})


</script>
```

直接监视，是对对象类型的地址进行监视（即只有changePerson才调用watch）

若想监视对象内部属性的变化，则要手动开启深度监视。

```vue
//监视，情况一，监视ref的对象类型的数据，监视的是对象的地址值
watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
},{deep:true})
```

即在第三个参数进行配置deep：true（此外这里还能配置其他东西）



<br>

### 情况三

监视reactive定义的【对象类型】数据，且默认开启了深度监视（不能关闭）

注意与ref的不同，就是对象赋值是不成立的（即不可整体修改）

此外使用assign修改整个对象，本质是修改原有对象的内部数据，而ref的对象赋值则是整个对象修改

```vue
    <!-- html -->
    <div class="person">
        <h1>情况三:监视【reactive】定义的对象类型数据</h1>
        <h2>姓名：{{person.name}}</h2>
        <h2>年龄：{{person.age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>

    </div>

</template>


<script lang="ts" setup name="person223">

import { reactive,watch} from 'vue'
let person = reactive({
    name: 'king',
    age: 18
})

function changeName(){
    person.name+='~'
}

function changeAge(){
    person.age+=1
}

function changePerson(){
    Object.assign(person,{name:"kingseg",age:150})
}

watch(person,(newValue,oldValue)=>{
    console.log('person改变了',newValue,oldValue)
})

</script>

```



<br>

### 情况四

监视ref或reactive定义的【对象类型】数据中的**某个属性**，注意点如下：

1. 若该属性值不是【对象类型】，需要写成函数形式
2. 若该属性值依然是【对象类型】，可以直接编，也可以写成函数，不过建议写成函数

结论：监视对象里的属性，最好写函数式，

基本结构

```vue
<template>
    <!-- html -->
    <div class="person">
        <h1>情况四:监视【reactive】定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>

        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>

    </div>

</template>


<script lang="ts" setup name="person223">
import {reactive} from 'vue'

let person = reactive({
    name:'gkge',
    age:15,
    car:{
        c1:'ege',
        c2:'geg'
    }
})

//方法
function changeName(){
    person.name+='~'
}

function changeAge(){
    person.age+=1
}

function changeC1(){
    person.car.c1 = 'king'
}

function changeC2(){
    person.car.c2 = 'shit'
}

function changeCar(){
    person.car = {c1:'no',c2:'yes'}
}


</script>


```

监视对象内部的基本类型

```vue
watch(()=>{return person.name},(newvalue,oldValue)=>{
    console.log('person.name变化了',newvalue,oldValue)
})
```

要用箭头函数嵌套的原因在于，watch只能监控四种值（不用person.name)



监视对象内部的对象类型

```vue
watch(person.car,(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
})
```

可以直接传入，但是此时只能监视car内部属性，不能监视car本身（即car本身改变不会调用watch），原因在于car改变后，监视会丢失

```vue
watch(()=>person.car,(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
})
```

这种使用函数返回值的监视，监视的是对象的地址，此时不能监视对象内部（即car内部），但是可以监视car本身的变化

因此如何实现修改内部和整体都能监视？

可以在函数返回值监视的基础上，添加deep：true，即开启深度监视即可实现

<br>



### 情况五

监视上述多个数据

```vue
watch([()=>person.name,()=>person.car.c1],(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
},{deep:true})
```

使用[]包含需要监视的数据

<br>



## 3.10 watchEffect

watchEffect的监视，会立即执行（类似设置了immediate）

官网：立即允许一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行函数

watch对比watchEffect

1. 都能监听响应式数据，不同的时建通数据的方式不同
2. watch：要明确监听的数据
3. watchEffect：不用明确监听的数据

```vue
//watch实现
// watch([temp, height], (newValue, oldValue) => {
//     //从value中获取最新的水温和水位
//     let [newTemp, newHeight] = newValue
//     if (newTemp >= 60 || newHeight >= 80) {
//         console.log("给服务器发请求")
//     }
// })

//watchEffect实现
watchEffect(()=>{
    if(temp.value>=60 || height.value>=80){
        console.log('给服务器发请求')
    }
})
```

上述对于两个数据的监视，分别使用了watch和watchEffect实现

watch需要实现声明要监视的值，而watchEffect则是使用了多少个就监视多少个

<br>



## 3.11 标签中的ref属性

作用：用于注册模板引用

- 用在普通的DOM标签上，获取的时DOM节点
- 用在组件标签上，获取的是组件实例对象

下面是原生js获取DOM节点的方法（通过id和getElementById方法）

```vue
<template>
    <!-- html -->
    <div class="person">
        <h1>中国</h1>
        <h2 id="city">北京</h2>
        <h3>广东</h3>
        <button @click="showLog">点我输出h2这个元素</button>
 

    </div>

</template>


<script lang="ts" setup name="person223">

function showLog(){
    //原生js获取DOM节点
    console.log(document.getElementById('city'))
}
```

但在实际生产环境中，不推荐使用id，这个是由于不同文件的id可能是相同的

解决的方法就是不用id，使用ref

```vue
<template>
    <!-- html -->
    <div class="person">
        <h1>中国</h1>
        <!-- 将整个h2节点存储在ref容器里 -->
        <h2 ref="city">北京</h2>
        <h3>广东</h3>
        <button @click="showLog">点我输出h2这个元素</button>
 

    </div>

</template>


<script lang="ts" setup name="person">
import { ref } from 'vue'

//创建一个city，用于存储ref标记的内容
let city = ref()

function showLog(){
    console.log(city.value)
}
```

这个方法就可以解决id重复的问题

此外，在person.vue通过ref标签输出内容的时候，会有一个data-xxx，而在App.vue中则没有
这个是局部样式，是由于本文件是css样式（有scoped），固定了选择自己本文件中的某个标签或元素

<br>

上述的ref都是加在html标签上，下面介绍一种加在组件标签上的使用

`App.vue`中

```vue
<!-- 父组件App.vue -->
<template>
  <Person ref="ren"/>
  <button @click="test">测试</button>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  let ren = ref()

  function test(){
    console.log(ren.value.name)
    console.log(ren.value.age)
  }
</script>
```

`person.vue`中

```vue
<!-- 子组件Person.vue中要使用defineExpose暴露内容 -->
<script lang="ts" setup name="Person">
  import {ref,defineExpose} from 'vue'
	// 数据
  let name = ref('张三')
  let age = ref(18)
  /****************************/
  /****************************/
  // 使用defineExpose将组件中的数据交给外部
  defineExpose({name,age})
</script>
```

打印ref组件，得到的是组件实例，如果想要获取组件内部的定义对象，那么需要在内部定义defineExpose



ref添加标签，情况如下：

| html    | component |
| ------- | --------- |
| DOM节点 | 组件实例  |

<br>



## 3.12 props的使用

在Vue.js中，`prop`（property 的缩写）是用于父组件向子组件传递数据的一种机制。`props`使得组件之间的数据传递更加灵活和直观。通过使用`props`，父组件可以将数据和方法传递给子组件，子组件通过访问这些`props`来进行渲染和操作

如何在父组件传递参数给子组件？如下示例

`App.vue`中传入字符串a，传入list变量值为personList变量

```vue
<template>
    <!-- html -->
      <Person a="哈哈" :list="personList"/>
</template>

<script lang="ts" setup name="APP"> 
    import Person from './components/Person.vue'
    import {reactive} from 'vue'
    import { type Persons } from './types';

    let personList = reactive<Persons>([
        {id:'1',name:'shit',age:15},
        {id:'2',name:'sheeit',age:125},
        {id:'3',name:'shiteg',age:153},
    ])

</script>
```

在Person.vue中接受参数

```vue
<template>
    <!-- html -->
    <div class="person">
        <h2>{{ a }}</h2>
        <h2>{{ list }}</h2>

    </div>

</template>


<script lang="ts" setup name="person">
import { defineProps } from 'vue'

//接受
defineProps(['a','list'])

//接受并将props保存起来保存
//let x = defineProps(['a','list'])

</script>

```

只接受参数，不对参数进行校验是不适合的，因此下面有种新的接受+限制类型

```vue
//接受list+限制类型
//传入泛型，传入list且符合Persons规范
defineProps<{list:Persons}>()
```

下面是接受list+限制类型+限制必要性

```vue
//接收list + 限制类型 +限制必要性 + 指定默认值
//?必要性，withDefaults设置默认值
//withDefault第二个参数设置不能直接赋值，而要是函数返回值
withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[{id:"0",name:"king",age:18}]
})
```

最后说明一下，含define关键字的，一般不用手动引入，因为是宏函数（例如defineExpose、defineProps）

<br>

## 3.13 vue生命周期

人的生命周期

- 出生
- 经历
- 死亡

组件的生命周期

- 创建
- 挂载
- 更新
- 销毁

<br>

### vue2的生命周期

四个阶段，八个关键钩子函数：

创建（创建前，创建完毕）

- beforeCreate
- created

挂载（挂载前，挂载完毕）

- beforeMount
- mounted

更新（更新前，更新完毕）

- beforeUpdate
- updated

销毁（销毁前，销毁完毕）

- beforeDestroy

- destroyed



### vue3的生命周期

vue3相关的钩子生命周期函数需要传入回调函数

具体函数名称的如下：

```vue
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

//创建
console.log('创建')

//挂载前,并传递回调函数
onBeforeMount(()=>{
    console.log('挂载前')
})

//挂载完毕
onMounted (()=>{
    console.log('挂载完毕')
})

//更新前
onBeforeUpdate(()=>{
    console.log('更新前')
})

//更新完毕
onUpdated(()=>{
    console.log('更新完毕')
})

//卸载前
onBeforeUnmount(()=>{
    console.log('卸载前')
})

//卸载完毕
onUnmounted(()=>{
    console.log('卸载完毕')
})


```

注意：vue3没有销毁，而是卸载。创建的两个合成了setup

所有的组件都有生命周期。

对于复合组件的生命周期

- 先挂载子组件，后挂载父组件

vue3常用的钩子：挂载完毕、更新完毕、卸载之前



<br>

## 3.14 自定义Hooks

作用：让一个功能的数据和方法贴在一起

首先要新建一个hooks文件夹，里面的ts文件命名规则是use+要操作的对象

新建一个useDog.ts文件放在hooks文件夹里面，文件里面使用export暴露一个匿名函数

```vue
import { reactive} from 'vue';
import axios from 'axios';

//https://dog.ceo/api/breed/pembroke/images/random ,一个接口，随机返回一个狗图片


export default function (){
    let dogList = reactive([''])

    async function  addDog(){
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch(error){
            alert(error)
        }
    
    }

    //向外部提供东西
    return {dogList,addDog}
}
```

在主要的vue文件中引入

```vue
<script lang="ts" setup name="person">
import useSum from '@/hooks/useSum';
import useDog from '@/hooks/useDog';

const {sum,add} = useSum()
const {dogList,addDog} = useDog()


</script>
```

<br>

# 4.路由

对路由的理解：

- 路由就是一组key-value的对应关系
- 多个路由，需要经过路由器的管理

前端里面需要路由，是为了实现SPA（单页面应用），即一个html

<br>

## 4.1 路由_基本切换效果

首先以一个基本的后台管理页面为例子，要设置

- 导航区、展示区
- 请来路由器
- 指定路由具体规则（什么路径，对应什么组件）
- 形成一个一个的【？？？.vue】

1. 首先使用路由器，需要安装路由器

` npm i vue-router`

2. src目录下创建router文件夹

3. router文件夹内部新建文件，index.ts，创建一个路由器，并暴露出去
   1. 编写相关的Home组件等，并在index.ts中引入
   2. 引入createRouter，createWebHistory
   3. 创建路由器
   4. 暴露路由器

```vue
//创建一个路由器并暴露

//第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'

//引入所有路由组件
import Home from  '@/components/Home.vue';
import News from  '@/components/News.vue';
import About from  '@/components/About.vue';


//第二步：创建路由器
const router = createRouter({
    history:createWebHistory(),     //路由器的工作模式（暂不讲解）
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        }
    ]
})


// 第三步：将router暴露出去
export default router
```

4. 在main.ts中引入路由器，并使用路由器

```vue
// 引入createApp用于创建应用
import {createApp} from 'vue'
//引入App根组件
import App from './App.vue'

//引入路由器.index.ts省略
import router from './router'

//创建一个应用
const app = createApp(App)


//使用路由器
app.use(router)

//挂载整个应用到app容器中
app.mount('#app')
```

5. 将路由器视图放到指定的展示区（App.vue中）

```vue
<template>

    <div class="app">
        <h2 class="title">Vue路由测试</h2>
        <!-- 导航区 -->
        <div class="navigate">
            <a href="">首页</a>
            <a href="">新闻</a>
            <a href="">关于</a>
        </div>

        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>

    </div>


</template>

<script lang="ts" setup name="APP">
import { RouterView } from 'vue-router';

</script>
```

6. 为点击事件添加路由导航

```vue
<template>

    <div class="app">
        <h2 class="title">Vue路由测试</h2>
        <!-- 导航区 -->
        <div class="navigate">
            <RouterLink to="/home" active-class="xiaozhupeiqi">首页</RouterLink>
            <RouterLink to="/news" active-class="xiaozhupeiqi">新闻</RouterLink>
            <RouterLink to="/about" active-class="xiaozhupeiqi">关于</RouterLink>
        </div>

        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>

    </div>


</template>

<script lang="ts" setup name="APP">
import { RouterView,RouterLink } from 'vue-router';

</script>

<style>
 .title {
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 30px;
  }
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }
  .navigate a.xiaozhupeiqi {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
  }
  .main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
</style>
```



## 4.2 两个注意点

- 路由组件通常放在pages或views文件夹，一般组件通常存放在components文件夹
- 通过点击导航，视觉上”消失“了的路由组件，默认是被销毁的，需要的时候再去挂载

component文件夹内部的是一般组件

路由组件通常在pages/views文件夹中



<br>



## 4.3 路由器工作模式

history模式

​	Vue2：mode:'history'

​	Vue3:：history：createWebHistory()

hash模式



<br>

1.histoy模式

- 优点：URL更加美观，不带有#，更接近于传统网站URL

- 缺点：后期项目上线，需要服务器配合处理路径问题，否则刷新会有404错误

  ```vue
  const router = createRouter({
  	history:createWebHistory(),
  	...
  })
  ```

2.hash模式

- 优点：兼容性更好，因为不需要服务器端处理路径

- 缺点：URL带有#不太美观，且在SEO优化方面相对较差

  ```vue
  const router = createRouter({
  	history:createWebHash(),
  	...
  })
  ```

  



<br>

## 4.4 路由to的两种写法

1. to的字符串写法

   ```vue
   <router active-class="active" to='/home'></router>
   ```

   

2. to的对象写法(名字跳转/路径跳转)

   ```vue
   <router active-class='active' :to="{path:'/home'}"></router>
   ```

   当然可以！在 Vue Router 中，`to` 属性用于指定路由目标，有两种主要写法：字符串写法和对象写法。以下是对这两种写法的详细解释和示例。

   

> 1.`to` 的字符串写法
>
> 字符串写法是最简单和直接的方式，通常用于简单的路径导航。
>
> 示例
>
> ```vue
> <router-link active-class="active" to="/home">Home</router-link>
> ```
>
> 解释
>
> - **`<router-link>`**：Vue Router 提供的组件，用于创建导航链接。
> - **`to="/home"`**：字符串写法，直接指定目标路径为 `/home`。
> - **`active-class="active"`**：指定当链接对应的路由被激活时，应用的 CSS 类名。默认类名是 `router-link-active`，这里重写为 `active`。
>
> 当用户点击这个链接时，浏览器会导航到 `/home` 路径，对应的组件会被渲染。
>
> 2.`to` 的对象写法
>
> 对象写法提供了更多的灵活性，可以指定路径、路由参数、查询参数等。
>
> 示例
>
> ```vue
> <router-link active-class="active" :to="{ path: '/home' }">Home</router-link>
> ```
>
> 解释
>
> - **`:to="{ path: '/home' }"`**：对象写法，使用 `path` 字段指定目标路径为 `/home`。
> - **`active-class="active"`**：同样指定激活时的 CSS 类名。
>
> 对象写法允许你在一个对象中定义更多的路由选项。
>
> 更多对象写法示例
>
> ```vue
> <router-link :to="{ name: 'home' }">Home by name</router-link>
> 
> <router-link :to="{ path: '/home', query: { sort: 'asc' } }">Home with query</router-link>
> 
> <router-link :to="{ path: '/user', params: { userId: 123 } }">User</router-link>
> ```
>
> - **按名称导航**：使用路由名称导航，而不是路径。
>
>   ```vue
>   <router-link :to="{ name: 'home' }">Home by name</router-link>
>   ```
>
> - **带查询参数**：附加查询参数到路径中。
>
>   ```vue
>   <router-link :to="{ path: '/home', query: { sort: 'asc' } }">Home with query</router-link>
>   ```
>
> - **带路由参数**：通过路由参数导航。
>
>   ```vue
>   <router-link :to="{ path: '/user', params: { userId: 123 } }">User</router-link>
>   ```
>
> 何时使用哪种写法
>
> - **字符串写法**：适合简单的路径导航，没有参数或查询参数的情况。
> - **对象写法**：适合需要传递参数、查询参数或使用路由名称的情况。对象写法更灵活和可扩展，适用于复杂的导航需求。
>
> 通过这两种写法，Vue Router 提供了简洁和灵活的路由导航方式，适应不同的使用场景和需求。

<br>

## 4.5 命名路由

可以在router文件夹内部的index.ts种创建路由器时候，里面设置各个路由规则时可以设置路由名字

```vue
    routes:[
        {
            name:'zhuye',
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',
            path:'/news',
            component:News
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        }
    ]
```

命令了路由之后，可以通过第二种to方法实现通过name来跳转

```vue
<router-link :to="{ name:"shouye" }">Home with query</router-link>
```

<br>

## 4.6 嵌套路由

具体步骤如下：

1. 在父级组件中写好导航区和展示区（以news.vue为例子）
2. 写好子级组件Detail.vue并放到page文件夹
3. 配置路由，在index.ts中配置news父级路由的children，在children数组里面配置子组件Detail.vue



父组件news.vue

```vue
<template>
  <!-- 导航区 -->
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink to="/news/detail">{{ news.title }}</RouterLink>

      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>

    </div>
  </div>
</template>


<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

const newsList = reactive([
  { id: '1', title: 'shit', content: '12' },
  { id: '2', title: 'cgeg', content: '33' },
  { id: '3', title: 'weegw', content: '44' },
])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
```

子组件Detail.vue

```vue
<template>
    <ul class="news-list">
      <li>编号：xxx</li>
      <li>标题：xxx</li>
      <li>内容：xxx</li>
    </ul>
  </template>
  
  <script setup lang="ts" name="About">
  
  </script>
  
  <style scoped>
    .news-list {
      list-style: none;
      padding-left: 20px;
    }
  
    .news-list>li {
      line-height: 30px;
    }
  </style>
```

路由规则设置

```typescript
//创建一个路由器并暴露

//第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'

//引入所有路由组件
import Home from  '@/pages/Home.vue';
import News from  '@/pages/News.vue';
import About from  '@/pages/About.vue';
import Detail from '@/pages/Detail.vue';


//第二步：创建路由器
const router = createRouter({
    history:createWebHistory(),     //路由器的工作模式（暂不讲解）
    routes:[
        {
            name:'zhuye',
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    path:'detail',
                    component:Detail
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        }
    ]
})


// 第三步：将router暴露出去
export default router
```

<br>



## 4.7 路由query参数

如何在跳转路由的时候传参？

下面介绍query参数传参

News.vue组件设置传参

```vue
传参方法一:v-bind、反引号、模板字符串嵌入js
<li v-for="news in newsList" :key="news.id">
    <!-- 里面要通过反引号变成模板字符串，模板字符串嵌入js代码要使用${} -->
    <RouterLink :to="`/news/detail${news.id}&title=${news.title}&title=${news.content}`">{{ news.title }}</RouterLink>
</li>


传参方法二:对象传参（可以使用path或name）
<RouterLink :to="{
                 path:'/news/detail',
                 query:{
                 id:news.id,
                 title:news.title,
                 content:news.content
                 }
                 }">{{ news.title }}</RouterLink>
```



index.ts设置路由规则

```vue
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    path:'detail',
                    component:Detail
                }
            ]
        },
```





Detail.vue组件接受传参（可以解构赋值，但是直接解构响应式对象的数据失去响应式）

```vue
<template>
    <ul class="news-list">
      <li>编号：{{ route.query.id }}</li>
      <li>标题：{{ route.query.title }}</li>
      <li>内容：{{ route.query.content }}</li>
    </ul>
  </template>
  
  <script setup lang="ts" name="About">
  import { useRoute } from 'vue-router';
  let route = useRoute()
  //解构赋值
  //let {query} = toRefs(route)
  
  </script>
```



<br>

## 4.8 路由params参数

News.vue组件设置传参

```vue
<template>
  <!-- 导航区 -->
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 里面要通过反引号变成模板字符串，模板字符串嵌入js代码要使用${} -->
        <RouterLink to="`/news/detail${news.id}&/${news.title}&/${news.content}`">{{ news.title }}
        </RouterLink>

      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>

    </div>
  </div>
</template>


传参方法二:对象传参（使用name）
        <RouterLink :to="{
                 name:'xiangqing',
                 params:{
                 id:news.id,
                 title:news.title,
                 content:news.content
                 }
                 }">{{ news.title }}</RouterLink>
```

注意：对象传值，必须使用name不能使用path

index.ts设置路由规则

```vue
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
					name:'xiangqing'
                    path:'detail/:id/:title/:content',
                    component:Detail
                }
            ]
        },
```

在设置路由规则的使用后面加？可以控制可传可不传



Detail.vue组件接受传参

```vue
<template>
    <ul class="news-list">
      <li>编号：{{ route.params.id }}</li>
      <li>标题：{{ route.params.title }}</li>
      <li>内容：{{ route.params.content }}</li>
    </ul>
  </template>
  
  <script setup lang="ts" name="About">
  import { useRoute } from 'vue-router';
  let route = useRoute()
  
  
  </script>
  
  <style scoped>
    .news-list {
      list-style: none;
      padding-left: 20px;
    }
  
    .news-list>li {
      line-height: 30px;
    }
  </style>
```



<br>

## 4.9 路由props配置

在 Vue Router 中，当 `props` 选项设置为 `true` 时，路由参数会作为组件的 props 传递给组件。这样可以让你的组件更清晰地接收和使用路由参数。

具体来说，在你的代码中，`Detail` 组件的路径是 `detail/:id/:title/:content`。当你导航到这个路径时，例如 `/news/detail/1/some-title/some-content`，路由参数 `id`、`title` 和 `content` 会被作为 props 传递给 `Detail` 组件。



作用：让路由组件更方面的收到参数（可以将路由参数作为props传给组件）



首先配置路由规则

```vue
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    name:'xiangqing',
                    path:'detail/:id/:title/:content',
                    component:Detail,
                    props:true
                }
            ]
        
```

Detail.vue中重写接受参数代码

```vue
<template>
    <ul class="news-list">
      <li>编号：{{ id }}</li>
      <li>标题：{{ title }}</li>
      <li>内容：{{content }}</li>
    </ul>
  </template>
  
  <script setup lang="ts" name="About">
  defineProps(['id','title','content'])
  
  
  </script>
  
```

<br>

props有三种写法：

- 将所有收到的params参数作为props传给路由组件（布尔模式）

  ```vue
  props:true
  ```

- 可以自己决定将什么作为props传给路由组件（函数模式）

  ```vue
  props(route){return {route.query}}
  ```

- 也可以自己决定将什么props传给路由组件（对象写法）

  ```vue
  props:{a:100,b:200}
  ```

  



> `props: true` 主要是用于将路由路径中的动态参数（`params`）传递给组件的。对于 `query` 参数，需要另外的处理方法。
>
> 传递 `query` 参数
>
> 如果你想将 `query` 参数也传递给组件，可以使用一个函数来配置 `props`。这个函数可以合并 `params` 和 `query` 参数，并将它们一起作为 props 传递给组件。
>
> ```javascript
> {
> name: 'xiangqing',
> path: 'detail/:id/:title/:content',
> component: Detail,
> props: route => ({ 
>  ...route.params,
>  ...route.query 
> })
> }
> ```
>
> 这样，无论是 `params` 还是 `query` 参数，都会作为 props 传递给 `Detail` 组件。



<br>

## 4.10 路由replace属性

路由器的路由导航方式有两种

- push模式 ：将历史记录推入栈中
- replace模式：直接覆盖历史记录

路由器默认是push模式

如果要修改为replace模式，只需要在RouterLink标签的属性里面加入replace

<br>

## 4.11 编程式导航

之前在template中写的RouteLink标签最终在html中变成a标签

如果想要使用button来跳转，那么就不能使用RouterLink实现

或者是想要实现3秒后跳转，都不能使用RouterLink



```vue
  <script setup lang="ts" name="Home">
  import { onMounted } from 'vue';
  
  onMounted(()=>{
    setTimeout(()=>{
      //在此处编写一段代码，让路由实现跳转
    },3000)
  })

  </script>
```

要实现上述的效果，就需要编程式路由导航，脱离RouterLink实现跳转

```vue
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter()


  onMounted(()=>{
    setTimeout(()=>{
      //在此处编写一段代码，让路由实现跳转
      router.push('/news')
    },3000)
  })

```

实际使用过程中，编程式路由导航远远大于RouterLink

下面是添加button跳转的案例

```vue
<template>
  <!-- 导航区 -->
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 里面要通过反引号变成模板字符串，模板字符串嵌入js代码要使用${} -->
        <button @click="showDetail(news)">查看新闻</button>
        <RouterLink :to="{
          name: 'xiangqing',
          params: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">{{ news.title }}</RouterLink>

      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>

    </div>
  </div>
</template>




<script setup lang="ts" name="News">
import { idText } from 'typescript';
import { reactive } from 'vue';
import { RouterView, RouterLink, useRouter } from 'vue-router';

const newsList = reactive([
  { id: '1', title: 'shit', content: '12' },
  { id: '2', title: 'cgeg', content: '33' },
  { id: '3', title: 'weegw', content: '44' },
])

const router = useRouter()

interface NewsInter{
  id:string,
  title:string,
  content:string
}

function showDetail(news:NewsInter) {
  //router.replace也可以
  router.push({
    name: 'xiangqing',
    params: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}
```

router.push里面能写的内容和template里面RouterLink里面的to一样

- 字符串写法
- 对象写法

注意：在vue2里面编程式导航重复跳转会报错



<br>

## 4.12 重定向

一般页面进入的时候有个默认的页面，可以使用重定向实现

```vue
        {
            path:'/',
            redirect:'/home'
        }
```





<br>

# 5.pinia

pinia，vue.js的状态管理库

集中式状态（数据）管理

Pinia 是一个专门为 Vue.js 设计的状态管理库，旨在简化和优化 Vue.js 应用程序中的状态管理。它由 Vue.js 核心团队的成员开发和维护，提供了一种现代化的方式来管理应用程序的状态。

<br>

Pinia 的主要特点和用途：

1. **Vue.js 3 的原生支持**：Pinia 是为 Vue.js 3 设计的状态管理库，利用了 Vue 3 的 Composition API，提供了更灵活和强大的状态管理能力。
2. **类型安全和响应式**：Pinia 使用 TypeScript 和响应式数据结构，可以实现类型安全的状态管理，使得代码更加健壮和易于维护。
3. **零依赖**：Pinia 是一个零依赖的库，不依赖于 Vuex 或其他状态管理库，因此可以轻量地集成到你的 Vue.js 项目中。
4. **插件化和模块化**：Pinia 支持插件和模块化的状态管理，允许你将应用程序状态分解为独立的模块，并且可以灵活地组合和重用这些模块。
5. **优化性能**：Pinia 在内部实现了许多优化，例如惰性加载和局部更新，有助于提升应用程序的性能表现。



使用场景：

- **复杂的状态管理需求**：当你的 Vue.js 应用程序有复杂的状态管理需求，例如大量组件间的状态共享、异步数据处理或者多模块协作时，Pinia 可以提供更清晰和可维护的解决方案。
- **TypeScript 支持**：如果你的项目使用 TypeScript，并且需要类型安全的状态管理，Pinia 提供了良好的支持和集成。
- **Vue 3 Composition API 的使用者**：Pinia 与 Vue 3 的 Composition API 紧密集成，可以更自然地利用 Composition API 来管理状态。



如果不使用 Pinia 会怎么样？

如果你选择不使用 Pinia，而是采用传统的 Vuex 或者其他状态管理库，可能会面临以下一些情况：

- **复杂度增加**：传统的 Vuex 在处理复杂状态时可能需要编写更多的模板代码和样板代码，使得代码结构变得复杂和难以维护。
- **性能影响**：一些传统状态管理库可能在性能方面表现较弱，特别是在大规模应用程序中，可能会影响页面加载和响应速度。
- **TypeScript 集成困难**：某些状态管理库在 TypeScript 集成方面可能不够友好，可能需要更多的手动类型定义或类型转换。

总体而言，Pinia 提供了一种现代化和优化的状态管理解决方案，尤其适合于需要更清晰、灵活和性能优化的 Vue.js 应用程序。选择是否使用 Pinia 取决于你的项目需求和团队的偏好，以及是否希望利用 Vue 3 的最新功能来优化开发体验和性能。



<br>

## 5.1 准备一个效果

下面这个是加减功能组件

```vue
<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref } from "vue";
  // 数据
  let sum = ref(1) // 当前求和
  let n = ref(1) // 用户选择的数字

  // 方法
  function add(){
    sum.value += n.value
  }
  function minus(){
    sum.value -= n.value
  }
</script>
```

v-model.number的使用，是因为默认的处理是字符串

下面是获取文本的组件

```vue
<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {reactive} from 'vue'
  import axios from "axios";
  import {nanoid} from 'nanoid'
  // 数据
  let talkList = reactive([
    {id:'ftrfasdf01',title:'今天你有点怪，哪里怪？怪好看的！'},
    {id:'ftrfasdf02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
    {id:'ftrfasdf03',title:'心里给你留了一块地，我的死心塌地'}
  ])
  // 方法
  async function getLoveTalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串，包装成一个对象
    let obj = {id:nanoid(),title}
    // 放到数组中
    talkList.unshift(obj)
  }
</script>
```

unshift是在开头添加，push实在末尾添加











## 5.2 搭建pinia环境

1.首先安装

`npm i pinia`

2.main.ts引入pinia

`import {createPinia} from 'pinia'`

3.main.ts中创建pinia

`const pinia = createPinia()`

4.main.ts中安装pinia

` app.use(pinia)`



```vue
// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'

//引入pinia
import { createPinia } from 'pinia'

// 创建一个应用
const app = createApp(App)

const pinia = createPinia()

// 挂载整个应用到app容器中

app.use(pinia)
app.mount('#app')
```





<br>

## 5.3 存储+读取数据

讲解如何用pinia存储和读取数据

首选需要创建store文件夹，这个是pinia落地的文件夹

然后再store文件内部创建两个ts文件：Count.ts、LoveTalk.ts

```vue
import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // 真正存储数据的地方
  state(){
    return {
      sum:6
    }
  }
})
```

```vue
import {defineStore} from 'pinia'

export const useTalkStore = defineStore('talk',{
  // 真正存储数据的地方
  state(){
    return {
      talkList:[
        {id:'ftrfasdf01',title:'今天你有点怪，哪里怪？怪好看的！'},
        {id:'ftrfasdf02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
        {id:'ftrfasdf03',title:'心里给你留了一块地，我的死心塌地'}
      ]
    }
  }
})
```

然后修改Count.vue中的sum（删掉）,引入pinia仓库中的对应数据

```vue
<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref,reactive } from "vue";
  import {useCountStore} from '@/store/count'

  const countStore = useCountStore()

  // 以下两种方式都可以拿到state中的数据
  // console.log('@@@',countStore.sum)
  // console.log('@@@',countStore.$state.sum)

/*   let obj = reactive({
    a:1,
    b:2,
    c:ref(3)
  })
  let x = ref(9)
  console.log(obj.a)
  console.log(obj.b)
  console.log(obj.c) */


  // 数据
  let n = ref(1) // 用户选择的数字
  // 方法
  function add(){
    
  }
  function minus(){
    
  }
</script>

```

`console.log('@@@',countStore.sum)`这个代码不需要.value，是因为嵌套的响应式数据，在访问响应式数据内部的响应式数据时不用加.value

```vue
<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {reactive} from 'vue'
  import axios from "axios";
  import {nanoid} from 'nanoid'
  import {useTalkStore} from '@/store/loveTalk'

  const talkStore = useTalkStore()
  
  // 方法
  async function getLoveTalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    // let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串，包装成一个对象
    // let obj = {id:nanoid(),title}
    // 放到数组中
    // talkList.unshift(obj)
  }
</script>

```

上述过程实现了将静态数据存储并读取的过程，但是不能对数据进行修改再保存

<br>

## 5.4 修改数据（三种方式）

具体的修改数据的三种实现方法如下：



```vue
  function add(){
    // 第一种修改方式
    // countStore.sum += 1

    // 第二种修改方式
    /* countStore.$patch({
      sum:888,
      school:'尚硅谷',
      address:'北京'
    }) */

    // 第三种修改方式
    countStore.increment(n.value)

  }
```

其中的第三种方法要再对应的仓库里面设置actions

```vue
import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  //actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions:{
    increment(value:any){
      //this是当前的store
      this.sum+=value
    }
  },
  // 真正存储数据的地方
  state(){
    return {
      sum:888,
      school:'尚硅谷',
      address:'北京'
      
    }
  }
})
```

第三种方法适合，有复杂逻辑的数据修改（有极限值等等），或者有复用需求的

<br>



## 5.5 storeToRefs

之前说过，对数据的解构会丢失数据的响应式

为了保证数据的响应式可以使用toRefs，但是在这个pinia仓库里面使用toRefs是少见的，因为toRefs会把内部所有的数据和方法都变成ref格式，这个是不必要的，下面是storeToRefs解决方案

```vue
  // 使用useCountStore，得到一个专门保存count相关的store
  const countStore = useCountStore()
  // storeToRefs只会关注sotre中数据，不会对方法进行ref包裹
  const {sum,school,address} = storeToRefs(countStore)
  // console.log('!!!!!',storeToRefs(countStore))
```

这个方法和toRefs不同，这个函数不会把pinia仓库内部的方法给变成ref



<br>

## 5.6 getters

概念：当state中的数据，需要经过处理后再使用，可以使用getters配置

追加getter配置

```vue
// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useCountStore = defineStore('count',{
  // 动作
  actions:{
    /************/
  },
  // 状态
  state(){
    return {
      sum:1,
      school:'atguigu'
    }
  },
  // 计算
  getters:{
    bigSum:(state):number => state.sum *10,
	//:string表示返回string类型
    upperSchool():string{
      return this. school.toUpperCase()
    }
  }
})
```

组件中读取getters

```vue
const {increment,decrement} = countStore
let {sum,school,bigSum,upperSchool} = storeToRefs(countStore)
```

注意：vue3最好不要使用this



<br>

## 5.7 $subscribe

store中都有这个函数，调用该函数要传入一个函数

通过 store 的 `$subscribe()` 方法侦听 `state` 及其变化

```vue
talkStore.$subscribe((mutate,state)=>{
  console.log('LoveTalk',mutate,state)
  localStorage.setItem('talk',JSON.stringify(talkList.value))
})
```

- mutate是本次修改的信息
- state是真正的数据

`localStorage.setItem('talk', JSON.stringify(talkList.value)) `会将 `talkList.value` 转换为 JSON 字符串并存储到浏览器的 localStorage 中，键名为 talk（js语法）

上述代码将字符串存储再localStorage里面，可以再store的state里面设置读取出来

```vue
state(){
 return{
	talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
  }
}
```

通过将数据保存再localStroage中，从而实现数据在浏览器关闭情况下，可以再现之前的数据

<br>

## 5.8 store组合式写法

之前对于store的写法其实是选项式写法

```vue
export const useTalkStore = defineStore('talk',{
  actions:{
    async getATalk(){
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 把请求回来的字符串，包装成一个对象
      let obj = {id:nanoid(),title}
      // 放到数组中
      this.talkList.unshift(obj)
    }
  },
  // 真正存储数据的地方
  state(){
    return {
      talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  }
})
```

下面则是组合式写法

```vue
import { reactive } from 'vue'

export const useTalkStore = defineStore('talk', ()=> {

  //talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )

  //getATalk函数相当于action
  async function getATalk() {
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串，包装成一个对象
    let obj = { id: nanoid(), title }
    // 放到数组中
    talkList.unshift(obj)
  }
  return { talkList, getATalk }
})
```

组合式就是

- 数据直接使用reactive定义
- action直接写成函数
- 返回所有的数据和函数

<br>

# 6.组件通信

组件通信概述

组件通信是前端开发中用于在不同组件之间传递数据和事件的关键技术。根据组件之间的关系，常见的通信方式如下：

1. 父子组件通信

**父组件向子组件传递数据**：

- 使用 `props` 属性传递数据。

**子组件向父组件传递数据**：

- 使用事件和回调函数传递数据。

2. 兄弟组件通信

**通过共同的父组件**：

- 共同的父组件管理状态，通过 `props` 和回调函数传递数据。

**使用状态管理工具**：

- 使用全局状态管理工具如 Redux、Vuex 或 React Context。

3. 跨层级组件通信

**事件总线**：

- 通过发布-订阅模式传递数据（如第三方事件总线库）。

**上下文（Context）**：

- 使用上下文（Context）在跨层级组件间传递数据。

4. 全局状态管理

使用全局状态管理工具来管理和共享应用的全局状态：

- **Vuex**: Vue.js 的状态管理模式。
- **Redux**: React 的常用状态管理库。
- **MobX**: 另一种状态管理库，常用于 React。

总结

组件通信是构建复杂前端应用的基础。根据组件关系选择合适的通信方式有助于保持代码清晰和易于维护。

<img src="../../public/vue3/组件通信.png" alt="image-20231119185900990" style="zoom:60%;" />

## 6.1  通信方式一：props

概述：`props`是使用频率最高的一种通信方式，常用与 ：**父 ↔ 子**。

- 若 **父传子**：属性值是**非函数**。
- 若 **子传父**：属性值是**函数**。



父组件如下：

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<Child :car="car" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	// 数据
	let car = ref('奔驰')
	let toy = ref('')
	// 方法
	function getToy(value:string){
		toy.value = value
	}
</script>
```

子组件如下：

```VUE
<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>父给的车：{{ car }}</h4>
		<button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import {ref} from 'vue'
	// 数据
	let toy = ref('奥特曼')
	// 声明接收props
	defineProps(['car','sendToy'])
</script>

```

通过上述可以知道

父传子：

1. 父组件传递(字符串内car是定义的ref响应式数据)

   `<child :car="car">`

2. 子组件接收

   ```vue
   // 声明接收props
   defineProps(['car','sendToy'])
   
   //template中使用
   <h4>父给的车：{{ car }}</h4>
   ```

<br>

子传父

1. 父组件定义方法并传递

   ```vue
   //script
   let toy = ref('')
   function getToy(value:string){
   	toy.value = value
   }
   
   //template
   <Child :car="car" :sendToy="getToy"/>
   ```

2. 子组件调用父组件的函数，给予父组件数据

   ```vue
   <button @click="sendToy(toy)">把玩具给父亲</button>
   ```

3. 父组件接收

   ```vue
   <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
   ```

   

<br>

## 6.2 通信方式二：自定义事件

在 Vue 中，"自定义事件"这个术语特指子组件通过 `emit` 触发的事件，然后由父组件监听和处理的机制。

1. 概述：自定义事件常用于：**子 => 父。**
2. 注意区分好：原生事件、自定义事件。

- 原生事件：
  - 事件名是特定的（`click`、`mosueenter`等等）	
  - 事件对象`$event`: 是包含事件相关信息的对象（`pageX`、`pageY`、`target`、`keyCode`）
- 自定义事件：
  - 事件名是任意名称
  - <strong style="color:red">事件对象`$event`: 是调用`emit`时所提供的数据，可以是任意类型！！！</strong >

<br>

正常事件传递的时候，如果没有传参，那么就会默认传入事件对象，如果有传参，那么就只会传入所需参数

如何让传参的函数也传入事件对象？

只需在调用函数的时候传递`$event`即可

<br>

具体的自定义事件的使用流程如下：

1. 父组件中编写函数，并将函数与子组件进行事件绑定

   ```vue
       //只要send-toy事件被触发，那么就会调用saveToy函数
   	<Child @send-toy="saveToy"/>
   	
   
   
   	function saveToy(value:string){
   		console.log('saveToy',value)
   		toy.value = value
   	}
   ```

   

2. 子组件声明事件

   ```vue
   //script
   const emit = definEmits(['send-toy'])
   ```

3. 子组件设置调用函数的触发（点击、挂载三秒后等等）

   ```vue
   <button @click="emit('send-toy',toy)">测试</button>
   ```

​		注意子组件触发函数的时候需要声明事件和传入参数

<br>

父组件

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- 给子组件Child绑定事件 -->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
	import { ref } from "vue";
	// 数据
	let toy = ref('')
	// 用于保存传递过来的玩具
	function saveToy(value:string){
		console.log('saveToy',value)
		toy.value = value
	}
</script>
```

子组件

```vue
<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>玩具：{{ toy }}</h4>
		<button @click="emit('send-toy',toy)">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from "vue";
	// 数据
	let toy = ref('奥特曼')
	// 声明事件
	const emit =  defineEmits(['send-toy'])
</script>

```









<br>



## 6.3 通信方式三：mitt

安装`mitt`

```shell
npm i mitt
```

【第一步】：新建文件：`src\utils\emitter.ts`

```javascript
// 引入mitt 
import mitt from "mitt";

// 创建emitter
const emitter = mitt()

/*
  // 绑定事件
  emitter.on('abc',(value)=>{
    console.log('abc事件被触发',value)
  })
  emitter.on('xyz',(value)=>{
    console.log('xyz事件被触发',value)
  })

  setInterval(() => {
    // 触发事件
    emitter.emit('abc',666)
    emitter.emit('xyz',777)
  }, 1000);

  setTimeout(() => {
    // 清理事件
    emitter.all.clear()
  }, 3000); 
*/

// 创建并暴露mitt
export default emitter
```

mitt的对象实例化有四个内置方法：

1. all，拿到所有绑定事件
2. emit，触发某个事件
3. off，解绑某个事件
4. on，绑定某个事件

【第二步】：接收数据的组件中：绑定事件、同时在销毁前解绑事件：

```typescript
import emitter from "@/utils/emitter";
import { onUnmounted } from "vue";

// 绑定事件
emitter.on('send-toy',(value)=>{
  console.log('send-toy事件被触发',value)
})

onUnmounted(()=>{
  // 解绑事件
  emitter.off('send-toy')
})
```

【第三步】：提供数据的组件，在合适的时候触发事件

```javascript
import emitter from "@/utils/emitter";

function sendToy(){
  // 触发事件
  emitter.emit('send-toy',toy.value)
}
```

**注意这个重要的内置关系，总线依赖着这个内置关系**

<br>

综上所述：

- 接收数据者：绑定事件（on）
- 提供数据者：触发事件（emit）



此外，上述的例子mitt只传传入的单个值，如果实现多个组件传入值？

<br>

## 6.4 通信方式四：v-model

1. 概述：实现 **父↔子** 之间相互通信。

2. 前序知识 —— `v-model`的本质

   ```vue
   <!-- 使用v-model指令 -->
   <input type="text" v-model="userName">
   
   <!-- v-model的本质是下面这行代码 -->
   <input 
     type="text" 
   <!-- 实现数据到页面 -->
     :value="userName" 
   <!-- 实现页面到数据 -->
     @input="userName =(<HTMLInputElement>$event.target).value"
   >
   ```

3. 组件标签上的`v-model`的本质：`:modelValue` ＋ `update:modelValue`事件。

   ```vue
   <!-- 组件标签上使用v-model指令 -->
   <AtguiguInput v-model="userName"/>
   
   <!-- 组件标签上v-model的本质 -->
   <AtguiguInput :modelValue="userName" @update:model-value="userName = $event"/>
   ```

   `AtguiguInput`组件中：

   ```vue
   <template>
     <div class="box">
       <!--将接收的value值赋给input元素的value属性，目的是：为了呈现数据 -->
   		<!--给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件-->
       <input 
          type="text" 
          :value="modelValue" 
          @input="emit('update:model-value',$event.target.value)"
       >
     </div>
   </template>
   
   <script setup lang="ts" name="AtguiguInput">
     // 接收props
     defineProps(['modelValue'])
     // 声明事件
     const emit = defineEmits(['update:model-value'])
   </script>
   ```

4. 也可以更换`value`，例如改成`abc`

   ```vue
   <!-- 也可以更换value，例如改成abc-->
   <AtguiguInput v-model:abc="userName"/>
   
   <!-- 上面代码的本质如下 -->
   <AtguiguInput :abc="userName" @update:abc="userName = $event"/>
   ```

   `AtguiguInput`组件中：

   ```vue
   <template>
     <div class="box">
       <input 
          type="text" 
          :value="abc" 
          @input="emit('update:abc',$event.target.value)"
       >
     </div>
   </template>
   
   <script setup lang="ts" name="AtguiguInput">
     // 接收props
     defineProps(['abc'])
     // 声明事件
     const emit = defineEmits(['update:abc'])
   </script>
   ```

5. 如果`value`可以更换，那么就可以在组件标签上多次使用`v-model`

   ```vue
   <AtguiguInput v-model:abc="userName" v-model:xyz="password"/>
   ```


<br>





综上可以看出原理与props+mitt类似



\$event到底是什么？什么时候可以`.target`

对于原生事件，\$event就是事件对象（能target

对于自定义是将，\$event就是触发事件时，传递的数据（不能target





<br>

## 6.5 通信方式五：\$attrs

1. 概述：`$attrs`用于实现**当前组件的父组件**，向**当前组件的子组件**通信（**祖→孙**）。

2. 具体说明：`$attrs`是一个对象，包含所有父组件传入的标签属性。

   >  注意：`$attrs`会自动排除`props`中声明的属性(可以认为声明过的 `props` 被子组件自己“消费”了)

父组件：

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import { ref } from "vue";
	let a = ref(1)
	let b = ref(2)
	let c = ref(3)
	let d = ref(4)

	function updateA(value){
		a.value = value
	}
</script>
```

v-bind="{x:100,y:200}"相当于

`:x="100" :y="200"`



子组件：

```vue
<template>
	<div class="child">
		<h3>子组件</h3>
		<GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
</script>
```

孙组件：

```vue
<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<h4>c：{{ c }}</h4>
		<h4>d：{{ d }}</h4>
		<h4>x：{{ x }}</h4>
		<h4>y：{{ y }}</h4>
		<button @click="updateA(666)">点我更新A</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	defineProps(['a','b','c','d','x','y','updateA'])
</script>
```

在v-bind参数传入子组件的时候，如果子组件没有获取props，那么参数将在\$attrs中可以读取。

<br>

## 6.6 通信方式六： \$refs与\$parent

1. 概述：

   * `$refs`用于 ：**父→子。**
   * `$parent`用于：**子→父。**

2. 原理如下：

   | 属性      | 说明                                                     |
   | --------- | -------------------------------------------------------- |
   | `$refs`   | 值为对象，包含所有被`ref`属性标识的`DOM`元素或组件实例。 |
   | `$parent` | 值为对象，当前组件的父组件实例对象。                     |

通过ref标签（3.11内容）可以或者子组件实例，从而实现单个子组件的父->子。

如果想要获取所有的子组件，可以使用\$refs。

如果想要或者子组件的父组件，可以使用\$parent。

注意如果想要获取其他组件的数据前提是，必须其他组件有暴露该数据。



父组件

```vue
<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的电脑</button>
		<button @click="getAllChild($refs)">让所有孩子的书变多</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'
	import { ref,reactive } from "vue";
	let c1 = ref()
	let c2 = ref()

	// 注意点：当访问obj.c的时候，底层会自动读取value属性，因为c是在obj这个响应式对象中的
	/* let obj = reactive({
		a:1,
		b:2,
		c:ref(3)
	})
	let x = ref(4)

	console.log(obj.a)
	console.log(obj.b)
	console.log(obj.c)
	console.log(x) */
	

	// 数据
	let house = ref(4)
	// 方法
	function changeToy(){
		c1.value.toy = '小猪佩奇'
	}
	function changeComputer(){
		c2.value.computer = '华为'
	}
	function getAllChild(refs:{[key:string]:any}){
		console.log(refs)
		for (let key in refs){
			refs[key].book += 3
		}
	}
	// 向外部提供数据
	defineExpose({house})
</script>
```

refs:{[key:string]:any}这个类型声明是ref是对象，对象里面的key是string类型



子组件1

```vue
<template>
  <div class="child1">
    <h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>书籍：{{ book }} 本</h4>
		<button @click="minusHouse($parent)">干掉父亲的一套房产</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
	import { ref } from "vue";
	// 数据
	let toy = ref('奥特曼')
	let book = ref(3)

	// 方法
	function minusHouse(parent:any){
		parent.house -= 1
	}

	// 把数据交给外部
	defineExpose({toy,book})

</script>
```

子组件2

```vue
<template>
  <div class="child2">
    <h3>子组件2</h3>
		<h4>电脑：{{ computer }}</h4>
		<h4>书籍：{{ book }} 本</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
		import { ref } from "vue";
		// 数据
		let computer = ref('联想')
		let book = ref(6)
		// 把数据交给外部
		defineExpose({computer,book})
</script>
```







<br>

## 6.7 通信方式七：provide和inject

1. 概述：实现**祖孙组件**直接通信

2. 具体使用：

   * 在祖先组件中通过`provide`配置向后代组件提供数据
   * 在后代组件中通过`inject`配置来声明接收数据

3. 具体编码：

   【第一步】父组件中，使用`provide`提供数据

   ```vue
   <template>
     <div class="father">
       <h3>父组件</h3>
       <h4>资产：{{ money }}</h4>
       <h4>汽车：{{ car }}</h4>
       <button @click="money += 1">资产+1</button>
       <button @click="car.price += 1">汽车价格+1</button>
       <Child/>
     </div>
   </template>
   
   <script setup lang="ts" name="Father">
     import Child from './Child.vue'
     import { ref,reactive,provide } from "vue";
     // 数据
     let money = ref(100)
     let car = reactive({
       brand:'奔驰',
       price:100
     })
     // 用于更新money的方法
     function updateMoney(value:number){
       money.value += value
     }
     // 提供数据
     provide('moneyContext',{money,updateMoney})
     provide('car',car)
   </script>
   ```

   > 注意：子组件中不用编写任何东西，是不受到任何打扰的

   【第二步】孙组件中使用`inject`配置项接受数据。

   ```vue
   <template>
     <div class="grand-child">
       <h3>我是孙组件</h3>
       <h4>资产：{{ money }}</h4>
       <h4>汽车：{{ car }}</h4>
       <button @click="updateMoney(6)">点我</button>
     </div>
   </template>
   
   <script setup lang="ts" name="GrandChild">
     import { inject } from 'vue';
     // 注入数据
    let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(x:number)=>{}})
     let car = inject('car')
   </script>
   ```

问题：在inject接收数据并解构的时候，没有进行响应式处理操作，为什么不会丢失响应式？

答案，因为inject返回就是provide的包裹，provide包裹的就是ref对象





<br>

向后代提供数据：provide(名，值)，其中传入数据的时候

向祖辈接收数据：inject(名，默认值) ，其中默认值是没有传入才有效。

<br>

## 6.8 通信方式八：pinia

参考5



<br>



## 6.9 通信方式九：slot插槽

vue3中的插槽是什么？



### 6.9.1 默认插槽

父组件

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食城市">
        <img :src="imgUrl" alt="">
      </Category>
      <Category title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import { ref,reactive } from "vue";

  let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
  let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
  let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

</script>
```

注意这里编写的子组件是双标签，双标签内部的html标签编写，这个编写将会塞到子组件中（父组件调用子组件，双标签写到内部标签会赛到子组件中，而子组件本身会塞到父组件上的对应调用位置）

<br>

catagory子组件

```vue
<template>
  <div class="category">
    <h2>{{title}}</h2>
    <slot>默认内容</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
  defineProps(['title'])
</script>
```

使用slot标签，将父组件调用时候的双标签内部塞到这个slot标签中，slot内部的内容是默认内容（即父组件没有塞数据时的展示）



<br>

### 6.9.2 具名插槽

当你需要将双标签调用子组件的内部数据分别插入到子组件的不同位置时，需要进行插槽的命名（即需要多个插槽）

父组件

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
      </Category>

      <Category>
        <template v-slot:s2>
          <img :src="imgUrl" alt="">
        </template>
        <template v-slot:s1>
          <h2>今日美食城市</h2>
        </template>
      </Category>

      <Category>
        <template #s2>
          <video video :src="videoUrl" controls></video>
        </template>
        <template #s1>
          <h2>今日影视推荐</h2>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import { ref,reactive } from "vue";

  let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
  let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
  let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

</script>
```

注意：上面的父组件没有传入title（默认插槽使用props传入），使用了多个插槽传入



子组件

```vue
<template>
  <div class="category">
    <slot name="s1">默认内容1</slot>
    <slot name="s2">默认内容2</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
  
</script>
```

综上可知使用方式：

- 父组件的组件标签内部通过多个template标签隔开，并使用命名（`v-slol:...` 或 `#xx`）
- 子组件的对应位置使用用slot标签，并使用name属性命名

此外默认插槽的名字时default

<br>

### 6.9.3 作用域插槽

前面两个插槽是父传子的插槽，下面来介绍一种子传父的插槽。

1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（新闻数据在`News`组件中，但使用数据所遍历出来的结构由`App`组件决定）

2. 具体编码：

   ```vue
   父组件中：
         <Game>
           <template v-slot="params">
             <ul>
               <li v-for="y in params.youxi" :key="y.id">
                 {{ y.name }}
               </li>
             </ul>
           </template>
         </Game>
   
         <Game>
           <template v-slot="params">
             <ol>
               <li v-for="item in params.youxi" :key="item.id">
                 {{ item.name }}
               </li>
             </ol>
           </template>
         </Game>
   
         <Game>
           <template #default="{youxi}">
             <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
           </template>
         </Game>
   
   子组件中：
         <template>
           <div class="category">
             <h2>今日游戏榜单</h2>
             <slot :youxi="games" a="哈哈"></slot>
           </div>
         </template>
   
         <script setup lang="ts" name="Category">
           import {reactive} from 'vue'
           let games = reactive([
             {id:'asgdytsa01',name:'英雄联盟'},
             {id:'asgdytsa02',name:'王者荣耀'},
             {id:'asgdytsa03',name:'红色警戒'},
             {id:'asgdytsa04',name:'斗罗大陆'}
           ])
         </script>
   ```

注意事项：

- 父组件每个插槽位置通过game双标签隔开
- 父组件的插槽名字是任意的，接收到的子组件参数可以通过.访问
- 父组件决定结构，子组件决定数据
- 插槽同样可以命名（子组件slot），命名后父组件通过v-slot:xx访问





综上所述，作用域插槽使用方法：

- 子组件编写slot
- 父组件编写接收参数



v-slot:和v-slot=

<br>



# 7.其他API

## 7.1 shallowRef 与 shallowReactive 

### `shallowRef`

1. 作用：创建一个响应式数据，但只对顶层属性进行响应式处理。

2. 用法：

   ```js
   let myVar = shallowRef(initialValue);
   ```

3. 特点：只跟踪引用值的变化，不关心值内部的属性变化。

### `shallowReactive`

1. 作用：创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的

2. 用法：

   ```js
   const myObj = shallowReactive({ ... });
   ```

3. 特点：对象的顶层属性是响应式的，但嵌套对象的属性不是。



总结

通过使用 [`shallowRef()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 和 [`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 来绕开深度响应。浅层式 `API` 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，**这使得属性的访问变得更快，可提升性能**。



<br>

## 7.2 readonly 与 shallowReadonly

### **`readonly`**

1. 作用：用于创建一个对象的深只读副本。

2. 用法：

   ```js
   const original = reactive({ ... });
   const readOnlyCopy = readonly(original);
   ```

3. 特点：

   * 对象的所有嵌套属性都将变为只读。
   * 任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）。

4. 应用场景：

   * 创建不可变的状态快照。
   * 保护全局状态或配置不被修改。

直接改变不行，改变原来的响应式数据，会造成readonly相应数据改变



### **`shallowReadonly`**

1. 作用：与 `readonly` 类似，但只作用于对象的顶层属性。

2. 用法：

   ```js
   const original = reactive({ ... });
   const shallowReadOnlyCopy = shallowReadonly(original);
   ```

3. 特点：

   * 只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的。

   * 适用于只需保护对象顶层属性的场景。




readonly和shallowReadonly传入的参数必须是响应式数据

<br>

## 7.3 toRaw 与 markRaw

### `toRaw`

1. 作用：用于获取一个响应式对象的原始对象， `toRaw` 返回的对象不再是响应式的，不会触发视图更新。

   > 官网描述：这是一个可以用于临时读取而不引起代理访问/跟踪开销，或是写入而不触发更改的特殊方法。不建议保存对原始对象的持久引用，请谨慎使用。

   > 何时使用？ —— 在需要将响应式对象传递给非 `Vue` 的库或外部系统时，使用 `toRaw` 可以确保它们收到的是普通对象

2. 具体编码：

   ```js
   import { reactive,toRaw,markRaw,isReactive } from "vue";
   
   /* toRaw */
   // 响应式对象
   let person = reactive({name:'tony',age:18})
   // 原始对象
   let rawPerson = toRaw(person)
   
   
   /* markRaw */
   let citysd = markRaw([
     {id:'asdda01',name:'北京'},
     {id:'asdda02',name:'上海'},
     {id:'asdda03',name:'天津'},
     {id:'asdda04',name:'重庆'}
   ])
   // 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了
   let citys2 = reactive(citys)
   console.log(isReactive(person))
   console.log(isReactive(rawPerson))
   console.log(isReactive(citys))
   console.log(isReactive(citys2))
   ```

可以将toRaw原始数据传送给后端时，可以使用

### `markRaw`

1. 作用：标记一个对象，使其**永远不会**变成响应式的。

   > 例如使用`mockjs`时，为了防止误把`mockjs`变为响应式对象，可以使用 `markRaw` 去标记`mockjs`

2. 编码：

   ```js
   /* markRaw */
   let citys = markRaw([
     {id:'asdda01',name:'北京'},
     {id:'asdda02',name:'上海'},
     {id:'asdda03',name:'天津'},
     {id:'asdda04',name:'重庆'}
   ])
   // 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了
   let citys2 = reactive(citys)
   ```

<br>

## 7.4 customRef

问题：vue3本身提供了ref，为什么还要自定义ref？

回答：默认的ref无法实现，类似延迟同步数据展示的功能（例如改变数据后1s才在页面展示）



作用：创建一个自定义的`ref`，并对其依赖项跟踪和更新触发进行逻辑控制。

（防抖就是说频繁的输入时，开启了多个定时器，并拥挤在一起）

实现防抖效果（`useMsgRef.ts`）：

```typescript
import {customRef } from "vue";

export default function(initValue:string,delay:number){
  let msg = customRef((track,trigger)=>{
    let timer:number
    return {
      get(){
        track() // 告诉Vue数据msg很重要，要对msg持续关注，一旦变化就更新
        return initValue
      },
      set(value){
        clearTimeout(timer)
        timer = setTimeout(() => {
          initValue = value
          trigger() //通知Vue数据msg变化了
        }, delay);
      }
    }
  }) 
  return {msg}
}
```

clearTimeout(timer)这个代码是防抖的关键，使用了这个代码，只有输入停下的时候，计时器才会开始（其实就是不停的clear，直到最后一个字符）





组件中使用：

```vue
<script setup lang="ts" name="App">
	import useMsgRef from './useMsgRef'

	let {msg} = useMsgRef('你好',2000)

</script>
```

自定义的ref一般写成hooks





<br>





自定义ref使用：

- 传入回调函数
- 回调函数传入track和trigger（底层传入）
- 必须返回对象
- 返回对象里面必须要有get和set函数
  - get函数，msg被读取时候调用，需要有返回值
  - set函数，msg被修改时候调用，默认传入value（修改的最新值）
- get函数返回前需要调用track函数，set函数返回去需要调用trigger函数

<br>



自定义ref中的trick和tragger如何理解？（msg是自定义ref的实例化对象）

- trick：告诉Vue数据msg很重要，要对msg进行持续关注，一旦msg变化就去更新

- trigger：通知Vue一下数据msg变化了

只定义trick，不定义trigger：改变数据调用set函数时无法同步通知数据改变，即get函数无法收到数据改变通知

只定义trigger，不定义trick：改变数据调用set函数时发送通知，但get函数无法接收这个通知，不进行页面更新



<br>





# 8.Vue3新组件

## 8.1 Teleport

- 什么是Teleport？—— Teleport 是一种能够将我们的**组件html结构**移动到指定位置的技术。

```html
<teleport to='body' >
    <div class="modal2" v-show="isShow">
      <h2>我是一个弹窗</h2>
      <p>我是弹窗中的一些内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
</teleport>
```

注意：之前使用class="modal"无法展示这个css和div，后面修改了modal2可以展示，然后改回modal又可以了....，不知道是什么原因







## 8.2 Suspense

-  等待异步组件时渲染一些额外内容，让应用有更好的用户体验 
-  使用步骤： 
   -  异步引入组件
   -  使用`Suspense`包裹组件，并配置好`default` 与 `fallback`

```tsx
import { defineAsyncComponent,Suspense } from "vue";
const Child = defineAsyncComponent(()=>import('./Child.vue'))
```

```vue
<template>
    <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
          <template v-slot:default>
            <Child/>
          </template>
          <template v-slot:fallback>
            <h3>加载中.......</h3>
          </template>
        </Suspense>
    </div>
</template>
```

注意与插槽的区别：

- 插槽调用子组件使用的双标签，suspense调用子组件使用的是单标签
- 插槽使用子组件标签双标签包裹template，suspense使用template包裹单标签子组件





使用如下：

- 用Suspense包裹template，template包裹子组件调用





## 8.3 全局API转移到应用对象

- `app.component`：在main.ts中可以设置全局组件

  ```vue
  app.component('hello',hello)
  ```

- `app.config`：在main.ts中可以配置全局变量

  ```vue
  app.config.globalOroperties.x= 99
  ```

- `app.directive`：可以注册全局指令

  ```vue
  app.directive('beauty'()=>{})
  
  使用过程
  <h2 v-beauty=“1”></h2>
  ```

- `app.mount`：挂载应用
- `app.unmount`：卸载应用
- `app.use`：安装插件（之前用于安装路由）



将vue2中的vue.=>app.

## 8.4 其他

- 过渡类名 `v-enter` 修改为 `v-enter-from`、过渡类名 `v-leave` 修改为 `v-leave-from`。


- `keyCode` 作为 `v-on` 修饰符的支持。

- `v-model` 指令在组件上的使用已经被重新设计，替换掉了 `v-bind.sync。`

- `v-if` 和 `v-for` 在同一个元素身上使用时的优先级发生了变化。

- 移除了`$on`、`$off` 和 `$once` 实例方法。

- 移除了过滤器 `filter`。

- 移除了`$children` 实例 `propert`。

  ......



更多详细可以从vue3迁移指南可以查询更多
