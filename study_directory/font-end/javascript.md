前言补充

- html 裸体

- CSS 好看

- javaScript 动态

  - 编程语言

  - 类库



BootStrap依赖JavaScript的类库，JQery

- 下载JQuery，在页面上应用上JQuery
- 在页面上应用BootStrap的javaScript的类库



下面代码解锁BootStrap v3的动态效果

``` html
<script src="static/js/jquery-3.7.1.min.js"></script>
<script src="static/plugins/bootstrap-3.4.1/js/bootstrap.min.js"></script>
```



概要：

- JavaScript,是一门编程语言。浏览器就是JavaScript语言的解释器

- DOM和BOM

  ``` 
  相当于编程语言的内置模块
  例如：python中的re、random、time、json模块
  ```

- JQuery

  ``` 
  相当于编程语言的第三方模块
  例如：requests。openpyxl
  ```



三种前端技术的注释

- html  <!-- -->
- css   /* */
- JavaScript // or /* */







# 1.JavaScript简介

javaScript是一门编程语言

JavScript的意义是

- 实现程序动态效果



# 2.JavaScript位置

script代码块可以放在

- head里面
- body里面最后面（推荐）

一般放在后面是考虑到耗时过程

只有极端情况才放在head里面（即需要先渲染js）







# 3.JavaScript存在

可以写在：

- 当前html中
- 在其他js文件中，导入使用
  - 通常也在body最后面
  - script src=“ ”



# 4.JavaScript变量

JavaScript也是一种编程语言，所以也有变量

```javascript
<script type = "text/javascript">
   
    #定义变量
    var name = "wuli";
	#输出类似print
    console.log(name)

</script>
```



javascript的输出，查看要做浏览器的f12的console中



## 变量类型

### 1.字符串类型

```javascript
//声明
var name ="wuli"
var name = string("ijgoeg")

//常见功能
var name = name.length;
var v1 = name.length;
var v2 = name[0];
var v3 = name.trim(); //去除空白
var v4 - name.substring(0,2);
```



	### 2.数组类型

```javascript
// 定义
var v1 = [11,22,33,44]
var v2 = Array([11,22,33,44])

//操作
v1[1]

//添加
v1[0]  = "king";
v1.push("联通");			//尾部添加
v1.unshift("移动");		//头部添加
v1.splice(索引,0,元素)	   //指定位置添加

//删除
v1.pop()
v1.shift()
v1.splice(索引位置,1)		//指定位置删除


#循环第一种
for(var item in v1){
    var data = v1[item]
}
#循环第二种
for(var i = 0; i< v1.length; i++){
    
}
```

注意JavaScript循环也有break和continue



### 3.对象（字典）

```javascript
#JavaScript键不需要双引号
info = {
    name:"高迁";
    age:18
}


//两种修改
info.age
info.name = "若是"

info["age"]
info["name"] ="zjio"



//删除
delete info["age"]



//字典循环
for (var key in info){
    
}
```







# 5.条件语句

```javascript
if(条件){

}else{

}


if(条件){

}else if{

}else if{

}else{

}
```



# 6.函数

```javascript
function func(){

}

//调用
func()
```







# 7.DOM

DOM，就是一个模块，可以对HTML页面中的标签进行操作

``` javascript
//根据ID获取标签
var tag = document.getElementByID("xx");

//获取标签中的文本
tag.innerText;

//修改标签中的文本
tag.innerText = "shoit";

```

```javascript
//创建标签
var tag = document.createElement("div");

//标签写内容
tag.innerText= "shit";
```

```javascript
//标签里面添加标签
var newtag = document.createElement("div");
newtag.innerText= "shit";
tag.appendChild(newTag);
```



# 8.事件绑定

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<input type="text" placeholder="请输入内容" id="txtuser"></input>
<input type="button" value="点击添加" onclick="addCityInfo()">
<ul id="city">

</ul>


<script type="text/javascript">
    function addCityInfo() {
        //1. 获取输入框用户输入内容
        var txtTag = document.getElementById("txtuser");
        //2.获取input框中用户输入的内容
        var newstring = txtTag.value;

        //非空时候才添加
        if (newstring.length > 0) {
            //3.创建标签
            var newTag = document.createElement("li");
            newTag.innerText = newstring;

            //4.标签添加到ul中
            var parentTag = document.getElementById("city");
            parentTag.appendChild(newTag);

            //5.将input框内容清空
            txtTag.value = "";

        } else {
            alert("输入不为空");
        }


    }
</script>

</body>
</html>
```

DOM有很多操作，但是通常使用JQuery/vue.js/react.js实现  







# 9.案例 



## 1.跑马灯



``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<span id="txt"> 欢迎中国联通领导king莅临指导</span>

<script type="text/javascript">
    function show() {
        // 1.去html中找到某个标签并获取他的内容（DOM）
        var tag = document.getElementById("txt");
        var dataString = tag.innerText;    //得到内部文本

        //2. 动态效果
        var firstChar = dataString[0];
        var otherString = dataString.substring(1, dataString.length);
        var newText = otherString + firstChar;


        //3.html标签更新内容
        tag.innerText = newText;


        console.log("name")
    }

    //JavaScript中的定时器
    setInterval(show,1000);


</script>
</body>
</html>
```









## 2.动态数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul id="city"></ul>

<script type="text/javascript">
  var cityList = ["北京","上海","深圳"];
  for(var idx in cityList){
    var text= cityList[idx];

    //创建<li></li>
    var tag = document.createElement("li");
    //在li标签中写入内容
    tag.innerText = text;
    //添加到id = city的那个标签里面，DOM
    var parnetTag = document.getElementById("city");
    console.log(parnetTag);
    parnetTag.appendChild(tag)

  }
</script>

</body>
</html>
```



## 3.动态表格



 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }

    </style>
</head>
<body>
<table border="1">
    <thead>
    <tr>
        <th>ID</th>
        <th>性别</th>
        <th>年龄</th>
    </tr>
    </thead>
    <tbody id="body">

    </tbody>
</table>

<script type="text/javascript">
    var info = {id: 1, name: "zhengzhi", age: 19};

    var tr = document.createElement("tr");
    for (var key in info) {
        var text = info[key];
        var td = document.createElement("td");
        td.innerText = text;
        tr.appendChild(td);
    }


    var bodyTag = document.getElementById("body")
    bodyTag.appendChild(tr);


</script>
</body>
</html>
```





# 10.总结回顾

## 10.1编码相关

- ASCII
- GB2312（一般中文占2个字节）
- unicode(ucs2,ucs4)
- utf-8(utf-8中，一般中文占三个字节)

```
python默认解释器编码（UTF-8）:
	python.exe 代码文件
	
	如果将代码文件保存成了GBK编码，将python模式解释器编码修改成GBK
	
# 打开文件时指定GBK编码
with open('filename.txt', 'r', encoding='GBK') as f:
    content = f.read()

# 将字符串编码为GBK
text = '示例文本'
encoded_text = text.encode('GBK')

# 将GBK编码的字节解码回字符串
decoded_text = encoded_text.decode('GBK')
```



## 10.2计算机中的单位

- 位
- 字节
- KB/M

- 字符串格式化（三种）

  ```python
  v1 ="i am {}".format("shit")
  
  v2 ="i am %s" %("shit")
  
  #3.6
  name = "shit";
  v3 = f"i am {name}"
  ```



## 10.3常见数据类型

int、bool、str、list、tuple、dict、set、float、None

- 可变的有：list、set、dict
- 可哈希和不可哈希，不可哈希的有：list、set、dict

**可变的数据类型介绍：**

> 不可变对象确实不能被修改。当我们说不可变对象不能被修改时，指的是对象一旦被创建，它所包含的数据就不能改变。尝试修改不可变对象的操作会导致Python创建一个新的对象，而原来的对象不会改变。如果对不可变对象进行赋值操作，你实际上是在改变变量的绑定（binding），而不是修改对象本身。这意味着变量会指向一个新的对象，而原来的对象保持不变。
>
> x = 5       # x 指向不可变对象 5
> x = x + 1   # 尝试修改 x，实际上是创建了一个新的整数对象 6，并让 x 指向它

> **可哈希和不可哈希概念：**
>
> 在Python中，可哈希（hashable）和不可哈希（unhashable）的概念与对象是否可以作为字典的键或者是否可以被加入到集合中有关。

```
-str：
	-独有功能：split、upper、lower、startswith、strip、join
	  ps：注意str不可变，所以upper等不会对原有字符串进行操作
	-公共功能：len、索引、切片、for'循环、判断是否包含

-list：
	-独有功能：append、insert、remove、pop...
	  ps：注意list可变，所以通常对原数据操作
	-公共功能：len、索引、切片、for'循环、判断是否包含

-dict：
	-独有功能：get、keys、items、values
	-公共功能：：len、索引、切片、for'循环、判断是否包含
```

- 运算符

  ```
  基本运算符：加减乘除
  
  一般逻辑：1>2 and 3<10
  特殊逻辑运算（整体的结果取决于）：
  	v1 = 99 and 88 		 #88
  	v2 = [] or 10  		 #10
  	v3 = "联通" or [] 	#"联通"
  	
  and 运算符
  如果第一个值是False（在布尔上下文中），则返回第一个值，否则返回第二个值。
  简而言之，Python中的x and y会在x是假值时返回x，否则返回y。
  or 运算符
  如果第一个值为True（在布尔上下文中），则返回第一个值，否则返回第二个值。
  也就是说，x or y会在x是真值时返回x，否则返回y。
  这里的“假值”包括：None、False、任何数值类型的零（0、0.0等）、任何空的序列或集合（''、[]、{}等）。
  
  根据上述规则，我们来分析给定的例子：
  
  v1 = 99 and 88
  
  99在布尔上下文中为真（因为它不是假值），所以表达式的结果为第二个值88。
  v2 = [] or 10
  
  []是一个空列表，在布尔上下文中被视为假，因此表达式的结果为第二个值10。
  v3 = "联通" or []
  
  "联通"是一个非空字符串，在布尔上下文中被视为真，因此根据or运算符的规则，表达式的结果为第一个值，即"联通"
  ```

> ### `and` 运算符
>
> - 如果第一个值是`False`（在布尔上下文中），则返回第一个值，否则返回第二个值。
> - 简而言之，Python中的`x and y`会在`x`是假值时返回`x`，否则返回`y`。
>
> ### `or` 运算符
>
> - 如果第一个值为`True`（在布尔上下文中），则返回第一个值，否则返回第二个值。
> - 也就是说，`x or y`会在`x`是真值时返回`x`，否则返回`y`。
>
> 这里的“假值”包括：`None`、`False`、任何数值类型的零（`0`、`0.0`等）、任何空的序列或集合（`''`、`[]`、`{}`等）。
>
> 根据上述规则，我们来分析给定的例子：
>
> 1. **`v1 = 99 and 88`**
>    - `99`在布尔上下文中为真（因为它不是假值），所以表达式的结果为第二个值`88`。
> 2. **`v2 = [] or 10`**
>    - `[]`是一个空列表，在布尔上下文中被视为假，因此表达式的结果为第二个值`10`。
> 3. **`v3 = "联通" or []`**
>    - `"联通"`是一个非空字符串，在布尔上下文中被视为真，因此根据`or`运算符的规则，表达式的结果为第一个值，即`"联通"`。



## 10.4推导式（简化生成数据）

``` python
data =[]
for i in range(10):
	data.append(i)

    
v1 = [i for i in range(10)]
v2 = [i for i in range(10) if 1<5]
```



## 10.5函数编程

```
函数的基本知识
	-定义
	-参数 位置参数/关键字传参/参数默认值/动态参数*args,**kwargs
	-返回值（无return，默认返回值None）

函数的进阶：
	-python中函数作为作用域
	-全局变量规范大写，局部变量规范小写
	-局部变量可以使用global使用全局变量
	
内置函数：
	-bin/hex/odc/max/min/divmod/sorted/open

文件操作：
	-基本操作：打开、操作、关闭（with可以放置忘记关闭）
	-打开文件时有模式：
		-r/rb	读（不可不存在）
		-w/wb	写（文件不存在，新建
		-a/ab	追加（文件不存在，新建
```

> ### 1. 位置参数（Positional Arguments）
>
> 位置参数是最常见的参数类型，调用函数时需要按照函数定义中参数的顺序传递值。
>
> ```
> pythonCopy codedef function(a, b):
>     return a + b
> 
> # 位置参数的调用
> result = function(2, 3)  # a=2, b=3
> ```
>
> ### 2. 关键字参数（Keyword Arguments）
>
> 关键字参数允许你在调用函数时指定参数的名称，这样参数的顺序就可以任意了。这提高了代码的可读性。
>
> ```
> pythonCopy codedef function(a, b):
>     return a + b
> 
> # 关键字参数的调用
> result = function(b=3, a=2)  # a=2, b=3
> ```
>
> ### 3. 参数默认值（Default Argument Values）
>
> 在定义函数时，可以为参数指定默认值。调用函数时如果没有传递该参数，则会使用其默认值。
>
> ```
> pythonCopy codedef function(a, b=4):
>     return a + b
> 
> # 使用默认参数值
> result = function(2)  # b使用默认值4，a=2
> ```
>
> ### 4. 动态参数（*args 和 **kwargs）
>
> - `*args`：允许你将不定数量的参数作为元组传递给函数。
> - `**kwargs`：允许你将不定数量的关键字参数作为字典传递给函数。
>
> ```
> pythonCopy codedef function(*args, **kwargs):
>     print("args:", args)
>     print("kwargs:", kwargs)
> 
> function(1, 2, 3, a=4, b=5)
> # args: (1, 2, 3)
> # kwargs: {'a': 4, 'b': 5}
> ```
>
> - 使用`*args`时，函数内部可以通过遍历`args`元组来访问所有传入的位置参数。
> - 使用`**kwargs`时，可以通过键名访问所有传入的关键字参数。



## 10.6模块

```
模块的分类:
 -自定义模块：
 	-os.path，导入模块时ptyon内部都会去那个目录找
 	-import/from xx import xx
 -内置模块：time、datatime、json、re、random、os
 -第三方模块：requests、openpyxl、ptyon-docx、flask
 
 
 关于json模块：
 	-json本质是字符串，有自己的格式
 	-json.dumps序列化时，智能序列化python常用数据类型
 	python			JSON
 	dict			object
 	list、tuple		array
 	str				string
 	int、float		number
 	True			true
 	False			false
 	None			null
 	
 关于re正则模块
 	-正则\d \w
	-贪婪匹配和非贪婪匹配（默认），想让他不贪婪个数后面？。
	-re.search\re.match\re.findall
```



*正则表达式使用如下：*

**基本组成**

正则表达式由字符和特殊符号组成，其中一些基本的特殊符号包括：

- `.`：匹配任意单个字符，除了换行符。
- `^`：匹配字符串的开始。
- `$`：匹配字符串的结尾。
- `*`：匹配前面的子表达式零次或多次。
- `+`：匹配前面的子表达式一次或多次。
- `?`：匹配前面的子表达式零次或一次，或指定非贪婪匹配。
- `{n}`：匹配前面的子表达式恰好n次。
- `{n,}`：匹配前面的子表达式n次或更多次。
- `{n,m}`：匹配前面的子表达式至少n次，不超过m次。
- `[]`：匹配方括号内的任意字符的其中之一。
- `|`：匹配两个或多个分支（或）。
- `()`：将多个表达式组成一个子表达式，用于从匹配结果中提取值。
- `\d`：匹配一个数字字符。等价于[0-9]。
- `\w`：匹配字母、数字、下划线。等价于[A-Za-z0-9_]。

**Python中的正则表达式**

在Python中使用正则表达式需要导入内置的`re`模块。以下是一些常用的`re`模块函数：

- `re.match(pattern, string)`：从字符串的开始位置匹配一个模式，如果不是起始位置匹配成功的话，返回`None`。
- `re.search(pattern, string)`：搜索整个字符串，找到第一个匹配的位置。
- `re.findall(pattern, string)`：找到字符串中所有匹配的子串，并返回一个列表。
- `re.sub(pattern, repl, string)`：替换字符串中的匹配项。

> ### 1. `.`（点）
>
> 匹配除换行符`\n`外的任意单个字符。
>
> ### 2. `^`（脱字符）
>
> 匹配输入字符串的开始位置。如果在多行模式中使用，它也可以匹配每一行的开始。
>
> ### 3. `$`
>
> 匹配输入字符串的结束位置。在多行模式中，它也可以匹配每一行的结束。
>
> ### 4. `*`
>
> 匹配前面的子表达式零次或多次。
>
> ### 5. `+`
>
> 匹配前面的子表达式一次或多次。
>
> ### 6. `?`
>
> - 当用作量词时，匹配前面的子表达式零次或一次。
> - 也用于表示非贪婪匹配。
>
> ### 7. `{n}`、`{n,}`、`{n,m}`
>
> - `{n}`：匹配前面的子表达式恰好`n`次。
> - `{n,}`：匹配前面的子表达式至少`n`次。
> - `{n,m}`：匹配前面的子表达式至少`n`次，但不超过`m`次。
>
> ### 8. `[]`（字符类）
>
> 匹配方括号内的任意字符。例如，`[a-z]`匹配任何小写字母。
>
> ### 9. `|`（管道符）
>
> 匹配两项之一（“或”关系）。例如，`apple|banana`匹配"apple"或"banana"。
>
> ### 10. `()`（括号）
>
> 定义一个子表达式组。这允许你将多个元素视为单个元素来应用量词，并可以通过分组捕获匹配的内容。
>
> ### 11. `\`（反斜杠）
>
> - 用作转义字符，允许你匹配特殊字符，如`\.`, `\*`, `\\`等。
> - 也用于引入特殊序列，如`\d`匹配数字，`\w`匹配字母数字字符等。
>
> ### 12. `\b` 和 `\B`
>
> - `\b`：匹配单词边界。
> - `\B`：匹配非单词边界。
>
> ### 13. `\d`, `\D`
>
> - `\d`：匹配任何数字，等价于`[0-9]`。
> - `\D`：匹配任何非数字字符，等价于`[^0-9]`。
>
> ### 14. `\s`, `\S`
>
> - `\s`：匹配任何空白字符（包括空格、制表符、换行符等）。
> - `\S`：匹配任何非空白字符。
>
> ### 15. `\w`, `\W`
>
> - `\w`：匹配包括下划线的任何单词字符，等价于`[A-Za-z0-9_]`。
> - `\W`：匹配任何非单词字符，等价于`[^A-Za-z0-9_]`。





- **贪婪匹配**：

```
pythonCopy codetext = '"greeting: hello" "world!"'
pattern = '".*"'
matches = re.findall(pattern, text)
for match in matches:
    print(match)  # 输出：'"greeting: hello" "world!"'
```

这里，贪婪匹配导致整个字符串被当作一个匹配，因为`".*"`会匹配尽可能多的字符。

- **非贪婪匹配**：

```
pythonCopy codetext = '"greeting: hello" "world!"'
pattern = '".*?"'
matches = re.findall(pattern, text)
for match in matches:
    print(match)  # 输出：'"greeting: hello"' 和 '"world!"'
```



## 10.7面向对象

三大特性：封装、继承、多态


面向对象编程（OOP）是一种编程范式，它使用"对象"来设计应用程序。对象可以包含数据（属性）和代码（方法）。面向对象编程的三大特性是封装、继承和多态性。这些特性帮助程序员创建模块化、可重用和易于管理的代码。

> ### 1. 封装（Encapsulation）
>
> **定义**：封装是面向对象编程中的一个核心概念，它指的是将对象的数据（属性）和方法绑定在一起，形成一个紧密的单元，并对对象的某些组件提供访问控制。这意味着对象的内部状态不能从外部直接访问，只能通过该对象提供的方法进行访问和修改。
>
> **目的**：封装的主要目的是隐藏对象的内部实现细节，只暴露出必要的操作接口。这样做可以减少系统的复杂性，增强数据的安全性，并保护对象的状态不被外部随意修改。
>
> **示例**：在Python中，可以通过使用私有属性（如`__attribute`）和公共方法来实现封装。
>
> ```
> pythonCopy codeclass Account:
>     def __init__(self, owner, amount=0):
>         self.owner = owner
>         self.__balance = amount  # 私有属性
> 
>     def deposit(self, amount):
>         if amount > 0:
>             self.__balance += amount
>             print(f"Added {amount} to the balance")
> 
>     def withdraw(self, amount):
>         if 0 < amount <= self.__balance:
>             self.__balance -= amount
>             print(f"Withdrew {amount} from the balance")
>         else:
>             print("Insufficient balance")
> 
>     def get_balance(self):
>         return self.__balance
> 
> account = Account("John")
> account.deposit(100)
> print(account.get_balance())
> ```
>
> ### 2. 继承（Inheritance）
>
> **定义**：继承是一种机制，允许定义一个新的类（子类）继承一个已有类（父类）的属性和方法。子类可以重用并扩展父类的功能，也可以添加新的属性和方法。
>
> **目的**：继承支持代码重用，使得新的类可以构建在已有的类之上。它还支持多态性，因为一个父类的引用可以指向其子类的对象。
>
> **示例**：
>
> ```
> pythonCopy codeclass Animal:
>     def speak(self):
>         pass
> 
> class Dog(Animal):  # Dog 继承自 Animal
>     def speak(self):
>         return "Woof!"
> 
> class Cat(Animal):  # Cat 继承自 Animal
>     def speak(self):
>         return "Meow!"
> 
> dog = Dog()
> print(dog.speak())  # 输出：Woof!
> 
> cat = Cat()
> print(cat.speak())  # 输出：Meow!
> ```
>
> ### 3. 多态性（Polymorphism）
>
> **定义**：多态性是指同一操作作用于不同的对象时，可以有不同的解释和表现。这意味着不同的类的对象，可以通过同一接口访问，而执行的是各自类的方法。
>
> **目的**：多态增加了程序的灵活性和可扩展性。通过多态，程序可以通过统一的接口，调用不同对象的相应方法，而不需要知道对象具体的类。
>
> **示例**：继续使用上面的`Animal`、`Dog`和`Cat`类的例子，我们可以看到多态的作用。不同的动物类（`Dog`和`Cat`）都继承自`Animal`类，并重写了`speak`方法。通过`Animal`类型的引用，我们可以调用任何`Animal`子类的`speak`方法，而实际执行的则是对应子类的实现。
>
> ```
> pythonCopy codeanimals = [Dog(), Cat()]
> for animal in animals:
>     print(animal.speak())
> ```
>
> 这些特性是面向对象编程的基石，它们使得代码更加模块化、易于
>
> 理解、维护和扩展。接着上文，我们来继续探讨多态性的价值和面向对象编程的其他相关概念。
>
> ### 多态性（Polymorphism）的价值
>
> 多态性的真正价值在于它能让程序在不知道对象具体类型的情况下，通过统一的接口处理不同类型的对象。这种能力大大提高了程序的灵活性和可扩展性。比如，在上面的例子中，我们可以轻松地向`animals`数组添加新的`Animal`类型的子类对象，而不需要修改循环中调用`speak`方法的代码。这就是所谓的“开闭原则”，即软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。



## 10.8前端快发

html、CSS、JavaScript



**HTML标签**

- 块级和行内标签
- 行内标签不能（CSS）设置高度、宽度、内外边距
- form表单	+input/select...
  - action	提交地址
  - method 提交方式
  - form里面有个submit
  - 内部标签都设置了name属性（否则不能提交）



**CSS样式**

- 局部一定会使用到样式：div+float（会脱离文档流，处理方法clear：both；clearfix）

- 高度和宽度

- 边距（内外

  