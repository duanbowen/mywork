
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


### 快速搞定 本地文件push 到远程git服务器 ###
1.git init

#初始化本地仓库

2.git remote add origin https://git.oschina.net/redArmy/springboot-swagger2.git(或则 git:git的地址)

#关联本地仓库到远程仓库

3. git add *

#添加要提交的文件到暂存区

4.git commit -m "init commint"

#提交代码到文件控制仓库

5.git fetch origin

#将远程主机的更新，全部取回本地 

6.git pull origin master    如果报错用这个 git pull origin master --allow-unrelated-histories

#拉取远程分支代码到本地

7.git push -u origin master:master

#提交本地分支(master)代码到远程分支(master)   