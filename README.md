# tj-px2rem
输入一段css代码，将其中的px转化为rem并输出

​	

[在线使用](http://htmlpreview.github.io/?https://github.com/zhizao/tj-px2rem/blob/master/index.html)

​	

将css代码复制到左侧，点击`Go`按钮。

可以修改中间的写有`100`的框中数字，该数字表示`px`到`rem`的转化比例，默认为1rem=100px。

对于不希望转化的行，在结尾处备注`/*no*/`

​	

试着把以下的代码复制在左边的框中，点击`Go`试一试。

```css
div {
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  border: 1px solid #000;  /*no*/
  text-align: center;
  cursor: pointer;
}
```