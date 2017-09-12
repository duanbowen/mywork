### vscode的常用命令 & 技巧

- 命令
    - ctrl + F1 打开终端  (虽然是view in browser 插件预览 html 的命令 但是在其他非html 文件中能弹起 内置终端)  
    - ctrl +` 打开终端
    - ctrl + shift + n  打开一个新窗口  
    - ctrl + shift +w  关闭窗口  
    - ctrl + N 新建文件  
    - ctrl + tab 文件之间切换 
    - F1 或 ctrl+shift+P 打开命令面板 
    - ctrl + p 打开控制面板 输入 > 进入 ctrl+shift+P  
    - ctrl + [ , ctrl + ] 代码行缩进 
    - Alt + shift + f  代码格式化  
    - ctrl + h 当前文件中查找替换
    - ctrl + shift + f 整个文件夹中查找 
- 插件
    - jshint  在工程root目录下 新建文件 .jshintrc , 
    在其中添加 `{'esversion':6} `  
    表示当前工程目录中js文件，遵循 es6规范。

- 错误提示
    - The Vue Language Server server crashed 5 times in the last 3 minutes. The server will not be restarted.   
    在C:\Users\admin\.vscode\extensions\octref.vetur-0.9.7\client 目录下执行npm install 