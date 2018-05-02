### antd 如何更好的使用tree组件  

在上周优化公司的tree组件时使用了[debounce](https://www.lodashjs.com/docs/4.17.5.html#debounce), 但是效果并没有想象的那么丝滑，并且出现了很多其他的bug。 最后发现是自己对react的理解不够。 

#### 首先在组件内的任何自定义的事件函数如果更改了内部state, 那么必然会执行render方法。 ####  

组件使用debounce时需要注意的点: 


1. Input组件的value一定不要使用react组件内部的state管理，这样在setState时必然导致组件的render  

```
<Search
  placeholder={'search'}
  onChange={this.onSearchChange)}
  // value={this.state.value} 使用dom层级的默认state 不应该使用react的组件内部state管理
  onClick={this.onSearchClick}
  onSearch={this.onSearchClick}
/>

``` 
2. 在使用debounce函数时整个debounce函数的执行流程尽量只有一个setState, 如果出现多个setState 组件必然多次render  tree的效果看起来必然很卡顿


