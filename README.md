# audioV
音频可视化，用canvas绘制波形图

## 项目启动
```bash

1.yarn
2.yarn start 

```
## 服务端说明
一个简单的node服务器，用于实现音频文件的读取，并暴露api接口。
当然用浏览器的fileReader api也可以获取对应的文件buffer，但是五脏俱全嘛，实际项目中可能大部分音频数据由真实的服务端接口提供。

## 前端说明
主要是web Audio相关的api使用，如何从文件buffer -> 绘图数据 -> canvas指令绘图；

## 写在最后
该项目为音频可视化的探索项目，欢迎一起交流，探讨，欢迎star

## TODO
1.worker实现音频文件的读取，波形图的数据的decode过程，通过创建offscreenCanvas来绘制一个图缓存数据，和多线程来做性能优化。
2.大文件的处理，当文件很大的时候可以切割文件，做分屏显示。
3.频谱图的实现。
