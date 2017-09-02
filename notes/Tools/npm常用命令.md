# npm 常用命令 

- npm install <- name ->  安装命令
- npm install <- name -> -g 将包安装在全局
- npm install <- name -> --save 安装包的同时，添加包版本到 package.json 文件中。
- npm root 查看当前包的安装路径
- npm root -g 查看全局包的安装路径
- npm update <- name -> 更新包
- npm remove <- name -> --save 移除包, 并删除 package.json中的配置
- npm prune 及时更新package.json中已清除的文件 
- npm ls 列出当前安装了得所有包
- npm init 创建一个 package.json 文件