---
title: Docusaurus Tabs 官方示例
sidebar_label: Tabs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docusaurus Tabs 组件官方示例

## 1. 基础用法（官方最简示例）
在 `TabItem` 上直接设置 `label` 和 `default`：

<Tabs>
  <TabItem value="apple" label="苹果" default>
    这是一个苹果 🍎
  </TabItem>
  <TabItem value="orange" label="橙子">
    这是一个橙子 🍊
  </TabItem>
  <TabItem value="banana" label="香蕉">
    这是一个香蕉 🍌
  </TabItem>
</Tabs>

## 2. 推荐写法（values + defaultValue）
官方推荐通过 `values` 统一配置标签，`defaultValue` 指定默认选中项：

<Tabs
  defaultValue="apple"
  values={[
    { label: '苹果', value: 'apple' },
    { label: '橙子', value: 'orange' },
    { label: '香蕉', value: 'banana' },
  ]}
>
  <TabItem value="apple">
    这是一个苹果 🍎
  </TabItem>
  <TabItem value="orange">
    这是一个橙子 🍊
  </TabItem>
  <TabItem value="banana">
    这是一个香蕉 🍌
  </TabItem>
</Tabs>

## 3. 多语言代码示例（最常用场景）
<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js' },
    { label: 'Python', value: 'py' },
    { label: 'Java', value: 'java' },
  ]}
>
  <TabItem value="js">
    ```javascript
    console.log('Hello Docusaurus!');
    ```
</TabItem>

<TabItem value="py">
```python
print("Hello Docusaurus!")
```
</TabItem>
<TabItem value="java">
```java
public class Main {
public static void main(String[] args) {
System.out.println("Hello Docusaurus!");
}
}
```
</TabItem>
</Tabs>
