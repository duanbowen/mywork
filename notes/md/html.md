- a 标签  
    text-decoration:none;去掉a 标签的默认下划线  
    [导航栏的效果](linear.jpg)  
    [官方的效果](linear-demo.jpg)   
    a标签数组之间有默认间距     
    ``` <a> </a>  ```   
    解决办法 一 : 在a 标签的父元素设置 font-size:0; 但是a标签本身必须设置 font-size;  
    ``` <div style="font-size:0;"><a style="font-size:16px;"></a></div>```  
    解决办法 二 : 在a 标签数组之间写成一行 
    ``` <a></a><a></a><a></a>``` 

- 手动实现input样式 需要注意的tips
    - outline:none; 去掉input框默认的边框样式  
    - text-indent:20px;设置input 文本框的缩进 
    - caret-color: #A5C146; 设置光标颜色    
- 重写input样式的两种方式   
  这里我用到的重写input样式的方式都是借助label标签的显式和隐式的方式来绑定对应的input 
  隐式绑定input :     
  ```
  <label>
     <input type="checkbox">
     <i></i>
     <span>说明···<span>
  </label>
  ```  
  显式绑定input : 
  ```
  <input type="checkbox" id="checkbox_1">
  <label for="checkbox_1"></label>
  ``` 
  个人认为第一种方式更好 第二种方式需要维持id的唯一性。  

  
