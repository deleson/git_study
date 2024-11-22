# 1.视图类转变视图函数流程源码

## 1.1 as_view调用基本流程

 request源码和参数

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

![request源码](E:/studyWork/git_study/public/django_img/drf/request源码.png)

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

为什么在as_view中返回的是view，而不是view()？前者不是返回函数本身吗？这里不是要返回view函数调用吗？

<br>

<br>

<br>

## 1.2 源码详细解释



### 1.**方法签名与参数**：

```python
@classmethod
def as_view(cls, **initkwargs):
```

因此使用 `@classmethod` 装饰器。这个方法接收一个类（`cls`）和任意数量的初始化关键字参数（`**initkwargs`）。

即@classmehtod表示为一个类方法

<br>

<br>

### 2.**处理 `queryset` 属性**：

```python
if isinstance(getattr(cls, 'queryset', None), models.query.QuerySet):
    def force_evaluation():
        raise RuntimeError(
            'Do not evaluate the `.queryset` attribute directly, '
            'as the result will be cached and reused between requests. '
            'Use `.all()` or call `.get_queryset()` instead.'
        )
    cls.queryset._fetch_all = force_evaluation

```

以下是 `getattr()` 和 `isinstance()` 方法的原型、作用，以及它们在上述代码中的具体作用的表格：

| 方法           | 原型                                             | 作用                                                | 在本代码中的作用                                             |
| -------------- | ------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------ |
| `getattr()`    | `getattr(object, attribute_name, default_value)` | 用于从对象或类中获取指定名称的属性值。              | 在代码中，它用于从 `cls` 类中获取 `queryset` 属性。如果 `queryset` 属性不存在，返回 `None`。 |
| `isinstance()` | `isinstance(object, class)`                      | 检查 `object` 是否是指定类 `class` 或其子类的实例。 | 在代码中，它用于检查 `cls.queryset` 是否是 `models.query.QuerySet` 类的实例（即检查 `queryset` 是否是一个 `QuerySet` 对象）。如果是，则执行后续的代码。 |

1. **`getattr()` 方法**：
   - **原型**：`getattr(object, attribute_name, default_value)`
   - **作用**：从 `object`（可以是实例或类）中获取名为 `attribute_name` 的属性值。如果该属性不存在，则返回 `default_value`，在这段代码中 `default_value` 是 `None`。
   - **在本代码中的作用**：`getattr(cls, 'queryset', None)` 用来从 `cls` 类中获取 `queryset` 属性。如果 `queryset` 属性存在，它返回该属性的值；如果不存在，则返回 `None`。

2. **`isinstance()` 方法**：
   - **原型**：`isinstance(object, class)`
   - **作用**：检查 `object` 是否是 `class` 或其子类的实例。如果是，返回 `True`；如果不是，返回 `False`。
   - **在本代码中的作用**：`isinstance(getattr(cls, 'queryset', None), models.query.QuerySet)` 检查从 `cls` 类获取的 `queryset` 是否是 `QuerySet` 对象。如果是 `QuerySet` 类型，则返回 `True`，执行后续的代码；如果不是，则跳过后续的处理。

<br>

举例说明如下

```python
from django.db import models
from rest_framework.views import APIView

# 假设这是一个 Django 模型
class Book(models.Model):
    title = models.CharField(max_length=100)

# DRF 视图类
class BookView(APIView):
    queryset = Book.objects.all()  # 这里定义了一个 QuerySet

    def get(self, request):
        books = self.queryset
        return Response({'books': books})

```

上述BookView类中，定义了一个queryset属性

<br>

当判断queryset值存在且为QuerySet实例时，定义一个函数，将函数对象赋值给cls.queryset._fetch_all中

<br>

`_fetch_all` 是 Django ORM 中 `QuerySet` 对象的一个 **内部方法**，用于触发数据库查询并获取查询结果。它通常是在 `QuerySet` 对象被真正访问时调用的，尤其是在你想获取所有查询结果时。

<br>

解释 `fetch_all` 方法

在 Django 中，`QuerySet` 是一个 **延迟加载（lazy loading）** 的对象，意味着它只有在真正需要它的数据时才会执行数据库查询。`_fetch_all()` 方法正是用来触发查询并返回 `QuerySet` 中所有数据的。

虽然它是一个内部方法，通常开发者不需要直接使用它，但它在 `QuerySet` 对象被完全评估时自动被调用。

<br>
为什么会有 `_fetch_all` 方法？

- **延迟加载机制**：`QuerySet` 被设计为延迟加载的对象，数据库查询不会立即执行，直到你尝试访问或迭代它的内容（例如，遍历它，或者使用 `.first()`、`.count()` 等方法）。
- **`_fetch_all()` 的作用**：当 `QuerySet` 被访问并且需要获取所有数据时，Django 内部会调用 `_fetch_all()` 来触发查询并从数据库中检索数据。

<br>

```python
cls.queryset._fetch_all = force_evaluation
```

这段代码的目的是 **拦截 `QuerySet` 的 `_fetch_all()` 方法**，并将它替换为 `force_evaluation()`。`force_evaluation()` 函数会抛出一个 `RuntimeError` 异常，提醒开发者不要直接评估 `queryset` 属性，以防查询结果被缓存，造成数据不一致。

<br>

在 DRF 的源码中，将 `force_evaluation()` 函数绑定到 `queryset._fetch_all` 目的是：

1. **`force_evaluation()` 抛出异常**：通过将 `_fetch_all` 替换为 `force_evaluation`，任何直接访问 `queryset._fetch_all()` 的行为都会引发 `RuntimeError` 异常。这个异常会提醒开发者：不要直接访问 `queryset`，而应该使用 `.all()` 或 `.get_queryset()` 等标准方法来获取数据。
2. **鼓励正确的查询方式**：开发者应该通过 `.all()` 或 `.get_queryset()` 来获取查询集，而不是通过直接访问 `queryset` 属性。这样可以确保查询按预期的方式执行，并避免查询缓存导致的不一致性。
3. **通过 `as_view()` 强制使用标准接口**：在 DRF 中，`as_view()` 是设置视图的标准方式。通过替换 `_fetch_all`，DRF 强制开发者遵循一种正确的模式来访问 `queryset`，从而维护良好的查询行为。



<br>

```python
def force_evaluation():
    raise RuntimeError(
        'Do not evaluate the .queryset attribute directly, '
        'as the result will be cached and reused between requests. '
        'Use .all() or call .get_queryset() instead.'
    )
    # 防止直接评估 `queryset`
cls.queryset._fetch_all = force_evaluation
```

上述的代码主要是为了防止直接评估queryset

 <br>

什么叫 **“防止直接评估 `queryset` 属性”**。?

> 背景
>
> `QuerySet` 是 Django ORM 中用于表示数据库查询结果的对象。它是一个 **延迟加载的对象**，这意味着 Django 并不会立刻执行数据库查询，而是直到你需要它的结果时（例如遍历它或获取特定字段）才会发出查询请求。
>
> 但是，如果你直接评估 `queryset`（即在没有通过合适的接口方法的情况下强制执行它），Django 可能会缓存查询结果，导致之后的请求复用相同的结果，可能会出现不一致的数据。
>
> <br>
>
> 什么是 **直接评估 `queryset` 属性**？
>
> 直接评估 `queryset` 属性指的是在没有使用 Django 提供的标准方法（如 `.all()` 或 `.get_queryset()`）的情况下，直接访问或强制执行 `queryset`，比如通过访问它的 `_fetch_all()` 方法。
>
> `_fetch_all()` 是 `QuerySet` 对象内部使用的一个方法，通常不应该被直接调用。如果被直接调用，查询结果会被缓存，这可能会导致不同的请求之间使用相同的查询结果，从而导致 **数据一致性问题**。
>
> <br>
>
> 举个例子
>
> 1. **正确使用 `QuerySet`**：
>
> 你应该通过 `.all()` 或 `.get_queryset()` 方法来获取数据，因为这些方法会确保每次请求时都执行最新的数据库查询，而不会复用之前的查询结果。
>
> ```python
> # 正确的用法
> queryset = Book.objects.all()  # 这里是通过 `.all()` 方法获取 `QuerySet`，不会直接执行查询
> books = queryset  # 延迟执行，查询会在实际使用时被触发
> 
> # 如果我们需要结果
> for book in books:
>     print(book.title)
> ```
>
> 在这个例子中，`Book.objects.all()` 返回的是一个 `QuerySet`，并没有立即查询数据库。只有当你对 `queryset` 进行迭代时（或者用其他方法获取数据），Django 才会执行数据库查询。
>
> <br>
>
> 2. **错误的直接评估 `queryset`**：
>
> 假设我们没有使用 `.all()` 或 `.get_queryset()`，而是直接通过 `_fetch_all` 强制评估 `queryset`，这时查询会被立刻执行并缓存，后续的请求可能会复用相同的查询结果。
>
> ```python
> # 错误的做法（直接评估）
> queryset = Book.objects.all()
> queryset._fetch_all()  # 这里直接调用了 `_fetch_all()`，这会立刻执行数据库查询并缓存结果
> ```
>
> 在这段代码中，`queryset._fetch_all()` 会强制执行数据库查询，获取查询结果并将其缓存。之后，如果你再访问 `queryset`，Django 会复用之前的查询结果，而不会重新查询数据库，这就可能导致数据的 **不一致性**。
>
> <br>
>
> 3. **通过 `force_evaluation()` 防止直接评估**：
>
> 为了避免直接评估 `queryset`，我们可以通过将 `force_evaluation()` 函数绑定到 `_fetch_all` 来阻止这种行为。
>
> ```python
> def force_evaluation():
>     raise RuntimeError(
>         'Do not evaluate the .queryset attribute directly, '
>         'as the result will be cached and reused between requests. '
>         'Use .all() or call .get_queryset() instead.'
>     )
> 
> # 防止直接评估 `queryset`
> cls.queryset._fetch_all = force_evaluation
> ```
>
> 这样，如果有人尝试直接调用 `_fetch_all`（即直接评估 `queryset`），就会抛出一个 `RuntimeError` 异常，提醒开发者不要直接评估 `queryset`，并应该使用 `.all()` 或 `.get_queryset()` 来获取数据。
>
> 为什么要防止直接评估 `queryset`？
>
> 直接评估 `queryset` 会导致以下问题：
>
> 1. **缓存问题**：直接评估 `queryset` 会触发数据库查询并缓存结果，如果数据更新了，缓存的结果就不再有效，导致不一致的数据。
>
> 2. **延迟加载失效**：如果你在数据库查询之前就强制执行了查询，那么你就失去了 Django 延迟加载（Lazy Loading）机制的好处。延迟加载可以确保每次访问数据时都获取到最新的数据。
>
> 总结
>
> - **防止直接评估 `queryset`** 是指避免直接通过 `_fetch_all()` 等内部方法来强制执行查询。
> - 应该使用 Django 提供的标准方法，如 `.all()` 或 `.get_queryset()`，来确保查询在正确的时机执行并且避免缓存问题。
> - 通过将 `force_evaluation()` 绑定到 `_fetch_all`，可以确保开发者不会直接评估 `queryset`，从而避免潜在的数据一致性问题。

<br>

<br>

### 3.执行父类的as_view方法

``` python
view = super().as_view(**initkwargs)

```

`super().as_view(**initkwargs)` 中的 `as_view()` 方法是将类视图实例化为视图函数的关键步骤。它完成了以下任务：

1. **创建视图类的实例**，使得视图可以处理请求。
2. **传递初始化参数**，让外部可以在视图初始化时传入额外的配置信息。
3. **将视图类和初始化参数绑定到视图函数**，确保视图函数可以访问类视图的属性。
4. **处理认证、权限等配置**，为视图提供适当的上下文。
5. **返回一个可调用的视图函数**，使得视图能够在 Django 的 URL 配置中使用。

<br>



```python
    @classonlymethod
    def as_view(cls, **initkwargs):
        """Main entry point for a request-response process."""
        for key in initkwargs:
            if key in cls.http_method_names:
                raise TypeError(
                    "The method name %s is not accepted as a keyword argument "
                    "to %s()." % (key, cls.__name__)
                )
            if not hasattr(cls, key):
                raise TypeError(
                    "%s() received an invalid keyword %r. as_view "
                    "only accepts arguments that are already "
                    "attributes of the class." % (cls.__name__, key)
                )

        def view(request, *args, **kwargs):
            self = cls(**initkwargs)
            self.setup(request, *args, **kwargs)
            if not hasattr(self, "request"):
                raise AttributeError(
                    "%s instance has no 'request' attribute. Did you override "
                    "setup() and forget to call super()?" % cls.__name__
                )
            return self.dispatch(request, *args, **kwargs)

        view.view_class = cls
        view.view_initkwargs = initkwargs

        # __name__ and __qualname__ are intentionally left unchanged as
        # view_class should be used to robustly determine the name of the view
        # instead.
        view.__doc__ = cls.__doc__
        view.__module__ = cls.__module__
        view.__annotations__ = cls.dispatch.__annotations__
        # Copy possible attributes set by decorators, e.g. @csrf_exempt, from
        # the dispatch method.
        view.__dict__.update(cls.dispatch.__dict__)

        # Mark the callback if the view class is async.
        if cls.view_is_async:
            markcoroutinefunction(view)

        return view
```

#### 1.classonlymethod装饰器

保证as_view这个父类方法只能通过类调用（而非实例）

<br>

#### 2.检查传入的initkwargs参数

```python
for key in initkwargs:
    if key in cls.http_method_names:
        raise TypeError(
            "The method name %s is not accepted as a keyword argument "
            "to %s()." % (key, cls.__name__)
        )
    if not hasattr(cls, key):
        raise TypeError(
            "%s() received an invalid keyword %r. as_view "
            "only accepts arguments that are already "
            "attributes of the class." % (cls.__name__, key)
        )

```

**`initkwargs`** 是 `as_view` 方法接收的关键字参数。该方法检查传入的每个关键字参数，确保它们不是 HTTP 方法名（如 `'GET'`、`'POST'` 等），因为这些应该由 Django 自动处理，而不是作为 `initkwargs` 参数传入。

hasattr 是判断是否有这个参数，返回布尔值。即还会检查这些关键字参数是否在类视图中已经定义。如果不是，抛出 `TypeError`，提醒开发者传入的参数无效。

<br>

`as_view()` 在大多数情况下并不会接收到额外的 `initkwargs` 参数，特别是在常见的 URL 路由配置中，`as_view()` 通常不需要手动传递这些参数。因此，这段代码看起来似乎在很多情况下不会被执行。然而，它的存在是有其重要意义的，下面我们来深入分析一下：

`initkwargs` 的作用

`initkwargs` 是通过 `as_view()` 传递给视图类的一组初始化参数。在某些特定的情况下，`initkwargs` 用于动态设置视图的配置或属性，这使得视图可以在实例化时根据需要进行自定义配置。

比如，某些复杂的视图可能会需要额外的参数（例如：配置选项、用户认证信息、请求处理参数等）。这时，`initkwargs` 允许开发者在 `as_view()` 中通过关键字参数传递这些信息。

<br>

为什么会检查 `initkwargs` 参数？

尽管在大多数情况下，我们通常不传递额外的 `initkwargs`，但 **Django 设计了这段检查逻辑** 以确保视图实例化时的参数是合法的。具体来说，这段代码检查以下两个方面：

1. **方法名称（HTTP 方法）**：

   - **检查是否是 HTTP 方法**：代码首先检查 `initkwargs` 中是否包含与 HTTP 方法（如 `'GET'`、`'POST'`）相关的参数。如果是，抛出 `TypeError`。
   - **原因**：HTTP 方法是由 Django 自动处理的（例如，通过 `get()` 或 `post()` 方法），而不是作为 `initkwargs` 传入。开发者不应该在 `as_view()` 中传递这些值，否则会引发异常，提醒开发者不要把它们当作自定义参数传递。

   ```python
   if key in cls.http_method_names:
       raise TypeError(
           "The method name %s is not accepted as a keyword argument "
           "to %s()." % (key, cls.__name__)
       )
   ```

2. **检查是否是类的有效属性**：

   - **检查 `initkwargs` 中的键是否是类的有效属性**：如果 `initkwargs` 中包含类没有定义的属性，抛出 `TypeError`。
   - **原因**：`initkwargs` 中的每个关键字参数应该是视图类的已定义属性。此检查确保 `as_view()` 方法接收的参数是合法的，并且不会让一些无效的参数混入视图的实例化过程中。

   ```python
   if not hasattr(cls, key):
       raise TypeError(
           "%s() received an invalid keyword %r. as_view "
           "only accepts arguments that are already "
           "attributes of the class." % (cls.__name__, key)
       )
   ```

<br>

实际情况下 `initkwargs` 会传递什么参数？

`initkwargs` 主要是通过 `as_view()` 的调用时传递给视图的参数。一般情况下，Django 和 DRF 的 `as_view()` 方法会接收一些视图配置参数：

- **`kwargs`**：它包含了从 URL 配置传递给视图的参数（如 URL 中的路径参数）。
- **其他配置参数**：在某些自定义视图中，可能会通过 `as_view()` 向视图传递其他配置参数（如权限配置、过滤器等）。

例如：

```python
class MyView(APIView):
    def __init__(self, custom_config=None, **kwargs):
        self.custom_config = custom_config
        super().__init__(**kwargs)

# 在 URL 配置中传递 initkwargs
path('api/something/', MyView.as_view(custom_config="my_config"), name='custom_view')
```

在这个例子中，`custom_config="my_config"` 就是一个传递给 `as_view()` 的 `initkwargs` 参数。该参数会在 `as_view()` 中传递给视图实例化方法并被传递到 `__init__()` 中。通过这种方式，`as_view()` 可以动态地配置视图的行为。

<br>

作用总结

- 这段代码的主要作用是 **确保传递给视图的 `initkwargs` 参数是合法的**。如果参数中包含 HTTP 方法名或无效的属性，它会抛出 `TypeError`，提醒开发者避免错误配置。
- 在大多数常见用例中，确实不会传递 `initkwargs`，但为了保证灵活性和防止错误配置，Django 保留了这个检查机制。
- 如果你确实在 `as_view()` 中传递了额外的初始化参数，Django 会通过这些检查保证它们是合法的，避免潜在的错误。

虽然在常规的视图调用中不经常传递 `initkwargs`，但是在某些高级用法中，开发者可以利用它来传递自定义配置或额外参数，增加视图的灵活性和可配置性。

<br>

#### 3.创建视图函数View

```python
def view(request, *args, **kwargs):
    self = cls(**initkwargs)
    self.setup(request, *args, **kwargs)
    if not hasattr(self, "request"):
        raise AttributeError(
            "%s instance has no 'request' attribute. Did you override "
            "setup() and forget to call super()?" % cls.__name__
        )
    return self.dispatch(request, *args, **kwargs)
```

注意

- 上述的view方法是一个闭包。
- self只是一个普通变量名，而不是类方法中的self。
- request是django进入视图函数时候自动传入的

> `request` 是如何传递给 `view` 函数的？
>
> 在 Django 的 URL 配置中，当请求匹配到某个视图时，Django 会自动调用该视图并传入一个 `HttpRequest` 对象。例如，在 URL 配置中：
>
> ```
> urlpatterns = [
>     path('my-url/', MyView.as_view(), name='my-view'),
> ]
> ```
>
> - `MyView.as_view()` 返回一个视图函数，这个函数会接收来自 Django 请求系统的 `request` 对象。
> - Django 会将 `request` 对象自动传递给 `view` 函数（由 `as_view()` 创建的 `view` 函数）

<br>

##### 1.调用setup方法

```python
def setup(self, request, *args, **kwargs):
    """Initialize attributes shared by all view methods."""
    if hasattr(self, "get") and not hasattr(self, "head"):
        self.head = self.get
    self.request = request
    self.args = args
    self.kwargs = kwargs
```

这段 `setup()` 方法的实现是在 Django 的 **类视图（Class-Based View）** 中定义的一个初始化函数，它的主要作用是 **为视图方法（如 `get()`、`post()` 等）初始化一些共享的属性**。具体来说，它完成了以下几个任务：

<br>

1. **将 `get` 方法赋给 `head` 方法（如果 `head` 方法未定义）**

```python
if hasattr(self, "get") and not hasattr(self, "head"):
    self.head = self.get
```

- **目的**：这行代码的作用是，如果视图类定义了 `get` 方法，但没有定义 `head` 方法，则 **将 `get` 方法赋值给 `head`**。
- **为什么这样做？**
  - 在 HTTP 协议中，`HEAD` 请求方法与 `GET` 方法非常相似，唯一的区别是 `HEAD` 请求只返回响应头，而不返回响应体。因此，如果类视图定义了 `get()` 方法，而没有显式地定义 `head()` 方法，`setup()` 会自动将 `get()` 方法赋值给 `head()`，使得 `head()` 方法可以重用 `get()` 方法的逻辑。
- **效果**：当 `request` 为 `HEAD` 请求时，Django 会调用 `head()` 方法。如果没有单独定义 `head()`，那么 `get()` 就会被用作 `head()`。

<br>

2. **初始化请求对象和视图的参数**

```python
self.request = request
self.args = args
self.kwargs = kwargs
```

- **`self.request`**：将 `request` 对象绑定到视图实例上，以便视图类的其他方法可以访问它。请求对象通常包含所有关于 HTTP 请求的信息（如请求方法、路径、查询参数、POST 数据等）。每个视图方法（如 `get()`、`post()`）都需要访问这个 `request` 对象。

- **`self.args` 和 `self.kwargs`**：将路径参数（`args`）和关键词参数（`kwargs`）绑定到视图实例上。这些参数通常是从 URL 路由中提取的，用于匹配请求中的变量部分。

  - **`args`**：包含位置参数的元组（通常是从 URL 中提取的参数）。
  - **`kwargs`**：包含关键字参数的字典（通常是 URL 配置中的命名参数）。

<br>

3. **总结**

这个 `setup()` 方法的功能是 **为视图方法（如 `get`、`post` 等）初始化共享的属性**，并确保视图实例具备处理请求所需要的基本信息（如 `request`、`args`、`kwargs`）。它通过以下几个步骤：

- 如果视图类定义了 `get` 方法而没有定义 `head` 方法，自动将 `get` 方法赋值给 `head`，确保处理 `HEAD` 请求时也能使用 `get` 方法的逻辑。
- 将请求对象（`request`）、路径参数（`args`）和关键词参数（`kwargs`）绑定到视图实例上，以便后续的视图方法可以访问这些数据。

通过这种方式，`setup()` 方法为视图的处理逻辑提供了必要的初始化，确保视图能够正确响应各种 HTTP 请求。

<br>

##### 2.调用dispatch方法

```python
def dispatch(self, request, *args, **kwargs):
    """
    `.dispatch()` is pretty much the same as Django's regular dispatch,
    but with extra hooks for startup, finalize, and exception handling.
    """
    self.args = args
    self.kwargs = kwargs
    request = self.initialize_request(request, *args, **kwargs)
    self.request = request
    self.headers = self.default_response_headers  # deprecate?

    try:
        self.initial(request, *args, **kwargs)

        # Get the appropriate handler method
        if request.method.lower() in self.http_method_names:
            handler = getattr(self, request.method.lower(),
                              self.http_method_not_allowed)
        else:
            handler = self.http_method_not_allowed

        response = handler(request, *args, **kwargs)

    except Exception as exc:
        response = self.handle_exception(exc)

    self.response = self.finalize_response(request, response, *args, **kwargs)
    return self.response
```

`dispatch()` 方法的作用是：

- **初始化请求**：通过 `initialize_request()` 方法，确保请求对象被正确设置。
- **执行初始化钩子**：通过 `initial()` 方法做一些视图初始化操作。
- **选择处理方法**：根据请求的 HTTP 方法（GET、POST、PUT 等），选择合适的处理方法（如 `get()`、`post()` 等）。
- **异常处理**：如果视图方法执行时发生异常，`dispatch()` 会捕获异常并调用 `handle_exception()` 方法来处理异常。
- **最终响应处理**：通过 `finalize_response()` 方法对响应进行处理，最后返回一个 HTTP 响应对象。

<br>

#### 4.最终返回闭包view

```
return view
```

<br>

<br>

### 4.父类APIVIew进行csrf_exempt(view)调用并返回

```python
# Note: session based authentication is explicitly CSRF validated,
# all other authentication is CSRF exempt.
return csrf_exempt(view)
```

```python
def csrf_exempt(view_func):
    """Mark a view function as being exempt from the CSRF view protection."""

    # view_func.csrf_exempt = True would also work, but decorators are nicer
    # if they don't have side effects, so return a new function.
    @wraps(view_func)
    def wrapper_view(*args, **kwargs):
        return view_func(*args, **kwargs)

    wrapper_view.csrf_exempt = True
    return wrapper_view
```

`csrf_exempt` 是 Django 中的一个装饰器，用来 **标记视图函数不需要进行 CSRF（Cross-Site Request Forgery）验证**。CSRF 是一种攻击方式，通常是恶意网站诱导用户在未授权的情况下执行不当操作。Django 默认启用 CSRF 保护，以防止这类攻击，但有时你可能希望对某些视图禁用该保护，尤其是对于不涉及敏感操作的 API 或接口。

<br>

1. **CSRF保护的基本概念**

CSRF（跨站请求伪造）是一种攻击方式，攻击者会诱使用户访问恶意网站，并以用户的身份执行未经授权的操作。为了防止这种攻击，Django 默认会为 **所有的 POST 请求** 开启 CSRF 保护。Django 使用 CSRF token（一个随机生成的令牌）来确保请求的合法性，这通常通过在模板中包含 `{% csrf_token %}` 和在请求头中传递 token 来实现。

<br>

2. **`csrf_exempt` 装饰器的作用**

`csrf_exempt` 装饰器用于 **禁用特定视图的 CSRF 保护**，也就是说，如果某个视图使用了 `@csrf_exempt`，它就不需要执行 CSRF 检查。

<br>

3. **`csrf_exempt` 的实现**

```python
def csrf_exempt(view_func):
    """Mark a view function as being exempt from the CSRF view protection."""

    # view_func.csrf_exempt = True would also work, but decorators are nicer
    # if they don't have side effects, so return a new function.
    @wraps(view_func)
    def wrapper_view(*args, **kwargs):
        return view_func(*args, **kwargs)

    wrapper_view.csrf_exempt = True  # This flag marks the view as exempt
    return wrapper_view
```

- `csrf_exempt` 是一个装饰器，接受一个视图函数（`view_func`）作为参数。
- 通过 `@wraps(view_func)`，它保留了原始视图函数的一些属性，比如文档字符串等。
- 然后，它定义了一个 **`wrapper_view`** 函数，该函数会调用原始的视图函数 `view_func`，但在此之前不会执行 CSRF 验证。
- 最后，`csrf_exempt = True` 属性被添加到 `wrapper_view` 上，标志着该视图函数是 **"不进行 CSRF 验证的"**。
- 装饰器返回的是 `wrapper_view`，即禁用了 CSRF 验证的视图函数。

<br>

4. **应用场景**

在一些情况下，API 可能需要禁用 CSRF 验证，尤其是在处理 **非浏览器请求**（如使用 token 的 API 或外部系统调用的请求）时。这些请求通常不会携带 CSRF token，所以会在 Django 的 CSRF 验证中失败。为了避免这种情况，`csrf_exempt` 可以用于禁用 CSRF 保护。



```python
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

@csrf_exempt  # 禁用 CSRF 验证
def my_view(request):
    return JsonResponse({"message": "CSRF validation is skipped!"})
```

<br>

5. **为什么需要 `csrf_exempt` 装饰器**

在使用 Django 进行 API 开发时，很多 API 只关心身份验证和授权，而不是 CSRF。对于一些如 RESTful API 的接口，可能没有前端页面，也就不需要 CSRF 保护。此时，我们可以通过 `csrf_exempt` 来避免不必要的验证。

<br>

6. **总结**

- `csrf_exempt` 装饰器用于禁用特定视图的 CSRF 保护，防止在处理非浏览器请求或不需要 CSRF 的场景下出现问题。
- 该装饰器通过给视图函数添加 `csrf_exempt = True` 属性来标记该视图无需进行 CSRF 验证。
- 在 Django 中，默认情况下所有 **POST 请求** 都会进行 CSRF 验证，但通过 `@csrf_exempt` 装饰器可以指定某些视图不做 CSRF 校验。

希望这个解释能帮助你理解 `csrf_exempt` 装饰器的作用及其应用场景！

<br>

<br>

### 5.最终结果

调用了子类的as_view方法，得到经过csrf_exempt免除验证的View函数对象，此时还没有调用View函数，即对应的get、post等方法没有执行

<br>

在 `url.py` 中调用 `as_view()` 方法返回的其实是一个经过 `csrf_exempt` 等装饰器封装后的视图函数对象，并且它本身并没有被立即执行。那么，问题在于：**实际的视图处理逻辑是何时执行的？**

<br>

1. **`as_view()` 返回的是视图函数**

`as_view()` 方法的主要作用是将 **类视图** 转换成 **函数视图**。你提到的 `as_view()` 返回的 **并不是类视图本身**，而是一个新的视图函数，这个视图函数实际上会：

1. 通过 `self = cls(**initkwargs)` 创建类视图的实例；
2. 通过 `self.setup(request, *args, **kwargs)` 初始化该实例；
3. 调用 `self.dispatch(request, *args, **kwargs)` 来执行请求的处理。

但这些操作都没有直接在 `as_view()` 中执行，而是会在 **URL 路由匹配时** 由 **Django 请求分发机制** 来触发。

<br>

2. **URL 路由如何触发视图函数**

在 Django 中，视图函数的执行通常是在 **请求到达时** 由 URL 路由器（`URL Resolver`）自动完成的。`urls.py` 中的 URL 模式会将请求的 URL 路径与视图函数进行匹配，而 **`as_view()` 返回的函数** 正是处理这个请求的函数。

当一个 HTTP 请求发送到 Django 时，Django 会执行以下操作：

1. **请求进入 URL 路由系统**：Django 会遍历项目中的 URL 配置（`urls.py`），并根据请求的路径查找对应的视图。
2. **视图函数被调用**：当请求匹配到某个 URL 路由时，Django 会执行该 URL 配置中定义的视图函数。由于 `as_view()` 返回的是一个封装过的视图函数，它会处理请求。
3. **调用 `dispatch` 方法**：视图函数内部会调用 `dispatch` 方法，而 `dispatch` 方法会根据请求的方法（如 `GET`、`POST` 等）调用对应的处理方法（如 `get()`、`post()` 等）。

<br>

3. **详细流程：视图函数是如何执行的？**

假设有如下的 URL 配置和视图：

`urls.py`

```python
from django.urls import path
from .views import MyView

urlpatterns = [
    path('items/', MyView.as_view(), name='my_view'),
]
```

`views.py`

```python
from django.http import JsonResponse
from rest_framework.views import APIView

class MyView(APIView):
    def get(self, request, *args, **kwargs):
        return JsonResponse({"message": "GET method called!"})

    def post(self, request, *args, **kwargs):
        return JsonResponse({"message": "POST method called!"})
```

<br>

请求流程

1. **请求到达 Django**：客户端发起一个请求到 `http://localhost/items/`，这个请求可能是 `GET` 或 `POST`，取决于请求类型。

2. **URL 路由匹配**：Django 会根据 `urls.py` 中的配置来匹配这个 URL。在这个例子中，`path('items/', MyView.as_view(), name='my_view')` 会将请求与 `MyView` 类视图匹配。

3. **调用 `as_view()` 返回的视图函数**：
   - `MyView.as_view()` 会返回一个经过装饰器封装的视图函数。假设请求是 `GET`，那么视图函数会执行以下操作：
     - 在 `view` 函数中，`cls(**initkwargs)` 会创建 `MyView` 类的一个实例。
     - 调用 `self.setup(request, *args, **kwargs)` 初始化实例。
     - 调用 `self.dispatch(request, *args, **kwargs)`，这时会根据请求的 `method`（如 `GET`）来调用 `get()` 方法。

4. **`dispatch` 方法调用对应的 `get()` 或 `post()`**：
   - 在 `dispatch` 方法中，Django 会检查请求的方法类型（`request.method.lower()`），并调用相应的处理方法（例如，`get()` 或 `post()`）。
   - 如果请求是 `GET`，那么 `self.get(request, *args, **kwargs)` 就会被调用，返回对应的响应。

5. **返回响应**：最终，`get()` 或 `post()` 方法会返回一个响应对象（在此例中是 `JsonResponse`），然后 Django 将该响应发送回客户端。



<br>

4. **关键点总结**

- `as_view()` 返回的是一个 **函数视图**，而不是直接调用视图函数。
- 视图函数的执行是在 **请求进入 URL 路由系统时** 由 Django 自动触发的。
- 当 URL 路由匹配到一个视图时，Django 会调用 `as_view()` 返回的视图函数，而在这个视图函数中，会通过 `dispatch` 方法调用对应的 `get()`、`post()` 等方法。
- **`dispatch` 方法** 是在视图函数中调用的，它负责根据请求的方法（`GET`、`POST` 等）调用相应的处理方法。

<br>

5. **示意图**

- 客户端发起请求 -> Django 路由系统匹配 URL -> 调用 `as_view()` 返回的视图函数 -> 创建视图类实例 -> 调用 `dispatch()` -> 调用对应的 `get()` 或 `post()` 方法 -> 返回响应

通过这种方式，Django 能够根据请求的 HTTP 方法选择并执行对应的视图方法，而这都发生在 **路由匹配** 和 **请求分发** 之后。











<br>

<br>

<br>

## 1.3 源码执行流程总结

对于类视图转变视图函数执行流程如下（以APIView为例子）：

1. 首先调用APIView的as_view方法

2. 然后在APIView中调用父类as_view 方法
3. 在父类View的as_view方法的闭包view中依次调用方法
   1. 利用cls进行视图类的实例化
   2. 返回对实例化的视图类的dispatch调用
4. 调用APIView的dispatch方法，也进行调用以下方法
   1. initialize_request，drf的Request实例化
   2. initial初始化API版本、认证、权限检查检查等功能
5. 通过getattr查看是否有当前请求所对应的函数方法存在
6. 存在则调用getattr获取方法对象并赋值到handler，再调用handler执行相关的请求方法
7. 将handler执行的请求方法的返回值赋值到response中
8. 将response作为参数传入到finalizer_response方法中，并将结果赋值到self.response中
9. dispatch最终返回self.response
10. 父类View的as_view函数最终返回闭包view
11. 子类APIView最终进行return csrf_exempt(view)