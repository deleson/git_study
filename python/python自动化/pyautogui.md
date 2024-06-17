# 1.pyautogui介绍

PyAutoGUI 简介

`PyAutoGUI` 是一个 Python 库，用于程序化地控制鼠标和键盘。它允许你模拟用户的输入动作，自动执行繁琐的任务，是自动化测试、游戏脚本和日常任务自动化的强大工具。

> ### 安装
>
> 可以通过 `pip` 安装 `pyautogui`：
>
> ```
> bash
> 复制代码
> pip install pyautogui
> ```
>
> ### 基本功能
>
> #### 1. 控制鼠标
>
> - **移动鼠标**
>
> ```
> python复制代码import pyautogui
> 
> # 移动到屏幕坐标 (100, 100)
> pyautogui.moveTo(100, 100)
> 
> # 从当前位置移动 (x, y) 像素
> pyautogui.move(50, 50)
> ```
>
> - **点击鼠标**
>
> ```
> python复制代码# 在当前鼠标位置点击
> pyautogui.click()
> 
> # 在指定位置点击
> pyautogui.click(200, 200)
> ```
>
> - **拖动鼠标**
>
> ```
> python复制代码# 将鼠标拖动到指定位置
> pyautogui.dragTo(300, 300, duration=1.5)
> 
> # 从当前位置拖动
> pyautogui.drag(100, 0, duration=1.5)
> ```
>
> #### 2. 控制键盘
>
> - **输入文字**
>
> ```
> python复制代码# 输入字符串 'Hello, World!'
> pyautogui.typewrite('Hello, World!', interval=0.1)
> ```
>
> - **按键操作**
>
> ```
> python复制代码# 按下并释放 'enter' 键
> pyautogui.press('enter')
> 
> # 按下 'shift' 键
> pyautogui.keyDown('shift')
> 
> # 释放 'shift' 键
> pyautogui.keyUp('shift')
> ```
>
> #### 3. 屏幕截图和图像识别
>
> - **屏幕截图**
>
> ```
> python复制代码# 截取整个屏幕并保存为 'screenshot.png'
> screenshot = pyautogui.screenshot('screenshot.png')
> ```
>
> - **图像识别**
>
> ```
> python复制代码# 查找屏幕上 'example.png' 图像的位置
> location = pyautogui.locateOnScreen('example.png')
> print(location)
> ```
>
> ### 安全机制
>
> - **Failsafe**：默认情况下，如果将鼠标移动到屏幕左上角 (0, 0)，`pyautogui` 会引发 `pyautogui.FailSafeException`，停止脚本执行。
>
> ```
> python
> 复制代码
> pyautogui.FAILSAFE = True  # 默认值是 True
> ```
>
> - **延时**：设置每个 PyAutoGUI 调用之间的延迟。
>
> ```python
> python
> 复制代码
> pyautogui.PAUSE = 0.5  # 每次调用之间暂停 0.5 秒
> ```

<br>

<br>

# 2.鼠标控制

## 2.1 通用函数

屏幕坐标系：

- 左上角是0，0
- x轴正方向向右
- y轴正方向向下

额外内容-命名元组：

- Point类
- Size类

```python
#使用size自带
from pyautogui import Size

# 创建一个 Size 对象
screen_size = Size(width=1920, height=1080)

# 访问属性
print(f"Screen width: {screen_size.width}, Screen height: {screen_size.height}")

```

```python
#使用命名元组
import collections

# 定义 Size 具名元组
Size = collections.namedtuple("Size", ["width", "height"])

# 创建一个 Size 对象
screen_size = Size(width=1920, height=1080)

# 访问属性
print(f"Screen width: {screen_size.width}, Screen height: {screen_size.height}")

```

在导入的size函数内部就使用了命名元组`Size = collections.namedtuple("Size", ["width", "height"])`



>  `PyAutoGUI` 中，有两个命名元组类：`Size` 和 `Point`，它们分别用于表示屏幕尺寸和坐标点。这些类提供了方便的方法来处理屏幕尺寸和坐标，使得在屏幕上定位和操作元素变得更加简单和直观。
>
> ### 1. `Size` 类
>
> `Size` 类用于表示屏幕的尺寸，通常指屏幕的宽度和高度。
>
> #### 属性
>
> - `width`: 屏幕的宽度。
> - `height`: 屏幕的高度。
>
> #### 示例
>
> 你可以通过以下方式创建一个 `Size` 对象：
>
> ```
> python复制代码from pyautogui import Size
> 
> screen_size = Size(width=1920, height=1080)
> ```
>
> #### 使用示例
>
> ```
> python复制代码from pyautogui import size
> 
> # 获取屏幕尺寸
> screen_size = size()
> 
> print(f"Screen width: {screen_size.width}, Screen height: {screen_size.height}")
> ```
>
> ### 2. `Point` 类
>
> `Point` 类用于表示屏幕上的一个点，通常用来表示鼠标或对象在屏幕上的位置。
>
> #### 属性
>
> - `x`: 点的横坐标。
> - `y`: 点的纵坐标。
>
> #### 示例
>
> 你可以通过以下方式创建一个 `Point` 对象：
>
> ```
> python复制代码from pyautogui import Point
> 
> mouse_position = Point(x=500, y=300)
> ```
>
> #### 使用示例
>
> ```
> python复制代码from pyautogui import position
> 
> # 获取鼠标当前位置
> mouse_position = position()
> 
> print(f"Mouse position - X: {mouse_position.x}, Y: {mouse_position.y}")
> ```
>
> ### 总结
>
> - `Size` 类用于表示屏幕尺寸，即屏幕的宽度和高度。
> - `Point` 类用于表示屏幕上的一个点，通常用来表示鼠标或对象在屏幕上的位置。
> - 这些类提供了方便的方法来处理屏幕尺寸和坐标，使得在 `PyAutoGUI` 中定位和操作屏幕元素变得更加简单和直观。
>
> 通过使用 `Size` 和 `Point` 类，你可以更轻松地管理和操作屏幕上的位置和尺寸信息，从而编写更清晰和可维护的自动化脚本。

> 在 `PyAutoGUI` 中，`Size` 类和 `Point` 类主要用于提供更方便的方式来处理屏幕尺寸和坐标点。它们的使用与不使用主要体现在代码的清晰度、可读性和维护性上，并没有绝对必须使用的情况，但在特定情况下使用它们可以使代码更加结构化和易于理解。
>
> ### 区别和影响
>
> 1. **可读性和维护性**：
>    - 使用 `Size` 类和 `Point` 类可以使你的代码更易读和理解，因为它们明确地表达了你正在处理的是屏幕尺寸或坐标点。
>    - 不使用这些类，而直接使用元组或其他数据结构，可能会使代码变得更加冗长和难以理解，特别是在多次使用坐标或尺寸时。
> 2. **结构化和类型安全**：
>    - 使用 `Size` 类和 `Point` 类可以帮助确保你在处理屏幕尺寸和坐标时的类型安全性，减少出错的可能性。
>    - 它们提供了属性访问，避免了直接使用索引访问元组时可能出现的错误。
> 3. **清晰的接口**：
>    - 在函数或方法的参数和返回值中使用 `Size` 和 `Point` 类，可以提供清晰的接口，让调用者更容易理解函数的作用和预期参数。
>
> ### 必须使用的情况
>
> 并没有绝对必须使用 `Size` 类和 `Point` 类的情况，但在以下情况下它们可能特别有用：
>
> - **复杂的自动化任务**：如果你的自动化任务涉及到频繁操作屏幕上的多个位置，使用 `Point` 类可以使代码更加结构化和易于维护。
> - **涉及屏幕尺寸的计算**：例如，需要动态计算屏幕上某个元素的位置或尺寸，使用 `Size` 类和 `Point` 类可以使代码更清晰地表达你的意图。
>
> ### 示例
>
> 比较使用和不使用 `Point` 类的例子：
>
> **使用 `Point` 类**：
>
> ```
> python复制代码from pyautogui import Point, moveTo
> 
> target_position = Point(x=500, y=300)
> moveTo(target_position.x, target_position.y)
> ```
>
> **不使用 `Point` 类**：
>
> ```
> python复制代码from pyautogui import moveTo
> 
> target_x = 500
> target_y = 300
> moveTo(target_x, target_y)
> ```
>
> 虽然在这个简单的示例中，直接使用变量可能并没有明显的不利影响，但在更复杂的场景中，使用 `Point` 类可以帮助你更好地组织和理解你的代码。
>
> ### 结论
>
> 使用 `Size` 类和 `Point` 类主要是为了提高代码的可读性、清晰性和维护性。它们并不是绝对必须的，但在处理屏幕尺寸和坐标时使用它们可以使代码更加结构化和易于理解。根据你的具体项目和团队的编码风格，决定是否使用这些类可以帮助你更高效地管理和开发 `PyAutoGUI` 自动化脚本。

> 两种创建 `Size` 对象的方式中，涉及到了 `PyAutoGUI` 中的命名元组和标准库 `collections` 中的具名元组的使用。让我们分别看看它们的区别和使用情况：
>
> ### 方式一：使用 `PyAutoGUI` 的命名元组 `Size`
>
> ```
> from pyautogui import Size
> 
> # 创建一个 Size 对象
> screen_size = Size(width=1920, height=1080)
> ```
>
> 在这种方式中，`Size` 是 `PyAutoGUI` 提供的一个预定义的命名元组。`PyAutoGUI` 已经为开发者定义了一个名为 `Size` 的命名元组，用来表示屏幕尺寸或其他类似的结构。这种方式的优点是简洁和直接，无需显式定义命名元组，直接从 `PyAutoGUI` 中导入并使用即可。
>
> ### 方式二：使用 `collections.namedtuple` 创建具名元组 `Size`
>
> ```
> python复制代码import collections
> 
> # 定义 Size 具名元组
> Size = collections.namedtuple("Size", ["width", "height"])
> 
> # 创建一个 Size 对象
> screen_size = Size(width=1920, height=1080)
> ```
>
> 在这种方式中，我们使用了标准库 `collections` 中的 `namedtuple` 函数来创建一个具名元组 `Size`。`namedtuple` 函数接受两个参数，第一个参数是类型的名称，第二个参数是字段的名称列表。这种方式的优点是灵活性，可以根据需求自定义字段的名称和类型，以及定义多个不同的具名元组。

<br>

size函数

``` python
from pyautogui import size

screen_size = size()
print(screen_size)
print(screen_size[0],screen_size[1])
print(screen_size.width,screen_size.height)
```

在 `PyAutoGUI` 中，`size()` 函数用于获取当前屏幕的尺寸。它返回一个包含屏幕宽度和高度的元组 `(width, height)`，功能如下：

- **获取屏幕尺寸**：主要用于获取当前显示器的分辨率，以便在编写自动化脚本时准确定位和操作屏幕上的元素。
- **返回值**：`size()` 函数返回一个包含两个整数的元组，分别表示屏幕的宽度和高度。

<br>

position函数

```python
from pyautogui import position

#获取当前鼠标的坐标
point = position()
print(point)
print(point[0],point[1])
print(point.x,point.y)
```

position函数是获取当前的鼠标坐标

<br>

onScreen函数

```python
from pyautogui import onScreen

print(onScreen(0,0))
print(onScreen(2000,2000))
```

判断一个坐标点是否在屏幕里面，可以传入两个值，也可以传入一个列表，返回True或False

<br>

## 2.2 鼠标移动

主要内容

1. moveTo()：移动鼠标光标到指定位置

   > ### `moveTo()` 函数详解
   >
   > `moveTo()` 函数用于将鼠标移动到指定的屏幕坐标位置，并可以设置多个参数来控制移动的行为和效果。
   >
   > #### 使用方法：
   >
   > ```
   > python复制代码import pyautogui
   > 
   > # 将鼠标移动到屏幕坐标 (x, y) 处，可以设置的参数有：
   > pyautogui.moveTo(x, y, duration=seconds, tween=pyautogui.linear, logScreenshot=None, _pause=True)
   > ```
   >
   > #### 参数说明：
   >
   > 1. `x`：目标位置的横坐标。
   > 2. `y`：目标位置的纵坐标。
   > 3. `duration`：可选参数，指定鼠标移动到目标位置的持续时间，单位为秒。默认值为 `pyautogui.PAUSE`，即全局的动作间隔时间。
   > 4. `tween`：可选参数，指定移动过程中的插值函数（缓动函数），用于控制移动的速度曲线。默认为 `pyautogui.linear`，线性速度。
   > 5. `logScreenshot`：可选参数，如果设置为 True，则在执行移动操作时会记录屏幕截图以进行调试。默认为 None，不记录截图。
   > 6. `_pause`：可选参数，控制是否在移动完成后等待全局的动作间隔时间 `pyautogui.PAUSE`。默认为 True。
   >
   > #### 参数详解：
   >
   > - **`duration` 参数**：
   >   - 指定鼠标移动到目标位置的持续时间。较长的持续时间可以使鼠标移动更平滑，避免快速移动触发 `PyAutoGUI` 的 fail-safe 机制。
   > - **`tween` 参数**：
   >   - 插值函数（缓动函数）控制移动的速度曲线，可以选择不同的缓动函数以实现不同的移动效果，比如匀速、加速、减速等。常见的缓动函数有：
   >     - `pyautogui.linear`：线性速度，匀速移动。
   >     - `pyautogui.easeInQuad`：二次加速。
   >     - `pyautogui.easeOutQuad`：二次减速。
   >     - `pyautogui.easeInOutQuad`：二次加速减速。
   >     - 更多的缓动函数可以在 `pyautogui` 模块中查看文档获得详细信息。
   > - **`logScreenshot` 参数**：
   >   - 如果设置为 True，执行移动操作时会记录屏幕截图。这在调试和分析鼠标移动路径时可能会有帮助，但通常用于开发和调试阶段。
   > - **`_pause` 参数**：
   >   - 控制是否在移动完成后等待全局的动作间隔时间 `pyautogui.PAUSE`。默认情况下为 True，建议保留这个默认设置，以确保操作稳定性。

2. move()：相对当前鼠标光标位置，移动像素

   > ### `move()` 函数详解
   >
   > #### 使用方法：
   >
   > ```
   > python复制代码import pyautogui
   > 
   > # 相对当前鼠标位置移动 dx 像素水平方向，dy 像素垂直方向，持续时间为 duration 秒（可选参数）
   > pyautogui.move(dx, dy, duration=seconds, tween=pyautogui.linear, pause=_pause)
   > ```
   >
   > #### 参数说明：
   >
   > 1. `dx`：相对于当前鼠标位置的水平移动距离。
   > 2. `dy`：相对于当前鼠标位置的垂直移动距离。
   > 3. `duration`：可选参数，指定鼠标移动的持续时间，单位为秒。默认值为 `pyautogui.PAUSE`，即全局的动作间隔时间。
   > 4. `tween`：可选参数，指定移动过程中的插值函数（缓动函数），用于控制移动的速度曲线。默认为 `pyautogui.linear`，线性速度。
   > 5. `pause`：可选参数，控制是否在移动完成后等待全局的动作间隔时间 `pyautogui.PAUSE`。默认为 True。
   >
   > #### 参数详解：
   >
   > - **`dx` 和 `dy` 参数**：
   >   - `dx` 表示相对于当前鼠标位置的水平移动距离，单位为像素。
   >   - `dy` 表示相对于当前鼠标位置的垂直移动距离，单位为像素。
   > - **`duration` 参数**：
   >   - 指定鼠标移动到目标位置的持续时间。较长的持续时间可以使鼠标移动更平滑，避免快速移动触发 `PyAutoGUI` 的 fail-safe 机制。
   > - **`tween` 参数**：
   >   - 插值函数（缓动函数）控制移动的速度曲线，可以选择不同的缓动函数以实现不同的移动效果，比如匀速、加速、减速等。常见的缓动函数有：
   >     - `pyautogui.linear`：线性速度，匀速移动。
   >     - `pyautogui.easeInQuad`：二次加速。
   >     - `pyautogui.easeOutQuad`：二次减速。
   >     - `pyautogui.easeInOutQuad`：二次加速减速。
   >     - 更多的缓动函数可以在 `pyautogui` 模块中查看文档获得详细信息。
   > - **`pause` 参数**：
   >   - 控制是否在移动完成后等待全局的动作间隔时间 `pyautogui.PAUSE`。默认情况下为 True，建议保留这个默认设置，以确保操作稳定性。



下面是关于鼠标移动的两个函数使用

```python
import pyautogui

#moveTo
pyautogui.moveTo(1,100)
pyautogui.moveTo([100,100],duration=2.5)                #duration，设置到达时间延迟2.5秒
pyautogui.moveTo(x=400, y=100, duration=1.0)            #duration，设置到达时间延迟1秒

#move
pyautogui.move(100,100)
pyautogui.move([500,0])
pyautogui.move(10,93,duration=2)
```





<br>

## 2.3 鼠标拖拽

鼠标拖拽即类似拖拽图片

整体参数与鼠标移动类似。但关键字参数有个button，选择拖拽时候使用的按钮

主要内容：

- dragTo()	#鼠标拖拽到指定像素
- drag()       #鼠标相对当前位置拖拽像素

```python
#dragTo
# pyautogui.moveTo(336,290,duration=2.0)
# pyautogui.dragTo(336,555,duration=2.5,button=pyautogui.LEFT)
# pyautogui.dragTo(336,555,duration=2.5,button=pyautogui.MIDDLE)
# pyautogui.dragTo(336,555,duration=2.5,button=pyautogui.RIGHT)
# pyautogui.dragTo(336,555,duration=2.5,button=pyautogui.RIGHT,mouseDownUp=True)        #mouseDownUp就是鼠标按下和鼠标抬起事件

#drag
pyautogui.moveTo(336,290,duration=2.0)
pyautogui.drag(0,265,duration=2.5,button=pyautogui.LEFT)
```





<br>

## 2.4 鼠标移动、拖拽补间

主要内容：鼠标移动/拖拽 的补间动画/过渡效果

- 补间动画：tween

主要是在移动和拖拽过程中的动画效果



<br>

## 2.5 鼠标点击

主要内容：

- Click						点击	
- leftClick                  左键点击一次
- middleClick            中键点击一次
- rightClick                右键点击一次
- doubleClick            双击一次
- tripleClick               三击一次

```python
import pyautogui

pyautogui.click()
pyautogui.click(70,495) #整合了移动和点击
pyautogui.click(70,495,clicks=2,interval=0.2) #整合了移动和点击，设置点击次数和点击间隔
pyautogui.click(0,0,duration=2,tween=pyautogui.easeInBack) #整合了移动和点击,其中的补间和持续时间是指移动
pyautogui.click(0,0,duration=2,tween=pyautogui.easeInBack,button=pyautogui.LEFT) #整合了移动和点击,其中的补间和持续时间是指移动,使用左键点击
```

其他函数是对click函数的封装

<br>

## 2.6 鼠标按下与释放



主要内容

- mouseDown     鼠标按下

  ```python
  def mouseDown(x=None, y=None, button=PRIMARY, duration=0.0, tween=linear, logScreenshot=None, _pause=True):
  ```

- mouseUP          鼠标释放

  ```python
  def mouseUp(x=None, y=None, button=PRIMARY, duration=0.0, tween=linear, logScreenshot=None, _pause=True):
  ```

事实上，鼠标点击和鼠标拖拽内部使用了鼠标按下和鼠标释放事件

这两种事件也可以自己进行操作，这两种事件也有x、y和button参数（用法类似）

```python
import pyautogui

pyautogui.mouseDown()           #鼠标按下
pyautogui.mouseDown(500,200)    #整合了鼠标移动，在该位置进行按下事件

# pyautogui.mouseUp()           #鼠标抬起
```

<br>

讲解一下鼠标点击和鼠标拖拽与鼠标按下与释放的关系

dragTo传参的时候有个mouseDownUp参数，并且默认为True，如果该参数为True，那么就会调用mouseDown和mouseUp参数



<br>

## 2.7 鼠标滚动

主要内容：

- scroll			鼠标垂直滚动
- vscroll          鼠标垂直滚动
- hscroll         鼠标水平滚动

鼠标单次滚动，在不同的设备里面实际移动的xy是不同的

在苹果和linux平台可以调用水平滚动，window则没有效果

```python
def scroll(clicks, x=None, y=None, logScreenshot=None, _pause=True):
```

鼠标滚动的x、y是整合了鼠标移动的功能，但是win10有bug，没有做鼠标移动的逻辑

```python
import pyautogui

pyautogui.scroll(1000)     #正数向上滚动
pyautogui.scroll(-1000)    #负数向下滚动
pyautogui.scroll(50,100,100)  #移动并滚动
```

<br><br>

# 3.键盘操作

## 3.1 键盘输入

主要内容：

- wirte()		     批量按键盘按键
- typewrite()     批量按键盘按键

上述的两个函数是完全一样的，下面是typewirte函数定义

```python
def typewrite(message, interval=0.0, logScreenshot=None, _pause=True):
```

内部实现是对底层press函数的封装，同时在press函数内部又调用了_keyDown和_keyUP函数

在官方文档的KEYBOARD_KEYS有所有可以按下的按键，注意多字符按键，不能按下
例如f1传入，会按下f1，不会按下键盘上的f1，但如果传入列表，则可以按下，原因在于底层使用press函数。

此外如果不是键盘按键，或KEYBOARD_KEYS 或KEY_NAMES没有的按键会被直接忽略（注意大写字母虽然在里面没有，但是会动态添加）。

```python
import  pyautogui


pyautogui.write("a")
pyautogui.write("abc123")
pyautogui.write("abc123",interval=0.5)
pyautogui.write("abc123\t\negege",interval=0.5)         #可以通过\t制表\n换行

#对于多字符键盘按键，可以使用列表形式传入
pyautogui.write("abcspace123enter\n\n",interval=0.5)            #错误传入多字符按键
pyautogui.write(['a','b','c','space','1','2','3','enter'])  #正确传入多字符按键
```

<br>

## 3.2 键盘按键

主要内容：

- press()				按键盘按键（按下并且释放）
- keyDown()         按键盘按键（按下但不释放）
- keyUp()              释放已按下单键盘按键

press函数可以实现多字符串的输入，并且该函数实际是keyDown和keyUp函数的封装

如果press函数想要像wirte函数一样按下多个按钮，可以传入列表，press函数同时也有按下的间隔时间，此外还有一个

可以控制按下重复次数的参数。

```python
import pyautogui

pyautogui.press("a")
pyautogui.press("space")
pyautogui.press(["#","1","2"])
pyautogui.press(["#","1","2"],interval=2)    #interval没生效
pyautogui.press(["#","1","2"],presses=3,interval=2)    #interval生效

#press(“a”)等价于
pyautogui.keyUp("a")
pyautogui.keyDown("a")


#演示快捷键ctrl + v
pyautogui.keyDown("ctrl")
pyautogui.keyDown("v")
pyautogui.keyUp("v")
pyautogui.keyUp("ctrl")
```

<br>

## 3.3 键盘快捷键

主要内容：

- hotkey    专门按快捷键的方法

本质是封装keydown和keyup函数，同时本函数支持interval参数

本函数不能传列表

```python
import pyautogui


# pyautogui.hotkey("ctrl","V")
pyautogui.hotkey("win","d")
pyautogui.hotkey("win","d")
```



<br>

<br>

# 4.消息对话框

主要内容：

- alert              警告对话框
- confirm        确认对话框
- prompt        提示用户输入对话框
- password    密码输入对话框

上面的四个函数，在内部实现的时候是在pymsgbox里面引入的同名模块实现的

下面是alert警告框的使用

```python
import pyautogui
import pymsgbox
from tkinter import Tk,Button


"""
警告对话框

返回被点击按钮的文本
"""
# print(pyautogui.alert())    #点击确定和关闭都是返回ok，这是由于作者没有做ok
# #下面两条使用win原生的组件
# print(pyautogui.alert(title="警告",text="自动化出现异常",icon=pymsgbox.STOP))
# print(pyautogui.alert(title="警告",text="自动化出现异常",icon=pymsgbox.WARNING))
#
# #下面这个使用tkinter
# print(pyautogui.alert(title="警告",text="自动化出现异常",_tkinter=True))
#
# print(pyautogui.alert(title="警告",text="自动化出现异常",button="已收到警告"))
# print(pyautogui.alert(title="警告",text="自动化出现异常",button="已收到警告",timeout=3000))  #3000毫秒

root = Tk()
root.title("自动化控制台")

def start_auto_gui_1():
    """ 开始1UI自动化"""
    print(pyautogui.alert(title="警告",text="自动化出现异常",button="已收到警告",root=root))    #该窗口是root的子窗口


Button(root,text="开始#1",command=start_auto_gui_1).pack(pady=10)
Button(root,text="开始#2").pack(pady=10)
Button(root,text="开始#3").pack(pady=10)
root.mainloop()
```

confirm确认框特点如下

- 和alert一样，如果是win会走本地的对话框，否则tkinter
- button传入元组或列表
  - 对于pymsgbox模块内，该参数不能随便自己写
  - 如果使用自定义的按钮组，则使用tkinter
- 和alert一样，确认框有timeout参数

<br>

prompt文本框特点如下：

- 必定使用tkinter
- 有参数default，即文本默认值
- 同样有timeout参数
- 返回值是文本输入内容

<br>

password密码框特点如下：

- 除了和promot参数一致的部分，还有一个mask参数，设置遮盖的字符，默认为*



PS：吐槽一句，感觉这个对话框不好用，自动化工具为什么会有这玩意？

<br>

<br>

# 5.屏幕截图

## 5.1屏幕截图

函数screenshot()，主要用法有三种

1. 不带任何参数
2. 带文件名参数
3. 带region=(x,x,x,x)，告知截取的区域

<br>

主要内容

- screenshot                      屏幕截图函数
- 其他函数logScreenshot 屏幕截图日志参数
- 屏幕截图日志相关常量

<br>

下面介绍screenshot函数使用

```python
import pyautogui
from PIL.Image import Image

img = pyautogui.screenshot()
print(img)                          #返回PIL的image类,该类支持save方法
img.save("./1.jpg")
box = (12,276,116,717)
img.crop(box).save("./2.jpg")       #部分裁剪

print(pyautogui.screenshot(imageFilename="./2.png"))        #等同于上述三条代码
print(pyautogui.screenshot(imageFilename="./2.png"),region=box)        #等同于使用部分裁剪
```

然后是关于鼠标拖拽和鼠标移动的logScrenshot参数(默认为False/None)

在函数内部调用 _logScreenshot函数，在 _ logScreenshot函数内部底层调用了screenshot函数，具体定义如下

```python
def _logScreenshot(logScreenshot, funcName, funcArgs, folder="."):
```

- 是否记录屏幕截图
- 函数名
- 函数的参数
- 保存的目录

保存的文件名是年月日等参数

如果设置了logScreenshot为True，则鼠标操作后会进行截图保存

还可以设置全局常量

- pyautogui.LOG_SCREENSHOTS为True，则默认为操作后截图。
- pyautogui.LOG_SCREENSHOTS_LIMIT，设置屏幕截图的数量（覆盖）

<br><br>

## 5.2 图片定位

主要内容：

- locateOnScreen()    在屏幕上进行图片定位，返回图片区域
- center()                     返回图片区域的中心坐标点
- locateCenterOnScreen()  在屏幕上进行图片定位，返回中心坐标点
- locateAllOnScreen() 在屏幕上进行图片定位，返回所有图片区域
- locate()                       在给定图片上进行图片定位，返回图片区域
- locateAll()                   在给定图片上进行图片定位，返回所有图片区域
- click()、moveTo()等函数传入图片路径

图片查找顺序是从左到右、从上到下

对于locateOnScreen函数，底层使用的是locate，而locate调用了locateAll。

locateOnScreen有几个重要参数：

- 要查找的图片地址
- confidence，查找精确度（要安装过opencv）
- minSearchTime，最小查找时间
- grayscale，是否设置灰度值图片定位（黑白，会快一点，但准确性下降）
- region，设置匹配的区域，传入盒子（左上角x，左上角y，宽，高）

<br>

可以使用center函数获取区域的中心

```python
print(pyautogui.center(pyautogui.locateOnScreen("./image/steam.PNG",confidence = 0.9)))
```

<br>

locateAllOnScreen()获取多个匹配图片，返回的是一个生成器

```python
#locateAllOnScreen()
print(pyautogui.locateAllOnScreen("./image/steam.PNG",confidence = 0.9))			#返回生成器
print(list(pyautogui.locateAllOnScreen("./image/steam.PNG",confidence = 0.9)))		#返回列表，元素是box
```

<br>

locate，主要参数有三个

- needleImage，要查找的图片
- haystackImage，要查找的区域，默认是调用截图函数screenshot
- **kwargs，

返回box对象（左上角坐标+宽高）

<br>

locateAll，传参+返回生成器

<br>

此外在click函数中，也可以传入字符串（这个字符串是图片地址），会调用center获取图片中心点，在进行点击(同理moveTo函数也一样)

既可以直接实现点击某个图片

```python
click("./image/xx.png")

#和下面这个代码等价
img_box = locateOnScreen("./image/xx.png")
moveTo(img_box)
click()
```

click和moveTo内部都调用了_normalizeXYArgs函数来判断传入参数是否为字符串，然后选择是否进行图片定位和返回

<br>

<br>

## 5.3 屏幕像素获取与匹配

主要内容：

- pixel：获取屏幕像素，返回rgb
- pixelMatchesColor()，屏幕像素匹配颜色

获取屏幕像素方法如下

```
import pyautogui
#方法1，使用getpixel
img = pyautogui.screenshot()
print(img.getpixel((100,500)))

#方法2，使用pixel
print(pyautogui.pixel(100,500))
```

判断某个像素是否匹配

```python
print(pyautogui.pixelMatchesColor(100,500,(255,255,255)))
print(pyautogui.pixelMatchesColor(100,500,(255,255,255)),tolerance=20)
```

tolerance参数是匹配时候可以偏差的容忍范围

<br>

<br>

# 6.其他

主要内容

- failSafeCheck()：故障安全检查
- 通用暂停
- mouseInfo():获取鼠标信息小程序
- displayMousePosition():显示鼠标位置小工具
- sleep():休眠，封装了time.sleep
- countdown():倒计时
- run()： 使用迷你语言执行UI自动化操作
- printInfo()：打印UI自动化信息
- getInfo()：获取UI自动化信息

<br>



failSafeCheck，当程序进行很多自动化操作的时候，很难手动关闭，这时候可以通过移动屏幕四个角，触发异常

该异常是FailSafeException（故障安全异常），因此可以认为是个保护机制

现在以click函数进行分析。

1.首先在click函数上面可以看到一个通用的函数装饰器

```python
@_genericPyAutoGUIChecks
def click(
    x=None, y=None, clicks=1, interval=0.0, button=PRIMARY, duration=0.0, tween=linear, logScreenshot=None, _pause=True
):
```

2.装饰器内部，运行函数之前会调用failSafeCheck故障安全检查函数

```python
def _genericPyAutoGUIChecks(wrappedFunction):
    """
    A decorator that calls failSafeCheck() before the decorated function and
    _handlePause() after it.
    """

    @functools.wraps(wrappedFunction)
    def wrapper(*args, **kwargs):
        failSafeCheck()
        returnVal = wrappedFunction(*args, **kwargs)
        _handlePause(kwargs.get("_pause", True))
        return returnVal

    return wrapper
```

3.查看故障安全检查函数，看到查看是否在四个角并且开启了故障检测

```pyhton
def failSafeCheck():
    if FAILSAFE and tuple(position()) in FAILSAFE_POINTS:
        raise FailSafeException(
            "PyAutoGUI fail-safe triggered from mouse moving to a corner of the screen. To disable this fail-safe, set pyautogui.FAILSAFE to False. DISABLING FAIL-SAFE IS NOT RECOMMENDED."
        )
```

<br>

通用暂停_pause(默认为True)，在很多函数都有这个参数

在_pause对应调用 _ handlePause函数

```python
_handlePause(kwargs.get("_pause", True))
```

```python
def _handlePause(_pause):
    """
    A helper function for performing a pause at the end of a PyAutoGUI function based on some settings.

    If ``_pause`` is ``True``, then sleep for ``PAUSE`` seconds (the global pause setting).
    """
    if _pause:
        assert isinstance(PAUSE, int) or isinstance(PAUSE, float)
        time.sleep(PAUSE)
```

默认停止时间PAUSE为0.1秒

ps:想要查看什么函数使用了通用暂停和安全故障，可以对准装饰器使用alt+f7

<br>

实用工具

1. mouseInfo()：这个函数可以获取当前鼠标的xy坐标、rgb颜色和rgb as hex

2. displayMousePosition()：在命令行运行，效果是在命令行实时显示鼠标坐标值和rgb

3. countdown()：倒计时

   ```python
   def countdown(seconds):
       for i in range(seconds, 0, -1):
           print(str(i), end=" ", flush=True)#flush不设置内存缓存
           time.sleep(1)
       print()
   ```

4. run迷你语言实现

   ```python
   def run(commandStr, _ssCount=None):
       """Run a series of PyAutoGUI function calls according to a mini-language
       made for this function. The `commandStr` is composed of character
       commands that represent PyAutoGUI function calls.
   
       For example, `run('ccg-20,+0c')` clicks the mouse twice, then makes
       the mouse cursor go 20 pixels to the left, then click again.
   
       Whitespace between commands and arguments is ignored. Command characters
       must be lowercase. Quotes must be single quotes.
   
       For example, the previous call could also be written as `run('c c g -20, +0 c')`.
   
       The character commands and their equivalents are here:
   
       `c` => `click(button=PRIMARY)`
       `l` => `click(button=LEFT)`
       `m` => `click(button=MIDDLE)`
       `r` => `click(button=RIGHT)`
       `su` => `scroll(1) # scroll up`
       `sd` => `scroll(-1) # scroll down`
       `ss` => `screenshot('screenshot1.png') # filename number increases on its own`
   
       `gX,Y` => `moveTo(X, Y)`
       `g+X,-Y` => `move(X, Y) # The + or - prefix is the difference between move() and moveTo()`
       `dX,Y` => `dragTo(X, Y)`
       `d+X,-Y` => `drag(X, Y) # The + or - prefix is the difference between drag() and dragTo()`
   
       `k'key'` => `press('key')`
       `w'text'` => `write('text')`
       `h'key,key,key'` => `hotkey(*'key,key,key'.replace(' ', '').split(','))`
       `a'hello'` => `alert('hello')`
   
       `sN` => `sleep(N) # N can be an int or float`
       `pN` => `PAUSE = N # N can be an int or float`
   
       `fN(commands)` => for i in range(N): run(commands)
   
       Note that any changes to `PAUSE` with the `p` command will be undone when
       this function returns. The original `PAUSE` setting will be reset.
   
       TODO - This function is under development.
       """
   
       # run("ccc")  straight forward
       # run("susu") if 's' then peek at the next character
       global PAUSE
   
       if _ssCount is None:
           _ssCount = [
               0
           ]  # Setting this to a mutable list so that the callers can read the changed value. TODO improve this comment
   
       commandList = _tokenizeCommandStr(commandStr)
   
       # Carry out each command.
       originalPAUSE = PAUSE
       _runCommandList(commandList, _ssCount)
       PAUSE = originalPAUSE
   ```

   具体实现如下

   ```python
   pyautogui.run("g300,300s2csss2g+500,+0s2rss") #中间的空格会被忽略，所以可以空格隔开命令
   ```

5. printInfo()，调用getInfo得到相关UI自动化的信息

<br><br>

# 7.UI自动化项目

