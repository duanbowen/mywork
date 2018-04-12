////// typeof 所有引用类型为 object

let s = "12";
let b = true;
let i = 22;
let u;
let n = null;
let o = new Object();
let arr = new Array();

console.log(typeof s);
console.log(typeof b);
console.log(typeof i);
console.log(typeof u);
console.log(typeof n);
console.log(typeof o);
console.log(typeof arr);

// console.log(n instanceof Object);
console.log(o instanceof Object);
console.log(o instanceof Array);

console.log(n === null);


/**
 * call apply bind
 */

function add(a, b) {
    console.log(arguments.callee.caller)
    return a + b;
}

function sub(a, b) {
    console.log(arguments.callee.caller)
    return a - b;
}

function callsum(a, b) {
    // apply 使用一 传参 arguments / array
    return add.apply(this,arguments); //add.apply(this,[10,2])
    //return add.call(this,10,2); call 跟apply 使用方式一致 只是参数不一样
}

console.log(callsum(10,2))

// apply call 使用二 决定函数作用域  在调用函数的时候传一个作用域过去 

var applycall = {color:"red"};
var color = 'blue';

function applyCall(){
    console.log(this.color);    
}
applyCall.apply(applycall);
applyCall.call(applycall);
applyCall.bind(applycall);