import{_ as e,r as t,o as p,c as o,a as s,b as n,d as l,e as i}from"./app.75e82d55.js";const c={},u=s("h2",{id:"vue-项目规范",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-项目规范","aria-hidden":"true"},"#"),n(" Vue 项目规范")],-1),r={href:"https://cn.vuejs.org/v2/style-guide/",target:"_blank",rel:"noopener noreferrer"},d=i(`<p>请仔仔细细阅读 Vue 官方规范，切记，此为第一步。</p><h3 id="组件规范" tabindex="-1"><a class="header-anchor" href="#组件规范" aria-hidden="true">#</a> 组件规范</h3><ol><li>组件名为多个单词</li></ol><p>组件名应该始终是多个单词组成（大于等于 2），且命名规范为 KebabCase 格式。</p><p>这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。</p><p>✅</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;TodoItem&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Todo&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;todo-item&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件文件名为-pascal-case-格式" tabindex="-1"><a class="header-anchor" href="#组件文件名为-pascal-case-格式" aria-hidden="true">#</a> 组件文件名为 pascal-case 格式</h3><p>✅</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- my-component.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- myComponent.vue
|- MyComponent.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础组件文件名为-base-开头-使用完整单词而不是缩写。" tabindex="-1"><a class="header-anchor" href="#基础组件文件名为-base-开头-使用完整单词而不是缩写。" aria-hidden="true">#</a> 基础组件文件名为 base 开头，使用完整单词而不是缩写。</h3><p>✅</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- base-button.vue
|- base-table.vue
|- base-icon.&lt;template&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {},

  created() {},

  mounted() {}

}
&lt;/script&gt;
&lt;style  scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="和父组件紧密耦合的子组件应该以父组件名作为前缀命名" tabindex="-1"><a class="header-anchor" href="#和父组件紧密耦合的子组件应该以父组件名作为前缀命名" aria-hidden="true">#</a> 和父组件紧密耦合的子组件应该以父组件名作为前缀命名</h3><p>✅</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue （完整单词）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
|- UProfOpts.vue （使用了缩写）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-template-模版中使用组件-应使用-pascalcase-模式-并且使用自闭合组件。" tabindex="-1"><a class="header-anchor" href="#在-template-模版中使用组件-应使用-pascalcase-模式-并且使用自闭合组件。" aria-hidden="true">#</a> 在 Template 模版中使用组件，应使用 PascalCase 模式，并且使用自闭合组件。</h3><p>✅</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 在单文件组件、字符串模板和 JSX 中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token punctuation">/&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>row</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>row</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="组件的-data-必须是一个函数" tabindex="-1"><a class="header-anchor" href="#组件的-data-必须是一个函数" aria-hidden="true">#</a> 组件的 data 必须是一个函数</h3><p>当在组件中使用 <code>data</code> 属性的时候(除了<code>new vue</code> 外的任何地方)，它的值必须是返回一个对象的西数。因为如果直接是一个对象的话，子组件之间的属性值会互相影响。</p><p>✅</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prop-定义应该尽量详细" tabindex="-1"><a class="header-anchor" href="#prop-定义应该尽量详细" aria-hidden="true">#</a> Prop 定义应该尽量详细</h3><ul><li>必须使用 camelCase 驼峰命名</li><li>必须指定类型</li><li>必须加上注释，表明其含义</li><li>必须加上 required 或者 default，两者二选其一</li><li>如果有业务需要，必须加上 validator 验证</li></ul><p>✅</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 组件状态，用于控制组件的颜色</span>
   <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
     <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
     <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;succ&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;error&#39;</span>
       <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 用户级别，用于显示皇冠个数</span>
   userLevel：<span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为组件样式设置作用域" tabindex="-1"><a class="header-anchor" href="#为组件样式设置作用域" aria-hidden="true">#</a> 为组件样式设置作用域</h3><p>✅</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>X<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 使用 \`scoped\` 特性 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.btn-close</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>X<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 没有使用 \`scoped\` 特性 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.btn-close</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如果特性元素较多-应该主动换行" tabindex="-1"><a class="header-anchor" href="#如果特性元素较多-应该主动换行" aria-hidden="true">#</a> 如果特性元素较多，应该主动换行</h3><p>❌</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;MyComponent foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot; foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot; foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot; foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="模板中使用简单的表达式" tabindex="-1"><a class="header-anchor" href="#模板中使用简单的表达式" aria-hidden="true">#</a> 模板中使用简单的表达式</h3><p>组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。</p><p>✅</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ normalizedFullName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> defalut <span class="token punctuation">{</span>
  <span class="token comment">// 复杂表达式已经移入一个计算属性</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">normalizedFullName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fullName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> word<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    {{
      fullName
        .split(&quot; &quot;)
        .map(function (word) {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(&quot; &quot;)
    }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指令都使用缩写形式" tabindex="-1"><a class="header-anchor" href="#指令都使用缩写形式" aria-hidden="true">#</a> 指令都使用缩写形式</h3><p>指令推荐都使用缩写形式，(用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:)</p><p>✅</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onInput<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFocus<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>❌</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-on:</span>input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onInput<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFocus<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="标签顺序保持一致" tabindex="-1"><a class="header-anchor" href="#标签顺序保持一致" aria-hidden="true">#</a> 标签顺序保持一致</h3><p>单文件组件应该总是让标签顺序保持为</p><p>✅</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❌</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="必须为-v-for-设置键值-key" tabindex="-1"><a class="header-anchor" href="#必须为-v-for-设置键值-key" aria-hidden="true">#</a> 必须为 v-for 设置键值 key</h3><h3 id="v-show-与-v-if-选择" tabindex="-1"><a class="header-anchor" href="#v-show-与-v-if-选择" aria-hidden="true">#</a> v-show 与 v-if 选择</h3><p>如果运行时，需要非常频繁地切换，使用 v-show ；如果在运行时，条件很少改变，使用 v-if。</p><h3 id="script-标签内部结构顺序" tabindex="-1"><a class="header-anchor" href="#script-标签内部结构顺序" aria-hidden="true">#</a> script 标签内部结构顺序</h3><p><code>components</code> &gt; <code>props</code> &gt; <code>data</code> &gt; <code>computed</code> &gt; <code>watch</code> &gt; <code>filter</code> &gt; 钩子函数（钩子函数按其执行顺序） &gt; <code>methods</code></p><h2 id="vue-router-规范" tabindex="-1"><a class="header-anchor" href="#vue-router-规范" aria-hidden="true">#</a> Vue Router 规范</h2><ol><li>页面跳转数据传递使用路由参数</li></ol><p>页面跳转，例如 A 页面跳转到 B 页面，需要将 A 页面的数据传递到 B 页面，推荐使用 路由参数进行传参，而不是将需要传递的数据保存 vuex，然后在 B 页面取出 vuex 的数据，因为如果在 B 页面刷新会导致 vuex 数据丢失，导致 B 页面无法正常显示数据。</p><p>✅</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">&quot; 123&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;userCenter&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用路由懒加载（延迟加载）机制</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/uploadAttachment&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;uploadAttachment&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;上传附件&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/view/components/uploadAttachment/index.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>router 中的命名规范</li></ol><p><code>path</code>、<code>childrenPoints</code> 命名规范采用<code>kebab-case</code>命名规范（尽量 vue 文件的目录结构保持一致，因为目录、文件名都是 kebab-case，这样很方便找到对应的文件）</p><p><code>name</code> 命名规范采用<code>KebabCase</code>命名规范且和<code>component</code>组件名保持一致！（因为要保持<code>keep-alive</code>特性，<code>keep-alive</code>按照<code>component</code>的<code>name</code>进行缓存，所以两者必须高度保持一致）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 动态加载</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> reload <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/reload&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;reload&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Main<span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;动态加载&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;icon iconfont&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/reload/smart-reload-list&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;SmartReloadList&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;SmartReload&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">childrenPoints</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;查询&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;smart-reload-search&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;执行reload&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;smart-reload-update&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;查看执行结果&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;smart-reload-result&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/reload/smart-reload/smart-reload-list.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>router 中的 path 命名规范</li></ol><p><code>path</code> 除了采用<code>kebab-case</code>命名规范以外，必须以 / 开头，即使是<code>children</code>里的 path 也要以 / 开头。如下示例</p><p>目的：</p><p>经常有这样的场景：某个页面有问题，要立刻找到这个 vue 文件，如果不用以/开头，<code>path</code>为<code>parent</code>和<code>children</code>组成的，可能经常需要在 router 文件里搜索多次才能找到，而如果以/开头，则能立刻搜索到对应的组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/file&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;File&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Main<span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;文件服务&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;ios-cloud-upload&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/file/file-list&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;FileList&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/file/file-list.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/file/file-add&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;FileAdd&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/file/file-add.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/file/file-update&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;FileUpdate&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/file/file-update.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-项目目录规范" tabindex="-1"><a class="header-anchor" href="#vue-项目目录规范" aria-hidden="true">#</a> Vue 项目目录规范</h2><ol><li>基础</li></ol><p>vue 项目中的所有命名一定要与后端命名统一。 比如权限：后端 privilege, 前端无论 router , store, api 等都必须使用 privielege 单词！</p><ol start="2"><li>使用 Vue-cli 脚手架</li></ol><p>使用 vue-cli3 来初始化项目，项目名按照上面的命名规范。</p><ol start="3"><li>目录说明</li></ol><p>目录名按照上面的命名规范，其中 components 组件用大写驼峰，其余除 components 组件目录外的所有目录均使用 kebab-case 命名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src                                  源码目录
|-- api                              所有api接口
|-- assets                           静态资源，images, icons, styles等
|-- components                       公用组件
|-- config                           配置信息
|-- constants                        常量信息，项目所有Enum, 全局常量等
|-- directives                       自定义指令
|-- filters                          过滤器，全局工具
|-- datas                            模拟数据，临时存放
|-- lib                              外部引用的插件存放及修改文件
|-- mock                             模拟接口，临时存放
|-- plugins                          插件，全局使用
|-- router                           路由，统一管理
|-- store                            vuex, 统一管理
|-- themes                           自定义样式主题
|-- views                            视图目录
|   |-- role                                 role模块名
|   |-- |-- role-list.vue                    role列表页面
|   |-- |-- role-add.vue                     role新建页面
|   |-- |-- role-update.vue                  role更新页面
|   |-- |-- index.less                       role模块样式
|   |-- |-- components                       role模块通用组件文件夹
|   |-- employee                             employee模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>api 目录</li></ol><p>文件、变量命名要与后端保持一致。</p><p>此目录对应后端 API 接口，按照后端一个 controller 一个 api js 文件。若项目较大时，可以按照业务划分子目录，并与后端保持一致。</p><p>api 中的方法名字要与后端 api url 尽量保持语义高度一致性。</p><p>对于 api 中的每个方法要添加注释，注释与后端 swagger 文档保持一致。</p><p>后端 url： EmployeeController.java</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/employee/add
/employee/delete/{id}
/employee/update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端： employee.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 添加员工</span>
<span class="token function-variable function">addEmployee</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">postAxios</span><span class="token punctuation">(</span><span class="token string">&#39;/employee/add&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 更新员工信息</span>
<span class="token function-variable function">updateEmployee</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">postAxios</span><span class="token punctuation">(</span><span class="token string">&#39;/employee/update&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 删除员工</span>
<span class="token function-variable function">deleteEmployee</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">employeeId</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">postAxios</span><span class="token punctuation">(</span><span class="token string">&#39;/employee/delete/&#39;</span> <span class="token operator">+</span> employeeId<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>assets 目录</li></ol><p>assets 为静态资源，里面存放 images, styles, icons 等静态资源，静态资源命名格式为 kebab-case</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|assets
|-- icons
|-- images
|   |-- background-color.png
|   |-- upload-header.png
|-- styles

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>components 目录</li></ol><p>此目录应按照组件进行目录划分，目录命名为 KebabCase，组件命名规则也为 KebabCase</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|components
|-- error-log
|   |-- index.vue
|   |-- index.less
|-- markdown-editor
|   |-- index.vue
|   |-- index.js
|-- kebab-case
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>constants 目录</li></ol><p>此目录存放项目所有常量，如果常量在 vue 中使用，请使用 vue-enum 插件</p><p>目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|constants
|-- index.js
|-- role.js
|-- employee.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子： employee.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">EMPLOYEE_STATUS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">NORMAL</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;正常&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">DISABLED</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;禁用&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">DELETED</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;已删除&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">EMPLOYEE_ACCOUNT_TYPE</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">QQ</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;QQ登录&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">WECHAT</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;微信登录&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">DINGDING</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;钉钉登录&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">USERNAME</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;用户名密码登录&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token constant">EMPLOYEE_STATUS</span><span class="token punctuation">,</span>
  <span class="token constant">EMPLOYEE_ACCOUNT_TYPE</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>router 与 store 目录</li></ol><p>这两个目录一定要将业务进行拆分，不能放到一个 js 文件里。 <code>router</code> 尽量按照 views 中的结构保持一致 <code>store</code> 按照业务进行拆分不同的 js 文件</p><ol start="6"><li>views 目录</li></ol><p>命名要与后端、<code>router</code>、<code>api</code> 等保持一致 <code>components</code> 中组件要使用 <code>PascalCase</code> 规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- views                                    视图目录
|   |-- role                                 role模块名
|   |   |-- role-list.vue                    role列表页面
|   |   |-- role-add.vue                     role新建页面
|   |   |-- role-update.vue                  role更新页面
|   |   |-- index.less                      role模块样式
|   |   |-- components                      role模块通用组件文件夹
|   |   |   |-- role-header.vue             role头部组件
|   |   |   |-- role-modal.vue              role弹出框组件
|   |-- employee                            employee模块
|   |-- behavior-log                        行为日志log模块
|   |-- code-generator                      代码生成器模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释说明</p><p>整理必须加注释的地方</p><p>公共组件使用说明</p><p>api 目录的接口 js 文件必须加注释 store 中的 state, mutation, action 等必须加注释 vue 文件中的 template 必须加注释，若文件较大添加 start end 注释 vue 文件的 methods，每个 method 必须添加注释 vue 文件的 data, 非常见单词要加注释</p><ol start="7"><li>其他</li></ol><p>尽量不要手动操作 DOM</p><p>因使用 vue 框架，所以在项目开发中尽量使用 vue 的数据驱动更新 DOM，尽量（不到万不得已）不要手动操作 DOM，包括：增删改 dom 元素、以及更改样式、添加事件等。</p><p>删除无用代码</p><p>因使用了 git/svn 等代码版本工具，对于无用代码必须及时删除，例如：一些调试的 console 语句、无用的弃用功能代码。</p>`,129);function v(k,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,s("p",null,[n("vue 项目规范以 Vue "),s("a",r,[n("官方规范"),l(a)]),n(" 中的 A 规范为基础，在其上面进行项目开发，故所有代码均遵守该规范。")]),d])}const g=e(c,[["render",v],["__file","index.html.vue"]]);export{g as default};
