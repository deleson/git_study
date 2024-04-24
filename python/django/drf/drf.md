本笔记是基于b站视频所作



前置问题

1. 什么是前后端分离？

   > 程序角度：
   >
   > - 一个django程序：接受请求+处理+HTML模板+用户
   > - 两个程序
   >   - 前端：vue.js/reactjs/angular.js
   >   - 后端：django + django restframework（drf）
   >
   > 专业度角度
   >
   > - 前端，专门写前端代码+部署+版本管理+ajax请求获取
   > - 后端，API
   >
   > APP或微信小程序：
   >
   > - 前端：APP或微信小程序
   > - 后端：API

   

   

   前后端不分离

   ![前后端不分离.drawio](../../../public/md_img/drf/前后端不分离.drawio.png)

   

   

   前后端分离

   ![前后端分离.drawio](../../../public/md_img/drf/前后端分离.drawio.png)

   

   

   

2. 什么是drf？作用是什么？

​	drf，让我们以后写侯丹API接口时更方便

​	`  pip install django`

​	` pip install djangorestframework`



3. 必备工具：postman

​	这个工具时帮助伪造，帮助测试api的使用可以不编写前端









# 1.drf初步了解



## 1.1 drf初步使用



- 基于django实现
- 基于drf实现
  - 安装 pip install djangorestframework
  - 注册 rest_framework
  - 返回数据+嵌套好看的页面

```python
from rest_framework.response import Response
from rest_framework.decorators import api_view


#函数实现
@api_view(["GET"])
def login(request):
    return Response({'status': True, "message": "success"})

#类实现
class InfoView(APIView):
    def get(self,request):
        return Response({'status': True, "message": "success"})
    
    
    
 url路由
    path('login/', views.login),
    path('info/', views.InfoView.as_view()),
```







## 1.2 FBV和CBV

FBV和CBV本身django就支持，同时drf也有，但是有所区别

> FBV（Function-Based Views）和 CBV（Class-Based Views）是 Django 中用于处理 HTTP 请求的两种不同的视图方式。
>
> 1. **Function-Based Views (FBV)**:
>
>    - FBV 是使用普通的 Python 函数来定义视图的方式。
>
>    - 在 FBV 中，每个视图都是一个函数，该函数接收一个 HTTP 请求对象作为参数，并返回一个 HTTP 响应对象。
>
>    - 视图函数通常具有以下形式：
>
>      ```
>      pythonCopy codefrom django.http import HttpRequest, HttpResponse
>      
>      def my_view(request: HttpRequest) -> HttpResponse:
>          # 处理请求的逻辑
>          return HttpResponse("Hello, world!")
>      ```
>
>    - FBV 是 Django 最早的视图模式，在简单的情况下使用起来非常直观和简单。
>
> 2. **Class-Based Views (CBV)**:
>
>    - CBV 是使用基于类的视图来定义视图的方式。
>
>    - 在 CBV 中，每个视图是一个类，该类继承自 Django 提供的一些基础视图类，例如 `View`、`TemplateView`、`ListView` 等。
>
>    - 视图类通常具有以下形式：
>
>      ```
>      pythonCopy codefrom django.views import View
>      from django.http import HttpRequest, HttpResponse
>      
>      class MyView(View):
>          def get(self, request: HttpRequest) -> HttpResponse:
>              # 处理 GET 请求的逻辑
>              return HttpResponse("Hello, world!")
>      ```
>
>    - CBV 提供了一种更加结构化和面向对象的方式来组织和重用视图逻辑。
>
>    - CBV 具有很多内置的类视图，可以简化常见的任务，同时也支持更复杂的场景和自定义逻辑。



### 1.2.1django的FBV和CBV

>
> 常见的 HTTP 请求方法包括 GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS 等，其中 GET 和 POST 是最常见的两种请求方法。
>
> 1. **GET 请求**：
>    - GET 请求用于向服务器请求获取某个资源。
>    - 它通常用于从服务器获取数据，而不会对服务器状态产生任何影响。
>    - GET 请求的参数通常包含在 URL 中，可以通过查询字符串的形式传递给服务器。
>    - GET 请求是幂等的，即多次重复的 GET 请求不会对服务器产生影响。
> 2. **POST 请求**：
>    - POST 请求用于向服务器提交数据，通常用于创建新的资源或者修改服务器上的数据。
>    - POST 请求的参数通常包含在请求体中，而不是 URL 中。
>    - POST 请求对服务器状态产生影响，因此不是幂等的，即多次重复的 POST 请求可能会产生不同的结果。
>
> 除了 GET 和 POST 请求外，还有其他几种常见的 HTTP 请求方法：
>
> - **PUT 请求**：用于向服务器提交数据，通常用于更新已存在的资源。PUT 请求的语义是幂等的，即多次重复的 PUT 请求具有相同的效果。
> - **DELETE 请求**：用于请求服务器删除指定的资源。
> - **PATCH 请求**：用于向服务器局部更新资源，通常用于对资源的部分内容进行修改。
> - **HEAD 请求**：类似于 GET 请求，但服务器只返回请求头部信息而不返回实体内容。常用于检查资源是否存在、获取资源的元数据等。
> - **OPTIONS 请求**：用于获取目标资源支持的请求方法、请求头部信息等，通常用于跨域请求时进行预检查。





django的这两种方式展示表象如下：

FBV

```python
+urls.py
path('auth/', views.auth), 


+views.py
from django.http import JsonResponse
def auth(request):
    return JsonResponse({'status':True,"message":"success"})
```



CBV

```python
+urls.py
 path('user/', views.UserView.as_view())

    
+views.py
from django.http import JsonResponse
from django.views import View
def UserView(View):

    def get(self,request):
        return JsonResponse({'status':True,"message":"get"})

    def post(self,request):
        return JsonResponse({'status':True,"message":"post"})

    def put(self,requst):
        return JsonResponse({'status':True,"message":"put"})

    def delete(self,request):
        return JsonResponse({'status':True,"message":"delete"})

```

对于FBV方式，如果要根据请求的方法进行不同操作就要

`if request.method =="GET":`





无论是FBV还是CBV逻辑都是一致的(本质是相同的)

- FBV：请求函数（）
- CBV：as_views()->dispatch->请求同名函数()







### 1.2.2drf的FBV和CBV

​		drf和django的FBV、CBV的使用过程是相同的。但是drf的CBV的APIView是在继承View的基础上的类，固有区别如下

- django的是视图类，继承View
- drf的视图类，继承APIView，而APIView继承了django的View

​		具体的区别是，drf继承的APIView类中的as_view函数返回的是django的as_view函数加上csrf_exempt(view)处理

> csrf_exempt()，这个是用来免除csrf_token校验（相当于装饰器@csrf_exempt。	去除这种校验是由于前后端分离的项目要去决定的。

​		而对于dispatch函数操作，APIView有自己定义的方法，主体逻辑与View中的相同。



总结上述，APIView功能的添加体现如下：

- def as_view(...)  -> 免除了csrf认证
- def dispatch()      -> 视图执行钱、反射执行视图、视图后处理



### 1.2.3CBV的URL参数和request对象分析

```python
path('user/<int:pk>/',views.UserView.as_view()), #django
path('user/<str:dt>/',views.InfoView.as_view()), #drf
```



首先开始分析django的URL传递过程

> 1.首先访问地址/user/123 => pk = 123
>
> 2.访问视图类的as_view(通常继承View类)
>
> 3.as_view函数内部的view函数
>
> 4.在view函数内部又传递给dispatch函数
>
> 5.在dispatch函数内部，通过getattr方法反射得到了要调用的方法（get、post等）
>
> 6.传递给请求方法参数并返回



其次是drf的URL传递过程

> 1.首先访问地址/user/xxx => dt = xxx
>
> 2.访问视图类的as_view(通常继承APIView类)
>
> 3.APIView内部访问as_view函数
>
> 4.as_view函数包含了对于父类view的as_view方法调用
>
> 5.在父类as_view中的view函数内部又传递给dispatch函数（这里是APIView的dispatch）
>
> 6.在dispatch函数内部，通过getattr方法反射得到了要调用的方法（get、post等），并进行了其他相关处理
>
> 7.传递给请求方法参数并返回



再来对比django和drf的request

- django：requst是请求相关的所有数据
- drf： request是需要经过一层处理，即接受到的request不一样

> 请求相关的所有数据 - --->经过initialize_request处理
>
> 再传入到相关的方法（get、post）

具体的区别在于：

| django的request                | drf的request                                                 |
| ------------------------------ | ------------------------------------------------------------ |
| 包含requst.GET、request.POST等 | 其中request._request = django的request。此外还封装了其他内容 |


























$$
y[n] = \sum_{k=-\infty}^{\infty} x[k] \cdot h[n-k]
$$


