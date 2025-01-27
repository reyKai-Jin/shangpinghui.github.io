# HTML 相关

## 转义字符

- &lt; 小于号
- &gt; 大于号
- &nbsp; 空格(不会被重叠)
- &copy; 版权符号

## 网页关键词和页面描述

head 标签是网页的配置项

```html
<!-- 元标签  字符集   UTF-8是一种字符集  表示网页的基础配置 -->
<meta charset="UTF-8" />
<meta name="Keywords" content="关键词" />
<meta name="Description" content="描述公司干啥的" />
```

## 文档类型声明 DTD

- HTML 文件第一行必须是 DTD（Document Type Definition，文档类型声明）
- 不写 DTD 会引发浏览器的一些兼容问题
- 不同版本的 HTML 有不同的 DTD 写法

```html
<!-- HTML5 DTD-->
<!DOCTYPE html>
<!-- HTML4.01严格版 -->
<!DOCTYPE html PUBLIC "_//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!-- HTML4.01过渡版 -->
<!DOCTYPE html PUBLIC "_//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

## H5 新特性

HTML5 主要是关于图像，位置，存储，多任务等功能的增加。

1. 语义化更好的内容标签（header,nav,footer,aside,article,section）
2. 表单控件，calendar、date、time、email、url、search
3. 新的 API：

- 地理(Geolocation) API
- 拖拽释放(Drag and drop) API
- 音频、视频 API(audio,video)
- 画布(Canvas) API
- 多线程操作：Web Worker
- 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
- sessionStorage 的数据在浏览器关闭后自动删除

## 语义化

语义化指的是：**根据页面内容的结构，选择合适的 HTML 标签。**

- 对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于 SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；
- 对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。

通常一个文件中只出现一个 h1 和一个 main 标签最利于 SEO

使用 **表格** 时，标题要用 caption，表头用 thead，主体部分用 tbody 包围，尾部用 tfoot 包围。表头和一般单元格要区分开，表头用 th，单元格用 td

```html
<table>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
```

**表单域** 要用 fieldset 标签包起来，并用 legend 标签说明表单的用途，
每个 input 标签对应的说明文本都需要使用 label 标签，并且通过为 input 设置 id 属性，在 lable 标签中设置 for=someld 来让说明文本和相对应的 input 关联起来。

```html
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

### 常用语义化标签

- `<h1> ~ <h6>` 标题标签
- `<title>` 文档的标题 _一个 head 元素只能包含一个 title 元素_
- `<ul>` 无序列表
- `<ol>` 有序列表
- `<header>` 头部
- `<nav>` 导航
- `<main>` 页面主要内容 _只出现一次_
- `<section>` 区块 节点
- `<article>` 文章 内容独立于文档其余部分
- `<aside>` 侧边栏
- `<footer>` 底部
- `<small>` 小号字体 指定细则，输入免责声明、注解、署名、版权
- `<strong>` 强调 比 em 更强
- `<em>` 强调斜体
- `<mark>` 标记 黄色凸显

### 其他语义化标签

- `<hgroup>` 标题组合 _可在内部含 h1 不会与外部 h1 冲突_
- `<figure>` 图片组合
- `<figcaption>` 图片标题 在 figure 内部使用
- `<time>` 时间 文本内容必须是合法日期或时间格式
- `<progress>` 进度条
- `<cite>` 某个参考文献的引用，比如书籍或者杂志的标题
- `<details>` 细节
- `<summary>` 摘要
- `<dialog>` 对话框
- `<address>` 地址 一般在 footer 里
- `<blockquote>` 块级引用 有它们自己的空间
- `<abbr>` 缩写
- `<dfn>` 定义术语元素 必须紧挨定义 可在描述列表 dl 元素中使用
- `<q>` 短的引述 _避免使用 有跨浏览器问题_
- `<del>` 移除的内容
- `<ins>` 插入的内容
- `<code>` 行内代码元素
- `<meter>` 显示已知范围的标量值或者分数值 _效果像一个进度条_

## 行内元素：

- 常见的标签：`a、span、sub、sup、br、strong、b、em、i、label`

- 废弃的 b u i 等这些标签 因为管了 css 的事被废弃，但是后期都用来做 css 钩子标签（放置一些小图标）

- 特点：

  - 一行内可以存在多个；
  - 无法设置 width、height，padding、margin 值不能设置垂直方向，只可以设置水平方向，可以设置 line-height；
  - 一个行内元素内可以包括行内元素和文本内容，a 标签特殊：可以放块级元素、行内块元素，但不能再放一个 a 标签；
  - 宽度默认随文本内容变化。

- 设置方式：`display: inline`

## 块级元素：

- 常见标签有：`div、ul、dl、ol、li、table、h1-h6、p、form、hr`
- 特点：
  - 一个块级元素占据一行；
  - 可以设置 width、height、padding 以及 margin 值；
  - 块级元素可以包含块级元素、行内元素以及行内块元素，文本类型块级元素特殊：如 h1-h6、p 标签，只能包含文本；
  - 宽度默认为父级元素宽度。
- 设置方式：`display: block`

## 行内块元素：

- 常见标签有：`img、input、td`
- 特点：
  - 一行可存在多个行内块元素，但它们之间存在空隙
  - 可以设置 width、height、padding 以及 margin 值
  - 宽度默认随文本内容变化
- 设置方式：`display: inline-block`

## 特殊问题：如何解决 inline-block 的空白间隙问题？

1. 手动去除标签之间的换行以及空格，会导致代码不美观

2. margin 负值

3. font-size: 0，但存在一个缺点，若子元素需要字体大小，则还需重新设置

   下面两种很少用了

   针对 IE6、7 浏览器，使用 word-spacing 修复 IE6、7 中始终存在的 1px 空隙，减少单词间的空白（即字间隔）

4. word-spacing 单词间距

5. letter-spacing 字符间距，但这个会导致重叠现象出现，个人使用无法达到预期效果

## canvas 相关

### svg 与 canvas 区别

- canvas 时 h5 提供的新的绘图方法 ；svg 已经有了十多年的历史
- canvas 画图基于像素点，是位图，如果进行放大或缩小会失真 ；svg 基于图形，用 html 标签描绘形
  状，放大缩小不会失真
- canvas 需要在 js 中绘制 ；svg 在 html 绘制
- canvas 支持颜色比 svg 多
- canvas 无法对已经绘制的图像进行修改、操作 ；svg 可以获取到标签进行操作

## title 和 alt

相同点：

- 都用于解释图片，当鼠标滑动到元素上显示

不同点：

- alt 是 img 特有属性，用来等价描述图片内容，图片无法显示时的代替文字
- title 属性可以用在除了 base，basefont，head，html，meta，param，script 和 title 之外的所有标签，是对 dom 元素的一种类似注释说明

## HTML 全局属性(global attribute)有哪些

全局属性 是所有 HTML 元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用

- class :为元素设置类标识
- data-\* : 为元素增加自定义属性
- draggable : 设置元素是否可拖拽
- id : 元素 id ，文档内唯一
- lang : 元素内容的的语言
- style : 行内 css 样式
- title : 元素相关的建议信息

## 回流重绘

回流一定会导致重绘，但重绘不一定会回流

### 回流

重新生成布局，重新排列元素（重新计算各节点和 css 具体的大小和位置：渲染树需要重新计算所有受影响的节点\*\*）；例如：改元素的宽高，会触发回流

下面情况会发生

- 页面初始渲染，这是开销最大的一次;
- 添加/删除可见的 DOM 元素;
- 改变元素位置;
- 改变元素尺寸，比如边距、填充、边框、宽度和高度等;
- 改变元素内容，元素字体大小，比如文字数量，图片大小等;
- 改变浏览器窗口尺寸，比如 resize 事件发生时;
- 激活 CSS 伪类（例如：:hover）
- 设置 style 属性的值，因为通过设置 style 属性改变结点样式的话，每一次设置都会触发一次 reflow
- 查询某些属性或调用某些计算方法：offsetWidth、offsetHeight 等，除此之外，当我们调用 getComputedStyl 方法，或者 IE 里的 currentStyle 时，也会触发回流，原理是一样的，都为求一个“即时性”和“准确性”
- ...

### 重绘

某些元素的外观被改变所触发的浏览器行为（重新计算节点在屏幕中的绝对位置并渲染的过程）； 例如：修改元素的填充颜色，会触发重绘

下面情况会发生重绘：

- color
- border-style
- border-radius
- text-decoration
- box-shadow
- outline
- background
- ...
  ...

### 如何解决

1. 如果要多次操作 dom 去改变它的样式等属性，那就先给他添加 `display:none` 这样不显示时不会触发回流，操作完后再显示出来，这样就只触发一次回流，不会让他改一个属性就回流一次。

2. 动画都放在带有 absolute 或 fix 定位的元素上，因为他们是脱离文档流的，不会影响其他元素。

3. 利用内存，比如要动态的通过数据渲染一个列表，那就不要在现有的 ul 去一个一个添加 li ，而是直接生成一个完整 ul ，在内部处理 li 将每个 li 添加到 ul ，数据用完后再去生成 完整 ul 。

4. 读写分离：将写入的值缓存，读取缓存的值，这个抽象写个例子：

```js
  const offsetWidth = '100px';
  const renderEle = document.getElementById('demo');
  renderEle.style.offsetWidth = offsetWidth // 导致重绘(写入)
  const tempoOffsetWidth = renderEle.style.offsetWidth // 读取可能会导致回流
// 修改成下面写法
  const offsetWidth = '100px';
  const renderEle = document.getElementById('demo');
  renderEle.style.offsetWidth = offsetWidth // 导致重绘(写入)
  // 这样减少一次也是赚的 毕竟是无法完全避免的
  const tempoOffsetWidth = renderEle； // 避免直接读取 offsetWidth
  console.log(tempoOffsetWidth.style) // 可以找到 offsetWidth="100px"
```
