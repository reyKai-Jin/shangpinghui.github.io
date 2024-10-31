import{_ as s,c as a,a2 as l,o as t}from"./chunks/framework.PsyKZGSE.js";const g=JSON.parse('{"title":"HTML 相关","description":"","frontmatter":{},"headers":[],"relativePath":"md/html-md/basis.md","filePath":"md/html-md/basis.md","lastUpdated":1730310704000}'),h={name:"md/html-md/basis.md"};function n(k,i,e,p,E,d){return t(),a("div",null,i[0]||(i[0]=[l(`<h1 id="html-相关" tabindex="-1">HTML 相关 <a class="header-anchor" href="#html-相关" aria-label="Permalink to &quot;HTML 相关&quot;">​</a></h1><h2 id="转义字符" tabindex="-1">转义字符 <a class="header-anchor" href="#转义字符" aria-label="Permalink to &quot;转义字符&quot;">​</a></h2><ul><li>&lt; 小于号</li><li>&gt; 大于号</li><li>  空格(不会被重叠)</li><li>© 版权符号</li></ul><h2 id="网页关键词和页面描述" tabindex="-1">网页关键词和页面描述 <a class="header-anchor" href="#网页关键词和页面描述" aria-label="Permalink to &quot;网页关键词和页面描述&quot;">​</a></h2><p>head 标签是网页的配置项</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 元标签  字符集   UTF-8是一种字符集  表示网页的基础配置 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Keywords&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;关键词&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Description&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;描述公司干啥的&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="文档类型声明-dtd" tabindex="-1">文档类型声明 DTD <a class="header-anchor" href="#文档类型声明-dtd" aria-label="Permalink to &quot;文档类型声明 DTD&quot;">​</a></h2><ul><li>HTML 文件第一行必须是 DTD（Document Type Definition，文档类型声明）</li><li>不写 DTD 会引发浏览器的一些兼容问题</li><li>不同版本的 HTML 有不同的 DTD 写法</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- HTML5 DTD--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- HTML4.01严格版 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PUBLIC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;_//W3C//DTD HTML 4.01//EN&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://www.w3.org/TR/html4/strict.dtd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- HTML4.01过渡版 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PUBLIC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;_//W3C//DTD HTML 4.01//EN&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://www.w3.org/TR/html4/loose.dtd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="h5-新特性" tabindex="-1">H5 新特性 <a class="header-anchor" href="#h5-新特性" aria-label="Permalink to &quot;H5 新特性&quot;">​</a></h2><p>HTML5 主要是关于图像，位置，存储，多任务等功能的增加。</p><ol><li>语义化更好的内容标签（header,nav,footer,aside,article,section）</li><li>表单控件，calendar、date、time、email、url、search</li><li>新的 API：</li></ol><ul><li>地理(Geolocation) API</li><li>拖拽释放(Drag and drop) API</li><li>音频、视频 API(audio,video)</li><li>画布(Canvas) API</li><li>多线程操作：Web Worker</li><li>本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；</li><li>sessionStorage 的数据在浏览器关闭后自动删除</li></ul><h2 id="语义化" tabindex="-1">语义化 <a class="header-anchor" href="#语义化" aria-label="Permalink to &quot;语义化&quot;">​</a></h2><p>语义化指的是：<strong>根据页面内容的结构，选择合适的 HTML 标签。</strong></p><ul><li>对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于 SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；</li><li>对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。</li></ul><p>通常一个文件中只出现一个 h1 和一个 main 标签最利于 SEO</p><p>使用 <strong>表格</strong> 时，标题要用 caption，表头用 thead，主体部分用 tbody 包围，尾部用 tfoot 包围。表头和一般单元格要区分开，表头用 th，单元格用 td</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">caption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Front-end web developer course 2021</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">caption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">thead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;col&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Person&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;col&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Most interest in&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;col&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Age&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">thead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tbody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;row&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Chris&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;HTML tables&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;22&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tbody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tfoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;row&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> colspan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Average age&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">th</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;33&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">td</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tfoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>表单域</strong> 要用 fieldset 标签包起来，并用 legend 标签说明表单的用途， 每个 input 标签对应的说明文本都需要使用 label 标签，并且通过为 input 设置 id 属性，在 lable 标签中设置 for=someld 来让说明文本和相对应的 input 关联起来。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fieldset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">legend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Choose your favorite monster&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">legend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kraken&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;monster&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;K&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kraken&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Kraken&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">br</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sasquatch&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;monster&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;S&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sasquatch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Sasquatch&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">br</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mothman&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;monster&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;M&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mothman&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Mothman&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fieldset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="常用语义化标签" tabindex="-1">常用语义化标签 <a class="header-anchor" href="#常用语义化标签" aria-label="Permalink to &quot;常用语义化标签&quot;">​</a></h3><ul><li><code>&lt;h1&gt; ~ &lt;h6&gt;</code> 标题标签</li><li><code>&lt;title&gt;</code> 文档的标题 <em>一个 head 元素只能包含一个 title 元素</em></li><li><code>&lt;ul&gt;</code> 无序列表</li><li><code>&lt;ol&gt;</code> 有序列表</li><li><code>&lt;header&gt;</code> 头部</li><li><code>&lt;nav&gt;</code> 导航</li><li><code>&lt;main&gt;</code> 页面主要内容 <em>只出现一次</em></li><li><code>&lt;section&gt;</code> 区块 节点</li><li><code>&lt;article&gt;</code> 文章 内容独立于文档其余部分</li><li><code>&lt;aside&gt;</code> 侧边栏</li><li><code>&lt;footer&gt;</code> 底部</li><li><code>&lt;small&gt;</code> 小号字体 指定细则，输入免责声明、注解、署名、版权</li><li><code>&lt;strong&gt;</code> 强调 比 em 更强</li><li><code>&lt;em&gt;</code> 强调斜体</li><li><code>&lt;mark&gt;</code> 标记 黄色凸显</li></ul><h3 id="其他语义化标签" tabindex="-1">其他语义化标签 <a class="header-anchor" href="#其他语义化标签" aria-label="Permalink to &quot;其他语义化标签&quot;">​</a></h3><ul><li><code>&lt;hgroup&gt;</code> 标题组合 <em>可在内部含 h1 不会与外部 h1 冲突</em></li><li><code>&lt;figure&gt;</code> 图片组合</li><li><code>&lt;figcaption&gt;</code> 图片标题 在 figure 内部使用</li><li><code>&lt;time&gt;</code> 时间 文本内容必须是合法日期或时间格式</li><li><code>&lt;progress&gt;</code> 进度条</li><li><code>&lt;cite&gt;</code> 某个参考文献的引用，比如书籍或者杂志的标题</li><li><code>&lt;details&gt;</code> 细节</li><li><code>&lt;summary&gt;</code> 摘要</li><li><code>&lt;dialog&gt;</code> 对话框</li><li><code>&lt;address&gt;</code> 地址 一般在 footer 里</li><li><code>&lt;blockquote&gt;</code> 块级引用 有它们自己的空间</li><li><code>&lt;abbr&gt;</code> 缩写</li><li><code>&lt;dfn&gt;</code> 定义术语元素 必须紧挨定义 可在描述列表 dl 元素中使用</li><li><code>&lt;q&gt;</code> 短的引述 <em>避免使用 有跨浏览器问题</em></li><li><code>&lt;del&gt;</code> 移除的内容</li><li><code>&lt;ins&gt;</code> 插入的内容</li><li><code>&lt;code&gt;</code> 行内代码元素</li><li><code>&lt;meter&gt;</code> 显示已知范围的标量值或者分数值 <em>效果像一个进度条</em></li></ul><h2 id="行内元素" tabindex="-1">行内元素： <a class="header-anchor" href="#行内元素" aria-label="Permalink to &quot;行内元素：&quot;">​</a></h2><ul><li><p>常见的标签：<code>a、span、sub、sup、br、strong、b、em、i、label</code></p></li><li><p>废弃的 b u i 等这些标签 因为管了 css 的事被废弃，但是后期都用来做 css 钩子标签（放置一些小图标）</p></li><li><p>特点：</p><ul><li>一行内可以存在多个；</li><li>无法设置 width、height，padding、margin 值不能设置垂直方向，只可以设置水平方向，可以设置 line-height；</li><li>一个行内元素内可以包括行内元素和文本内容，a 标签特殊：可以放块级元素、行内块元素，但不能再放一个 a 标签；</li><li>宽度默认随文本内容变化。</li></ul></li><li><p>设置方式：<code>display: inline</code></p></li></ul><h2 id="块级元素" tabindex="-1">块级元素： <a class="header-anchor" href="#块级元素" aria-label="Permalink to &quot;块级元素：&quot;">​</a></h2><ul><li>常见标签有：<code>div、ul、dl、ol、li、table、h1-h6、p、form、hr</code></li><li>特点： <ul><li>一个块级元素占据一行；</li><li>可以设置 width、height、padding 以及 margin 值；</li><li>块级元素可以包含块级元素、行内元素以及行内块元素，文本类型块级元素特殊：如 h1-h6、p 标签，只能包含文本；</li><li>宽度默认为父级元素宽度。</li></ul></li><li>设置方式：<code>display: block</code></li></ul><h2 id="行内块元素" tabindex="-1">行内块元素： <a class="header-anchor" href="#行内块元素" aria-label="Permalink to &quot;行内块元素：&quot;">​</a></h2><ul><li>常见标签有：<code>img、input、td</code></li><li>特点： <ul><li>一行可存在多个行内块元素，但它们之间存在空隙</li><li>可以设置 width、height、padding 以及 margin 值</li><li>宽度默认随文本内容变化</li></ul></li><li>设置方式：<code>display: inline-block</code></li></ul><h2 id="特殊问题-如何解决-inline-block-的空白间隙问题" tabindex="-1">特殊问题：如何解决 inline-block 的空白间隙问题？ <a class="header-anchor" href="#特殊问题-如何解决-inline-block-的空白间隙问题" aria-label="Permalink to &quot;特殊问题：如何解决 inline-block 的空白间隙问题？&quot;">​</a></h2><ol><li><p>手动去除标签之间的换行以及空格，会导致代码不美观</p></li><li><p>margin 负值</p></li><li><p>font-size: 0，但存在一个缺点，若子元素需要字体大小，则还需重新设置</p><p>下面两种很少用了</p><p>针对 IE6、7 浏览器，使用 word-spacing 修复 IE6、7 中始终存在的 1px 空隙，减少单词间的空白（即字间隔）</p></li><li><p>word-spacing 单词间距</p></li><li><p>letter-spacing 字符间距，但这个会导致重叠现象出现，个人使用无法达到预期效果</p></li></ol><h2 id="canvas-相关" tabindex="-1">canvas 相关 <a class="header-anchor" href="#canvas-相关" aria-label="Permalink to &quot;canvas 相关&quot;">​</a></h2><h3 id="svg-与-canvas-区别" tabindex="-1">svg 与 canvas 区别 <a class="header-anchor" href="#svg-与-canvas-区别" aria-label="Permalink to &quot;svg 与 canvas 区别&quot;">​</a></h3><ul><li>canvas 时 h5 提供的新的绘图方法 ；svg 已经有了十多年的历史</li><li>canvas 画图基于像素点，是位图，如果进行放大或缩小会失真 ；svg 基于图形，用 html 标签描绘形 状，放大缩小不会失真</li><li>canvas 需要在 js 中绘制 ；svg 在 html 绘制</li><li>canvas 支持颜色比 svg 多</li><li>canvas 无法对已经绘制的图像进行修改、操作 ；svg 可以获取到标签进行操作</li></ul><h2 id="title-和-alt" tabindex="-1">title 和 alt <a class="header-anchor" href="#title-和-alt" aria-label="Permalink to &quot;title 和 alt&quot;">​</a></h2><p>相同点：</p><ul><li>都用于解释图片，当鼠标滑动到元素上显示</li></ul><p>不同点：</p><ul><li>alt 是 img 特有属性，用来等价描述图片内容，图片无法显示时的代替文字</li><li>title 属性可以用在除了 base，basefont，head，html，meta，param，script 和 title 之外的所有标签，是对 dom 元素的一种类似注释说明</li></ul><h2 id="html-全局属性-global-attribute-有哪些" tabindex="-1">HTML 全局属性(global attribute)有哪些 <a class="header-anchor" href="#html-全局属性-global-attribute-有哪些" aria-label="Permalink to &quot;HTML 全局属性(global attribute)有哪些&quot;">​</a></h2><p>全局属性 是所有 HTML 元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用</p><ul><li>class :为元素设置类标识</li><li>data-* : 为元素增加自定义属性</li><li>draggable : 设置元素是否可拖拽</li><li>id : 元素 id ，文档内唯一</li><li>lang : 元素内容的的语言</li><li>style : 行内 css 样式</li><li>title : 元素相关的建议信息</li></ul><h2 id="回流重绘" tabindex="-1">回流重绘 <a class="header-anchor" href="#回流重绘" aria-label="Permalink to &quot;回流重绘&quot;">​</a></h2><p>回流一定会导致重绘，但重绘不一定会回流</p><h3 id="回流" tabindex="-1">回流 <a class="header-anchor" href="#回流" aria-label="Permalink to &quot;回流&quot;">​</a></h3><p>重新生成布局，重新排列元素（重新计算各节点和 css 具体的大小和位置：渲染树需要重新计算所有受影响的节点**）；例如：改元素的宽高，会触发回流</p><p>下面情况会发生</p><ul><li>页面初始渲染，这是开销最大的一次;</li><li>添加/删除可见的 DOM 元素;</li><li>改变元素位置;</li><li>改变元素尺寸，比如边距、填充、边框、宽度和高度等;</li><li>改变元素内容，元素字体大小，比如文字数量，图片大小等;</li><li>改变浏览器窗口尺寸，比如 resize 事件发生时;</li><li>激活 CSS 伪类（例如：:hover）</li><li>设置 style 属性的值，因为通过设置 style 属性改变结点样式的话，每一次设置都会触发一次 reflow</li><li>查询某些属性或调用某些计算方法：offsetWidth、offsetHeight 等，除此之外，当我们调用 getComputedStyl 方法，或者 IE 里的 currentStyle 时，也会触发回流，原理是一样的，都为求一个“即时性”和“准确性”</li><li>...</li></ul><h3 id="重绘" tabindex="-1">重绘 <a class="header-anchor" href="#重绘" aria-label="Permalink to &quot;重绘&quot;">​</a></h3><p>某些元素的外观被改变所触发的浏览器行为（重新计算节点在屏幕中的绝对位置并渲染的过程）； 例如：修改元素的填充颜色，会触发重绘</p><p>下面情况会发生重绘：</p><ul><li>color</li><li>border-style</li><li>border-radius</li><li>text-decoration</li><li>box-shadow</li><li>outline</li><li>background</li><li>... ...</li></ul><h3 id="如何解决" tabindex="-1">如何解决 <a class="header-anchor" href="#如何解决" aria-label="Permalink to &quot;如何解决&quot;">​</a></h3><ol><li><p>如果要多次操作 dom 去改变它的样式等属性，那就先给他添加 <code>display:none</code> 这样不显示时不会触发回流，操作完后再显示出来，这样就只触发一次回流，不会让他改一个属性就回流一次。</p></li><li><p>动画都放在带有 absolute 或 fix 定位的元素上，因为他们是脱离文档流的，不会影响其他元素。</p></li><li><p>利用内存，比如要动态的通过数据渲染一个列表，那就不要在现有的 ul 去一个一个添加 li ，而是直接生成一个完整 ul ，在内部处理 li 将每个 li 添加到 ul ，数据用完后再去生成 完整 ul 。</p></li><li><p>读写分离：将写入的值缓存，读取缓存的值，这个抽象写个例子：</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> offsetWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;100px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> renderEle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;demo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  renderEle.style.offsetWidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> offsetWidth </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导致重绘(写入)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tempoOffsetWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> renderEle.style.offsetWidth </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 读取可能会导致回流</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改成下面写法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> offsetWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;100px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> renderEle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;demo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  renderEle.style.offsetWidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> offsetWidth </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导致重绘(写入)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 这样减少一次也是赚的 毕竟是无法完全避免的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tempoOffsetWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> renderEle； </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 避免直接读取 offsetWidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempoOffsetWidth.style) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可以找到 offsetWidth=&quot;100px&quot;</span></span></code></pre></div>`,57)]))}const o=s(h,[["render",n]]);export{g as __pageData,o as default};