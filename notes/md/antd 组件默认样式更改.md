### antd组件默认样式更改引发问题
我是想做这么一个事情  
在引入antd组件的页面上覆盖antd组件的默认样式，但是并不影响到其他页面导入的antd组件样式。
代码大概是这样 
```
import { Form} from 'antd';
import styles from './style';
class NormalLoginForm extends React.Component {
     <Form  className={styles.myForm} >
        <FormItem>
            {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
            })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
        </FormItem>
     </Form>
}
```  
css  
```
.myForm{
    width:500px;
    height: 500px;
    :global{
    & .ant-form-item {
      background: orange;
     }
    }
  }
```  
我的react项目是基于dva脚手架的, 默认使用css module的方式，那么我的自定义类名会被  
hash 掉, 像这样  ``` myForm___2VA4I```  
在一翻搜索之后发现了这个方式可以改变antd组件的默认样式    
```
.myForm{
    width:500px;
    height: 500px;
    :global{
    & .ant-form-item {
      background: orange;
     }
    }
  }
```  
代码显示 : [github](https://github.com/duanbowen/antd-summary/tree/master/src/components/form)  

除此之外找到一个不错的库 react-css-modules  
大致思路是将css中hash的类名通过styleName的方式同步到编写的页面上  
省去了写style[classname], 而是这种方式  
```
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './table.less';

class ReactCssModule extends React.PureComponent{
    render() {
        return <div styleName='table'>
            <div styleName='ant-form-item'>
                <div styleName='cell'>A0</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}

export default CSSModules(ReactCssModule, styles);
```   

代码显示 : [github](https://github.com/duanbowen/antd-summary/tree/master/src/components/react-css-module)  

但是用这种方式没办法对特定的组件进行样式修改      
想一想为什么  

另一种更加激进的方式是  ``` styled-components  ```  
贴一下代码，我也没有去用过 主要原因是antd组件太好用了~  
```
import React from 'react';
import styled from 'styled-components';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```   
``` styles.h1 ```  
 
今天看了styled-components 的一些demo 这里把他们记下来,  styled-components 确实是很好的东西, 它让前端模块化变得更加方便react组件看起来更加的独立。  

1. 解决styled-components 的子级嵌套  
这里给子级标签添加id来解决

```
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
   /* 使用id */
  &#primary {
      color: blue;
  }
`;

```   
完整代码 [github](https://github.com/duanbowen/antd-summary/blob/master/src/components/styled-components/index.js)   
styles-componets [官网](https://www.styled-components.com/docs/advanced#)  


