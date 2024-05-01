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



### 1.2.4 纯净项目

app要适当进行删除内容

```python
INSTALLED_APPS = [
    # 'django.contrib.admin',
    # 'django.contrib.auth',
    # 'django.contrib.contenttypes',
    # 'django.contrib.sessions',
    # 'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',               #template/static
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # 'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    # 'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'day2.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                # 'django.contrib.auth.context_processors.auth',
                # 'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

再进行setting的drf配置

```python
#drf配置
REST_FRAMEWORK = {
    "UNAUTHENTICATED_USER":lambda:"xxx"
}
```





## 1.3 drf的request对象

> 在 Django 和 Django REST Framework (DRF) 中，请求（request）对象是核心组件之一，它封装了客户端发送到服务器的所有HTTP请求信息。这些对象在处理Web请求时起到至关重要的作用，它们帮助开发者访问请求数据、方法、用户信息等，以实现丰富的应用逻辑。
>
> **Django 的 Request 对象**
>
> **什么是 Django 的 Request 对象？**
>
> Django 的 Request 对象是一个 Python 类的实例，它封装了HTTP请求的所有细节。这个对象由 Django 在每个请求的处理过程中自动创建，并作为第一个参数传递给视图函数或方法。
>
> **为什么会有这个？**
>
> Django 的 Request 对象的存在是为了提供一个简单的接口，通过这个接口，开发者可以访问关于请求的所有信息，如请求方法（GET、POST等）、上传的文件、已解析的数据、HTTP头部等等。这样的设计可以使得开发者更加方便地处理请求数据，而不必每次都从底层的环境变量中手动提取和解析这些数据。
>
> **作用**
>
> - **数据访问**：开发者可以通过 `request.GET` 和 `request.POST` 访问 GET 和 POST 参数。
> - **状态维护**：通过 `request.session` 来维护用户会话。
> - **用户信息**：通过 `request.user` 访问当前请求的用户对象。
> - **元数据访问**：如 `request.META` 访问请求的元数据，如HTTP头部信息。
>
> 
>
> **DRF 的 Request 对象**
>
> **什么是 DRF 的 Request 对象？**
>
> DRF 的 Request 对象继承自 Django 的 HttpRequest，然后加上了一些额外的功能，使其更适合用于构建API。DRF的 Request 对象包装了 Django 的 HttpRequest，并提供了额外的解析和认证功能。
>
> **为什么会有这个？**
>
> 在构建API时，常常需要处理不同格式的数据（如JSON、XML等），而 Django 的 HttpRequest 主要是设计来处理表单数据的。DRF 扩展了这一功能，使其能够更好地处理各种媒体类型的数据，同时也提供了更灵活的认证和权限管理工具。
>
> **作用**
>
> - **数据解析**：DRF 的 Request 对象使用 pluggable parsers 来解析进来的请求数据，支持多种数据格式。
> - **灵活的认证**：支持多种认证方式，如Token认证、OAuth等。
> - **请求数据的不可变性**：标准 Django 的 `request.POST` 和 `request.FILES` 是可变的，而 DRF 的 `request.data` 提供一个不可变的接口来访问解析后的请求数据。
> - **更详细的请求内容**：比如 `request.query_params` 代替了 Django 的 `request.GET`，提供了更清晰的API使用上下文。
>
> 通过提供这些封装和功能，DRF 的 Request 对象使得开发RESTful API更加直接和便捷，同时也保持了与 Django 本身的良好兼容性。



drf的request是在django上的基础上进一层进行包裹的request



本内容以两个方面进行讲解

- oop知识
- drf请求流程



### 1.3.1 oop

1. 类中的getattr方法如何触发？

```
obj = Foo("king",19)
获取成员的两种方式
obj.name

v1 = getattr(obj,"name")
```

除了上述内容之外，还可以在类中定义__ getattr __ 方法（不会影响上述两个方法使用）

```
class Foo(object):
    def __init__(self,age,name):
        self.age = age
        self.name = name

    def show(self):
        return 123

    def __getattr__(self, item):
        print("this is {}".format(item))
        return 999

obj = Foo("波冈",1)
print(obj.xxx)


输出内容
this is xxx
999
```

由上述内容可以知道，__ getattr __ 触发是在访问类**不存在的成员**时触发



2. 在面向对象中的getattribute方法，什么情况执行？

```python
def __getattribute__(self, item):
    print("this is {}".format(item))
    return 996
    
print(obj.name)
print(obj.age)

输出
this is name
996
this is age
996
```

即无论类中是否有调用的成员函数，都有去使用getattribute方法，并在这个方法下进行执行。

object有自身的getattribute方法，可以自行分情况执行，逻辑如下：

- 对象中有这个成员，直接返回值
- 对象中没有这个成员，直接报错



3. 类分析

```python
class HttpRequest(object):
    def __int__(self):
        pass

    def v1(selfs):
        print("v1")

    def v2(selfs):
        print("v2")


class Request(object):
    def __init__(self,req,xx):
        self._request = req
        self.xx = xx

    #对象中自己有的成员不会触发，没有的成员会触发
    def __getattr__(self, item):
        #item就是传入的调用成员名
        try:
            return getattr(self._request,item)          #相当于执行self._request.yyy
        except AttributeError:
            return self.__getattribute__(item)


req = HttpRequest()
req.v1()
req.v2()

request = Request(req,111)
request.xx
request._request


request.v1()
request.yyy


# request._request.v1()
# request._request.v2()
```

drf的request封装django的request对象逻辑如上述所示

```
request = HttpRequest()				#django
req = DrfRequest(request,123)		#drf

req
req._request
#不通过getattribute方法
req._request.method()
req._request.paht_into()
#通过getattribute方法
req.method()
req.paht_into()
```





### 1.3.2 request源码和参数

```python
def initialize_request(self, request, *args, **kwargs):
    """
    Returns the initial request object.
    """
    parser_context = self.get_parser_context(request)

    return Request(
        request,
        parsers=self.get_parsers(),
        authenticators=self.get_authenticators(),
        negotiator=self.get_content_negotiator(),
        parser_context=parser_context
    )
    
#此处的return就是drf的request，而参数request就是django的request对象
```

request中的参数**kwargs，其实是url中的< int:v1 >传入的

![request源码](../../../public/md_img/drf/request源码.png)

> 在 Django REST Framework（DRF）中，处理HTTP请求的方式稍有不同于标准的Django处理方式，主要是因为它使用了一个定制的`Request`对象来提供一些额外功能，特别是针对API开发的需求。以下是DRF中`Request`对象的调用和初始化过程：
>
> 1. **请求进入**
>
> 当一个HTTP请求到达Django服务器时，首先由Django的中间件和URL路由系统处理。如果请求被指派给一个使用了DRF的视图，处理流程则开始转入DRF特定的逻辑。
>
> 2. **封装为DRF `Request`对象**
>
> 在视图层之前，DRF将标准的Django `HttpRequest`对象封装到DRF的`Request`对象中。这个封装过程是由DRF的视图或视图集（例如`APIView`或`ViewSet`类）的初始处理阶段触发的，具体如下：
>
> - 当请求到达DRF视图时，`APIView`的`as_view()`方法会首先被调用。
> - 随后调用的`dispatch`方法负责实例化DRF的`Request`对象，并将原始的Django `HttpRequest`对象作为参数传递给它。
> - DRF的`Request`对象在初始化时接受这个Django的`HttpRequest`对象，并在内部保存为`_request`属性。同时，它会添加一些特定于API的功能，比如更复杂的解析器逻辑和内容协商。
>
> 3. **认证和权限检查**
>
> 在请求被完全处理之前，`APIView`的`initial`方法会被调用：
>
> - 认证：通过调用`perform_authentication`方法，该方法进一步调用`Request`对象的`.user`访问器，它会触发所有配置的认证类，试图认证当前请求。
> - 权限和节流：在认证后，DRF会检查配置的权限和节流器（throttles）是否允许这个请求继续进行。
>
> 4. **请求处理**
>
> 一旦请求通过了认证和权限检查，控制权就交给了视图函数。此时，开发者可以通过DRF的`Request`对象访问请求数据：
>
> - 使用`request.data`来访问解析后的请求体，这对于处理JSON或其他非表单格式的数据特别有用。
> - 使用`request.query_params`来访问查询参数。
> - 使用`request.files`来访问上传的文件等等。
>
> 5. **响应返回**
>
> 视图处理完请求后，通常会返回一个`Response`对象。DRF接管这个响应，并使用合适的渲染器将数据转换为客户端请求的格式（如JSON、XML等），最后将其发送回客户端。
>
> 这个过程展示了DRF如何提供一个强大且灵活的机制来处理API请求，通过封装和扩展Django的`HttpRequest`对象，增加了许多对API开发非常有用的功能。





## 1.4 drf认证



### 1.4.1 认证使用

用户授权

实现

- 编写类（一个类就是一个认证组件
- 应用组件

```python
from rest_framework.authentication import BaseAuthentication

class MyAuthentication(BaseAuthentication):
    def authenticate(self, request):
        # 去做获取或用认证：
        # 1.读取请求传递的token
        # 2.校验合法性
        # 3.返回值有三种
        # 	3.1 返回元组		认证成功 	request.user request.auth
        #	3.2 抛出异常		认证失败	返回错误信息
        #	3.3	返回None		 多个认证类   [类1,类2,...]   - > 匿名用户
        pass
```



示例1

```python
class MyAuthentication(BaseAuthentication):
    def authenticate(self, request):
        # 去做获取或用认证：
        # 1.读取请求传递的token
        # 2.校验合法性
        # 3.返回值有三种
        #  3.1 返回元组      认证成功   request.user request.auth
        #  3.2 抛出异常      认证失败   返回错误信息
        #  3.3    返回None     多个认证类   [类1,类2,...]   - > 匿名用户
        token = request.query_params.get("token")
        if token:
            return "king",token
        # raise AuthenticationFailed("认证失败")
        raise AuthenticationFailed({"code":2000,'error':"认证失败"})


#不需要登录
class LoginView(APIView):
    authentication_classes = []
    def get(self,request):
        return Response("LoginView")


#需要登录
class UserView(APIView):
    authentication_classes = [MyAuthentication,]
    def get(self,request):
        return Response("UserView")

class OrderView(APIView):
    authentication_classes = [MyAuthentication, ]
    def get(self,request):
        return Response("OrderView")
```



示例2（全局配置视图类）

```python
#drf配置
REST_FRAMEWORK = {
    "UNAUTHENTICATED_USER":lambda:"xxx",
    # "值":["认证组件路径"]
    "DEFAULT_AUTHENTICATION_CLASSES":["api.views.MyAuthentication",]
}


#不需要登录
class LoginView(APIView):
    authentication_classes = []
    def get(self,request):
        return Response("LoginView")


#需要登录（默认带有）
class UserView(APIView):
    def get(self,request):
        return Response("UserView")

class OrderView(APIView):
    def get(self,request):
        return Response("OrderView")
```

优先从全局搜索、再到局部搜索。

ps：认证组件不能写在view视图中。（全局，出现了循环引用）





### 1.4.2 认证面向对象-继承

```python
class APIView(object):
    authentication_classes = 读取配置文件中的列表
    
    def dispatch(self):
        self.authentication_classes
        
class UserView(APIView):
    authentication_classes = [11,22,33]
    
obj = UserView()
obj.dispatch()
```











### 1.4.3 认证组件源码

![认证源码](../../../public/md_img/drf/认证源码.png)

```python
class Request:
    def __init__(self,request,authenticators = None,...):
        self._request = request
        self.suthenticators = authenticators or ()
    
    @property
    def user(self):
        if not hasattr(self, '_user'):
            with wrap_attributeerrors():
                self._authenticate()
        return self._user

    @user.setter
    def user(self, value):
        self._user = value
        self._request.user = value
    
    def _authenticate(self):
        #读取每个认证组件的对象，执行authenticators方法，self为request对象
        for authenticator in self.authenticators:
            try:
                user_auth_tuple = authenticator.authenticate(self)
            except exceptions.APIException:
                self._not_authenticated()
                raise

            if user_auth_tuple is not None:
                self._authenticator = authenticator
                self.user, self.auth = user_auth_tuple
                return
            
    def _not_authenticated(self):
        self._authenticator = None

        if api_settings.UNAUTHENTICATED_USER:
            self.user = api_settings.UNAUTHENTICATED_USER()
        else:
            self.user = None

        if api_settings.UNAUTHENTICATED_TOKEN:
            self.auth = api_settings.UNAUTHENTICATED_TOKEN()
        else:
            self.auth = None       
            
    
class APIView(view):
    authentication_classes = api_settings.DEFAULT_AUTHENTICATION_CLASS
    
    def perform_authentication(self,request):
        request.user
    
    #简化
    def initial(self,request,*args,**kwargs):
        self.perform_authentication(request)
        self.check_premissions(request)
        self.check_throttles(request)
    
    def get_authenticators(self):
        #[认证类的对象,认证类的对象,认证类的对象,...]
        return [auth() for auth in self.authentication_classes]
    
    def initialize_request(self,request,*args,**kwargs):
        parser_context = self.get_parser_context(request)
        
        return Request(
        	request,
        	parsets = self.get_parsers(),
            authenticators = self.get_authenticators(),
            negotiator = self.get_content_negotiator(),
            parser_context = parser_context
        )
    
    #简化
    def dispatch(self,request,*args,**kwargs):
        #第一步 请求的封装（django的request对象+authenticators认证组件） -  > 加载认证组件的过程
        self.args = args
        self.kwargs = kwargs
        request = self.initialize_request(request, *args, **kwargs)
        self.request = request
        self.headers = self.default_response_headers
        
        #第二步:request
        self.initial(request,*args,**kwargs)
        handler = getattr(self,request.method.lower(),self.http_method_not_allowed)
        
        #第三步:执行视图函数
        response = handler(request,*args,**kwargs)
		
        self.response = self.finalize_response(request,response,*args,**kwargs)
        return self.response
    
 

class UserView(APIView):
    authentication_classes =[类1,...]
    def get(self,request):
        return Response("UserView")
```

调用流程

> 以下是 `authenticate` 方法调用的详细流程：
>
> 1. **请求到达**：当一个 HTTP 请求到达 DRF 后，框架首先将请求封装到 `Request` 对象中。
> 2. **中间件处理**：请求经过配置的各种中间件处理，尚未进入到具体的视图（view）层。
> 3. **视图处理前**：在请求达到具体的视图之前，DRF 的调度机制会先进行认证处理。这一步骤是通过视图的 `dispatch` 方法或者通过 DRF 提供的装饰器和权限类实现的。
> 4. **认证方法调用**：
>    - DRF 通过 `APIView` 或者任何继承自 `APIView` 的类的 `initial` 方法调用认证逻辑。
>    - `initial` 方法会依次调用 `perform_authentication`，该方法再调用 `request.user` 访问器。
>    - `request.user` 的获取逻辑中，DRF 会检查是否已经认证过用户。如果没有，它会通过 `request._authenticate` 方法触发具体的 `authenticate` 方法。
> 5. **执行认证类**：
>    - 在 `request._authenticate` 方法中，DRF 会遍历在视图或全局设置中指定的 `authentication_classes`，调用每个认证类的 `authenticate` 方法。
>    - 如果一个认证类返回了一个用户（通常是一个用户对象和认证信息的元组），则认证过程停止，且该用户被视为请求的发起者。
>    - 如果所有认证类都不能认证用户（都返回 `None`），则请求被视为匿名用户的请求。
>    - 如果任何一个认证类抛出了 `AuthenticationFailed` 异常，则该请求将直接返回对应的错误响应（通常是 401 或 403）。
>
> 总结
>
> `authenticate` 方法是在视图层处理之前被调用的，作为请求处理链中的一个重要部分，它决定了用户的认证状态，从而影响到权限控制和后续的请求处理。这个机制确保了在处理业务逻辑之前，用户的身份和权限已经得到了妥当的验证和确认

认证组件源码：

- 加载认证组件，本质就是实例化每个认证类的对象，并封装到request对象



### 1.4.4 多个认证类

1. 都返回None，都没有认证成功，视图是否会被执行？

   视图函数会执行，只不过self.user 和self.auth为None

   ```python
   class URLAuthentication(BaseAuthentication):
       def authenticate(self, request):
           token = request.query_params.get("token")
           if token:
               return "king",token
           return
   
   #请求头    
   class HeaderAuthentication(BaseAuthentication):
       def authenticate(self, request):
           token = request.meta.get("token")
           if token:
               return "king",token
           return
   
   #请求体     
   class BodyAuthentication(BaseAuthentication):
       def authenticate(self, request):
           token = request.data.get("token")
           if token:
               return "king",token
           return
       
   class NoAuthentication(BaseAuthentication):
       def authenticate(self, request):
           raise "异常认证失败"
       
   class OrderView(APIView):
   	authentication_class= [URLAuthentication,HeaderAuthentication,BodyAuthentication,NoAuthentication]
       def get(self,request):
           return Response("OrderView")
   
   ```





### 1.4.5认证-状态码一致问题

```python
class MyAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.query_params.get("token")
        if token:
            return "king",token
        # raise AuthenticationFailed("认证失败")
        raise AuthenticationFailed({"code":2000,'error':"认证失败"})
    
    def authenticate_header(self,request):
        return "token"
```

```python
#APIView中

def handle_exception(self, exc):
    """
    Handle any exception that occurs, by returning an appropriate response,
    or re-raising the error.
    """
    if isinstance(exc, (exceptions.NotAuthenticated,
                        exceptions.AuthenticationFailed)):
        # WWW-Authenticate header for 401 responses, else coerce to 403
        #执行get_authenticate_header方法
        auth_header = self.get_authenticate_header(self.request)

        if auth_header:
            exc.auth_header = auth_header
        else:
            exc.status_code = status.HTTP_403_FORBIDDEN

    exception_handler = self.get_exception_handler()

    context = self.get_exception_handler_context()
    response = exception_handler(exc, context)

    if response is None:
        self.raise_uncaught_exception(exc)

    response.exception = True
    return response



def get_authenticate_header(self, request):
    authenticators = self.get_authenticators()
    if authenticators:
        return authenticators[0].authenticate_header(request)
```

> ### 为什么选择 `authenticators[0]` 的 `authenticate_header`？
>
> 当没有认证成功时（即所有的认证类都未能认证该请求），DRF 需要决定返回什么样的 `WWW-Authenticate` 头部来指示客户端如何进行认证。这个头部在客户端显示的401 Unauthorized响应中是非常重要的，因为它告诉客户端应该如何响应认证失败。
>
> 在DRF的默认实现中，`get_authenticate_header` 方法仅从第一个认证类 (`authenticators[0]`) 获取 `authenticate_header`。这是因为：
>
> 1. **简化和清晰**：假设有多个认证方式，理论上需要发送多个 `WWW-Authenticate` 值。然而，实际上，客户端可能会对多个值感到困惑，不清楚优先采用哪种方式。选择第一个认证类作为主要提示可以简化客户端的处理逻辑。
> 2. **优先顺序**：认证类在 `authentication_classes` 中的顺序代表了它们的优先级。通常，开发者会将最常用或最优先的认证方式放在列表的前面。







### 1.4.6 认证扩展-子类约束

本节内容与drf无关，是python开发常见内容



```python
class Foo(object):
    def f1(self):
        raise NotImplementedError("...")

class News(Foo):
    def f1(self):
        print("1234")
```

对于写了raise NotImplementedError的方法，继承后**必须重写并实现**

> ### 为什么使用 `NotImplementedError`？
>
> 1. **明确接口要求**：通过在方法中加入 `raise NotImplementedError`，可以清楚地告诉其他开发者这个方法是一个接口，需要在子类中进行具体实现。这样做有助于维护代码的整洁性和一致性。
> 2. **促进良好的设计**：这种模式鼓励使用抽象基类（abstract base class, ABC）来定义类的基本功能和接口。这是软件开发中常用的设计模式，有助于减少代码的重复并提高代码的可维护性。
> 3. **提高代码的安全性**：如果子类没有实现必要的方法而试图使用它，Python 会抛出错误。这有助于在开发过程中早期发现问题，避免在生产环境中因为接口实现不完整而导致的错误。



## 1.5 案例-用户登录和认证



