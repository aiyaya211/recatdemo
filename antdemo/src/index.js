// 1. 导入包
import React from 'react';　// 创建组件 虚拟dom 生命周期
import ReactDOM from 'react-dom'; // 把创建好的组件和虚拟dom放到页面上展示

// 2. 创建虚拟dom元素
// 参数1: 创建元素的类型
// 参数2: dom元素的属性
// 参数3: 子节点
let mydom = React.createElement('span', {
    id: 'foo',
    title: 'xmas'
}, '今天是圣诞节');

// 3. 使用reactdom渲染虚拟dom到页面上
// 参数1: 要渲染的dom
// 参数2: 指定页面容器
ReactDOM.render(mydom, document.getElementById("app"));