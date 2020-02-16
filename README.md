# bootstrap-yaoxin-sidebar

####vue bootstrap sidebar support
* sidebar collapse
* sidebar nav accordion support
* sidebar hover collapse
* Mobile Device support
* In Mobile Device, sidebar Sidebar will become canvas
* left content and right content has own scroll bar

左右布局，支持左侧导航栏固定可收缩，鼠标移动可触发伸展，左侧导航栏手风琴模式，支持移动端适配，小屏左侧导航栏会变成从左侧滑出的抽屉。左右两个容器有自己的滚动条，左侧滚动右侧不动，右侧滚动左侧不动。

you need &需要以下依赖
```
    "bootstrap": "^4.4.1",
    "bootstrap-vue": "^2.2.2",
    "vue": "^2.6.11",
    "vue-router": "^3.1.3",
```

if you do not need bootstrap-vue, you can delete bootstrap vue and delete b-nav in sidebarnav and header nav。all b-* component is relative to bootstrap-vue. 

如果你不需要bootstrap-vue，你可以删除左边导航栏和头部导航栏中跟bootstrap-vue有关的组件，一样可以运行，不过你就需要自己写导航栏有关nav item。
跟bootstrap-vue有关的组件都是b-* 这样的。

if you need a sidernav accordion click this:[accordion](https://github.com/nejinn/nly-accordion)

如果你需要一个手风琴边侧导航，直通车[accordion](https://github.com/nejinn/nly-accordion)

![效果](https://github.com/nejinn/bootstrap4-flex-sidebar/blob/master/aside.gif)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
