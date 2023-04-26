const e=JSON.parse('{"key":"v-0c67a68f","path":"/article/vue/oversized-text-displays-ellipses-and-tooltip.html","title":"文字超长显示省略号和 ToolTip","lang":"zh-CN","frontmatter":{"date":"2023-03-13T00:00:00.000Z","category":["Vue","Element UI","Ant Design Vue"],"tag":["Vue","Element UI","Ant Design Vue","ToolTip"],"containerClass":"article-container","description":"文字超长显示省略号和 ToolTip 日常开发过程中避免不了需要显示一些内容，但是内容超长了需要显示...，鼠标悬停需要显示完整内容，原生的title属性虽然可以做到上述的需求，但是完整内容无法复制，也不适用于隐藏的内容是非纯文本的情况，一般 UI 组件都会提供 ToolTip 的组件，我们就可以利用这个组件控制鼠标悬停显示完整内容。下面记录下实际开发过程中使用 Element UI 或者 Ant Design Vue 实现该需求过程。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/vue/oversized-text-displays-ellipses-and-tooltip.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"文字超长显示省略号和 ToolTip"}],["meta",{"property":"og:description","content":"文字超长显示省略号和 ToolTip 日常开发过程中避免不了需要显示一些内容，但是内容超长了需要显示...，鼠标悬停需要显示完整内容，原生的title属性虽然可以做到上述的需求，但是完整内容无法复制，也不适用于隐藏的内容是非纯文本的情况，一般 UI 组件都会提供 ToolTip 的组件，我们就可以利用这个组件控制鼠标悬停显示完整内容。下面记录下实际开发过程中使用 Element UI 或者 Ant Design Vue 实现该需求过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-27T09:43:05.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Element UI"}],["meta",{"property":"article:tag","content":"Ant Design Vue"}],["meta",{"property":"article:tag","content":"ToolTip"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-27T09:43:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文字超长显示省略号和 ToolTip\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-27T09:43:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"分析场景","slug":"分析场景","link":"#分析场景","children":[]},{"level":2,"title":"各版本实现","slug":"各版本实现","link":"#各版本实现","children":[{"level":3,"title":"Element Plus（Vue3）","slug":"element-plus-vue3","link":"#element-plus-vue3","children":[]},{"level":3,"title":"Ant Design Vue 3.x（Vue3）","slug":"ant-design-vue-3-x-vue3","link":"#ant-design-vue-3-x-vue3","children":[]},{"level":3,"title":"Element UI（Vue2）","slug":"element-ui-vue2","link":"#element-ui-vue2","children":[]},{"level":3,"title":"Ant Design Vue 1.x（Vue2）","slug":"ant-design-vue-1-x-vue2","link":"#ant-design-vue-1-x-vue2","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1679122489000,"updatedTime":1679910185000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":4}]},"readingTime":{"minutes":4.97,"words":1492},"filePathRelative":"article/vue/oversized-text-displays-ellipses-and-tooltip.md","localizedDate":"2023年3月13日","excerpt":"<h1> 文字超长显示省略号和 ToolTip</h1>\\n<p>日常开发过程中避免不了需要显示一些内容，但是内容超长了需要显示...，鼠标悬停需要显示完整内容，原生的<code>title</code>属性虽然可以做到上述的需求，但是完整内容无法复制，也不适用于隐藏的内容是非纯文本的情况，一般 UI 组件都会提供 ToolTip 的组件，我们就可以利用这个组件控制鼠标悬停显示完整内容。下面记录下实际开发过程中使用 Element UI 或者 Ant Design Vue 实现该需求过程。</p>\\n","autoDesc":true}');export{e as data};
