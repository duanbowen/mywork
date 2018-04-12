class Animal {
    constructor() {
        this.type = 'parent'
        console.log(this.type);
    }
    say(hello) {
        console.log('say: ' + hello);
    }
}

class Cat extends Animal {
    // constructor(){
    //     super()
    //     // super()
    //     this.type="cat" //重写
    //     console.log(this.type);
    //     this.say('123');
    // }
    say() {
        console.log('cat say');
        console.log(this)
    }
}

let cat = new Cat();
cat.say('cat ');


class Mycat extends Cat {
    say() {
        console.log('mtcat');
        console.log(this);
    }
}
let mtcat = new Mycat()
mtcat.say();


let desturing = "desturing"
let god = "god"
let zooso = {
    god,
    desturing
}
console.log(zooso);

//default rest 
function mydefault(name = "tom") {
    console.log("名字 : " + name);

}
mydefault('123');

//rest写法 不用写参数名了
function types(...types) {
    console.log(types);
    console.log(typeof arguments);
    console.log(typeof types);
    console.log(types instanceof Array);
}
types('123', '456', '789', '0');
types('123');


for (var index = 0; index < 5; index++) {
    setTimeout(function () {
        console.log(index);
    }, 1000)
}

console.log( true + "123");
console.log( true + true);
console.log( true + false);


var testmianshi = "123";
function test(){
    console.log(testmianshi);
    var testmianshi = "321";
}
test();
console.log(testmianshi);

