### 安装java环境 
 
 - 安装报错 Package 'oracle-java7-installer' has no installation candidat  
解决的办法  
   /etc/apt/sources.list.d  
   rm webupd8team-java.list   
   sudo apt-get update  
   add-apt-repository ppa:webupd8team/java  
   sudo apt-get update  
链接 :  https://askubuntu.com/questions/790671/oracle-java8-installer-no-installation-candidate  
  传输本地java 包到ubuntu 使用lrzsz  
  java 包 路径 root 模式下  /etc/jvm/ 
  然后解压 tar -zxvf jdk...   
  我的版本是 jdk1.7.0_80  
  然后配置全局变量  
  vim /etc/profile 
  ```
  export JAVA_HOME=/usr/lib/jvm/jdk1.7.0_80  
  export JRE_HOME=$JAVA_HOME/jre  
  export CLASSPATH=.:$CLASSPATH:$JAVA_HOME/lib:$JRE_HOME/lib  
  export PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin  
  ```  
  使用source /etc/profile命令使刚才配置的信息生效，

- 安装MySQL   
  安装教程 http://www.linuxidc.com/Linux/2016-07/133128.htm  
   1. sudo apt-get install mysql-server  
   2. apt-get isntall mysql-client  
   3.  sudo apt-get install libmysqlclient-dev  
   mysql -u -root -p 
   密码是 123456    
   查看mysql 的socket 是否处于socket状态  sudo netstat -tap | grep mysql 
   mysql 路径 在 /home/ubuntu/mysql 目录下
- 安装 tomcat  
  安装教程 https://www.cnblogs.com/xdp-gacl/p/4097608.html  
  ubuntu 新建tomcat 目录  路径 /etc/tomcat  
  rz 本地上传tomcat 到Ubuntu 目录  /etc/tomcat  
  1. 解压 tar -zxvf apache-tomcat-7.0.82  
  2. 配置环境变量  
     修改tomcat 服务器启动端口   
       cd apa.../conf/   
       vim server.xml   -> 8100  
     启动tomcat  
     cd apa.../bin  
     ./startup.sh  
     停止tomcat  
     ./shutdown.sh  

### ubuntu apt-get install 总是安装不上的问题  
文章 : http://blog.csdn.net/looong2b/article/details/21403325 

