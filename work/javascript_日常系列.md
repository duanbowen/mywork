## javascript

- 关于onclick 和submit之间的问题  
  1. 触发先后顺序肯定是先事件后提交 即是先onclick然后submit  
  2. 如何使用onclick事件阻止submit提交   
    input type="submit" value="Reset" onclick="test(e)" 
    <pre>
    function test(e){
       for(var i =0;i<100;i++){
       console.log(i);
       return false ; 
    }
    </pre>
    上面的例子中 onclick事件先于 submit 触发，
    并且执行了 return false ;阻止了submit的触发  
  3. div层级冒泡事件--事件穿透

    