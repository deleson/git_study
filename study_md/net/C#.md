# 第一部分 编写第一个代码

- 编写平台：.NET

- 注释方式 ：//
- 输出方式
  - Console.WriteLine();  有换行符
  - Console.Write();          无换行符
- C#结构
  - Console是类
  - Write()是方法

以下是 C# 和 C 语言之间的一些重要区别的对比表：

| 特性       | C语言                                 | C#                                              |
| ---------- | ------------------------------------- | ----------------------------------------------- |
| 数据类型   | 基本类型如 `int`, `float`, `char` 等  | 基本类型、引用类型、数组、字符串等              |
| 内存管理   | 手动管理内存，使用 `malloc` 和 `free` | 自动垃圾回收 (Garbage Collection)               |
| 类和对象   | 不支持面向对象编程                    | 完全支持面向对象编程，类和对象的概念            |
| 函数       | 通过函数声明和定义，支持指针          | 通过方法声明和定义，支持属性、方法重载等        |
| 异常处理   | 使用返回值和错误代码来处理错误        | 使用 `try`, `catch`, `finally` 语句进行异常处理 |
| 编译和运行 | 编译成机器码，直接运行                | 编译成中间语言，由 .NET 运行时 (CLR) 执行       |
| 标准库     | 标准库较小，主要是一些基础函数        | 拥有丰富的类库，支持各种应用程序开发            |
| 数组       | 数组是静态的，需指定大小              | 数组可动态创建，支持多维数组                    |
| 迭代器     | 使用指针或索引迭代数组                | 提供 `foreach` 循环简化迭代                     |
| 属性       | 没有属性的概念                        | 支持属性和封装                                  |

<br>

# 1.使用C#中的文本值和变量值来存储和检索数据

## 1.1 文本值

文本值就是一种永不更改的常量值

主要包含了

- 字符文本char
- 整数文本int
- 浮点文本float、double、decimal（手动末尾添加F，默认double
- 布尔文本
- string文本

<br>

## 1.2 变量

文本实际上是硬编码值。 硬编码值是在整个程序执行过程中恒定且保持不变的值。 但是，大多数应用程序需要使用你不太了解的值。 换句话说，你需要处理来自用户、文件或跨网络的数据。

需要处理没有进行硬编码的数据时，需要声明变量





变量声明规则

- 变量名可包含字母数字字符和下划线字符。 不允许使用特殊字符，如哈希符号 `#`（也称为数字符号或井符号）或美元符号 `$`。
- 变量名必须以字母或下划线开头，不能以数字开头。
- 变量名称区分大小写，这意味着 `string Value;` 和 `string value;` 是两个不同的变量。
- 变量名不能是 C# 关键字。 例如，不能使用以下变量声明：`decimal decimal;` 或 `string string;`。

<br>

变量声明例子如下：

```C#
string firstName;

char userOption;

int gameScore;

decimal particlesPerMillion;

bool processedCustomer;
```





<br>

**声明隐式类型本地变量**

var关键字创建，同时必须同步初始化。然后变量自动匹配相应的变量类型



```c#
var message = "Hello world!";
```

这里的message变量实际是string类型



<br>

# 2.在C#中执行基本字符串格式设置



## 2.1 使用转义序列

除了c语言常见的通过\来使用转义，还可以再输出的序列的前面添加@来保留输出的空格

- 普通字符转义序列
- 逐字字符串字面量
- Unicode转义字符



<br>

概括

下面是到你目前为止所了解的文本字符串格式设置的相关内容：

- 当需要在文本字符串中插入特殊字符时，请使用字符转义序列，例如制表符 `\t`、换行符 `\n` 或双引号 `\"`。
- 在所有其他情况下，需要使用反斜杠时，请对反斜杠 `\\` 使用转义字符。
- 使用 `@` 指令创建逐字字符串文本，以将所有空白格式和反斜杠字符保留在字符串中。
- 使用 `\u` 加上四个字符的代码来表示字符串中的 Unicode 字符 (UTF-16)。
- 根据应用程序的不同，Unicode 字符可能无法正确打印。



<br>

## 2.2 字符串串联合并字符串

C#的字符串拼接类似python，直接使用+既可实现



<br>



## 2.3 字符串内插合并字符串

字符串内插是一种更简洁的拼接字符串的方式

是的，**你可以理解字符串内插是一种更简洁的拼接字符串的方式**。它本质上就是将变量或表达式插入到字符串中的一种方法，和传统的字符串拼接（使用 `+` 操作符）达到相同的效果，但代码更清晰、易读。



传统的拼接方法通过 `+` 将字符串和变量连接起来，而字符串内插则使用 `$` 和花括号 `{}` 直接在字符串中嵌入变量或表达式，避免了繁琐的 `+` 号和引号操作。例如：

传统拼接方式：

```csharp
string name = "Alice";
int age = 25;
string message = "My name is " + name + " and I am " + age + " years old.";
```



字符串内插方式：

```csharp
string name = "Alice";
int age = 25;
string message = $"My name is {name} and I am {age} years old.";
```

两者的输出结果是完全相同的，但字符串内插让代码更直观。尤其是在多个变量和复杂表达式的场景下，字符串内插能有效减少拼接时的错误和语法混乱。

因此，你可以将字符串内插理解为另一种更方便、更简洁的**拼接字符串**的方式。

<br>



下面是参考一种字符串格式化输出的使用

``` c#
string projectName = "ACME";
string englishLocation = $@"c:\Exercise\{projectName}\data.txt";
Console.WriteLine($"View English output:\n\t\t{englishLocation}\n");

string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";
string russianLocation = $@"c:\Exercise\{projectName}\ru-RU\data.txt";
Console.WriteLine($"{russianMessage}:\n\t\t{russianLocation}\n");
```



> 以下哪一个代码行将单个 `\` 追加到字符串 `directory`？
>
>  
>
> A '`directory = directory + "\";`'
>
> B '`directory = directory + '\';`'
>
> C '`directory = directory + @"\";`'
>
> C正确。 `@` 符号会创建一个逐字字符串，其中不需要转义 `\`。



<br>

## 2.4 总结

本单元内容是学习输出的字符串格式内容

包含各种特殊字符（如双引号、换行符、unicode字符等）





<br>



# 3.使用C#对数字执行基本运算操作



学习目标

- 对数字值执行数学运算
- 观察字符串和数值之间的隐式类型转换
- 暂时将一种数据类型转换为另一种数据类型



## 3.1 隐式类型转换

C#可以使用+对两个相同的数字类型进行加法运算（这个是对+的重载）

此外如果string + int ，会产生隐式类型转换，将int转变成string

为了明确自己的意图，可以使用括号来阐明意图

``` c#
string firstName = "Bob";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold " + (widgetsSold + 7) + " widgets.");
```



## 3.2 加减乘除

C#中可以进行加减乘除

- `+` 是加法运算符
- `-` 是减法运算符
- `*` 是乘法运算符
- `/` 是除法运算符
- `%` 是取余运算符 

除法示例的结果商可能不是你所期望的。 小数后面的值从 `quotient` 中截断，因为它被定义为 `int`，并且 `int` 不能包含小数后面的值。

但是如果定义的除数是支持小数的类型（例如decimal、float），使用除数的商就可以得到小数。



此外类似c语言，可以使用强制类型转换 （decimal）、（float）等进行结果转变



> 对于括号运算符，你看到了三种用法：方法调用、运算顺序和强制转换。

<br>

> 运算顺序PEDMAS
>
> 1. 圆括号 (P)（括号内的内容首先执行）
> 2. 指数 (E)
> 3. 乘法 (M) 和除法 (D)（从左至右）
> 4. 加法 (A) 和减法 (S)（从左至右）

<br>



## 3.3 递增和递减

++和--

此外还有复合运算符+=、*=等

与c、c++相同，递增和递减运算符的位置不同会有不同轻微区别



后缀++，是返回的加之前的，变量+1

前缀++，是返回的加之后的，变量+1



<br>

# 第二部分  创建并运行简单的C#控制台应用程序

使用的是.net平台，使用的IDE是vscode



# 4 创建控制台应用



``` .NET
dotnet new console -o ./CsharpProjects/TestProject
```

CLI 命令的结构由以下三个部分组成：

- 驱动程序：在此示例中为 `dotnet`。
- 命令：在此示例中为 `new console`。
- 命令参数：在此示例中为 `-o ./CsharpProjects/TestProject`。





当然可以！以下是一些常用的 .NET CLI 命令及其参数的表格：

| 命令             | 参数                          | 说明                                        |
| ---------------- | ----------------------------- | ------------------------------------------- |
| `dotnet new`     | `--name <name>`               | 指定项目的名称。                            |
|                  | `--output <path>`             | 指定项目的输出目录。                        |
|                  | `--framework <framework>`     | 指定目标框架，如 `net5.0`、`net6.0` 等。    |
|                  | `--language <language>`       | 指定编程语言，如 `C#`、`F#`、`VB`。         |
|                  | `--no-restore`                | 创建项目时不恢复 NuGet 包。                 |
| `dotnet build`   | `-c|--configuration <config>` | 指定构建配置，通常为 `Debug` 或 `Release`。 |
|                  | `--output <path>`             | 指定输出目录。                              |
| `dotnet run`     | `--project <path>`            | 指定要运行的项目路径。                      |
|                  | `--no-launch-profile`         | 不使用启动配置文件。                        |
| `dotnet test`    | `--filter <filter>`           | 过滤要运行的测试。                          |
|                  | `-c|--configuration <config>` | 指定测试配置，通常为 `Debug` 或 `Release`。 |
| `dotnet publish` | `-c|--configuration <config>` | 指定发布配置，通常为 `Debug` 或 `Release`。 |
|                  | `--output <path>`             | 指定发布输出目录。                          |
|                  | `--self-contained`            | 创建自包含的应用，包含 .NET 运行时。        |

功能说明：

- **`dotnet new`**：创建新的项目或解决方案。
- **`dotnet build`**：编译项目，生成可执行文件或库。
- **`dotnet run`**：运行指定的项目。
- **`dotnet test`**：运行项目中的单元测试。
- **`dotnet publish`**：发布项目，准备为生产环境部署。
- **`dotnet restore`**：恢复项目所需的 NuGet 包。
- **`dotnet clean`**：清理生成的输出，删除构建产生的文件。

创建项目的后有：

- .csproj
- bin文件夹
- obj文件夹
- Program.cs

当然可以！以下是对这些文件和文件夹的功能及使用情景的介绍：

### 1. **`.csproj` 文件**
- **功能**: 这是 C# 项目的配置文件，包含项目的元数据和设置，如目标框架、依赖包、编译选项等。
- **使用情景**: 当你添加新依赖项、修改项目配置或使用 NuGet 包时，`.csproj` 文件会更新，确保项目能够正确构建和运行。

### 2. **`bin` 文件夹**
- **功能**: 存放编译后的输出文件，包括可执行文件和相关的 DLL 文件。编译时生成的所有可运行文件都会放在这里。
- **使用情景**: 你可以直接在 `bin` 文件夹中找到生成的应用程序，用于运行或分发。

### 3. **`obj` 文件夹**
- **功能**: 存放中间文件和编译过程中生成的临时文件。这些文件用于帮助构建过程，但通常不直接与最终产品有关。
- **使用情景**: 在调试或构建过程中，Visual Studio 和 .NET CLI 会使用 `obj` 文件夹中的文件来优化构建过程。

### 4. **`Program.cs` 文件**
- **功能**: 这是主程序代码文件，包含 `Main` 方法，是应用程序的入口点。这里是你编写程序逻辑的地方。
- **使用情景**: 在开发过程中，你会在 `Program.cs` 中编写和修改代码，以实现应用程序的功能。

总结

这些文件和文件夹共同构成了一个 C# 控制台应用的基础结构。`.csproj` 文件负责项目的配置，`bin` 和 `obj` 文件夹分别存放输出和中间文件，而 `Program.cs` 则是你编写应用逻辑的地方。理解这些组件可以帮助你更高效地管理和开发 C# 项目。



## 4.1 编译应用程序的生成

```.NET
dotnet build
```

`dotnet build` 命令将项目及其依赖项生成为一组二进制文件。 二进制文件包括扩展名为 .dll 的中间语言 (IL) 文件中的项目代码。 根据项目类型和设置，可能会包含其他文件。



## 4.2 运行应用程序

```.NET
dotnet run
```





<br>

# 5. 使用C# 从.NET类库调用方法

- 编写用于调用 .NET 类库中的方法的代码。
- 使用 .NET 类库类的新实例，以调用维护状态的方法。
- 使用 Visual Studio Code 中的 Intellisense 深入了解方法，包括其重载版本、其返回值类型及其输入参数数据类型。
- 使用 learn.microsoft.com 来研究方法的作用、其重载版本、其返回值类型、其输入参数和每个参数所代表的内容，等等。



## 5.1 .NET库入门



".Net 类库" 是包含成千上万个方法的数以千计的类的集合。 例如，.NET 类库包含 `Console` 类，供处理控制台应用程序的开发人员使用。 `Console` 类包含用于输入和输出操作的方法，例如 `Write()`、`WriteLine()`、`Read()`、`ReadLine()` 等。

<br>

C# 数据类型（例如 `string` 和 `int`）实际上是通过 .NET 类库中的类提供的。 C# 语言会屏蔽数据类型和 .NET 类之间的连接，以简化工作。 但在幕后，数据类型的实现方式与 .NET 类库中每个其他的类都一样。 此连接为日常变量提供了非常有用的内置方法。 `string` 类有许多这样有用的方法。 例如，`string` 类具有方法来将文本转换为大写和小写（`ToUpper` 和 `ToLower`）。



<br>

## 5.2 调用.NET类的方法

通过以前调用 `Console.WriteLine()` 方法的经验，你应已了解基本知识：

- 首先键入类名。 在本例中，类名为 `Console`。
- 添加成员访问运算符，即 `.` 符号。
- 添加方法的名称。 在本例中，方法的名称为 `WriteLine`。
- 添加方法调用运算符，该运算符是一组括号 `()`。
- 最后，指定传递给方法的参数（如果有），将其用方法调用运算符的括号括起来。 在这种情况下，可以指定希望 `Console.WriteLine()` 方法写入控制台的文本（例如 `"Hello World!"`）。

（可选）根据开发者设计和实现给定方法的方式，可能还需要执行以下操作：

- 传递其他值为输入参数。
- 接受返回值。

<br>

### 5.2.1 有状态与无状态方法

在 C# 中，有状态方法和无状态方法的区别主要在于它们是否依赖于或维护对象的状态：

1. **有状态方法（Stateful Method）**：
   
   - 这些方法依赖于对象的实例状态（即实例变量的值）。
   - 调用这些方法时，它们可能会修改对象的状态或返回与对象状态相关的结果。
   - 例如：
     ```csharp
     public class Counter {
         private int count = 0;
     
         public void Increment() {
             count++;
         }
     
         public int GetCount() {
             return count;
         }
     }
     ```
   
2. **无状态方法（Stateless Method）**：
   - 这些方法不依赖于任何对象的状态，通常是静态方法或没有实例变量的方法。
   - 调用这些方法时，它们不会修改任何对象的状态，返回的结果只依赖于输入参数。
   - 例如：
     ```csharp
     public static class MathUtil {
         public static int Add(int a, int b) {
             return a + b;
         }
     }
     ```

总结来说，有状态方法涉及到对象的状态，而无状态方法是独立于对象状态的。

对于c#而言，静态方法就是无状态方法，可以使用类调用

有状态方法必然是需要对象调用的。（c++没有无状态方法）

<br>



## 5.3 方法的返回值和参数

一些方法旨在完成其功能并“安静地”结束。 换言之，它们在完成时不返回值。 这些方法称为 void 方法。

其他方法旨在完成后返回值。 返回值通常是某个操作的结果。 返回值是方法与调用方法的代码进行通信的主要方式。

### 5.3.1 方法的重载

方法的重载版本可定义不同数量的参数。 替代参数可用于更好地控制所需结果



<br>

# 6.使用C#中的条件判断if



`if` 语句由三个部分组成：

- `if` 关键字
- 用 `()` 括起来的布尔表达式
- 由大括号 `{ }` 定义的代码块

if、else if 和else基本符合c语言的逻辑

```c#
if (total >= 14){
    Console.WriteLine("You Win?");
}
else if (total == 18){
    Console.WriteLine("YOU WIN!");
}
else if (total ==3){
    Console.WriteLine("YOU LOSE");
}
else{
    Console.WriteLine("I DON't know");
}
```





## 6.1 示例

``` c#
namespace helloworld;

class Program
{
    static void Main(string[] args)
    {
        Random random = new Random();
        int daysUntilExpiration = random.Next(12);

        // Your code goes here 
        if (daysUntilExpiration > 10){
            Console.WriteLine($"{daysUntilExpiration} days until expiration");
        }
        
        else if(daysUntilExpiration == 0){
            Console.WriteLine("Your subscripiton has expired");
        }
        else if (daysUntilExpiration == 1){
            Console.WriteLine("Your subscription expires within a day!");
            Console.WriteLine("Renew now and save 20%");
        }
        else if ((daysUntilExpiration <= 5) && (daysUntilExpiration > 1)){
            Console.WriteLine($"Your subscription expires in {daysUntilExpiration} days");
        }
        else{
            Console.WriteLine("Your subscription will expire soon. Renew now!");
        }  
    }
}

```

<br>



# 7. 使用C#中的数组和循环

## 7.1 数组



声明数组

``` c#
string[] fraudulentOrderIDs = new string[3];
```

使用数组的Length属性

根据数组的创建方式，你可能无法提前知道一个数组包含多少元素。 若要确定数组的大小，可使用 `Length` 属性。

``` c#
Console.WriteLine($"There are {fraudulentOrderIDs.Length} fraudulent orders to process.");
```

**注意C#的数组的赋值元素使用的是大括号{}，c语言的数组赋值元素使用中括号[]**



<br>





## 7.2 foreach语句

在 C# 中，`foreach` 循环本身是设计用来迭代集合中的元素，而不是下标。如果你需要同时访问元素的下标，可以使用传统的 `for` 循环。示例如下：

```csharp
string[] names = { "Alice", "Bob", "Charlie" };

for (int i = 0; i < names.Length; i++)
{
    Console.WriteLine($"Index: {i}, Name: {names[i]}");
}
```

如果你一定要使用 `foreach` 但又需要访问下标，可以结合使用一个计数器：

```csharp
string[] names = { "Alice", "Bob", "Charlie" };
int index = 0;

foreach (var name in names)
{
    Console.WriteLine($"Index: {index}, Name: {name}");
    index++;
}
```

但一般来说，如果你需要下标，使用 `for` 循环会更加清晰。

<br>

此外C# 支持 `while` 和 `do-while` 循环。它们的使用方式与其他语言相似。以下是它们的基本用法：

`while` 循环

`while` 循环在每次迭代之前检查条件，如果条件为真，则执行循环体。

```csharp
int count = 0;

while (count < 5)
{
    Console.WriteLine($"Count: {count}");
    count++;
}
```

`do-while` 循环

`do-while` 循环先执行循环体，然后再检查条件。这意味着循环体至少会执行一次。

```csharp
int count = 0;

do
{
    Console.WriteLine($"Count: {count}");
    count++;
} while (count < 5);
```

这两种循环结构都很常用，可以根据需求选择使用。

<br>



# 8.C# 易读约定的代码格式

## 8.1 变量名称规则

C# 编译器强制执行一些变量名称规则。

- 变量名可包含字母数字字符和下划线 (_) 字符。 不允许使用特殊字符（如英镑 `#`、短划线 `-`、 或美元符号 `$`）。
- 变量名称必须以字母或下划线开头，不能以数字开头。 使用下划线字符启动变量名称通常是为专用实例字段保留的。 可以在模块摘要中找到指向进一步阅读的链接。
- 变量名不能是 C# 关键字。 例如，不允许使用以下变量名称声明：`float float;` 或 `string string;`。
- 变量名称区分大小写，这意味着 `string MyValue;` 和 `string myValue;` 是两个不同的变量。



## 8.2 变量名称约定

约定是软件开发社区一致同意的建议。 虽然你可以自由决定不遵循这些约定，但是它们非常受欢迎，如果不遵循可能会使其他开发者很难理解你的代码。 你应该练习采用这些约定，并让它们成为编码习惯。

- 变量名称应使用驼峰式大小写形式，这是一种编写样式，即第一个单词以小写字母开始，后续每个单词的首字母采用大写形式。 例如：`string thisIsCamelCase;`。
- 变量名称在应用程序中应具有描述性且有意义。 你应该为变量选择一个名称，用于表示其将保存的数据种类（而不是数据类型）。 例如 `bool orderComplete;`，而不是 `bool isComplete;`。
- 变量名称应是附加在一起的一个或多个完整单词。 请勿使用缩写，因为阅读你代码的人可能不清楚该变量的名称。 例如 `decimal orderAmount;`，而不是 `decimal odrAmt;`。
- 变量名称不应包含变量的数据类型。 你可能会看到使用类似 `string strMyValue;` 样式的一些建议。 这是几年前的热门样式。 但是，大多数开发人员不再遵循此建议，并且有充分的理由不使用它。

示例 `string firstName;` 遵循所有这些规则和约定，假设我希望使用此变量来存储表示用户名字的数据。

C#社区命名规则使用驼峰式，而不适用于下划线方式



## 8.3 有效的注释

行注释 //

块注释 /* */ 

在每行都进行注释的方式是比较低质量的注释方式

下面这种是比较好的注释

```c#
/*
  The following code creates five random OrderIDs
  to test the fraud detection process.  OrderIDs 
  consist of a letter from A to E, and a three
  digit number. Ex. A123.
*/
Random random = new Random();
string[] orderIDs = new string[5];

for (int i = 0; i < orderIDs.Length; i++)
{
    int prefixValue = random.Next(65, 70);
    string prefix = Convert.ToChar(prefixValue).ToString();
    string suffix = random.Next(1, 1000).ToString("000");

    orderIDs[i] = prefix + suffix;
}

foreach (var orderID in orderIDs)
{
    Console.WriteLine(orderID);
}
```



## 8.4 有效的空格

代码可以适当添加空格和空行来增加可读性

