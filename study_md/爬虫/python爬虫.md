# 0.介绍

本课程是基于b站课程为主，结合gpt回答

课程名：Python爬虫全集：爬虫+js逆向+app逆向

下面以课程笔记为主，进行学习



---

> ### **现代常用OCR原理详解**
>
> OCR（光学字符识别）技术经历了从传统图像处理到深度学习的演变，现代OCR系统主要依赖深度学习模型实现高精度识别。以下是当前主流OCR技术的核心原理及实现流程：
>
> ---
>
> #### **一、OCR核心流程**
> 现代OCR系统通常分为四个关键阶段，形成一个完整的处理链条：
>
> 1. **图像预处理** → 2. **文本检测** → 3. **文本识别** → 4. **后处理优化**
>
> ![OCR流程图](https://miro.medium.com/max/720/1*0KqjZvW8ZvW8ZvW8ZvW8ZQ.png)
>
> ---
>
> #### **二、图像预处理**
> **目标**：提升图像质量，为后续步骤提供清晰输入
>
> ##### **关键技术**：
> 1. **几何校正**
>    - 透视变换：矫正倾斜拍摄的文档（如手机拍摄的歪斜发票）
>    - 示例代码：
>      ```python
>      import cv2
>      # 通过检测文档边缘自动校正
>      gray = cv2.cvtColor(image, cv2.CLOLOR_BGR2GRAY)
>      edges = cv2.Canny(gray, 50, 150)
>      contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
>      ```
>
> 2. **图像增强**
>    - 自适应二值化（Sauvola算法）：动态调整阈值处理阴影
>    - 超分辨率重建：使用ESRGAN模型提升低清图像质量
>
> ---
>
> #### **三、文本检测**
> **目标**：定位图像中的文字区域（单词/文本行级别）
>
> ##### **主流算法**：
> 1. **CTPN（2016）**
>    - 基于Faster R-CNN改进，将文本视为序列化小框（anchor）
>    - 特点：擅长处理水平文本，对长文本行检测效果好
>
> 2. **EAST（2017）**
>    - 全卷积网络直接预测文本的旋转矩形框
>    - 优点：速度快（FPS>13 on GPU），支持多方向文本
>
> 3. **DBNet（2020）**
>    - 提出可微分二值化（Differentiable Binarization）
>    - 突破：端到端优化检测边界，小文字检测精度提升30%
>
> ![文本检测效果对比](https://ai-studio-static-online.cdn.bcebos.com/4d5e5c5d5a5e4c5a8d5e5c5d5a5e4c5a)
>
> ---
>
> #### **四、文本识别**
> **目标**：将检测到的文本区域转换为字符序列
>
> ##### **经典架构**：
> 1. **CRNN（CNN+RNN+CTC）**
>    - **流程**：
>      1. CNN提取视觉特征（如ResNet34）
>      2. Bi-LSTM捕捉上下文信息
>      3. CTC解码对齐不定长序列
>    - 示例代码：
>      ```python
>      model = CRNN(num_classes=charset_size)
>      output = model(image_patch)  # 输出字符概率序列
>      ```
>
> 2. **Attention-based模型**
>    - 使用Transformer替代RNN：
>      - Vision Transformer提取图像特征
>      - Decoder通过注意力机制生成字符序列
>    - 优势：更好处理弯曲文本（如圆形LOGO文字）
>
> ##### **前沿模型**：
> - **TrOCR（2021）**：基于Transformer的预训练模型，在印刷体识别准确率达99.1%
> - **PARSeq（2022）**：并行解码提升识别速度3倍
>
> ---
>
> #### **五、后处理优化**
> **目标**：提升识别结果的语义正确性
>
> ##### **关键技术**：
> 1. **语言模型纠错**
>    - 使用BERT模型检测上下文矛盾（如将"京备130221"修正为"京ICP备130221"）
>    
> 2. **规则引擎**
>    - 身份证号校验（最后一位校验码验证）
>    - 日期格式规范化（"2023/8/1" → "2023-08-01"）
>
> ---
>
> #### **六、端到端OCR系统**
> **目标**：检测与识别联合优化，提升整体效率
>
> ##### **典型方案**：
> - **FOTS（2018）**：共享CNN特征，检测与识别并行处理
> - **ABCNet（2020）**：贝塞尔曲线描述弯曲文本，实现端到端训练
>
> ![端到端OCR架构](https://pic3.zhimg.com/80/v2-5e5e5c5d5a5e4c5a8d5e5c5d5a5e4c5a_720w.jpg)
>
> ---
>
> #### **七、特殊场景解决方案**
> 1. **手写体识别**
>    - 使用IAM手写数据集训练
>    - 引入书写风格迁移（如将印刷体转换为手写风格增强数据）
>
> 2. **验证码识别（如ddddocr）**
>    - 针对性设计：
>      - 滑动验证码：使用Siamese网络匹配缺口位置
>      - 点选验证码：YOLOv5检测图标类别
>    - 对抗干扰：
>      - 添加随机噪声层（模拟验证码干扰线）
>      - 多模型投票机制提升鲁棒性
>
> ---
>
> #### **八、工具库实现原理**
> | 工具库        | 检测模型       | 识别模型  | 技术特点                 |
> | ------------- | -------------- | --------- | ------------------------ |
> | **Tesseract** | 传统连通域分析 | LSTM+CTC  | 依赖大量语言数据文件     |
> | **PaddleOCR** | DBNet          | CRNN/SVTR | 支持800+语言，模型小型化 |
> | **EasyOCR**   | CRAFT          | CRNN      | 80+语言开箱即用          |
> | **ddddocr**   | YOLOv5定制     | 轻量化CNN | 专攻验证码，模型<10MB    |
>
> ---
>
> #### **九、性能优化技巧**
> 1. **模型量化**：
>    - FP32 → INT8量化，模型体积缩小4倍，速度提升2倍
>    ```python
>    from onnxruntime.quantization import quantize_dynamic
>    quantize_dynamic("model.onnx", "model_quant.onnx")
>    ```
>
> 2. **硬件加速**：
>    - 使用TensorRT部署，GPU推理速度提升3-5倍
>    - NPU专用优化（如华为HiAI引擎）
>
> ---
>
> #### **十、未来发展方向**
> 1. **多模态融合**：结合语音、语义理解实现场景认知
> 2. **无监督学习**：减少对标注数据的依赖
> 3. **3D OCR**：识别立体物体表面文字（如易拉罐包装）
> 4. **小样本学习**：Meta Learning实现快速领域适配
>
> 通过上述原理的深度解析，可看到现代OCR已从简单的模式匹配发展为复杂的感知-决策系统，在实际应用中需根据场景特点选择合适的技术方案。



---

> ### **ddddocr 详细介绍**
>
> ddddocr 是一款专注于验证码识别的高效 OCR 工具，由国内开发者基于深度学习技术开发，特别针对复杂验证码（如滑动验证码、点选验证码、文字扭曲验证码等）进行了优化。以下是其核心内容解析：
>
> ---
>
> #### **一、历史背景与开发动机**
> 1. **验证码攻防演化**：
>    - **早期验证码**：简单数字/字母组合（如4位数字），传统OCR（如Tesseract）可破解。
>    - **进阶防御**：引入噪声、扭曲、粘连字符（如Google reCAPTCHA v1），传统OCR失效。
>    - **现代验证码**：行为验证（滑动拼图、点选图标）、深度学习模型识别（如Geetest）。
>
> 2. **ddddocr的诞生**：
>    - **痛点解决**：传统OCR库（如Tesseract）对复杂验证码识别率低，定制成本高。
>    - **技术趋势**：基于CNN（卷积神经网络）的端到端训练，直接学习验证码特征。
>    - **开源需求**：替代商业OCR服务（如打码平台），降低开发者成本。
>
> ---
>
> #### **二、同类工具对比与竞争优势**
>
> | 工具/库     | 核心优势                 | 局限性                       | 适用场景         |
> | ----------- | ------------------------ | ---------------------------- | ---------------- |
> | **ddddocr** | 专攻验证码，支持多种类型 | 中文文档较少，社区较小       | 复杂验证码识别   |
> | Tesseract   | 历史悠久，多语言支持     | 需大量预处理，验证码识别率低 | 清晰文本提取     |
> | EasyOCR     | 多语言模型，开箱即用     | 体积大（依赖CUDA），速度较慢 | 多语言文档OCR    |
> | PaddleOCR   | 工业级精度，支持版面分析 | 配置复杂，资源占用高         | 企业级文档处理   |
> | CnOCR       | 轻量级中文OCR            | 验证码支持有限               | 简单中文文本识别 |
>
> **ddddocr 核心优势**：
> 1. **高精度验证码识别**：
>    - 内置预训练模型，支持 **滑块缺口定位**、**图标点选坐标识别**、**扭曲文字识别**。
>    - 对干扰线、噪点、字符粘连等场景鲁棒性强。
> 2. **轻量高效**：
>    - 模型体积小（约10MB），CPU即可快速推理（单次识别约50ms）。
>    - 无复杂依赖，仅需 `onnxruntime` 作为推理引擎。
> 3. **简单易用**：
>    - 无需训练，API设计简洁，5行代码完成验证码识别。
>    - 支持多输入格式（文件路径、Bytes、OpenCV图像、PIL图像）。
>
> ---
>
> #### **三、基础使用教程**
>
> ##### **1. 安装**
> ```bash
> pip install ddddocr
> ```
>
> ##### **2. 核心API**
> ```python
> import ddddocr
> 
> # 初始化识别器（自动加载模型）
> ocr = ddddocr.DdddOcr()
> 
> # 图像识别（返回文本）
> result = ocr.classification(image_bytes)
> 
> # 滑块缺口识别（返回缺口坐标）
> detector = ddddocr.DdddOcr(det=True)  # 启用检测模式
> position = detector.slide_match(target_bytes, background_bytes)
> ```
>
> ##### **3. 使用示例**
> **场景1：识别字母数字验证码**
> ```python
> import ddddocr
> from PIL import Image
> 
> # 加载验证码图片
> image = Image.open("captcha.png").convert("RGB")
> image_bytes = image.tobytes()
> 
> # 识别
> ocr = ddddocr.DdddOcr()
> text = ocr.classification(image_bytes)
> print(f"识别结果: {text}")  # 输出: "3A4K"
> ```
>
> **场景2：处理滑动验证码**
> ```python
> # 加载滑块图和背景图
> with open("target.png", "rb") as f:
>     target = f.read()
> with open("background.png", "rb") as f:
>     bg = f.read()
> 
> # 计算滑动距离
> detector = ddddocr.DdddOcr(det=True)
> distance = detector.slide_match(target, bg)
> print(f"需滑动距离: {distance['target'][0]}px")  # 输出: 183
> ```
>
> ##### **4. 高级参数**
> ```python
> ocr = ddddocr.DdddOcr(
>     use_gpu=False,       # 是否启用GPU加速（需安装CUDA）
>     char_set="num"       # 字符集限制（可选: 'num', 'lower', 'upper', 'ch'）
>     threshold=0.6        # 置信度阈值（低于此值返回空）
> )
> ```
>
> ---
>
> #### **四、实战技巧与优化**
> 1. **图像预处理**：
>    - 二值化处理增强对比度：
>      ```python
>      from PIL import ImageEnhance
>      image = ImageEnhance.Contrast(image).enhance(2.0)
>      ```
>    - 去噪（中值滤波）：
>      ```python
>      import cv2
>      image = cv2.medianBlur(image, 3)
>      ```
>
> 2. **多模型协同**：
>    - 组合 `ddddocr` 与传统图像处理（如OpenCV轮廓检测）：
>      ```python
>      contours, _ = cv2.findContours(image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
>      # 提取最大连通区域后再识别
>      ```
>
> 3. **动态加载模型**：
>    - 针对特定验证码类型加载专用模型：
>      ```python
>      ocr = ddddocr.DdddOcr(import_onnx_path="custom_model.onnx")
>      ```
>
> ---
>
> #### **五、典型应用场景**
> 1. **自动化测试**：绕过登录页面的验证码。
> 2. **数据爬虫**：破解电商平台反爬机制。
> 3. **批量注册**：解决账号注册时的验证码障碍。
> 4. **安全研究**：验证码安全性评估。
>
> ---
>
> #### **六、注意事项**
> 1. **法律合规**：仅用于合法用途，避免侵犯网站权益。
> 2. **对抗升级**：部分网站会频繁更新验证码策略，需定期更新模型。
> 3. **性能监控**：大量识别时监控内存占用（建议每个进程独立实例化 `DdddOcr`）。
>
> 通过以上介绍，ddddocr 凭借其轻量、高精度的特性，成为验证码识别领域的利器，尤其适合需要快速集成且对计算资源敏感的场景。



<br>

# 1.爬虫必备知识

## 1.1 爬虫入门

什么是爬虫？

> 爬虫（Web Crawler），也称为网络爬虫或蜘蛛，是一种自动访问互联网并提取信息的程序。它们按照一定的规则，从一个网页开始，访问该网页上的链接，再逐步抓取新的网页，最终获取大量的数据。

<br>

爬虫的本质：

1. 分析网站正常操作时发送的请求
2. 用代码模拟请求，实现同样的功能

<br>

请求分析（非前后端分离）

浏览器进行请求的内容一般包含以下东西（通过浏览器的检查可以观察到）

- URL地址
- 请求头request header（user-agent等）



请求响应（非前后端分离）

对浏览器的响应一般是

- 响应体：一般是html文本
- 响应头

<br>

浏览器的请求头和响应头的一些参数内容，和python爬虫要注意的地方

> 当然可以！浏览器的请求头和响应头包含了许多重要的信息，通常用来控制和描述请求和响应的行为。下面是一些常见的请求头和响应头参数，以及在使用 Python 爬虫时需要注意的地方。
>
> ### 1. 请求头（Request Headers）
>
> 请求头是在向服务器发送请求时包含的一系列键值对，以下是一些常见的请求头参数：
>
> - **User-Agent**：指示发送请求的客户端类型，浏览器会在请求头中包含这个参数。例如，它可以告诉服务器请求来自 Chrome 浏览器、Firefox 浏览器等。
> - **Accept**：表示客户端能够处理的内容类型（如 `text/html`, `application/json`, 等）。服务器根据这个字段决定返回什么类型的内容。
> - **Accept-Language**：指示客户端能够处理的自然语言（如 `en-US`, `zh-CN` 等），服务器可能会根据此返回特定语言的内容。
> - **Authorization**：用于在请求中包含身份验证信息，例如 Bearer Token 或 Basic Auth。
> - **Referer**：指示请求来源的 URL，服务器可以根据这个字段了解请求是从哪个页面链接而来的。
> - **Cookie**：包含浏览器中存储的 Cookie 信息，通常用于会话管理和用户身份标识。
>
> ### 2. 响应头（Response Headers）
>
> 响应头是在服务器返回请求时，附加在 HTTP 响应中的信息，常见的响应头参数包括：
>
> - **Content-Type**：指示响应体的内容类型（如 `text/html`, `application/json`, `image/png` 等），告诉浏览器如何处理返回的内容。
> - **Content-Length**：表示响应体的字节长度，浏览器通过这个信息了解响应体的大小。
> - **Set-Cookie**：用于向浏览器发送 Cookie，在后续请求中浏览器会携带这些 Cookie。
> - **Cache-Control**：指示浏览器如何缓存响应（如 `no-store`, `max-age=3600`，等），控制网页的缓存策略。
> - **Location**：在重定向响应中，指示客户端应跳转到的新 URL。
>
> ### 3. Python 爬虫注意事项
>
> 当你使用 Python 爬虫（例如使用 `requests` 库）抓取数据时，有几个注意事项：
>
> - **设置 User-Agent**：许多服务器会根据 User-Agent 来判断请求是否来自正常的浏览器，设置一个合适的 User-Agent 可以减少被阻止的概率。例如：
>
>   ```python
>   headers = {
>       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
>   }
>   response = requests.get('https://example.com', headers=headers)
>   ```
>
> - **处理 Cookies**：如果网站使用 Cookies 进行会话管理，你可以使用 `requests.Session()` 来自动处理 Cookies。
>
> - **尊重 `robots.txt`**：在抓取网站前，查看网站的 `robots.txt` 文件，尊重网站的爬虫规则。
>
> - **遵循请求频率**：为了避免向服务器发起过多请求而导致被封禁，应该在请求之间设置适当的延时（如使用 `time.sleep()`）。
>
> - **处理异常**：在进行网络请求时，建议处理网络异常（如超时、连接错误等），以提高爬虫的稳定性。
>
> ### 示例代码
>
> 以下是一个简单的爬虫示例：
>
> ```python
> import requests
> import time
> 
> url = 'https://example.com'
> headers = {
>     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
> }
> 
> try:
>     response = requests.get(url, headers=headers)
>     response.raise_for_status()  # 检查请求是否成功
>     print(response.text)  # 处理返回的 HTML 内容
> except requests.exceptions.RequestException as e:
>     print(f'请求失败: {e}')
> 
> # 设置请求间隔
> time.sleep(1)
> ```
>
> 

简单抓包分析

不使用专门的抓包工具，而是简单的f12进行

获取豆瓣高分电影（get请求）

- 请求方式：get

- 请求：https://movie.douban.com/j/search_subjects?type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&page_limit=50&page_start=0

  - 请求地址 https://movie.douban.com/j/search_subjects
  - 请求参数
    - type=movie
    - tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86
    - page_limit=50
    - page_start=0

- 请求头：user-agent:

  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36



<br>

抽屉新热榜（post请求）

- 请求方式：post

- 请求地址：https://dig.ichouti.cn/login

- 请求体：

  - password=xx

  - jid=xxx

    ...

- 请求头：user-agent:

  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36

<br>



什么是抓包分析？

> 抓包分析是指通过网络抓包工具捕获和分析网络数据包的过程。这种技术常用于调试、性能监控、安全分析和网络流量分析等多个领域。以下是抓包分析的详细解释：
>
> ### 什么是抓包分析？
>
> 1. **抓包**：
>    - **抓包**指的是使用特定的软件或工具捕获网络传输中的数据包。数据包是通过网络传输的基本单位，包含了源地址、目标地址、协议类型、数据内容等信息。
>    - 常用的抓包工具包括 Wireshark、Fiddler、Charles Proxy、Postman、Burp Suite 等。
> 2. **分析**：
>    - 一旦数据包被捕获，抓包工具会提供一个用户界面，允许用户查看各个数据包的详细信息，包括请求和响应的头信息、Payload、数据格式等。
>    - 通过分析这些信息，用户可以了解应用程序的网络行为，识别问题和优化传输。
>
> ### 抓包分析的常见用途
>
> 1. **调试和故障排除**：
>    - 开发者可以使用抓包分析来调试应用程序与服务器之间的通信，查找请求失败的原因，检测数据传输异常。
> 2. **性能监控**：
>    - 通过监控网络请求和响应，分析响应时间、网络延迟等性能指标，帮助团队优化应用的性能。
> 3. **安全分析**：
>    - 安全研究人员常用抓包分析来识别网络中的潜在安全漏洞和攻击，检查用户的敏感数据是否在网络中以明文形式传输。
> 4. **数据提取**：
>    - 抓包技术也可用于从网页或 API 中提取特定数据，例如抓取公开的网络数据。
>
> ### 抓包分析的步骤
>
> 1. **选择工具**：选择适合的抓包工具，并安装或启动该工具。
> 2. **捕获数据**：
>    - 配置工具以捕获需要分析的网络流量。通常可以选择捕获全部流量、特定应用的流量，或通过设置代理来捕获特定请求。
> 3. **观察和过滤**：
>    - 实时观察捕获到的网络流量，并根据需要进行过滤（例如，根据 URL、方法（GET/POST）、响应代码等过滤）。
> 4. **分析数据包**：
>    - 深入分析所捕获的数据包，查看请求和响应的各项信息，包括头信息、编码格式、Payload、返回的状态等。
> 5. **生成报告**：
>    - 在分析完成后，可以生成相应的报告，记录发现的问题和提供解决方案。
>
> ### 注意事项
>
> - **合法性和道德性**：
>   - 在进行抓包分析时，必须确保遵循法律和道德规范，获得合法授权，尤其是当分析涉及他人的网络流量时。
> - **数据隐私**：
>   - 小心处理抓包过程中捕获的敏感数据，避免在不安全的环境中泄露用户隐私信息。
>
> 抓包分析是一种强大的工具，它为开发者、安全专家和运维人员提供了深刻的洞察力，从而提升软件和服务的质量。如果你有具体的问题或需要进一步的信息，请随时问我！



<br>

requests请求模拟

可以通过requests来模拟网络请求

详细代码如下：

get请求

```python
import requests

res = requests.get(
    url="https://movie.douban.com/j/search_subjects?type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&page_limit=50&page_start=0",
    headers={
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    }
)

print(res.text)  # 响应体
print(res.headers)  # 响应头
 
```

注意：上述get请求，如果服务器端有进行检测，那么就不会获取正确的响应内容

post请求

```python
res = requests.post(
    url="https://dig.ichouti.cn/login",
    data={
      "password":"123",
        "jid":"shit"
    },
    headers={
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    }
)

print(res.text)  # 响应体
print(res.headers)  # 响应头
```

可以看到post请求的请求体内容是用data来发送。

### 经典案例

#### 花瓣网

https://huaban.com/

网址请求：

- get请求

- 请求地址：https://huaban.com/v3/search/file?text=%E6%89%B3%E6%9C%BA%E7%A4%BE&sort=all&limit=40&page=1&position=search_pin&fields=pins:PIN%7Ctotal,facets,split_words,relations,rec_topic_material,topics

- 请求头：

  user-agent:

  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36

请求模拟

```python
import requests
import json

res = requests.get(
    url="https://huaban.com/v3/search/file?text=%E6%89%B3%E6%9C%BA%E7%A4%BE&sort=all&limit=40&page=1&position=search_pin&fields=pins:PIN%7Ctotal,facets,split_words,relations,rec_topic_material,topics",
    headers={
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    }
)


#print(res.text)

dict_json = json.loads(res.text)
pin_list = dict_json["pins"]
for item in pin_list:
    print(item["raw_text"])
```



<br>

#### 豆瓣电影

https://movie.douban.com

网址请求：

- get请求

- 请求地址：https://movie.douban.com/j/search_subjects?type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&page_limit=50&page_start=0

- 请求头：

  user-agent:

  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36

请求模拟：

```python
import requests
import json
import os

res = requests.get(
    url="https://movie.douban.com/j/search_subjects?type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&page_limit=50&page_start=0",
    headers={
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    }
)

# 设置保存图片的文件夹路径
folder_path = 'images'

# 确保文件夹存在
os.makedirs(folder_path, exist_ok=True)

dict_data = json.loads(res.text)
subjects_list = dict_data["subjects"]
for index,item in enumerate(subjects_list):
    image_url = item["cover"]
    # print(image_url)
    response = requests.get(image_url)
    if response.status_code == 200:
        # 使用二进制写入模式保存图片，使用索引命名文件
        filename = f'{item["title"]}_{item["rate"]}.jpg'
        filepath = os.path.join(folder_path,filename)  # 构建完整的文件路径
        with open(filepath, 'wb') as f:
            f.write(response.content)
        print(f"图片 {filename} 下载成功！")
    else:
        print(f"图片 {image_url} 下载失败，状态码: {response.status_code}")

print()
```

<br>

#### 腾讯课堂

python的通过requests进行post请求的时候的data参数和json参数有什么区别？

> 在使用 Python 的 `requests` 库进行 POST 请求时，`data` 和 `json` 参数用于发送不同类型的数据请求。这两者的主要区别如下：
>
> ### 1. `data` 参数
>
> - **表单数据**：`data` 参数通常用于发送表单编码的数据（即 `application/x-www-form-urlencoded`）。这意味着它会以表单的形式将数据编码，并在请求体中发送。
> - **字典或字符串**：您可以将字典、列表或字符串传递给 `data` 参数。如果是字典，它会被转化为标准的 URL 编码格式。
> - **用途**：适用于需要模拟表单提交的场景，比如表单登录或者其他需要提交表单数据的 API。
>
> **示例**：
>
> ```python
> import requests
> 
> url = 'https://httpbin.org/post'
> data = {'key1': 'value1', 'key2': 'value2'}
> response = requests.post(url, data=data)
> print(response.json())
> ```
>
> ### 2. `json` 参数
>
> - **JSON 数据**：`json` 参数用于发送 JSON 格式的数据（即 `application/json`）。此时，字典会被自动转换为 JSON 串，并与适当的头信息一起发送。
> - **字典**：通常只接受字典类型的参数。使用 `json` 参数会将其序列化为 JSON 格式进行发送。
> - **用途**：适用于需要发送 JSON 数据的 API 请求，比如 RESTful API。
>
> **示例**：
>
> ```python
> import requests
> 
> url = 'https://httpbin.org/post'
> json_data = {'key1': 'value1', 'key2': 'value2'}
> response = requests.post(url, json=json_data)
> print(response.json())
> ```
>
> ### 总结
>
> - 使用 `data` 参数发送表单数据，通常是键值对的 URL 编码格式。
> - 使用 `json` 参数发送 JSON 格式数据，自动设置 Content-Type 为 `application/json`。
>
> 在选择使用哪一个参数时，应根据您的 API 需求确定，例如：
>
> - 如果 API 需要 JSON 数据，则使用 `json`。
> - 如果 API 需要表单数据，则使用 `data`。

上述内容会影响模拟发送的请求体

```python
requests.post(
	url="...",
    data={}
)

requests.post(
	url="...",
    json={}
)
```





<br>

```python
requests.post(
	url="...",
    json={},
    header={
        User-Agent:"",
        Referer:"",
    }
)
```



这个案例告诉我们除了user-agent验证，还有一种常见的验证Refer

Refer是记录了上一次的请求，因此爬虫的时候，需要模拟这个部分

<br>

### 总结

爬虫的本质是：请求分析，模拟请求

学习了requests模块的请求模拟

- get请求
- post请求

上述的两个请求模拟都要明确url，而post请求需要提高请求体内容，而同时还有两个常见的后端校验是否正确请求的请求头参数

post请求体

- data
- json

两个经典请求头校验

- User-Agent
- Referer

<br>

## 1.2 requests模块常见操作

### URL参数

无论是get、post请求，在请求路径上都可能存在参数（即查询参数）

请求可以使用&连接，也可以使用params={}

实现效果相同，只是params参数可以直接使用中文，而不用转义

<br>

### 请求体格式

在post请求中，一般有两种请求体格式

- form表单
- json

两者的请求头不一样，request模拟的请求参数不一样

form表单的data=的值可以使用字符串，也可以使用字典{}

json的值，可以使用json=或data=json.dumps({...})，后者必须手动添加content-type



<br>

### Cookie

cookie是浏览器存储的键值对，一般用于保存用户凭证

- 浏览器向后端发送请求时，将从后端得到用户凭证并保存到浏览器的cookie中
- 浏览器再次访问相同后端时，自动携带cookie

通过抓包，当首次访问的时候，后端返回的响应体会有set-cookie

此时请求的请求头中会有cookie参数

<br>

cookie在模拟请求过程中需要读取和发送

读取返回的cookie

```python
res = requests.get(
		url="..."
)

cookie_dict = res.cookie.get_dict() #将cookie转变成字典形式
```

发送请求携带的cookie（两种方式，字典或字符串）

```python
header = {
    "cookie":"..."
}

或

cookie = {
    
}
```

读取cookie一种，发送cookie两种

<br>

以下是对b站个人首页信息的案例

```python
import requests

res = requests.get(
    url="https://api.bilibili.com/x/member/web/account?web_location=333.33",
    headers={
        "Cookie":"buvid_fp_plain=undefined; CURRENT_BLACKGAP=0; header_theme_version=CLOSE; buvid4=63C62017-1FF0-F7AF-B6D3-7213A772C9AD53193-023011011-fRzhfbQf%2FR5eTCLxQuG%2F3w%3D%3D; enable_web_push=DISABLE; is-2022-channel=1; FEED_LIVE_VERSION=V_WATCHLATER_PIP_WINDOW3; LIVE_BUVID=AUTO5717174363946050; _uuid=2DBCE3CB-A297-3893-B9C7-F1B2AA6A62D1058423infoc; fingerprint=74dd0defa8bf168d84422fd3d04c626d; hit-dyn-v2=1; buvid3=AD5EE650-F39A-BFEC-0ABA-5E4F1AE0E1B321390infoc; b_nut=1721458321; rpdid=|(J~RYu)J)lY0J'u~kulYJR)m; home_feed_column=4; DedeUserID=2601842; DedeUserID__ckMd5=41c4d419f6de726c; SESSDATA=cb43e2a4%2C1751789149%2C94dd8%2A11CjDy_nWiXqG5ODJCauaQseyOhk1QKZEKhTZbuDp0H-Os_yt7iAX6-b4rgkOEZguB-JoSVi0tOTJ2dzBwdXZEdERCQng3OUhWTTJMRS1aN0V4Y1lkY1VhSTE1VjVDaWttdFJKNWhkSDNQMEVqX2UwQjlhYUM1TG1feTNRTm1YVHhESDg5cF9aZlFRIIEC; bili_jct=604df7e3d0084370bc1157fc1117783d; PVID=2; CURRENT_QUALITY=80; bsource=search_bing; sid=66bt69mx; CURRENT_FNVAL=16; b_lsid=7865A632_1944B514E8F; browser_resolution=1389-69; buvid_fp=AD5EE650-F39A-BFEC-0ABA-5E4F1AE0E1B321390infoc; bp_t_offset_2601842=1020460555669864448; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzY2OTIwOTQsImlhdCI6MTczNjQzMjgzNCwicGx0IjotMX0.EZUrIVuJtjj-3uTLnJKHBXIAo2iqOj_bfs0hCSiTocA;",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
    }

)

print(res.text)
```

<br>

### 响应体格式

基于requests请求的数据返回Response对象，保存在res变量中

下面是三种访问服务器响应内容的方法

在 Python 的 `requests` 库中，`Response` 对象的 `content`、`text` 和 `json()` 方法都是用来访问服务器响应的内容，但它们提供的数据格式和用途有所不同。以下是它们之间的共同点和区别：

共同点

- **都属于 `Response` 对象**: 这三个属性和方法都是从 `requests` 库的 `Response` 对象中获取响应数据的不同方式。
- **反映相同的响应内容**: 它们最终都描述的是同一个 HTTP 响应体，只不过以不同的格式呈现。

区别

1. **`res.content`**:

   - **类型**: 返回的是原始响应内容的字节串（`bytes`）。

   - **用途**: 适用于下载二进制数据（如图片、音频、PDF 文件等）时。无论响应内容的编码如何，`res.content` 都能够直接获取。

   - 示例

     ：

     ```python
     response = requests.get('https://example.com/image.png')
     image_data = response.content  # 这是一个字节串
     ```

2. **`res.text`**:

   - **类型**: 返回的是响应内容的字符串（`str`），它是通过对 `res.content` 中的字节进行解码得到的，通常根据响应的 Content-Type 头自动选择解码方式（如 UTF-8）。

   - **用途**: 适用于处理文本数据时（如 HTML, JSON 字符串等），当你希望将内容作为字符串处理时使用。

   - 示例

     ：

     ```python
     response = requests.get('https://example.com')
     html_content = response.text  # 这是一个字符串，通常是 HTML 内容
     ```

3. **`res.json()`**:

   - **类型**: 返回的是 JSON 数据解析后的结果，通常是一个字典（`dict`）或列表（`list`），具体取决于 JSON 的结构。

   - **用途**: 仅在确保响应体的内容是有效的 JSON 格式时使用，适合快速将 JSON 数据转换为 Python 对象。这是通过解析响应中的内容实现的。

   - 示例

     ：

     ```python
     response = requests.get('https://api.example.com/data')
     json_data = response.json()  # 这是解析后的 JSON 数据，通常是一个字典或列表
     ```



- **`res.content`** 适合用来处理二进制数据，获取原始字节。
- **`res.text`** 用于处理文本内容，输出 Unicode 字符串。
- **`res.json()`** 适用于处理 JSON 数据，直接将其转换为 Python 对象（如字典或列表）。

选择使用哪种方式取决于您希望获取的数据类型和格式。如果针对的是 JSON 数据，应使用 `res.json()`；如果是文本，使用 `res.text`；若是处理二进制文件，则使用 `res.content`。





<br>

## 1.3 html格式中提取文本

许多网站请求后，返回的数据嵌套在HTML格式中。

对于赭红情况想要取得其中的数据，常见有两种方法

- 基于bs4模块
- 基于xpath模块

### HTML格式

通常可以通过标签名称或标签属性来实现直接或间接寻找标签

<br>



### bs4模块

什么是bs4模块？

> `bs4` 模块，即 Beautiful Soup 4，是一个用于解析 HTML 和 XML 文档的 Python 库。它提供了一种简单而灵活的方式来处理网页内容，使得提取和操作标签和数据变得尤为方便。Beautiful Soup 特别适合于网页抓取、数据分析和数据提取等任务。
>
> ### Beautiful Soup 的主要功能
>
> 1. **解析 HTML/XML 文档**:
>    - Beautiful Soup 可以将网页的 HTML 或 XML 文档转换为可操作的 Python 对象（通常是标签树），使得遍历和搜索 DOM（文档对象模型）变得简单。
> 2. **搜索和导航**:
>    - 该库提供了多种方法来查找和定位文档中的元素，例如通过标签名称、属性、文本内容等。常用的方法包括：
>      - `find()`: 找到第一个匹配的标签。
>      - `find_all()`: 找到所有匹配的标签。
>      - `select()`: 通过 CSS 选择器查找元素。
> 3. **修改和编辑**:
>    - Beautiful Soup 允许修改文档（如添加、删除或替换标签），这使得生成新的 HTML 或 XML 文档成为可能。
> 4. **输出格式化**:
>    - 它可以将修改后的文档转换回格式良好的 HTML 或 XML 字符串，便于保存或进一步处理。
>
> ### 安装
>
> 要使用 Beautiful Soup，您需要确保已安装 `beautifulsoup4` 和一个解析器（如 `lxml` 或 `html5lib`）：
>
> ```bash
> pip install beautifulsoup4 lxml
> ```
>
> ### 示例用法
>
> 以下是一个使用 Beautiful Soup 抓取网页内容并提取信息的简单示例：
>
> ```python
> import requests
> from bs4 import BeautifulSoup
> 
> # 发送请求并获取网页内容
> response = requests.get('https://www.example.com')
> html_content = response.text
> 
> # 使用 Beautiful Soup 解析 HTML
> soup = BeautifulSoup(html_content, 'lxml')
> 
> # 查找标题标签
> title = soup.find('title').text
> print('Page Title:', title)
> 
> # 查找所有链接
> links = soup.find_all('a')
> for link in links:
>     print('Link:', link.get('href'))
> ```
>
> ### 主要特点
>
> - **容错能力**: Beautiful Soup 可以容忍不完整或不规范的 HTML，能从中提取出尽可能多的信息。
> - **与其他库兼容**: 它可以与 Requests、lxml、HTML5lib 等其他库集成，增强功能。
> - **灵活性**: 适用于多种应用场景，能够处理不同来源的 HTML 或 XML 文档。
>
> ### 适用场景
>
> Beautiful Soup 适用于许多应用场景，例如：
>
> - 抓取网页数据（Web Scraping）。
> - 解析和处理 XML 文档。
> - 数据清洗和整理，特别是来自网页的结构化数据。
>
> 总结来说，Beautiful Soup 是一个强大而灵活的工具，适合从网页和 XML 文档中提取信息，使数据分析师和开发者能够方便地处理和操作网页内容。

xpath模块和bs4模块的优缺点是什么？

> `XPath` 和 `Beautiful Soup`（`bs4`）都是用于解析和提取 HTML 和 XML 文档中数据的工具，但它们在功能、使用方式和优缺点上有所不同。以下是它们的比较，包括优缺点。
>
> ### Beautiful Soup (bs4)
>
> #### 优点
>
> 1. **容易使用**:
>    - Beautiful Soup 提供了简单且人性化的 API，易于上手，适合初学者。
> 2. **容错能力强**:
>    - 能够处理不规范或损坏的 HTML，具备很好的容错能力，可以从中提取大量信息。
> 3. **灵活性**:
>    - 支持多种解析器（如 lxml、html5lib），根据需要选择最适合的解析器，可以处理各种文档。
> 4. **与 Requests 库兼容性好**:
>    - 可以与 Requests 库很好地结合使用，方便抓取网络数据。
> 5. **格式化输出**:
>    - 可以方便地将解析后的内容转换为格式良好的 HTML 或 XML 字符串。
>
> #### 缺点
>
> 1. **速度较慢**:
>    - 在处理大型文档时，Beautiful Soup 的速度可能不如专门的解析工具，如 lxml。
> 2. **功能局限**:
>    - 虽然功能丰富，但在结构化查询方面（如复杂的选择）可能不如 XPath 强大。
>
> ### XPath
>
> #### 优点
>
> 1. **强大的查询能力**:
>    - XPath 提供了一种强大的语言，可以精确提取文档中复杂结构的节点。它支持各种路径语法，能够灵活地进行精确查询。
> 2. **高效性**:
>    - 在解析大规模 XML 文档时，XPath 通常比 Beautiful Soup 更快，因为它是专门设计用来处理 XML 的。
> 3. **标准化**:
>    - XPath 是一种标准，广泛用于 XML 文档处理，因此在很多应用场景中都有支持。
>
> #### 缺点
>
> 1. **学习曲线**:
>    - XPath 的语法相对复杂，对于初学者来说，可能需要一些时间去学习和掌握。
> 2. **不适用于 HTML**:
>    - 虽然 XPath 可以用于 HTML 文档，但其设计初衷是为 XML，因此在处理不规范 HTML 时可能会遇到问题。
> 3. **依赖性**:
>    - 通常需要和一个 XML 解析库（如 lxml）一起使用，增加了一些复杂性。
>
> ### 总结
>
> - **使用场景选择**:
>   - **Beautiful Soup**: 适合快速抓取 HTML 数据、处理不规范文档和对简单提取任务的项目。对于初学者或轻量级项目非常友好。
>   - **XPath**: 适合需要精确和复杂数据提取的任务，尤其是在处理规范的 XML 文档时表现出色。
> - **性能考虑**:
>   - 在处理大型文档时，如果对性能有较高要求，可以选择 XPath；而对于简单的抓取任务，Beautiful Soup 提供了更多的便利性。
>
> 根据具体的需求和数据的结构，可以选择适合的工具来进行数据的解析和提取。

安装

```PYTHON
pip install beautifulsoup4
```

<br>



使用

- 根据标签名称获取（只能获取一个，第一个）

```
soup = BeautifulSoup(html_doc,features="html.parser")
tag  = soup.find(name="h1")
print(tag)
print(tag.name)
print(tag.text)
print(tag.attrs)
```

- 根据标签属性获取

```python
soup2 = BeautifulSoup(html_doc,features="html.parser")
tag2 = soup2.find(attrs={"id":"x3"})
print(tag2)
print(tag2.name)
print(tag2.text)
print(tag2.attrs)
```

名称和属性也可以同时使用，此时关系为且

- 嵌套读取，读取某个标签下的子标签

- 读取所有标签，使用find_all
  - recursive=false可以关闭递归，寻找所有儿子标签

<br>

### 经典案例

#### 易车网

获取所有汽车品牌列表

- 请求并获取html格式文本
- bs4解析数据

```python
import requests
from bs4 import BeautifulSoup

res = requests.get(
    url="https://car.yiche.com/"
)

soup = BeautifulSoup(res.text,features="html.parser")

all_car_brand = soup.find_all(name="div",attrs={"class":"item-brand"})
for index,singe_car in enumerate(all_car_brand):
    print(index,singe_car.attrs["data-name"])
```



<br>





#### 网易云音乐

- 发送请求 https://music.163.com/discover/playlist/?cat=%E6%97%A5%E8%AF%AD
- 解析 ul标签和m-pl-container

```python
from bs4 import BeautifulSoup
import requests
import os
import re

res = requests.get(
    url="https://music.163.com/discover/playlist/?cat=%E6%97%A5%E8%AF%AD",
    headers={
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
        "Referer":"https://music.163.com/",
    }
)
folder_path = 'images'
os.makedirs(folder_path, exist_ok=True)
soup = BeautifulSoup(res.text,features="html.parser")
parent_tag = soup.find(name="ul",attrs={"id":"m-pl-container"})

for index,child_tag in enumerate(parent_tag.find_all(recursive=False)):
    img_url = child_tag.find(name="img").attrs["src"]
    img_name = child_tag.find(name="a",attrs={"class":"tit"}).text
    # print(index+1,child_tag.find(name="a",attrs={"class":"tit"}).text,img_url)


    img_res = requests.get(
        url=img_url
    )
    if img_res.status_code == 200:
        # 清理文件名，移除不允许的字符
        img_name = re.sub(r'[<>:"/\\|?*]', '', img_name)

        filename = f"{index+1}_{img_name}.jpg"
        filepath = os.path.join(folder_path, filename)
        with open(filepath,"wb") as f:
            f.write(img_res.content)

        print(f"{img_name} 保存成功")
```

<br>

## 1.4 自动登录-x军事网

### 前置知识

#### 页面刷新抓包

即浏览器保存上一次刷新前的包，可以使用f12中自带的勾选即可

<br>

#### 表单请求和ajax请求

当页面又一个表单时，当输入账号+点击登录/注册提交，数据提交就两种方式：

- 表单提交，特征：提交数据页面刷新
- ajax提交，特征：提交数据页面不刷新

Ajax请求的底层是基于XMLHttpRequest对象实现的，所以在抓包的时发现两个特点：页面不刷新+请求类型是xhr

<br>

#### 常见登录流程

常见的登录流程一般有两种，根据情况不同，在基于爬虫实现自动登录时，也需要做不同的调整。



方式1

正常流程

- 第一次访问：后台返回内容+Cookie，zaicookie中保存当前用户凭证
- 第二次访问：输入用户名+密码提交，此时浏览器会自动将第一次返回的凭证带到后台；后台检验成功，此时给凭证赋予登录权限（还是原来的凭证，只不过此时的凭证时用户已登录得的标识了）
- 第n次访问：携带Cookie中的凭证去访问，后台就会根据凭证返回次用户的相关信息

<br>

爬虫模拟

- 第一次访问：读取返回Cookie并保存
- 第二次访问：携带用户名+密码+上次的Cooki进行登录
- 第n次访问：携带Cookie去访问，获取当前用户信息



<br>



方式2

正常流程

- 第一次访问：后台仅返回页面
- 第二次访问：输入用户名+密码提交，后台校验成功后，在响应体或Cookie返回用户登录凭证（网页一般在Cookie中居多）
- 第n次访问：携带之前返回的凭证去访问，后台就会根据凭证返回此用户的相关信息



<br>

爬虫模拟

- 第2次访问：携带用户名+密码去登陆，在响应体或Cookie中读取用户凭证。
- 第n次访问：携带凭证去访问，获取当前用户信息。

<br>



#### 案例-xx军事网自动登录

抓包分析

首先分析是哪一种登录方式

首先基于初步分析，属于第二种登录方式

<br>

尝试实现

```python
import requests
from bs4 import BeautifulSoup

res = requests.post(
    url="https://passport.china.com/logon",
    data={
        "username":"1",
        "password":"222",
    },
    headers={
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
        "X-Requested-With":"XMLHttpRequest",
        "Referer":"https://passport.china.com/logon",
    }

)

print(res.text)
cookie_idct = res.cookies.get_dict()

res = requests.get(
    url="https://passport.china.com/main",
    cookies=cookie_idct
)


soup = BeautifulSoup(res.text,features="html.parser")
tag = soup.find(attrs={"id":"usernick"})
print(tag.text,tag.attrs["title"])
```

<br>





## 1.5 逆向登录-北大论坛

### 关于js逆向

在某些网站登录的时候，除了要提供密码和用户名，可能还要提供一些特殊的密钥，针对这些密钥，可能是js后端生成的，因此要想模拟登录，此时需要逆向分析相关的js代码。



> JavaScript 逆向（JavaScript Reverse Engineering）通常是指对 JavaScript 代码进行分析、改写或者重构，以理解其原理、功能或架构。逆向工程可以应用于多种场景，例如在安全研究、代码审计、调试、或理解别人编写的代码时。
>
> ### JavaScript 逆向的常见目的
>
> 1. **安全分析**:
>    - 检查网页或应用中的潜在漏洞，确保没有恶意代码或安全隐患。
> 2. **学习与理解**:
>    - 分析别人的代码，理解它的功能和实现方式，以便自己借鉴或学习。
> 3. **调试与优化**:
>    - 进行代码的调试，提高性能或修复 bug。
> 4. **破解与绕过保护**:
>    - 在某些情况下，逆向可以用于绕过软件中的防护措施或使用限制。
>
> ### JavaScript 逆向的方法
>
> 1. **源代码审查**:
>    - 使用浏览器的开发者工具查看页面的 JavaScript 源代码，分析其结构和功能。
> 2. **调试器**:
>    - 利用浏览器调试工具（如 Chrome DevTools）设置断点，逐步执行代码，以观察变量的变化和函数的调用。
> 3. **代码美化**:
>    - 通过使用在线代码格式化工具或美化器（如 Prettier、Beautifier）来格式化混淆或压缩后的代码，使其更易于阅读。
> 4. **网络监控**:
>    - 使用网络监控工具（如 Chrome 的 Network 面板）观察 AJAX 请求，分析数据传输和 API 调用的细节。
> 5. **反混淆**:
>    - 对经过混淆（obfuscation）处理的 JavaScript 进行逆向，尝试恢复为可读代码。
>
> ### 工具与技术
>
> - **浏览器开发者工具**: Chrome DevTools、Firefox Developer Tools 等，提供了强大的调试和分析功能。
> - **JavaScript 反混淆工具**: 如 JSNice、JSDeobfuscator 等，用于将混淆过的代码转换为更易读的形式。
> - **网络抓包工具**: 如 Fiddler、Burp Suite 等，用于截取和分析网络请求。
>
> ### 注意事项
>
> - **合法性和道德**: 逆向工程在某些情况下可能会违反法律或软件许可证，尤其是在没有获得授权的情况下进行破解或修改。理解和遵循相关法律、道德标准是非常重要的。
>
> ### 总结
>
> JavaScript 逆向是一项复杂但有趣的技术，具有广泛的应用场景。无论是为了安全分析、学习新技术，还是进行代码的调试，掌握逆向工程的基本原则和工具都非常重要。如果您对于这个话题有更具体的问题或想了解的方面，请随时告诉我！

<br>

### js逆向实践

北大未名逆向

https://bbs.pku.edu.cn/v2/home.php

- 分析
- 断点调试
- 实现

经过js分析，发现js涉及md5与时间戳



md5加密流程如下

> 在 Python 中进行 MD5 加密（或更准确地说，生成 MD5 哈希值）可以使用内置的 `hashlib` 库。以下是一个简单的步骤和示例代码，说明如何使用 `hashlib` 库来生成字符串的 MD5 哈希值。
>
> ### 步骤
>
> 1. 导入 `hashlib` 模块。
> 2. 创建一个 MD5 哈希对象。
> 3. 使用 `update()` 方法添加要加密的数据。
> 4. 使用 `hexdigest()` 方法获取 MD5 哈希值（以十六进制格式表示）。
>
> ### 示例代码
>
> ```python
> import hashlib
> 
> # 要加密的字符串
> data = "Hello, World!"
> 
> # 创建 MD5 哈希对象
> md5_hash = hashlib.md5()
> 
> # 更新哈希对象，传入数据（需要编码为字节）
> md5_hash.update(data.encode('utf-8'))
> 
> # 获取 MD5 哈希值
> md5_result = md5_hash.hexdigest()
> 
> # 输出结果
> print(f"'{data}' 的 MD5 哈希值为: {md5_result}")
> ```
>
> ### 解释
>
> - `hashlib.md5()` 创建一个 MD5 哈希对象。
> - `update(data.encode('utf-8'))` 将要加密的字符串数据转为字节（使用 UTF-8 编码）并添加到哈希对象中。
> - `hexdigest()` 方法返回计算得出的 MD5 哈希值的十六进制字符串表示。
>
> ### 注意事项
>
> - MD5 是一种快速的哈希算法，但由于其安全性较低（容易产生冲突），不建议用于密码存储或安全相关的用途。如果您需要更安全的哈希算法，可以考虑使用 SHA-256 或其他更安全的加密算法。
>
> ### 示例输出
>
> 如果您执行上述代码，您可能会看到如下输出：
>
> ```
> 'Hello, World!' 的 MD5 哈希值为: 65a8e27d8879283831b664bd8b7f0ad4
> ```
>
> 

<br>

## 1.6 验证码识别

### 图片数字字母验证码

首先基于python的图片验证码识别，需要使用响应模块

即要安装（下面两者的版本需要对应）

```python
pip install ddddocr==1.4.9
pip install pillow==9.5.0
```

dddocr可以进行图片的校验

```python
import ddddocr

ocr = ddddocr.DdddOcr(show_ad=False)
with open("img/v1.jpg",mode='rb') as f:
    body = f.read()
code = ocr.classification(body) #或者在线获取图片res.content
```

注意：从网络请求的图片可能是经过base64编码处理后的

此时需要解码再处理

```python
import base64

content = base64.b64decode("....")
```

总结，图片识别有

- 本地图片
- 在线图片
- Base64编码

[ddddocr · PyPI](https://pypi.org/project/ddddocr/)

<br>

base64编码和md5加密

> **Base64编码**和**MD5加密**是两种不同的技术，尽管它们可能在某些应用中一起使用，但它们的目的和工作原理有很大不同。
>
> ### Base64编码
>
> - **定义**：Base64是一种编码方式，用于将二进制数据转换为文本格式。它使用64个字符（包括字母、数字和一些符号）来表示数据，以便在只支持文本的环境中传输二进制数据。
> - **用途**：
>   - 常用于在HTTP请求中传递图像、音频等二进制数据，比如在电子邮件中嵌入图像。
>   - 常用于数据传输和存储，例如JSON、XML等格式中经常需要用到Base64编码。
> - **如何工作**：Base64编码将每3个字节的输入数据转换为4个字符的输出。它通过将每个字节的数据转换为6位的二进制数来实现。由于Base64的输出通常比输入大约多了33%，因此在较高频率使用时要考虑其开销。
>
> ### MD5加密
>
> - **定义**：MD5是一种加密哈希函数，通过将输入数据（无论大小）转换为固定长度的输出（128位的哈希值）。它是一个单向加密过程，这意味着你不能通过哈希值反推出原始数据。
> - **用途**：
>   - 常用于校验数据完整性，确保在数据传输过程中数据未被篡改。
>   - 常用于存储密码（虽然现在更推荐使用更安全的哈希函数，如SHA-256等）。
> - **如何工作**：MD5接收任意长度的输入，通过复杂的算法生成128位哈希值。相同的输入始终生成相同的输出，但不同的输入可能会产生相同的输出（称为碰撞）。
>
> ### Base64 和 MD5 的关系
>
> - **相互独立**：Base64编码和MD5加密没有直接的关系。Base64是一种编码方式，而MD5是一种哈希函数。Base64用于对数据进行编码以便传输，而MD5用于生成数据的哈希值以确保数据的完整性。
> - **共同使用**：在某些情况下，你可能会先用MD5对数据进行哈希，然后再将得到的哈希值用Base64进行编码，以便在需要文本传输的情况下使用。然而，这只是两者合在一起使用的一个场景，实际运行中你不一定会主动使用这种组合。
>
> ### 例子
>
> 以下是Python中简单演示Base64编码和MD5哈希的示例：
>
> ```python
> import base64
> import hashlib
> 
> # 原始数据
> data = b"Hello, World!"
> 
> # MD5哈希
> md5_hash = hashlib.md5(data).hexdigest()  # 计算MD5哈希
> print(f"MD5: {md5_hash}")
> 
> # Base64编码
> encoded = base64.b64encode(data).decode()  # 编码为Base64
> print(f"Base64 Encoded: {encoded}")
> ```
>
> ### 总结
>
> - Base64编码是用于文本表示和传输二进制数据的方式，而MD5是一种用于验证数据完整性的哈希函数。两者具有不同的目的和应用场景。如果您有更多问题或需要进一步的解释，请告诉我！

<br>

### 案例-验证码自动登录

软文街为例

https://i.ruanwen.la/login

```python
import requests
import ddddocr
res = requests.post(url="https://api.ruanwen.la/api/auth/captcha/generate")

res_dict_json = res.json()

captcha_token = res_dict_json["data"]["captcha_token"]
captcha_src = res_dict_json["data"]["src"]


res2 = requests.get(url=captcha_src)


with open("img/xx.png",mode="wb") as f:
    f.write(res2.content)

print("验证码保存成功")
ocr = ddddocr.DdddOcr(show_ad=False)
code = ocr.classification(res2.content)
print(code)

#登录认证

res3 = requests.post(
    url="https://api.ruanwen.la/api/auth/authenticate",
    json={
        "captcha":code,
        "captcha_token":captcha_token,
        "device":"pc",
        "identity":"advertiser",
        "mobile":"18316698279",
        "password":"king123"
    }
)

print(res3.json())
```





<br>

## 1.7 反调试debugger

什么是反调试

> 反调试（anti-debugging）是一种技术或方法，旨在防止或检测调试器对程序进行调试和分析行为的技术。这些技术常用于保护软件的安全性，防止反向工程、破解或其他恶意活动。反调试措施通常被嵌入到软件中，因此它可以在程序运行时自动检测和响应调试器的存在。
>
> ### 反调试的目的
>
> 1. **保护知识产权**：防止竞争对手逆向工程软件。
> 2. **增强安全性**：防止恶意用户利用调试器分析程序行为，从而找到弱点或绕过安全机制。
> 3. **减少破解风险**：提高破解软件的难度。
>
> ### 常见的反调试技术
>
> 1. **检测调试器的存在**：
>    - 使用操作系统提供的 API 检测是否有调试器附加到进程。例如，在 Windows 上，可以调用 `IsDebuggerPresent` 函数来判断当前进程是否有调试器。
> 2. **检查进程环境**：
>    - 检查进程的环境变量或某些特征，以判断程序是否在调试器中运行。
> 3. **异常处理**：
>    - 在程序中故意引发异常，并在异常处理过程中检测调试器的行为。例如，如果调试器在异常处理时修改了程序的行为，程序可以推测出调试器的存在。
> 4. **时间检查**：
>    - 通过测量某些操作的执行时间来检测调试器。调试器通常会减慢程序的执行速度，因此时间的异常变化可能指示程序正在被调试。
> 5. **完整性校验**：
>    - 使用哈希校验或其他手段来验证代码段，确保代码没有被修改。如果程序被调试，调试器可能会修改某些代码，这样可以检测到。
> 6. **利用系统特性**：
>    - 某些反调试技术利用操作系统的特性，如检查特定的异常标志或使用 Windows 的性能分析器。
> 7. **自我修改代码**：
>    - 在运行时修改程序自身的代码，以使得调试更加困难。
> 8. **虚拟机检测**：
>    - 一些程序会检查自己是否在虚拟机或沙盒环境中运行，这也是为了避免分析和调试。
>
> ### 反调试的局限性
>
> 尽管反调试技术可以增加破解和调试的难度，但仍然无法做到绝对安全。熟练的攻击者可能会找到绕过这些措施的方法。此外，过于严格的反调试措施可能会导致正常用户的使用体验受损，因此在设计软件时需要权衡。
>
> ### 示例
>
> 以下是一个简单的 Python 示例代码，展示如何使用一个基本的反调试检测：
>
> ```python
> import ctypes
> 
> def is_debugger_present():
>     return ctypes.windll.kernel32.IsDebuggerPresent()
> 
> if is_debugger_present():
>     print("Debugger detected!")
> else:
>     print("No debugger detected.")
> ```
>
> ### 总结
>
> 反调试是保护软件安全的重要手段，它通过多种技术手段检测和防止调试器对程序的操作。虽然反调试措施能够提高安全性，但其并不能做到绝对安全，仍然需要持续关注和更新以应对新的攻击手段。如果您对反调试技术有具体问题或需要深入讨论，请随时询问！

<br>

```python
import requests

res = requests.post(
    url="https://zz123.com/ajax/",
    data={
        "act":"search",
        "key":"藤井风",
        "lang":"",
        "page":"2",
    }
)

res_dict = res.json()
print(res_dict)
```

上述是模拟搜索的过程



<br>





### 案例：歌曲下载

本案例包含

- 反调试
- 301请求重定向
- mp4资源下载

```python
import requests


res = requests.get(url="https://zz123.com//xplay/?act=songplay&id=vakas",allow_redirects=False) #禁止重定向

mp3_url = res.headers['Location']

res = requests.get(url=mp3_url)

with open("晴天.mp3",mode='wb') as f:
    f.write(res.content)
```

ps：上述代码对应网站已失效，该网站更新了反爬机制，会自动跳出网站，可以尝试禁止js

```python
import requests
import re

res = requests.post(
    url="https://zz123.com/ajax/",
    data={
        "act":"search",
        "key":"周杰伦",
        "lang":"",
        "page":"4",
    }
)

res_dict = res.json()
data_list = res_dict['data']

for item in data_list:
    mp3_id = item['id']
    mp3_name = item['mname']

    res2 = requests.post(
        url="https://zz123.com/ajax/",
        data={
            "act": "songinfo",
            "id": mp3_id,
            "land": "",
        }
    )

    res2_dict = res2.json()
    author_name = res2_dict["data"]["sname"]
    song_url = res2_dict["data"]["mp3"]
    res2 = requests.get(url=song_url)
    safe_title = re.sub(r'[<>:"/\\|?*]', '', author_name)  # 去掉非法字符
    with open(f"MP3/{safe_title}-{mp3_name}.mp3", mode='wb') as f:
        f.write(res2.content)

    print(f"{mp3_name}保存成功")
```

上述代码可以实现在zz123中下载音乐

注意名字的保存可能有问题

<br>

### 案例：视频（m3u8）下载

许多在线视频都是基于m3u8格式实现，特点是：

- 先发送m3u8请求，获取ts地址
- 再根据顺序发送ts请求，返回值就是时评内容（播放器播放或下载保存）



首先抓包分析

```
https://vip.ffzyread.com/20230630/13282_a3aeca3c/index.m3u8

#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=800000,RESOLUTION=1080x608
3000k/hls/mixed.m3u8


https://vip.ffzyread.com/20230630/13282_a3aeca3c/3000k/hls/mixed.m3u8

#EXTM3U
#EXT-X-VERSION:3
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-TARGETDURATION:8
#EXT-X-DISCONTINUITY
#EXTINF:6.089411,

```





> M3U8是一种常见的文件格式，用于存储基于HTTP的流媒体播放列表。它是M3U文件格式的扩展，专门用于支持UTF-8编码，能够包含非ASCII字符。这种格式广泛应用于视频和音频流媒体技术，尤其是在HLS（HTTP Live Streaming）协议中。
>
> ### M3U8格式的特点
>
> 1. **基于文本**：
>    - M3U8文件是纯文本文件，内容可以使用文本编辑器打开和编辑。
> 2. **播放列表**：
>    - M3U8文件通常包含一个播放列表，其中列出了多种媒体流的URL，以及一些关于播放的元数据。
> 3. **HLS协议**：
>    - M3U8被广泛用于HLS，这是Apple开发的一种流媒体传输协议，支持实时和点播视频流的播放。HLS允许将视频流划分为小段，并根据网络条件动态调整流的质量。
> 4. **多种码率**：
>    - M3U8播放列表通常包含多个分辨率和码率的流，以便根据用户的网络带宽进行自适应流媒体播放。
> 5. **支持直播和点播**：
>    - M3U8格式不仅支持实时直播，还可以用于存储视频点播服务中的内容。
>
> ### M3U8文件的结构
>
> M3U8文件的内容通常以特定的方式组织，包含如下指令：
>
> - **#EXTM3U**：文件的开头标识，它表明这是一个扩展的M3U文件。
> - **#EXT-X-VERSION**：指示HLS协议的版本。
> - **#EXT-X-TARGETDURATION**：每个媒体段的最长播放时长。
> - **#EXT-X-MEDIA-SEQUENCE**：第一个媒体段的序列号。
> - **#EXTINF**：后面跟随的行描述了媒体段的持续时间和名称的详细信息。
> - 媒体段的URL：每个段的实际文件位置，通常是.ts（MPEG Transport Stream）格式的文件。
>
> ### 示例
>
> 以下是一个简单的M3U8文件示例：
>
> ```
> #EXTM3U
> #EXT-X-VERSION:3
> #EXT-X-TARGETDURATION:10
> #EXT-X-MEDIA-SEQUENCE:0
> #EXTINF:10.0,
> http://example.com/segment0.ts
> #EXTINF:10.0,
> http://example.com/segment1.ts
> #EXTINF:10.0,
> http://example.com/segment2.ts
> #EXT-X-ENDLIST
> ```
>
> ### 用途
>
> - **媒体播放器**：许多现代媒体播放器（如 VLC、JW Player、Video.js 等）支持直接播放 M3U8 格式的流。
> - **直播平台**：广泛应用于各种直播平台和视频平台，支持实时视频流和点播内容。
> - **Web开发**：Web开发者可以利用 M3U8 和 HLS 技术在网页中嵌入视频流。
>
> ### 总结
>
> M3U8是一种重要的流媒体播放列表格式，特别是在HLS协议中，支持动态自适应流媒体传输。它的文本格式和简单的结构使得开发者容易创建和编辑，同时也为用户提供了高效的视频观看体验。

<br>

得出代码如下：

> ```python
> import re
> 
> import requests
> import re
> 
> m3u8_url = "https://vip.ffzyread.com/20230630/13282_a3aeca3c/index.m3u8"
> res = requests.get(m3u8_url)
> 
> real_m3u8_url = m3u8_url.replace("index.m3u8",res.text.strip().split()[-1])
> print(real_m3u8_url)
> 
> res2 = requests.get(real_m3u8_url)
> match_list = re.findall(".*ts",res2.text)
> 
> #https://vip.ffzyread.com/20230630/13282_a3aeca3c/3000k/hls
> video_len = len(match_list)
> with open(f"视频.mp4", mode="wb") as f:
>     for index,ts_url in enumerate(match_list):
>         res3 = requests.get(url=f"https://vip.ffzyread.com/20230630/13282_a3aeca3c/3000k/hls/{ts_url}")
>         f.write(res3.content)
>         print(f"{index}/{video_len}")
> ```



<br>



### 案例：加密视频下载

基于第三方”保利威“实现的视频在线播放

特点：对ts视频片段进行了加密

python想要实现AES解密，需要安装第三方模块

```python
pip install  pycryptodome
```



> 在Python和其他编程语言中，`\x` 前缀表示后面跟随的是一个十六进制（hexadecimal）值。具体来说，`\x` 后面将会是两个十六进制数字，表示一个字节的数据。这种表示方法通常用于字节串，特别是在处理低级别的数据或二进制数据时。
>
> ### 示例解释
>
> - `\x41` 表示字母 `A`，因为 `41` 是十六进制的ASCII码，表示字符 `A`。
>
> - ```
>   \x43\x6f\x64\x65
>   ```
>
>    则对应于字符串 "Code"，因为：
>
>   - `\x43` -> `C`
>   - `\x6f` -> `o`
>   - `\x64` -> `d`
>   - `\x65` -> `e`
>
> ### 在字节串中
>
> 如果你看到类似 `b'\x48\x65\x6c\x6c\x6f'` 的内容，这表示一个字节串，其中包含了五个字节。实际的字符表示为 "Hello"，因为：
>
> - `\x48` -> `H`
> - `\x65` -> `e`
> - `\x6c` -> `l`
> - `\x6c` -> `l`
> - `\x6f` -> `o`
>
> ### 使用场景
>
> - **网络编程**：在处理网络协议和数据传输时，常常会遇到字节串和十六进制表示。
> - **加密和解密**：在解密得到的二进制数据中，经常使用这种格式来表示字节。
> - **文件编码**：一些文件格式需要精确控制字节，使用十六进制表示可帮助开发者更直观地理解数据。
>
> ### 解析为字符串
>
> 如果你有类似 `b'\x48\x65\x6c\x6c\x6f'` 的字节串，想将其转换为普通字符串，可以使用以下方式：
>
> ```python
> byte_data = b'\x48\x65\x6c\x6c\x6f'
> string_data = byte_data.decode('utf-8')  # 或者使用其他适当的编码
> print(string_data)  # 输出：Hello
> ```
>
> ### 总结
>
> 所以，`\x` 前缀是一个指示符，表示后面接着的是一个字节的十六进制值。这在处理字节串和低级数据时非常常见，对数据的理解和操作非常有帮助。

<br>

以AES加密，使用m3u8返回得到的iv和key

- iv：直接获取

- key：得到的是url，需要对该url发送请求
- ts：通过加密后的文件



下面以会务通为例子

> #EXT-X-KEY:METHOD=AES-128,URI="https://hls.videocc.net/4392459050/4/4392459050ae3913de7b42b90c150654_3.key",IV=0x3820292c0257ecfdbe4ead05358979cf



```python
import re
import requests
import binascii
from Crypto.Cipher import AES

m3u8_url = "https://hls.videocc.net/4392459050/4/4392459050ae3913de7b42b90c150654_3.m3u8?pid=1736867456875X1695310&device=desktop"

res = requests.get(url=m3u8_url)
match_list = re.findall("http.*",res.text)
key_url,iv_string = match_list[0].strip().split('",IV=0x')
print(key_url,iv_string)


#获取key的内容
#保利威不能直接通过发送请求获取，需要携带token
res = requests.get(
    url="https://www.sciconf.cn/ajax/get-token?vid=4392459050ae3913de7b42b90c150654_4&user_id=8388811&user_name=%E6%B2%B3%E6%BA%90%E8%A7%82%E4%BC%97111682049",
    headers={
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
    }
)
# vid是视频id，如果要批量下载，则需要请求获取

token = res.json()['token']

res = requests.get(key_url,params={"token":token})
key_bytes = res.content

#iv由十六进制转变成字节类型
iv_bytes = binascii.a2b_hex(iv_string)

with open(f"视频.mp4", mode="wb") as f:
    for idx,ts_url in enumerate(match_list[1:],1):
        res = requests.get(ts_url)

        #对原始内容进行AES解密 iv_bytes,key_bytes
        cryptor = AES.new(key_bytes,AES.MODE_CBC,iv_bytes) # cryptor = AES.new(key,AES.MODE_CBC,iv)
        real_body = cryptor.decrypt(res.content)

        f.write(real_body)
        print(f"{idx}/29")
```

总结，对于baolitong这个第三方加密，需要有准备

- iv字节
- key字节
- ts原始视频
- python相关AES解密模块



<br>



# 2.自动化和验证码识别

## 2.1 Selenium自动化

### 01 selenium概述

selenium是什么？

> Selenium 是一个广泛使用的开源自动化测试框架，主要用于Web应用程序的自动化测试。它提供了一种强大的工具集，可以帮助开发人员和测试人员自动执行对Web应用程序的操作，如点击按钮、填写表单和获取页面内容等。以下是 Selenium 的一些基本信息：
>
> ### 主要功能
>
> 1. **浏览器自动化**：
>    - Selenium 可以模拟用户在浏览器中的操作，例如点击链接、填写表单、导航页面等。
> 2. **支持多种浏览器**：
>    - Selenium 支持许多常见的Web浏览器，包括Chrome、Firefox、Safari、Edge等。它可以通过不同的驱动程序与各个浏览器进行交互。
> 3. **多种编程语言支持**：
>    - Selenium 提供了多种语言的API支持，包括Java、Python、Ruby、C#等。用户可以使用自己熟悉的编程语言编写测试脚本。
> 4. **测试框架集成**：
>    - Selenium 可以与许多测试框架（如JUnit、TestNG、PyTest等）无缝集成，使得在测试自动化过程中能够利用其他测试工具的优点。
> 5. **处理动态内容**：
>    - Selenium 可以很好地处理现代Web应用程序中的动态内容，包括使用JavaScript更新的页面元素。
>
> ### 主要组件
>
> 1. **Selenium WebDriver**：
>    - WebDriver 是 Selenium 的核心组件，提供了一套API来与浏览器进行交互。每种浏览器有不同的驱动程序，例如 ChromeDriver、FirefoxDriver 等。
> 2. **Selenium IDE**：
>    - Selenium IDE 是一个记录和回放的工具，可以通过录制用户在浏览器中的操作来生成自动化测试脚本。它适用于简单的测试场景。
> 3. **Selenium Grid**：
>    - 允许用户在多台机器上并行执行测试，支持分布式测试和跨浏览器测试，可以同时在不同的浏览器和平台上运行测试。
>
> ### 典型应用场景
>
> - **功能测试**：自动化测试Web应用程序的各种功能，确保其按预期工作。
> - **回归测试**：在软件有更新或修改后，自动检测原有功能是否仍然正常。
> - **性能测试**：虽然Selenium本身不是性能测试工具，但可以结合其他工具使用，验证在负载条件下的应用性能。
> - **数据抓取**：在某些情况下，Selenium可以用作爬虫工具，从Web页面中提取数据，尤其是处理动态内容时。
>
> ### 示例代码
>
> 下面是一个使用Python和Selenium来打开网页的简单示例：
>
> ```python
> from selenium import webdriver
> from selenium.webdriver.common.by import By
> 
> # 创建WebDriver实例，使用Chrome浏览器
> driver = webdriver.Chrome()
> 
> # 打开指定的URL
> driver.get("https://www.example.com")
> 
> # 查找一个元素并与之交互，例如点击按钮
> button = driver.find_element(By.ID, "exampleButton")
> button.click()
> 
> # 关闭浏览器
> driver.quit()
> ```
>
> ### 总结
>
> Selenium 是一个功能强大的Web自动化测试工具，适用于不同的浏览器和编程语言。凭借其灵活性和强大功能，广泛应用于Web应用的测试和自动化，帮助开发团队提高测试效率和软件质量。



Selenium可以“控制”浏览器实现

- 点击、输入、滑动等操作



<br>

Selenium vs 逆向

- Selenium
  - 优点：简单不需要逆向，只需要控制浏览器去执行预设的操作即可
  - 缺点：性能差，不利于批量实现
- 逆向
  - 优点：算法逆向出来后，性能好且利于批量实现
  - 缺点：语法难搞的js加密算法，不容易



<br>

### 02 Selenium环境安装

- 安装模块

  ``` python
  pip install selenium
  ```

- 下载驱动

  ```PYTHON
  Selenium想要控制谷歌等浏览器，必须使用对应的驱动



基于Selenium模块的使用

```python
import time
from  selenium import webdriver
from  selenium.webdriver.chrome.service import Service

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

driver.get('https://passport.bilibili.com/login')

time.sleep(5)
driver.close()
```





<br>

### 03 寻找标签

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

driver.get('打开网址')

#find_element find_elements
tag = driver.find_element(By.ID,"user")
tag = driver.find_element(By.CLASS_NAME,"c1")
tag = driver.find_element(By.TAG_NAME,"div")
tag = driver.find_element(By.XPATH,"html/body/div[1]/div/div[2]/div[3]/div[3]/div/div/div/div[1]/span[2]")  #full_xpath
tag = driver.find_element(By.XPATH,'//*[@id="geetest-wrap"]//input[@name="tel"]')                           #path
```

> //表明寻找当前节点所有子孙节点

得到的是标签对象

综上所述，寻找标签

- 根据id
- 根据类名
- 根据标签名



<br>

### 04 执行操作

使用Selenium可以进行点击和输入操作

```python
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

driver.get('https://passport.bilibili.com/login')

# 1.点击短信登录
time.sleep(5)
sms_btn = driver.find_element(
    By.XPATH,
    '//*[@id="app-main"]/div/div[2]/div[3]/div[1]/div[3]'
)
sms_btn.click()

# 2.輸入账号
phone_txt = driver.find_element(
    By.XPATH,
    '//*[@id="app-main"]/div/div[2]/div[3]/div[2]/div[1]/div[1]/input'
)
phone_txt.send_keys("18316698279")


time.sleep(60)
driver.close()
```

根据上述的内容，可以看到，根据xpath得到标签对象，然后使用

- click 点击
- send_keys 输入input



<br>

### 05 执行JavaScript

如果【选择标签】【执行操作】这种操作起来比较繁琐，也可以直接在页面上去执行js代码实现功能

```js
document.querySelect("xxx").children[2].click()
document.cookie
```

上述的js代码，如果要在Selenium中执行，可以使用

```python
driver.execute_script('document.querySelect("xxx").children[2].click()')
get_cookies = driver.execute_script('return document.cookie')
```

使用js代码获取cookies是拼接而成的字符串，如果需要得到列表

可以直接

```python
cookie_list = driver.get_cookies()
```

<br>



### 06 等待加载

如果页面加载比较慢，需要等待某个元素加载成功后，再执行某些操作，可以使用以下方法：

- 基于lambda表达式

  ```python
  sms_btn = webDriverwait(driver,30,0.5).until(lambda dv:dv.find_element(
  	By.XPATH,
      '.....'
  ))
  ```

- 基于自定义函数

  ```python
  sms_btn = webDriverwait(driver,30,0.5).until(func)
  ```

  

- 基于全局配置

  ```python
  driver.implicitly_wait(10)
  ```



自定义函数自由度更高，全局配置适合动作比较多的情况

<br>

疑问：对于需要等待的资源，是否可以采用python协程来完成？

  





<br>

### 07 获取值相关

当找到某个标签之后，想要获取标签内部值

获取文本和属性，可以通过以下标签属性获取

- text
- get_attribute("属性名")

ps：如果想获取input的输入值，可以使用get_attribute("value")

ps：如果想要获取select中的option的value，找到的是select标签，并选择获取属性value既可

- get_property("属性名")，判断是标签否有相关的属性

<br>

```python
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By


service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)
driver.implicitly_wait(10)

driver.get('https://www.autohome.com.cn/')

parent = driver.find_element(
    By.XPATH,
    '//*[@id="app"]/div[1]/div[2]/section[2]/div[1]/div[2]/div/div[1]/div[1]'
)
print(parent.text)

tag_list = parent.find_elements(
    By.XPATH,
    'label/span/input'
)

for tag in tag_list:
    print(tag.get_property("checked"),tag.get_attribute("value"))

time.sleep(60)
driver.close()
```

implicitly_wait是隐形等待

<br>

### 08 源码和bs4采集

打开页面后，如果基于selenium不太容易定位和寻找，可以结合bs4

- selenium获取网页的html
- bs4获取具体的标签

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup



service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)
driver.implicitly_wait(10)

driver.get('https://car.yiche.com/')

html_string = driver.page_source
soup = BeautifulSoup(html_string,features="html.parser")
tag_list = soup.find_all(name="div",attrs={"class":"item-brand"})
for tag in tag_list:
    child = tag.find(name='div',attrs={"class":"brand-name"})
    print(child.text)

driver.close()
```





<br>

### 09 携带Cookie

``` python
driver.add_cookie({
    'name':'token',
    'value': ''
})
```

必须先访问页面，再添加cookie

<br>



### 10 IP检测和代理

如果网站进行了IP访问限制，可以通过下面操作进行代理

- 购买IP
- 登录购买IP渠道的后台，配置自己IP白名单
- 代码携带代理

在selenium中需要添加

```python
service = Service("")

#下面是新加内容
opt = webdriver.ChromeOptions()
opt.add_argument(f'--proxy-seerver={代理ip}')
driver = webdriver.Chrome(service=service)

driver.get()
```





<br>

### 11 特征检测和绕过

有些网站为了防止selenium，会检测特征，并禁止访问

如果想要个正常使用selenium访问，那就需要隐藏浏览器相关的特征

``` python
#常用方法

opt = webdriver.ChromeOptions()

opt.add_argument('--disable-infobars')
opt.add_experimental_option("excludeSwitches",["enable-automation"])
opt.add_experimental_option('useAutomationExtension',False)

driver = webdriver.Chrome(service=service,options=opt
                         )

#隐藏selenium属性值
with open(hide.js) as j:
    driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument",{"source":f.read()})
```



<br>

### 12 无头模式和其他

如果不想显示展示在浏览器上的操作，只想偷偷的在后台运行

```python
opt.add_argument('--headless')
```

其他配置

```python
opt.add_argument('--disable-infobars')
opt.add_argument('--no-sandbox')
opt.add_argument('window-size=1920x3000')
opt.add_argument('--disable-gpu')
opt.add_argument('--incognito')
opt.add_argument('--start-maximized')
opt.add_argument('--hide-scrollbars')
opt.add_argument('lang=en_US')
opt.add_argument('blink-settings=imagesEnabled=false')        #不加载图片
opt.add_argument('user-Agent=...')
opt.binary_location=r
```



<br>

### 13 截屏

在找到某个标签之后，可以进行截图

```python
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)
driver.get("https://www.bilibili.com/")
tag = driver.find_element(
    By.XPATH,
    '//*[@id="i_cecream"]/div[2]/div[1]/div[3]/div[1]/a[1]/div'
)

print(tag)

#截图保存
tag.screenshot("demo.png")


#截图内容
body = tag.screenshot_as_png
print(body)

#截图内容base64
b64_body = tag.screenshot_as_base64
print(b64_body)

driver.close()
```



<br> 

### 14 总结案例

#### 案例-x东

实现：打开京东，并搜索相关关键字，然后保存相关搜索信息

```python
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

service = Service('driver/chromedriver.exe')
opt = webdriver.ChromeOptions()
#
# opt.add_argument('blink-settings=imagesEnabled=false') #不加载图片

opt.add_argument('--disable-infobars')
opt.add_experimental_option("excludeSwitches",["enable-automation"])
opt.add_experimental_option('useAutomationExtension',False)

driver = webdriver.Chrome(service=service,options=opt)

driver.implicitly_wait(10)

# 1.打开京东
driver.get('https://www.jd.com/')

# 2.搜索框+输入
tag = driver.find_element(
    By.XPATH,
    '//*[@id="key"]'
)
tag.send_keys("泡面")

# 3.点击搜索
tag = driver.find_element(
    By.XPATH,
    '//*[@id="search"]/div/div[2]/button'
)
tag.click()

# 4.查询列表
tag_list = driver.find_elements(
    By.XPATH,
    '//*[@id="J_goodsList"]/ul/li'
)

for tag in tag_list:
    title = tag.find_element(By.XPATH,'div/div[3]/a/em').text

    print(title)

time.sleep(1000)
driver.close()
```













<br>

## 2.2 滑动验证码

### 01 滑动验证和绕过步骤

基于selenium实现滑块验证核心需要三部：

- 获取验证码图片
- 识别图片，计算轨迹距离
- 寻找滑块，控制滑块

<br>

#### 1.获取图片

```python
import re
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.wait import WebDriverWait

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

# 1.打开首页
driver.get('https://www.geetest.com/adaptive-captcha')

# 2.点击【滑动拼图验证】
tag = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.XPATH,
    '//*[@id="gt-showZh-mobile"]/div/section/div/div/div[1]/div[2]/div[3]/div[3]'
))
tag.click()

# 3.点击开始验证
tag2 = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.CLASS_NAME,
    'geetest_btn_click'
))
tag2.click()


# 4.获取背景图片
def fetch_bg_func(dv):
    tag_object = dv.find_element(
        By.CLASS_NAME,
        'geetest_bg'
    )
    style_string = tag_object.get_attribute("style")
    match_list = re.findall('url\(\"(.*)\"\);',style_string)
    if match_list:
        return match_list[0]

bg_img_url = WebDriverWait(driver,30,0.5).until(fetch_bg_func)
print("背景图:",bg_img_url)


# 4.获取缺口图片
def fetch_slice_func(dv):
    tag_object = dv.find_element(
        By.CLASS_NAME,
        'geetest_slice_bg'
    )
    style_string = tag_object.get_attribute("style")
    match_list = re.findall('url\(\"(.*)\"\);',style_string)
    if match_list:
        return match_list[0]

slice_img_url = WebDriverWait(driver,30,0.5).until(fetch_slice_func)
print("缺口图:",slice_img_url)

time.sleep(1000)
driver.close()
```

上述内容中获取背景图和获取缺口图，可以使用闭包来进行进一步优化。

<br>

#### 2.识别图片缺口位置

对于滑动窗口的识别图片，是指已知一个滑动图片和一个背景图片，识别到需要滑动到的位置，以保证可以匹配背景图

通常识别图片有以下三种方法

- ddddocr
- opencv
- 打码平台（收费）

在使用 `ddddocr` 识别图片验证码时，获取的缺口位置（比如文字或验证码的坐标）是 **相对于图片左上角的位置**。换句话说，这些坐标值是基于图像的原始像素位置来给出的，而不是网页的绝对位置。

```python
import ddddocr
import requests

slice_bytes = requests.get("缺口图地址").content
bg_bytes = requests.get("背景图地址").content


slide = ddddocr.DdddOcr(det=False,ocr=False,show_ad=False)
res = slide.slide_match(slice_bytes,bg_bytes,simple_target=True)
x1,y1,x2,y2 = res['target']

print(x1,y1,x2,y2)
```

对于ddddocr的实现，使用的是.slide_match方法，对比普通的文字/字母识别使用的是.classification方法

- 滑动识别 slide_match
- 内容识别 classification

<br>



#### 3.Selenium滑动

```python
from selenium.webdriver import ActionChains
...


service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

driver.get('https://www.geetest.com/adaptive-captcha')

tag = driver.find_element(By.CLASS_NAME,'geetest_btn')

ActionChains(driver).click_and_hold(tag).perform()                      #点击并抓住标签
ActionChains(driver).move_by_offset(xoffset=114,yoffset=0).perform()    #向右滑动114像素
ActionChains(driver).release().perform()                                #释放
```



#### 4.案例校验

```python
import re
import time
import ddddocr
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver import ActionChains

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

# 1.打开首页
driver.get('https://www.geetest.com/adaptive-captcha')

# 2.点击【滑动拼图验证】
tag = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.XPATH,
    '//*[@id="gt-showZh-mobile"]/div/section/div/div/div[1]/div[2]/div[3]/div[3]'
))
tag.click()

# 3.点击开始验证
tag2 = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.CLASS_NAME,
    'geetest_btn_click'
))
tag2.click()


# 4.获取背景图片
def fetch_bg_func(dv):
    tag_object = dv.find_element(
        By.CLASS_NAME,
        'geetest_bg'
    )
    style_string = tag_object.get_attribute("style")
    match_list = re.findall('url\(\"(.*)\"\);',style_string)
    if match_list:
        return match_list[0]

bg_img_url = WebDriverWait(driver,30,0.5).until(fetch_bg_func)
print("背景图:",bg_img_url)



# 4.获取缺口图片
def fetch_slice_func(dv):
    tag_object = dv.find_element(
        By.CLASS_NAME,
        'geetest_slice_bg'
    )
    style_string = tag_object.get_attribute("style")
    match_list = re.findall('url\(\"(.*)\"\);',style_string)
    if match_list:
        return match_list[0]

slice_img_url = WebDriverWait(driver,30,0.5).until(fetch_slice_func)
print("缺口图:",slice_img_url)


slice_bytes = requests.get(url=slice_img_url).content
bg_bytes = requests.get(url=bg_img_url).content


slide = ddddocr.DdddOcr(det=False,ocr=False,show_ad=False)
res = slide.slide_match(slice_bytes,bg_bytes,simple_target=True)
x1,y1,x2,y2 = res['target']

print(x1,y1,x2,y2)

def show_func(dv):
    geetest_box_tag = dv.find_element(By.CLASS_NAME,"geetest_box")
    display_string = geetest_box_tag.get_attribute("style")
    if "block" in display_string:
        time.sleep(2)
        return dv.find_element(By.CLASS_NAME,"geetest_btn")
btn_tag = WebDriverWait(driver,30,0.5).until(show_func)

ActionChains(driver).click_and_hold(btn_tag).perform()                      #点击并抓住标签
ActionChains(driver).move_by_offset(xoffset=x1,yoffset=0).perform()    #向右滑动114像素
ActionChains(driver).release().perform()                                #释放


time.sleep(1000)
driver.close()
```





<br>

### 02 图片和闭包应用

```python
def fetch_image_func(class_name):
    def inner(dv):
        tag_object = dv.find_element(
            By.CLASS_NAME,
            class_name
        )
        style_string = tag_object.get_attribute("style")
        match_list = re.findall('url\(\"(.*)\"\);', style_string)
        if match_list:
            return match_list[0]
    return inner

bg_img_url = WebDriverWait(driver,30,0.5).until(fetch_image_func('geetest_bg'))
print("背景图：",bg_img_url)
slice_img_url = WebDriverWait(driver,30,0.5).until(fetch_image_func('geetest_slice_bg'))
print("缺口图：",slice_img_url)
```

上述内容就是对获取背景图和缺口图进行闭包处理

闭包的定义：**在函数嵌套的前提下，内部函数使用了外部函数的变量，并且外部函数返回了内部函数，我们把这个使用外部函数变量的内部函数称为闭包。**

通过闭包的定义，我们可以得知闭包的形成条件:

- 在函数嵌套（函数里面再定义函数）的前提下
- 内部函数使用了外部函数的变量（还包括外部函数的参数）
- 外部函数返回了内部函数

简而言之，就是通过外部函数包装内部函数，然后通过外部函数的调用获取内部函数本身（即闭包对象），然后可以通过这个闭包对象的调用来获取内部函数的调用结果。

> 注意区别类的实例化和函数调用

 



<br>



## 2.3 中文点选验证

### 01 基本步骤

同样三步

- 获取图片（目标图片+背景图片）
- 识别图片 （目标文字+目标坐标）
- 对应顺序点击



<br>

#### 1.获取图片

获取图片可以使用requests请求，也可以使用selenium进行截屏

由于滑动窗口使用了了reuqests请求，因此本文字点选使用截屏

```python
import re
import time
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.wait import WebDriverWait

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

# 1.打开首页
driver.get('https://www.geetest.com/adaptive-captcha')

# 2.点击【文字点选验证】
tag = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.XPATH,
    '//*[@id="gt-showZh-mobile"]/div/section/div/div/div[1]/div[2]/div[3]/div[4]'
))
tag.click()

# 3.点击开始验证
tag2 = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.CLASS_NAME,
    'geetest_btn_click'
))
tag2.click()

time.sleep(5)

# 获取要识别的目标图片文字
target_tag = driver.find_element(
    By.CLASS_NAME,
    'geetest_ques_back'
)
target_tag.screenshot('target.png')

# 获取要识别的图片
bg_tag = driver.find_element(
    By.CLASS_NAME,
    'geetest_bg'
)
bg_tag.screenshot("bg.png")

time.sleep(1000)
driver.close()
```

<br>

#### 2.文字识别

文字内容识别，简单，【ddddocr】

```python
import re
import time

import ddddocr
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.wait import WebDriverWait

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

# 1.打开首页
driver.get('https://www.geetest.com/adaptive-captcha')

# 2.点击【文字点选验证】
tag = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.XPATH,
    '//*[@id="gt-showZh-mobile"]/div/section/div/div/div[1]/div[2]/div[3]/div[4]'
))
tag.click()

# 3.点击开始验证
tag2 = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.CLASS_NAME,
    'geetest_btn_click'
))
tag2.click()

time.sleep(5)

# 获取要识别的目标图片文字

target_word_list = []
parent = driver.find_element(By.CLASS_NAME,'geetest_ques_back')
tag_list = parent.find_elements(By.TAG_NAME,"img")
for tag in tag_list:
    ocr = ddddocr.DdddOcr(show_ad=False)
    word = ocr.classification(tag.screenshot_as_png)
    target_word_list.append(word)

print("要识别的文字：",target_word_list)


time.sleep(1000)
driver.close()
```

注意：上述内容在识别图片的classification方法中采用的是tag.screenshot_as_png，而不是先将图片保存到本地后，再二进制读取

> *screenshot_as_png* 方法可以帮助我们截取网页或网页元素的截图，并以二进制格式返回。

<br>



#### 3.图片文字坐标识别

图片中的文字坐标的识别，复杂，【ddddocr、打码平台】

```python
import re
import time
from io import BytesIO

import ddddocr
import requests
from PIL import Image,ImageDraw
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.wait import WebDriverWait

service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)

# 1.打开首页
driver.get('https://www.geetest.com/adaptive-captcha')

# 2.点击【文字点选验证】
tag = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.XPATH,
    '//*[@id="gt-showZh-mobile"]/div/section/div/div/div[1]/div[2]/div[3]/div[4]'
))
tag.click()

# 3.点击开始验证
tag2 = WebDriverWait(driver,30,0.5).until(lambda dv:dv.find_element(
    By.CLASS_NAME,
    'geetest_btn_click'
))
tag2.click()

time.sleep(5)

# 4.获取要识别的目标图片文字
target_word_list = []
parent = driver.find_element(By.CLASS_NAME,'geetest_ques_back')
tag_list = parent.find_elements(By.TAG_NAME,"img")
for tag in tag_list:
    ocr = ddddocr.DdddOcr(show_ad=False)
    word = ocr.classification(tag.screenshot_as_png)
    target_word_list.append(word)
print("要识别的文字：",target_word_list)

# 5.背景图片
bg_tag = driver.find_element(
    By.CLASS_NAME,
    'geetest_bg'
)
content = bg_tag.screenshot_as_png

# 6.识别背景中的所有文字并获取坐标
ocr = ddddocr.DdddOcr(show_ad=False,det=True)
poses = ocr.detection(content)

# 7.循环坐标中的每个文字并识别
bg_word_list = {}
img = Image.open(BytesIO(content))
for box in poses:
    # 根据坐标获取每个文字的图片
    x1,y1,x2,y2 = box
    corp = img.crop(box)
    img_byte = BytesIO()
    corp.save(img_byte,'png')
    #识别文字
    ocr2 = ddddocr.DdddOcr(show_ad=False)
    word = ocr2.classification(img_byte.getvalue())

    # 获取每个字的坐标
    bg_word_list[word] = [int((x1+x2)/2),int((y1+y2)/2)]

print(bg_word_list)
time.sleep(1000)
driver.close()
```

经过测试，可以发现背景图片的文字识别率偏低

可以自行使用pytorch进行训练，来提升准确率



<br>

#### 4.顺序点选

注意这里的点击，不是点击网页的某个标签，而是点击网页某个图片中的相对坐标

核心代码实现

```python
ActionChains(driver).move_to_element_with_offset(标签对象,xoffset=x,yoffset=y)
```

> 注意：这个坐标的原点再标签的中间，而不是左上角

```python
service = Service("driver/chromedriver.exe")
driver = webdriver.Chrome(service=service)
bg_tag = driver.find_element(
    By.CLASS_NAME,
    'geetest_bg'
)


target_word_list = [...]
bg_word_dict ={...}

for word in target_word_list:
    time.sleep(2)
    group = bg_word_dict.get(word)
    if not group:
        continue
    x,y = group
    x = int(x) - int(bg_tag.size['width']/2)
    y = int(y) - int(bg_tag.size['height']/2)
    ActionChains(driver).move_to_element_with_offset(bg_tag,xoffset=x,yoffset=y).click().perform()
```

   

<br>

### 02 自动化vs逆向

Selenium自动化实现

- 滑动验证
- 中文点选验证



爬虫js逆向方式实现：

- 滑动验证
- 中文点选验证



<br>

爬虫js逆向需要了解各种请求发送的算法，难度更高、效率更高  

  

<br>

# 3.JS逆向（案例）

## 3.1 xx平台



[基础教育教师培训](https://xuexi.chinabett.com/)

需求：

- 账户和密码加密
- 图片验证码

<br>

### 01 必备知识点

python 执行JavaScript

- 逆向某个网站，例如：md5/aes/rsa [js] [python还原]
- 拿到JavaScript -> python运行

  



如果要python执行JavaScript需要

1. 安装node.js【python调用node.js来运行javascipt】
2. nodejs运行js代码
3. python运行js代码

​    




#### 1.命令行执行js代码

```python
function func(arg){
    return arg + "666"
}

var res = process.argv[2];
console.log(func(res))

```

F:\>node v1.js kk
kk666

  



#### 2. python执行js代码

```python
import subprocess

res = subprocess.check_output('node v2.js "shit"',shell=True)
data_string = res.decode('utf-8')
print(data_string)
```

python代码通过subprocess模块进行js代码执行

> 此处还将返回的字符串，进行utf-8解码，这是为什么？




#### 3.pyexecjs

这是一个第三方模块（本质也是依赖node）

```python
import execjs
js_stirng = """
 function func(arg){
    return arg + 'shit';
 }
 
 function func2(arg){
    return arg + 'shit666';
 } 
 
"""

JS  = execjs.compile(js_stirng)
sign = JS.call("func","king")
print(sign)
```

通过compile进行编译，通过call来执行函数

如果js代码量多，可以放在其他文件中

```python
with open('v1.js',mode='r',encoding='utf-8') as f:
    js_string = f.read()
```




#### 4.图片验证码识别

简单的识别，可以使用ddddocr来进行

```python
import ddddocr
import requests


res = requests.get(url="https://xuexi.chinabett.com/Login/GetValidateCode/1739956491433")
with open("code.png",mode='wb') as f:
    f.write(res.content)
ocr = ddddocr.DdddOcr(show_ad=False)
code = ocr.classification(res.content)
print(code)
```

上述过程分为requests获取图片，和ddddocr识别图片



<br>

### 02 逆向分析



#### 1.用户密码

在本项目中的用户名和密码在发送请求的时候，经过了一定的处理，为了模拟这种请求，需要进行一定程度的逆向，即了解密码和用户名的处理策略

```js
function base64encode(str) {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64DecodeChars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

function s1() {
    var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var r = Math.floor(Math.random() * 62);
    return data[r];
}


function password_base64(str){
    password = base64encode(str)
    var newPwd = [];
    var pwdlength = password.length;
    for (i = 0; i < pwdlength; i++) {
        newPwd.push(password[i]);
        if (i < pwdlength - 1)
            newPwd.push(s1());

    }
    return newPwd.join('');
}
```

上述是网页逆向的密码和用户名的加密

```python
import execjs


with open('base64encode.js',mode='r',encoding='utf-8') as f:
    js_string = f.read()

JS  = execjs.compile(js_string)
sign = JS.call("base64encode","king")
password = JS.call("password_base64","123123")
print(sign,password)
```

上面是对于用户名和密码的python加密模拟

  


#### 2.代码实现

```python
import ddddocr
import execjs
import requests
from bs4 import BeautifulSoup

cookie_dict = {}

# 1.首页请求
res = requests.get(url="https://xuexi.chinabett.com/")
cookie_dict.update(res.cookies.get_dict())
print(cookie_dict)

# 2.获取验证码地址
soup =BeautifulSoup(res.text,features="html.parser")
image_tag = soup.find(name="img",attrs={"id":"imgVerifity"})
code_str = image_tag.attrs['src']

# 3.读取验证码
res =requests.get(url=f"https://xuexi.chinabett.com/{code_str}",cookies=cookie_dict)
cookie_dict.update(res.cookies.get_dict())
ocr = ddddocr.DdddOcr(show_ad=False)
code = ocr.classification(res.content)

# 4.处理用户名和密码
with open('base64encode.js',mode='r',encoding='utf-8') as f:
    js_string = f.read()

JS  = execjs.compile(js_string)
username = JS.call("base64encode","kkk")
password = JS.call("password_base64","123")


# 5.登录
print(username,password,code)
res = requests.post(
    url="https://xuexi.chinabett.com/Login/Entry",
    data={
        "userAccount":username,
        "password":password,
        "returnUrl":"/PersonalCenter",
        "proVing":code,
    },
    cookies=cookie_dict
)

print(res.text)
```

最终代码实现平台登录





<br>





<br>

## 3.2 x哪儿-滑块协议

https://user.qunar.com/passport/login.jsp

需求：

- 逆向滑块请求
- 发送短信登录



   




#### 01 必备知识点

##### 1.页面滑动

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div onmousedown="doDown(event)">吃饭了</div>


<script>
    function doDown(e){
        console.log("doDown",e);

        // 添加事件
        document.addEventListener("mousemove",doMove);
        document.addEventListener("mouseup",doUp);
    }

    function doMove(e){
        console.log("doMove",e);
    }

    function doUp(e){
        console.log("doup",e);

        document.removeEventListener("mousemove",doMove);
        document.removeEventListener("mouseup",doUp)
    }


</script>



</body>
</html>
```



##### 2.记录轨迹

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div onmousedown="doDown(event)">吃饭了</div>


<script>

    t = {
      state:{},
      sliderInfo:{
        track:[],
        deviceMotion:[]
      }
    }
    function doDown(e){

        var n =(e.changedTouches || e.touches || [e])[0];
        t.state.downX = n.clientX;
        console.log("开始x坐标：",n.clientX);

        console.log("doDown",e)
        // 添加事件
        document.addEventListener("mousemove",doMove);
        document.addEventListener("mouseup",doUp);
    }

    function doMove(e){
        //(e.changedTouches || e.touches || [e])[0] 就是 e
        var o = (e.changedTouches || e.touches || [e])[0];
        var n = t.state.downX;
        var u = (e = e ||window.event,o.clientX - n); //滑动距离
        var n = u;

        var  i = Date.now() %1e5
            ,s = (e.changedTouches || e.touches || [e])[0]
            ,o = s.clientX.toFixed(2)
            ,u = s.clientY.toFixed(2)
            ,a = n.toFixed(2)
            ,f = "".concat(i,";").concat(o,";").concat(u,";").concat(a);  //i;o;u;a

        t.sliderInfo.track.push(f);
        window.addEventListener("deviceorientation",function(e){
            t.sliderInfo.deviceMotion.push(e);
        },!1)
        console.log("滑动过程u：",u);
        console.log("doMove",e);
    }

    function doUp(e){
        console.log("doup",e);

        document.removeEventListener("mousemove",doMove);
        document.removeEventListener("mouseup",doUp)

        console.log(t.sliderInfo.track)
        console.log(t.sliderInfo.deviceMotion)
    }


</script>



</body>
</html>
```

  




##### 3.浏览器环境

上述内容中，使用python运行node.js从而运行js代码，但是有时候却不一定可以执行逆向得到的js代码

```python
<script>
  function func(arg){
    return arg + "666" + location.href + window.navigator.userAgent;
  }
  var res = func("king")
  console.log(res)

</script>
```

对于上述的js代码，函数中需要获取当前网站的url和当前网站的浏览器信息

上述的代码，不能使用python运行，因为没有浏览器环境

<br>

如何让python运行的时候具备浏览器环境呢？

python - > nodejs -> jsdom -> js +多出的代码

需要步骤：

- 安装三个模块

  - 安装jsdom npm install -g jsdom （jsdom是nodejs的第三方模块）

  - 安装 npm install -g node-gyp

  - 安装 npm install  -g canvas --canvas_binary_host_mirror=https://registry.npmmirror.com/-/binary/canvas

- 配置环境变量

  - NODE_PATH = 

- 创造浏览器环境

编写js文件

```javascript
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const html = '<!DOCTYPE html><p>hello world</p>';
const dom  = new JSDOM(html,{
    url:"http://www.toutiao.com",
    referrer:"https://example.com/",
    contentType:"text/html"
});

document = dom.window.document;

window =global;

Object.assign(global,{
    location:{
        hash:"",
        host:"user,qunar.com",
        hostname:"user.qunar.com",
        href:"https://user.qunar.com/passport/login.jsp",
        origin:"https://user.qunar.com",
        pathname:"/",
        port:"",
        protocol:"https:",
        search:""
    },
    navigator:{
        userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
    }

})

location = window.location;


function func(arg){
    return arg + "666" + location.href + window.navigator.userAgent;
}
```

然后在python文件中运行

```python
import execjs

with open("v3.js",mode='r',encoding='utf-8') as f:
    js_string = f.read()


JS = execjs.compile(js_string)
print(JS)
sign = JS.call("func","shit")
print(sign)
```

​    通过上述配置，即可在python中运行含浏览器环境的js代码

  

> ### 1. **HTML 规范中的“隐式补全”机制**
>
> HTML 规范允许省略某些标签，解析时会自动补全缺失的结构。例如：
>
> - 如果没有 `<html>` 标签，解析器会隐式创建 `<html>` 节点。
> - 如果没有 `<head>` 或 `<body>`，解析器会自动生成它们。
> - 标签未闭合（如 `<p>`）时，解析器会根据上下文自动补全闭合。
>
> 因此，即使你的代码写成：
>
> ```
> <!DOCTYPE html>
> <p>hello world</p>
> ```
>
> 解析器会将其补全为完整的结构：
>
> 
>
> ```
> <!DOCTYPE html>
> <html>
>   <head></head>
>   <body>
>     <p>hello world</p>
>   </body>
> </html>
> ```
>
> 
>
> ------
>
> ### 2. **JSDOM 的解析行为**
>
> `JSDOM` 严格遵循浏览器的解析规则，即使输入的 HTML 不完整，它也会自动补全缺失的标签，生成合法的 DOM 树。例如：
>
> ```
> const html = '<!DOCTYPE html><p>hello world</p>';
> const dom = new JSDOM(html);
> console.log(dom.serialize());
> ```
>
> 输出结果会是：
>
> ```
> <!DOCTYPE html><html><head></head><body><p>hello world</p></body></html>
> ```










##### 4.补环境

就是根据python运行的报错情况来进行补充环境

```python
function func(arg){
    var xhr = new XMLHttpRequest();
    return arg + "666" + location.href + window.navigator.userAgent;
}
```

假如代码中上述new XMLHttpRequest() 出现未定义错误，可以在js代码中进行补充（网上搜索该函数功能），一般是补充为空函数







#### 02 逆向轨迹snapshot

这个是滑块的轨迹，提交轨迹信息，返回cst

发送短信sendLoginCode的时候，需要发送cst信息



经过js代码分析

``` javascript
{
key: "encryption",
value: function() {
    var e = JSON.stringify(this.sliderInfo);
    return d.AES.encrypt(d.enc.Utf8.parse(e), d.enc.Utf8.parse("227V2xYeHTARSh1R"), {
        mode: d.mode.ECB,
        padding: d.pad.Pkcs7
    }).toString()
}



var a = t.encryption()


c.ajax({
    url: V,
    type: "POST",
    dataType: "JSON",
    data: {
        data: a,
        orca: 2,
        appCode: t.props.appCode,
        cs: X()
    },

var r = e.data

function o(e) {
    var t = [];
    for (var n in e)
        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.push(("v=" + Math.random()).replace(".", "")),t.join("&")
}

r = o(e.data)

r = {
    appCode:"register_pc",
    cs:"pc",
    data:"...",
    orca:2
    
}
```

分析上述js代码，最后得到下面moni

#####  模拟轨迹

```python
import time
import random

def get_slider_info():
    slider_list = []

    client_x = 80
    client_y = 231

    start_time = int(int(time.time() * 1000) %1e5)

    width = random.randint(419,431)

    for slice_distance in range(3,width,26):
        if width - slice_distance <= 26:
            slice_distance = width
        start_time += random.randint(10,1000)
        i = start_time
        o = f"{client_x + slice_distance}.00"
        u = f"{client_y + random.randint(-5,5)}.00"
        a = f"{slice_distance}.00"
        f = f"{i}:{o}:{u}:{a}"
        slider_list.append(f)

    return slider_list


def run():
    slider_list = get_slider_info()
    print(slider_list)

if __name__ =="__main__":
    run()
```



##### AES 模拟

AES模拟，python需要安装第三方模块

``` python
pip install pycryptodome
```



##### 整合

```python
import json
import requests
import time
import random
import base64
import binascii
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad

def aes_encrypt(e):
    #key = "227V2xYeHTARSh1R".encode('utf-8')
    key_string = "32323756327859654854415253683152"
    key = binascii.a2b_hex(key_string)

    aes = AES.new(
        key=key,
        mode=AES.MODE_ECB
    )
    raw = pad(e.encode('utf-8'),16)
    aes_bytes = aes.encrypt(raw)
    res = base64.b64encode(aes_bytes)
    print(res)

def get_slider_info():
    slider_list = []

    client_x = 80
    client_y = 231

    start_time = int(int(time.time() * 1000) %1e5)

    width = random.randint(419,431)

    for slice_distance in range(3,width,26):
        if width - slice_distance <= 26:
            slice_distance = width
        start_time += random.randint(10,1000)
        i = start_time
        o = f"{client_x + slice_distance}.00"
        u = f"{client_y + random.randint(-5,5)}.00"
        a = f"{slice_distance}.00"
        f = f"{i}:{o}:{u}:{a}"
        slider_list.append(f)

    return slider_list


def run():
    res = requests.get(url="https://user.qunar.com/passport/login.jsp")
    cookie_dict=res.cookies.get_dict()
    slider_list = get_slider_info()
    slider_info = {
        "openTime":int((time.time() - random.randint(500,3000)) * 1000),
        "startTime":int((time.time() - random.uniform(2,4)) * 1000),
        "endTime":int((time.time() - random.uniform(0,1) * 1000)),
        "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "uid":cookie_dict['QN1'],
        "track":slider_list,
        "acc":[],
        "ori":[],
        "deviceMotion":[{"isTrusted":True} for _ in range(random.randint(10,100))]
    }

    data_string = json.dumps(slider_info,separators={',',':'})
    data = aes_encrypt(data_string)


    r = {
        "appCode":"register_pc",
        "cs":"pc",
        "data":data,
        "orca":2
    }

    res = requests.post(
        url="https://vercode.qunar.com/inner/captcha/snapshot",
        json=r,
        cookies = cookie_dict
    )
    print(res.text)



if __name__ =="__main__":
    run()
```





#### 03 逆向提交sendLoginCode

主要分析sendLoginCode请求包



分析请求数据

```python
slideToken是轨迹返回的cst


var f = window.Bella({
    slideToken: o
}, {
    v: 2
});

u.append("bella", f);
```



##### 浏览器运行

由于js的代码涉及了window.Bella

> window是开发者在编写js文件的时候常用的一种全局变量声明

逆向思路（不一定需要了解具体实现）

- js文件拿来，自己使用
- window.Bella(...)



第一步尝试：HTML页面 + 网站js文件  -> 浏览器测试

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
 <script src="quna.js"></script>
<script>
   var bella = window.Bella({slideToken:"4d907638debdf6f370929d107e0f035a"},{v:2});
   console.log(bella);
</script>
</body>
</html>
```

第二步尝试：构造环境去运行（失败）

```python
import subprocess

res = subprocess.check_output('node quna.js',shell=True)
data_string = res.decode('utf-8')
print(data_string)
```

使用python运行js，并根据报错补充浏览器环境

如果一直补充空函数，然后逻辑上可以运行，即完成了简单的补充环境（但是补充的环境不一定对）

第三步尝试：



##### 补环境失败

通常补充环境失败，是由于js代码本身有检测等等

但是在所需的函数和检测的代码，有可能前者在前，后者在后，此时我们可以考虑仅拷贝到前者涉及范围。

- 找window.Bella关键字，找到赋值出下面一行

  > process.exit()  //主动让js终止

如果还是失败，那么就要考虑仔细分析代码





#### 04 短信登录













<br>

## 3.3 滑块验证码协议

<br>

## 3.4 点选验证码协议

<br>

## 3.5 TLS指纹

<br>

## 3.6 mitmproxy

<br>

## 3.7 x美点选

<br>

## 3.8 x盾滑块



<br>

# 4.APP逆向

## 4.1 安卓逆向

<br>

## 4.2 Frida框架

