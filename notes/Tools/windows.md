# window 使用技能
- cmd 命令
     - 查看所有端口  
     ` netstat -ano`  
     - 过滤端口号  查看指定端口是否被占用
     ` netstat -ano|findstr "8080"`  
     - 查看指定PID  被谁暂用  
     ` tasklist|findstr "11388"`  
     - 结束当前被占用端口  
     ` taskkill /f /t /im node.exe`