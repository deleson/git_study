# 1. python编程基础

# 2.python自动化任务







## 2.1 模式匹配与正则表达式

使用正则表达式首先需要导入re库

### 2.1.1 基本使用

创建正则表达式对象

` phoneNumRegex = re.compile(r"\d\d\d-\d\d\d-\d\d\d\d")`

想re.compile传入一个字符串值，表示正则表达式，他将返回一个REgex对象。

<br>

匹配Regex对象

```python
phoneNumRegex = re.compile(r"\d\d\d-\d\d\d-\d\d\d\d")
mo = phoneNumRegex.search("my number is 415-555-1515")
print("phone number found:" + mo.group())
```

Regex对象的search方法查找传入的字符串

- 查找失败，search()方法返回None
- 查找成功，search方法将返回一个Match对象。Match对象有个一个group()方法，他将返回被查找字符串中实际匹配的文本



### 2.1.2 更多匹配模式

利用括号分组，区分区号

```python
phoneNumRegex = re.compile(r"(\d\d\d)-(\d\d\d-\d\d\d\d)")
mo = phoneNumRegex.search("my number is 415-555-4242")
print(mo.group(1))
print(mo.group(2))
areaCode,mainNumber = mo.groups()   #获取所有分组，构成元组
print(areaCode,mainNumber)
```

<br>

匹配特殊字符需要在前面加上\

| .    | ^    | *    | +    | ?    | {    | }    | [    | ]    | \    | \|   | (    | )    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| \\.  | \\^  | \\*  | \\+  | \?   | \ {  | \ }  | \ [  | \ ]  | \ \  | \ \| | \ (  | \ )  |

<br>

管道匹配多个分组（|）

```python
heroRegex = re.compile(r"Batman|Tina Fey")
mo1 = heroRegex.search("Batman and Tina Fey.")
mo1.group()
#得到'Batman'
```

匹配xx或oo，如果都存在，则匹配第一个出现的匹配文本作为Match对象返回。

注：findall()方法可以找到所有匹配的地方

<br>

问号？实现可选匹配

```python
BatRegex = re.compile(r"Bat(wo)?man")
mo1 = batRegex.search("The Adventures of Batman")
mo2 = batRegex.search("the Adventures of Batwoman")

mo1.group()			#返回Batman
mo2.group()			#返回Batwoman
```

字符？表明他前面的**分组**在这个模式中是可选的

即(xx)?表明分组内容出现一次或零次

<br>

星号*实现匹配零次或多次

```python
BatRegex = re.compile(r"Bat(wo)*man")
mo1 = batRegex.search("The Adventures of Batman")
mo2 = batRegex.search("the Adventures of Batwoman")
mo3 = batRegex.search("the Adventures of Batwowoman")



mo1.group()			#返回Batman
mo2.group()			#返回Batwoman
mo3.group()			#返回Batwowoman
```

*（星号）意味着“匹配零次或多次”，即星号之前的分组可以在文本中出现任意次。 它可以完全不存在，也可以一次又一次地重复。

<br>

加号+匹配一次或多次

```python
BatRegex = re.compile(r"Bat(wo)+man")
mo1 = batRegex.search("The Adventures of Batman")
mo2 = batRegex.search("the Adventures of Batwoman")
mo3 = batRegex.search("the Adventures of Batwowoman")

mo1.group()			#返回None
mo2.group()			#返回Batwoman
mo3.group()			#返回Batwowoman
```

正则表达式Bat(wo)+man不会匹配字符串'The Adventures of Batman'，因为加 号要求wo至少出现一次。

<br>

花括号{}匹配特定次数

```python
haRegex = re.compile(r"(Ha){3}")
mo1 = haRegex.search("HaHaHa")
mo1.group()			#返回HaHaHa
```

匹配使用

- 特定次数 3次：{3}
- 特定有限范围次数3-5次：{3,5}
- 特定无限返回次数3-无限：{3,}

<br>

<br>

### 2.1.2 贪心和非贪心匹配

问题描述：对于字符串”HaHaHaHaHa“中，(Ha){3,5}可以匹配3个、4个、5个实例，但是实际查找的时候，Mathc对象的group调用返回只会是”HaHaHa“。

回答：这是由于python的正则表达式默认是贪心的，即有二义的情况下尽可能匹配最长的字符串。

<br>

有时候我们需要尽可能匹配最短的字符串，这种匹配需求就是非贪心匹配。非贪心匹配只需在结束的花括号后面添加❓即可

```python
#贪心匹配
greedyHaRegex  = re.compile(r"(Ha){3,5}")
mo1 = greedyHaRegex.search("HaHaHaHaHa")
mo1.group()			#返回HaHaHaHaHa

#非贪心匹配
nongreedyHaRegex  = re.compile(r"(Ha){3,5}?")
mo2 = nongreedyHaRegex.search("HaHaHaHaHa")
mo2.group()			#返回HaHaHa
```

注意：？有两种含义，即可选分组和非贪心匹配

<br>

<br>

### 2.1.3 findall()方法

| search方法                          | findall方法                              |
| ----------------------------------- | ---------------------------------------- |
| 返回Match对象，包含第一次匹配的文本 | 返回字符串列表，包含所有被查找匹配的文本 |

此外，如果在正则表达式中有分组，那么findall()方法将返回元组的列表。每个元组表示 一个找到的匹配，其中的项就是正则表达式中每个分组的匹配字符串。

```python
phoneNumRegex = re.compile(r"(\d\d\d)-(\d\d\d-\d\d\d\d)")
phoneNumRegex.findall("cell:415-555-4242 work:215-555-0000")	#返回[("415","555","4242"),("212","555","0000")]

```

为findall()方法的返回结果的总结，请记住下面两点。 

- 如果在一个没有分组的正则表达式上调用，例如\d\d\d-\d\d\d \d\d\d\d，findall()方法将返回一个匹配字符串的列表，例如['415-555 9999', '212-555-0000']。 
- 如果在一个有分组的正则表达式上调用，例如(\d\d\d)-(\d\d\d) (\d\d\d\d)，findall()方法将返回一个字符串的元组的列表（每个分组对应一个 字符串），例如[('415', '555', '9999'), ('212', '555', '0000')]。

疑问：关于下面代码的结果

```shell
import re
text = 'Agent Alice told Agent Carol that Agent Eve knew Agent Bob was a double agent.'
matches = re.findall(r'Agent (\w)\w*', text)
print(matches)

```

为什么是['A', 'C', 'E', 'B']而不是[('A'), ('C'), ('E'), ('B')]

可能由于匹配的只有一个而不是多个，所有才是不成元组

```shell
number = re.compile(r'Agent (\w)(\w)\w*')
number.findall('Agent Alice told Agent Carol that Agent Eve knew Agent Bob was a double agent.')
#[('A', 'l'), ('C', 'a'), ('E', 'v'), ('B', 'o')]
```



<br>

<br>

### 2.1.4 字符分类

\d可以代表任何数字。也就是说，\d是正则 表达式(0|1|2|3|4|5|6|7|8|9)的缩写。有许多这样的“缩写字符分类

| 缩写字符分类 |                          表示                          |
| :----------: | :----------------------------------------------------: |
|      \d      |                     0～9的任何数字                     |
|      \D      |               除0～9的数字以外的任何字符               |
|      \w      | 任何字母、数字或下划线字符（可以认为是匹配“单词”字符） |
|      \W      |           除字母、数字和下划线以外的任何字符           |
|      \s      |    空格、制表符或换行符（可以认为是匹配“空白”字符）    |
|      \S      |          除空格、制表符和换行符以外的任何字符          |

字符分类对于缩短正则表达式很有用。字符分类[0-5]只匹配数字0～5，这比输 入(0|1|2|3|4|5)要短很多。请注意，虽然\d匹配数字，而\w匹配数字、字母和下划 线，但是没有速记字符类仅匹配字母。（你可以使用[a-zA-Z]字符类匹配字母。）

<br>

<br>

### 2.1.5 建立自己的字符分类

有时候你想匹配一组字符，但缩写的字符分类（\d、\w、\s等）太宽泛。这时候你 可以用方括号定义自己的字符分类。例如，字符分类[aeiouAEIOU]将匹配所有元音字 符，且不区分大小写。

```python
vowelRegex = re.compile(r[aeiouAEIOU])
vowelRegex.findall('RoboCop eats baby food. BABY FOOD.')
#返回['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

也可以使用短横线表示字母或数字的范围。例如，字符分类[a-zA-Z0-9]将匹配所 有小写字母、大写字母和数字。

注意：在方括号内，**普通的正则表达式符号不会被解释**。这意味着你不需要在前面 加上倒斜杠转义.、*、?或()字符。例如，字符分类将匹配数字0～5和一个句点，你不需 要将它写成[0-5\.]。

<br>

在字符分类的左方括号后加上一个插入字符（^），就可以得到“非字符类”。非字符 类将匹配**不在这个字符类中的所有字符**。

```python
consonantRegex = re.compile(r'[^aeiouAEIOU]')
consonantRegex.findall('RoboCop eats baby food. BABY FOOD.')
#返回['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', '
 ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```

现在，程序不是匹配所有元音字符，而是匹配所有非元音字符。

<br>

<br>

### 2.1.6 插入字符和美元字符

可以在正则表达式的开始处使用插入符号（^），类似地，可以在正则表达式的末尾加上美元符号(\$)，表示该字符串必须以这个 正则表达式的模式结束。可以同时使用^和\$，表明整个字符串必须匹配该模式，

插入字符^：表明匹配必须发生在被查找文本开始处

美元字符$：表明匹配必须发生在被查找文本结束处

查找Hello开始的字符串

```shell
>>> beginsWithHello = re.compile(r'^Hello')
>>> beginsWithHello.search('Hello world!')
<re. Match object; span=(0, 5), match='Hello'>
>>> beginsWithHello.search('He said hello.') == None
True
```

<br>

查找正则表达式r'\d$'匹配以数字0～9结束的字符串

```shell
>>> endsWithNumber = re.compile(r'\d$')
>>> endsWithNumber.search('Your number is 42')
<re. Match object; span=(16, 17), match='2'>
>>> endsWithNumber.search('Your number is forty two.') == None
True
```

<br>查找正则表达式r'^\d+$'匹配从开始到结束都是数字的字符串。

```shell
>>> wholeStringIsNum = re.compile(r'^\d+$')
>>> wholeStringIsNum.search('1234567890')
<re. Match object; span=(0, 10), match='1234567890'>
>>> wholeStringIsNum.search('12345xyz67890') == None
True
>>> wholeStringIsNum.search('12 34567890') == None
True
```

前面交互式脚本例子中的最后两次search()调用表明，如果使用了^和$，那么整个 字符串必须匹配该正则表达式。

<br>

<br>



### 2.1.7 通配字符

在正则表达式中，.（句点）字符称为“通配字符”。它匹配换行符之外的所有字符。

```shell
>>> atRegex = re.compile(r'.at')
>>> atRegex.findall('The cat in the hat sat on the flat mat.')
['cat', 'hat', 'sat', 'lat', 'mat']
```

注意：句点字符只匹配一个字符，这就是为什么在上面的例子中，对于文 本flat，只匹配lat。要匹配真正的句点，就使用倒斜杠转义。

<br>

可以使用.和*来匹配所有字符

```shell
>>> nameRegex = re.compile(r'First Name: (.*) Last Name: (.*)')
>>> mo = nameRegex.search('First Name: Al Last Name: Sweigart')
>>> mo.group(1)
'Al'
>>> mo.group(2)
'Sweigart'
```

点-星使用“贪心”模式：它总是匹配尽可能多的文本。要用“非贪心”模式匹配所有文 本，就使用点-星和问号，像和大括号一起使用时那样，问号告诉Python用非贪心模式匹 配。

<br>

贪心匹配和非贪心匹配

```shell
>>> nongreedyRegex = re.compile(r'<.*?>')
>>> mo = nongreedyRegex.search('<To serve man> for dinner.>')
>>> mo.group()
'<To serve man>'
>>> greedyRegex = re.compile(r'<.*>')
>>> mo = greedyRegex.search('<To serve man> for dinner.>')
>>> mo.group()
'<To serve man> for dinner.>'
```

在非贪心的正则表达式中，Python匹配最短可能的字符串：''。在 贪心的正则表达式中，Python匹配最长可能的字符串：' for dinner.>'。



<br>

点-星将匹配换行符外的所有字符。传入re.DOTALL作为re.compile()的第二个参 数，可以让句点字符匹配所有字符，包括换行符。

```shell
>>> noNewlineRegex = re.compile('.*')
>>> noNewlineRegex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
'Serve the public trust.'
>>> newlineRegex = re.compile('.*', re.DOTALL)
>>> newlineRegex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
'Serve the public trust.\nProtect the innocent.\nUphold the law.'
```

正则表达式noNewlineRegex在创建时没有向re.compile()传入re.DOTALL，它将 匹配所有字符，直到出现第一个换行符。但是，newlineRegex在创建时 向re.compile()传入了re.DOTALL，它将匹配所有字符。

<br>

<br>

### 2.1.8 回顾

- ?匹配零次或一次前面的分组。
- *匹配零次或多次前面的分组。
- +匹配一次或多次前面的分组。
- {n}匹配n次前面的分组。
- {n,}匹配n次或更多次前面的分组。
- {,m}匹配零次到m次前面的分组。
- {n,m}匹配至少n次、至多m次前面的分组。
- {n,m}?、*?或+?对前面的分组进行非贪心匹配。
- ^spam意味着字符串必须以spam开始。
- spam$意味着字符串必须以spam结束。
- .匹配所有字符，换行符除外。
- \d、\w和\s分别匹配数字、单词和空格。
- \D、\W和\S分别匹配数字、单词和空格外的所有字符。
- [abc]匹配方括号内的任意字符（如a、b或c）。
- [^abc]匹配不在方括号内的任意字符。

<br>

<br>

### 2.1.9 不区分大小写的匹配

有时候你只关心匹配的字母，不关心它们是大写还是小写。要让正则表达式不 区分大小写，可以向re.compile()传入re.IGNORECASE或re.I作为第二个参数。

```shell
>>> robocop = re.compile(r'robocop', re.I)
>>> robocop.search('RoboCop is part man, part machine, all cop.').group()
'RoboCop'
>>> robocop.search('ROBOCOP protects the innocent.').group()
'ROBOCOP'
>>> robocop.search('Al, why does your programming book talk about robocop so much?').group()
'robocop
```

<br>

<br>

### 2.1.10 sub方法替换字符串

Regex对象 的sub()方法需要传入两个参数。第一个参数是一个字符串，用于替换发现的匹配。第二 个参数是一个字符串，即正则表达式。sub()方法返回替换完成后的字符串。

```shell
>>> namesRegex = re.compile(r'Agent \w+')
>>> namesRegex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
'CENSORED gave the secret documents to CENSORED.'
```

<br>

有时候，你可能需要使用匹配的文本本身作为替换的一部分。在sub()方法的第一个 参数中，可以输入\1、\2、\3，表示“在替换中输入分组1、2、3的文本”。

假定想要隐去某些人的姓名，只显示他们姓名的第一个字母。要做到这一点， 可以使用正则表达式Agent (\w)\w*，传入r'\1****'作为sub()方法的第一个参数。字 符串中的\1将由分组1匹配的文本所替代，也就是正则表达式的(\w)分组：

```shell
>>> agentNamesRegex = re.compile(r'Agent (\w)\w*')
>>> agentNamesRegex.sub(r'\1****', 'Agent Alice told Agent Carol that Agent
Eve knew Agent Bob was a double agent.')
A**** told C**** that E**** knew B**** was a double agent.'
```

关于(\w)\w*匹配

> ### 正则表达式解析
>
> 正则表达式 `Agent (\w)\w*` 的作用如下：
>
> 1. `Agent`：匹配字符串中的 "Agent"。
> 2. `(\w)`：匹配一个单词字符（字母、数字或下划线），并将其捕获到分组1中。`(\w)` 是一个捕获组，匹配的是名字的第一个字母。
> 3. `\w*`：匹配零个或多个单词字符，即匹配剩余的名字部分（除了第一个字母以外的部分）。
>
> ### 替换操作
>
> 在 `re.sub(r'\1****', ...)` 中：
>
> - `r'\1****'` 是替换字符串，其中 `\1` 表示正则表达式中捕获的第一个分组，即名字的第一个字母。
> - `****` 是替换后的固定字符串。
>
> ### 工作过程
>
> 假设输入字符串是 `Agent Alice told Agent Carol that Agent Eve knew Agent Bob was a double agent.`，正则表达式 `Agent (\w)\w*` 将会进行以下匹配：
>
> 1. 匹配到 `Agent Alice`，捕获组1得到 `A`，整个匹配得到 `Agent Alice`。
> 2. 匹配到 `Agent Carol`，捕获组1得到 `C`，整个匹配得到 `Agent Carol`。
> 3. 匹配到 `Agent Eve`，捕获组1得到 `E`，整个匹配得到 `Agent Eve`。
> 4. 匹配到 `Agent Bob`，捕获组1得到 `B`，整个匹配得到 `Agent Bob`。
>
> ### 替换过程
>
> 每次匹配到的字符串将被替换为 `\1****`：
>
> 1. `Agent Alice` 替换为 `A****`。
> 2. `Agent Carol` 替换为 `C****`。
> 3. `Agent Eve` 替换为 `E****`。
> 4. `Agent Bob` 替换为 `B****`。

<br>

<br>

### 2.1.11 复杂的正则表达式

如果要匹配的文本模式很简单，那么使用正则表达式就很好。但匹配复杂的文本模 式，可能需要长的、令人费解的正则表达式。你可以告诉re.compile()忽略正则表达式 字符串中的空白符和注释，从而缓解这一点。

现在，不必使用这样难以阅读的正则表达式：

```shell
phoneRegex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}
 (\s*(ext|x|ext.)\s*\d{2,5})?)')
```

你可以将正则表达式放在多行中，并加上注释，像这样：

```shell
phoneRegex = re.compile(r'''(
 (\d{3}|\(\d{3}\))?          	 # area code      
(\s|-|\.)?             			 # separator 
\d{3}                            # first 3 digits 
(\s|-|\.)                 		 # separator        
\d{4}                            # last 4 digits 
 (\s*(ext|x|ext.)\s*\d{2,5})?    # extension
 )''', re.VERBOSE)
```

前面的例子使用三重引号(''')创建了一个多行字符串，这样就可以将正则 表达式定义放在多行中，让它更具可读性。 正则表达式字符串中的注释规则与普通的Python代码一样：#符号和它后面直到行末 的内容都被忽略。而且，在表示正则表达式的多行字符串中，多余的空白字符也不认为是 要匹配的文本模式的一部分。这让你能够组织正则表达式，让它更具可读性。

<br>

<br>

### 2.1.12 组合使用re.IGNORECASE、re.DOTALL和 re.VERBOS等

re.compile()函数只接收一个 值作为它的第二参数。可以使用管道字符（|）将变量组合起来，从而绕过这个限制。管 道字符在这里称为“按位或”操作符

如果希望正则表达式不区分大小写，并且句点字符匹配换行符，就可以这样构 造re.compile()调用

```shell
>>> someRegexValue = re.compile('foo', re.IGNORECASE | re.DOTALL)
```

同理三次参数也一样

<br>

<br>



## 2.2 输入验证

### 2.2.1 PyInputPlus模块

PyInputPlus包含与input()类似的、用于多种数据（如数字、日期、E-mail地址 等）的函数。如果用户输入了无效的内容，例如格式错误的日期或超出预期范围的数字， 那么PyInputPlus会再次提示他们输入。PyInputPlus还包含其他有用的功能，例如提 示用户的次数限制和时间限制（如果要求用户在时限内做出响应）

PyInputPlus不是Python标准库的一部分，因此必须利用pip单独安装。

pii install --user pyinnputplus

<br>

PyInputPlus具有几种用于不同类型输入的函数

| inputStr      | 类似于内置的input()函数，但具有一般的PyInputPlus功能。你还可 以将自定义验证函数传递给它。 |
| ------------- | ------------------------------------------------------------ |
| inputNum      | 确保用户输入数字并返回int或float值，这取决于数字是否包含小数 点。 |
| inputChoice   | 确保用户输入系统提供的选项之一。                             |
| inputMenu     | 与inputChoice()类似，但提供一个带有数字或字母选项的菜单。    |
| inputDatetime | 确保用户输入日期和时间。                                     |
| inputYesNo    | 确保用户输入“yes”或“no”响应。                                |
| inputBool     | 类似inputYesNo()，但接收“True”或“False”响应，并返回一个布尔 值。 |
| inputEmail    | 确保用户输入有效的E-mail地址。                               |
| inputFilepath | 确保用户输入有效的文件路径和文件名，并可以选择检查是否存 在具有该名称的文件。 |
| inputPassword | 类似于内置的input()，但是在用户输入时显示*字符，因此不会 在屏幕上显示口令或其他敏感信息。 |

与Python的内置input()不同，PyInputPlus模块的函数包含一些用于输入验证的附 加功能

<br>

#### a. 关键字参数min、max

接收int和float数的inputNum()、inputInt()和inputFloat()函数还具 有min、max、greaterThan和lessThan关键字参数，用于指定有效值范围。

```python
>>> import pyinputplus as pyip
>>> response = pyip.inputNum('Enter num: ', min=4)
Enter num:3
Input must be at minimum 4. 
Enter num:4
>>>  response
4
>>> response = pyip.inputNum('Enter num: ', greaterThan=4)
Enter num: 4
Input must be greater than 4. 
Enter num: 5
>>> response
5
>>> response = pyip.inputNum('>', min=4, lessThan=6)
Enter num: 6
Input must be less than 6. 
Enter num: 3
Input must be at minimum 4. 
Enter num: 4
>>>  response
4
```

<br>

#### b.关键字参数blank

在默认情况下，除非将关键字参数blank设置为True，否则不允许输入空格字符

```python
>>> import pyinputplus as pyip
>>> response = pyip.inputNum('Enter num: ')    
Enter num:(blank input entered here)
Blank  values  are  not  allowed. 
Enter num: 42
>>>  response
42
>>>  response  =  pyip.inputNum(blank=True)
(blank input entered here)
>>>  response
```

<br>

#### c. 关键字参数limit、timeout和default

在默认情况下，PyInputPlus模块的函数会一直（或在程序运行时）要求用户提供 有效输入。如果你希望某个函数在经过**一定次数**的尝试或**一定的时间**后停止要求用户输 入，就可以使用limit和timeout关键字参数。用limit关键字参数传递**一个整数**，以确 定PyInputPlus的函数在放弃之前尝试接收有效**输入多少次**。用timeout关键字参数传递 一个整数，以确定用户在**多少秒之内**必须提供有效输入，然后PyInputPlus模块的函数 会放弃。

如果用户没有提供有效输入，那么这些关键字参数分别引发

RetryLimitException或TimeoutException异常

```python
>>> import pyinputplus as pyip
>>> response = pyip.inputNum(limit=2) 
blah
'blah' is not a number.
Enter num: number 
'number' is not a number.
Traceback (most recent call last):
--snip--
pyinputplus.RetryLimitException
>>> response = pyip.inputNum(timeout=10) 
42 (entered after 10 seconds of waiting)
Traceback (most recent call last):
--snip--
pyinputplus.TimeoutException
```



当你使用这些关键字参数并传入default关键字参数时，该函数将返回默认值，而不 是引发异常。

```python
>>>  response  =  pyip.inputNum(limit=2,  default='N/A') 
hello
'hello' is not a number.
world
'world' is not a number.
>>> response
'N/A'
```

<br>

#### d. 关键字参数allowRegexes和blockRegexes

也可以使用正则表达式指定输入是否被接受。关键字参数allowRegexes和 blockRegexes利用正则表达式字符串列表来确定PyInputPlus模块的函数将接受或拒绝 哪些内容作为有效输入。



```python
>>> import pyinputplus as pyip
>>> response = pyip.inputNum(allowRegexes=[r'(I|V|X|L|C|D|M)+', r'zero']) 
XLII
>>> response
'XLII'
>>> response = pyip.inputNum(allowRegexes=[r'(i|v|x|l|c|d|m)+', r'zero']) 
xlii
>>> response
'xlii'
```

<br>

还可以用blockRegexes关键字参数指定PyInputPlus模块的函数不接收的正则表 达式字符串列表。在交互式环境中输入以下内容，使得inputNum()不接收偶数作为有效 输入。

```python
>>> import pyinputplus as pyip
>>> response = pyip.inputNum(blockRegexes=[r'[02468]$']) 
42
This response is invalid.
44
This response is invalid.
43
>>> response
43
```

如果同时指定allowRegexes和blockRegexes参数，那么允许列表将优先于阻止列 表。

<br>

#### e. 将自定义验证函数传递给inputCustom()









## 2.3 读写文件

## 2.4 组织文件



