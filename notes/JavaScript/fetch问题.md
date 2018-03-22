### fetch 遇到的问题
首先贴上执行成功代码  
前端  
```
// options = { method: ' POST'}
async function request(url, options) {
  const Header = {
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const opts = { ...options, ...Header };
  try {
    return await fetch(url, opts).then(res => res.json());
  } catch (error) {
    return { code: 401, msg: error };
  }
}
```  
后台使用的是koa2  
跨域中间件[koa2-cors](https://github.com/zadzbw/koa2-cors)  
```
const cors = require('koa2-cors');

const app = new Koa();
// 处理跨域
app.use(cors())

```  
错误一  
```   SyntaxError: Unexpected end of input  ```  
可能的情况  ``` mode: 'no-cors' ```  
网上有说no-cors是用于设置服务端不支持cors时使用， 
千万不要相信这句话  
MDN 原话  
```
Prevents the method from being anything other than HEAD, GET or POST, and the headers from being anything other than simple headers. If any ServiceWorkers intercept these requests, they may not add or override any headers except for those that are simple headers. In addition, JavaScript may not access any properties of the resulting Response. This ensures that ServiceWorkers do not affect the semantics of the Web and prevents security and privacy issues arising from leaking data across domains.
```  

更改 ``` mode: cors```  
在这之后仍然出现之前的错误, 考虑body 是否进行了JSON.stringify()。  

mode 的解释:  
- same-origin：该模式是不允许跨域的，它需要遵守同源策略，否则浏览器会返回一个error告知不能跨域；其对应的response type为basic。

- cors: 该模式支持跨域请求，顾名思义它是以CORS的形式跨域；当然该模式也可以同域请求不需要后端额外的CORS支持；其对应的response type为cors。

- no-cors: 该模式用于跨域请求但是服务器不带CORS响应头，也就是服务端不支持CORS；这也是fetch的特殊跨域请求方式；其对应的response type为opaque。

错误二  
后端使用了 ```koa-bodyparser ```  仍然拿不到前端传入的数据  
可能原因是 前端未设置request content-type   
``` 'Content-Type': 'application/json' ```  

暂时就这些问题。