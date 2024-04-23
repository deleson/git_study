简介

JQuery是一个JavaScript第三方模块

- 给予JQuery，自己开发一个功能
- 现成的功能可能依赖JQuery（例如BootStrap





# 1.快速上手

- 首先要下载JQuery
- 应用Jquery





# 2.JQuery寻找标签

## 2.1直接寻找



- ID选择器

  ```html
  <h1 id = "txt">中国联通</h1>
  <h1 id = "c1">中国联通</h1>
  <h1 id = "c2">中国联通</h1>
  
  $("#txt")
  ```

- 样式选择器

  ```html
  <h1 class = "txt">中国联通</h1>
  <h1 class = "c1">中国联通</h1>
  <h1 class = "c2">中国联通</h1>
  
  $(".c1")
  ```

- 标签选择器

  ```html
  <h1 class = "txt">中国联通</h1>
  <h1 class = "c1">中国联通</h1>
  <h1 class = "c2">中国联通</h1>
  
  $("h1")
  ```

- 层级选择器

  ```html
  $(".c1 .c2 a")
  ```

- 多选择器

  ```html
  $(".c1,.c2")
  ```

- 属性选择器

  ```html
  <input type="text" name="n1"/>
  <input type="text" name="n1"/>
  <input type="text" name="n1"/>
  
  $("input([name="n1"])")
  ```









## 2.2间接寻找

- 找到兄弟

  ```html
  $("#C1").prev()			//上一个
  $("#C1").next()			//下一个
  $("#C1").next().next()	//下一个、下一个
  $("#C1").siblings()		//所有兄弟
  ```

- 找父子

  ```html
  $("#c1").parent()		//找父亲
  $("#c1").children()		//所有的儿子
  $("#c1").children(".p0")
  
  
  $("#c1").find(".p10")	 //找子孙class等于.p10
  $("#c1").children("div") //找子孙标签为div
  ```

  

# 3.操作样式

添加样式：addClass

删除样式：removeClass

判断是否存在样式：hasClass



# 4.值的操作

```html
<div id="c1">内容</div>
```

```javascript
$("#c1").text()		//获取文本内容
$("#c1").text("休息")		//设置文本内容
```



```html
<input type="text" id="c3"/>
```

```javascript
$("#c3").val()			//获取用户输入的值
$("#c3").val("哈哈哈")		//设置值
```





# 5.事件

DOM方式绑定事件

```html
<input type="button" value="提交" onclick="getInfo()">

<script> 
function getInfo(){
    
}
</script>
```



JQuery的绑定事件

```html
<ul>
    <li>百度</li>
    <li>谷歌</li>
    <li>搜狗</li>
</ul>

<script>
	$("li").click(function(){
        //点击li标签时，自动执行这个函数；
        //$(this)当前你点击的s
    });
</script>
```

上述的代码需要所有html加载完毕才执行

下面介绍一种当页面的框架加载完成，就调用的方法

```javascript
$(function()){
$("li").click(function(){
    //点击li标签时，自动执行这个函数；
    //$(this)当前你点击的s
});
}
//在外部添加funciton
```





# 6.案例



## 6.1菜单的切换

菜单默认隐藏，点击展开

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .menus {
            width: 200px;
            height: 800px;
            border: 1px solid red;
        }

        .menus .header {
            background-color: gold;
            padding: 10px 5px;
            border-bottom: 1px dotted #dddddd;
        }
        .menus .content a{
          display: block;
          padding: 5px 5px;
          border-bottom:1px dotted #dddddd;
        }

        .hide{
          display: none;
        }

    </style>
</head>
<body>
<div class="menus">
    <div class="item">
        <div class="header" onclick="clickme(this)">上海</div>
        <div class="content hide">
            <a>宝山区</a>
            <a>宝山区</a>
            <a>宝山区</a>
            <a>宝山区</a>
        </div>
        <div class="item">
            <div class="header" onclick="clickme(this)">北京</div>
            <div class="content hide">
                <a>朝阳区</a>
                <a>朝阳区</a>
                <a>朝阳区</a>
                <a>朝阳区</a>
            </div>
        </div>
    </div>
</div>

<script src="static/js/jquery-3.7.1.min.js"></script>
<script>
  function clickme(city){
    // $(self) 表示当前点击的那个标签
    //$(self).next()下一个标签
    //$(self).next().removeClass("hide")
    var hasClass = $(city).next().hasClass("hide");
    if (hasClass){
     $(city).next().removeClass("hide");
    }else{
      $(city).next().addClass("hide");
    }
  }
</script>
</body>
</html>
```



监听器实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .menus {
            width: 200px;
            height: 800px;
            border: 1px solid red;
        }

        .menus .header {
            background-color: gold;
            padding: 10px 5px;
            border-bottom: 1px dotted #dddddd;
            cursor: pointer;
        }
        .menus .content a {
            display: block;
            padding: 5px 5px;
            border-bottom: 1px dotted #dddddd;
        }

        .hide {
            display: none;
        }
    </style>
</head>
<body>
<div class="menus">
    <div class="item">
        <div class="header">上海</div>
        <div class="content hide">
            <a>宝山区</a>
            <a>宝山区</a>
            <a>宝山区</a>
            <a>宝山区</a>
        </div>
    </div>
    <div class="item">
        <div class="header">北京</div>
        <div class="content hide">
            <a>朝阳区</a>
            <a>朝阳区</a>
            <a>朝阳区</a>
            <a>朝阳区</a>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
<script>
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menus .header').forEach(function(header) {
        header.addEventListener('click', function() {
            // 这里使用了jQuery的toggle类方法来切换'.hide'类
            $(this).next('.content').toggleClass('hide');
        });
    });
});

</script>
</body>
</html>

```





## 6.2动态创建数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<input type="text" id="txtuser" placeholder="用户名">
<input type="text" id="txtemail" placeholder="邮箱">
<input type="button" id="t" value="提交" onclick="getInfo()">

<ul id="view">
</ul>

<script src="static/js/jquery-3.7.1.min.js"></script>
<script>
  function getInfo(){
    //1.获取用户输入的用户名和密码
    var username = $("txtuser").val();
    var email = $("txtemail").val();

    var dataString = username + '-' + email;
    //2.创建li标签，在li的内容写入内容
    //DOM document.createElement("li")
    var newli = $("<li>").text(dataString);

    //3.把新创建的li标签添加到ul里面。
    $("#view").append(newli);

  }
</script>

</body>
</html>
```





## 6.3绑定事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul>
    <li>百度</li>
    <li>谷歌</li>
    <li>搜狗</li>
</ul>

<script src="static/js/jquery-3.7.1.min.js"></script>
<script>
   $("li").click(function(){
        //点击li标签时，自动执行这个函数；
        //$(this)当前你点击的是那个标签；
      var text = $(this).text();
      console.log(text);
      $(this).remove();
    });
</script>
</body>
</html>
```

注意这个例子使用的是JQuery的绑定，而并非直接的使用javaScript





## 6.4表格操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<table border="1">
    <thead>
    <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>操作</th>
    </tr>
    </thead>
    <tboy>
        <tr>
            <td>1</td>
            <td>king</td>
            <td>
                <input type="button" value="删除">
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>king</td>
            <td>
                <input type="button" value="删除">
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>king</td>
            <td>
                <input type="button" value="删除">
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>king</td>
            <td>
                <input type="button" value="删除">
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>king</td>
            <td>
                <input type="button" value="删除">
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>king</td>
            <td>
                <input type="button" value="删除">
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>king</td>
            <td>
                <input type="button" value="删除">
            </td>
        </tr>
    </tboy>
</table>
</body>

<script src="static/js/jquery-3.7.1.min.js"></script>
<script>
    $(function (){
        $("input").click(function() {
            $(this).parent().parent().remove();
        })
    })
</script>
</html>
```





## 6.5添加数据页面

- 对于时间的使用：不能输入，使用选择（插件datetimepicker）
  - 下载插件
  - 应用插件
  
  