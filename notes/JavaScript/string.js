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