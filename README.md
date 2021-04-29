# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## React 基础知识
JSX语法： Javascript + XML语法
解读jsx语法： 遇到<>按照HTML语法解析， 遇到{}按照JavaScript

## 元素渲染

## 组件

组件的后缀可以是js，也可以是jsx
一个React项目， 是由成千上万个组件组成

### props组件
组件的复用性很重要

### 事件处理
1. this问题
2. 向事件处理程序传递参数

### React生命周期函数
随着我们对React理解和使用越来越多， 生命周期的参考价值越来越高
函数列表:
    componentWillMount：在组件渲染之前执行
    componentDidMount: 在组件渲染之后执行
    shouldComponentUpdate: 返回true和false， true代表允许改变，false代表不允许改变
    componentWillUpdate:数据在改变之前执行（state, props）
    componentDidUpdate: 数据修改完成（state, props)
    componentWillReceiveProps: props发生改变执行
    componentWillUnmount: 组件卸载前执行
子传父！！！
父传子！！！

### setState更新是同步还是异步
1. setState会引起视图的重绘
2. setState在可控的情况下是同步, 在非可控的情况下是同步


### condition render

### list & key
主要问题是key 


### 表单
1. 受控组件
2. 非受控组件


### Reds and the DOM
1. 管理焦点，文本选择或媒体播放
2. 触发强制动画
3. 集成第三方DOM库

### 状态提升
组件之间的数据交互