# 浏览器同步测试工具
### 浏览器实时、快速响应文件更改(html,js,css,sass,less)并自动刷新页面   

[官网地址](http://www.browsersync.cn/#install "官方教程") 

- 安装 npm install -g browser-sync --save-dev  
监听多层文件路径 简单快捷 
` browser-sync start --server --files "**/*.html,**/*.css,**/*.js"  `  
这种情况 默认搭建一个本地服务器 端口号为 3000  
如果需要监听已有地址的 文件 
browser-sync start --proxy "主机名" "css/*.css"