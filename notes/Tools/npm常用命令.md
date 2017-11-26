# npm 常用命令 

- npm install cnpm -g -registry https://registry.npm.taobao.org 使用国内淘宝镜像N
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


### 常见问题 
1. npm ERR! code EPERM errno -4048 
 解决办法 进入 C:\Users\admin\AppData\Roaming\npm \npm-cache 删除这两个文件夹下的内容，然后用管理员打开cmd 继续执行
