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

<br>

<br>

# 第二部分：前端开发

关于vue.js的版本

- vue2，经典版本
- vue3，趋势

本课程以vue2为主

<br>

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

<br><br>

## 2.Vue常见指令

想要使用vue.js来进行开发，就必须使用vue.js中提供的指令，明白每个指令是什么意思

<br>

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

<br>

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

<br>

### 2.3 指令：v-model

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

<br>

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

<br>

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



<br>

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

<br>

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



<br>

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





<br>

### 2.9 案例：用户登录

编写案例之前，现在学习一下axios，他是一个HTTP库，可以发送Http请求（在前后端分离中使用较频繁）

使用方法是通过script的src引入路径，从而调用方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
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



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 引入 Vue.js -->
    <script src="vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <style>
        label {
            width: 60px;
            display: inline-block;
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
            <input type="text" placeholder="手机号" v-model="sms.mobile">
        </p>
        <p>
            <label>验证码</label>
            <input type="text" placeholder="验证码" v-model="sms.code">
        </p>
    </div>
    <div v-show="!isSms">
        <p>
            <label>用户名</label>
            <input type="text" placeholder="用户名" v-model="info.username">
        </p>
        <p>
            <label>密码</label>
            <input type="password" placeholder="密 码" v-model="info.password">
        </p>
    </div>
    <input type="button" value="登录" @click="loginForm">

</div>

<script>
    var app = new Vue({
        el: "#app",
        data: {
            isSms: false,
            info: {
                username: "",
                password: "",
            },
            sms: {
                mobile: "",
                code: "",
            }
        },
        methods: {
            loginForm: function () {
                //1.获取用户输入的值
                let dataDict = this.isSms ? this.sms : this.info;
                let url;
                if (this.isSms){
                    url = "https//api.luffycity.com/api/v1/auth/mobile/login/?loginWay=mobile";
                }else{
                    url = "https://api.luffycity.com/api/v1/auth/password/login/?loginWay=password";
                }
                //2.向某个地址发送网络请求axios，以路飞学城的登录为例子
                //https://api.luffycity.com/api/v1/auth/password/login/?loginWay=password
                //{"username":"alex123,"password":"999"}
                //https://api.luffycity.com/api/v1/auth/mobile/login/?loginWay=mobile
                //{"mobile":18630087660,"code":23132}
                axios({
                    method: "post",
                    url: url,
                    data: dataDict,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (res) {
                    if(res.data.code == -1){
                        alert(res.data.msg);
                        return;
                    }
                    //登录成功后跳转
                    window.location.href = "https//www.luffycity.com"
                }).catch(function (error) {
                    alert("请求异常，请重新操作");
                })
            }
        }

    });
</script>

</body>
</html>

```



<br><br>



## 3.组件化开发

在开发过程中，我们可以将页面中某一部分的功能编写成一个组件，然后再页面上进行引用。

- 有利于划分功能模块的开发（HTML、CSS、JavaScript等相关代码都继承到组件中）
- 有利于重用

> Vue 的组件化开发是 Vue.js 提供的一种开发模式，它允许开发者将界面划分为独立、可复用的组件。组件可以包含自己的数据、逻辑和模板，从而提高代码的可维护性和可扩展性。
>
> 1. 组件的定义与注册 Vue 组件可以通过两种方式定义和注册：全局注册和局部注册。
>
> 全局注册： 在全局注册时，组件可以在任何 Vue 实例中使用。
>
> ```javascript
> Vue.component('my-component', {
>   template: '<div>A custom component!</div>'
> });
> ```
>
> 局部注册： 在局部注册时，组件只能在注册它的父组件中使用。
>
> ```javascript
> var Child = {
>   template: '<div>A custom component!</div>'
> };
> 
> new Vue({
>   el: '#app',
>   components: {
>     'my-component': Child
>   }
> });
> ```
>
> 1. 组件的使用 一旦组件被注册，就可以在模板中像自定义元素一样使用它们。
>
> ```
> html复制代码<div id="app">
>   <my-component></my-component>
> </div>
> ```
>
> 1. 组件的属性 (Props) 组件可以通过 props 接收外部数据。props 是一种自定义的属性，可以在父组件中传递数据给子组件。
>
> ```
> javascript复制代码Vue.component('child', {
>   props: ['message'],
>   template: '<div>{{ message }}</div>'
> });
> 
> new Vue({
>   el: '#app',
>   data: {
>     parentMessage: 'Hello from parent'
>   }
> });
> ```
>
> 使用 props：
>
> ```
> html复制代码<div id="app">
>   <child :message="parentMessage"></child>
> </div>
> ```
>
> 1. 组件的事件 子组件可以通过 `$emit` 方法向父组件发送事件，父组件可以监听这些事件。
>
> 子组件：
>
> ```
> javascript复制代码Vue.component('child', {
>   template: '<button @click="notify">Notify Parent</button>',
>   methods: {
>     notify() {
>       this.$emit('notify');
>     }
>   }
> });
> ```
>
> 父组件：
>
> ```
> javascript复制代码new Vue({
>   el: '#app',
>   methods: {
>     handleNotify() {
>       alert('Notification received from child');
>     }
>   }
> });
> ```
>
> 使用事件：
>
> ```
> html复制代码<div id="app">
>   <child @notify="handleNotify"></child>
> </div>
> ```
>
> 1. 插槽 (Slots) 插槽是 Vue 提供的一种内容分发机制，可以让父组件向子组件传递任意内容。
>
> ```
> javascript复制代码Vue.component('child', {
>   template: '<div><slot></slot></div>'
> });
> 
> new Vue({
>   el: '#app'
> });
> ```
>
> 使用插槽：
>
> ```
> html复制代码<div id="app">
>   <child>
>     <p>This is passed from parent</p>
>   </child>
> </div>
> ```
>
> 1. 动态组件 Vue 提供了一个 `component` 元素，可以在相同的挂载点动态切换多个组件。
>
> ```
> javascript复制代码new Vue({
>   el: '#app',
>   data: {
>     currentView: 'componentA'
>   },
>   components: {
>     componentA: { template: '<div>Component A</div>' },
>     componentB: { template: '<div>Component B</div>' }
>   }
> });
> ```
>
> 使用动态组件：
>
> ```
> html复制代码<div id="app">
>   <component :is="currentView"></component>
> </div>
> ```
>
> 1. 组件通信 在实际开发中，组件之间的通信是非常重要的。常见的组件通信方式有：
>
> props：用于父组件向子组件传递数据。 事件：用于子组件向父组件传递消息。 Vuex：用于管理全局状态，适用于复杂的应用。
>
> 组件化开发的优势 组件化开发有以下几个优势：
>
> 提高代码的可维护性：将代码分解成独立的组件，方便管理和维护。 提高代码的可复用性：组件可以在不同的地方重复使用，减少代码重复。 提高开发效率：组件化开发可以让团队成员专注于各自的组件，提高开发效率。
>
> 使用场景 组件化开发适用于各种前端开发场景，特别是以下情况：
>
> 大型单页面应用（SPA）：组件化开发可以帮助管理复杂的应用结构。 可复用的 UI 库：创建一组可复用的 UI 组件，供不同项目使用。 团队协作开发：组件化开发可以让团队成员并行开发不同的组件，提高开发效率。
>
> 通过组件化开发，Vue 可以帮助开发者构建高效、可维护的前端应用。

<br>

### 3.1 局部组件

组件应用的步骤：

1. 编写组件

2. 挂载组件到Vue中

3. html中引入组件

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="vue.js"></script>
</head>
<body>
<div id="app">
    <h1>======当前页面======</h1>
    {{ name }}
    <h1>======引入子组件======</h1>
    <Demo></Demo>
    <Bb></Bb>
    <hr/>
    <Bb></Bb>

</div>

<script>
    //创建子组件
    const Demo = {
        data: function () {
            return {
                msg: '哈哈哈'
            };
        },
        template: `
          <div>
          <h1>{{ msg }}</h1>
          <input type="text" v-model="msg">
          <input type="button" @click="showMeg" value="点我">
          </div>
        `,
        methods: {
            showMsg: function () {
                alert(this.msg);
            }
        }
    }

    //创建子组件
    const Bili = {
        //租金啊中的data是一个方法，并返回值，（与Vue对象创建不同）
        data: function () {
            return {
                dataList: [
                    {"id": 1, "title": "路费各个"},
                    {"id": 2, "title": "egegeg1"}
                ]
            }
        },
        template: `
          <div>
          <h1>数据列表</h1>
          <table border="1">
            <thead>
            <tr>
              <th>ID</th>
              <th>标题</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in dataList">
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
            </tr>
            </tbody>
          </table>
          </div>
        `,

    }


    var app = new Vue({
        el: "#app",
        data: {name:"king"},
        components: {
            //下面两种挂载方式
            Demo,
            Bb: Bili
        },
        methods: {}
    })


</script>
</body>
</html>
```



<br>

### 3.2 全局组件

和局部组件的区别在于，不用挂载，直接使用

```javascript
Vue.component( 'Demo', {

    data: function () {
        return {
            msg: '哈哈哈'
        };
    },
    template: `
      <div>
      <h1>{{ msg }}</h1>
      <input type="text" v-model="msg">
      <input type="button" @click="showMeg" value="点我">
      </div>
    `,
    methods: {
        showMsg: function () {
            alert(this.msg);
        }
    }
})
```

局部变量是创建了一个常量指向这个值，而全局变量是直接放到vue中

<br><br>

## 4.vue-router组件

vue+vue-router组件，可以实现SPA（single Page Application）,即单页面应用

单页面应用，简而言之就是项目只有一个页面。

> 单页面应用（SPA）相比传统的多页面应用（MPA）有一些明显的优势，这些优势通常是导致选择SPA的主要原因：
>
> 1. **更流畅的用户体验**：
>    - **无刷新加载**：在SPA中，页面的切换不需要重新加载整个页面，只需要加载局部内容，通过异步请求数据和更新DOM来实现页面内容的动态变化，这使得用户操作更加流畅，减少了等待时间。
>    - **快速响应**：由于大部分资源（例如JavaScript、CSS等）只需要加载一次，之后的页面切换只需加载数据，所以整体的响应速度会更快。
> 2. **前后端分离**：
>    - SPA通常采用前后端分离的架构，前端负责展示逻辑和用户交互，后端负责提供API接口和数据服务。这种架构使得开发更加模块化和团队协作更高效，前端和后端可以独立开发和部署。
> 3. **更好的维护性和扩展性**：
>    - SPA的前端逻辑通常使用组件化的方式进行开发，每个组件负责特定的功能或视图，这样可以使得代码更加模块化、可维护性更强，也更容易进行扩展和重构。
> 4. **丰富的交互和动画效果**：
>    - SPA借助现代前端框架（如Vue.js、React等）提供丰富的交互和动画效果，可以提升用户体验，比传统的多页面应用更具吸引力。
> 5. **适用于复杂应用场景**：
>    - 对于功能复杂、交互频繁的应用，如社交网络、电商平台等，使用SPA可以更好地管理复杂的前端逻辑和页面状态，提供更好的用户体验。
>
> 在选择是否要开发SPA时，通常考虑以下情况：
>
> - **应用的复杂度**：如果应用有复杂的前端逻辑和多种交互需求，SPA能更好地管理和展示这些内容。
> - **用户体验要求**：如果用户期望快速响应、无刷新体验和流畅的页面切换，SPA通常是更好的选择。
> - **前后端分离需求**：如果团队希望实现前后端完全分离，SPA能更好地支持这种架构。
> - **开发团队的技术栈**：如果团队已经熟悉了现代前端框架（如Vue.js、React等），开发SPA会更加高效和顺畅。
>
> 总之，SPA在提升用户体验、简化开发维护、支持前后端分离等方面具有显著优势，特别适合需要高交互性和复杂页面逻辑的现代Web应用。

一个页面如何呈现多种页面效果呢？

- 基于vue开发多个组件，例如活动组件，课程组件，咨询组件
- 再页面上vue-router用来管理这些组件，用户点击某个按钮，就显示特定的组件（数据基于Ajax获取）

> 当使用 AJAX（Asynchronous JavaScript and XML）进行数据交换时，通常会涉及到发送 HTTP 请求并处理服务器响应。这种技术使得在不刷新整个页面的情况下，能够通过 JavaScript 发送请求并获取数据，从而改善用户体验和页面性能。以下是 AJAX 的基本使用步骤和一些常见的使用场景：
>
> AJAX 的基本步骤
>
> 1. **创建 XMLHttpRequest 对象：**
>
>    AJAX 最常用的方式是使用 XMLHttpRequest 对象。创建一个新的 XMLHttpRequest 实例：
>
>    ```javascript
>    var xhr = new XMLHttpRequest();
>    ```
>
> 2. **指定请求参数：**
>
>    使用 `open` 方法设置 HTTP 请求的方法（GET、POST 等）、URL 和是否异步执行（默认为 true）：
>
>    ```javascript
>    
>    xhr.open('GET', 'https://api.example.com/data', true);
>    ```
>
>    如果是 POST 请求，可以在 `open` 方法后设置请求头和发送的数据类型：
>
>    ```javascript
>    
>    xhr.setRequestHeader('Content-Type', 'application/json');
>    ```
>
> 3. **发送请求：**
>
>    使用 `send` 方法发送请求。对于 GET 请求，不需要传递参数；对于 POST 请求，可以将数据作为参数传递给 `send` 方法：
>
>    ```javascript
>    xhr.send();
>    // 或者发送包含数据的 POST 请求
>    xhr.send(JSON.stringify({ key: 'value' }));
>    ```
>
> 4. **处理响应：**
>
>    使用 `onreadystatechange` 属性指定当 `readyState` 属性改变时的回调函数。在回调函数中，通常检查 `xhr.readyState` 和 `xhr.status` 来确定请求状态和响应状态：
>
>    ```javascript
>    xhr.onreadystatechange = function() {
>        if (xhr.readyState == XMLHttpRequest.DONE) {
>            if (xhr.status == 200) {
>                console.log(xhr.responseText);
>                // 处理响应数据
>            } else {
>                console.error('请求失败');
>            }
>        }
>    };
>    ```
>
>    在上述示例中：
>
>    - `xhr.readyState == XMLHttpRequest.DONE` 表示请求已完成。
>    - `xhr.status == 200` 表示服务器成功处理了请求。
>
> Fetch API 替代方案
>
> Fetch API 是现代 JavaScript 的替代 AJAX 技术，使用更简洁，并返回 Promise 对象。与 XMLHttpRequest 相比，它支持链式调用和更现代化的语法：
>
> ```javascript
> fetch('https://api.example.com/data')
>     .then(response => {
>         if (!response.ok) {
>             throw new Error('请求失败');
>         }
>         return response.json();
>     })
>     .then(data => {
>         console.log(data);
>         // 处理响应数据
>     })
>     .catch(error => {
>         console.error('发生错误:', error);
>     });
> ```
>
> 使用场景
>
> AJAX 可以应用于多种场景，包括但不限于：
>
> - **动态加载数据：** 在用户交互过程中，根据用户行为动态获取和展示数据，而不需要刷新整个页面。
> - **表单提交和验证：** 使用 AJAX 异步提交表单数据，并根据服务器返回的结果更新页面状态或显示验证信息。
> - **轮询和长轮询：** 定期向服务器发送请求以更新数据或实时通信（如聊天应用）。
>
> 注意事项
>
> - **跨域问题：** AJAX 请求受同源策略限制，需要考虑跨域请求时的安全性和解决方案（如 CORS 设置或代理）。
> - **错误处理：** 始终要考虑网络或服务器错误情况下的适当处理，以提供更好的用户体验。
>
> 通过 AJAX，前端可以与后端服务器进行异步通信，从而实现动态交互和数据加载，是现代 Web 应用开发中不可或缺的技术之一。

<br>

### 4.1 下载和引用

官方地址：https://router.vuejs.org/zh/

下载地址：https://unpkg.com/vue-router@4

此外还可以使用npm下载和引入







### 4.2 快速上手

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            margin:0

        }
        .container {
            width: 980px;
            margin:0 auto;
        }

        .menu {
            height: 48px;
            background-color:#499ef3;
            line-height: 48px;
        }
        .menu a{
            color:white;
            text-decoration: none;
            padding:0 10px;
        }
    </style>
    <script src="vue.js"></script>
    <script src="vue-router.js"></script>
</head>
<body>
<div id="app">
    <div class="menu">
        <div class="container">
            <router-link to="/">Logo</router-link>
            <router-link to="/home">首页</router-link>
            <router-link to="/course">课程</router-link>
            <router-link to="/news">资讯</router-link>
        </div>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
<script>
    const Home = {template:`<div>首页内容...</div>`}
    const Course = {template:`<div>课程内容...</div>`}
    const News = {template:`<div>资讯内容...</div>`}

    const router = new VueRouter({
        routers:[
            {path:'/',component:Home},
            {path:'/home',component:Home},
            {path:'/course',component:Course},
            {path:'/news',component:News},
        ],
    })

    var app = new Vue({
        el:"#app",
        data:{
            name:"king",
        },
        methods:{},
        router:router
    })


</script>


</body>
</html>
```

router-link被点击，调用to组件到router-view中





```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            margin: 0;
        }
        .container {
            width: 980px;
            margin: 0 auto;
        }
        .menu {
            height: 48px;
            background-color: #499ef3;
            line-height: 48px;
        }
        .menu a {
            color: white;
            text-decoration: none;
            padding: 0 10px;
        }
    </style>
    <script src="vue.js"></script>
    <script src="vue-router3.65.js"></script>

</head>
<body>
<div id="app">
    <div class="menu">
        <div class="container">
            <router-link to="/">Logo</router-link>
            <router-link to="/home">首页</router-link>
            <router-link to="/course">课程</router-link>
            <router-link to="/news">资讯</router-link>
        </div>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
<script>
    const Home = {template: `<div>首页内容...</div>`};
    const Course = {template: `<div>课程内容...</div>`};
    const News = {template: `<div>资讯内容...</div>`};

    const router = new VueRouter({
        routes: [
            { path: '/', component: Home },
            { path: '/home', component: Home },
            { path: '/course', component: Course },
            { path: '/news', component: News },
        ],
    });

    var app = new Vue({
        el: "#app",
        data: {
            name: "king",
        },
        methods: {},
        router: router
    });
</script>
</body>
</html>
```

PS:顺便说明一下，vue2对应的vue-router版本是2和3，vue3对应版本是3和4，如果版本不对，没有效果

此外上述使用方法只在vue2、vue-router3版本适用（主要是new VueRouter这个地方）



#### 案例：路飞学城







上述代码涉及到了组件的created函数和mounted函数，下面分析两个函数

- created函数：组件创建完成之后自动触发【此时组件的对象已创建，但还未将页面先关的DOM创建并显示在页面上】
  - 可以去操作组件，例如this.courseList = ...
  - 不可以去操作DOM，例如document.getelementById (html对应的DOM未创建)
- mounted函数：DOM对象已经在页面上生成

接着，说明一下关于then函数的使用，function和箭头函数

- function（res）{}：这个函数的this指向window
- （res）= >{}：这个函数的this指向vue对象





### 4.3 路由与传值

如何来定义动态路由呢？

- 定义路由

  ```javascript
  const router = new VueRouter({
      routes:[
          {path:'/',component:Home},
          {path:'/course',component:Course,name:"Course"},
          {path:'/detail/:id',component:Detail,name:"Detail"},
      ]
  })
  ```

- HTML展示

  ```html
  <div>
      <router-link to="/">首页</router-link>
      <router-link to="/course">课程</router-link>
      
      #下面是动态的
      <router-link :to="{path:'/course'}">课程</router-link>
      <router-link :to="{path:'/course?size=19&page=2'}">课程</router-link>
      #和上一条一样效果，但是没写死，例如可以写size:data
      <router-link :to="{path:'/course',query:{size:19,page:2}">课程</router-link>
      
      
      #下面是基于name找路由
      <router-link :to="{name:'Course'}">课程</router-link>
      <router-link :to="{name:'Course',query:{size:19,page:2}}">课程</router-link>
      
      
      <router-link :to="{path:'detail/2',query:{size:123}}">Linux</router-link>
      <router-link :to="{name:'Detail',params:{id:3},query:{size:29}}">网络安全</router-link>
  </div>
  
  <h1>
      内容区域
  </h1>
  <router-view></router-view>
  ```

- 组件获取URL传值和GET参数

  ```javascript
  const Detail = {
      data:function(){
          return {
              title:"详细页面",
              paramDict:null,
              queryDict:null,
          }
      },
      created:function(){
          this.paramDict = this.$route.params;
          this.queryDict = this.$route.query;
          //发送axios请求，做页面呈现
      },
      template:`
      <div>
      	<h2>{{title}}</h2>
      	<div>当前请求的数据{{paramDict}} {{queryDict}}</div>
      </div>
      `
  }
  ```





#### 案例：路飞学城（2）

完成点击课程，将课程的详细页面返回

重点需要修改course组件里面的template

总共需要添加三个部分：

1. course组件里面的template，将对应课程的添加路由组件地址
2. 添加课程对应的路由组件地址Detail
3. 将新组件添加到VueRouter组件中



```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            margin: 0;
        }

        .container {
            width: 1100px;
            margin: 0 auto;
        }

        .menu {
            height: 48px;
            background-color: #499ef3;
            line-height: 48px;
        }

        .menu a {
            color: white;
            text-decoration: none;
            padding: 0 10px;
        }

        .course-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .course-list .item{
            width: 240px;
            padding: 10px;
            border:1px solid #dddddd;

        }

        a {
            text-decoration: none;
        }
        img {
            width: 80px;
            height: 50px;
        }
    </style>
    <script src="vue.js"></script>
    <script src="vue-router3.65.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


</head>
<body>
<div id="app">
    <div class="menu">
        <div class="container">
            <router-link to="/">路飞学城</router-link>
            <router-link to="/home">首页</router-link>
            <router-link to="/course">课程</router-link>
            <router-link to="/news">资讯</router-link>
        </div>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
<script>
    const Home = {
        data: function () {
            return {
                title: "欢迎使用路飞学城"
            }
        },
        template: `<h2>{{ title }}</h2>`
    };
    const Course = {
        data: function () {
            return {
                courseList: []
            }
        },
        created: function () {
            axios({
                methods: "get",
                url: "https://api.luffycity.com/api/v1/course/actual/?limit=5&offset=0",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                this.courseList = res.data.data.result;
            })

        },
        mounted: function () {

        },
        template:
                `
                    <div class="course-list">
                      <div class="item" v-for="item in courseList" :key="item.id">
                        <router-link :to="{name:'Detail',params:{id:item.id}}">
                          <img :src="item.cover" alt="">
                          <a>{{ item.name }}</a>
                        </router-link>
                      </div>
                    </div>

                `
    };
    const News = {
        data: function () {
            return {
                dataList: []
            }
        },
        created: function () {
            axios({
                methods: "get",
                url: "https://api.luffycity.com/api/v1/course/actual/?limit=5&offset=0",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                this.dataList = res.data.data.result;
            })

        },
        template: `
          <ul>
          <li v-for="item in dataList">{{item.name}}</li>
          </ul>`
    };

    const Detail = {
        data:function(){
            return {
                title:"详细页面",
                courseId:null
            }
        },
        created:function(){
            this.courseId = this.$route.params.id;
        },
        template:`
          <div>
          <h2>课程详细页面</h2>
          <div>当前课程ID为{{ courseId }}</div>
          </div>
        `

    }

    const router = new VueRouter({
        routes: [
            {path: '/', component: Home},
            {path: '/home', component: Home},
            {path: '/course', component: Course},
            {path: '/news', component: News},
            {path: '/detail/:id', component: Detail,name:"Detail"},

        ],
    });

    var app = new Vue({
        el: "#app",
        data: {
            name: "king",
        },
        methods: {},
        router: router
    });
</script>
</body>
</html>
```

course的template，添加路由指向detail组件

```vue
template:
        `
            <div class="course-list">
              <div class="item" v-for="item in courseList" :key="item.id">
                <router-link :to="{name:'Detail',params:{id:item.id}}">
                  <img :src="item.cover" alt="">
                  <a>{{ item.name }}</a>
                </router-link>
              </div>
            </div>

        `
```

detail组件

```vue
const Detail = {
    data:function(){
        return {
            title:"详细页面",
            courseId:null
        }
    },
    created:function(){
        this.courseId = this.$route.params.id;
    },
    template:`
      <div>
      <h2>课程详细页面</h2>
      <div>当前课程ID为{{ courseId }}</div>
      </div>
    `

}
```

VueRouter对象添加detail组件

```vue
const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/home', component: Home},
        {path: '/course', component: Course},
        {path: '/news', component: News},
        {path: '/detail/:id', component: Detail,name:"Detail"},

    ],
});
```

上述说明了params的传参方式，query的传参方式类似

ps:\$route的route是vue全局变量，  \$route 表明访问当前路由 



### 4.4 无法刷新

对于开发过程中，如果涉及到同一个路由的跳转，默认不会重新加载页面，数据无法获取。

例如：在详细页面再出现一个课程推荐，：在课程详细，点击推荐的课程后跳转到详细页面（课程ID不同），此时的课程ID还是加载原来的ID，无法获取推荐课程的ID

同路由跳转，不会触发组件的created方法

<br>

**如何解决?**

在课程详细的组件中设置watch属性即可，watch可以检测$route值，一旦发生便会，就执行相应的函数

```javascript
const Detail = {
	data:function(){
		return{
            title:"详细页面",
            courseId:null,
        }
	},
    created:function(){
        this.courseId = this.$route.params.id;
        this.getCCourseDetail();
    },
    watch:{
        #设置监听route，to表明要改变的值，from表明原来的值
        $route:function(to,from){
            this.courseId = to.params.id;
            this.getCourseDetail();
        }
    },
    methods:{
        getCourseDetail:function(){
            
        }
    }
}
```

完成同路由跳转的案例

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            margin: 0;
        }

        .container {
            width: 1100px;
            margin: 0 auto;
        }

        .menu {
            height: 48px;
            background-color: #499ef3;
            line-height: 48px;
        }

        .menu a {
            color: white;
            text-decoration: none;
            padding: 0 10px;
        }

        .course-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .course-list .item {
            width: 240px;
            padding: 10px;
            border: 1px solid #dddddd;

        }

        a {
            text-decoration: none;
        }

        img {
            width: 80px;
            height: 50px;
        }
    </style>
    <script src="vue.js"></script>
    <script src="vue-router3.65.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


</head>
<body>
<div id="app">
    <div class="menu">
        <div class="container">
            <router-link to="/">路飞学城</router-link>
            <router-link to="/home">首页</router-link>
            <router-link to="/course">课程</router-link>
            <router-link to="/news">资讯</router-link>
        </div>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
<script>
    const Home = {
        data: function () {
            return {
                title: "欢迎使用路飞学城"
            }
        },
        template: `<h2>{{ title }}</h2>`
    };
    const Course = {
        data: function () {
            return {
                courseList: []
            }
        },
        created: function () {
            axios({
                methods: "get",
                url: "https://api.luffycity.com/api/v1/course/actual/?limit=5&offset=0",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                this.courseList = res.data.data.result;
            })

        },
        mounted: function () {

        },
        template:
                `
                  <div class="course-list">
                  <div class="item" v-for="item in courseList" :key="item.id">
                    <router-link :to="{name:'Detail',params:{id:item.id}}">
                      <img :src="item.cover" alt="">
                      <a>{{ item.name }}</a>
                    </router-link>
                  </div>
                  </div>

                `
    };
    const News = {
        data: function () {
            return {
                dataList: []
            }
        },
        created: function () {
            axios({
                methods: "get",
                url: "https://api.luffycity.com/api/v1/course/actual/?limit=5&offset=0",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                this.dataList = res.data.data.result;
            })

        },
        template: `
          <ul>
          <li v-for="item in dataList">{{ item.name }}</li>
          </ul>`
    };

    const Detail = {
        data: function () {
            return {
                title: "详细页面",
                courseId: null,
                hotCourseList: [
                    {id: 1000, title: "python全栈开发"},
                    {id: 2000, title: "异步编程"},
                ],
            }
        },
        created: function () {
            this.courseId = this.$route.params.id;
            //此处可以根据课程ID，发送ajax请求获取课程详细信息
        },

        watch: {
            // #设置监听route，to表明要改变的值，from表明原来的值
            $route: function (to, from) {
                this.courseId = to.params.id;
                //此处同样根据课程ID，发哦是那个ajax请求获取课程详细信息
                this.getCourseDetail();
            }
        },
        methods:{
            getCourseDetail :function () {
                //根据this.courseId获取课程详细信息
            }
        },

        template: `
          <div>
          <h2>课程详细页面</h2>
          <div>当前课程ID为: {{ courseId }}</div>
          <ul>
            <li v-for="item in hotCourseList">
              <router-link :to="{name:'Detail',params:{id:item.id}}">{{ item.title }}</router-link>
            </li>
          </ul>

          </div>
        `

    }

    const router = new VueRouter({
        routes: [
            {path: '/', component: Home},
            {path: '/home', component: Home},
            {path: '/course', component: Course},
            {path: '/news', component: News},
            {path: '/detail/:id', component: Detail, name: "Detail"},

        ],
    });

    var app = new Vue({
        el: "#app",
        data: {
            name: "king",
        },
        methods: {},
        router: router
    });
</script>
</body>
</html>
```



### 4.5 路由嵌套和案例

对于页面点击按钮，在页面的部分发送改变，这个可以通过路由的嵌套实现。

```javascript
const router = new VueRouter({
    routes:[
        {
            path:'/pins/',
            components:Pins,
            children:[
                {
                //当/pins/hot 匹配成功，
                //Hot组件会被渲染在Pins的<router-view>中
                path:'hot',
                component:Hot
                },
                {
                    //当/pins/following匹配成功，
                    //Following组件，会被渲染在Pins的<router-view>中
                    path:'following',
                    component:Following
                }
            ]
		}
    ]
})
```



#### 案例：路飞学城（3）

在编写代码的时候遇到下面的情况

```javascript
   const Hot = {
        data: function () {

        },
        template: `
          <div><h2>Hot界面</h2></div>
        `
    };

    const Following = {
        data: function () {

        },
        template: `
          <div><h2>Following界面</h2></div>
        `
    };
```

错误代码

```javascript
 const Hot = {
    data: function () {
        return {}
    },
    template: `
      <div><h2>Hot界面</h2></div>
    `
};

const Following = {
    data: function () {
        return {}
    },
    template: `
      <div><h2>Following界面</h2></div>
    `
};
```

正确代码

上面的代码差别在于data里的return，（空函数）从而导致了没有渲染到该组件的template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            margin: 0;
        }

        .container {
            width: 1100px;
            margin: 0 auto;
        }

        .menu {
            height: 48px;
            background-color: #499ef3;
            line-height: 48px;
        }

        .menu a {
            color: white;
            text-decoration: none;
            padding: 0 10px;
        }

        .course-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .course-list .item {
            width: 240px;
            padding: 10px;
            border: 1px solid #dddddd;

        }

        a {
            text-decoration: none;
        }

        img {
            width: 80px;
            height: 50px;
        }
    </style>
    <script src="vue.js"></script>
    <script src="vue-router3.65.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


</head>
<body>
<div id="app">
    <div class="menu">
        <div class="container">
            <router-link to="/">路飞学城</router-link>
            <router-link to="/pins">沸点</router-link>
            <router-link to="/home">首页</router-link>
            <router-link to="/course">课程</router-link>
            <router-link to="/news">资讯</router-link>
        </div>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
<script>
    const Home = {
        data: function () {
            return {
                title: "欢迎使用路飞学城"
            }
        },
        template: `<h2>{{ title }}</h2>`
    };
    const Course = {
        data: function () {
            return {
                courseList: []
            }
        },
        created: function () {
            axios({
                methods: "get",
                url: "https://api.luffycity.com/api/v1/course/actual/?limit=5&offset=0",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                this.courseList = res.data.data.result;
            })

        },
        mounted: function () {

        },
        template:
                `
                  <div class="course-list">
                  <div class="item" v-for="item in courseList" :key="item.id">
                    <router-link :to="{name:'Detail',params:{id:item.id}}">
                      <img :src="item.cover" alt="">
                      <a>{{ item.name }}</a>
                    </router-link>
                  </div>
                  </div>

                `
    };
    const News = {
        data: function () {
            return {
                dataList: []
            }
        },
        created: function () {
            axios({
                methods: "get",
                url: "https://api.luffycity.com/api/v1/course/actual/?limit=5&offset=0",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                this.dataList = res.data.data.result;
            })

        },
        template: `
          <ul>
          <li v-for="item in dataList">{{ item.name }}</li>
          </ul>`
    };

    const Detail = {
        data: function () {
            return {
                title: "详细页面",
                courseId: null,
                hotCourseList: [
                    {id: 1000, title: "python全栈开发"},
                    {id: 2000, title: "异步编程"},
                ],
            }
        },
        created: function () {
            this.courseId = this.$route.params.id;
            //此处可以根据课程ID，发送ajax请求获取课程详细信息
        },

        watch: {
            // #设置监听route，to表明要改变的值，from表明原来的值
            $route: function (to, from) {
                this.courseId = to.params.id;
                //此处同样根据课程ID，发哦是那个ajax请求获取课程详细信息
                this.getCourseDetail();
            }
        },
        methods: {
            getCourseDetail: function () {
                //根据this.courseId获取课程详细信息
            }
        },

        template: `
          <div>
          <h2>课程详细页面</h2>
          <div>当前课程ID为: {{ courseId }}</div>
          <ul>
            <li v-for="item in hotCourseList">
              <router-link :to="{name:'Detail',params:{id:item.id}}">{{ item.title }}</router-link>
            </li>
          </ul>

          </div>
        `
    };

    const Pins = {
        data: function () {
            return {}
        },
        template: `
          <div>
          <h2>沸点专区</h2>
          <router-link :to="{name:'Hot'}">热点</router-link>
          <router-link :to="{name:'Following'}">关注</router-link>
          <router-view></router-view> <!-- 用于渲染子组件 -->
          </div>
        `
    };


     const Hot = {
        data: function () {
            return {}
        },
        template: `
          <div><h2>Hot界面</h2></div>
        `
    };

    const Following = {
        data: function () {
            return {}
        },
        template: `
          <div><h2>Following界面</h2></div>
        `
    };


    const router = new VueRouter({
        routes: [
            {path: '/', component: Home},
            {path: '/home', component: Home},
            {path: '/course', component: Course},
            {path: '/news', component: News},
            {path: '/detail/:id', component: Detail, name: "Detail"},
            {
                path: '/pins', component: Pins, name: "Pins",
                children: [
                    {
                        //当/pins/hot 匹配成功，
                        //Hot组件会被渲染在Pins的<router-view>中
                        path: 'hot',
                        component: Hot,
                        name: 'Hot'
                    },
                    {
                        //当/pins/following匹配成功，
                        //Following组件会被渲染在Pins的<router-view>中
                        path: 'following',
                        component: Following,
                        name: 'Following'
                    }
                ]
            }
        ],
    });

    var app = new Vue({
        el: "#app",
        data: {
            name: "king",
        },
        methods: {},
        router: router
    });
</script>
</body>
</html>
```







#### 案例：嵌套的后台管理

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            margin: 0;
        }

        .header {
            height: 48px;
            background-color: #499ef3;
            line-height: 48px;
        }


        .header a {

            color: white;
            text-decoration: none;
            padding: 0 10px;
        }

        .body .left-menu {
            width: 180px;
            border: 1px solid #dddddd;
            border-bottom: 0;
            position: absolute;
            left: 1px;
            top: 50px;
            bottom: 0;
            overflow: auto;
            background-color: #f3f5f7;

        }

        .body .left-menu .head {
            border-bottom: 1px solid #dddddd;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            padding: 15px;
        }

        .body .left-menu a {
            display: block;
            text-decoration: none;
            padding: 10px;
            border-bottom: 1px solid #dddddd;
        }

        .body .right-body {
            position: absolute;
            left: 183px;
            top: 50px;
            right: 0;
            bottom: 0;
            overflow: auto;
            padding: 10px;
        }


    </style>

    <script src="vue.js"></script>
    <script src="vue-router3.65.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

</head>
<body>
<div id="app">
    <div class="header">
        <router-link to="/">Logo</router-link>
        <router-link to="/home">首页</router-link>
        <router-link to="/task">任务宝</router-link>
        <router-link to="/message">消息宝</router-link>
    </div>
    <div class="body">
        <router-view></router-view>
    </div>


</div>

<script>
    const Home = {
        data:function () {
            return {
                title:"欢迎使用xx系统"
            }
        },
        template:`
        <h2>{{title}}</h2>
        `
    }

    const Task = {
        data:function(){
            return {

            }
        },

        template:`
          <div>
            <div class = "left-menu">
              <div class="head">任务宝</div>
              <router-link :to="{name:'Fans'}">粉丝</router-link>
              <router-link :to="{name:'Spread'}">推广码</router-link>
              <router-link :to="{name:'Statistics'}">数据统计</router-link>
            </div>
          <div class="right-body">
            <router-view></router-view>
          </div>
          </div>
        `
    };

    const Fans={template:`<h3>粉丝页面</h3>`};
    const Spread = {template:`<h3>推广码页面</h3>`};
    const Statistics = {template:`<h3>数据统计页面</h3>`};



    const Message = {
        data:function(){
            return {}
        },

        template:`
        <div>
          <div class="left-menu">
            <div class="head">消息宝</div>
            <router-link :to="{name:'Sop'}">Sop</router-link>
            <router-link :to="{name:'Send'}">推送管理</router-link>

          </div>
          <div class="right-body">
            <router-view></router-view>
          </div>
        </div>
        `
    };

    const Sop = {template:`<h3>SOP页面</h3>`};
    const Send = {template:`<h3>推送管理页面</h3>`};


    const router = new VueRouter({
        routes:[
            {path:'/',component:Home},
            {path:'/home',component:Home},
            {
                path:'/task',
                component:Task,
                name:'Task',
                children:[
                    {
                        //  设置默认跳转Fans组件
                        path:'',
                        redirect:{name:'Fans'}
                    },
                    {
                        path:'fans',
                        component:Fans,
                        name:'Fans'
                    },
                    {
                        path:'spread',
                        component:Spread,
                        name:'Spread'
                    },
                    {
                        path:'statistics',
                        component:Statistics,
                        name:'Statistics'
                    },
                ]
            },
            {
                path:'/message',
                component:Message,
                name:'Message',
                children:[
                    {
                        path:'sop',
                        component:Sop,
                        name:'Sop'
                    },
                    {
                        path:'send',
                        component:Send,
                        name:'Send'
                    },
                ]
            },
        ]
    })

    var app = new Vue({
        el:"#app",
        data:{},
        methods:{},
        router:router
    })



</script>

</body>
</html>
```

上述代码实现了一个嵌套的后台界面，注意与传统的html编写的不同，上述代码不是通过

- 不是frame实现
- 不是浮动布局实现区域划分

仅仅是通过vue嵌套实现区域划分









### 4.6 编程式导航

除了使用` router-link`创建a标签来定义导航链接，我们还可以借助router的实例方法，通过编写代码来实现。

想要导航到不同的URL，则使用`router.push`方法。这个方法会向history栈添加一个新记录，所以，当用户点击浏览器后退按钮时，则回到之前的URL。

- router.push

  ``` javascript
  //字符串
  router.push('home')
  
  //对象
  router.push({path:'home'})
  
  //命名的路由
  route.push({name:'user',params:{userId:'123'}})
  
  //带参数查询，变成/register?plan=private
  route.push({path:'register',query:{plan:'private'}})
  ```

  

- router.replace

  ``` javascript
  //字符串
  router.replace(‘home’)
  
  //对象
  router.replace({path:'home'})
  
  //命名的路由
  router.replace({name:'user',params:{userId:'123'}})
  
  //带查询参数，变成/register?plan=private
  router.replace({path:'user',params:{plan:'private'})
  ```

  跟router.push很像，唯一的不同就是，他不会向history添加向记录，而是替换当前的history记录

  

- router.go这个方法的参数就是一个整数，意思是在history记录中向前或者向后多少步

  ``` javascript
  //在浏览器记录中前进异步，等同于history.forward()
  router.go(1)
  
  //后退异步记录，等同于history.back()
  router.go(-1)
  
  //前进三步记录
  router.go(3)
  
  //如果history记录不够用，那就失败
  router.go(-100)
  router.go(100)
  
  
  ```





#### 案例：登录跳转（含顶部）

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            margin: 0;
        }

        .header {
            height: 48px;
            background-color: #499ef3;
            line-height: 48px;
        }


        .header a {

            color: white;
            text-decoration: none;
            padding: 0 10px;
        }

        .body .left-menu {
            width: 180px;
            border: 1px solid #dddddd;
            border-bottom: 0;
            position: absolute;
            left: 1px;
            top: 50px;
            bottom: 0;
            overflow: auto;
            background-color: #f3f5f7;

        }

        .body .left-menu .head {
            border-bottom: 1px solid #dddddd;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            padding: 15px;
        }

        .body .left-menu a {
            display: block;
            text-decoration: none;
            padding: 10px;
            border-bottom: 1px solid #dddddd;
        }

        .body .right-body {
            position: absolute;
            left: 183px;
            top: 50px;
            right: 0;
            bottom: 0;
            overflow: auto;
            padding: 10px;
        }


    </style>

    <script src="vue.js"></script>
    <script src="vue-router3.65.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

</head>
<body>
<div id="app">
    <div class="header">
        <router-link to="/">Logo</router-link>
        <router-link to="/home">首页</router-link>
        <router-link to="/task">任务宝</router-link>
        <router-link to="/message">消息宝</router-link>

        <div style="float: right">
            <router-link to="/login">登录</router-link>
        </div>
    </div>
    <div class="body">
        <router-view></router-view>
    </div>


</div>

<script>
    const Home = {
        data: function () {
            return {
                title: "欢迎使用xx系统"
            }
        },
        template: `
          <h2>{{ title }}</h2>
        `
    }

    const Task = {
        data: function () {
            return {}
        },

        template: `
          <div>
          <div class="left-menu">
            <div class="head">任务宝</div>
            <router-link :to="{name:'Fans'}">粉丝</router-link>
            <router-link :to="{name:'Spread'}">推广码</router-link>
            <router-link :to="{name:'Statistics'}">数据统计</router-link>
          </div>
          <div class="right-body">
            <router-view></router-view>
          </div>
          </div>
        `
    };

    const Fans = {template: `<h3>粉丝页面</h3>`};
    const Spread = {template: `<h3>推广码页面</h3>`};
    const Statistics = {template: `<h3>数据统计页面</h3>`};


    const Message = {
        data: function () {
            return {}
        },

        template: `
          <div>
          <div class="left-menu">
            <div class="head">消息宝</div>
            <router-link :to="{name:'Sop'}">Sop</router-link>
            <router-link :to="{name:'Send'}">推送管理</router-link>

          </div>
          <div class="right-body">
            <router-view></router-view>
          </div>
          </div>
        `
    };

    const Sop = {template: `<h3>SOP页面</h3>`};
    const Send = {template: `<h3>推送管理页面</h3>`};

    const Login = {
        data:function(){
            return {
                user:'',
                pwd:''
            }
        },
        methods:{
            doLogin:function(){
                if(this.user.length > 0 && this.pwd.length>0){
                    this.$router.push({name:"Task"});
                }
            }

        },
        template: `
          <div style="width: 500px;margin: 100px auto">
            <input type="text" placeholder="用户名" v-model="user">
            <input type="password" placeholder="密 码" v-model="pwd">
            <input type="button" value="提 交" @click="doLogin">
          </div>
        `
    }

    const router = new VueRouter({
        routes: [
            {path: '/', component: Home},
            {path: '/login', component: Login},
            {path: '/home', component: Home},
            {
                path: '/task',
                component: Task,
                name: 'Task',
                children: [
                    {
                        //  设置默认跳转Fans组件
                        path: '',
                        redirect: {name: 'Fans'}
                    },
                    {
                        path: 'fans',
                        component: Fans,
                        name: 'Fans'
                    },
                    {
                        path: 'spread',
                        component: Spread,
                        name: 'Spread'
                    },
                    {
                        path: 'statistics',
                        component: Statistics,
                        name: 'Statistics'
                    },
                ]
            },
            {
                path: '/message',
                component: Message,
                name: 'Message',
                children: [
                    {
                        path: 'sop',
                        component: Sop,
                        name: 'Sop'
                    },
                    {
                        path: 'send',
                        component: Send,
                        name: 'Send'
                    },
                ]
            },
        ]
    })

    var app = new Vue({
        el: "#app",
        data: {},
        methods: {},
        router: router
    })


</script>

</body>
</html>
```





#### 案例：登录跳转（不含顶部）

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            margin: 0;
        }

        .header {
            height: 48px;
            background-color: #499ef3;
            line-height: 48px;
        }


        .header a {

            color: white;
            text-decoration: none;
            padding: 0 10px;
        }

        .body .left-menu {
            width: 180px;
            border: 1px solid #dddddd;
            border-bottom: 0;
            position: absolute;
            left: 1px;
            top: 50px;
            bottom: 0;
            overflow: auto;
            background-color: #f3f5f7;

        }

        .body .left-menu .head {
            border-bottom: 1px solid #dddddd;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            padding: 15px;
        }

        .body .left-menu a {
            display: block;
            text-decoration: none;
            padding: 10px;
            border-bottom: 1px solid #dddddd;
        }

        .body .right-body {
            position: absolute;
            left: 183px;
            top: 50px;
            right: 0;
            bottom: 0;
            overflow: auto;
            padding: 10px;
        }


    </style>

    <script src="vue.js"></script>
    <script src="vue-router3.65.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

</head>
<body>
<div id="app">
    <router-view></router-view>


</div>

<script>
    const Home = {
        data: function () {
            return {
                title: "欢迎使用xx系统"
            }
        },
        template: `
          <div>
          <div class="header">
            <router-link to="/">logo</router-link>
            <router-link to="/home">首页</router-link>
            <router-link :to="{name:'Task'}">任务宝</router-link>
            <router-link :to="{name:'Message'}">消息宝</router-link>

            <div style="float: right;">
              <router-link to="/login">登录</router-link>
            </div>
          </div>
          <div class="body">
            <router-view></router-view>
          </div>
          </div>
        `
    };

    const Index = { template: `<h2>这是个首页</h2>`};

    const Task = {
        data: function () {
            return {}
        },

        template: `
          <div>
          <div class="left-menu">
            <div class="head">任务宝</div>
            <router-link :to="{name:'Fans'}">粉丝</router-link>
            <router-link :to="{name:'Spread'}">推广码</router-link>
            <router-link :to="{name:'Statistics'}">数据统计</router-link>
          </div>
          <div class="right-body">
            <router-view></router-view>
          </div>
          </div>
        `
    };

    const Fans = {template: `<h3>粉丝页面</h3>`};
    const Spread = {template: `<h3>推广码页面</h3>`};
    const Statistics = {template: `<h3>数据统计页面</h3>`};


    const Message = {
        data: function () {
            return {}
        },

        template: `
          <div>
          <div class="left-menu">
            <div class="head">消息宝</div>
            <router-link :to="{name:'Sop'}">Sop</router-link>
            <router-link :to="{name:'Send'}">推送管理</router-link>

          </div>
          <div class="right-body">
            <router-view></router-view>
          </div>
          </div>
        `
    };

    const Sop = {template: `<h3>SOP页面</h3>`};
    const Send = {template: `<h3>推送管理页面</h3>`};

    const Login = {
        data: function () {
            return {
                user: '',
                pwd: ''
            }
        },
        methods: {
            doLogin: function () {
                if (this.user.length > 0 && this.pwd.length > 0) {
                    this.$router.push({name: "Home"});
                }
            }

        },
        template: `
          <div style="width: 500px;margin: 100px auto">
          <input type="text" placeholder="用户名" v-model="user">
          <input type="password" placeholder="密 码" v-model="pwd">
          <input type="button" value="提 交" @click="doLogin">
          </div>
        `
    }

    const router = new VueRouter({
        routes: [
            {
                path: '/',
                // component: Home,
                redirect: '/login'
            },
            {path: '/login', component: Login, name: 'Login'},
            {
                path: '/home',
                component: Home,
                name: "Home",
                children: [
                    {
                        path: '',
                        component: Index,
                        name: "Index"
                    },
                    {
                        path: 'task',
                        component: Task,
                        name: "Task",
                        children: [
                            {
                                path: 'fans',
                                component: Fans,
                                name: 'Fans'
                            },
                            {
                                path: 'spread',
                                component: Spread,
                                name: 'Spread'
                            },
                            {
                                path: 'statistics',
                                component: Statistics,
                                name: 'Statistics'
                            },
                        ]
                    },
                    {
                        path: 'message',
                        component: Message,
                        name: "Message",
                        children: [
                            {
                                path: 'sop',
                                component: Sop,
                                name: 'Sop'
                            },
                            {
                                path: 'send',
                                component: Send,
                                name: 'Send'
                            },
                        ]
                    },
                ]
            },
        ]
    });

    var app = new Vue({
        el: "#app",
        data: {},
        methods: {},
        router: router
    })


</script>

</body>
</html>
```





### 4.7 导航守卫

在基于vue-router实现访问跳转时，都会执行一个钩子。

``` javascript
const router = new VueRouter({...})
                              
router.beforeEach((to,from,next) =>){
    //to: Route即将要进入的目标 路由对象
    //from: Route当前导航正要离开的路由
    //next() 继续向后执行
    //next(false) 中断导航，保持当前所在的页面
    //next('/') next({path:'/'}) next({name:'Login'}}) 跳转到指定页面
}
```

注意：可以基于他实现，未登录跳转登录页面



#### 案例：登录拦截（全局）

未登录时，访问后台管理页面，自动跳转到登录页面



设置Login组件登录，实现session设置

```javascript
methods: {
    doLogin: function () {
        if (this.user.length > 0 && this.pwd.length > 0) {
            sessionStorage.setItem("isLogin",true);
            this.$router.push({name: "Home"});
        }
    }
```



在钩子函数中查询session

```javascript
router.beforeEach((to,from,next) => {
    //如果已经登录，则可以继续访问目标地址
    if(sessionStorage.getItem('isLogin')){
        next();
        return ;
    }

    //未登录，访问登录界面
    if (to.name =="Login"){
        next();
        return ;
    }
    next({name:"Login"});
});
```





#### 案例：登录拦截（路由）

针对某些路由进行校验登录

在全局的实现通过router.beforeEach实现

在路由的实现通过在route内部的对应组件，添加beforeEnter实现，从而实现子路由登录校验

```javascript
beforeEnter:(to,from,next) =>{
    
},
```

