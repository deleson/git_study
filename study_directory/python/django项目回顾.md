# Django开发

- 安装Django

  ```
  pip install django
  ```

- 创建Django项目

  ```
  django-admin startproject mysite
  ```

  ps：也可以使用pycharm创建。

- 创建app

  ```
  python manage.py startapp app01
  
  ```

- setting注册app（app01.apps.App01Config

- 配置静态文件路径和模板路径

- 配置数据库相关操作(Mysql)

  - 第三方模块

    ```
    pip install mysqlcient
    ```

  - 自己先去MySQL创建一个数据库

  - 配置数据库连接settings.py

  - 在app下的models.py编写数据库字段类

  - 执行两个命令

    ```
    python managy.py makemigrations
    python manage.py migrate
    ```

- 在urls.py，路由（URL和函数的对应关系）

- 在views.py，视图函数，编写业务逻辑

- 在templates目录，编写HTML模板（含有模板语法，继承）

- ModelForm & Form，可以方便开发增删改查

  - 生成HTML标签
  - 请求数据进行校验
  - 保存到数据库
  - 获取错误信息

- Cookie和Session，用户登录信息保存起来。

- 中间件，基于中间件实现用户认证（基于 proecess_request和process_response）

- ORM操作

  ```
  models.模型名.object.filter(id="xxx")
  models.模型名.object.filter(id="xxx").order_by("-id")
  ```

- 分页组件











## 1.Ajax请求



## 2.订单

```python
class Order(models.Model):
    """ 订单"""
    oid = models.CharField(verbose_name="订单号",max_length=64)
    title = models.CharField(verbose_name="名称",max_length=32)
    price = models.IntegerField(verbose_name="价格")

    status_choices = (
        (1,"待支付"),
        (2,"已支付"),
    )

    status = models.SmallIntegerField(verbose_name="状态",choices=status_choices,default=1)


    admin = models.ForeignKey(verbose_name="管理员",to=Admin,on_delete=models.CASCADE)
```





想要去数据库获数据时：对象/字典

```python
#对象，当前行的所有数据
row_object = models.Order.objects.filter(id=uid).first()
row_object.id


#字典
row_dict = models.Order.objects.filter(id=uid).values("id","title"),first()
```



```python
#queryset =[obj,obj]
queryset = models.Order.objects.all()

#queryset = [{obj},{obj}]
queryset = models.Order.objects.all().values("id","title")


#queryset = [{1,"xx"},...]
queryset = models.Order.objects.all().values_list("id","title")
```





## 3.图表

- highchart，国外
- echarts，国内







## 4.文件上传





### 4.1 基本操作

```html
前端
    <form action="post" enctype="multipart/form-data">
        {% csrf_token %}
        <input type="text" name="username">
        <input type="file" name="username">
        <input type="submit" value="提 交">
    </form>

后端
    print(request.POST)
    print(request.FILES)
```







### 案例：批量上传数据



```python
def depart_multi(request):
    """批量新建（excel文件）"""

    #1.获取用户上传从文件对象
    file_objcet = request.FILES.get("exc")
    print(type(file_objcet))
    #2.对象传递給openpyxl，有openpyxl读取文件内容
    wb = load_workbook(file_objcet)
    sheet = wb.worksheets[0]

    #3.循环获取每一行（从第二行开始
    for row in sheet.iter_rows(min_row=2):
        text = row[0].value
        data_exist = models.Department.objects.filter(title=text).exists()
        if not data_exist:
            models.Department.objects.create(title=text)


    return redirect("/depart/list/")
```

```html
<div>
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading">批量上传</div>
        <div class="panel-body">
            <form action="/depart/multi/" enctype="multipart/form-data" method="post">
                {% csrf_token %}
                <div class="form-group">
                    <input type="file" name="exc">
                </div>

                <input type="submit" value="上传" class="btn btn-xs btn-info">
            </form>
        </div>
    </div>
</div>
```







### 案例：混合数据（Form）

提交页面时：用户输入数据+文件（输入不能为空、报错）

- Form生成html标签：type=file
- 表单的验证
- form.cleaned_data 获取数据+文件对象

```python
from django.shortcuts import render, HttpResponse
from django import forms
from app02.utils.Bootstrap import BootStrapForm
from app02 import models
import os


def upload_list(request):
    if request.method == "GET":
        return render(request, "upload_list.html")

    print(request.POST)
    print(request.FILES)

    file_object = request.FILES.get("avater")
    print(file_object.name)

    f = open("a1.png", mode='wb')
    for chunk in file_object.chunks():
        f.write(chunk)
    f.close()

    return HttpResponse(",,,")


class UpForm(BootStrapForm):
    bootstrap_exclude_fields = ['img']

    name = forms.CharField(label="姓名")
    age = forms.IntegerField(label="年龄")
    img = forms.FileField(label="头像")


def upload_form(request):
    title = "form上传"
    if request.method == "GET":
        form = UpForm()

        context = {
            "form": form,
            "title": title
        }
        return render(request, "upload_form.html", context)
    form = UpForm(data=request.POST, files=request.FILES)

    context = {
        "form": form,
        "title": title
    }
    if form.is_valid():
        print(form.cleaned_data)
        #1.读取图片内容，写入到文件夹冰获取文件的路径
        image_object = form.cleaned_data.get("img")
        # file_paht = "app02/static/img/{}".format(image_object.name)
        db_file_path = os.path.join("static","img","upload",image_object.name)
        file_path = os.path.join("app02",db_file_path)

        f = open(file_path,mode ="wb")
        for chunk in image_object.chunks():
            f.write(chunk)
        f.close()
        #2.将图片文件路径写入到数据库
        models.Boss.objects.create(
            name = form.cleaned_data["name"],
            age  = form.cleaned_data["age"],
            img = db_file_path,
        )
        return HttpResponse("上传成功")

    return render(request, "upload_form.html", context)
```

注意：目前，所有的静态文件都只能放在static目录中



在django的开发过程中两个特殊的文件夹：

- static，存放静态文件的路径，包括：css、js、项目图片
- media，用户上传数据的目录







### 4.2启用media

在url.py中进行配置

```python
re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT})
```

在settings.py中进行配置

```python
import os
MEDIA_ROOT = os.path.join(BASE_DIR,"media")
MEDIA_URL  = "/admin/"
```



在浏览器上访问地址





### 案例：混合数据（ModelForm）



models.py

```python
class City(models.Model):
    name = models.CharField(verbose_name="名称",max_length=32)
    count = models.IntegerField(verbose_name="人口")
    #注意img区别Form实现上传，本质上数据库也是CharField
    #可以自动保存数据,支持upload_to,为media下目录
    img = models.FileField(verbose_name="logo",max_length=128,upload_to='city/')
```



定义ModelForm

```python
class UpModelForm(BootstrapModelForm):
    bootstrap_exclude_fields = ['img']
    class Meta:
        model = models.City
        fields = "__all__"
```





视图

```python
def upload_Modelform(request):
    title = "ModelForm上传"
    if request.method == "GET":
        form = UpModelForm()
        context = {
            "form": form,
            "title": title,
        }
        return render(request, "upload_form.html", context)
    form = UpModelForm(data=request.POST, files=request.FILES)

    context = {
        "form": form,
        "title": title,
    }
    if form.is_valid():
        #对于ModelForm可以save保存
        #将上传路径（media/city）+ 字段值写入数据库
        form.save()
        return HttpResponse("ModelForm上传成功")
    return render(request, "upload_form.html", context)
```





小结，对于上传文件

- 可以手动去写

  ```python
  file_object = request.FILES.get('exc')
  ...
  ```

  

- Form组件（表单验证）

  ```python
  request.POST
  file_object = request.FILES.get("exc")
  
  具体文件操作还是手动
  ```

  

- ModelForm组件(表单验证+自动保存数据库+自动保存文件)

  ```python
  -Media文件夹配置
  -Models.py定义文件
  ```

  
