# vue demo 

- 使用vue-cli 脚手架 搭建vue 2.0 运行环境
    - 首先在文件目录 使用npm 初始化一个npm 项目
    npm init -y 
    - 创建一个index.html 文件，用于显示在浏览器中的页面,spa中只有这一个html页面,安装vue相关依赖。  
    直接使用 vue脚手架  
    `npm install -g vue-cli   `
    ` vue init webpack vue-demo `
    ` npm install `
    ` npm run dev`  
    - 修改端口配置  在conig配置文件夹中的index文件中。
- vue 组件 
    - 注册  
    组件一定是先注册才能在父实例的模块中以自定义元素。  
        - 全局注册  
    ```
    Vue.component('my-component',{
        template:"<div> 全局模式下注册组件</div>"
    })
    //然后再在父实例中使用该组件
    ```
    ` ` 
        - 局部注册
    ```
    var child ={
        template: '<div>child component</div>'
    }
    new Vue({
        components:{
            'my-component': child
        }
    })
    ```  
    但是在vue 单页面应用中 ，因为只有一个Vue实例，所以~全局注册和局部注册是一样的