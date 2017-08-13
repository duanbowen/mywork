#  jquery图片插件fancybox
1. 格式
   一般是标签`<a><img /></a>`;
   `<a class="fancybox" href="1_b.jpg" data-fancybox-group="ga" title="Lorem ipsum dolor sit amet"><img src="1_s.jpg" alt="" /></a>`;
   上面的a标签内 **data-fancybox-group** 属性的值只要一样，就可以实现图片切换的效果，title默认显示在图片下面。

2. 图片的简单样式处理
   <pre>
   $(".fancybox-effects-d").fancybox({
				padding: 0,//无边距效果
				openEffect : 'elastic',
				openSpeed  : 150,//打开速度
				closeEffect : 'elastic',
				closeSpeed  : 150,//关闭速度
				closeClick : true,
				helpers : {
					overlay : null//不显示遮罩层
				}
			});
   </pre>
<pre>
参数名	参数说明	可选值	默认值  
padding	图片距离弹出框的距离	整数或数组，如果是整数表示四个方向的内边距都为该整数，如果是数组则表示各个方向不同的值，表示为： [top, right, bottom, left]	15  
margin	弹出框距离浏览器四个方向的距离	整数或数组，如果是整数表示距离四个方向的距离都为该整数，如果是数组则表示各个方向不同的值，表示为： [top, right, bottom, left]	20  
width	当’auotoSize’设置为’false’时弹出框的宽度，仅适用于 iframe、swf、inline、ajax和html模式	数字或 ‘auto’	800  
height	当’auotoSize’设置为’false’时弹出框的高度，仅适用于 iframe、swf、inline、ajax和html模式	数字或 ‘auto’	600  
minWidth	弹出框的最小宽度	数字	100  
minHeight	弹出框的最小高度	数字	100  
maxWidth	弹出框的最大宽度	数字	9999  
maxHeight	弹出框的最大高度	数字	9999  
autoSize	自动调整高度，如果设置为ture,则要设置autoHeight和autoWidth为true	true或false	true  
autoHeight	如果设置为true，那么ajax、inline、html模式下的弹出框将自动调整高度	true或false	false  
autoWidth	如果设置为true，那么ajax、inline、html模式下的弹出框将自动调整宽度	true或false	false  
autoResize	如果设置为true，当浏览器窗口大小改变的时候将自动调整弹出框大小	布尔值  	!isTouch  
autoCenter	如果设置为true，那么弹出框总是居中的	布尔值  	!isTouch  
fitToView	如果设置为true，弹出框将会在打开之前自动适应大小	布尔值	true  
aspectRatio	如果设置为true，那么重置大小将会被图片的比例所影响	布尔值	false  
topRatio	弹出框距离顶部与距离底部的比例，如果为0.5，则表示居中	数字	0.5  
leftRatio	弹出框距离左边与距离右边的比例，如果为0.5，则表示居中	数字	0.5  
scrolling	添加到scrollbars滚动条上的样式	‘auto’,'yes’,'no’,'visible’	‘auto’  
wrapCSS	环绕元素的样式	字符串   
arrows	如果设置为true，导航箭头将会被显示	布尔值	true  
closeBtn	如果设置为true，将会显示“关闭”图标	布尔值	true  
closeClick	如果设置为true，当用户点击内容的时候将会关闭弹出框	布尔值	false  
nextClick	如果设置为true，当用户点击内容的时候将会导航到下一页	布尔值	false  
mouseWheel	是否启用鼠标滚动切换	布尔值	true  
autoPlay	是否自动播放弹出框的图片	布尔值	false  
playSpeed	播放毫秒速度	数字	3000  
preload	预加载的图片数	数字	3  
modal	如果设置为true，将会禁止导航和关闭	布尔值	false  
loop	是否循环播放	布尔值	true  
scrollOutside	如果设置为true，将会视图避免垂直方向的滚动条，针对 iframe和html	布尔值	true  
index	重写开始的图片索引	数字	0  
type	重写内容的类型	‘image’, ‘inline’, ‘ajax’, ‘iframe’, ‘swf’ 和 ‘html’	null  
href	重写内容的链接地址	字符串	null  
content	重写被展示的内容	字符串	null  
title	重写标题	字符串	null  
</pre>

3. 额外技巧
	- 可以使用直接执行ajax请求，但是需要注意的是ajax请求只能访问服务端的数据
	`<li><a class="fancybox fancybox.ajax" href="ajax.txt">Ajax</a></li>`
	- 打开另一个div **注意id 这是根据a标签内的href的id来确定**   

	<pre>
	<li><a class="fancybox" href="#inline1" title="Lorem ipsum dolor sit amet">Inline</a></li>
	<div id="inline1" style="width:400px;display: none;">
		<h3>Etiam quis mi eu elit</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi eu elit tempor facilisis id et neque. Nulla sit amet sem sapien. Vestibulum imperdiet porta ante ac ornare. Nulla et lorem eu nibh adipiscing ultricies nec at lacus. Cras laoreet ultricies sem, at blandit mi eleifend aliquam. Nunc enim ipsum, vehicula non pretium varius, cursus ac tortor. Vivamus fringilla congue laoreet. Quisque ultrices sodales orci, quis rhoncus justo auctor in. Phasellus dui eros, bibendum eu feugiat ornare, faucibus eu mi. Nunc aliquet tempus sem, id aliquam diam varius ac. Maecenas nisl nunc, molestie vitae eleifend vel, iaculis sed magna. Aenean tempus lacus vitae orci posuere porttitor eget non felis. Donec lectus elit, aliquam nec eleifend sit amet, vestibulum sed nunc.
		</p>
	</div>
	</pre>
   - 第一个坑  
    如果你在某一个页面初始化成功之后($('.div').fancybox())会自动在页面上增加一个div标签元素（其背景为一张正在加载中的图片） 其id=fancybox-loading ，这个div在当前界面并不会显示，但是如果此时切换到其他界面，并且这个界面执行数据绑定的js也初初始化了当前页面指定的 fancybox 这个div会被触发。  
    解决办法 ：使用jq暴力 $('#fancybox-loading').css("display","none"); 这里$('').css();一个参数 表示取当前属性的值，两个参数表示给当前标签设置对应属性值。

	e:shj/workspace/demo/
