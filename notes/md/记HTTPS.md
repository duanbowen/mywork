今天闲来无事，网上看了一些HTTPS相关的内容，准备抽取一些文章的重要部分作为笔记。   
#### 首先谈http   

我们知道目前的http请求的大致过程像这样  
从用户在浏览器中输入URL并按下Enter说起  
1. 浏览器会对 URL 进行检查，找出需要使用的协议 如 https, ftp 等。 
2. 在浏览器的内核缓存中进行域名与地址的映射检查  
    - 首先在浏览器缓存中查找IP地址 
    - 在本地电脑DNS中查找
      具体来说是查找 `C:\Windows\System32\drivers\etc\hosts` 文件  
    - 到这里电脑会将当前域名发送到当前电脑所在的局域网内的DNS服务器进行检查。window系统上执行 `ipconfig ` 查找LDNS, 如果此时仍然不行，就会直接到根域名服务器中查找。(LDNS一般很有几层，由上到下执行，例如mainland局域网最上层的DNS服务器找不到才会发送到根域名服务器。)
    - 根域名服务器解析， 全球貌似只有13台, 有很多的所谓的根域名服务器都是这几台的镜像而已。然后返回一个当前域名注册所在的服务器  
    例如查找的域名为 ```www.etr.org``` , 那么根域名服务器将返回org域名的DNS服务器地址（gDNS）。 
    - 本地域名服务器(一般是运营商服务器或者是当前电脑所在局域网的服务器)拿到gDNS然后就向其查找，就会由gDNS返回一个当前映射的ip地址。 然后返回给电脑。

3. 拿到ip之后 需要使用TCP协议目标ip发送请求， TCP是长连接协议，但是http是短连接的，可能http每次请求完成之后，将tcp关了。 ``` keep-alive ```可以保持长连接。这里就要说tcp的三次握手和四次挥手了
    - 三次握手 [原答案](http://blog.csdn.net/omnispace/article/details/52701752)
        - client 发送一个连接请求的数据包 SYN=10, 随机数seq=1000  
        - server接受到这个请求 返回一个请求确认数据包 SYN=11,ack=1001, 随机数seq=545 server 此时处于连接确认监听状态;
        - client 拿到server的回应报文, 再次发送确认报文 ack=546,
        SYN , ACK 加一是因为数据包绝大部分不是按照顺序到达  
        随机数是为了避免源IP(client)在第三次握手时被伪造  
        [原答案](https://www.zhihu.com/question/34400902)  
    - 四次挥手 TCP即将终止  
        - client 发送终止包 FIN=10 进入等待状态2
        - server 发送回应包 ack=10+1 
        - server 发送终止包 FIN=55 进入关闭监听状态
        - client 接受终止包 发送回应包 ack=56  client关闭 server 关闭
4. 后台服务器响应  
    - 跨域  [阮一峰解释](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
        - 造成原因  
        三个同源政策导致: 协议/域名/端口   
        - 解决方式  
            - cors  
            简单请求:  请求方式 ` HEAD GET POST`  
            & HTTP 头部信息不超过一下字段  
            ` Accept Accept-Language Content-Language Last-Event-ID Content-Type(两种表单，text)`  
            非简单请求: !简单请求  
                - OPTIONS 预检请求   
                   浏览器先询问服务器是否支持非简单请求携带的header字段，并将` Access-Control-Request-Method Access-Control-Request-Headers` 发送给服务端,
                服务端检查以上两个字段外加 origin 字段 。如果合适就返回200否则返回跨域错误
            - jSONP  这个大概就是后台支持返回回调函数的方式来支持   
            - iframe 这个不知道  
        - cookie  
        path: 指定cookie只能从网站的特定路径下访问。
        `path=/qq_23234551/article` 只有在path=/qq_23234551/article 这个路由下能拿到当前cookie  
        document.domain  
        A网页是http://w1.example.com/a.html，B网页是http://w2.example.com/b.html，那么只要设置相同的document.domain 那么A，B网页共享cookie   
- 浏览器拿到资源之后  浏览器是如何将html css js 文件渲染为页面的 

