# some-blog

Based on gridsome.

## dependencies installation

### @gridsome/cli

全局安装 @gridsome/cli

```bash
pnpm add @gridsome/cli --global
```

### sharp

配置sharp所需npm参数

```bash
npm config set sharp_binary_host "https://npm.taobao.org/mirrors/sharp"
npm config set sharp_libvips_binary_host "https://npm.taobao.org/mirrors/sharp-libvips"
```

### node-gyp

全局安装 node-gyp

```bash
pnpm add node-gyp --global
```

### all

安装项目依赖

```bash
pnpm install
```

## 一些依赖的问题

less-loader 8.x 的配置结构有变化, 安装7.x即可
[问题参考](https://segmentfault.com/a/1190000039190699)

## 鸡毛蒜皮

1. gridsome.config.js 中 template 的 item 如果填写了 name 属性, 就不会自动生成 path
