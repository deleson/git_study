# 算法学习

## 滑动窗口

滑动窗口算法是一种高效处理连续子数组或子串问题的技术。它通过动态调整窗口边界，在一次遍历中解决问题。以下是滑动窗口算法的

通常而言算法的时间复杂度为n，空间复杂度为1

> 滑动窗口算法介绍
>
> 使用场景
>
> 滑动窗口算法适用于以下场景：
>
> 1. **查找最长/最短的符合某个条件的子串或子数组**：
>    - 无重复字符的最长子串。
>    - 和大于等于某个值的最短子数组。
> 2. **统计子串或子数组中的特定元素**：
>    - 包含所有指定字符的最小子串。
>    - 连续子数组的和等于某个值。
> 3. **固定大小的窗口问题**：
>    - 滑动窗口最大值。
>    - 求所有大小为k的子数组的最大和。
>
> 基本原理
>
> 滑动窗口算法通过使用两个指针（左指针和右指针）定义一个窗口。通过移动指针，可以动态调整窗口的大小和位置。具体步骤如下：
>
> 1. **初始化**：
>    - 左指针和右指针都指向窗口的起始位置。
>    - 记录窗口内的信息（如窗口内元素的和、频率等）。
> 2. **扩展窗口**：
>    - 右指针向右移动，扩展窗口。
>    - 更新窗口内的信息。
> 3. **收缩窗口**：
>    - 根据问题的要求，可能需要移动左指针，收缩窗口。
>    - 更新窗口内的信息。
> 4. **记录结果**：
>    - 在扩展或收缩窗口后，根据问题需求记录或更新结果。

滑动窗口在单字符串leetcode中的3、209、713中都有使用，其根本思路就是使用两个指针来分别针对左右边界
左边界缩短窗口，右边界扩大窗口，其中左边界缩短窗口通常也是要使用循环while实现

- 其中左边界的缩短过程是一个由满足到不满足（题目条件），
- 或不满足到满足（题目条件的

即单调性过程，

- 如满足到不满足，则要在循环中尝试更新，
- 如不满足到满足，则尝试在循环后更新

其中的满足和不满足通常指的是字串和、乘积、重复性等等条件，而不是指要求的最长或最短（这个通常是需要更新返回的参数）的结果

<br>

除了在单字符串中使用，还有双字符串可以使用滑动窗口

可以参考模板如下：

```python
/* 滑动窗口算法框架 */
from collections import defaultdict
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        needs, window = defaultdict(int), defaultdict(int)
        left, right = 0, 0
        valid = 0
        res = []
        for i in p:
            needs[i] += 1

        while right < len(s):
            c = s[right]
            right += 1
                //窗口更内数据的一些列更新
                ...
            
            while 判断创建是否要收缩:

                //d是要移出窗口的字符
                d = s[left]
                left += 1
                //进行窗口内数据的一系列更新
                        ...
        return res

```

现在开始套模板，只需要思考以下四个问题：

1、当移动 right 扩大窗口，即加入字符时，应该更新哪些数据？

2、什么条件下，窗口应该暂停扩大，开始移动 left 缩小窗口？

3、当移动 left 缩小窗口，即移出字符时，应该更新哪些数据？

4、我们要的结果应该在扩大窗口时还是缩小窗口时进行更新？



<br>

对于滑动窗口，总共接触了两种题型

- **单个字符串/数组中的问题**：
  - 这种题型通常涉及在一个字符串或数组中查找满足特定条件的最短或最长子串/子数组。
  - 例如，查找单个字符串中的最长不含重复字符的子串、和大于等于某个值的最短子数组等。
- **两个字符串/数组之间的问题**：
  - 这种题型通常涉及在一个主字符串或主数组中查找满足另一个字符串或数组性质的子串或子数组。
  - 例如，在一个字符串中找到所有另一个字符串的字母异位词、在一个数组中找到另一个数组的所有连续子数组等。

单个字符串/数组问题和两个字符串/数组之间问题的滑动窗口解法思路有所不同。尽管它们都使用了滑动窗口的概念，但在具体实现上有一些差异。下面我们详细探讨这两类问题的解法思路和区别。

<br>

单个字符串/数组问题

思路

1. **初始化窗口边界**：
   - 通常从字符串或数组的第一个元素开始，初始化窗口的左边界 `left` 和右边界 `right`。
2. **扩展右边界**：
   - 通过循环不断移动右边界 `right`，逐步扩大窗口范围。
   - 每次移动右边界后，更新窗口内的状态（例如，当前窗口内的字符或数字的统计信息）。
3. **收缩左边界**：
   - 根据问题要求，可能需要在某些条件下移动左边界 `left` 以收缩窗口。
   - 例如，在寻找不含重复字符的最长子串时，如果遇到重复字符，则需要移动左边界，直到窗口内不再有重复字符。
4. **记录结果**：
   - 在每次右边界移动或者左边界移动后，检查当前窗口是否满足题目要求，并更新结果（例如，记录当前窗口的长度或内容）。

示例：最长不含重复字符的子串

```
python复制代码class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        left = 0
        max_length = 0
        
        for right in range(len(s)):
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            char_set.add(s[right])
            max_length = max(max_length, right - left + 1)
        
        return max_length
```

两个字符串/数组之间的问题

思路

1. **初始化窗口边界和状态**：
   - 类似于单个字符串问题，初始化窗口的左边界 `left` 和右边界 `right`。
   - 还需要初始化用于记录子串统计信息的变量，如字典或计数器。
2. **扩展右边界**：
   - 通过循环不断移动右边界 `right`，逐步扩大窗口范围。
   - 每次移动右边界后，更新窗口内的状态（例如，当前窗口内的字符或数字的统计信息）。
3. **检查条件并收缩左边界**：
   - 根据问题要求，在满足某些条件时，可能需要移动左边界 `left` 以收缩窗口。
   - 例如，在寻找主串中包含某个子串所有字符的最短子串时，如果当前窗口内已经包含了子串的所有字符，则需要尝试收缩左边界，以寻找更短的子串。
4. **记录结果**：
   - 在每次右边界移动或者左边界移动后，检查当前窗口是否满足题目要求，并更新结果（例如，记录当前窗口的长度或内容）。

示例：找到字符串中所有字母异位词

```
python复制代码class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        from collections import Counter

        p_count = Counter(p)
        s_count = Counter()

        result = []
        p_len = len(p)
        s_len = len(s)

        for i in range(s_len):
            s_count[s[i]] += 1
            if i >= p_len:
                if s_count[s[i - p_len]] == 1:
                    del s_count[s[i - p_len]]
                else:
                    s_count[s[i - p_len]] -= 1
            if s_count == p_count:
                result.append(i - p_len + 1)

        return result
```

区别总结

- **单个字符串/数组问题**：
  - 窗口内的内容通常是根据单个字符串或数组的元素来更新的。
  - 主要关注如何在窗口内处理元素（如去重、计数等），并根据条件调整窗口的左右边界。
- **两个字符串/数组之间的问题**：
  - 需要根据另一个字符串或数组的特定条件来更新窗口内的内容。
  - 需要在窗口内进行更多的比较和统计，确保窗口内的子串或子数组满足另一个字符串或数组的特定条件。
  - 通常涉及更多的计数器或字典来记录窗口内的状态。

滑动窗口的核心思想是通过动态调整窗口的左右边界来优化问题的解决方案，而具体实现则根据问题的具体要求有所不同。

> 为什么滑动窗口算法不适用于560题
>
> 在560题「和为K的子数组」中，由于数组中可能包含负数，滑动窗口算法无法有效解决这个问题。具体原因如下：
>
> 1. **单调性缺失**：
>    - 滑动窗口算法通常用于处理单调递增或递减的数组，或者在特定条件下调整窗口大小。然而，当数组中包含负数时，无法保证子数组和的单调性。例如，当数组中包含正数和负数时，无法确定某个窗口的左边界向右移动是否会使子数组和变得更大或更小。
> 2. **滑动窗口调整困难**：
>    - 对于滑动窗口算法，我们需要根据某个条件来调整窗口的大小，以满足特定的要求。然而，当数组中包含负数时，无法简单地通过窗口的左右边界调整来满足和为K的要求。

<br>

<br>



## 单调队列



<br>

<br>



<br>



# hot 100

哈希

|       题目        | 难度 |  初次解  |             最优解             | 复杂度  |
| :---------------: | :--: | :------: | :----------------------------: | :-----: |
|    1.两数之和     | 简单 | 暴力解法 |      哈希保存经过元素位置      |   n/n   |
| 49.字母异位词分组 | 中等 | 解答错误 | 排序列表中各个内部字符串并哈希 | nlogn/n |
| 128.最长连续序列  | 中等 | 解答错误 |    哈希查询左右元素是否存在    |   n/n   |

双指针

|       题目        | 难度 |      初次解      |          最优解          | 复杂度 |
| :---------------: | :--: | :--------------: | :----------------------: | :----: |
|    283.移动零     | 简单 | 双指针对应零非零 | 双指针思路（单指针）优化 |  n/1   |
| 11.盛最多水的容器 | 中等 |   超出时间限制   |      双指针首尾对撞      |  n/1   |
|    15.三数之和    | 中等 |   超过时间限制   |   排序去重+首尾双指针    |  n2/1  |
|     42.接雨水     | 困难 |        无        | 左右最大高度+首尾双指针  |  n/1   |

滑动窗口

|               题目               | 难度 |      初次解      |      最优解      | 复杂度 |
| :------------------------------: | :--: | :--------------: | :--------------: | :----: |
|        3.无重复的最长字串        | 中等 | 暴力（超过时间） | 单字符串滑动窗口 |  n/1   |
| 438.找到字符串中所有字母的异位词 | 中等 |        无        | 双字符串滑动窗口 |  n/1   |

子串

|        题目        | 难度 |  初次解  |      最优解       | 复杂度 |
| :----------------: | :--: | :------: | :---------------: | :----: |
| 560.和为k的子数组  | 中等 | 解答错误 |   前缀和+哈希表   |  n/n   |
| 239.滑动窗口最大值 | 困难 |    无    | 双端队列/单调队列 |  n/k   |
|                    |      |          |                   |        |

普通数组

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

矩阵

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

链表

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

二叉树

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

图论

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

回溯

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

二分查找

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

栈

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

堆

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

贪心算法

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

动态规划

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

多维动态规划

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

技巧

| 题目 | 难度 | 初次解 | 最优解 | 复杂度 |
| :--: | :--: | :----: | :----: | :----: |
|      |      |        |        |        |
|      |      |        |        |        |

<br>

<br>

<br>

<br>

## 哈希表

### 1. 两数之和

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。



**示例 1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例 2：**

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例 3：**

```
输入：nums = [3,3], target = 6
输出：[0,1]
```



**提示：**

- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- **只会存在一个有效答案**



初次解法

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i+1,n):
                if (nums[i] + nums[j]) == target:
                    return i,j
```

涉及内容：

- 数组长度的获取：len
- range函数的性质
  - **单个参数**：`range(n)` 生成从 `0` 到 `n-1` 的数字序列。
  - **两个参数**：`range(start, stop)` 生成从 `start` 到 `stop-1` 的数字序列。
  - **三个参数**：`range(start, stop, step)` 生成从 `start` 到 `stop-1` 的数字序列，步长为 `step`。如果 `step` 是负数，序列将递减。

<br>最优解法

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        idx = {}  # 创建一个空哈希表（字典）
        for j, x in enumerate(nums):  # x=nums[j]
            if target - x in idx:  # 在左边找 nums[i]，满足 nums[i]+x=target
                return [idx[target - x], j]  # 返回两个数的下标
            idx[x] = j  # 保存 nums[j] 和 j
```

实现原理：将每次循环的元素存入字典的中，其中列表值当作字典的key，列表下标当作字典的value，实现循环过程中将经过的元素保存到哈希表中，当后续循环中要查找是否有某个元素值是和当前元素值求和为目标值，可以查询那个未知元素是否在字典中。

本算法可以使用排序+双指针（这种情况复杂度nlogn/1，适合结果需要去重的情况）





<br>

<br>

### 49.字母异位词分组

给你一个字符串数组，请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表。

**字母异位词** 是由重新排列源单词的所有字母得到的一个新单词。

 

**示例 1:**

```
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**示例 2:**

```
输入: strs = [""]
输出: [[""]]
```

**示例 3:**

```
输入: strs = ["a"]
输出: [["a"]]
```

 

**提示：**

- `1 <= strs.length <= 104`
- `0 <= strs[i].length <= 100`
- `strs[i]` 仅包含小写字母

初次解法

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        alp = {}
        answer = []
        sum = 0
        
        for k,v in enumerate(strs):
            sum = 0
            for _,v2 in enumerate(v):
                sum += ord(v2)
            if sum in alp:
                alp[sum].append(v)
            else:
                alp[sum] = [v]
        
        for key,value in alp.items():
            answer.append(value)
        
        return answer
```

上面只能解决部分样例，即没有完成

涉及知识：

- 列表添加元素append
- 循环字典
- 转换Ascii码值 ord（不是使用int）





<br>

最优解法

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        answer = {}

        for st in strs:
            key = "".join(sorted(st))
            
            if key in answer.keys():
                answer[key].append(st)
            else:
                answer[key] = [st]

        return list(answer.values())
```

涉及知识：

- 字典赋值列表  a[key] = [ 元素]
- 字典获取
  - key:keys()
  - value:values()
- join返回的字符串
- sorted排序返回列表

实现原理：可以将每个字符串进行排序（注意是将每个字符串单个排序，而不是将字符串一起进行排序），得到唯一序列的字符串，从而可以将其作为字典key，再使其key对应键值为list，并将原本未排序的字符串添加到这个list，实现将同一组的序列（即相同n个字母的组合成的字符串）分组。





<br>

<br>

### 128.最长连续序列



给定一个未排序的整数数组 `nums` ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

 

**示例 1：**

```
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

**示例 2：**

```
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
```

 

**提示：**

- `0 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

初次解法

```python
无
```



<br>

最优解法

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        res = 0
        num_map = {}
        
        for num in nums:
            # Only process if num is not already part of a sequence
            if num not in num_map:
                left = num_map.get(num - 1, 0)
                right = num_map.get(num + 1, 0)
                sum_length = left + right + 1
                
                # Update the current number's sequence length
                num_map[num] = sum_length
                
                # Update boundaries of the sequence
                num_map[num - left] = sum_length
                num_map[num + right] = sum_length
                
                # Keep track of the maximum length
                res = max(res, sum_length)
                
        return res
```

实现原理：

针对每⼀个 map 中不存在的数 n ，插⼊进去都做 2 件事情。第⼀件 事，先查看 n - 1 和 n + 1 是否都存在于 map 中，如果都存在，代表存在连续的序列，那么 就更新 left ， right 边界。那么 n 对应的这个⼩的⼦连续序列⻓度为 sum = left + right + 1 。第⼆件事就是更新 left 和 right 左右边界对应的 length = sum 。

注意：**这里关于边界扩展更新，在于遍历的时候进行left或right的判断叠加，而中间的序列可以不进行更新，这是由于只要更新了某个序列的边界，那么遍历到其他元素的时候必然为这个边界之外，因此对于其他元素可以访问的left和right只可能是某个序列的边界，不可能是中间的序列**



此外：该题还可以使用**并查集模板**来答题





## 双指针



### 283.移动零



给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

 

**示例 1:**

```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

**示例 2:**

```
输入: nums = [0]
输出: [0]
```

 

**提示**:

- `1 <= nums.length <= 104`
- `-231 <= nums[i] <= 231 - 1`

 初次解法

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        number = 0
        empty  = 0
        for i in range(len(nums)):
            if nums[i] == 0:
                if (nums[empty]!=0):
                    empty = i
            else:
                number = i
                nums[number],nums[empty] = nums[empty],nums[number]
                empty +=1
```

涉及知识：

- python交换元素，在python中交换元素就是交换引用的对象
- **for循环过程中，其中的循环变量不可在循环内部修改并影响下一次循环**

实现原理：

本算法通过两个指针，一个指向零的第一个元素，一个指向非零的第一个元素，但在具体是是实现上有所区别

- 指向0的指针，要始终指向数组第一个遇到的0（即值为该0的下标）
- 指向非0的指针，要始终指向未发生交换的第一个非0元素（即值为该非0下标）

上述的逻辑在于，本算法要在一次循环过程中交换0和非0元素，通过不停的交换实现非零元素在前面，零元素在后面。

具体的实现方法，当循环迭代到某个元素，

- 判断是否是零元素，
  - 如果是零元素，
    - 则再次查看empty是否是0元素（如果不是则证明初始条件不满足），
      - 如果是0元素，则不进行交换（因为之前保存的位置比现在的位置更考前）
      - 如果是非0元素，则进行交换（因为之前empty保存的坐标不是0元素）
  - 如果是非0元素
    - 先将number的指向当前元素
    - 再对当前number指向元素和empty指向元素进行交换
    - 最后将empty移动下一个位置（目的是为了移动到当前序列第一个0元素）

解释一下，为什么empty移动是加1，因为算法设计的情况下，empty指向的内容和number指向的内容只有两种情况

- 01：两个指向靠近，交换后10
- 0...01：两个指向不靠近，交换后10...0

不可能出现0n1情况，即不可能出现中间有非0元素，因为如果有，则必然在之前的迭代中发生了交换即n01，因此交换后只需+1既可以定位到下一个非0地址。

<br>

最优解法

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # `last_non_zero_found_at` 记录下一个非零元素应该放置的位置
        last_non_zero_found_at = 0
        
        # 如果当前元素不是0，就将其放到 `last_non_zero_found_at` 位置
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[last_non_zero_found_at], nums[i] = nums[i], nums[last_non_zero_found_at]
                last_non_zero_found_at += 1

```

实现原理：

原理和初次解法基本一致，但是改变了原来的双指针，使用了单指针（隐式的双指针），其中指向非零元素的指针使用了循环中的变量替代。



<br>

<br>



### 11.盛最多水的容器

给定一个长度为 `n` 的整数数组 `height` 。有 `n` 条垂线，第 `i` 条线的两个端点是 `(i, 0)` 和 `(i, height[i])` 。

找出其中的两条线，使得它们与 `x` 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

**说明：**你不能倾斜容器。

 

**示例 1：**

![img](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```

**示例 2：**

```
输入：height = [1,1]
输出：1
```

 

**提示：**

- `n == height.length`
- `2 <= n <= 105`
- `0 <= height[i] <= 104`

初次解法

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        water = 0
        for i in range(len(height)):
            for j in range(i+1,len(height)):
                now_water = (j-i) * min(height[i],height[j])
                if now_water > water:
                    water = now_water 
                    
        return water
```

暴力循环获取最大容纳

超出时间限制

<br>

最优解法

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:

        max,start,end = 0,0,len(height)-1
        
        while(start<end):
            width  = end -start
            high = 0
            if(height[start]<=height[end]):
                high = height[start]
                start+=1
            elif(height[start]>height[end]):
                high = height[end]
                end-=1
            
            if (width * high > max):
                max = width * high
                    
        return max
```

首尾对撞指针实现

首尾双指针（也称为双指针法）是一种高效的算法策略，适用于许多类型的问题，特别是那些涉及到从序列的两端开始向中间靠拢的情况。以下是一些常见的可以使用双指针法解决的问题类型：

> 1. **寻找最大或最小容量的问题**
>
> - **示例：** "Container With Most Water"（最大水容器问题）
> - **原理：** 两个指针分别从序列的两端开始，根据当前的条件（如高度），移动较短的一侧，以寻找可能的最大值。
>
> 2. **有序数组中的问题**
>
> - **示例：** "Two Sum II - Input array is sorted"（已排序数组中的两数之和）
> - **原理：** 使用两个指针分别从数组的两端开始，根据当前的和与目标值的比较，调整指针位置以找到答案。
>
> 3. **找到特定的子数组或子序列**
>
> - **示例：** "Minimum Window Substring"（最小窗口子串）
> - **原理：** 使用一个指针扩展窗口（右指针）并用另一个指针收缩窗口（左指针），以找到满足条件的最小窗口。
>
> 4. **字符或数字的配对问题**
>
> - **示例：** "Palindrome Partitioning II"（回文分割 II）
> - **原理：** 可以用双指针来检查字符或数字的对称性，或者在字符串中寻找配对。
>
> 5. **寻找重复或目标值**
>
> - **示例：** "Find the Duplicate Number"（找出重复的数字）
> - **原理：** 双指针可以用于在序列中快速找到重复元素，尤其是在有排序或特定性质的序列中。
>
> 6. **处理排序或反转的问题**
>
> - **示例：** "Reverse Words in a String"（翻转字符串中的单词）
> - **原理：** 使用两个指针来从两端开始翻转或调整字符串中的部分内容。

实现逻辑：

​	由于最大容量取决于两边高度的最小高度 * 两点的差，因此固定最小高度的情况下，两点距离最远那么容量最大，即首尾两个点。

但由于此问题最小高度不固定，因此不一定是首尾两个点。由此从首尾指针向中间触发。

由于首尾指针初始情况宽度最大，因此想要比当前的容量更大，只有寻找到比当前最小高度还高的两点才有可能，因此有步骤如下：

- 如果height[start] < hight[end]，high = height[start]（当前两点最小高度），start++（即向右寻找可能的比当前最小高度高的一个点）
- 如果height[start] > hight[end]，high = height[end]（当前两点最小高度），end--（即向左寻找可能的比当前最小高度高的一个点）

其中high，是计算当前容量的参数；而start++和end--，是计算下次high的参数，从而计算下一次位置的容量大小





<br>

<br>



### 15.三数之和

给你一个整数数组 `nums` ，判断是否存在三元组 `[nums[i], nums[j], nums[k]]` 满足 `i != j`、`i != k` 且 `j != k` ，同时还满足 `nums[i] + nums[j] + nums[k] == 0` 。请你返回所有和为 `0` 且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

 

 

**示例 1：**

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
```

**示例 2：**

```
输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
```

**示例 3：**

```
输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
```

 

**提示：**

- `3 <= nums.length <= 3000`
- `-105 <= nums[i] <= 105`

初次解法

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        three_sum = []
        for i in range(len(nums)):
            two_sum = {}
            target = -nums[i]
            for j in range(len(nums)):
                if i!=j:
                    if target - nums[j] in two_sum:

                        three = sorted([nums[i],nums[j],target-nums[j]])
                        if three not in three_sum:
                        
                            three_sum.append(three)
                    else:
                        two_sum[nums[j]] = j
        return three_sum
```

本算法通过了大部分案例，但在部分案例中超过时间限制，猜测是中间sorted的耗时太大。

实现原理：

通过最外层循环，将三数之和转变为两数之和。

- 在最外层循环中，找到第二层循环两数之和的target
- 然后在两数之和中进行哈希表操作（参考两数之和）
- 由于可能出现重复的三元组，因此在保存的时候先sorted排序并查看输出列表中是否存在该列表
  - 存在则不插入
  - 不存在则插入

<br>

最优解法



```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res,k = [],0
        for k in range(len(nums)-2):
            if nums[k] > 0:break
            if k>0 and nums[k] == nums[k-1]:continue
            i = k+1
            j = len(nums) - 1
            while i<j:
                s = nums[k] + nums[i] + nums[j]
                if s < 0:
                    i+=1
                    while i < j and nums[i] == nums[i-1]: i+=1
                elif s > 0:
                    j-=1
                    while i < j and nums[j] == nums[j+1]: j-=1
                else:
                    res.append([nums[k],nums[i],nums[j]])
                    i+=1
                    j-=1
                    while i < j and nums[i] == nums[i-1]: i+=1
                    while i < j and nums[j] == nums[j+1]: j-=1

        return res
```

本算法的难点在于去重，因此首先借助了排序算法来进行排序来帮助去重

实现原理：

- 首先对数据进行排序
- 循环固定k，确定本次循环的其他两数和
  - 如果nums[k] > 0，表明后续全正数，故跳出循环
  - 如果  k>0 and nums[k] == nums[k-1]，表明与上一个固定相同，为了防止重复三元组，跳出本次循环
- 定义双指针指向左右两边（k+1和len-1）
- 计算三个数和s
  - 如果s大于0，则将右边指针左移变小（固定变小，如相等再移动）
  - 如果s小于0，则将左边指针右移变大（固定变大，如相等再移动）
  - 如果s等于0，则记录当前三元组
    - 左右指针向中间移动（同时去除相同的两个数，因为此时已经记录）





<br>

<br>

### 42.接雨水

给定 `n` 个非负整数表示每个宽度为 `1` 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

```
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
```

**示例 2：**

```
输入：height = [4,2,0,3,2,5]
输出：9
```

 

**提示：**

- `n == height.length`
- `1 <= n <= 2 * 104`
- `0 <= height[i] <= 105`

初次解法

```python
无
```

<br>

最优解法

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        water = 0
        left = left_max =  right_max = 0
        right = len(height) - 1
        while left < right:
            left_max = max(left_max,height[left])
            right_max = max(right_max,height[right])
            if left_max < right_max:
                water += left_max -height[left]
                left+=1
            else:
                water += right_max-height[right]
                right-=1
        return water
```

实现原理：本算法的实现基于一个现象，即盛水的高度取决于最短的边，只要在左边和右边找左右最长边，并在左右最长边中找一个相对较小边，那么从那个较小边向中间出发，即可找到每个格子的盛水大小，注意左右最长边是需要不停检测的

操作流程

- 定义左右指针，初始左右最高点
- 循环left < right
- 将当前左指针和之前左边最高点进行比较，获取较大的值赋予当前左边最高点
- 将当前右指针和之前右边最高点进行比较，获取较大的值赋予当前右边最高点
- 判断左右两个最高点那个比较高
  - 如果左边高，证明在右指针到右边最高点标记点的最高处为右边最高点标记点，即右指针对应的当前盛水容量与右边最高点相关
    - 盛水容量加上右边最高点-当前右指针高度，再移动右指针到中间
  - 如果左边高，证明在右指针到右边最高点标记点的最高处为右边最高点标记点，即右指针对应的当前盛水容量与右边最高点相关
    - 盛水容量加上左边最高点-当前左指针高度，再移动左指针到中间





<br>

<br>

## 滑动窗口

### 3.无重复字符最长字串

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长** 

**子串**

 的长度。



 

**示例 1:**

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

 

**提示：**

- `0 <= s.length <= 5 * 104`
- `s` 由英文字母、数字、符号和空格组成

初次解法

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        def is_unique(substring: str) -> bool:
            # 检查子串中是否有重复字符
            return len(substring) == len(set(substring))
        
        n = len(s)
        max_length = 0
        
        # 遍历所有可能的子串
        for i in range(n):
            for j in range(i + 1, n + 1):
                if is_unique(s[i:j]):
                    max_length = max(max_length, j - i)
        
        return max_length
```

涉及知识：

- set创建集合，集合不包含相同元素
- 切片复制[i:j]，包含i不包含j-1

实现原理：

通过暴力循环来判断当前字串是否重复，如果不重复对比之前记录长度和当前字串长度那个更大

具体操作：

- 外层循环i，标记字串的起始点
- 内层循环j，标记字串的结束点
- 最内层判断当前字串是否不重复
  - 如果重复则跳过操作
  - 如果不重复则进行max比较操作，来记录目前最长字串长度



<br>

最优解法

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = left = 0
        window = set()  # 维护从下标 left 到下标 right 的字符
        for right, c in enumerate(s):
            # 如果窗口内已经包含 c，那么再加入一个 c 会导致窗口内有重复元素
            # 所以要在加入 c 之前，先移出窗口内的 c
            while c in window:  # 窗口内有 c
                window.remove(s[left])
                left += 1  # 缩小窗口
            window.add(c)  # 加入 c
            ans = max(ans, right - left + 1)  # 更新窗口长度最大值
        return ans

```

实现原理：

本算法采用滑动窗口实现，即滑动窗⼝的右边界不断的右移，只要没有重复的字符，就持续向右扩⼤窗⼝边界。⼀旦出现了重复字 符，就需要缩⼩左边界，直到重复的字符移出了左边界，然后继续移动滑动窗⼝的右边界。以此类推， 每次移动需要计算当前⻓度，并判断是否需要更新最⼤⻓度，最终最⼤的值就是题⽬中的所求。

具体操作：

- 首先定义左边界为0
- 然后循环右边界
  - 在右边界循环过程中，查看当前字符是否已经在滑动窗口中
    - 如果已经在，则证明在左边界到右边界中出现了和当前字符重复的字符，**因此进行不断缩减左边界，直到重复字符去除**
    - 如果不存在，则不进入左边界削减过程
  - 将当前字符出现登记在滑动窗口中
  - max验证之前记录的最长字串和当前左右边界构成的字串那个更长，并将其赋值到ans中
- 返回记录的最终结果

也可套用模板解法如下

> 滑动窗口算法模板
>
> 先回顾一下你提供的滑动窗口模板代码：
>
> ```
> python复制代码from collections import defaultdict
> class Solution:
>     def findAnagrams(self, s: str, p: str) -> List[int]:
>         needs, window = defaultdict(int), defaultdict(int)
>         left, right = 0, 0
>         valid = 0
>         res = []
>         for i in p:
>             needs[i] += 1
> 
>         while right < len(s):
>             c = s[right]
>             right += 1
>             # 窗口内数据的一系列更新
>             ...
>             
>             while 判断是否需要收缩窗口:
>                 d = s[left]
>                 left += 1
>                 # 进行窗口内数据的一系列更新
>                 ...
>                 
>         return res
> ```
>
> 改写模板解决单字符串和为 `k` 的问题
>
> 现在，我们将这个模板改写，以适应单个字符串的问题：
>
> 1. **`needs` 和 `window`**：在这个问题中，我们不需要 `needs` 这个字典，因为不需要与另一个字符串进行匹配。我们将使用一个简单的变量 `current_sum` 来记录当前窗口内数字的和。
> 2. **`valid` 变量**：在这个问题中，`valid` 也不需要，因为我们只需判断当前窗口的和是否等于 `k`。
> 3. **窗口收缩条件**：如果当前窗口的和大于 `k`，我们需要收缩窗口。
>
> 改写后的代码
>
> ```
> python复制代码from typing import List
> 
> class Solution:
>     def findSubstringsWithSumK(self, s: str, k: int) -> List[str]:
>         left, right = 0, 0
>         current_sum = 0
>         res = []
> 
>         while right < len(s):
>             c = int(s[right])
>             right += 1
>             current_sum += c
> 
>             # 判断是否需要收缩窗口
>             while current_sum > k and left < right:
>                 d = int(s[left])
>                 left += 1
>                 current_sum -= d
> 
>             # 当前窗口的和等于 k 时，记录结果
>             if current_sum == k:
>                 res.append(s[left:right])
>                 
>         return res
> 
> # 示例调用
> s = "123451234"
> k = 10
> solution = Solution()
> result = solution.findSubstringsWithSumK(s, k)
> print(result)  # 输出: ['1234', '2341', '451']
> ```
>
> 套用模板的关键步骤
>
> 1. **初始化窗口和结果变量**：`left` 和 `right` 用于定义窗口的左右边界，`current_sum` 用于存储当前窗口的和，`res` 用于存储符合条件的子串。
> 2. **扩展窗口**：通过 `right` 指针的移动，不断加入新的字符，并更新 `current_sum`。
> 3. **判断和收缩窗口**：当 `current_sum > k` 时，通过移动 `left` 指针来收缩窗口，并从 `current_sum` 中减去被移除的字符值。
> 4. **记录符合条件的结果**：如果 `current_sum == k`，则记录当前窗口的子串。
>
> 通过这种方式，滑动窗口的模板可以适应于处理字符串和为特定值的子串查找问题。这种方法保持了滑动窗口的结构，但调整了用于判断和收缩窗口的逻辑，以符合具体问题的需求。





<br>

<br>

### 438.找到字符串中所有字母异位词

给定两个字符串 `s` 和 `p`，找到 `s` 中所有 `p` 的 **异位词** 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

**异位词** 指由相同字母重排列形成的字符串（包括相同的字符串）。

 

**示例 1:**

```
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
```

 **示例 2:**

```
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
```

 

**提示:**

- `1 <= s.length, p.length <= 3 * 104`
- `s` 和 `p` 仅包含小写字母



初次解法

```python
 无
```



<br>

最优解法

```python
from collections import defaultdict
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        needs, window = defaultdict(int), defaultdict(int)
        left, right = 0, 0
        valid = 0
        res = []
        for i in p:
            needs[i] += 1

        while right < len(s):
            c = s[right]
            right += 1
            if c in needs:
                window[c] += 1
                if window[c] == needs[c]:
                    valid += 1
            
            while right - left >= len(p):
                if valid == len(needs):
                    res.append(left)
                d = s[left]
                left += 1
                if d in needs:
                    if window[d] == needs[d]:
                        valid -= 1
                    window[d] -= 1
        return res

```

实现原理：

本算法采用的是双字符串滑动窗口解法，具体使用了双字符串的模板解法，除了常规定义左右指针，还要定义need字典和valid参数

这两个参数分别负责副字符串的出现形态（通过字典标注字符为1）和当前窗口中出现与need字典对应字符相同情况的次数（套用滑动窗口模板，注意四个问题），模板的经典使用是记录当前右指针坐标，查看是否要更新valid，然后判断是否要收缩左边界，在收缩左边界的循环中判断是否满足题目，满足则进行最终答案更新。算法的原理是右边界右移扩大窗口直至找到覆盖解，然后循环收缩左边界，直至滑动窗口的解法不再存在，这样循环中最后一次收缩的更新数据，就是优化后的最优节解（即最小字串）

说人话就是，首先右边界右移动，找到一种情况就是——滑动窗口当前大小大于等于副字符串长度（其实就是等于），这个情况是收缩左边界情况前提，（为什么使用这个情况来收缩，是因为题目的匹配规则需要副字符串和主字符串的字串中匹配，所以需要长度一致，如果仅考虑valid和need的长度相等，只能保证找到要素齐全的字符，而不能保证字符串长度一致），然后在收缩左边界内部进行判断是否要素齐全，齐全就更新数据，最后再移动左边界

具体操作：

- 首先设定参数
  - needs：条件字典，记录副字符串的需求（这里是记录副字符串每个出现的次数）
  - windows：所需字符窗口字典，记录left到right两个指针之间中出席了needs（副字符串）的相关字符的次数
  - valid：有效指数，记录window中相关字符的出现次数对应needs相关字符的出现次数相同的次数，当valid值等于needs长度时，则证明找到的一个覆盖解（之所以是覆盖解是因为windows中只统计了需要的字符，实际窗口可能有不需要的字符）
  - left、right：左右指针，负责控制窗口的大小，并找到窗口的覆盖解和解的优化
  - res：最终返回的结果，这里是返回列表（保存所有子串的起始位置）
- 进入right循环移动，尝试扩大窗口
- 首先记录当前right指针对应内容，并判断对应内容是否是在needs中
  - 如果在needs中，更新window对应字符数据出现次数，然后判断该字符在window中的出现次数是否与needs中的出现次数一致
    - 如果一致，则有效指数valid进行增加
- 然后进入左边界收缩循环中，先判断是否要进入
  - 如果当前窗口等于（虽然写的是大于等于）副字符串，则进入
    - 判断有效指数valid是否与副字符串长度相同
      - 如果相同，则证明此时是满足提议（即同样长度，字符均出现）的一种情况，进行res数据更新，将子串left起始坐标加入res
    - 记录当前left指针对应字符，做好去除准备，left右移动
    - 判断要去除的字符是否是needs中的
      - 如果是，则证明这次要删除的字符是需要的字符，再进行当前这个字符在needs中和window中的出现次数是否一致（即是否会因为删除这个字符，导致valid有效指数下降）
        - 如果当前这个字符在needs中和window中的出现次数是一致的，则证明删除这个字符会使得valid有效指数下降，即进行valid减一操作
      - 然后进行对应的window的字符进行减1操作（不先操作windows是为了先判断是否要进行有效指数的减少）
- 最后进行列表结果return

<br>

<br>

## 子串

### 560.和为k的子数组

给你一个整数数组 `nums` 和一个整数 `k` ，请你统计并返回 *该数组中和为 `k` 的子数组的个数* 。

子数组是数组中元素的连续非空序列。

 

**示例 1：**

```
输入：nums = [1,1,1], k = 2
输出：2
```

**示例 2：**

```
输入：nums = [1,2,3], k = 3
输出：2
```

 

**提示：**

- `1 <= nums.length <= 2 * 104`
- `-1000 <= nums[i] <= 1000`
- `-107 <= k <= 107`



初次解法

```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        left = 0
        ans  = 0
        sum  = 0
        temp = []

        for right,x in enumerate(nums):
            sum+=x

            while sum != k and right > left:
                sum-=nums[left]
                left+=1
            
            if sum == k:
                temp.append([left,right])

                ans +=1
        print(temp)
        return ans
```

本解法有问题，本算法不能适用滑动窗口



<br>

最优解法

```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        # 要求的连续子数组
        count = 0
        n = len(nums)
        preSums = collections.defaultdict(int)
        preSums[0] = 1

        presum = 0
        for i in range(n):
            presum += nums[i]
            
            # if preSums[presum - k] != 0:
            count += preSums[presum - k]   # 利用defaultdict的特性，当presum-k不存在时，返回的是0。这样避免了判断

            preSums[presum] += 1  # 给前缀和为presum的个数加1
            
        return count
```

实现原理：

本算法实现基于不断的保存第一个数到当前数的和到哈希表中，由于获取的和为k的子数组是连续的数组，因此可以假设当前循环的前缀和为presum，则在前缀哈希表查找是否之前出现了presum-k数值的节点，如果出现了这个节点，则证明后面部分的数组和为k（如果有出现了n个presum-k，则后面有n个k和的子数组），另外还要注意的是presum-k=0的情况，这种情况下即使前面没有出现这个值的节点，也至少有一个（即当前循环的子数组）

具体操作：

- 首先定义count计算子数组数目，presum为当前整个数组的前缀和（0...i）,preSums保存当前i之前所有前缀和为某个特定值的出现次数
- 然后设置特殊情况preSums[0] = 1，即表明前缀和和目标值相等，此时至少有一个子数组满足
- 循环前缀和的终点i，一直到i触及数组的最末尾
  - presum统计当前终点下的前缀和
  - count添加当前终点下的整体前缀和减去目标值在之前的循环（前缀和终点）中出现的次数
  - preSums记录当前前缀和数值出现加1
- 返回最终的子数组数目count





<br>

<br>

### 239.滑动窗口最大值

给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。

返回 *滑动窗口中的最大值* 。

 

**示例 1：**

```
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**示例 2：**

```
输入：nums = [1], k = 1
输出：[1]
```

 

**提示：**

- `1 <= nums.length <= 105`
- `-104 <= nums[i] <= 104`
- `1 <= k <= nums.length`





初次解法

```python
无
```



最优解法

```python

```



#### 

<br>

<br>







<br>

<br>

<br>

# other

### 

 

<br>

<br>





