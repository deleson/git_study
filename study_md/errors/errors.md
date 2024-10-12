本文件收录一些本人在编程过程中的未解之谜

错误代码解释00000

前两位代表错误类型，后三位代表错误编号





| 错误代码 |             错误现象             |               表层原因                |     错误名称      | 是否解决 |
| :------: | :------------------------------: | :-----------------------------------: | :---------------: | :------: |
|  00001   | 二层循环中i、j中j的坐标跳跃变化  |        二层循环if中的break导致        |     break跳跃     |    否    |
|  00002   | python-sys.stdin循环中最后输出空 | print代码会进入最后一次循环，没有内容 | sys.stdin多余循环 |    是    |
|          |                                  |                                       |                   |          |





# 代码相关



## 001 break跳出有误

```python
class ExistRule:
    def Bplus2C(self,number):
        answer = []
        count_number = {}
        for k,v in enumerate(number):
            count_number[v] =0

        for k,v in enumerate(number):
            count_number[v] +=1
        number_2C = [2*i for i in number]
        for k,v in enumerate(number):

            for k2,v2 in enumerate(number_2C):
                print(k,k2)
                if v2 + v in count_number and  k2!=k:
                    if v2/2 == v:
                        if v2 + v == v:
                            if count_number[v2+v] == 3:
                                #answer.extend([v2+v,v,v2//2])
                                break
                        elif v2+v !=v:
                            if count_number[v2+v] == 2:
                                #answer.extend([v2+v,v,v2//2])
                                break
                    elif v2/2 !=v:
                        if v2+v == v or v2+v==v/2:
                            if count_number[v2+v] == 2:
                                #answer.extend([v2+v,v,v2//2])
                                break
                        else:
                            if count_number[v2+v] == 1:
                                #answer.extend([v2+v,v,v2//2])
                                break
                else:
                    continue
        answer.append(0)
        return answer

if __name__ == "__main__":
    myrule = ExistRule()
    myrule.Bplus2C([4,2,0,0,0])
```

上述代码中主要在print(k,k2)时出现，打印过程在k为2之后，k2没有了2、3、4坐标，经过测试发现是二层循环中的break出现了问题

注释了break可以正常打印 2 2、2 3 ...... ，原因未知

> 打印结果如下：
> 0 0
> 0 1
> 0 2
> 0 3
> 0 4
> 1 0
> 1 1
> 1 2
> 1 3
> 1 4
> 2 0
> 2 1
> 3 0
> 3 1
> 4 0
> 4 1





## 002 sys.stdin多余循环

输入例子：

```
5
c d a bb e
```

输出例子：

```
a bb c d e
```



代码如下



```python
import sys



str_number  = int(sys.stdin.readline().strip())

for line in sys.stdin:
    a = line.split()
    b = a[:str_number]
    b.sort()
    print(b)
    print(" ".join(b))

```

输出结果

['a', 'bb', 'c', 'd', 'e']
a bb c d e
[]





原因解释

> 在使用 `sys.stdin` 时，输入流会持续等待，直到遇到 EOF（文件结束标志，通常是通过 `Ctrl+D` 或 `Ctrl+Z` 输入），而且输入每一行后，`for line in sys.stdin:` 会自动迭代每一行并处理。最后输出的空列表是因为当输入结束后，`sys.stdin` 会继续迭代，但没有更多内容可读，因此它读取到的是一个空字符串（即 `""`）。
>
> 当 `split()` 方法处理空字符串时，返回一个空列表，所以会多输出一个空列表。
>
> ### 代码中的流程：
>
> 1. 每次 `for line in sys.stdin:` 从标准输入读取一行。
> 2. 使用 `line.split()` 将该行字符串按空格分割成列表。如果该行为空字符串（即读取到 EOF 或空行），`split()` 会返回空列表。
> 3. `a.sort()` 对列表进行排序。如果 `a` 是空列表，这步什么都不会做。
> 4. 打印 `a`，即使 `a` 是空列表，Python 也会打印 `[]`。
>
> ### 示例过程：
>
> ```bash
> 输入:
> a bb c
> dddd f
> nowcoder
> [按下 EOF，如 Ctrl+D]
> 
> 输出:
> ['a', 'bb', 'c']
> ['dddd', 'f']
> ['nowcoder']
> []
> ```
>
> ### 如何避免输出空列表？
>
> 你可以在打印前检查列表是否为空，避免多余的输出。
>
> ```python
> import sys
> 
> for line in sys.stdin:
>     a = line.split()
>     if a:  # 检查a是否为空
>         a.sort()
>         print(a)
> ```
>
> 这样只有在列表 `a` 不为空时才会打印，避免输出空列表。

解决方法

> 在 Python 中，可以判断是否遇到 EOF（文件结束符）。虽然 `sys.stdin` 会自动处理 EOF，但你也可以手动进行检测。在一些情况下，可能需要显式检查 EOF，比如在读取数据时想终止处理或者实现自定义逻辑。
>
> ### 判断 EOF 的两种方式：
>
> #### 1. **通过 `sys.stdin.read()` 读取所有输入**
>    当 `read()` 读取完数据后，如果没有数据可读取，则表示已经到达 EOF。
>
> ```python
> import sys
> 
> data = sys.stdin.read()  # 一次性读取所有输入
> if not data:  # 判断是否遇到 EOF
>     print("EOF reached")
> else:
>     print("Data:", data)
> ```
>
> ### 2. **通过 `sys.stdin.readline()` 检测 EOF**
>    使用 `sys.stdin.readline()` 逐行读取，当读取到空字符串时，表示已到达 EOF。通常用在读取逐行数据时。
>
> ```python
> import sys
> 
> while True:
>     line = sys.stdin.readline()
>     if not line:  # 如果 line 是空字符串，则表示 EOF
>         print("EOF reached")
>         break
>     print(line.strip())
> ```
>
> 在这段代码中：
> - `sys.stdin.readline()` 会逐行读取，当没有更多行可读时，返回空字符串 `""`，这标志着到达了 EOF。
> - `while True` 不断读取，直到手动检测到 EOF 并 `break` 退出循环。
>
> ### 3. **与 `for line in sys.stdin:` 的区别**
>    `for line in sys.stdin:` 不需要手动判断 EOF，它自动处理输入，直到 EOF 后终止循环。通常情况下，这种方式更简单。
>
> ```python
> import sys
> 
> for line in sys.stdin:
>     if line.strip():  # 可选: 忽略空行
>         print(line.strip())
> ```
>
> ### 总结
> - EOF 可以手动判断，特别是在使用 `sys.stdin.read()` 和 `sys.stdin.readline()` 时。
> - 通过 `readline()`，当返回空字符串时表示 EOF；而 `for line in sys.stdin:` 自动处理 EOF，通常不需要手动判断。