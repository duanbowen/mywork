> js新的基本数据结构 Symbol   

  ```
    var hasSymbol = typeof Symbol === 'function' && Symbol['for'];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7; 
  ```
  Symbol的一般用法   充当唯一的对象键  
  ```
  let symbol1 = Symbol();
  let symbol2 = Symbol();
  let Obj = {}
  Obj[symbol1] = 'symbol1 1content';
  Obj[symbol2] = 'symbol2 2content';

  console.log(Obj);
  // 正确命名  Symbol的括号里写上变量的注释
  let leftNode = Symbol( 'Binary tree node' );
  let rightNode = Symbol( 'Binary tree node' );
  console.log( leftNode )
  > Symbol(Binary tree node

  ```
  `for in, Object.keys` 都没有办法获取到Obj中的Symbol key   
  ```
  Object.getOwnPropertySymbols(Obj);// 获取 symbol keys唯一方式
  // (2) [Symbol(), Symbol()]
  ```   
  ####  Symbol注册表  ####
   使用Symbol.for属性 定义一个全局资源 Symbol注册表
  ```
  symbol注册表维持结构 大致是
  symbol = {
    key : value
  }
  ```
  ```
  let sym1 = Symbol.for('symbol');
  let sym2 = Symbol.for('symbol');
  Obj[sym1] = 'name is david ';
  Obj[sym1] = 'name is levis ';
  console.log( Obj[sym1] === Obj[sym1]); // true
  ```  
  遍历注册表  
  ```
  Symbol.keyFor(sym1); // symbol
  ```  
  #### 创建枚举类型    ####
  ```
    const directions = {
      UP   : Symbol( 'UP' ),
      DOWN : Symbol( 'DOWN' ),
      LEFT : Symbol( 'LEFT' ),
      RIGHT: Symbol( 'RIGHT' )
    };
  ```  

  回过头看 react中的那两句话   
  ```
    var hasSymbol = typeof Symbol === 'function' && Symbol['for'];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7; 
    0xeac7 使用console.log(0xeac7); // 60103
  ```  
  hasSymbol 先判断当前的浏览器是否支持 Symbol, 以及Symbol的for属性， console.log(Symbol.for);会返回一个函数会被认为是 true.    
  ```Symbol['for']('react.element') ``` 则是在全局注册了一个Symbol, key为 react.element

> 利用块作用域隐藏一些函数和变量  
  ```
  var lowPriorityWarning = function () {};
  console.log(printWarning); // ubdefined
  {
    var printWarning = function (format) {
    ...
    };

    lowPriorityWarning = function (condition, format) {
      ...
    };
  }
  ```  

> Object.seal | Object.freeze 
  ```
  // an immutable object with a single mutable value
  function createRef() {
    var refObject = {
      current: null
    };
    {
      Object.seal(refObject); // refObject对象以及内部属性不能被删除， 但是属性可以被改变 refObject.current = 'test' 是可以的。
    }
    return refObject;
  }
  if (Object.freeze) {
    Object.freeze(childArray); // childArray中的变量不能被重新赋值。
  }
  ```  


> var specialPropKeyWarningShown = void 0;  
  ```
  void 0 === undefined // true 
  void 不管后面的参数是什么， 其总是返回 undefined, void 会对后面的参数进行取值操作
  demo  
  var article = {
      _view: 0,
      get view(){
          console.log(this._view);
      return this._view++;
      }
  };
  var test = void article.view; // 显示0
  console.log(test); // 显示undefined
  console.log(article._view); // 显示1
  ```

> Object.defineProperty   
  ```
  Object.defineProperty(validatedFactory, 'type', {
    enumerable: false,
    get: function () {
      lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
      Object.defineProperty(this, 'type', {
        value: type
      });
      return type;
    }
  });
  ```