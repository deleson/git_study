## 内置函数

---

### **1.数据类型转换函数**
1. **`int()`**  
   将值转换为整数类型。  
   ```python
   print(int("123"))    # 123（字符串转整数）
   print(int(3.99))     # 3（浮点数截断）
   ```

2. **`float()`**  
   将值转换为浮点数。  
   ```python
   print(float("3.14")) # 3.14
   print(float(5))      # 5.0
   ```

3. **`str()`**  
   将值转换为字符串。  
   ```python
   print(str(100))      # "100"
   print(str([1,2,3]))  # "[1, 2, 3]"
   ```

4. **`list()` / `tuple()` / `set()`**  
   转换序列类型。  
   ```python
   print(list("abc"))   # ['a', 'b', 'c']
   print(tuple([1,2]))  # (1, 2)
   ```

5. **`dict()`**  
   创建字典。  
   ```python
   print(dict(a=1, b=2))  # {'a': 1, 'b': 2}
   ```

---

### **2.数学运算函数**
1. **`abs()`**  
   取绝对值。  
   ```python
   print(abs(-5))        # 5
   ```

2. **`round()`**  
   四舍五入。  
   ```python
   print(round(3.1415, 2))  # 3.14（保留两位小数）
   ```

3. **`divmod()`**  
   返回商和余数。  
   ```python
   print(divmod(10, 3))    # (3, 1) → 10 ÷ 3 = 3 余 1
   ```

4. **`sum()` / `max()` / `min()`**  
   求和、最大值、最小值。  
   ```python
   print(sum([1,2,3]))     # 6
   print(max(4, 5, 2))     # 5
   ```

---

### **3.迭代与序列操作**
1. **`len()`**  
   获取对象长度。  
   ```python
   print(len("hello"))     # 5
   print(len([1,2,3]))     # 3
   ```

2. **`range()`**  
   生成整数序列。  
   ```python
   for i in range(3):      # 0, 1, 2
       print(i)
   ```

3. **`enumerate()`**  
   为可迭代对象添加索引。  
   ```python
   for i, char in enumerate("abc"):
       print(i, char)     # 0 a, 1 b, 2 c
   ```

4. **`zip()`**  
   并行迭代多个序列。  
   ```python
   names = ["Alice", "Bob"]
   ages = [25, 30]
   print(list(zip(names, ages)))  # [('Alice', 25), ('Bob', 30)]
   ```

5. **`sorted()`**  
   返回排序后的新列表。  
   ```python
   print(sorted([3,1,2]))        # [1, 2, 3]
   ```

---

### **4.输入输出函数**
1. **`print()`**  
   输出内容。  
   ```python
   print("Hello", "World", sep="-")  # Hello-World
   ```

2. **`input()`**  
   获取用户输入。  
   ```python
   name = input("Enter your name: ")
   ```

---

### **5.对象与属性操作**
1. **`type()`**  
   查看对象类型。  
   ```python
   print(type(10))         # <class 'int'>
   ```

2. **`isinstance()`**  
   判断对象是否为某类型。  
   ```python
   print(isinstance(5, int))  # True
   ```

3. **`id()`**  
   获取对象内存地址。  
   ```python
   a = 10
   print(id(a))           # 输出内存地址（如 140704542539840）
   ```

4. **`dir()`**  
   查看对象的所有属性和方法。  
   ```python
   print(dir([]))         # 显示列表的所有方法（append, pop等）
   ```

---

### **6.逻辑判断与布尔操作**
1. **`all()` / `any()`**  
   检查可迭代对象是否全为真/存在真。  
   ```python
   print(all([True, 1, "a"]))   # True
   print(any([0, False, ""]))   # False
   ```

2. **`bool()`**  
   转换为布尔值。  
   ```python
   print(bool(0))          # False
   print(bool("text"))     # True
   ```

---

### **7.其他实用函数**
1. **`help()`**  
   查看函数/模块的帮助文档。  
   ```python
   help(print)            # 显示print函数的详细说明
   ```

2. **`open()`**  
   打开文件。  
   ```python
   with open("test.txt", "r") as f:
       content = f.read()
   ```

3. **`eval()` / `exec()`**  
   动态执行字符串代码（慎用）。  
   ```python
   print(eval("2 + 3"))     # 5（计算表达式）
   exec("a = 10")          # 执行赋值语句
   ```

4. **`map()` / `filter()`**  
   映射与过滤。  
   ```python
   # 将列表元素转为平方
   squares = list(map(lambda x: x**2, [1,2,3]))  # [1, 4, 9]
   # 过滤偶数
   evens = list(filter(lambda x: x%2 ==0, [1,2,3])) # [2]
   ```

---

### **8.高级迭代工具**
1. **`iter()` / `next()`**  
   手动控制迭代器。  
   
   ```python
   nums = iter([1,2,3])
   print(next(nums))       # 1
   print(next(nums))       # 2
   ```
   
2. **`reversed()`**  
   反转序列。  
   ```python
   print(list(reversed([1,2,3])))  # [3, 2, 1]
   ```

### 
- **灵活组合**：例如 `sorted(zip(list1, list2))` 对多个列表联合排序。  
- **注意不可变对象**：`sorted()` 返回新列表，原列表不变。  
- **避免滥用 `eval/exec`**：存在安全风险，仅在可信场景使用。  

如果需要进一步解释某个函数的具体用法，可以随时告诉我！






## 标准库函数

以下是 Python 标准库中一些常用模块的详细说明，涵盖核心功能与典型使用场景：

---

### **一、文件与系统操作**
#### **1. `os` 模块**  
- **功能**：与操作系统交互（文件、目录、环境变量等）。  
- **常用函数**：  
  ```python
  import os
  
  os.getcwd()          # 获取当前工作目录
  os.listdir('.')      # 列出当前目录内容
  os.mkdir('new_dir')  # 创建目录
  os.path.join('a', 'b')  # 路径拼接 → 'a/b'
  os.environ.get('PATH')  # 获取环境变量
  ```

#### **2. `shutil` 模块**  
- **功能**：高级文件操作（复制、移动、删除）。  
- **示例**：  
  ```python
  import shutil
  
  shutil.copy('src.txt', 'dst.txt')  # 复制文件
  shutil.rmtree('dir')               # 递归删除目录
  ```

#### **3. `sys` 模块**  
- **功能**：与 Python 解释器交互。  
- **常用功能**：  
  ```python
  import sys
  
  sys.argv          # 获取命令行参数
  sys.exit(1)       # 退出程序并返回状态码
  sys.path.append('/custom/module/path')  # 添加模块搜索路径
  ```

---

### **二、数据处理与序列化**
#### **1. `json` 模块**  
- **功能**：处理 JSON 数据（序列化与反序列化）。  
- **示例**：  
  ```python
  import json
  
  data = {'name': 'Alice', 'age': 30}
  json_str = json.dumps(data)      # 字典转JSON字符串
  data_loaded = json.loads(json_str)  # JSON字符串转字典
  
  # 文件读写
  with open('data.json', 'w') as f:
      json.dump(data, f)
  ```

#### **2. `pickle` 模块**  
- **功能**：Python 对象序列化（二进制格式）。  
- **注意**：仅限 Python 内部使用，不可跨语言。  
- **示例**：  
  ```python
  import pickle
  
  data = [1, 2, 3]
  with open('data.pkl', 'wb') as f:
      pickle.dump(data, f)
  with open('data.pkl', 'rb') as f:
      data_loaded = pickle.load(f)
  ```

#### **3. `csv` 模块**  
- **功能**：读写 CSV 文件。  
- **示例**：  
  ```python
  import csv
  
  # 写入CSV
  with open('data.csv', 'w', newline='') as f:
      writer = csv.writer(f)
      writer.writerow(['Name', 'Age'])
      writer.writerow(['Alice', 30])
  
  # 读取CSV
  with open('data.csv', 'r') as f:
      reader = csv.reader(f)
      for row in reader:
          print(row)
  ```

---

### **三、日期与时间**
#### **1. `datetime` 模块**  
- **功能**：处理日期和时间。  
- **示例**：  
  ```python
  from datetime import datetime, timedelta
  
  now = datetime.now()                # 当前时间
  tomorrow = now + timedelta(days=1)  # 计算未来时间
  formatted = now.strftime('%Y-%m-%d %H:%M:%S')  # 格式化输出 → "2023-10-10 14:30:00"
  ```

#### **2. `time` 模块**  
- **功能**：时间戳、休眠等底层操作。  
- **示例**：  
  ```python
  import time
  
  start = time.time()        # 获取时间戳（秒）
  time.sleep(2)              # 休眠2秒
  print(time.time() - start)  # 计算耗时 → ~2.0
  ```

---

### **四、数学与数字处理**
#### **1. `math` 模块**  
- **功能**：数学运算（三角函数、对数、常数等）。  
- **示例**：  
  ```python
  import math
  
  math.sqrt(16)       # 4.0
  math.sin(math.pi/2) # 1.0
  math.log(100, 10)   # 2.0
  ```

#### **2. `random` 模块**  
- **功能**：生成伪随机数。  
- **示例**：  
  ```python
  import random
  
  random.randint(1, 10)    # 生成1-10的随机整数
  random.choice(['a', 'b', 'c'])  # 随机选择一个元素
  random.shuffle([1,2,3])  # 打乱列表顺序
  ```

---

### **五、网络与互联网**
#### **1. `urllib` 模块**  
- **功能**：HTTP 请求处理（建议优先使用第三方库 `requests`）。  
- **示例**：  
  ```python
  from urllib.request import urlopen
  
  response = urlopen('https://www.python.org')
  html = response.read().decode('utf-8')
  ```

#### **2. `socket` 模块**  
- **功能**：底层网络通信（TCP/UDP）。  
- **示例**（简单TCP服务端）：  
  ```python
  import socket
  
  s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  s.bind(('localhost', 12345))
  s.listen(1)
  conn, addr = s.accept()
  data = conn.recv(1024)
  conn.send(b'Hello from server')
  ```

---

### **六、并发与并行**
#### **1. `threading` 模块**  
- **功能**：多线程编程（受 GIL 限制，适合IO密集型任务）。  
- **示例**：  
  ```python
  import threading
  
  def task():
      print("Thread is running")
  
  t = threading.Thread(target=task)
  t.start()
  t.join()
  ```

#### **2. `multiprocessing` 模块**  
- **功能**：多进程编程（绕过 GIL，适合CPU密集型任务）。  
- **示例**：  
  ```python
  from multiprocessing import Process
  
  def task():
      print("Process is running")
  
  p = Process(target=task)
  p.start()
  p.join()
  ```

---

### **七、调试与开发工具**
#### **1. `logging` 模块**  
- **功能**：记录日志信息。  
- **示例**：  
  ```python
  import logging
  
  logging.basicConfig(level=logging.INFO)
  logging.info('This is an info message')
  ```

#### **2. `pdb` 模块**  
- **功能**：交互式代码调试。  
- **使用方式**：  
  ```python
  import pdb
  
  def func():
      a = 1
      pdb.set_trace()  # 在此处进入调试器
      b = a + 2
      return b
  ```

---

### **八、其他实用模块**
#### **1. `re` 模块**  
- **功能**：正则表达式匹配。  
- **示例**：  
  ```python
  import re
  
  text = "Email: user@example.com"
  match = re.search(r'\b[\w.-]+@[\w.-]+\.\w+\b', text)
  if match:
      print(match.group())  # user@example.com
  ```

#### **2. `argparse` 模块**  
- **功能**：解析命令行参数。  
- **示例**：  
  ```python
  import argparse
  
  parser = argparse.ArgumentParser(description='Process some integers.')
  parser.add_argument('--input', help='Input file path')
  args = parser.parse_args()
  print(args.input)
  ```

### 
- **优先掌握核心模块**：如 `os`, `sys`, `json`, `datetime`, `logging`。  

- **根据场景选择工具**：  
  - 文件操作 → `os`, `shutil`  
  - 网络请求 → `urllib`（或第三方 `requests`）  
  - 并发 → `threading`, `multiprocessing`  
  
  

   

  


 ## 第三方模块

以下是 Python 中常见且应用广泛的第三方模块分类及详细介绍，涵盖数据分析、Web开发、机器学习、网络请求等多个领域：

---

### **一、数据处理与分析**
#### **1. `NumPy`**  
- **功能**：高性能多维数组计算，数学运算的基石。  
- **特点**：支持向量化操作，比原生列表快数百倍。  
- **示例**：  
  ```python
  import numpy as np
  arr = np.array([[1, 2], [3, 4]])
  print(arr.sum(axis=1))  # 每行求和 → [3 7]
  ```

#### **2. `Pandas`**  
- **功能**：数据表格处理（类似Excel），支持数据清洗、合并、统计。  
- **核心对象**：`DataFrame`（二维表）、`Series`（单列数据）。  
- **示例**：  
  ```python
  import pandas as pd
  df = pd.read_csv('data.csv')
  print(df.head())  # 查看前5行数据
  df.groupby('category')['sales'].sum()  # 按类别汇总销售额
  ```

#### **3. `SciPy`**  
- **功能**：科学计算（积分、优化、信号处理等）。  
- **示例**：  
  ```python
  from scipy.integrate import quad
  result, error = quad(lambda x: x**2, 0, 1)  # 计算 ∫x²dx 在 [0,1] 的积分 → 1/3
  ```

---

### **二、Web 开发**
#### **1. `Flask`**  
- **功能**：轻量级 Web 框架，适合小型应用和 API。  
- **示例**：  
  ```python
  from flask import Flask
  app = Flask(__name__)
  
  @app.route('/')
  def home():
      return 'Hello World!'
  
  if __name__ == '__main__':
      app.run(debug=True)
  ```

#### **2. `Django`**  
- **功能**：全栈 Web 框架，内置 ORM、模板引擎、用户认证。  
- **特点**：适合大型项目（如电商平台、内容管理系统）。  
- **示例**：  
  ```python
  # models.py（定义数据库模型）
  from django.db import models
  class Product(models.Model):
      name = models.CharField(max_length=100)
      price = models.FloatField()
  ```

---

### **三、机器学习与人工智能**
#### **1. `scikit-learn`**  
- **功能**：传统机器学习算法（分类、回归、聚类等）。  
- **示例**：  
  ```python
  from sklearn.linear_model import LinearRegression
  model = LinearRegression()
  model.fit(X_train, y_train)  # 训练模型
  predictions = model.predict(X_test)
  ```

#### **2. `TensorFlow` / `PyTorch`**  
- **功能**：深度学习框架，支持神经网络构建与训练。  
- **TensorFlow 示例**：  
  ```python
  import tensorflow as tf
  model = tf.keras.Sequential([
      tf.keras.layers.Dense(10, activation='relu'),
      tf.keras.layers.Dense(1)
  ])
  model.compile(optimizer='adam', loss='mse')
  model.fit(X_train, y_train, epochs=10)
  ```

---

### **四、网络请求与爬虫**
#### **1. `Requests`**  
- **功能**：发送 HTTP 请求（GET/POST），处理响应。  
- **示例**：  
  ```python
  import requests
  response = requests.get('https://api.github.com')
  print(response.json())  # 获取 JSON 格式的响应数据
  ```

#### **2. `BeautifulSoup`**  
- **功能**：解析 HTML/XML 文档，提取数据。  
- **示例**：  
  ```python
  from bs4 import BeautifulSoup
  html = '<html><body><h1>标题</h1></body></html>'
  soup = BeautifulSoup(html, 'html.parser')
  print(soup.h1.text)  # 输出 "标题"
  ```

#### **3. `Scrapy`**  
- **功能**：全功能爬虫框架，支持分布式爬取。  
- **示例**：  
  ```python
  import scrapy
  class MySpider(scrapy.Spider):
      name = 'example'
      start_urls = ['http://example.com']
  
      def parse(self, response):
          yield {'title': response.css('h1::text').get()}
  ```

---

### **五、图形与可视化**
#### **1. `Matplotlib`**  
- **功能**：绘制静态图表（折线图、柱状图、散点图等）。  
- **示例**：  
  ```python
  import matplotlib.pyplot as plt
  plt.plot([1, 2, 3], [4, 5, 1])
  plt.xlabel('X轴')
  plt.ylabel('Y轴')
  plt.show()
  ```

#### **2. `Seaborn`**  
- **功能**：基于 Matplotlib 的高级统计图表库，样式更美观。  
- **示例**：  
  ```python
  import seaborn as sns
  tips = sns.load_dataset('tips')
  sns.boxplot(x='day', y='total_bill', data=tips)
  ```

#### **3. `Plotly`**  
- **功能**：交互式可视化（支持网页动态图表）。  
- **示例**：  
  ```python
  import plotly.express as px
  df = px.data.iris()
  fig = px.scatter(df, x='sepal_width', y='sepal_length', color='species')
  fig.show()
  ```

---

### **六、异步编程**
#### **1. `aiohttp`**  
- **功能**：异步 HTTP 客户端/服务端，提升高并发性能。  
- **示例**：  
  ```python
  import aiohttp
  import asyncio
  
  async def fetch(url):
      async with aiohttp.ClientSession() as session:
          async with session.get(url) as response:
              return await response.text()
  
  html = asyncio.run(fetch('https://python.org'))
  ```

---

### **七、数据库交互**
#### **1. `SQLAlchemy`**  
- **功能**：ORM（对象关系映射），支持多种数据库（MySQL、PostgreSQL等）。  
- **示例**：  
  ```python
  from sqlalchemy import create_engine, Column, Integer, String
  from sqlalchemy.orm import declarative_base
  
  Base = declarative_base()
  class User(Base):
      __tablename__ = 'users'
      id = Column(Integer, primary_key=True)
      name = Column(String)
  
  engine = create_engine('sqlite:///mydb.db')
  Base.metadata.create_all(engine)
  ```

---

### **八、其他实用工具**
#### **1. `tqdm`**  
- **功能**：为循环添加进度条。  
- **示例**：  
  ```python
  from tqdm import tqdm
  for i in tqdm(range(10000)):  # 显示进度条
      pass
  ```

#### **2. `pytest`**  
- **功能**：单元测试框架，简化测试编写与执行。  
- **示例**：  
  ```python
  # test_sample.py
  def add(a, b):
      return a + b
  
  def test_add():
      assert add(2, 3) == 5
  ```
  ```bash
  pytest test_sample.py  # 运行测试
  ```


- **数据处理**：优先掌握 `Pandas` 和 `NumPy`。  
- **Web开发**：小型项目用 `Flask`，大型项目用 `Django`。  
- **机器学习**：传统算法用 `scikit-learn`，深度学习用 `TensorFlow/PyTorch`。  
- **可视化**：快速绘图用 `Matplotlib`，交互式用 `Plotly`。  

如果需要针对某个模块的深入教程，可以随时告诉我！