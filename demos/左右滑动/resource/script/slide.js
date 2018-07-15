$(function () {

    $('button.left').click(function () {
        var leftW = $('ul').css('left');
        leftW = leftW.replace('px', '') - 321;
        var index = parseInt(-leftW / 321);
        // 显示的ul长度  未被隐藏掉的
        var showW = parseInt($('ul').width());
        //  隐藏的li标签的长度 
        var hideW = ($('ul').children('li').length - 2) * 321;

        // 判断是否正在执行当前动画 
        if (!$(this).is(":animated")) {
            flag = true;
        }

        // $('ul.photos').filter 会去匹配当前jq对象没有动画效果时就返回当前对象 
        if ((-leftW <= hideW)) {
            $('ul.photos').filter(':not(:animated)').animate({
                left: leftW + 'px'
            });
            addBorderForItem($('ul.photos').children('li'), index, 'border');
        } else {

            // 给最后一个li 添加border 
            addBorderForItem($('ul.photos').children('li'), index, 'border');
        }
    })

    $('button.right').click(function () {
        var leftW = parseInt($('ul').css('left').replace('px', ''));
        if (leftW < 0) {
            var index = parseInt(-leftW / 321);
            leftW += 321;
            $('ul.photos').filter(':not(:animated)').animate({
                left: leftW + 'px'
            });
            addBorderForItem($('ul.photos').children('li'), index, 'border');
        }else{
            // 第一个 
            addBorderForItem($('ul.photos').children('li'), 0, 'border');
        }
    })

    addBorderForItem($('ul.photos').children('li'), 0, 'border');
})

/**
 * 更改数组中的border 
 * @param {* jq获取到的需变化的数组 } obj 
 * @param {* 当前需要更改的数组item 的序号} index 
 * 
 */
var addBorderForItem = function (obj, index, className) {
    console.log(index);
    if (!obj)
        return;
    obj.removeClass(className);
    if (Number.isInteger(index)) {
        obj.eq(index).addClass(className);
    } else {
        obj.eq(0).addClass(className);
    }
}