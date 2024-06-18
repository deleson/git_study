# 1.

# 2.

# 3.

# 4. Numpy：数组和向量化计算

numpy是python数值计算中最为重要的基础包，大多数计算包都提供了基于NumPy的科学函数功能。

将NumPy的数组对象作为数据交换的通用语。



NumPy数组之所以如此重要，原因在于：

1. 它的设计对于含有大量数组的数据非常有效
2. NumPy内部将数据存储到连续的内存上
3. NumPy可以针对全量数组进行复杂计算，而不需要写Python循环



<br>



## 4.1 NumPy ndarray

NumPy 的**核心特征**之一就是N维数组对象-ndarray（这个是python一个快速、灵活的大型数据及容器）

数组允许我们使用**类似于标量**的操作语法在整块数据上进行数据计算（即批量乘法和批量加法等）

<br>

ndarray指定的数组对象，有以下特性：

- 每个元素均为相同类型
- 每个数组都有一个shape属性
- 每个数组都有一个dtype属性



<br>

### 4.1.1 生成ndarray

```python
import numpy as np

data1 	= [1,2,3]
arr1 	= np.array(data1)

arr2	= np.zeros((2,3))
arr3	= np.empty((2,3))
arr4	= np.arange(15)
```



具体的涉及生成数组的函数如下：

| array         | 接受序列化数据转换维ndarray                 |
| ------------- | ------------------------------------------- |
| asarray       | 和array类似，但对于输入ndarray不再复制      |
| arange        | range的数组生成版                           |
| ones          | 根据给定形状生成全1数组                     |
| zeros         | 根据给定形状生成全0数组                     |
| empty         | 根据给定形状生成全空数组（注意空不一定等于0 |
| full          |                                             |
| eye，identity | 生成nxn，对角线1，其余0                     |

