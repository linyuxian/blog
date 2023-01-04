---
title: 规范工作流
description: 规范工作流
---

## 前言

> 不以规矩，不能成方圆。

## 为什么需要规范

- 提高代码整体的可读性、可维护性、可复用性、可移植性和可靠性，这会从根本上降低开发成本，也是最重要的一点。
- 保证代码的一致性：软件系统中最重要的因素之一就是编码的一致性。如果编码风格一致，也更加易于维护，因为团队内任何人都可以快速理解并修改。
- 提升团队整体效率：开发人员通常需要花费大量的时间来解决代码质量问题，如果都按照规范编写，也有助于团队尽早发现问题，甚至完全预防问题，这将提高整个交付过程的效率。
- 减少 code review 期间一系列的争议，因为缺乏标准，在争议过程中双方很难妥协（没少因为这事争论过 😕）。

## 前端工作流常用工具 🔧

- [Prettier](https://prettier.io/) 代码风格工具
- [ESLint](https://eslint.org/) 是一个根据方案识别并报告 ECMAScript/JavaScript 代码问题的工具，其目的是使代码风格更加一致并避免错误。
- [husky](https://github.com/typicode/husky/) 当您提交或推送时，您可以使用它来整理您的提交消息、运行测试、lint 代码等。
- [lint-staged](https://prettier.io/) lint-staged 是一个在 git 暂存区上运行 linters 的工具，它将根据 package.json 依赖项中的代码质量工具来安装和配置 husky 和 lint-staged ，因此请确保在此之前安装（npm install --save-dev）并配置所有代码质量工具，比如 Prettier 和 ESlint。
- [commitlint](https://prettier.io/) 用来规范提交信息的
- [commitizen](https://prettier.io/)

## 代码规范

### 代码检查工具

JS/TS 主流的大致有这几种：

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js)
- [JavaScript Standard Style Guide](https://github.com/standard/standard)
- [jQuery JavaScript Style Guide](https://contribute.jquery.org/style-guide/js/)

比较推荐使用 Airbnb JavaScript Style Guide，它在 Github 上足有 12 万 star，几乎覆盖了 `JavaScript` 的每一项特性。

具体配置：

1). 安装依赖

```js
npm install eslint --save-dev
// or
yarn add eslint --dev
```

2). 生成配置文件

```bash
npm init @eslint/config
// or
yarn create @eslint/config
```

跟着终端中的提示，按照自身需求一步步选择即可。

有了具体的规范后，我们同样需要使用工具去约束：还是通过在`git commit`阶段校验，若不通过则取消提交。

配置（还是在 `package.json` 中的 `lint-staged` ）：

```js
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown", //格式化
    "src/*": "eslint --ext .js,.ts,.tsx"  //进行eslint校验
  },
```

> 注意：
> 这里如果选用的 Typescript，则会默认使用`@typescript-eslint/parser`解析器，官方为了追求更快的解析速度，并不会对.ts 文件中的类型进行检查，只会做语法检测。
> 如果需要对类型也进行检测，需要在 extends 中加上`plugin:@typescript-eslint/recommended-requiring-type-checking`。
> 但是在笔者的使用中发现效果并不好，一些基本的类型依然检测不出来，索性这里换了另一种方式：在 pre commit 中执行`yarn run tsc`，这里的意思是对项目中 ts 文件进行类型检测，默认会读取根目录中的`tsconfig.json`配置。
> 这种方式并不完美，它的弊端就在于`全量检测`，如果项目不大还好，若是项目代码量够多，检测 10-20s 也是常有的事。

更多详情查看 [eslint 官网](https://eslint.org/docs/latest/user-guide/getting-started)

### 代码风格工具

由于每个开发者的 IDE 不同，即使 IDE 相同也会因为每个人的配置不一样导致格式化的结果不一样。如何确保团队内开发人员采用统一的格式化配置呢？

这里给推荐大家使用 [prettier](https://prettier.io/)，它内置了一套格式化的规则，具体配置：

1). 安装依赖：

```js
npm install --save-dev --save-exact prettier
// or
yarn add prettier -D
```

2). 创建一个空配置文件，让编辑器和其他工具知道你正在使用 `Prettier`：

```js
echo {}> .prettierrc.json

// 自己配置
{
  "semi": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

3). 创建一个`.prettierignore`文件，让 Prettier CLI 和编辑器知道哪些文件不能格式化，example：

```js
# Ignore artifacts:
dist
build
coverage
```

4). 解决冲突

其他：若使用的是脚手架工具搭建的项目，会自带 `eslint` 配置（`eslintConfig`）。

`prettier` 和 `eslint` 会有一些配置上的冲突，这个时候需要安装 `eslint-config-prettier` 以使 `ESLint` 和 `Prettier` 相互配合，安装完后在`.eslintrc` 中配置（以 `Create-React-App` 为例）：

```sh
yarn add eslint-config-prettier eslint-plugin-prettier -D
```

```js
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "prettier"
    ]
  },
```

这样就可以用"`prettier`"的部分规则覆盖前面的规则，让它们都能正常工作。

5). 配置编辑器（VScode 为例）

DE 中安装 [Prettier-Code Formater](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 插件：

![1.webp](http://salted-fish-bucket.oss-cn-guangzhou.aliyuncs.com/1.webp)

找到 IDE 中设置模块，搜索 format On Save，勾上这个就可以了。

![2.webp](http://salted-fish-bucket.oss-cn-guangzhou.aliyuncs.com/2.webp)

现在当我们 Ctrl + S 保存代码时，插件就会帮助我们自动格式化了。

这里有小伙伴要问了，要是有人将没有格式化的代码提交上去怎么办？
这时候就需要在 `git commit` 的阶段自动将提交的代码进行格式化，这里我们借助工具 `husky`，它主要可以帮助我们在 `git` 阶段检查提交消息、运行测试、检查代码等。

<!-- ## 代码规范之 CSS 规范

CSS 检查代码规范使用 stylelint 插件，规范则推荐使用 [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

1). 安装

```js
npm install --save-dev stylelint stylelint-config-standard
```

2). 在项目的根目录中创建一个配置文件`.stylelintrc.json`，内容如下：

```js
{
  "extends": "stylelint-config-standard"
}
```

3). 解决与 prettier 配置的冲突：

```js
npm install --save-dev stylelint-config-prettier
```

4). 将下面配置复制到.stylelintrc.json 中：

```js
{
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"]
}
```

5). 在 git commitv 阶段进行检测：

```js
 "lint-staged": {
    "**/*": "prettier --write --ignore-unknown", //格式化
    "src/**.{js,jsx,ts,tsx}": "eslint --ext .js,.jsx,.ts,.tsx", //对js文件检测
    "**/*.{less,css}": "stylelint --fix" //对css文件进行检测
  },
``` -->

## git 规范

> Git 有很多的 hooks, 让我们在不同的阶段,对代码进行不同的操作,控制提交到仓库的代码的规范性,和准确性, 以下只是几个常用的钩子

### 常用钩子

- **`pre-commit`** 判断提交的代码是否符合规范
- **`commit-msg`** 判断 commit 信息是否符合规范
- **`pre-commit`** 执行测试，避免对以前的内容造成影响

### 安装代码校验依赖

- 安装 `husky` 和 ​​`lint-staged`：

```js
npm install --save-dev husky lint-staged
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged"
// or
yarn add  husky lint-staged -D
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

- 然后将`lint-staged`配置添加到 package.json 中:

```js
// 自己搭配，仅做参考
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown",
    "*.{js,jsx,ts,tsx}": ["prettier --write .", "eslint  --fix"],
    "*.md": ["prettier --write"]
  }
}
```

这段配置的意思是：当执行 `git commit` 阶段前，先执行 `lint-staged`，`lint-staged` 中的内容就是对暂存区的文件执行格式化的命令。

### 安装提交信息依赖

```sh
yarn add @commitlint/cli @commitlint/config-conventional -D

```

创建`commitlint.config.js`文件

```sh
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

`@commitlint/config-conventional` 这是一个**规范配置**,标识采用什么规范来执行消息校验, 这个默认是 `Angular` 的提交规范

| 类型     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等     |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| feat     | 新特性、新功能                                         |
| fix      | 修改 bug                                               |
| perf     | 优化相关，比如提升性能、体验                           |
| refactor | 代码重构                                               |
| revert   | 回滚到上一个版本                                       |
| style    | 代码格式修改, 注意不是 css 修改                        |
| test     | 测试用例修改                                           |

`commit-msg` 钩子执行 消息校验

这里也可以采用自己写的方法,来校验内容, 看下`vue@next` 的消息提交

```js
"gitHooks": {
  "pre-commit":"lint-staged",
  "commit-msg":"node scripts/verifyCommit. js"
}
```

我们也可以使用自己写的方法,设置的话使用一下指令

```sh
npx husky add .husky/commit-msg 'node [dir]/filename.js'` # 指定目录文件
```

### 安装辅助提交依赖

```sh
  npm i commitizen cz-conventional-changelog -D
  or
  yarn add commitizen cz-conventional-changelog -D
```

安装指令和命令行的展示信息

```sh
  npm set-script commit "git-cz" # package.json 中添加 commit 指令, 执行 `git-cz` 指令
```

编写 commit 指令

```sh
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

### 自定义提交规范

```sh
  npm i -D commitlint-config-cz  cz-customizable
  or
  yarn add commitlint-config-cz  cz-customizable -D
```

变更 `commitlint.config.js` 这里采用自己定义的规范,将会覆盖上面那个,所以上面那个可以不用安装

```js
module.exports = { extends: ["cz"] };
```

增加 `.cz-config.js`

```js
  module.exports = {
  types: [
  { value: '✨ 新增', name: '新增: 新的内容' },
  { value: '🐛 修复', name: '修复: 修复一个 Bug' },
  { value: '📝 文档', name: '文档: 变更的只有文档' },
  { value: '💄 格式', name: '格式: 空格, 分号等格式修复' },
  { value: '♻️ 重构', name: '重构: 代码重构，注意和特性、修复区分开' },
  { value: '⚡️ 性能', name: '性能: 提升性能' },
  { value: '✅ 测试', name: '测试: 添加一个测试' },
  { value: '🔧 工具', name: '工具: 开发工具变动(构建、脚手架工具等)' },
  { value: '⏪ 回滚', name: '回滚: 代码回退' }
  ],
  scopes: [
  { name: 'leetcode' },
  { name: 'javascript' },
  { name: 'typescript' },
  { name: 'Vue' },
  { name: 'node' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /_ scopeOverrides: {
  fix: [
  {name: 'merge'},
  {name: 'style'},
  {name: 'e2eTest'},
  {name: 'unitTest'}
  ]
  }, _/
  // override the messages, defaults are as follows
  messages: {
  type: '选择一种你的提交类型:',
  scope: '选择一个 scope (可选):',
  // used if allowCustomScopes is true
  customScope: 'Denote the SCOPE of this change:',
  subject: '短说明:\n',
  body: '长说明，使用"|"换行(可选)：\n',
  breaking: '非兼容性说明 (可选):\n',
  footer: '关联关闭的 issue，例如：#31, #34(可选):\n',
  confirmCommit: '确定提交说明?(yes/no)'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100
  }
```

`package.json` 中,将原来 commit 配置,变更为自定义配置

```js
"config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
  }
```

然后提交就会显示对应你自己的配置文件内容，到此你就完成了自己的一个工作流的搭建了。

## 结束语

统一规范的最根本目的是为了保证团队成员的一致性，从而减少沟通成本，提高开发效率。
学会热爱标准，但要确保它们不是一成不变的。如果制定的规范不适合您的团队，请确保可以适应和重写所需要的任何规则。它并不是要强制执行一种工作方式，而是为了帮助促进团队之间的互动 👏👏👏。
