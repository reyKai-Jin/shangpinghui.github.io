import{_ as a,c as i,a2 as n,o as e}from"./chunks/framework.PsyKZGSE.js";const c=JSON.parse('{"title":"Nest.js (暂停更新本章节)","description":"","frontmatter":{},"headers":[],"relativePath":"md/server-md/nestJs.md","filePath":"md/server-md/nestJs.md","lastUpdated":1730310704000}'),t={name:"md/server-md/nestJs.md"};function p(h,s,l,k,d,r){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="nest-js-暂停更新本章节" tabindex="-1">Nest.js (暂停更新本章节) <a class="header-anchor" href="#nest-js-暂停更新本章节" aria-label="Permalink to &quot;Nest.js (暂停更新本章节)&quot;">​</a></h1><p>用于构建服务器端应用程序的框架，主要用于开发后端服务。它基于 Node.js 和 Express.js，但提供了更高层次的抽象和更多的功能，如模块化架构、依赖注入、控制器、服务、中间件等,Nest.js 主要用于编写业务逻辑，处理 HTTP 请求，与数据库交互，以及实现各种后端功能</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-hs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nestjs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cli</span></span></code></pre></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><div class="language-hs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nest new project</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span></span></code></pre></div><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><p>第一次启动较慢，用的 webpack 打包,默认 <code>localhost:3000</code> 访问</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#配置文件有</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #（无热更新）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start:dev</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #（启用热更新）</span></span></code></pre></div><h2 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h2><p>这里使用 mongoDb 数据库，需要安装依赖:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  @nestjs/mongoose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongoose</span></span></code></pre></div><p>启动 mongoDb 服务: <code>mongod --dbpath D:\\XXX\\xxx(你安装的路径)</code></p><p>nest 生成一个 user 模块</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> res</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 会有几个选项</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># REST API (我们选这个)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># GraphQL (code first)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># GraphQL (schema first)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Microservice (non-Http) (微服务)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># WebSockets</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#是否生成怎删改查模板 选 Y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果出现undefined (reading &#39;text&#39;)报错 请将typescript版本改为 5.5.3就可以解决</span></span></code></pre></div>`,15)]))}const g=a(t,[["render",p]]);export{c as __pageData,g as default};
