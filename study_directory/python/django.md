# 1.安装django

pip install django

安装django会出现两个

- django 框架源码
- django-admin.exe 工具，用于创建django项目中的文件和文件夹





# 2.创建项目

> django项目中会有一些默认的文件和默认的文件夹



在终端

- 打开终端

- 进入某个（项目）目录

- 执行命令创建项目

  ...\django-admin.exe startproject 项目名称

  ```终端
  django-admin startproject mysite
  ```

  

在pycharm

- 直接选择创建





特殊说明：

- 命令行：创建的项目是标准的
- pycharm，在标准的基础上默认加了东西
  - templates目录
  - setting.py文件中添加了东西





默认项目的文件介绍

```
project_name
	manage.py		【项目的管理、启动项目、创建app、数据管理】
	project_name
		__init__.py
		settings.py	【项目配置文件】【经常操作】
		urls.py		【URL和函数的对应关系】【经常操作】
		asgi.py		【接收网络请求】【不要动】
		wsgi.py		【接受网络请求】【不要动】

```





# 3.APP

```
-项目
	-app，用户管理【表结构，函数，html模板，css】
	-app，订单管理【表结构，函数，html模板，css】
	-app，网站【表结构，函数，html模板，css】
	。。。
	
	
注意：本项目比较简单，无需多app
```

创建app命令

```
python manage.py startapp app01
```



app目录文件介绍

```
app01
	-__init__.py
	-admin.py			【django默认提供了admin后台管理】
	-apps.py			【app启动类】
	migrations			【数据库变更记录】
		__init__.py
	models.py			【重要，对数据库操作（默认有个数据库）】
	tests.py			【单元测试，写业务不用】
	views.py			【重要，视图函数】
```





# 4.快速上手



下面必须确保

- app已经注册（不是创建

  ```python
  app01.apps.App01Config'
  ```

- 编写URL和视图函数的对应关系【urls.py中编写】

  - 先导入app的视图py
  - 后写入对应关系

- 编写视图函数【view.py】

- 启动

  - 命令行启动 python manage.py runserver
  - pycharm启动





## 4.1页面

需要写的内容（仅返回字符串

- url对应关系【urls.py】
- view.py视图函数编写【view.py】

仅返回字符串，仅仅使用HttpResponse("文本")





## 4.2templates

如果需要返回html文件

则需要返回 render(reqest,"xxx.html")

自动寻找templates目录下寻找



在视图函数中写的html文件

```
#1.首先去settings.py中的DIRS中寻找
#2.然后根据app的注册顺序去寻找templates
```







## 4.3静态文件

- 在开发过程中一般将：图片、css、js当作静态文件处理

- 静态文件默认在app里面的static中。
- 静态文件引入一般使用{%load static%}







# 5.模板语法

本质上：在HTML中写一些占位符，由数据对这些占位符进行替换和处理

这个是django开发的模板语法



模板语法

- 变量{{}}
- 循环{%for %} {%endfor%}
- 条件{% if %} {% elif %} {% endif %}

- 其他注意事项：
  - 在模板中，列表元素通过.来访问，而不是[]



![django流程.drawio](..\..\public\md_img\django\django流程.drawio.png)







# 6.请求和响应

三个响应

- 返回字符串 HttpResponse

- 返回html内容 render(request,'xx.html',{:})

- 返回重定向地址 redirect('https://')

  > 关于重定向，其实django是告诉浏览器目的地址，从而让浏览器自行去访问，而不是django请求目的地址得到html返回给浏览器



请求相关

- 获取请求方式 request.method
- 在URL上传递值，接受这个参数 request.GET
- 获取POST请求的所有参数 request.POST



# 7.数据库操作

可以使用的方法

- mysql数据库+pymysql
- django开发操作数据库，可以通过内部的ORM框架（而不是通过pymysql）

![orm介绍.drawio](..\..\public\md_img\django\orm介绍.drawio.png)



需要安装第三方模块

pip install mysqlclient



## 7.1ORM

ORM 可以帮助我们做两件事：

- 创建、修改、删除数据库中的表（不用自己写sql语句）【无法创建数据库】
- 操作表中的数据（不用写sql语句）





### 7.1.1自己创建数据库

- 启动mysql服务
- 自导创建数据库



### 7.1.2.django连接数据库

在settings.py中进行配置和修改





### 7.1.3django操作表

操作表可以分成

- 创建表
- 删除表
- 修改表

上述操作应该在models.py文件中



创建表步骤如下：

注意：app需要事先注册，否则不会提交数据库

1.model.py文件中创建类

```python
# Create your models here.
class UserInfo(models.Model):
    name = models.CharField(max_length=32)
    password = models.CharField(max_length=64)
    age = models.IntegerField()


"""
创建了上述类，可以帮助生成下面的语句
create table app01_userinfo(
    id bigint auto_crement primary key,
    name varchar(32),
    passwrod varchar(64),
    age int)
"""
```

2. 运行两条指令（正式创建数据库表
   1. 生成迁移文件 python manage.py makemigrations
   2. 应用迁移文件 python manage.py migrate



对于数据库表的删除字段和删除表，可以对类直接注释

但是如果是在类中进行字段添加，需要有一定的限制（下面有三种选择）

- 命令行设置所有值（手动写
- 添加默认值（代码default
- 可以为空（null = True

> 综上所述，如果想对表结构进行跳跳转
>
> - 在models.py文件中操作类
> - 在执行两条命令







### 7.1.4django操作表中数据

```python
from app01.models import Department,UserInfo
def orm(request):

#1.下面六条即为添加
    # Department.objects.create(title="销售部")
    # Department.objects.create(title="IT部")
    # Department.objects.create(title="运营部")
    # UserInfo.objects.create(name="zhu",password="123")
    # UserInfo.objects.create(name="zhu",password="123")
    # UserInfo.objects.create(name="zhu",password="123")

#2.下面为删除,先筛选后删除
    UserInfo.objects.filter(id=3).delete()
    Department.objects.all().delete()

#3.下面为获取数据
    #data_list = {行，行，行} data_list获取的是QuerySet类型
    data_list = UserInfo.objects.all() #相当于select * from
    for obj in data_list:
        print(obj.id,obj.name,obj.password)

    data_list2  = UserInfo.objects.filter(id=1)
    row_obj = data_list2.first()
    print(row_obj.id,row_obj.name,row_obj.password)


#4.更新数据
    UserInfo.objects.all().update(password = 999)
    UserInfo.objects.filter(id=2).update(password = 999)
    UserInfo.objects.filter(name = "朱弘飞").update(age=999)


    return HttpResponse("成功")
```

通过上述内容可以看出，QuerySet对象可以自动动态的修改数据表中的数据

> ### 执行 SQL 语句
>
> - 当你定义一个 `QuerySet`（例如通过 `UserInfo.objects.filter(name="朱弘飞")`），你实际上是在构建一个 SQL 查询，但这个查询在这一刻还没有被执行。`QuerySet` 是懒惰的，它仅在需要评估结果（如迭代、访问元素、调用 `.count()`、`.update()` 等）时才真正执行对应的 SQL 语句。
> - 特定的操作，如 `.update()` 和 `.delete()`，会立即执行相应的 SQL `UPDATE` 或 `DELETE` 语句来修改数据库中的数据，而不需要将数据加载到 Python 内存中。



# 案例

## 伪联通新闻中心(未实现)







## 用户登录

默认情况下，django有个CSRF校验

解决这个问题，可以在form表单中加上{% csrf_token %}







## 用户管理（orm案例）

1**.展示用户列表**

- url
- 函数
  - 获取所有用户信息
  - html渲染

​	具体流程为：

	1. url写网络关联路径和函数
	1. view.py中写数据库请求并传送变量和返回渲染的模板（info_list.html）
	1. info_list.html中写具体的前端（含模板语言）





**2.添加用户**

- url

- 函数

  - GET，看到页面，输入内容
  - POST，提交，写入到数据库

  

3**.删除用户**

- url

- 函数

  ```
  ?nid = 1
  ?nid = x
  
  
  def func(request):
   ....
   return HttpResponse("删除成功")
  ```

  







注意：

- request得到的html内容都是字符串，后续传入数据库时才进行转换
- django的form表单向自身网址进行post请求时，需要加上{%csrf_token%}（一般要求所有post请求都要

- 写路径url的时候，统一最后都加上/





