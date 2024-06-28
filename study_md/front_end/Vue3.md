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



# 0.课程介绍

本文件是bilibili尚硅谷的Vue3课程笔记，发布时间是2023年12月





# 1.Vue3 简介

Vue3在2020年9月18日发布，代号one piece

## 1.1 性能的提升

- 打包大小减少41%
- 初次渲染快55%，更新渲染快133%
- 内存减少54%



## 1.2 源码的提升

- 使用Proxy代替defineProperty实现响应式
- 重写虚拟DOM的实现和Tree-Shaking





## 1.3 拥抱TypeScript

- Vue3可以更好的支持TypeScript





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







## 2.2 基于vite创建（推荐）

vite是新一代前端构建工具，官网地址：https//vitejs.cn ,vite的优势如下：

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

![vite](../../public/vue3/vite_create.PNG)

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









# 3.Vue核心语法

上述简单效果使用vue2，其中配置data、methods属于是选项式API

## 3.1 OptionsAPI与CompositionAPI

- Vue2的API设计式Options（配置）风格的
- Vue3的API设计式Composition（组合）风格的



**Options API的弊端**

Options类型的API，数据、方法、计算属性等，是分散在data、methods、computed中的，若向新增或修个一个需求，

就需要分别修改data、methods、computed，不便于维护和复用

具体的详细分析[做了一夜动画，就为让大家更好的理解Vue3的Composition Api - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv10685553/)



**Composition的优势**

可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起



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

 	` import xxx from 'vite-plugin-vue-setup-extend'`

3. vite.config.ts中追加调用

   ` plugins:[vue(),xx()]`

4. 在script中应用

``` vue
<script lang="ts" setup name="person">
 ...
</script>
```

此外，如果工作中组件名和文件名相同，可以不写组件名



## 3.3 ref创建：基本类型的响应式数据

## 3.4 reactive创建：对象类型的响应式数据

## 3.5 ref创建：对象类型的响应式数据

## 3.6 ref 对比reactive

## 3.7 toRefs与toRef



# 4.路由



# 5.pinia

# 6.组件通信

# 7.其他API

# 8.Vue3新组件

