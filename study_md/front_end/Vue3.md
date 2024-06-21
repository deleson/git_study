# 0.课程介绍

本文件是bilibili尚硅谷的Vue3课程笔记，发布时间是2023年12月



# 1.Vue3 简介

Vue3在2020年9月18日发布，代号one piece

## 1.1 性能的提升

- 打包大小减少41%
- 初次渲染快55%，更新渲染快133%
- 内存减少54%



## 1.2 源码的提升

- 使用Proxy代替defineProperty实现响应式
- 重写虚拟DOM的实现和Tree-Shaking





## 1.3 拥抱TypeScript

- Vue3可以更好的支持TypeScript





## 1.4新的特性

1. Composition APi（组合式API）

   - setup

   - ref与reactive

   - computed与watch

     ...

2. 新的内置组件：

   - Fragment

   - Teleport

   - Suspense

     ...

3. 其他改变：

   - 新的生命周期钩子

   - data选项应始终被声明为一个函数

   - 移除keyCode支持作为v-on的修饰符

     ...