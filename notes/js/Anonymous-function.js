/**
 * 匿名函数 使用技巧
 * 
 * 2017-09-02 
 */

 define([
     'require'
 ], function(require) {
    //  'use strict';

     //fact(6);//报错

     /* 阶乘函数demo 这种写法 是函数表达式的写法，将函数赋值给一个变量，不会有函数声明提前。 */
     var fact = function (num) {
         if (num <= 1) {
             return 1;
         } else {
             return fact(num - 1) * num;
         }
     };
     var testfact = fact;
    //  fact = null;
     console.log(testfact(5));

     /**
      * 函数表达式的下一个例子 在node的环境中 会根据 condition的条件进行函数声明 但是在除了 fixfore
      * 之外的浏览器 会忽略 condition 意味著第一个sayHi函数会被覆盖。 chrome 亲测(非严格模式下)
      */

     var condition = false;

     if (condition) {
         function sayHi() {
             alert("good hi");
         }
     } else {
         function sayHi() {
             alert("bad hi");
         }
     }
     sayHi(); 

     //另一种方式 函数表达式

     var sayHiAnother;

     if (condition) {
         sayHiAnother =function sayHi() {
             alert("good hi");
         }();
     } else {
          sayHiAnother =function sayHi() {
             alert("hi");
         }();
     }


    /**
     * 使用 argument.callee 优化递归
     * argument.callee 指向函数本身 一个对自己本身的引用 
     * 函数在被函数调用时会生成 argument 在argument.callee 中会生成 caller指向调用函数
     * 由于 argument对象(里面是对函数参数的索引)只有在被调用的时候才会生成 ，如果当前函数未被调用则会引发异常
     */

     function factorial(num){
         if(num < 1){
             return 1;
         }else{  
             return arguments.callee(num-1)*num;             
        }
        
     }

     var testfa = factorial;
     factorial = null; //将全局变量 factorial 置为空
     console.log(testfa);
     console.log(factorial);
     console.log(testfa(5)); 
     
     //函数内 的return 不用依靠函数名去访问，因为factorial在变量对象列表中的value(指向堆内存的指针 null)已经不存在了,使用其函数名调用只能取到null

     /**
      * 解决在严格模式下 arguments.callee失效问题
      * factorial2 = null ,但是return 并没有调用 factorial2函数
      */

     var factorial2 =(function f(num){
         if(num < 1){
             return 1;
         }else{
             console.log(arguments);
             return f(num -1)*num;
         }
     });

     var testfactorial2 = factorial2;
     factorial2 = null;
     console.log(testfactorial2(5));


 });



/**
 * es6 this
 */

class Animal {
    constructor() {
        this.type = 'animal'
    }
    says(say) {
        console.log(this);
        setTimeout(function () {
            console.log(this.type + ' says13123 ' + say)
        }, 1000)
        setTimeout(() => {
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
}

var animal = new Animal()
animal.says('hi') 