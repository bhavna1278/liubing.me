import{_ as s}from"./vite-d5e6ca7b.js";import{_ as n,N as a,U as e,a6 as t}from"./framework-b080531d.js";const c="/assets/gulp-0ef56cdf.png",p="/assets/grunt-87daf019.png",l="/assets/webpack-7159f1b0.png",i="/assets/turbo-07cd3690.png",o="/assets/babel-7282640d.png",r="/assets/rollup-6b42ad33.png",u="/assets/swc-e518bb00.png",d="/assets/nx.dev-a78f2ed8.png",k="/assets/rome-438b0a60.ico",v="/assets/parcel-92c15c8d.ico",m="/assets/fis3-ec634d0d.ico",b={},g=t('<h1 id="构建工具" tabindex="-1"><a class="header-anchor" href="#构建工具" aria-hidden="true">#</a> 构建工具</h1><div class="project-panel"><a class="project-card project0" href="https://www.gulpjs.com.cn/" rel="noopener noreferrer" target="_blank"><img src="'+c+'" alt="Glup" class="image"><div class="name">Glup</div><div class="desc">实现自动化和提高工作流程的工具箱。</div></a><a class="project-card project1" href="https://www.gruntjs.net/" rel="noopener noreferrer" target="_blank"><img src="'+p+'" alt="Grunt" class="image"><div class="name">Grunt</div><div class="desc">JavaScript 世界的构建工具。</div></a><a class="project-card project2" href="https://www.webpackjs.com/" rel="noopener noreferrer" target="_blank"><img src="'+l+'" alt="Webpack" class="image"><div class="name">Webpack</div><div class="desc">一个模块打包器，构建你的资源。</div></a><a class="project-card project3" href="https://cn.vitejs.dev/" rel="noopener noreferrer" target="_blank"><img src="'+s+'" alt="Vite" class="image"><div class="name">Vite</div><div class="desc">下一代的前端工具链，为开发提供极速响应。</div></a><a class="project-card project4" href="https://turbo.build/" rel="noopener noreferrer" target="_blank"><img src="'+i+'" alt="Turbo" class="image"><div class="name">Turbo</div><div class="desc">基于Rust的增量打包器和构建系统，针对 JavaScript 和 TypeScript 进行了优化。</div></a><a class="project-card project5" href="https://babeljs.io/" rel="noopener noreferrer" target="_blank"><img src="'+o+'" alt="Babel" class="image"><div class="name">Babel</div><div class="desc">使用最新的规范来编写 JavaScript。</div></a><a class="project-card project6" href="https://rollupjs.org/" rel="noopener noreferrer" target="_blank"><img src="'+r+'" alt="Rollup" class="image"><div class="name">Rollup</div><div class="desc">一个 JavaScript 模块打包工具。</div></a><a class="project-card project7" href="https://swc.rs/" rel="noopener noreferrer" target="_blank"><img src="'+u+'" alt="SWC" class="image"><div class="name">SWC</div><div class="desc">一个可扩展的基于 Rust 的平台，用于下一代快速开发工具。</div></a><a class="project-card project8" href="https://nx.dev/" rel="noopener noreferrer" target="_blank"><img src="'+d+'" alt="Nx" class="image"><div class="name">Nx</div><div class="desc">智能，快速，可扩展的构建系统。</div></a><a class="project-card project0" href="https://www.romejs.cn/" rel="noopener noreferrer" target="_blank"><img src="'+k+'" alt="Rome" class="image"><div class="name">Rome</div><div class="desc">一个完整的 JavaScript 工具链，集代码检测、打包、编译、测试等功能于一身。</div></a><a class="project-card project1" href="https://parceljs.org/" rel="noopener noreferrer" target="_blank"><img src="'+v+'" alt="Parcel" class="image"><div class="name">Parcel</div><div class="desc">极速零配置Web应用打包工具。</div></a><a class="project-card project2" href="https://fex-team.github.io/fis3/" rel="noopener noreferrer" target="_blank"><img src="'+m+`" alt="FIS3" class="image"><div class="name">FIS3</div><div class="desc">为你定制的前端工程构建工具。</div></a><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/gulp.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Glup
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 实现自动化和提高工作流程的工具箱。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.gulpjs.com.cn/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/grunt.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Grunt
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> JavaScript 世界的构建工具。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.gruntjs.net/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/webpack.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Webpack
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 一个模块打包器，构建你的资源。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.webpackjs.com/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/vite.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Vite
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 下一代的前端工具链，为开发提供极速响应。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cn.vitejs.dev/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/turbo.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Turbo
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 基于Rust的增量打包器和构建系统，针对 JavaScript 和 TypeScript 进行了优化。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//turbo.build/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/babel.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Babel
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 使用最新的规范来编写 JavaScript。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//babeljs.io/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/rollup.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Rollup
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 一个 JavaScript 模块打包工具。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//rollupjs.org/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/swc.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> SWC
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 一个可扩展的基于 Rust 的平台，用于下一代快速开发工具。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//swc.rs/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/nx.dev.png&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Nx
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 智能，快速，可扩展的构建系统。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//nx.dev/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/rome.ico&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Rome
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 一个完整的 JavaScript 工具链，集代码检测、打包、编译、测试等功能于一身。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.romejs.cn/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/parcel.ico&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Parcel
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 极速零配置Web应用打包工具。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//parceljs.org/

<span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;@websites/fis3.ico&#39;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> FIS3
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 为你定制的前端工程构建工具。
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//fex<span class="token punctuation">-</span>team.github.io/fis3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,2),y=[g];function _(h,f){return a(),e("div",null,y)}const S=n(b,[["render",_],["__file","build-tool.html.vue"]]);export{S as default};
