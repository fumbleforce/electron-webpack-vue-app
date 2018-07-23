# Electron app kickstart
> A sensible starting point for an electron app using Vue, Vueify, Webpack and PouchDB, with a custom toolbar for extra fancyness

This project is based on:
* [electron-webpack-quick-start](https://github.com/electron-userland/electron-webpack-quick-start)
* [electron-webpack](https://github.com/electron-userland/electron-webpack)
* [electron-vue](https://github.com/SimulatedGREG/electron-vue)

It comes with these nice features:
* Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
* HMR for both `renderer` and `main` processes
* Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
* Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application
* Custom toolbar to replace the standard electron toolbar
* Starter template for `vue-router` and `vuex`

![Base app screenshot](https://i.imgur.com/3gDq9Ha.png)


### Usage

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```
