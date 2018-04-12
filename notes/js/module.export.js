exports.sayName = () => {
    console.log("sayname");
}
// nodejs 会在每一个可执行文件中自动创建一个module对象 所以当我们
// 直接 export 的时候 实际上是module.export ，export 指向module这个对象 
// 这里 module 对象变了意味着堆中的该对象在栈中的地址变了 所以 export 指向的原始初始化的对象也不在了(地址变了) 
module.exports = {
    sayName: 2,
    functionA: () =>{
        console.log(module);
    }
}
exports.sayName = 'name';