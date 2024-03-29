# nanta-ui

 <p>
     <a href="https://github.com/nantajs/nanta-ui/actions/workflows/docs.yml"><img src="https://github.com/nantajs/nanta-ui/actions/workflows/docs.yml/badge.svg"></a>
     <a href="https://www.npmjs.com/package/@nanta/ui"><img src="https://badgen.net/npm/dm/@nanta/ui" alt="Download"></a>
     <a href="https://www.npmjs.com/package/@nanta/ui"><img src="https://badgen.net/npm/v/@nanta/ui" alt="Version"></a>
     <a href="https://www.npmjs.com/package/@nanta/ui"><img src="https://badgen.net/npm/license/@nanta/ui" alt="License"></a> 
</p>

Ant-design based UI framework. [Docs](https://nantajs.github.io/nanta-ui/#/).  

![index](docs/nantaui.png)

## Features
- Schema-style form/table design.  
- Light-weight ui component library.  
- Typescript support.  
- Support vue 3 and nuxt 3 (SSR support).  
- Vite support.  
- I18N support (Default 'en').  

## Deps

- Vue 3.0
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue)  
- Lodash
- vue-i18n

## Setup

1. Install **nanta-ui**

```shell
yarn add @nanta/ui
yarn install
```

2. Configure
- **Vue 3** framework   
  Install Antd plugin in `main.ts`
```js
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupNanta } from '@nanta/ui';
import '@nanta/ui/dist/style.css';
const app = createApp(App);
setupNanta(app);
app.use(Antd).mount('#app');
```

Here is an example in `docs`, and another example [nanta-ui-vue](https://github.com/nantajs/nanta-ui-vue):   
```shell
yarn docs
```

- **Nuxt 3** framework  
  Auto-install Antd plguin, create `nantaui.ts` in `<projectDir>/plugins/` with the following boilerplate:  
```js
// plugins/nantaui.ts
import { defineNuxtPlugin } from '#app';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupNanta } from '@nanta/ui';
import '@nanta/ui/dist/style.css';

export default defineNuxtPlugin(nuxtApp => {
  setupNanta(nuxtApp.vueApp);
  nuxtApp.vueApp.use(Antd)
})
```
Here is an exmple [nanta-ui-nuxt](https://github.com/nantajs/nanta-ui-nuxt)

- **Nuxt 3 Module** setup (recommended)  
The simplest way to setup nanta in Nuxt env. Your can use [nanta](https://github.com/nantajs/nuxt-nanta) module.  

```shell
yarn add @nanta/nuxt-nanta
yarn install
```

And add **nanta** module to nuxt.config.ts  
```ts
export default defineNuxtConfig({
  modules: [
    'nanta',    
  ],
})
```

## Notice

This project still in alpha stage, you can try it in non-production environment.

## How to dev

1. build package

```shell
yarn package
```

2. test pkg in local

```shell
yarn pack  # pack local
npm install nanta-ui-v0.1.0-alpha.1.tgz  # install local
```

3. publish to npm
Remove nanta-ui && local deps befor publish it.

```shell
npm publish --access public
```
