# 课程介绍

2022年发布的视频，课程来源vue+DRF+django项目部署

下面是javascript相关语法



> javaScript 中对数组和对象的增删改查操作是开发中常见且基础的操作。下面我将分别介绍数组和对象的常见操作方法。
>
> 数组的增删改查操作
>
> 增加元素
>
> 1. **使用 `push()` 方法添加元素到数组末尾：**
>
>    ```javascript
>    let arr = [1, 2, 3];
>    arr.push(4);
>    console.log(arr); // [1, 2, 3, 4]
>    ```
>
> 2. **使用 `unshift()` 方法添加元素到数组开头：**
>
>    ```javascript
>    let arr = [2, 3];
>    arr.unshift(1);
>    console.log(arr); // [1, 2, 3]
>    ```
>
> 3. **使用 `splice()` 方法在指定位置插入元素：**
>
>    ```javascript
>    let arr = [1, 2, 4];
>    arr.splice(2, 0, 3);
>    console.log(arr); // [1, 2, 3, 4]
>    ```
>
> 删除元素
>
> 1. **使用 `pop()` 方法删除数组末尾的元素：**
>
>    ```javascript
>    let arr = [1, 2, 3];
>    arr.pop();
>    console.log(arr); // [1, 2]
>    ```
>
> 2. **使用 `shift()` 方法删除数组开头的元素：**
>
>    ```javascript
>    let arr = [1, 2, 3];
>    arr.shift();
>    console.log(arr); // [2, 3]
>    ```
>
> 3. **使用 `splice()` 方法删除指定位置的元素：**
>
>    ```javascript
>    let arr = [1, 2, 3, 4];
>    arr.splice(1, 1); // 从索引 1 开始删除 1 个元素
>    console.log(arr); // [1, 3, 4]
>    ```
>
> 修改元素
>
> 直接通过索引访问并修改数组中的元素：
>
> ```javascript
> let arr = [1, 2, 3];
> arr[1] = 10;
> console.log(arr); // [1, 10, 3]
> ```
>
> 查询元素
>
> 使用数组的索引进行访问：
>
> ```javascript
> let arr = [1, 2, 3];
> console.log(arr[1]); // 2
> ```
>
> 对象的增删改查操作
>
> 增加属性
>
> 直接给对象添加新的属性：
>
> ```javascript
> let obj = { name: 'Alice', age: 25 };
> obj.city = 'New York';
> console.log(obj); // { name: 'Alice', age: 25, city: 'New York' }
> ```
>
> 删除属性
>
> 使用 `delete` 关键字删除对象的属性：
>
> ```javascript
> let obj = { name: 'Bob', age: 30, city: 'London' };
> delete obj.age;
> console.log(obj); // { name: 'Bob', city: 'London' }
> ```
>
> 修改属性
>
> 直接修改对象的属性值：
>
> ```javascript
> let obj = { name: 'Charlie', age: 28 };
> obj.age = 29;
> console.log(obj); // { name: 'Charlie', age: 29 }
> ```
>
> 查询属性
>
> 直接通过属性名访问对象的属性：
>
> ```javascript
> let obj = { name: 'David', age: 35 };
> console.log(obj.age); // 35
> ```
>
> 注意事项
>
> - **数组和对象的遍历**：可以使用 `for...of` 循环、`forEach()` 方法等遍历数组，使用 `for...in` 循环遍历对象的属性。
> - **数组和对象的复制**：复制数组可以使用 `slice()` 方法或扩展运算符 `...`，复制对象可以使用 `Object.assign()` 方法或对象解构。



下面是关于本课程常见的javacript代码进行解析

> **Vue.js 的部分：**
>
> ```javascript
> var app = new Vue({
>     el: "#app",
>     data: {
>         dataList: [
>             {"name": "king", "age": 18},
>             {"name": "shit", "age": 218},
>         ]
>     },
>     methods: {
>         addUser: function() {
>             let row = {name: this.user, age: this.age};
>             this.dataList.push(row);
>             this.user = "";
>             this.age = "";
>         },
>         deleteRow: function(idx) {
>             this.dataList.splice(idx, 1);
>         },
>         editRow: function(event) {
>             let idx = event.target.dataset.idx;
>             // 这里可以继续实现编辑功能
>         }
>     }
> });
> ```
>
> **JavaScript 的部分：**
>
> ```javascript
> editRow: function(event) {
>     let idx = event.target.dataset.idx;
>     // 这里可以继续实现编辑功能
> }
> ```
>
> 事件对象 (`event`) 是JavaScript中的概念，用于在事件处理函数中获取触发事件的相关信息，如`event.target`可以获取触发事件的DOM元素，`event.currentTarget`可以获取当前绑定事件处理函数的元素。
>
> 数据属性 (`dataset`) 允许直接访问和操作HTML元素上的`data-*`属性。
>
> ES6语法 (`let`) 是ECMAScript 6中引入的块级作用域声明变量的关键字，与`var`的不同之处在于作用域的范围。
>
> 通过上述分析，可以清楚地看到Vue.js提供了一套更高级和便捷的方式来操作和管理前端应用程序的数据和交互，同时依赖于JavaScript作为其基础语言和执行环境。这种结合使得开发者能够更高效地开发和维护复杂的前端应用。



# 第二部分：前端开发

关于vue.js的版本

- vue2，经典版本
- vue3，趋势

本课程以vue2为主



## 1.Vue.js初体验

基于vue.js框架来编写项目需要以下几个步骤

- 导入vue.js包（CDN）

  ``` javascript
  <!-- 开发环境版本，包含了有帮助的命令行警告-->
  <script src = "https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  
  <!-- 生产环境版本，优化了尺寸和速度-->
  <script src = "https://cdn.jsdelivr.net/npm/vue@2/"></script>
  
  #当然，也可以将文件下载下了再通过本地导入
  ```

  

- 应用

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script src="vue.js"></script>
  
  </head>
  <body>
      <div id="app">
          <h1>欢迎学习Vue.js</h1>
          <div>我叫{{ name }}, 微信 {{ wechat }}</div>
          <input type="button" value="点我" v-on:click="clickMe">
      </div>
  
  <script>
      var app = new Vue({
          el: "#app",
          data: {
              name: "king",
              wechat: "22717551524"
          },
          methods: {
              clickMe: function () {
                  this.name = "alex";
                  this.wechat = "king16666";
              }
          }
      });
  </script>
  
  </body>
  </html>
  
  ```

  后期编写前端代码使用IDE:WebStom（与Pycharm是一家子）



## 2.Vue常见指令

想要使用vue.js来进行开发，就必须使用vue.js中提供的指令，明白每个指令是什么意思



### 2.1 插值表达式

> Vue.js 中的插值表达式（Interpolation）是一种将数据绑定到 HTML 元素的语法。它使用双大括号 `{{ }}` 来标识，例如 `{{ message }}`，其中 `message` 是 Vue 实例中的一个数据属性。
>
> 
>
> 如何使用插值表达式：
>
> 在 HTML 中，你可以将插值表达式放置在文本内容或者属性值中，例如：
>
> ```html
> <div id="app">
>   {{ message }}
> </div>
> ```
>
> 在上面的例子中，`{{ message }}` 将会被 Vue 实例中 `message` 属性的值替换，并显示在 `<div>` 元素中。
>
> 
>
> Vue 实例中的数据定义：
>
> 在 Vue 实例中，你需要定义数据对象，并将其绑定到 HTML 中的插值表达式。
>
> ```javascript
> var app = new Vue({
>   el: '#app',
>   data: {
>     message: 'Hello Vue!'
>   }
> });
> ```
>
> 在这个例子中，我们创建了一个 Vue 实例 `app`，并在 `data` 对象中定义了 `message` 属性，它的初始值是 `'Hello Vue!'`。
>
> 
>
> 插值表达式的实时响应：
>
> Vue.js 提供了响应式的数据绑定机制，当 `message` 的值在 Vue 实例中发生变化时，插值表达式 `{{ message }}` 在 HTML 中会自动更新为最新的值。
>
> 
>
> 使用示例：
>
> ```html
> <div id="app">
>   <p>{{ message }}</p>
>   <a v-bind:href="url">{{ linkText }}</a>
> </div>
> 
> <script>
> var app = new Vue({
>   el: '#app',
>   data: {
>     message: 'Hello Vue!',
>     url: 'https://example.com',
>     linkText: 'Go to Example'
>   }
> });
> </script>
> ```
>
> 在这个示例中：
>
> - `{{ message }}` 将会显示 `Hello Vue!`。
> - `<a v-bind:href="url">{{ linkText }}</a>` 使用了 Vue 的指令 `v-bind` 来动态绑定 `<a>` 标签的 `href` 属性到 Vue 实例中的 `url` 数据属性。
> - `{{ linkText }}` 在 `<a>` 标签的文本内容中显示 `Go to Example`。
>
> 通过插值表达式，Vue.js 提供了一种简单而强大的方法，用于将数据动态地绑定到 HTML 中，实现数据驱动的视图更新。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="vue.js"></script>

</head>
<body>
    <div id="app">
        <h1>欢迎学习Vue.js</h1>
        <div>我叫{{ name }}, 我喜欢 {{ hobby }},邮箱{{dataInfo.email}}</div>
        <ul>
            <li>{{"李杰"}}</li>
            <li>{{"李杰"+"shit"}}</li>
            <li>{{base + 1 + 1}}</li>
            <li>{{1 == 1 ? "李杰":"king"}}</li>
        </ul>
        <ul>
            <li>{{condition?"历届":"king"}}</li>
        </ul>
        <input type="button" value="点我" v-on:click="clickMe">
    </div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            name: "king",
            hobby:"吃饭",
            dataInfo:{
                id:1,
                email:"xxx.com"
            },
            condition:false,
            base:1
        },
        methods: {
            clickMe: function () {
                this.name = "不知道";
                this.condition = true;
                this.dataInfo.email = "shtiejgeg.com"
                this.base +=100;

            }
        }
    });
</script>

</body>
</html>
```

### 2.2 指令：v-bind

一般用于对标签中的属性进行操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
    <style>
        .ig {
            border: 2px solid red;
        }
    </style>
</head>
<body>
<div id="app">
    <!-- 第一张图片 -->
    <img src="xx.png" alt="First Image" class="c1"/>

    <!-- 第二张图片，使用 Vue.js 动态绑定图片路径和类名 -->
    <img v-bind:src="imageUrl" alt="Dynamic Image" class="c1s" :class="cls"/>
    <h1 v-bind:class="{info:v1,danger:v2}">你好</h1>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            imageUrl: "./image/picture.PNG",  // 修改为正确的图片路径，假设图片放在 images 文件夹下
            cls: 'ig'  // 类名绑定，假设想要应用 .ig 类的样式
        }
    });
</script>

</body>
</html>
```

v-bind注意：

- 简写的格式：属性名=xx

- v-bind属于单向绑定（js修改->html修改)

  即修改html中的对应属性，不会影响js相关内容（v-model是双向绑定）

> **`v-bind` 基本用法**
>
> `v-bind` 指令用于动态地绑定 HTML 元素的属性。以下是一个基本示例：
>
> ```html
> <div id="app">
>   <img v-bind:src="imageSrc" alt="Sample Image">
> </div>
> 
> <script>
>   new Vue({
>     el: '#app',
>     data: {
>       imageSrc: 'https://via.placeholder.com/150'
>     }
>   });
> </script>
> ```
>
> 在这个示例中，`v-bind:src` 将 Vue 实例中的 `imageSrc` 数据属性绑定到 `<img>` 标签的 `src` 属性上。
>
> **简写形式**
>
> `v-bind` 指令有一个简写形式，可以在属性名前加上 `:`。以下是等效的写法：
>
> ```html
> <div id="app">
>   <img :src="imageSrc" alt="Sample Image">
> </div>
> ```
>
> ------
>
> **绑定多个类或样式**
>
> **绑定类名**
>
> 可以使用 `v-bind` 动态绑定类名。以下是一个示例：
>
> ```html
> <div id="app">
>   <div :class="classObject">这个 div 的类名是动态绑定的</div>
> </div>
> 
> <script>
>   new Vue({
>     el: '#app',
>     data: {
>       classObject: {
>         active: true,
>         'text-danger': false
>       }
>     }
>   });
> </script>
> ```
>
> 在这个示例中，`classObject` 是一个对象，其中键是类名，值是布尔值。只有布尔值为 `true` 的类名会被绑定到元素上。
>
> **绑定样式**
>
> 可以使用 `v-bind` 动态绑定内联样式。以下是一个示例：
>
> ```html
> <div id="app">
>   <div :style="styleObject">这个 div 的样式是动态绑定的</div>
> </div>
> 
> <script>
>   new Vue({
>     el: '#app',
>     data: {
>       styleObject: {
>         color: 'red',
>         fontSize: '20px'
>       }
>     }
>   });
> </script>
> ```
>
> 在这个示例中，`styleObject` 是一个对象，其中键是 CSS 属性名，值是相应的样式值。这个对象被绑定到 `<div>` 标签的 `style` 属性上。
>
> 
>
> **绑定其他属性**
>
> **动态链接**
>
> 以下示例展示了如何使用 `v-bind` 动态绑定链接的 `href` 属性：
>
> ```html
> <div id="app">
>   <a :href="url">点击这里</a>
> </div>
> 
> <script>
>   new Vue({
>     el: '#app',
>     data: {
>       url: 'https://www.example.com'
>     }
>   });
> </script>
> ```
>
> 在这个示例中，`url` 数据属性的值被绑定到 `<a>` 标签的 `href` 属性上。
>
> 
>
> **动态属性名**
>
> `v-bind` 还可以用于动态绑定属性名。以下是一个示例：
>
> ```html
> <div id="app">
>   <button v-bind:[attributeName]="buttonValue">按钮</button>
> </div>
> 
> <script>
>   new Vue({
>     el: '#app',
>     data: {
>       attributeName: 'disabled',
>       buttonValue: true
>     }
>   });
> </script>
> ```
>
> 在这个示例中，`attributeName` 是动态属性名，其值是 `disabled`，而 `buttonValue` 是动态属性值，其值是 `true`。这会使按钮被禁用。

以下是 `v-bind:class` 的完整用法总结：

------

**1. 对象语法**

`v-bind:class` 可以接收一个对象，其中键是类名，值是布尔值。布尔值为 `true` 时，该类名会被应用到元素上。

- ```javascript
  classObject
  ```

   为对象，键是类名，值是布尔值：

  ```javascript
  {
    classA: true,
    classB: false
  }
  ```

**2. 数组语法**

`v-bind:class` 可以接收一个数组，其中每个元素是一个类名字符串。所有这些类名都会被应用到元素上。

- ```javascript
  classArray
  ```

   为数组，元素是类名字符串：

  ```javascript
  ['classA', 'classB']
  ```

**3. 混合使用对象和数组语法**

`v-bind:class` 可以接收一个包含类名字符串和对象的数组。数组中的对象可以包含键值对，键是类名，值是布尔值。

- ```
  classMix
  ```

   为数组，包含类名字符串和对象：

  ```javascript
  [
    'classA',
    {
      classB: true,
      classC: false
    }
  ]
  ```



### 2.2 指令：v-model

一般用于在交互的表中中使用，例如input、select、textares等（双向绑定）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <div>
        用户名: <input type="text" v-model="user">
    </div>
    <div>
        密码: <input type="password" v-model="pwd">
    </div>
    <input type="button" value="登录" v-on:click="clickMe">
    <input type="button" value="重置" v-on:click="resetForm">
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            user:"",
            pwd:""

        },
        methods:{
            clickMe:function (){
                console.log(this.user,this.pwd)
            },
            resetForm:function (){

            }
        }
    });
</script>

</body>
</html>
```

v-model常用标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <div>
        用户名: <input type="text" v-model="user">
    </div>
    <div>
        密码: <input type="password" v-model="pwd">
    </div>
    <div>
<!--         通常单选框使用相同name来确定同一组，但是使用了v-model=相同属性，可以省略name-->
        性别:
        <input type="radio" v-model="sex" value="0">男
        <input type="radio" v-model="sex" value="1">女
    </div>
    <div>
        爱好:
        <input type="checkbox" v-model="hobby" value="11">篮球
        <input type="checkbox" v-model="hobby" value="22">足球
        <input type="checkbox" v-model="hobby" value="33">吃饭
    </div>
    <div>
        城市:
        <select v-model="city">
            <option value="sh">上海</option>
            <option value="bj">北京</option>
            <option value="sz">深圳</option>
        </select>
    </div>
    <div>
        擅长领域:
        <select v-model="company" multiple>
            <option value="11">技术</option>
            <option value="22">销售</option>
            <option value="33">运营</option>
        </select>
    </div>
    <div>
        其他: <textarea v-model="more"></textarea>
    </div>
    <input type="button" value="注册" v-on:click="clickMe">
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            user:"",
            pwd:"",
            sex:"2",
            hobby:["22"],
            city:"sz",
            company:["22","33"],
            more:"..."
        },
        methods:{
            clickMe:function (){
                console.log(this.user,this.pwd,this.sex,this.hobby,this.city,this.company,this.more);
            },
        }
    });
</script>

</body>
</html>
```

### 2.4 指令：v-for

用户数据进行循环并展示

示例1：使用循环元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <ul>
        <li v-for="item in dataList">{{item}}</li>
    </ul>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            dataList:["king","shit","ok"]

        },
    });
</script>

</body>
</html>
```

示例2：使用循环元素和下标

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <ul>
        <li v-for="(item,idx) in dataList">{{idx}} - {{item}}</li>
    </ul>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            dataList:["king","shit","ok"]

        },
    });
</script>

</body>
</html>
```

示例3：使用字典循环键值和元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <ul>
        <li v-for="(value,key) in dataDict">{{key}} - {{value}}</li>
    </ul>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            dataDict:{
                id:1,
                age:18
                name:"xxx"
            }

        },
    });
</script>

</body>
</html>
```

示例4：使用列表循环访问元素内部属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <ul>
        <li v-for="(item) in cityList">{{item.id}} - {{item.text}}</li>
    </ul>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            cityList:[
                {id:11,text:"上海"},
                {id:22,text:"北京"},
                {id:33,text:"深圳"},
            ]

        },
    });
</script>

</body>
</html>
```

示例5：多重循环获取元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <ul>
        <li v-for="(item,idx) in cityList">
        <span v-for="{v,k} in item">{{k}} {{v}}</span>
        </li>
    </ul>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            cityList:[
                {id:11,text:"上海"},
                {id:22,text:"北京"},
                {id:33,text:"深圳"},
            ]

        },
    });
</script>

</body>
</html>
```

### 2.5 指令：v-on

事件相关的指令

```html
v-on:click
v-on:dblclick
v-on:mouseover
v-on:mouseout
v-on:change
v-on:focus
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <ul>
        <li v-on:click="clickMe">点击</li>
        <li v-on:dblclick="doSomething('双击')">双击</li>
        <li v-on:mouseover="doSomething('进入')" v-on:mouseout="doSomething('离开')">进入&离开</li>
    </ul>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {},
        methods:{
            clickMe:function(){
                alert("点击了");
            },
            doSomething:function(msg){
                console.log(msg);
            }
        }
    });
</script>

</body>
</html>
```

此外v-on:可以简写为@





### 2.6 案例：数据管理

**数据列表和动态添加**

数据的管理包括对数据：展示、动态添加、删除、修改

- 数据列表的展示

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
    <style>
        .penal {
            border:1px solid #dddddd;
            margin:20px 0 0 0;
            padding:10px;
            border-bottom:0;
            background-color:#d9d9d9;
        }
        .table {
            width:100%;
            border-collapse: collapse;
            border-spacing: 0;
        }

        .table > tbody > tr >td, .table >tbody >tr >th, .table >tfoot >tr>td,.table >tfoot>tr>th,.table>thead>tr>td{
            padding:8px;
            vertical-align: top;
            
            border:1px solid #ddd;
            text-align: left;
        }

    </style>
</head>
<body>
<div id="app">
    <h3 class="penal">数据列表</h3>
    <table class="table">
        <thead>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in dataList">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
        </tr>
        </tbody>
    </table>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            dataList: [
                {"name": "king", "age": 18},
                {"name": "shit", "age": 218},

            ]
        },
        methods: {}
    });
</script>

</body>
</html>
```

- 数据添加

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
    <style>
        .penal {
            border: 1px solid #dddddd;
            margin: 20px 0 0 0;
            padding: 10px;
            border-bottom: 0;
            background-color: #d9d9d9;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td {
            padding: 8px;
            vertical-align: top;

            border: 1px solid #ddd;
            text-align: left;
        }

    </style>
</head>
<body>
<div id="app">
    <h3 class="penal">表单区域</h3>
    <div>
        <div>
            <label> 姓名</label>
            <input type="text" v-model="user">
        </div>
        <div>
            <label> 年龄</label>
            <input type="text" v-model="age">
            <input type="button" value="添加" @click="addUser">
        </div>
    </div>
    <h3 class="penal">数据列表</h3>
    <table class="table">
        <thead>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in dataList">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
        </tr>
        </tbody>
    </table>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            dataList: [
                {"name": "king", "age": 18},
                {"name": "shit", "age": 218},

            ]
        },
        methods: {
            addUser:function(){
                let row = {name:this.user,age:this.age};
                this.dataList.push(row);
                this.user="";
                this.age="";
            }
        }
    });
</script>

</body>
</html>
```

**数据删除**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
    <style>
        .penal {
            border: 1px solid #dddddd;
            margin: 20px 0 0 0;
            padding: 10px;
            border-bottom: 0;
            background-color: #d9d9d9;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td {
            padding: 8px;
            vertical-align: top;

            border: 1px solid #ddd;
            text-align: left;
        }

    </style>
</head>
<body>
<div id="app">
    <h3 class="penal">表单区域</h3>
    <div>
        <div>
            <label> 姓名</label>
            <input type="text" v-model="user">
        </div>
        <div>
            <label> 年龄</label>
            <input type="text" v-model="age">
            <input type="button" value="添加" @click="addUser">
        </div>
    </div>
    <h3 class="penal">数据列表</h3>
    <table class="table">
        <thead>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>操作</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,idx) in dataList">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>
                <input type="button"  value="删除" @click="deleteRow(idx)">
            </td>
        </tr>
        </tbody>
    </table>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            dataList: [
                {"name": "king", "age": 18},
                {"name": "shit", "age": 218},

            ]
        },
        methods: {
            addUser:function(){
                let row = {name:this.user,age:this.age};
                this.dataList.push(row);
                this.user="";
                this.age="";
            },
            deleteRow:function(idx){
                //根据索引删除dataList数据
                this.dataList.splice(idx,1)
            }
        }
    });
</script>

</body>
</html>
```

除了上述使用函数(idx)传入参数外还有另外一种方法

```html
<input type="button" value="删除" @click="deleteRow(idx)" data-xx="123" :data-idx:"idx"/>


#当调用的函数的时候，默认会传入event参数，event参数为当前触发那个事件的对象
#在传入的event中的dataset有个xx:123
deleteRow:function(event){
	console.log(event);
	let idx = event.target.dataset.idx; # event.srcElement.dataset.idx是早期版本
	this.dataList.splice(idx,1)
}
```

但是注意，当idx为循环变量索引的时候，不能用data-idx=”idx“ 来表示这个变量

如果要表示变量，则要使用:data-idx="idx"(使用了v-bind)



> `splice` 方法确实容易让人误解，因为其名称可能暗示着与拼接（splice）有关联。实际上，JavaScript 中的 `splice` 方法用于修改数组，包括删除、插入和替换元素，而不是用于拼接（concatenate）数组。
>
> 让我们来详细解释一下 `splice` 方法的功能和命名的由来：
>
> **1. `splice` 方法的功能：**
>
> `splice` 是 JavaScript 数组对象的一个方法，用于：
>
> - **删除**数组中指定位置的元素。
> - **插入**新元素到数组中指定位置。
> - **替换**数组中指定位置的元素。
>
> 其语法如下：
>
> ```javascript
> array.splice(start, deleteCount, item1, item2, ...)
> ```
>
> - **`start`**：必需，指定开始删除或插入的位置的索引。
> - **`deleteCount`**：可选，整数，表示要删除的元素数量。
> - **`item1, item2, ...`**：可选，要添加到数组的新元素。
>
> **2. 名称的来源：**
>
> `splice` 这个名称的确容易引起混淆，因为在英语中，"splice" 的本意是拼接或连接的意思。然而，在 JavaScript 中，`splice` 方法被命名为这个名字的原因，主要是历史遗留和语言设计的选择，而非完全直接地反映其功能。
>
> **3. 为什么不使用 `delete` 或 `pop`？**
>
> - **`delete`**：`delete` 操作符用于删除对象的属性或数组中的元素，但它不会影响数组的长度，而是将删除的元素设置为 `undefined`。在数组中使用 `delete` 通常不会调整数组的长度，并且可能会导致稀疏数组。
>
>   ```javascript
>   let arr = [1, 2, 3];
>   delete arr[1];
>   console.log(arr); // [1, undefined, 3]
>   ```
>
> - **`pop`**：`pop` 方法用于从数组末尾删除一个元素，并返回该元素。它是 `splice` 的一个特例，只能删除末尾的一个元素，并且不支持插入或替换操作。
>
>   ```javascript
>   let arr = [1, 2, 3];
>   let lastElement = arr.pop(); // 返回 3，arr 变为 [1, 2]
>   ```
>
> 相比之下，`splice` 方法提供了更多的灵活性，可以在任意位置删除、插入或替换数组中的元素，这使得它在实际开发中更为常用和有用。
>
> 
>
> **总结**
>
> 虽然 `splice` 方法的命名可能不够直观，容易引起初学者的困惑，但实际上它是 JavaScript 中处理数组修改的主要方法之一，提供了丰富的功能和灵活性，能够有效地管理和操作数组数据。因此，在 JavaScript 开发中，熟练掌握 `splice` 的使用是非常重要的。

**编辑数据**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
    <style>
        .penal {
            border: 1px solid #dddddd;
            margin: 20px 0 0 0;
            padding: 10px;
            border-bottom: 0;
            background-color: #d9d9d9;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td {
            padding: 8px;
            vertical-align: top;

            border: 1px solid #ddd;
            text-align: left;
        }

    </style>
</head>
<body>
<div id="app">
    <h3 class="penal">表单区域</h3>
    <div>
        <div>
            <label> 姓名</label>
            <input type="text" v-model="user">
        </div>
        <div>
            <label> 年龄</label>
            <input type="text" v-model="age">
            <input type="button" :value="title" @click="addUser">
        </div>
    </div>
    <h3 class="penal">数据列表</h3>
    <table class="table">
        <thead>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>操作</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,idx) in dataList">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>
                <input type="button" value="删除" @click="deleteRow(idx)">
                <input type="button" value="编辑" @click="editRow" :data-idx="idx">
            </td>
        </tr>
        </tbody>
    </table>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            editIndex: undefined,
            title: "新建",
            user: "",
            age: "",
            dataList: [
                {"name": "king", "age": 18},
                {"name": "shit", "age": 218},

            ]
        },
        methods: {
            addUser: function () {
                if (this.edltIndex) {
                    //修改
                    this.dataList[this.editIndex].name = this.user;
                    this.dataList[this.editIndex].age = this.age;
                } else {
                    //新建
                    let row = {name: this.user, age: this.age};
                    this.dataList.push(row);
                }

                this.user = "";
                this.age = "";
                this.editIndex = undefined;
                this.title = "新建";
            },
            deleteRow: function (idx) {
                //根据索引删除dataList数据
                this.dataList.splice(idx, 1);
            },
            editRow: function (event) {
                let ldx = event.target.dataset.idx;

                // 常规使用
                // let name = this.dataList[idx].name;
                // let age = this.dataList[idx].age;

                //ES6的新方法，类似python解包
                // let {id,name} = {id:1,name:"king"}
                let {name, age} = this.dataList[idx];
                this.user = name;
                this.age = age;
                this.title = "编辑";
                this.editIndex = idx;


            }
        }
    });
</script>

</body>
</html>
```

上述实现，主要通过修改之前的新建数据的框，并在adduser添加分支逻辑实现编辑功能。



### 2.7 指令：v-if

条件判断

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
    <style>
        .penal {
            border: 1px solid #dddddd;
            margin: 20px 0 0 0;
            padding: 10px;
            border-bottom: 0;
            background-color: #d9d9d9;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td {
            padding: 8px;
            vertical-align: top;

            border: 1px solid #ddd;
            text-align: left;
        }

    </style>
</head>
<body>
<div id="app">
    <a v-if="isLogin">{{user}}</a>
    <a v-else="isLogin">登录</a>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            isLogin:false,
            user:"king"
        },
        methods: {
        }
    });
</script>

</body>
</html>
```

v-if、v-else-if、v-else是三个分支判断，注意当分支不成立的时候，该分支的内容不会渲染到html中



### 2.8 指令：v-show

根据条件显示或隐藏（标签都会渲染到页面）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <h1 v-show="v1">咳咳写个</h1>
    <h1 v-show="!v1">segg</h1>
</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            v1:false,
        },

    });
</script>

</body>
</html>
```

如果需要有时候显示，有时候不显示，使用v-show更合适

下面是一个更详细的例子

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
    <style>
        label {
            width:60px;
            display:inline-block;
            text-align: right;
            margin-right: 8px;
        }
    </style>
</head>
<body>
<div id="app">
    <input type="button" value="密码登录" @click="isSms=false">
    <input type="button" value="短信登录" @click="isSms=true">
    <div v-show="isSms">
        <p>
            <label>手机号</label>
            <input type="text" placeholder="手机号">
        </p>
        <p>
            <label>验证码</label>
            <input type="text" placeholder="验证码">
        </p>
    </div>
    <div v-show="!isSms">
        <p>
            <label>用户名</label>
            <input type="text" placeholder="用户名">
        </p>
        <p>
            <label>密码</label>
            <input type="text" placeholder="密 码">
        </p>
    </div>

</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            isSms: false
        },

    });
</script>

</body>
</html>

```





### 2.9 案例：用户登录

编写案例之前，现在学习一下axios，他是一个HTTP库，可以发送Http请求（在前后端分离中使用较频繁）

使用方法是通过script的src引入路径，从而调用方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style src="https//unpkg.com/axios/dist/axios.min.js"></style>
</head>
<body>


<script>
    axios({
        method:"post",
        url:"https//api.luf...ord/login",
        params:{
            v1:123,
            v2:456
        },
        data:{
            name:"武沛齐",
            pwd:"123"
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then(function (res){
        console.log(res.data);
    }).catch(function(error){
        console.log(error);
    })
</script>
</body>
</html>
```

then是请求完成后触发的函数，catch是如果发生异常触发的函数

除了用上述引入的方法，还可以使用npm安装脚手架来实现。

> `axios` 是一个基于 Promise 的 HTTP 库，可以用于浏览器和 Node.js 中发送 HTTP 请求。`axios` 简化了与服务器进行 HTTP 请求和响应的过程，并支持拦截请求和响应、转换请求数据和响应数据、取消请求、自动转换 JSON 数据等功能。
>
> 主要特点
>
> 1. **基于 Promise**：支持 Promise API，便于异步处理。
> 2. **请求和响应拦截器**：可以在请求或响应被 `then` 或 `catch` 处理之前进行拦截和处理。
> 3. **转换请求和响应数据**：支持对请求数据和响应数据进行转换。
> 4. **取消请求**：通过取消令牌，可以取消请求。
> 5. **自动转换 JSON 数据**：响应数据会被自动转换为 JSON 格式。
> 6. **浏览器支持**：可以在浏览器中处理跨域请求。
> 7. **Node.js 支持**：可以在 Node.js 环境中使用，并支持 HTTP 和 HTTPS 请求。





下面是关于用户和短信登录的实现。







