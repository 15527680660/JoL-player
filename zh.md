<p align="center">
  <img src="https://qiniu.qyhever.com/16296253101982eb82305cfc3%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20210822173735.png">
</p>


<h1 align="center">JoL-player</h1>

<p align="center">简洁，美观，功能强大的react播放器</p>

<p align="center">
     <a href="https://github.com/microsoft/TypeScript">
    <img src="https://img.shields.io/badge/typescript-4.4.2-brightgreen.svg" alt="license">
  </a>
  <a href="https://github.com/facebook/react">
    <img src="https://img.shields.io/badge/react-17.0.1-brightgreen.svg" alt="react">
  </a>
</p>

简体中文 | [English](./README.md)

## ✨ 特性

- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- 🌍 国际化语言支持。
- 🎨 主题，组件，定制能力。
- :facepunch: 强大的 API 和回调函数
- :zap: 体积小，80kb​

## 📦 安装

```bash
npm install jol-player --save
```

## 🔨 示例

```tsx
import JoLPlayer from "jol-player";

const App = () => (
  <>
    <JoLPlayer
        option={{
          videoSrc:"https://x.com/a.mp4",
          width: 750,
          height: 420,
        }}
      />
  </>
);
```

:point_right:[demo案例](https://codesandbox.io/s/inspiring-hawking-g5ukb?file=/src/App.tsx)

## :blue_book: ​ 文档

#### 属性/配置项

如下属性来自`option`属性配置项.

| 参数                | 说明                                      | 类型                     | 默认值        |
| ------------------- | ----------------------------------------- | ------------------------ | ------------- |
| width               | 视频容器的 width（必传）                  | `number`                 | 必传          |
| height              | 视频容器的 height（必传）                 | `number`                 | 必传          |
| videoSrc            | 视频地址（必传）                          | `string`                 | 必传          |
| theme               | 主题                                      | `string`                 | \#ffb821      |
| poster              | 视频封面图                                | `string`                 | -             |
| setEndPlayContent   | 自定义视频结束时显示的内容                | `React.ReactNode`        | -             |
| setBufferContent    | 自定义视频缓冲加载组件                    | `React.ReactNode`        | -             |
| pausePlacement      | 暂停键的位置                              | `bottomRight` | `center` | `bottomRight` |
| hideMouseTime       | 多少毫秒，无任何操作，隐藏鼠标和控制器/ms | `number`                 | 2000          |
| isShowMultiple      | 是否显示播放倍数功能                      | `boolean`                | true          |
| isShowSet           | 是否显示设置功能                          | `boolean`                | true          |
| isShowScreenshot    | 是否显示截图功能                          | `boolean`                | true          |
| isShowPicture       | 是否显示画中画                            | `boolean`                | true          |
| isShowWebFullScreen | 是否显示网页全屏                          | `boolean`                | true          |
| language            | 语言                                      | `zh` | `en`              | `zh`          |

#### 方法

| 名称        | 说明                     | 类型                    |
| ----------- | ------------------------ | ----------------------- |
| load        | 重新加载                 | () => void              |
| pause       | 暂停                     | () => void              |
| play        | 开始播放                 | () => void              |
| setVolume   | 设置音量,[0-100]         | (par:`number` ) => void |
| seek        | 设置指定视频的播放位置/s | (par:`number` ) => void |
| setVideoSrc | 设置播放视频的地址 src   | (par:`string` ) => void |

`提示：`如上方法要借助`ref`才能调用，如：xxx.current.load()

:point_right:[具体请参看，demo案例](https://codesandbox.io/s/inspiring-hawking-g5ukb?file=/src/App.tsx)

#### 回调函数

```tsx
export interface videoAttributes<T = number, K = boolean> {
  /**
   * @description 是否播放
   */
  isPlay: K;
  /**
   * @description 当前时间/s
   */
  currentTime: T;
  /**
   * @description 总时长
   */
  duration: T;
  /**
   * @description 缓存时长/s
   */
  bufferedTime: T;
  /**
   * @description 是否开启画中画
   */
  isPictureinpicture: K;
  /**
   * @description 音量
   */
  volume: T;
  /**
   * @description 视频播放倍数
   */
  multiple: T;
  /**
   * @description 是否结束
   */
  isEndEd: K;
  /**
   * @description 错误
   */
  error: null | T;
}
```

| 名称                | 说明                     | 类型                         |
| ------------------- | ------------------------ | ---------------------------- |
| onProgressMouseDown | 滑动条按下不放，拖动回调 | (e: videoAttributes) => void |
| onProgressMouseUp   | 滑动条按下松开回调       | (e: videoAttributes) => void |
| onPlay              | 视频开始播放回调         | (e: videoAttributes) => void |
| onPause             | 视频暂停播放的回调       | (e: videoAttributes) => void |
| onTimeChange        | 视频在播放，时间变化回调 | (e: videoAttributes) => void |
| onEndEd             | 视频结束时回调           | (e: videoAttributes) => void |
| onvolumechange      | 音量改变时的回调         | (e: videoAttributes) => void |
| onError             | 视频播放失败的回调       | () => void                   |

#### `JoLPlaye`r接收的参数接口如下：:point_down:

``` tsx
export interface videoparameter extends Partial<videoCallback> {
  style?: React.CSSProperties;
  /**
   * @description 组件的配置项
   */
  option: videoOption;
  className?: string;
  ref?: JoLPlayerRef
}
```



## :muscle:后期版本

- [ ] 增加快捷键功能
- [ ] 增加视频清晰度选择列表
- [ ] 增加暂停，播放，播放区动画效果
- [ ] 增加自动播放功能

## :rose:赞赏

如果您认为该项目对您有所帮助，则可以给作者一个赞，作者非常感激:blush::blush::rose:

##  :european_castle:生态圈

1.  [ant-simple-pro](https://github.com/lgf196/ant-simple-pro)一款支持[vue3.0](https://github.com/vuejs/vue)，[react](https://github.com/facebook/react)，[angular](https://github.com/angular/angular)，[typescript](https://github.com/microsoft/TypeScript)等多框架支持的中台前端解决方案
2.  [ant-simple-draw](https://github.com/lgf196/ant-simple-draw)一款在线图解编辑器，常用用于表示业务流程等 
3.  [h5-Dooring](https://github.com/MrXujiang/h5-Dooring) 让H5制作像搭积木一样简单, 轻松搭建H5页面, H5网站, PC端网站, 可视化设计

[MIT](https://github.com/lgf196/ant-simple-pro/blob/master/LICENSE)

Copyright (c) 2021-present LiGuoFeng
