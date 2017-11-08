/**
 * 
 * 字符串去重
 * @param {any} str 
 * @returns 
 */
function quchong1(str) {
    var newStr = "";
    var flag;
    for (var i = 0; i < str.length; i++) {
        flag = 1;
        for (var j = 0; j < newStr.length; j++) {
            if (str[i] == newStr[j]) {
                flag = 0;
                break;
            }
        }
        if (flag) newStr += str[i];
    }
    return newStr;
}

var str = "12345123";
console.log(quchong1(str));

/**
 * 
 * 去重 indexof
 * @param {any} str 
 */
function quchong2(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (newStr.indexOf(str[i]) === -1) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(quchong2(str));


// 用1元纸币兑换1分，2分和5分的硬币，要求兑换总数为50枚，问可以有多少种组合，每种组合对应1分，2分，5分分别是多少？

// 100 = x + 2y + 5z ; x + y + z = 50;


for (var x = 0; x < 50; x++) {
    for(var y =0 ;y <= 50; y++){
        for(var z = 0;z <= 20;z++){
            if((x + 2*y + 5*z) == 100 && (x + y + z) ==50){
                console.log("满足条件的有 x=" + x + " ,y="+y + ",z="+z);
            }
        }
    }
}