
# Git 常用命令


- git reset HEAD 撤销 add (绿字变红字)
- git checkout -- 文件 撤销没add的修改 (红字变无)
- 版本回退
- git reset --hard 版本号
- git checkout -b dev 分支 新建并切换  

- git branch dev 新建分支
- git checkout dev 切换分支到dev
- git branch 查看分支
- git branch -d dev 删除分支
- git merge dev 合并dev分支到当前分区  一般当前分区为 master  
- git clone xxx.git mydemo  指定git clone 在本地 mydemo目录下  