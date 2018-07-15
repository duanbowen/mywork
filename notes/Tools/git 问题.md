- merge 时遇到的问题  
    - 返回到merge 之前的版本  ``` git reset --hard ```  
    - git  ``` git merge --no-ff origin/master ``` 在当前版本下与master合并  
    合并出现 refusing to merge unrelated histories
  在当前分支上加上参数 ```git pull origin master --allow-unrelated-histories ```  
    - 在当前分支merge 之后 会出现 HEAD  detached ,这之后只需要git checkout 切换到一个分支，就会将分支的指针指向当前分支 , 例如 git checkout master     

    - 删除分支 git branch -d    
- 查看git 配置信息  
```git config --list  ```  
https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE    

- 本地仓库设置用户名密码 
``` git ``` 


- 使用yarn add 或者 npm install 报错时一般是因为网络问题，这是需要设置npm, yarn的配置文件  
```
yarn set registry https://registry.npm.taobal.org  
或者 
npm config set registry http://registry.cnpmjs.org/  
如果还报错 可以直接去 c盘用户目录下 找到 npmrc, yarnrc 配置文件直接修改
``` 

- 本地git仓库切换远程仓库地址。    
首先 `git remote -v ` 查看本地已存在的仓库地址   
然后 `git remote add origin [url]` origin可以定义为其他任何分支名   

  [git remote 讲解](https://git-scm.com/book/zh/v1/Git-%E5%9F%BA%E7%A1%80-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%E4%BD%BF%E7%94%A8)

- git 撤销   
  修改最后一次提交
  ```
  $ git commit -m 'initial commit'
  $ git add forgotten_file
  $ git commit --amend
  ```  
  取消暂存的文件  
  ```
  git reset HEAD <file>
  ```  
  取消对文件的修改  
  ```
  git checkout -- <file>
  ```