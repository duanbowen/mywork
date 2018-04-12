//当页面加载状态改变的时候执行这个方法.
document.onreadystatechange = loadingChange;
function loadingChange() {
    //当页面加载状态为完全结束时进入
    if (document.readyState == "complete") {
        locateMask(document.querySelector('.original-pic'), document.querySelector('.mask'), document.querySelector('.zoomin-pic'))
    }
}


/**
 * 在这之前我们需要搞懂 event对象的 几个属性 offsetX clientX(pageX) screenX 
 *  offsetX 是鼠标距离当前产生event对象的dom节点左边缘的距离。
 *  clientX 是鼠标距离网页全屏的左边缘的距离(这取决于屏幕的大小)
 *  screenX 是鼠标距离浏览器窗口的左边缘的距离 
 */


/**
 * 
 * @param {*需要查看的图片所在dom对象 -- 原图} originPic 
 * @param {* 遮罩层对象 } mask 
 *
 * 
 */
var locateMask = function (originPic, mask, zoominPic) {


    originPic.addEventListener('mousemove', function (e) {
        // mask 因为相对于原图 只能在原图内移动, 这里使用offsetX offsetWidth 定位mask 相对于父元素的位置.

        mask.style.display = "block";
        zoominPic.style.display = "block";
        var leftM = e.offsetX - mask.offsetWidth / 2;
        var topM = e.offsetY - mask.offsetHeight / 2;
        // 设置上下左右 mask遮罩层不超出背景图区域
        if (leftM < 0) {
            leftM = 0;
        } else if (leftM + mask.offsetWidth >= originPic.offsetWidth) {
            leftM = originPic.offsetWidth - mask.offsetWidth
        }

        if (topM < 0) {
            topM = 0;
        } else if (topM + mask.offsetHeight >= originPic.offsetHeight) {
            topM = originPic.offsetHeight - mask.offsetHeight
        }

        mask.style.left = leftM + 'px';
        mask.style.top = topM + 'px';


        // 确定 zoominPic 的位置和背景图大小以及背景图的定位 

        //背景图的位置 
        zoominPic.style.left = e.clientX + 100 + 'px';
        zoominPic.style.top = e.clientY + 'px';

        // 背景图放大倍数 
        var sizeX = zoominPic.offsetWidth / mask.offsetWidth * 100;
        var sizeY = zoominPic.offsetHeight / mask.offsetHeight * 100;
        zoominPic.style.backgroundSize = "" + sizeX + "% " + sizeY + '%';

        // 背景图的定位  
        zoominPic.style.backgroundPositionX = e.offsetX / originPic.offsetWidth * 100 + '%';
        console.log(e.offsetY / originPic.offsetHeight * 100 + '%');
        zoominPic.style.backgroundPositionY = e.offsetY / originPic.offsetHeight * 100 + '%';
    });

    originPic.addEventListener("mouseout", function (e) {
        mask.style.display = "none";
        zoominPic.style.display = "none";
    })

}