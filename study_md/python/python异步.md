程序有cpu密集型和io密集型，对于python而言，正常的编写代码如果时间开销太大，那么我们可以使用以下策略优化

- cpu密集型：多线程（要绕过GIL）、多进程
- io密集型：协程、异步io





# asynico

`asyncio`是 Python 中用于编写异步代码的标准库，它提供了一组工具和API来管理和调度协程。通过`asyncio`，可以轻松创建、执行和管理异步任务。

关键字：executor、task、coroutine、event loop、Future

## 介绍



## 协程语法

async/await 语法来声明 [协程](https://docs.python.org/zh-cn/3/glossary.html#term-coroutine) 是编写 asyncio 应用的推荐方式

- async：一个函数可以通过async def来定义协程函数，并返回一个corutine对象
- await：挂起coroutine的执行以等待一个awaitable对象。只能在coroutine funcion内部使用

awaitable对象有三种：协程、任务、Future

> python的协程对象是协程函数所返回的对象

  








## 异步对象

python的异步对象有

- coroutine
- task
- Future

  协程

Python 协程属于 *可等待* 对象，因此可以在其他协程中被等待:

```
import asyncio

async def nested():
    return 42

async def main():
    # 如果我们只调用 "nested()" 则无事发生。
    # 一个协程对象会被创建但是不会被等待，
    # 因此它 *根本不会运行*。
    nested()  # 将引发 "RuntimeWarning"。

    # 现在让我们改为等待它：
    print(await nested())  # 将打印 "42"。

asyncio.run(main())
```

> 重要
>
> 在本文档中 "协程" 可用来表示两个紧密关联的概念:
>
> - *协程函数*: 定义形式为 [`async def`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-def) 的函数;
> - *协程对象*: 调用 *协程函数* 所返回的对象。

<br>

任务

*任务* 被用来“并行的”调度协程

当一个协程通过 [`asyncio.create_task()`](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.create_task) 等函数被封装为一个 *任务*，该协程会被自动调度执行:

```
import asyncio

async def nested():
    return 42

async def main():
    # 将 nested() 加入计划任务
    # 立即与 "main()" 并发运行。
    task = asyncio.create_task(nested())

    # 现在可以使用 "task" 来取消 "nested()"，or
    # 或简单地等待它直到它被完成：
    await task

asyncio.run(main())
```

task任务完成后返回值就是coroutine的返回值

task对象是继承Future的，本质是Future

<br>

Futures

[`Future`](https://docs.python.org/zh-cn/3/library/asyncio-future.html#asyncio.Future) 是一种特殊的 **低层级** 可等待对象，表示一个异步操作的 **最终结果**。

当一个 Future 对象 *被等待*，这意味着协程将保持等待直到该 Future 对象在其他地方操作完毕。

在 asyncio 中需要 Future 对象以便允许通过 async/await 使用基于回调的代码。

通常情况下 **没有必要** 在应用层级的代码中创建 Future 对象。

Future 对象有时会由库和某些 asyncio API 暴露给用户，用作可等待对象:

```
async def main():
    await function_that_returns_a_future_object()

    # 这样也可以：
    await asyncio.gather(
        function_that_returns_a_future_object(),
        some_python_coroutine()
    )
```

一个很好的返回对象的低层级函数的示例是 [`loop.run_in_executor()`](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.run_in_executor)。





## 异步函数

### 1.异步函数

声明异步函数使用async def即可，此时函数返回coroutine对象



### 2.启动异步程序

- **`asyncio.run(coro, \*, debug=False)`**

  - **功能**：运行协程并管理事件循环。

  - **参数**：

    - `coro`: 主协程。
    - `debug`: 启用调试模式（如未捕获的异常日志）。

  - **示例**：

    ```python
    async def main():
        await asyncio.sleep(1)
    asyncio.run(main())
    ```



### 3.创建任务

`asyncio.**create_task**(*coro*, ***, *name=None*, *context=None*)`

将coro协程封装为一个Task并调度其执行。返回Task对象



### 4.休眠

`*coroutine* asyncio.**sleep**(*delay*, *result=None*)`

如果指定了 *result*，则当协程完成时将其返回给调用者。

`sleep()` 总是会挂起当前任务，以允许其他任务运行。



### 5.并发运行任务

`*awaitable* asyncio.**gather**(**aws*, *return_exceptions=False*)`

并发运行aws序列中的可等到对象。如果aws中某个可等待对象为协程，将自动作为一个任务调度

- 如果所有可等待对象都成功完成，结果是一个由所有返回值聚合而成的列表，结果值的顺序与aws中可等待对象的顺序一致。
- return_exception
  - 如果 *return_exceptions* 为 `False` (默认)，所引发的首个异常会立即传播给等待 `gather()` 的任务。*aws* 序列中的其他可等待对象 **不会被取消** 并将继续运行。
  - 如果 *return_exceptions* 为 `True`，异常会和成功的结果一样处理，并聚合至结果列表。
- 如果 `gather()` *被取消*，所有被提交 (尚未完成) 的可等待对象也会 *被取消*。
- 如果 *aws* 序列中的任一 Task 或 Future 对象 *被取消*，它将被当作引发了 [`CancelledError`](https://docs.python.org/zh-cn/3.14/library/asyncio-exceptions.html#asyncio.CancelledError) 一样处理 -- 在此情况下 `gather()` 调用 **不会** 被取消。这是为了防止一个已提交的 Task/Future 被取消导致其他 Tasks/Future 也被取消。



> 一个创建然后并发地运行任务等待它们完成的新选择是 [`asyncio.TaskGroup`](https://docs.python.org/zh-cn/3.14/library/asyncio-task.html#asyncio.TaskGroup)。 *TaskGroup* 提供了针对调度嵌套子任务的比 *gather* 更强的安全保证：如果一个任务（或子任务，即由一个任务调度的任务）引发了异常，*TaskGroup* 将取消剩余的已排期任务）。



### 6.等待多个协程

- **`asyncio.wait(tasks, \*, timeout=None, return_when=ALL_COMPLETED)`**

  - **功能**：等待一组任务完成，返回 `(done, pending)` 集合。

  - **参数**：

    - `tasks`: 任务集合。
    - `timeout`: 超时时间（秒）。
    - `return_when`: 何时返回，可选：
      - `ALL_COMPLETED`（默认）: 所有任务完成。
      - `FIRST_COMPLETED`: 第一个任务完成时。
      - `FIRST_EXCEPTION`: 第一个任务抛出异常时。

  - **示例**：

    ```python
    async def main():
        tasks = [task1(), task2()]
        done, pending = await asyncio.wait(tasks, timeout=2)
    ```

在 Python 的 `asyncio` 中，`asyncio.gather()` 和 `asyncio.wait()` 虽然都用于等待一组异步任务完成，但它们在设计目标、行为细节和使用场景上有显著区别。以下从多个维度详细对比两者的差异，并提供代码示例说明。

1. 核心区别总结**

| **特性**         | `asyncio.gather()`                           | `asyncio.wait()`                                         |
| :--------------- | :------------------------------------------- | :------------------------------------------------------- |
| **主要目标**     | **收集所有任务的结果**                       | **灵活控制任务完成状态**                                 |
| **返回值**       | 所有任务的 **结果列表**（按输入顺序）        | 两个集合：`done`（已完成任务）和 `pending`（未完成任务） |
| **异常处理**     | 支持统一捕获异常（`return_exceptions=True`） | 需手动检查每个任务的异常                                 |
| **任务取消行为** | 默认取消未完成的任务（若某任务失败）         | 不自动取消未完成的任务                                   |
| **适用场景**     | 需要按顺序获取所有结果                       | 需要动态处理已完成/未完成任务（如超时控制）              |



 

### 7.超时控制

- **`asyncio.wait_for(aw, timeout)`**

  - **功能**：设置协程的超时时间。

  - **参数**：

    - `aw`: 协程或任务。
    - `timeout`: 超时秒数。

  - **示例**：

    ```python
    async def main():
        try:
            await asyncio.wait_for(long_task(), timeout=3)
        except asyncio.TimeoutError:
            print("Timeout!")
    ```





## 异步使用

具体的使用顺序如下：

- 使用async def定义协程函数，该函数返回coroutine对象
- 再将main函数也定义成协程函数
- 在main函数中将对应的coroutine对象转变成task对象
- 使用async.run执行事件循环，并传入协程函数main



```python
import asyncio

async def async_gen():
    for i in range(3):
        await asyncio.sleep(1)  # 模拟异步操作
        yield i  # 返回值

async def background_task():
    while True:
        print("后台任务运行中...")
        await asyncio.sleep(0.5)  # 频繁让出控制权

async def dc():
    await asyncio.sleep(2)
    print("dc")

async def main():
    bg_task =  asyncio.create_task(background_task())

    async for value in async_gen():  # 使用 async for 遍历异步生成器
        print(value)

    bg_task.cancel()



# 启动事件循环
asyncio.run(main())
```









## 其他使用

### 1.异步迭代

- **`async for`**

  - **功能**：迭代异步可迭代对象（需实现 `__aiter__` 和 `__anext__`）。

  - **示例**：

    ```python
    class AsyncCounter:
        def __init__(self, limit):
            self.limit = limit
        async def __aiter__(self):
            for i in range(self.limit):
                yield i
                await asyncio.sleep(1)
    
    async def main():
        async for num in AsyncCounter(3):
            print(num)  # 输出 0, 1, 2（每秒一个）
    ```

**异步迭代**（Asynchronous Iteration）是指在异步编程环境下，逐个处理一系列数据或任务，而不阻塞主程序的执行。它与普通的迭代（同步迭代）类似，但主要用于 **I/O 密集型操作** 或其他可能需要等待的操作，例如从网络读取数据、异步生成数据等。

#### **基本概念**

- **同步迭代**：通常使用 `for` 循环逐个处理数据，数据是立即可用的。也就是说，迭代器会立即返回下一个数据。
- **异步迭代**：由于某些任务（如 I/O 操作）可能会阻塞程序的执行，因此需要用 `async for` 来异步处理这些任务。任务会在等待过程中让出控制权，这样其他任务就可以继续执行，直到异步任务完成。

#### **为什么需要异步迭代？**

- **I/O 密集型操作**：比如从网络中获取大量数据，或者异步读取文件，常常需要时间等待响应。在等待过程中，程序可以做其他事情。
- **提高效率**：异步迭代可以避免在等待过程中阻塞程序。通过**并发执行**，程序可以在等待数据的同时继续处理其他任务，从而提高资源利用率和执行效率。
- **简化代码**：异步迭代使得异步操作的代码结构更加直观，避免了回调函数的复杂性。

#### **异步迭代的实现**

##### 1. **异步迭代的基本语法**

异步迭代主要依赖于 `async for` 和异步生成器（`async def` 函数）。与常规的同步迭代不同，你必须使用 `async for` 进行异步迭代，并且迭代的对象必须实现 `__aiter__()` 和 `__anext__()` 方法。

**异步生成器** 通过 `yield` 暂停，并通过 `await` 继续执行。这样可以在异步任务之间切换，等待某个操作完成后再继续。

##### **2.异步迭代器的实现**

你可以通过实现 `__aiter__()` 和 `__anext__()` 来自定义一个异步迭代器。下面是一个示例：

```python
import asyncio

class AsyncCounter:
    def __init__(self, low, high):
        self.current = low
        self.high = high

    async def __aiter__(self):
        return self

    async def __anext__(self):
        if self.current > self.high:
            raise StopAsyncIteration
        await asyncio.sleep(1)  # 模拟异步操作
        self.current += 1
        return self.current - 1

# 异步迭代
async def main():
    async for num in AsyncCounter(1, 5):
        print(num)

# 启动事件循环
asyncio.run(main())
```

#### **作用和应用场景**

1. **避免阻塞**：异步迭代最大的优势之一是它避免了阻塞。在进行某些耗时操作（如从网络读取数据）时，普通的迭代会让程序在每次读取时都被阻塞，直到操作完成。而使用异步迭代时，当读取操作遇到等待时，事件循环可以去处理其他任务。
2. **提高 I/O 性能**：在进行大量 I/O 操作时（如网络请求、大量文件读取），使用异步迭代能够显著提高效率。程序不会在某个任务等待时停滞不前，而是能够并行处理多个任务。
3. **简化代码结构**：在没有异步迭代的情况下，通常我们需要用回调或者其他复杂的控制流来处理异步任务。但使用异步迭代后，代码结构更加直观，容易理解。
4. **流式处理数据**：异步迭代可以用来流式处理数据，特别是在从网络、文件系统等异步获取数据时非常有用。例如，你可能需要从一个远程服务器获取大量的数据，并且你不希望一次性把所有数据都加载到内存中。

#### **异步迭代的实际应用示例**

1. **网络数据流处理**：如果你需要从一个外部服务器异步获取数据，并逐步处理这些数据，那么异步迭代就非常有用。例如，你可以每次获取一部分数据，然后处理，而不是等待全部数据都下载完毕后再处理。

```python
import asyncio
import aiohttp

async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            async for line in response.content:
                yield line.decode('utf-8')

async def main():
    async for data in fetch_data('http://example.com/data'):
        print(data)

asyncio.run(main())
```

在这个例子中，数据是逐行读取的，程序会在每行数据读取时处理，而不会阻塞等待完整数据获取。

1. **处理大量文件读取**：假设你需要异步地从多个文件中读取数据，可以使用异步迭代来逐个处理每个文件的内容，而不阻塞主线程。
2. **事件驱动的实时数据流**：在某些实时系统中，数据不断产生，你可以使用异步迭代来逐个处理数据流，例如在实时监控系统中，从传感器或外部系统获取数据并逐一处理。

#### **总结**

- **异步迭代** 是指在异步环境中逐个处理数据，并且不阻塞主程序的执行。它使用 `async for` 语法，并依赖异步生成器来实现。
- **应用场景** 包括需要处理大量 I/O 操作的数据流（如网络请求、文件读取等）和流式处理任务，能够提高效率，避免阻塞，并使代码结构更加清晰。
- **优势**：避免程序在等待操作时停滞，允许其他任务并行执行。

如果你有其他问题，或者需要更详细的例子，欢迎随时提问！





### 2.异步上下文

- **`async with`**

  - **功能**：管理异步资源（需实现 `__aenter__` 和 `__aexit__`）。

  - **示例**：

    ```python
    class AsyncFile:
        async def __aenter__(self):
            self.file = await aiofiles.open("test.txt", mode="r")
            return self.file
        async def __aexit__(self, *args):
            await self.file.close()
    
    async def main():
        async with AsyncFile() as f:
            content = await f.read()
    ```



### 3.异步队列

#### **异步队列（Queue）**

- **`asyncio.Queue(maxsize=0)`**

  - **功能**：协程安全的队列，用于生产者和消费者模型。

  - **方法**：

    - `put(item)`: 添加元素。
    - `get()`: 获取元素。
    - `join()`: 等待所有元素被处理。
    - `task_done()`: 标记元素处理完成。

  - **示例**：

    ```python
    async def producer(queue):
        for i in range(5):
            await queue.put(i)
            await asyncio.sleep(0.1)
    
    async def consumer(queue):
        while True:
            item = await queue.get()
            print(f"Consumed: {item}")
            queue.task_done()
    
    async def main():
        queue = asyncio.Queue()
        producers = [producer(queue)]
        consumers = [consumer(queue) for _ in range(2)]
        await asyncio.gather(*producers, *consumers)
        await queue.join()
    ```



### 4.同步原语

下面是一份关于 asyncio 同步原语（synchronization primitives）的总结，包括常用原语的主要方法和使用示例。以下内容主要介绍了常用的 Lock、Event、Condition、Semaphore 以及 BoundedSemaphore。

------

#### 1. asyncio.Lock

**功能：**
 提供一个互斥锁，用于保护共享资源，确保同一时刻只有一个协程进入临界区。

**主要方法：**

- **acquire()**
   异步方法，用于获取锁。如果锁已经被占用，则等待释放后才能获取。
- **release()**
   释放锁。
- **locked()**
   返回锁当前是否被占用的布尔值。

**示例：**

```python
import asyncio

async def task(name, lock):
    print(f"{name} 等待锁...")
    async with lock:
        print(f"{name} 已经获取锁")
        await asyncio.sleep(1)
    print(f"{name} 释放锁")

async def main():
    lock = asyncio.Lock()
    await asyncio.gather(task("任务1", lock), task("任务2", lock))

asyncio.run(main())
```

------

#### 2. asyncio.Event

**功能：**
 事件对象允许一个或多个协程等待某个事件的发生，常用于线程/协程间的通知。

**主要方法：**

- **set()**
   设置事件状态为 True，使所有等待的协程立即唤醒。
- **clear()**
   重置事件状态为 False。
- **is_set()**
   返回当前事件状态是否为 True。
- **wait()**
   当事件状态为 False 时等待，直到被设置为 True。

**示例：**

```python
import asyncio

async def waiter(event):
    print("等待事件发生...")
    await event.wait()
    print("事件发生，继续执行")

async def setter(event):
    await asyncio.sleep(2)
    print("设置事件")
    event.set()

async def main():
    event = asyncio.Event()
    await asyncio.gather(waiter(event), setter(event))

asyncio.run(main())
```

------

#### 3. asyncio.Condition

**功能：**
 条件变量允许多个协程等待某个条件，并在条件满足时通知它们。通常与 Lock 搭配使用。

**主要方法：**

- **acquire()/release()**
   获取和释放与条件变量关联的锁（默认为 asyncio.Lock()）。
- **wait()**
   在条件变量上等待通知。
- **notify(n=1)**
   通知等待条件变量的协程中最多 n 个继续执行。
- **notify_all()**
   通知所有等待条件变量的协程继续执行。

**示例：**

```python
import asyncio

async def consumer(cond):
    async with cond:
        print("消费者等待条件")
        await cond.wait()
        print("消费者收到通知")

async def producer(cond):
    await asyncio.sleep(2)
    async with cond:
        print("生产者准备好，通知消费者")
        cond.notify_all()

async def main():
    cond = asyncio.Condition()
    await asyncio.gather(consumer(cond), producer(cond))

asyncio.run(main())
```

------

#### 4. asyncio.Semaphore 与 BoundedSemaphore

**功能：**
 信号量用于控制同时运行的协程数量。

- **Semaphore**
   允许超过设定的初始值被释放（release）的次数超过 acquire 次数。
- **BoundedSemaphore**
   对信号量的释放次数进行严格限制，避免超出初始值。

**主要方法：**

- **acquire()**
   获取一个信号量许可，如果没有许可则等待。
- **release()**
   释放一个许可。

**示例（Semaphore）：**

```python
import asyncio

async def worker(semaphore, worker_id):
    async with semaphore:
        print(f"工作者 {worker_id} 正在处理任务")
        await asyncio.sleep(1)
        print(f"工作者 {worker_id} 完成任务")

async def main():
    semaphore = asyncio.Semaphore(2)  # 同时允许最多2个协程运行
    tasks = [worker(semaphore, i) for i in range(5)]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

**示例（BoundedSemaphore）：**

```python
import asyncio

async def worker(semaphore, worker_id):
    async with semaphore:
        print(f"工作者 {worker_id} 正在处理任务")
        await asyncio.sleep(1)
        print(f"工作者 {worker_id} 完成任务")

async def main():
    semaphore = asyncio.BoundedSemaphore(2)  # 限制许可不能超过2个
    tasks = [worker(semaphore, i) for i in range(5)]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

------

#### 总结

- **Lock**：用于互斥访问共享资源，确保同一时间只有一个协程进入关键区。
- **Event**：用于通知等待的协程某个事件已经发生，适用于需要等待某个条件触发的场景。
- **Condition**：在复杂场景下配合 Lock 使用，实现等待和通知机制，适用于条件判断的协程同步。
- **Semaphore 与 BoundedSemaphore**：控制并发数量，Semaphore 允许信号量被超过初始值释放，而 BoundedSemaphore 会严格限制许可数量。

以上示例展示了如何在异步编程中使用这些同步原语，以便在协程之间协调任务执行顺序和资源访问。希望这份总结对你有所帮助！



## 常用三方库

### 1.aiohttp

 专为asyncio设计的全功能异步HTTP客户端/服务器库

下面是一份更为详细的 **aiohttp** 学习指南，帮助你深入了解其主要的函数和方法，并提供代码示例及使用场景的说明。

------

#### 1. aiohttp 概述

- **aiohttp** 是基于 asyncio 实现的异步 HTTP 客户端/服务器库，能够高效处理大量并发 I/O 操作。
- 它同时提供了客户端和服务器端两大模块，各自拥有丰富的 API 以满足不同的需求。

------

#### 2. aiohttp 客户端

##### 2.1 创建请求会话

- **ClientSession**：管理所有 HTTP 请求的上下文。推荐在整个应用中复用同一个 `ClientSession` 对象，以充分利用连接池。

```python
import aiohttp
import asyncio

async def fetch(url):
    # 建议在长生命周期中复用 session
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            # 获取响应文本
            text = await response.text()
            return text

async def main():
    content = await fetch("http://example.com")
    print(content)

if __name__ == '__main__':
    asyncio.run(main())
```

##### 2.2 常用请求方法

- **GET、POST、PUT、DELETE、HEAD、OPTIONS**：这些方法均可以通过 `ClientSession` 的对应函数调用。
- **通用请求方法**：`session.request(method, url, ...)` 允许自定义 HTTP 方法。

例如，使用 POST 请求提交 JSON 数据：

```python
async with aiohttp.ClientSession() as session:
    payload = {'key': 'value'}
    async with session.post('http://httpbin.org/post', json=payload) as resp:
        data = await resp.json()
        print(data)
```

##### 2.3 响应处理

- ClientResponse

   对象提供多种方法获取响应数据：

  - `response.text()`：返回响应的文本形式。
  - `response.json()`：解析 JSON 数据。
  - `response.read()`：以字节形式读取完整响应体。

- **状态码与头信息**：可以通过 `response.status` 和 `response.headers` 获取 HTTP 状态码和响应头。

##### 2.4 异常与超时处理

- **异常捕获**：常见的异常包括 `aiohttp.ClientError` 及其子类（如连接错误、解析错误等）。
- **超时**：通过 `aiohttp.ClientTimeout` 对象设定请求超时。

```python
timeout = aiohttp.ClientTimeout(total=10)
async with aiohttp.ClientSession(timeout=timeout) as session:
    try:
        async with session.get('http://example.com') as resp:
            print(await resp.text())
    except aiohttp.ClientError as e:
        print("请求失败:", e)
```

##### 2.5 其他高级功能

- **WebSocket 客户端**：通过 `session.ws_connect(url)` 建立 WebSocket 连接，实现实时数据传输。
- **自定义连接器**：例如使用 `aiohttp.TCPConnector` 设置最大连接数、SSL 验证参数等。

------

#### 3. aiohttp 服务器

##### 3.1 基本构建

- **Application**：aiohttp 服务器的核心对象，通过 `web.Application()` 创建。
- **路由**：利用 `app.router.add_get()`, `add_post()`, `add_route()` 等方法注册请求处理函数。

```python
from aiohttp import web

async def handle(request):
    name = request.rel_url.query.get('name', 'World')
    return web.Response(text=f"Hello, {name}!")

app = web.Application()
app.router.add_get('/', handle)

if __name__ == '__main__':
    web.run_app(app, host='127.0.0.1', port=8080)
```

##### 3.2 请求与响应

- Request 对象

  ：

  - **获取 URL 参数**：`request.rel_url.query` 用于查询字符串，`request.match_info` 用于路由匹配参数。
  - **请求体处理**：`await request.json()`、`await request.post()` 和 `await request.text()` 分别处理 JSON、表单数据和文本。

- Response 对象

  ：

  - 基础响应使用 `web.Response(text="...")`。
  - 针对 JSON 响应，可以使用 `web.json_response()`，自动设置 `Content-Type` 为 `application/json`。

##### 3.3 中间件和信号

- **中间件**：在请求进入具体处理函数前后执行的通用逻辑，如日志、认证、错误捕获等。

```python
@web.middleware
async def middleware_handler(request, handler):
    print("请求开始")
    response = await handler(request)
    print("请求结束")
    return response

app = web.Application(middlewares=[middleware_handler])
```

- **生命周期信号**：可以注册 `on_startup` 和 `on_cleanup` 信号，分别在应用启动和关闭时执行额外操作。

##### 3.4 WebSocket 服务

- **WebSocketResponse**：用于建立 WebSocket 连接，并在连接后进行消息的收发。

```python
async def websocket_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)

    async for msg in ws:
        if msg.type == aiohttp.WSMsgType.TEXT:
            await ws.send_str(f"Echo: {msg.data}")
    return ws

app.router.add_get('/ws', websocket_handler)
```

------

#### 4. 常见工具函数与高级用法

- **连接池与复用**：`ClientSession` 内部自动管理连接池，合理配置可以大幅提升性能。
- **自定义编码与解码**：支持通过自定义 JSON 编解码器、请求数据格式转换等扩展。
- **日志与调试**：内置日志功能，结合 Python 标准库的 logging 模块可以方便地调试和监控请求过程。

------







### 2.aiomysql

### 3.aiofiles













## 代码训练





### 基础（已完成）

| 任务编号 | 任务名称                               | 描述                                                         | 核心要求                                                     |
| -------- | -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 任务 1   | 定义和运行协程                         | 编写一个简单协程 `async_simple()`，在协程中等待 1 秒后打印 "Hello, Asyncio!" | 使用 `await asyncio.sleep(1)` 和 `asyncio.run()` 运行协程    |
| 任务 2   | 多个协程的顺序执行                     | 编写两个异步函数：  - `task_one()`: 打印 "任务 1 开始"，等待 2 秒，再打印 "任务 1 结束"  - `task_two()`: 打印 "任务 2 开始"，等待 1 秒，再打印 "任务 2 结束" | 依次顺序执行这两个任务，观察输出顺序                         |
| 任务 3   | 并发执行多个协程                       | 在任务 2 的基础上，将 `task_one()` 和 `task_two()` 并行运行  | 使用 `asyncio.create_task()` 或 `asyncio.gather()` 实现并发执行 |
| 任务 4   | `asyncio.sleep()` 的应用               | 编写异步函数 `count_down(n)`，每秒打印一次从 n 到 1 的倒计时 | 使用 `await asyncio.sleep(1)` 实现定时等待，并循环打印倒计时数字 |
| 任务 5   | 使用 `asyncio.gather()` 并行执行倒计时 | 修改任务 4 的倒计时函数，同时运行三个不同的倒计时任务：  - `count_down(5)`  - `count_down(3)`  - `count_down(2)` | 使用 `asyncio.gather()` 并发运行多个倒计时任务，观察各倒计时任务的输出顺序 |
| 任务 6   | 任务取消                               | 编写异步任务 `long_running_task()`：每秒打印 "任务进行中..." 共计 10 秒； 在任务运行 3 秒后取消任务，并在取消时打印 "任务被取消" | 使用 `asyncio.create_task()` 创建任务，主协程等待 3 秒后取消任务，并捕获取消异常 |
| 任务 7   | `asyncio.Event` 控制协程执行           | 编写两个协程：  - `worker(event)`: 等待事件触发后打印 "任务执行"  - `controller(event)`: 等待 2 秒后触发事件并打印 "事件已触发" | 使用 `asyncio.Event` 来协调协程，确保 `worker()` 在事件触发后 |





### 进阶

| 任务编号   | 任务名称           | 描述                                                         | 核心要求                                                     |
| ---------- | ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 高级任务 1 | 并发网络请求       | 使用 `aiohttp` 并发抓取多个 URL，处理超时和异常情况          | 使用 `asyncio.gather()` 异步发起请求，结合 `asyncio.wait_for` 实现超时控制及异常捕获 |
| 高级任务 2 | 生产者消费者模型   | 使用 `asyncio.Queue` 模拟生产者生成数据、消费者处理数据      | 多个生产者、消费者并发执行，利用队列传递任务，确保正确的任务调度与同步 |
| 高级任务 3 | 异步文件 I/O       | 使用 `aiofiles` 异步读写大量文件数据                         | 异步文件操作、处理文件并发读写，保证数据完整性及高效 I/O     |
| 高级任务 4 | 协程间通信与同步   | 利用 `asyncio.Event`、`asyncio.Condition` 等机制，实现复杂的协程同步 | 实现多个任务之间的通信和协同工作，如等待全部任务达到某状态后再继续执行 |
| 高级任务 5 | 超时控制与任务取消 | 设置任务超时（例如使用 `asyncio.wait_for`），并在超时后正确取消任务 | 掌握任务取消流程、捕获 `asyncio.CancelledError`，实现安全退出及清理资源 |
| 高级任务 6 | 自定义任务调度器   | 构建一个异步任务管理器，实现动态添加、取消任务，并记录任务状态 | 实现任务注册、调度、状态监控与日志记录，构建类似微调度器的框架 |

