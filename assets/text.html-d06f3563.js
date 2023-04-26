import{_ as s}from"./chatgpt-418e5d76.js";import{_ as n,a}from"./chatpdf-30fa6f07.js";import{_ as e}from"./notion-7dc95ab6.js";import{_ as t,N as c,U as i,a6 as p}from"./framework-b080531d.js";const l="/assets/chatdoc-5b03d4b7.png",o="/assets/magickpen-a77c89e3.png",r="/assets/rytr.me-3dc721b1.png",u="/assets/teefactech-e3e48050.ico",d="/assets/jasper-12ff88aa.png",k="/assets/writesonic-592b667a.png",v="/assets/caiyunai-5e648cb6.png",m="/assets/copyai-fe758162.ico",b="/assets/sitesmo-8b2c6c0a.ico",g={},y=p('<h1 id="ai-文本" tabindex="-1"><a class="header-anchor" href="#ai-文本" aria-hidden="true">#</a> AI 文本</h1><div class="project-panel"><a class="project-card project0" href="https://chat.openai.com/" rel="noopener noreferrer" target="_blank"><img src="'+s+'" alt="ChatGPT" class="image"><div class="name">ChatGPT</div><div class="desc">OpenAI开发的人工智能聊天机器人程序。</div></a><a class="project-card project1" href="https://www.copy.ai/" rel="noopener noreferrer" target="_blank"><img src="'+n+'" alt="Copy.ai" class="image"><div class="name">Copy.ai</div><div class="desc">无论您想问什么，我们的聊天都有答案。</div></a><a class="project-card project2" href="https://getimg.ai/" rel="noopener noreferrer" target="_blank"><img src="'+e+'" alt="Notion AI" class="image"><div class="name">Notion AI</div><div class="desc">Notion旗下的AI笔记和内容创作助手。</div></a><a class="project-card project3" href="https://chatdoc.com/" rel="noopener noreferrer" target="_blank"><img src="'+l+'" alt="ChatDOC" class="image"><div class="name">ChatDOC</div><div class="desc">一个基于ChatGPT的文件阅读助手。</div></a><a class="project-card project4" href="https://magickpen.com/" rel="noopener noreferrer" target="_blank"><img src="'+o+'" alt="MagickPen" class="image"><div class="name">MagickPen</div><div class="desc">由AI强力驱动的智能写作助手。</div></a><a class="project-card project5" href="https://rytr.me/" rel="noopener noreferrer" target="_blank"><img src="'+r+'" alt="Rytr" class="image"><div class="name">Rytr</div><div class="desc">一个人工智能写作助手，创作高质量的内容。</div></a><a class="project-card project6" href="https://ai.teefactech.com/" rel="noopener noreferrer" target="_blank"><img src="'+u+'" alt="达芬奇" class="image"><div class="name">达芬奇</div><div class="desc">AI创作大师。</div></a><a class="project-card project7" href="https://www.jasper.ai/" rel="noopener noreferrer" target="_blank"><img src="'+d+'" alt="Jasper" class="image"><div class="name">Jasper</div><div class="desc">商业AI平台，快速为品牌量身定制内容。</div></a><a class="project-card project8" href="https://writesonic.com/" rel="noopener noreferrer" target="_blank"><img src="'+k+'" alt="Writesonic" class="image"><div class="name">Writesonic</div><div class="desc">AI写作，文案，释义工具。</div></a><a class="project-card project0" href="https://if.caiyunai.com" rel="noopener noreferrer" target="_blank"><img src="'+v+'" alt="彩云小梦" class="image"><div class="name">彩云小梦</div><div class="desc">定制AI角色写作工具。</div></a><a class="project-card project1" href="https://www.chatpdf.com/" rel="noopener noreferrer" target="_blank"><img src="'+a+'" alt="ChatPDF" class="image"><div class="name">ChatPDF</div><div class="desc">上传PDF文件和PDF进行聊天。</div></a><a class="project-card project2" href="https://copyai.cn/" rel="noopener noreferrer" target="_blank"><img src="'+m+'" alt="CopyDone" class="image"><div class="name">CopyDone</div><div class="desc">AIGC原创文案写作神器。</div></a><a class="project-card project3" href="https://www.sitesmo.com/" rel="noopener noreferrer" target="_blank"><img src="'+b+`" alt="思默问答" class="image"><div class="name">思默问答</div><div class="desc">功能一应俱全、简单好用的AI工具。</div></a><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/chatgpt.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ChatGPT
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> OpenAI开发的人工智能聊天机器人程序。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//chat.openai.com/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/copy.ai.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy.ai
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 无论您想问什么，我们的聊天都有答案。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.copy.ai/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/notion.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Notion AI
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> Notion旗下的AI笔记和内容创作助手。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//getimg.ai/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/chatdoc.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ChatDOC
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 一个基于ChatGPT的文件阅读助手。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//chatdoc.com/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/magickpen.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> MagickPen
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 由AI强力驱动的智能写作助手。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//magickpen.com/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/rytr.me.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Rytr
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 一个人工智能写作助手，创作高质量的内容。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//rytr.me/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/teefactech.ico&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 达芬奇
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> AI创作大师。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//ai.teefactech.com/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/jasper.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Jasper
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 商业AI平台，快速为品牌量身定制内容。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.jasper.ai/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/writesonic.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Writesonic
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> AI写作，文案，释义工具。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//writesonic.com/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/caiyunai.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 彩云小梦
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 定制AI角色写作工具。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//if.caiyunai.com

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/chatpdf.ico&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ChatPDF
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 上传PDF文件和PDF进行聊天。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.chatpdf.com/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/copyai.ico&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> CopyDone
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> AIGC原创文案写作神器。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//copyai.cn/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/sitesmo.ico&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 思默问答
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 功能一应俱全、简单好用的AI工具。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.sitesmo.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,2),h=[y];function _(f,w){return c(),i("div",null,h)}const P=t(g,[["render",_],["__file","text.html.vue"]]);export{P as default};
