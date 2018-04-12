1. cookie是什么  
  一系列的名称/值对，形式为 key=vakue。名称/值对之间用分号和空格 ('; ')隔开。  
  ``` cookie: name=bob; age=12;  Hm_6=1523451944 ```;  
  需要注意的是最后一个值后没有; 只有一个空格  

2. cookie 的参数   

  | 参数 |  值
  | ----   | :-
  | value |  1. 编码方式: encodeURIComponent()编码, decodeURIComponent解码。(encodeURI不会对/.等用于分割URI的符号进行转码)<br>
  | maxAge/Expires |  1. cookie存在的最终时间点， 设置为-1 或者小于当前时间表示该cookie失效。<br>
  | secure |  1. 属性值 true 或者 HttpOnly <br>  2. true -> 表示cookie只能通过https协议传输(传输过程中会被加密) <br>  3. HttpOnly -> 表示document.cookie 无法读取其cookie, 意味着js无法操作其cookie.
  |domain |  1.指定该cookie能被哪些域名访问。默认只能当前域名访问(不包含其子域名)<br> 2. 如何指定domain ``` Domain=test.com ```, a.test.com也能访问;
  |path | 1.在domain的基础上区分在该域名下指定特殊路径，一般设置```path=/``` 表示所有路径都能访问;<br>  2. 如何设置 ```path=/main```; ``` /main/x``` 都能访问但是 ``` /home``` 不能访问。
  |SameSite | 跨站请求该cookie不被发送，阻止CSRF.

  以上追加说明   

  > value 编码问题   encodeURIComponent 与 encodeURI的不同
  ```
      encodeURIComponent('http://test.duanbowen.com') 
      = "http%3A%2F%2Ftest.duanbowen.com"
      encodeURI('http://test.duanbowen.com')
      = "http://test.duanbowen.com"
  ``` 

3. 使用js对cookie的操作  
  > 设置cookie   /如果有domain共享，需添加domain参数
  ```
  const setCookie = (name = 'token', value, days = 7) => {
    let exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + exp.toGMTString() + ';path=/';
  }
  ```

  > 获取cookie  
    根据cookie的特殊格式来获取，  ``` cookie: name=bob; age=12;  Hm_6=1523451944  ```
    ```
    const getCookieByName = (name = 'token') => {
      let cookie;
      let startIndex = document.cookie.indexOf(' ' + name + '=') + (name.length + 2);
      let endIndex = document.cookie.substr(startIndex).indexOf('; ');
      if (endIndex <= 0) cookie = (document.cookie).substr(startIndex); // cookie的末尾
      else cookie = (document.cookie).substr(startIndex, endIndex);
      return cookie;
    }
    ```

  > 删除cookie 
  ```
  const delCookieByName = (name = 'token') => {
    setCookie(name, '', -1);
  }
  ```  

