# 1.机试准备

## 初步分析

机考有三道算法题

- 简单：100
- 简单：100
- 中等：200

答题时间最长2个半小时，记得保存

 <br>



本次机试需要掌握以下内容

1.必会（简单题）

|   内容   | 是否掌握 |
| :------: | :------: |
|   数组   |          |
|  字符串  |          |
|   排序   |          |
|   贪心   |          |
|   递归   |          |
|   循环   |          |
|   滑窗   |          |
|    栈    |          |
| 进制转换 |          |
|  位运算  |          |
|   队列   |          |
|  哈希表  |          |
|   链表   |          |
|  线性表  |          |
| 二分查找 |          |

2.进阶（中等题）

|    内容    | 是否掌握 |
| :--------: | :------: |
|     图     |          |
|     树     |          |
|  DFS搜索   |          |
|  BFS搜索   |          |
|  动态规划  |          |
|   前缀和   |          |
|  排列组合  |          |
|    矩阵    |          |
|   双指针   |          |
|    回溯    |          |
|   状态机   |          |
|   并查集   |          |
| 正则表达式 |          |
|    分治    |          |
|    枚举    |          |
|    统计    |          |

## 基础必备



###  0.内置函数

> 当然！Python 提供了大量内置函数，可以用于处理常见的数据操作和计算任务。以下是一些常见且常用的 Python 内置函数的总结，包括 `sum()`、`count()` 等：
>
> ### 1. **`sum()`**  
>    **功能**：对可迭代对象中的元素进行求和。  
>    **语法**：`sum(iterable, start=0)`  
>    **示例**：
>    ```python
>    numbers = [1, 2, 3, 4, 5]
>    result = sum(numbers)  # 结果为 15
>    ```
>
> ### 2. **`len()`**  
>    **功能**：返回对象的长度（元素的数量）。  
>    **语法**：`len(object)`  
>    **示例**：
>    ```python
>    text = "Hello"
>    print(len(text))  # 结果为 5
>    ```
>
> ### 3. **`count()`**  
>    **功能**：统计列表中指定元素出现的次数（这是列表对象的一个方法，不是全局函数）。  
>    **语法**：`list.count(value)`  
>    **示例**：
>
>    ```python
>    numbers = [1, 2, 3, 2, 2, 5]
>    print(numbers.count(2))  # 结果为 3
>    ```
>
> ### 4. **`max()`**  
>    **功能**：返回可迭代对象中的最大值。  
>    **语法**：`max(iterable)`  
>    **示例**：
>    ```python
>    numbers = [1, 2, 3, 4, 5]
>    print(max(numbers))  # 结果为 5
>    ```
>
> ### 5. **`min()`**  
>    **功能**：返回可迭代对象中的最小值。  
>    **语法**：`min(iterable)`  
>    **示例**：
>    ```python
>    numbers = [1, 2, 3, 4, 5]
>    print(min(numbers))  # 结果为 1
>    ```
>
> ### 6. **`sorted()`**  
>    **功能**：返回一个排序后的列表。  
>    **语法**：`sorted(iterable, reverse=False)`  
>    **示例**：
>    ```python
>    numbers = [4, 1, 3, 5, 2]
>    print(sorted(numbers))  # 结果为 [1, 2, 3, 4, 5]
>    ```
>
> ### 7. **`reversed()`**  
>    **功能**：返回可迭代对象的反向迭代器。  
>    **语法**：`reversed(iterable)`  
>    **示例**：
>    ```python
>    numbers = [1, 2, 3, 4, 5]
>    print(list(reversed(numbers)))  # 结果为 [5, 4, 3, 2, 1]
>    ```
>
> ### 8. **`any()`**  
>    **功能**：如果可迭代对象中至少有一个元素为 `True`，则返回 `True`。  
>    **语法**：`any(iterable)`  
>    **示例**：
>    ```python
>    bool_list = [False, False, True]
>    print(any(bool_list))  # 结果为 True
>    ```
>
> ### 9. **`all()`**  
>    **功能**：如果可迭代对象的所有元素都为 `True`，则返回 `True`。  
>    **语法**：`all(iterable)`  
>    **示例**：
>    ```python
>    bool_list = [True, True, True]
>    print(all(bool_list))  # 结果为 True
>    ```
>
> ### 10. **`map()`**  
>    **功能**：将函数应用到可迭代对象的每个元素，并返回一个迭代器。  
>    **语法**：`map(function, iterable)`  
>    **示例**：
>    ```python
>    numbers = [1, 2, 3]
>    result = map(lambda x: x * 2, numbers)
>    print(list(result))  # 结果为 [2, 4, 6]
>    ```
>
> ### 11. **`filter()`**  
>    **功能**：筛选可迭代对象中的元素，返回一个迭代器。  
>    **语法**：`filter(function, iterable)`  
>    **示例**：
>    ```python
>    numbers = [1, 2, 3, 4, 5]
>    result = filter(lambda x: x > 3, numbers)
>    print(list(result))  # 结果为 [4, 5]
>    ```
>
> ### 12. **`zip()`**  
>    **功能**：将多个可迭代对象打包成一个迭代器。  
>    **语法**：`zip(*iterables)`  
>    **示例**：
>    ```python
>    list1 = [1, 2, 3]
>    list2 = ['a', 'b', 'c']
>    print(list(zip(list1, list2)))  # 结果为 [(1, 'a'), (2, 'b'), (3, 'c')]
>    ```
>
> ### 13. **`enumerate()`**  
>    **功能**：返回可迭代对象中的元素和它们的索引。  
>    **语法**：`enumerate(iterable, start=0)`  
>    **示例**：
>    ```python
>    letters = ['a', 'b', 'c']
>    for index, letter in enumerate(letters):
>        print(index, letter)
>    ```
>
> ### 14. **`abs()`**  
>    **功能**：返回数的绝对值。  
>    **语法**：`abs(number)`  
>    **示例**：
>    ```python
>    print(abs(-5))  # 结果为 5
>    ```
>
> ### 15. **`round()`**  
>    **功能**：将数字四舍五入到指定的小数位。  
>    **语法**：`round(number, digits)`  
>    **示例**：
>    ```python
>    print(round(3.14159, 2))  # 结果为 3.14
>    ```
>
> ### 总结
>
> 这些是 Python 中非常常见且常用的内置函数，可以大大简化代码并提升效率。通过灵活运用这些函数，你可以轻松地完成许多常见的编程任务。



### 1.字符串

> 好的，下面我将包括字符串的创建和最基本的操作在内，给出一个更完整的 Python 字符串处理总结。
>
> ### Python 字符串处理方法
>
> #### 1. **字符串的创建**
> 在 Python 中，字符串可以使用单引号或双引号创建。
>
> - 使用 **单引号** 或 **双引号**：
>   ```python
>   s1 = 'Hello'
>   s2 = "World"
>   ```
>
> - 使用 **三重引号**：可以创建多行字符串。
>   ```python
>   s3 = """This is 
>   a multi-line 
>   string"""
>   ```
>
> - 创建 **空字符串**：
>   ```python
>   s_empty = ""
>   ```
>
> - **转义字符**：在字符串中使用反斜杠 `\` 进行转义，比如换行符 `\n`，制表符 `\t` 等。
>   ```python
>   s = "Hello\nWorld"  # 换行
>   ```
>
> #### 2. **字符串的基本操作**
>
> - **访问字符**：可以通过索引访问字符串中的某个字符，索引从 0 开始。
>   ```python
>   s = "Hello"
>   print(s[0])  # 输出: H
>   ```
>
> - **字符串切片**：使用切片可以截取字符串中的一部分。
>   ```python
>   s = "Hello World"
>   print(s[0:5])  # 输出: Hello
>   print(s[-5:])  # 输出: World
>   ```
>
> - **字符串不可变性**：字符串在 Python 中是不可变的，无法直接修改其中的字符。
>   ```python
>   s = "Hello"
>   # s[0] = "h"  # 这是不允许的，字符串是不可变的
>   ```
>
> #### 3. **基本操作函数**
>
> - **`len()`**: 获取字符串的长度。
>   ```python
>   s = "Hello"
>   print(len(s))  # 输出: 5
>   ```
>
> - **字符串拼接 (`+`)**: 使用 `+` 连接两个字符串。
>   ```python
>   s1 = "Hello"
>   s2 = "World"
>   print(s1 + " " + s2)  # 输出: "Hello World"
>   ```
>
> - **重复字符串 (`*`)**: 使用 `*` 重复字符串指定的次数。
>   ```python
>   s = "Hi"
>   print(s * 3)  # 输出: "HiHiHi"
>   ```
>
> - **检查子串 (`in`)**: 使用 `in` 检查一个字符串是否包含某个子串。
>   ```python
>   s = "Hello World"
>   print("World" in s)  # 输出: True
>   ```
>
> #### 4. **拆分与连接**
>
> - **`split()`**: 将字符串按指定分隔符拆分成列表。
>   ```python
>   text = "apple,banana,cherry"
>   result = text.split(",")  # 输出: ['apple', 'banana', 'cherry']
>   ```
>
> - **`splitlines()`**: 按照换行符拆分字符串。
>   ```python
>   text = "Hello\nWorld"
>   result = text.splitlines()  # 输出: ['Hello', 'World']
>   ```
>
> - **`join()`**: 使用某个字符连接列表中的元素，生成一个字符串。
>   ```python
>   words = ['apple', 'banana', 'cherry']
>   result = ", ".join(words)  # 输出: "apple, banana, cherry"
>   ```
>
> #### 5. **清理与移除**
>
> - **`strip()`**: 移除字符串两端的空白字符或指定字符。
>   ```python
>   s = "  Hello World  "
>   print(s.strip())  # 输出: "Hello World"
>   ```
>
> - **`lstrip()`**: 移除字符串左侧的空白字符或指定字符。
>   ```python
>   s = "  Hello"
>   print(s.lstrip())  # 输出: "Hello"
>   ```
>
> - **`rstrip()`**: 移除字符串右侧的空白字符或指定字符。
>   ```python
>   s = "Hello  "
>   print(s.rstrip())  # 输出: "Hello"
>   ```
>
> #### 6. **替换与查找**
>
> - **`replace()`**: 替换字符串中的某个子串。
>   ```python
>   s = "I like apples"
>   print(s.replace("apples", "bananas"))  # 输出: "I like bananas"
>   ```
>
> - **`find()`**: 查找子串第一次出现的索引，找不到返回 -1。
>   ```python
>   s = "Hello World"
>   print(s.find("World"))  # 输出: 6
>   ```
>
> - **`startswith()` 和 `endswith()`**: 判断字符串是否以某个子串开头或结尾。
>   ```python
>   s = "Hello World"
>   print(s.startswith("Hello"))  # 输出: True
>   print(s.endswith("World"))  # 输出: True
>   ```
>
> #### 7. **大小写转换**
>
> - **`upper()` 和 `lower()`**: 转换字符串为全大写或全小写。
>   ```python
>   s = "Hello"
>   print(s.upper())  # 输出: "HELLO"
>   print(s.lower())  # 输出: "hello"
>   ```
>
> - **`capitalize()`**: 将字符串的首字母大写，其他字母小写。
>   ```python
>   s = "hello world"
>   print(s.capitalize())  # 输出: "Hello world"
>   ```
>
> - **`title()`**: 将字符串中的每个单词首字母大写。
>   ```python
>   s = "hello world"
>   print(s.title())  # 输出: "Hello World"
>   ```
>
> - **`swapcase()`**: 大小写互换。
>   ```python
>   s = "Hello World"
>   print(s.swapcase())  # 输出: "hELLO wORLD"
>   ```
>
> #### 8. **检查字符串内容**
>
> - **`isdigit()`**: 判断字符串是否只包含数字。
>   ```python
>   s = "12345"
>   print(s.isdigit())  # 输出: True
>   ```
>
> - **`isalpha()`**: 判断字符串是否只包含字母。
>   ```python
>   s = "abc"
>   print(s.isalpha())  # 输出: True
>   ```
>
> - **`isalnum()`**: 判断字符串是否只包含字母和数字。
>   ```python
>   s = "abc123"
>   print(s.isalnum())  # 输出: True
>   ```
>
> #### 9. **字符串格式化**
>
> - **`format()`**: 用 `{}` 占位符格式化字符串。
>   ```python
>   s = "Hello, {}".format("Alice")
>   print(s)  # 输出: "Hello, Alice!"
>   ```
>
> - **`f-strings`**: 使用 `f` 字符串格式化的简洁方式。
>   ```python
>   name = "Alice"
>   s = f"Hello, {name}!"
>   print(s)  # 输出: "Hello, Alice!"
>   ```
>
> #### 10. **其他常用方法**
>
> - **`count()`**: 统计子串在字符串中出现的次数。
>   ```python
>   s = "banana"
>   print(s.count("a"))  # 输出: 3
>   ```
>
> - **`zfill()`**: 在字符串左侧填充零，直到达到指定长度。
>   ```python
>   s = "42"
>   print(s.zfill(5))  # 输出: "00042"
>   ```
>
> - **`partition()`**: 按指定分隔符拆分字符串，返回一个三元组（分隔符前的部分，分隔符，分隔符后的部分）。
>   ```python
>   s = "Hello World"
>   print(s.partition(" "))  # 输出: ('Hello', ' ', 'World')
>   ```
>
> ---
>
> 这就是 Python 中字符串的完整处理总结。通过这些方法，你可以高效地操作字符串，进行分割、合并、查找、替换等操作。

### 2.列表

> ## 1. 创建列表
>
> ```
> python复制代码# 创建一个空列表
> empty_list = []
> 
> # 创建包含元素的列表
> numbers = [1, 2, 3, 4, 5]
> fruits = ['apple', 'banana', 'cherry']
> mixed_list = [1, 'hello', True, 3.14]
> ```
>
> ## 2. 访问列表元素
>
> ### 通过索引访问
>
> 列表的索引从 **0** 开始，使用索引可以访问对应位置的元素。
>
> ```
> python复制代码fruits = ['apple', 'banana', 'cherry']
> 
> print(fruits[0])  # 输出: 'apple'
> print(fruits[2])  # 输出: 'cherry'
> ```
>
> ### 负索引
>
> 负索引从列表末尾开始计数，`-1` 表示最后一个元素。
>
> ```
> python复制代码print(fruits[-1])  # 输出: 'cherry'
> print(fruits[-2])  # 输出: 'banana'
> ```
>
> ## 3. 列表切片
>
> 使用切片可以获取列表的子列表，语法为 `list[start:stop:step]`。
>
> ```
> python复制代码numbers = [0, 1, 2, 3, 4, 5]
> 
> print(numbers[1:4])    # 输出: [1, 2, 3]
> print(numbers[:3])     # 输出: [0, 1, 2]
> print(numbers[3:])     # 输出: [3, 4, 5]
> print(numbers[::2])    # 输出: [0, 2, 4]
> print(numbers[::-1])   # 输出: [5, 4, 3, 2, 1, 0]（反转列表）
> ```
>
> ## 4. 修改列表
>
> ### 更改元素值
>
> ```
> python复制代码fruits = ['apple', 'banana', 'cherry']
> fruits[1] = 'blueberry'
> print(fruits)  # 输出: ['apple', 'blueberry', 'cherry']
> ```
>
> ### 添加元素
>
> - **`append()`**：在列表末尾添加一个元素。
>
>   ```
>   python复制代码fruits.append('orange')
>   print(fruits)  # 输出: ['apple', 'blueberry', 'cherry', 'orange']
>   ```
>
> - **`insert()`**：在指定位置插入一个元素。
>
>   ```
>   python复制代码fruits.insert(1, 'banana')
>   print(fruits)  # 输出: ['apple', 'banana', 'blueberry', 'cherry', 'orange']
>   ```
>
> - **`extend()`**：合并两个列表。
>
>   ```
>   python复制代码more_fruits = ['kiwi', 'mango']
>   fruits.extend(more_fruits)
>   print(fruits)  # 输出: ['apple', 'banana', 'blueberry', 'cherry', 'orange', 'kiwi', 'mango']
>   ```
>
> ### 删除元素
>
> - **`remove()`**：删除指定值的元素（若有重复，只删除第一个）。
>
>   ```
>   python复制代码fruits.remove('banana')
>   print(fruits)  # 输出: ['apple', 'blueberry', 'cherry', 'orange', 'kiwi', 'mango']
>   ```
>
> - **`pop()`**：删除指定索引位置的元素，默认删除最后一个元素，并返回该元素。
>
>   ```
>   python复制代码last_fruit = fruits.pop()
>   print(last_fruit)  # 输出: 'mango'
>   print(fruits)      # 输出: ['apple', 'blueberry', 'cherry', 'orange', 'kiwi']
>   ```
>
> - **`clear()`**：清空列表。
>
>   ```
>   python复制代码fruits.clear()
>   print(fruits)  # 输出: []
>   ```
>
> ## 5. 列表常用操作
>
> ### 列表长度
>
> ```
> python复制代码numbers = [1, 2, 3, 4, 5]
> print(len(numbers))  # 输出: 5
> ```
>
> ### 列表排序
>
> - **`sort()`**：对列表进行原地排序。
>
>   ```
>   python复制代码numbers = [3, 1, 4, 2, 5]
>   numbers.sort()
>   print(numbers)  # 输出: [1, 2, 3, 4, 5]
>   ```
>
> - **`sorted()`**：返回排序后的新列表，不改变原列表。
>
>   ```
>   python复制代码numbers = [3, 1, 4, 2, 5]
>   sorted_numbers = sorted(numbers)
>   print(sorted_numbers)  # 输出: [1, 2, 3, 4, 5]
>   print(numbers)         # 输出: [3, 1, 4, 2, 5]
>   ```
>
> ### 列表反转
>
> - **`reverse()`**：原地反转列表。
>
>   ```
>   python复制代码numbers = [1, 2, 3, 4, 5]
>   numbers.reverse()
>   print(numbers)  # 输出: [5, 4, 3, 2, 1]
>   ```
>
> ### 检查元素是否在列表中
>
> ```
> python复制代码fruits = ['apple', 'banana', 'cherry']
> print('banana' in fruits)     # 输出: True
> print('mango' not in fruits)  # 输出: True
> ```
>
> ### 统计元素出现次数
>
> ```
> python复制代码numbers = [1, 2, 2, 3, 3, 3]
> print(numbers.count(2))  # 输出: 2
> print(numbers.count(3))  # 输出: 3
> ```
>
> ### 获取元素索引
>
> ```
> python复制代码fruits = ['apple', 'banana', 'cherry']
> print(fruits.index('cherry'))  # 输出: 2
> ```
>
> ## 6. 列表遍历
>
> ### 使用 `for` 循环
>
> ```
> python复制代码fruits = ['apple', 'banana', 'cherry']
> for fruit in fruits:
>     print(fruit)
> ```
>
> ### 使用索引遍历
>
> ```
> python复制代码for i in range(len(fruits)):
>     print(fruits[i])
> ```
>
> ### 使用 `enumerate()`
>
> ```
> python复制代码for index, fruit in enumerate(fruits):
>     print(index, fruit)
> ```
>
> ## 7. 列表推导式（列表生成式）
>
> 列表推导式提供了一种简洁的方式来创建列表。
>
> ```
> python复制代码# 创建一个包含 0 到 9 的平方的列表
> squares = [x**2 for x in range(10)]
> print(squares)  # 输出: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
> ```
>
> 带条件的列表推导式：
>
> ```
> python复制代码# 仅包含偶数的平方
> even_squares = [x**2 for x in range(10) if x % 2 == 0]
> print(even_squares)  # 输出: [0, 4, 16, 36, 64]
> ```
>
> ## 8. 列表嵌套
>
> 列表可以包含其他列表，实现多维数据结构。
>
> ```
> python复制代码matrix = [
>     [1, 2, 3],
>     [4, 5, 6],
>     [7, 8, 9]
> ]
> 
> print(matrix[0])      # 输出: [1, 2, 3]
> print(matrix[0][1])   # 输出: 2
> ```
>
> ## 9. 列表与字符串的转换
>
> ### 将字符串转换为列表
>
> ```
> python复制代码s = 'hello'
> char_list = list(s)
> print(char_list)  # 输出: ['h', 'e', 'l', 'l', 'o']
> ```
>
> ### 将列表转换为字符串
>
> ```
> python复制代码char_list = ['h', 'e', 'l', 'l', 'o']
> s = ''.join(char_list)
> print(s)  # 输出: 'hello'
> ```
>
> ## 10. 列表的拷贝
>
> ### 浅拷贝
>
> ```
> python复制代码original = [1, 2, 3]
> copy_list = original.copy()
> # 或者使用 copy_list = original[:]
> ```
>
> ### 深拷贝
>
> 如果列表中包含可变对象，使用 `copy.deepcopy()` 进行深拷贝。
>
> ```
> python复制代码import copy
> 
> original = [1, 2, [3, 4]]
> deep_copy_list = copy.deepcopy(original)
> 
> original[2][0] = 'changed'
> print(original)       # 输出: [1, 2, ['changed', 4]]
> print(deep_copy_list) # 输出: [1, 2, [3, 4]]
> ```
>
> ## 11. 列表的内置函数和方法
>
> - **`len(list)`**：返回列表的长度。
> - **`max(list)`**：返回列表中的最大值。
> - **`min(list)`**：返回列表中的最小值。
> - **`sum(list)`**：计算列表中元素的和（元素需为数值）。
>
> ```
> python复制代码numbers = [1, 2, 3, 4, 5]
> print(max(numbers))  # 输出: 5
> print(min(numbers))  # 输出: 1
> print(sum(numbers))  # 输出: 15
> ```
>
> ## 12. 合并和重复列表
>
> - **合并列表**：使用 `+` 运算符。
>
>   ```
>   python复制代码list1 = [1, 2, 3]
>   list2 = [4, 5, 6]
>   combined = list1 + list2
>   print(combined)  # 输出: [1, 2, 3, 4, 5, 6]
>   ```
>
> - **重复列表**：使用 `*` 运算符。
>
>   ```
>   python复制代码zeros = [0] * 5
>   print(zeros)  # 输出: [0, 0, 0, 0, 0]
>   ```
>
> ## 13. 列表作为堆栈或队列
>
> ### 作为堆栈（后进先出）
>
> ```
> python复制代码stack = []
> stack.append(1)
> stack.append(2)
> stack.append(3)
> print(stack)       # 输出: [1, 2, 3]
> print(stack.pop()) # 输出: 3
> print(stack)       # 输出: [1, 2]
> ```
>
> ### 作为队列（先进先出）
>
> 使用 `collections.deque` 更高效。
>
> ```
> python复制代码from collections import deque
> 
> queue = deque()
> queue.append(1)
> queue.append(2)
> queue.append(3)
> print(queue)           # 输出: deque([1, 2, 3])
> print(queue.popleft()) # 输出: 1
> print(queue)           # 输出: deque([2, 3]) 
> ```

### 3.字典

> 在 Python 中，**字典（dictionary）** 是一种键值对（key-value pairs）的数据结构。每个键（key）都唯一，并映射到一个值（value）。字典使用大括号 `{}` 来定义，键和值之间用冒号 `:` 分隔，多个键值对之间用逗号 `,` 分隔。
>
> ## 1. 创建字典
>
> ```python
> # 空字典
> empty_dict = {}
> 
> # 带有元素的字典
> person = {
>     'name': 'Alice',
>     'age': 25,
>     'city': 'New York'
> }
> ```
>
> ## 2. 访问字典元素
>
> 通过键来访问字典中的值：
>
> ```python
> print(person['name'])  # 输出: Alice
> print(person['age'])   # 输出: 25
> ```
>
> ### 使用 `get()` 方法
>
> 使用 `get()` 可以避免访问不存在的键时抛出异常，并且可以指定默认值。
>
> ```python
> print(person.get('name'))       # 输出: Alice
> print(person.get('job', 'N/A')) # 输出: N/A（键 'job' 不存在）
> ```
>
> ## 3. 修改字典
>
> ### 添加或更新键值对
>
> ```python
> # 添加新键值对
> person['job'] = 'Engineer'
> 
> # 更新已有键的值
> person['age'] = 30
> 
> print(person)  # 输出: {'name': 'Alice', 'age': 30, 'city': 'New York', 'job': 'Engineer'}
> ```
>
> ### 删除键值对
>
> - 使用 `pop()` 方法删除指定的键，并返回对应的值。
>
>   ```python
>   age = person.pop('age')
>   print(age)      # 输出: 30
>   print(person)   # 输出: {'name': 'Alice', 'city': 'New York', 'job': 'Engineer'}
>   ```
>
> - 使用 `del` 关键字删除键值对。
>
>   ```python
>   del person['job']
>   print(person)   # 输出: {'name': 'Alice', 'city': 'New York'}
>   ```
>
> - 使用 `clear()` 清空字典。
>
>   ```python
>   person.clear()
>   print(person)   # 输出: {}
>   ```
>
> ## 4. 遍历字典
>
> ### 遍历键
>
> ```python
> for key in person:
>     print(key)
> ```
>
> ### 遍历值
>
> ```python
> for value in person.values():
>     print(value)
> ```
>
> ### 遍历键和值
>
> ```python
> for key, value in person.items():
>     print(f'{key}: {value}')
> ```
>
> ## 5. 字典常用操作
>
> ### 检查键是否存在
>
> ```python
> if 'name' in person:
>     print("Name exists")
> ```
>
> ### 获取字典的键、值和键值对
>
> - **`keys()`**：返回所有键。
> - **`values()`**：返回所有值。
> - **`items()`**：返回所有键值对。
>
> ```python
> keys = person.keys()     # 输出: dict_keys(['name', 'city'])
> values = person.values() # 输出: dict_values(['Alice', 'New York'])
> items = person.items()   # 输出: dict_items([('name', 'Alice'), ('city', 'New York')])
> ```
>
> ### 合并字典
>
> 使用 `update()` 方法合并两个字典。
>
> ```python
> person.update({'age': 30, 'job': 'Engineer'})
> print(person)  # 输出: {'name': 'Alice', 'city': 'New York', 'age': 30, 'job': 'Engineer'}
> ```
>
> ## 6. 字典推导式
>
> 可以使用字典推导式生成字典。
>
> ```python
> # 生成一个键为数字，值为数字的平方的字典
> squares = {x: x**2 for x in range(5)}
> print(squares)  # 输出: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
> ```
>
> ## 7. 嵌套字典
>
> 字典可以嵌套，即字典的值也可以是字典。
>
> ```python
> people = {
>     'Alice': {'age': 25, 'job': 'Engineer'},
>     'Bob': {'age': 30, 'job': 'Doctor'}
> }
> 
> print(people['Alice']['age'])  # 输出: 25
> ```
>

### 4.进制转换

> 在 Python 中，可以方便地进行不同进制之间的转换。以下是常见的进制转换方法：
>
> ## 1. 将其他进制转换为十进制
>
> ### 使用 `int()` 函数：
> - **`int(x, base)`**：将字符串 `x` 解析为指定进制 `base` 的整数，并返回十进制数。
>
> ```python
> # 将二进制、八进制、十六进制转为十进制
> binary_str = '1010'
> octal_str = '12'
> hex_str = 'A'
> 
> # 转换为十进制
> decimal_from_binary = int(binary_str, 2)   # 二进制转十进制: 10
> decimal_from_octal = int(octal_str, 8)     # 八进制转十进制: 10
> decimal_from_hex = int(hex_str, 16)        # 十六进制转十进制: 10
> 
> print(decimal_from_binary)  # 输出: 10
> print(decimal_from_octal)   # 输出: 10
> print(decimal_from_hex)     # 输出: 10
> ```
>
> ## 2. 将十进制转换为其他进制
>
> ### 使用内置函数：
> - **`bin()`**：将十进制数转换为二进制字符串（以 `'0b'` 开头）。
> - **`oct()`**：将十进制数转换为八进制字符串（以 `'0o'` 开头）。
> - **`hex()`**：将十进制数转换为十六进制字符串（以 `'0x'` 开头）。
>
> ```python
> num = 10
> 
> binary = bin(num)   # 十进制转二进制: '0b1010'
> octal = oct(num)    # 十进制转八进制: '0o12'
> hexadecimal = hex(num)  # 十进制转十六进制: '0xA'
> 
> print(binary)       # 输出: 0b1010
> print(octal)        # 输出: 0o12
> print(hexadecimal)  # 输出: 0xA
> ```
>
> ### 去掉前缀：
> 如果你只需要数字部分（不需要 `0b`, `0o`, `0x` 前缀），可以使用字符串切片。
>
> ```python
> print(bin(num)[2:])  # 输出: '1010'
> print(oct(num)[2:])  # 输出: '12'
> print(hex(num)[2:])  # 输出: 'a'
> ```
>
> ## 3. 自定义进制转换
>
> ### 自定义将十进制转换为任意进制：
>
> 如果你想将十进制转换为更高的进制（比如 3 进制，7 进制等），可以使用如下自定义函数：
>
> ```python
> def decimal_to_base(n, base):
>     digits = []
>     while n > 0:
>         digits.append(str(n % base))
>         n //= base
>     return ''.join(digits[::-1]) or '0'
> 
> # 将 10 转为三进制
> print(decimal_to_base(10, 3))  # 输出: 101
> # 将 10 转为七进制
> print(decimal_to_base(10, 7))  # 输出: 13
> ```
>
> ### 将任意进制字符串转换为十进制：
>
> 同样，可以使用 `int()` 函数轻松将任何进制转换为十进制：
>
> ```python
> # 将三进制字符串 '101' 转换为十进制
> print(int('101', 3))  # 输出: 10
> ```
>
> 通过这些方法，你可以轻松地在不同进制之间进行转换。如果有更多进制相关的问题，随时告诉我！

### 5.二进制操作

> Python 提供了丰富的二进制操作符，可以用来进行位操作（bitwise operations）。这些操作符直接对数值的二进制表示进行操作，是进行底层计算和优化的常用方法。
>
> ### 常见的二进制操作符
>
> 1. **按位与（`&`）**  
>    每一位上，两者都为 1 时结果为 1，否则为 0。
>
>    ```python
>    a = 0b1101  # 二进制: 1101 (十进制: 13)
>    b = 0b1011  # 二进制: 1011 (十进制: 11)
>                
>    result = a & b  # 1001 (十进制: 9)
>    print(bin(result))  # 输出: 0b1001
>    ```
>
> 2. **按位或（`|`）**  
>    每一位上，只要有一个为 1，结果就为 1。
>
>    ```python
>    result = a | b  # 1111 (十进制: 15)
>    print(bin(result))  # 输出: 0b1111
>    ```
>
> 3. **按位异或（`^`）**  
>    每一位上，两者相同为 0，不同为 1。
>
>    ```python
>    result = a ^ b  # 0110 (十进制: 6)
>    print(bin(result))  # 输出: 0b110
>    ```
>
> 4. **按位取反（`~`）**  
>    将每一位上的 0 和 1 反转。对于正数，结果是 `-(n+1)`。
>
>    ```python
>    result = ~a  # -1110 (十进制: -14)
>    print(result)  # 输出: -14
>    ```
>
> 5. **左移（`<<`）**  
>    将数字的二进制位左移指定的位数，右侧补 0，相当于乘以 2 的几次方。
>
>    ```python
>    result = a << 2  # 110100 (十进制: 52)
>    print(bin(result))  # 输出: 0b110100
>    ```
>
> 6. **右移（`>>`）**  
>    将数字的二进制位右移指定的位数，左侧补 0，相当于除以 2 的几次方。
>
>    ```python
>    result = a >> 2  # 0011 (十进制: 3)
>    print(bin(result))  # 输出: 0b11
>    ```
>
> ### 示例操作
>
> 1. **检查某一位是否为 1：**
>
>    假设你想检查某个整数的第 `n` 位是否为 1，可以使用按位与：
>
>    ```python
>    num = 0b1010  # 二进制: 1010 (十进制: 10)
>    n = 2  # 检查从右往左数第 2 位是否为 1
>
>    if num & (1 << n):
>        print(f"第 {n} 位是 1")
>    else:
>        print(f"第 {n} 位是 0")
>    ```
>
> 2. **设置某一位为 1：**
>
>    使用按位或可以将某一位设置为 1：
>
>    ```python
>    num = 0b1010
>    n = 1  # 设置第 1 位为 1
>
>    num = num | (1 << n)
>    print(bin(num))  # 输出: 0b1011
>    ```
>
> 3. **清除某一位（设置为 0）：**
>
>    使用按位与和按位取反可以将某一位清为 0：
>
>    ```python
>    num = 0b1010
>    n = 3  # 清除第 3 位
>
>    num = num & ~(1 << n)
>    print(bin(num))  # 输出: 0b0010
>    ```
>
> 4. **翻转某一位：**
>
>    使用按位异或来翻转某一位：
>
>    ```python
>    num = 0b1010
>    n = 2  # 翻转第 2 位
>                
>    num = num ^ (1 << n)
>    print(bin(num))  # 输出: 0b1110
>    ```
>
> ### 总结
>
> - `&`：按位与
> - `|`：按位或
> - `^`：按位异或
> - `~`：按位取反
> - `<<`：左移
> - `>>`：右移
>
> 这些操作可以用来高效地进行数据处理和优化，尤其在涉及位运算的算法问题中很常见。如果你有其他问题或需要更多关于位操作的详细说明，随时告诉我！

### 6.math模块

> Python 的 `math` 模块提供了大量用于数学运算的函数，涵盖了基本的数学操作、三角函数、对数、幂函数、常数等。以下是一些常用的 `math` 模块功能介绍和示例：
>
> ### 1. **基本数学函数**
>
> - **`math.sqrt(x)`**: 返回 `x` 的平方根。
>   
>   ```python
>   import math
>   print(math.sqrt(16))  # 输出: 4.0
>   ```
>
> - **`math.pow(x, y)`**: 计算 `x` 的 `y` 次幂，返回 `x^y`（可以用 `x ** y` 代替）。
>
>   ```python
>   print(math.pow(2, 3))  # 输出: 8.0
>   ```
>
> - **`math.fabs(x)`**: 返回 `x` 的绝对值（可以用 `abs()` 内置函数代替）。
>
>   ```python
>   print(math.fabs(-5.5))  # 输出: 5.5
>   ```
>
> - **`math.ceil(x)`**: 向上取整，返回大于或等于 `x` 的最小整数。
>
>   ```python
>   print(math.ceil(4.2))  # 输出: 5
>   ```
>
> - **`math.floor(x)`**: 向下取整，返回小于或等于 `x` 的最大整数。
>
>   ```python
>   print(math.floor(4.7))  # 输出: 4
>   ```
>
> - **`math.factorial(x)`**: 返回 `x` 的阶乘 (`x!`)。
>
>   ```python
>   print(math.factorial(5))  # 输出: 120
>   ```
>
> - **`math.gcd(a, b)`**: 返回 `a` 和 `b` 的最大公约数（gcd）。
>
>   ```python
>   print(math.gcd(12, 18))  # 输出: 6
>   ```
>
> ### 2. **对数与指数函数**
>
> - **`math.log(x, base)`**: 计算以 `base` 为底的 `x` 的对数。如果不指定 `base`，默认是自然对数（`e` 底）。
>
>   ```python
>   print(math.log(8, 2))  # 输出: 3.0
>   print(math.log(10))    # 输出: 2.302585092994046 (自然对数)
>   ```
>
> - **`math.log10(x)`**: 返回 `x` 的以 10 为底的对数。
>
>   ```python
>   print(math.log10(100))  # 输出: 2.0
>   ```
>
> - **`math.exp(x)`**: 返回 `e^x`，即 `x` 的自然指数。
>
>   ```python
>   print(math.exp(2))  # 输出: 7.3890560989306495
>   ```
>
> ### 3. **三角函数**
>
> - **`math.sin(x)`**: 返回 `x` 的正弦值（`x` 以弧度为单位）。
>   
>   ```python
>   print(math.sin(math.pi / 2))  # 输出: 1.0
>   ```
>
> - **`math.cos(x)`**: 返回 `x` 的余弦值（`x` 以弧度为单位）。
>
>   ```python
>   print(math.cos(0))  # 输出: 1.0
>   ```
>
> - **`math.tan(x)`**: 返回 `x` 的正切值（`x` 以弧度为单位）。
>
>   ```python
>   print(math.tan(math.pi / 4))  # 输出: 1.0
>   ```
>
> - **`math.asin(x)`**、**`math.acos(x)`**、**`math.atan(x)`**: 分别返回 `x` 的反正弦、反余弦和反正切值，结果为弧度。
>
>   ```python
>   print(math.asin(1))  # 输出: 1.5707963267948966 (即 pi/2)
>   ```
>
> - **`math.degrees(x)`**: 将弧度转换为角度。
>
>   ```python
>   print(math.degrees(math.pi))  # 输出: 180.0
>   ```
>
> - **`math.radians(x)`**: 将角度转换为弧度。
>
>   ```python
>   print(math.radians(180))  # 输出: 3.141592653589793 (即 pi)
>   ```
>
> ### 4. **常数**
>
> - **`math.pi`**: 圆周率 π，约等于 3.14159。
>
>   ```python
>   print(math.pi)  # 输出: 3.141592653589793
>   ```
>
> - **`math.e`**: 自然对数的底数 e，约等于 2.71828。
>
>   ```python
>   print(math.e)  # 输出: 2.718281828459045
>   ```
>
> - **`math.inf`**: 表示无穷大。
>
>   ```python
>   print(math.inf)  # 输出: inf
>   ```
>
> - **`math.nan`**: 表示“不是一个数”（NaN，Not a Number）。
>
>   ```python
>   print(math.nan)  # 输出: nan
>   ```
>
> ### 5. **其他常用函数**
>
> - **`math.isclose(a, b, rel_tol=1e-9, abs_tol=0.0)`**: 判断两个浮点数是否接近（支持相对和绝对误差）。
>   
>   ```python
>   print(math.isclose(1.000000001, 1.0))  # 输出: True
>   ```
>
> - **`math.isfinite(x)`**: 判断 `x` 是否为有限数。
>
>   ```python
>   print(math.isfinite(1.0))  # 输出: True
>   print(math.isfinite(math.inf))  # 输出: False
>   ```
>
> - **`math.isinf(x)`**: 判断 `x` 是否为无穷大。
>
>   ```python
>   print(math.isinf(math.inf))  # 输出: True
>   ```
>
> - **`math.isnan(x)`**: 判断 `x` 是否为 NaN。
>
>   ```python
>   print(math.isnan(math.nan))  # 输出: True
>   ```
>
> ### 总结
>
> - `math` 模块涵盖了各种数学运算：基本运算、三角函数、对数、指数等。
> - 提供了常用数学常数，如 `pi` 和 `e`。
> - 提供了用于数值比较的函数，如 `isclose`。
>
> 如果你需要进行复杂的数学运算，`math` 模块是非常强大的工具。如果有具体问题或进一步的需求，随时告诉我！

### 7. 输入输出

> ### Python 输入与输出的总结（包含 `sys` 模块）
>
> 在 Python 中，处理输入和输出的方式有多种，适合不同的应用场景。以下是常见的输入和输出方法的总结，包括基础的 `input()` 和 `print()`，以及更高级的 `sys.stdin` 和 `sys.stdout` 用法。
>
> ---
>
> ### 1. **基本输入：`input()`**
>
> - **`input()`** 函数用于从用户获取输入，返回类型为字符串，必须按下回车键结束输入。
>   
> #### 示例：
> ```python
> name = input("请输入你的名字: ")
> print(f"你好, {name}")
> ```
>
> - 输入结束：按 **回车键**。
> - 返回类型：**字符串**。
> - 若输入的需要是数字、列表等类型，则需手动转换。
>
> #### 输入多个数值：
> ```python
> data = input("请输入多个数字，用空格分隔: ")  # 输入: 1 2 3
> data_list = list(map(int, data.split()))  # 转换为整数列表
> print(data_list)  # 输出: [1, 2, 3]
> ```
>
> ---
>
> ### 2. **高级输入：`sys.stdin`**
>
> 对于处理大量输入或批量数据，`sys.stdin` 提供了更高效的输入方式，常用于竞赛环境（如 ACM 模式）。
>
> #### **`sys.stdin.read()`**：一次性读取所有输入，按空格或换行分割。
> ```python
> import sys
> data = sys.stdin.read().split()
> # 假设输入: 1 2 3 4 5
> print(data)  # 输出: ['1', '2', '3', '4', '5']
> ```
>
> - 用于从标准输入中一次性读取所有数据，并手动进行分割和解析。
> - 更适合处理大量数据的场景。
>
> #### **`sys.stdin.readlines()`**：逐行读取输入，每行作为一个元素存储在列表中。
> ```python
> import sys
> lines = sys.stdin.readlines()
> for line in lines:
>     print(line.strip())  # 移除每行末尾的换行符
> ```
>
> - 每行输入为列表中的一个元素，通常用于文件输入或多行输入。
>
> ---
>
> ### 3. **基本输出：`print()`**
>
> - **`print()`** 是 Python 中最常用的输出方法。
> - 支持使用逗号 `,` 来打印多个元素，元素之间自动加上空格。
> - 可使用格式化字符串（f-strings）来格式化输出。
>
> #### 示例：
> ```python
> name = "Alice"
> age = 30
> print(f"{name} 的年龄是 {age} 岁")  # 格式化输出
> ```
>
> - `print()` 默认会在输出末尾加上一个换行符，可以通过 `end` 参数自定义结束符：
> ```python
> print("Hello", end=" ")
> print("World!")  # 输出: Hello World!
> ```
>
> ---
>
> ### 4. **高级输出：`sys.stdout` 和 `sys.stderr`**
>
> #### **`sys.stdout.write()`**：更底层的输出方法，不会自动添加换行符。
> ```python
> import sys
> sys.stdout.write("Hello World\n")  # 需要手动添加换行符
> ```
>
> - 更适合在需要精确控制输出格式的场合。
> - 与 `print()` 不同，它不会自动添加换行符。
>
> #### **`sys.stderr.write()`**：用于输出错误消息。
> ```python
> import sys
> sys.stderr.write("错误: 发生了意外的错误\n")
> ```
>
> - `sys.stderr` 通常用于输出错误或调试信息，与标准输出分离。
>
> ---
>
> ### 5. **从文件中读取输入**
>
> - 使用 `open()` 函数可以从文件中读取数据：
>
> #### 读取整个文件内容：
> ```python
> with open("input.txt", "r") as file:
>     content = file.read()
>     print(content)
> ```
>
> #### 逐行读取：
> ```python
> with open("input.txt", "r") as file:
>     for line in file:
>         print(line.strip())  # 去掉行末的换行符
> ```
>
> ---
>
> ### 6. **输出到文件**
>
> - 使用 `open()` 函数也可以将输出写入文件：
>
> #### 示例：写入文件
> ```python
> with open("output.txt", "w") as file:
>     file.write("Hello World\n")
> ```
>
> - **`"w"` 模式**：覆盖写入（文件不存在会创建，已存在的文件会被清空）。
> - **`"a"` 模式**：追加写入。
>
> ---
>
> ### 7. **批量输入和输出的场景**
>
> 在竞赛或大数据处理的场景下，通常使用批量输入输出来提高效率。`sys.stdin.read()` 和 `sys.stdout.write()` 是常见的选择，因为它们比逐行输入和输出的 `input()` 和 `print()` 更高效。
>
> ---
>
> ### 总结
>
> 1. **基础输入与输出**：
>    - `input()`：获取单行输入，返回字符串。
>    - `print()`：输出到屏幕，支持格式化输出。
>
> 2. **高级输入与输出**：
>    - `sys.stdin.read()`：一次性读取所有输入，适合大量数据。
>    - `sys.stdin.readlines()`：逐行读取输入，适合多行数据处理。
>    - `sys.stdout.write()` 和 `sys.stderr.write()`：精确控制输出，不自动换行。
>
> 3. **文件读写**：
>    - 使用 `open()` 进行文件的读取和写入，适合处理更复杂的 I/O 操作。
>
> 不同场景下选择合适的输入输出方式能提高代码的可读性和运行效率。如果有其他具体的需求或问题，随时告诉我！





## 典型分析

### 例题分析

必会题目如下：

|               题目名称               | 是否掌握 |           关键字           |
| :----------------------------------: | :------: | :------------------------: |
|             1.字符串分割             |    是    |       双端队列deque        |
|             2.组成最大数             |    是    | 贪心算法、sorted自定义排序 |
|          3.统计射击比赛成绩          |    是    |      枚举、sorted排序      |
|           4.字符串序列判定           |    是    |         双指针算法         |
|              5.数据分类              |    是    |           模拟类           |
|            6.键键盘的输出            |    是    |      模拟类、状态压缩      |
| 7.检查是否满足存在满足条件的数字组合 |  不熟练  |           模拟类           |
|              8.数组拼接              |          |                            |
|              9.数列描述              |          |                            |
|             10.考勤信息              |          |                            |
|    11.按单词下标区间翻转文章内容     |          |                            |
|           12.最大括号深度            |          |                            |
|            13.字符串加密             |          |                            |
|           14.整数对最小和            |          |                            |
|    15.求字符串中所有整数的最小和     |          |                            |
|  16.乱序整数序列两数之和绝对值最小   |          |                            |
|      17.非严格递增连续数字序列       |          |                            |
|              18.分积木               |          |                            |
|           19.连续字母长度            |          |                            |
|          20.滑动窗口最大和           |          |                            |
|             21.素数之积              |          |                            |
|            22.仿LISP运算             |          |                            |
|              23.贪吃蛇               |          |                            |
|           24.解密犯罪时间            |          |                            |
|    25.求满足条件的最长子串的长度     |          |                            |
|           26.机器人走迷宫            |          |                            |
|          27.高效的任务规划           |          |                            |
|            28.二叉树遍历             |          |                            |
|             29.书籍叠放              |          |                            |
|             30.区间交集              |          |                            |
|              31.分月饼               |          |                            |
|             32.找最小数              |          |                            |
|            33.简易内存池             |          |                            |
|           34.服务失效判断            |          |                            |
|          35.图像物体的边界           |          |                            |
|            36.跳格子游戏             |          |                            |
|            37.数组二叉树             |          |                            |
|             38.考古学家              |          |                            |
|             39.解压报文              |          |                            |
|    40.最长的指定瑕疵度的元音子串     |          |                            |
|             41.目录删除              |          |                            |
|               42.火锅                |          |                            |
|            65.服务器广播             |          |                            |
|       66.二叉树的广度优先遍历        |          |                            |
|              67.找单词               |          |                            |
|               68.招聘                |          |                            |
|           69.斗地主之顺子            |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |
|                                      |          |                            |



### 题型分析



## 刷题分析

###





# 2.机试测试

## oj输入输出测试

> 这个代码不需要使用 `readline()` 或 `read()` 方法的原因是因为它使用了 `for line in sys.stdin`，这种方式自动处理输入行，并在每次迭代中读取一行数据，和 `readline()` 类似。这种方式是 Python 提供的一种简化写法，等同于逐行调用 `sys.stdin.readline()`。
>
> 让我们来看看它和 `readline()` 或 `read()` 的差异：
>
> ### `for line in sys.stdin`
>
> - **逐行读取**：`for line in sys.stdin` 是一种迭代方式，能够逐行读取输入，类似于 `sys.stdin.readline()`。每次迭代时，读取标准输入中的一行，赋值给 `line` 变量。
> - **自动处理输入结束**：当输入结束时（例如通过按下 `Ctrl+D` 或文件结尾），它会自动停止迭代，无需手动处理。
> - **更简洁**：相比于每次显式调用 `readline()`，这种方式更加简洁且易读。
>
> ### `sys.stdin.readline()`
>
> - **逐行读取**：每次调用 `readline()` 时，它读取标准输入的一行数据，返回一个字符串。这一行数据通常会包含行尾的换行符（`\n`），除非文件结尾。
> - **需要循环控制**：如果你使用 `sys.stdin.readline()`，需要手动写循环逻辑来逐行读取数据，直到遇到 EOF（文件结束）。
>
> **示例（等价的写法）：**
> ```python
> import sys
> 
> while True:
>     line = sys.stdin.readline()  # 显式调用 readline
>     if not line:  # 处理 EOF
>         break
>     a = line.split()
>     print(int(a[0]) + int(a[1]))
> ```
>
> ### `sys.stdin.read()`
>
> - **一次性读取所有数据**：`sys.stdin.read()` 不会逐行读取，而是一次性读取整个输入流（直到 EOF）。
> - **适合大块数据处理**：这种方法适合一次性处理大量数据，而不是逐行处理。
> - **需要额外处理**：使用 `read()` 后，通常你需要自行将数据按照行或其他方式分割，再进行处理。
>
> **示例（使用 `read()` 读取所有输入）：**
> ```python
> import sys
> 
> input_data = sys.stdin.read()  # 一次性读取所有输入
> lines = input_data.strip().split('\n')  # 按行分割数据
> for line in lines:
>     a = line.split()
>     print(int(a[0]) + int(a[1]))
> ```
>
> ### 总结
>
> - **`for line in sys.stdin`** 是一种简洁的写法，等效于逐行调用 `sys.stdin.readline()`，它能自动读取输入行并处理 EOF，适合逐行读取的场景。
> - **`sys.stdin.readline()`** 是逐行读取，但需要手动控制循环和 EOF。
> - **`sys.stdin.read()`** 一次性读取所有输入，适合处理大块数据。
>
> 使用 `for line in sys.stdin` 是一种简化写法，避免了手动处理循环和 EOF，因此在你的场景中更加方便。

### 输入所有行

> 遍历所有行的操作在 Python 中有几种常见的方式，尤其是在处理标准输入时，具体使用哪种方式取决于你的需求。下面我总结了几种常见的方法。
>
> ### 1. 使用 `for line in sys.stdin`（最常用）
>
> **用法：**
> - `for line in sys.stdin` 是一种简单、常见的方式来遍历所有输入行，特别适合处理来自文件、命令行输入或者管道输入的数据。
> - 该方法会自动处理行的读取，并在遇到 EOF（输入结束）时停止。
>
> **示例：**
> ```python
> import sys
> 
> for line in sys.stdin:
>     print(line.strip())  # 逐行打印，并去除末尾的换行符
> ```
>
> **优点：**
> - 自动处理结束，无需手动检查 EOF。
> - 适用于输入行数不确定的情况。
>
> ---
>
> ### 2. 使用 `sys.stdin.readlines()`（一次性读取所有行）
>
> **用法：**
> - `sys.stdin.readlines()` 会一次性将所有行读取为列表，每一行作为列表中的一个元素（带换行符）。
> - 你可以通过遍历这个列表来逐行处理。
>
> **示例：**
> ```python
> import sys
> 
> lines = sys.stdin.readlines()  # 读取所有行，返回列表
> for line in lines:
>     print(line.strip())  # 遍历列表并逐行处理
> ```
>
> **优点：**
> - 可以方便地对输入进行整体处理，一次性获取所有行的数据。
> - 适合输入数据量较小的情况。
>
> **缺点：**
> - 如果输入数据量很大，会占用较多内存。
>
> ---
>
> ### 3. 使用 `sys.stdin.readline()`（逐行手动读取）
>
> **用法：**
> - `sys.stdin.readline()` 每次调用读取一行输入。
> - 适合你需要手动控制读取的情况，比如你想读取某一行或在特定条件下停止读取。
>
> **示例：**
> ```python
> import sys
> 
> while True:
>     line = sys.stdin.readline()  # 逐行读取
>     if not line:  # 如果读取到 EOF，结束循环
>         break
>     print(line.strip())
> ```
>
> **优点：**
> - 更加灵活，可以手动控制读取过程。
> - 适用于需要自定义读取逻辑的情况。
>
> ---
>
> ### 4. 使用 `sys.stdin.read()`（一次性读取所有输入）
>
> **用法：**
> - `sys.stdin.read()` 会一次性读取所有输入并返回为一个大字符串。
> - 适合处理完整的文本块，而不是逐行处理。
>
> **示例：**
> ```python
> import sys
> 
> data = sys.stdin.read()  # 一次性读取所有输入
> lines = data.splitlines()  # 按行分割为列表
> for line in lines:
>     print(line)
> ```
>
> **优点：**
> - 适合需要一次性处理大块数据的情况。
> - 方便处理多行拼接或者需要整体分析的输入。
>
> **缺点：**
> - 如果输入数据量很大，可能会占用大量内存。
>
> ---
>
> ### 总结：
> 1. **`for line in sys.stdin`**：适合遍历所有行的最常见、简便方式，逐行读取并处理。
> 2. **`sys.stdin.readlines()`**：一次性读取所有行到列表中，适合小规模输入数据的情况。
> 3. **`sys.stdin.readline()`**：逐行手动读取，需要自己控制循环终止。
> 4. **`sys.stdin.read()`**：一次性读取所有输入并作为整体处理，适合处理完整文本或大量数据的场景。
>
> 在实际应用中，选择适合你需求的方式来遍历和处理标准输入的数据。

### 输入第一行

```python
import sys

a = sys.stdin.readline()  # 读取标准输入的第一行
print(a.strip())  # 打印并去掉行末的换行符
```



### 输入n行

> 要实现读取标准输入的前 `n` 行，可以使用 `sys.stdin.readline()` 逐行读取，直到达到 `n` 行。以下是实现这个功能的几种方法：
>
> ### 方法 1: 使用 `sys.stdin.readline()`
>
> **步骤：**
> 1. 初始化计数器。
> 2. 使用 `while` 循环逐行读取输入。
> 3. 读取到 `n` 行时，停止读取。
>
> **代码示例：**
> ```python
> import sys
> 
> n = 5  # 假设我们要读取前 5 行
> count = 0
> 
> while count < n:
>     line = sys.stdin.readline()
>     if not line:  # 如果没有更多输入，则停止
>         break
>     print(line.strip())  # 处理当前行
>     count += 1
> ```
>
> ### 方法 2: 使用 `sys.stdin` 和 `islice`（来自 `itertools`）
>
> **步骤：**
> 1. 使用 `itertools.islice` 从 `sys.stdin` 中提取前 `n` 行。
>
> **代码示例：**
> ```python
> import sys
> from itertools import islice
> 
> n = 5  # 假设我们要读取前 5 行
> 
> for line in islice(sys.stdin, n):
>     print(line.strip())  # 处理当前行
> ```
>
> ### 方法 3: 使用 `sys.stdin.readlines()` 和切片
>
> **步骤：**
> 1. 使用 `readlines()` 一次性读取所有行。
> 2. 通过切片提取前 `n` 行。
>
> **代码示例：**
> ```python
> import sys
> 
> n = 5  # 假设我们要读取前 5 行
> 
> lines = sys.stdin.readlines()  # 读取所有行
> for line in lines[:n]:  # 处理前 n 行
>     print(line.strip())
> ```
>
> ### 总结
>
> - **`sys.stdin.readline()`**: 适合逐行读取，并可以灵活控制读取的行数。适用于处理较大或不确定长度的输入。
> - **`itertools.islice`**: 提供了简洁的方式来限制迭代器的范围，非常适合需要处理标准输入的前 `n` 行的场景。
> - **`sys.stdin.readlines()`**: 一次性读取所有数据到内存中，适合处理小规模数据，使用切片来获取前 `n` 行。
>
> 根据实际情况选择合适的方法。如果输入数据量较小，可以直接使用 `readlines()`。如果需要逐行读取或处理大量数据，推荐使用 `readline()` 或 `islice`。





# 3.机试

## 基站维修工程师

题目描述 小王是一名基站维护工程师，负责某区域的基站维护。 某地方有 n 个基站（1<n<10），已知各基站之间的距离 s（0<s<500），并且基站 x 到基站 y 的 距离，与基站 y 到基站 x 的距离并不一定会相同。 小王从基站 1 出发，途径每个基站 1 次，然后返回基站 1，需要请你为他选择一条距离最短 的路线。 输入描述 站点数 n 和各站点之间的距离（均为整数）。

如： 3 {站点数} 

​		0 2 l {站点 1 到各站点的路程} 

​		1 0 2 {站点 2 到各站点的路程} 

​		2 1 0 {站点 3 到各站点的路程}

 输出描述 最短路程的数值





参考解法

```python
import sys

def tsp(n, dist):
    # dp[i][j] 表示访问完前 j 个基站，最后停在基站 i 的最短路径
    dp = [[float('inf')] * n for _ in range(n)]
    
    # 初始状态，从基站 0 出发
    for i in range(1, n):
        dp[i][1] = dist[0][i]  # 直接从基站 0 到达基站 i

    # 遍历所有的访问状态
    for j in range(1, n):  # 访问的基站数
        for i in range(1, n):  # 当前基站
            for k in range(1, n):  # 前一个基站
                if k != i:  # 确保前一个基站不是当前基站
                    dp[i][j] = min(dp[i][j], dp[k][j-1] + dist[k][i])

    # 计算返回到起点的最短路径
    min_path = float('inf')
    for i in range(1, n):
        min_path = min(min_path, dp[i][n-1] + dist[i][0])  # 返回到基站 0

    return min_path

# 输入处理
def main():
    n = int(input())
    dist = [list(map(int, input().split())) for _ in range(n)]
    result = tsp(n, dist)
    print(result)

if __name__ == "__main__":
    main()

```

