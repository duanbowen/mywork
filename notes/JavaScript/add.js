/**
 * 加法
 * @param {第一个因子} oneFactor 
 * @param {第二个因子} twoFactor 
 * @param { 精度 } accuracy 
 */
function addT(oneFactor, twoFactor, accuracy) {
    try {
        accuracy = 10 ** accuracy;
        oneFactor = Math.round(oneFactor * accuracy);
        twoFactor = Math.round(twoFactor * accuracy);
        if (oneFactor === NaN || twoFactor === NaN || accuracy === NaN) return 'invalid pattern';
        let result = oneFactor + twoFactor + '';
        // 重用变量
        accuracy = result.length - Math.log10(accuracy);
        return result.substr(0, accuracy) + '.' + result.substr(accuracy);
    } catch (error) {
        return error;
    }
}