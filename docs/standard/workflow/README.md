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
yarn add eslint-config-prettier,eslint-plugin-prettier -D
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
这时候就需要在 `git commit` 的阶段自动将提交的代码进行格式化，这里我们借助工具 `husky`，它主要可以帮助我们在 `git` 阶段检查提交消息、运行测试、检查代码等。没接触过的小伙伴可以去官网了解一下，配置如下：

- 安装 `husky` 和 ​​`lint-staged`：

```js
npm install --save-dev husky lint-staged
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged"
// or
yarn add --dev husky lint-staged
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

- 然后将以下内容添加到 package.json 中:

```js
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

这段配置的意思是：当执行 `git commit` 阶段前，先执行 `lint-staged`，`lint-staged` 中的内容就是对暂存区的文件执行格式化的命令。

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

### 工具

- husky

## 代码规范之格式化规范

## 代码规范之自定义其他规范

下面列一些团队内定的其他规范：

1. 命名规范

变量的命名中应尽量减少缩写的情况发生，做到见名知意。

```js
// 👎 自我感觉良好的缩写:
let rContent = 'willen'; 

// 👍 无需对每个变量都写注释，从名字上就看懂
let firstName = 'jackie'; 

// 👎 从命名无法知道返回值类型
function showFriendsList() {....} // // 无法辨别函数意图,返回的是一个数组，还是一个对象，还是true or false?

// 👍 明确函数意图，对于返回true or false的函数，最好以should/is/can/has开头
function shouldShowFriendsList() {...}
function isEmpty() {...}
function canCreateDocuments() {...}
function hasLicense() {...}
function sendEmailToUser(user) {.... } //动词开头，函数意图就很明显
```

2. 写注释

在每个文件的顶部明确说明该组件做什么，有没有业务理解难点等等，对业务特殊函数/变量也需要写注释

```js
/**
 * 导航页面-右边区域
 */

const Content=>()=>xxx

const MAX_INPUT_LENGTH = 8; //用于限制密码输入框

function Component(props) {
  return (
    <>
      {/* 如果用户没有订阅则不展示广告 */}
      {user.subscribed ? null : <SubscriptionPlans />}
    </>
  )
}
```

3. 变量兜底

```js
// 👎 对于求值获取的变量，没有兜底
const { data } = getApiRequest();
data.map((s) => s.id); //没有考虑data异常的情况，代码一跑就爆炸

// 👍 对于求值变量，做好兜底
const { data = [] } = getApiRequest();
data.map((s) => s?.id); //没有考虑data异常的情况，代码一跑就爆炸
```

4. 辅助函数必须是纯函数

```js
// 👎 不要让功能函数的输出变化无常
function plusAbc(a, b, c) {
  // 这个函数的输出将变化无常，因为api返回的值一旦改变，同样输入函数的a，b,c的值，但函数返回的结果却不一定相同。
  var c = fetch("../api");
  return a + b + c;
}

// 👍 功能函数使用纯函数，输入一致，输出结果永远唯一
function plusAbc(a, b, c) {
  // 同样输入函数的a，b,c的值，但函数返回的结果永远相同。
  return a + b + c;
}
```

5. 优先使用函数式编程

```js
// 👎 使用for循环编程
for (i = 1; i <= 10; i++) {
  a[i] = a[i] + 1;
}

// 👍 使用函数式编程
let b = a.map((item) => ++item);
```

6. 优先使用函数式组件

除非需要用到错误边界，否则函数式组件应该是首选方法。

7. 组件复杂度

如果一个组件做的事情太多，应适当提取一些逻辑，将其拆分为更小的组件。

如果提取的组件很复杂，则需要依照一定的规则和条件一一提取它。

代码行数并不是一个客观的衡量标准，更多是需要考虑责任划分和抽象。

8. 避免嵌套三元运算符

三元运算符在第一级之后变得难以阅读，虽然看起来节省了代码空间，但最好在代码中明确意图，保持良好的阅读性。

```js
// 👎 不够清晰，要是再嵌套一层两层呢
isSubscribed ? (
  <ArticleRecommendations />
) : isRegistered ? (
  <SubscribeCallToAction />
) : (
  <RegisterCallToAction />
);

// 👍 将判断逻辑进行拆分
function CallToActionWidget({ subscribed, registered }) {
  if (subscribed) {
    return <ArticleRecommendations />;
  }

  if (registered) {
    return <SubscribeCallToAction />;
  }

  return <RegisterCallToAction />;
}

function Component() {
  return <CallToActionWidget subscribed={subscribed} registered={registered} />;
}
```

## Git commit 规范

git commit 规范主要可以帮助开发人员在 code review 期间更容易理解提交的内容，现在大部分主流 commit 规范都是基于[Angular 团队的规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md)而衍生出来的，它的 message 格式如下：

```html
<type
  >(<scope
    >):
    <subject>
      <BLANK LINE>
        <body>
          <BLANK LINE> <footer></footer></BLANK></body></BLANK></subject></scope
></type>
```

每个提交消息都包含一个 subject、一个 body 和一个 footer (中间使用空行分割)，提交信息的任何一行不能超过 100 个字符。
👉 type 主要有以下几种类型：

feat: 一个新特性
fix: 修复 bug
docs: 文档修改
style: 不影响代码含义的更改（空格、格式、缺少分号等）
refactor: 代码重构
perf: 优化性能
test: 测试用例修改
chore: 对构建过程或辅助工具和库的更改，例如文档生成

👉 scope：可以是影响范围的任何内容。
👉 subject：包含对更改的简洁描述，规则：

使用陈述语句
第一个字母不要大写
末尾没有点 (.)

👉 body：commit 具体修改内容, 可以分为多行，应该包括改变的动机，并与以前的行为进行对比。
👉 footer: 一些备注, 通常是修复的 bug 的链接。
截取一张开源库的 commit，[example](https://github.com/nrwl/nx)：

![3.webp](http://salted-fish-bucket.oss-cn-guangzhou.aliyuncs.com/3.webp)

有了规范后，我们需要通过工具去约束：[commitlint](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fcommitlint)。它要做的就是在我们每次提交 `git commit` 的时候，都会帮我们检查 `commit message` 是否符合一定的规范，如果不符合，就让这次提交失败。

具体配置：

```js
# 安装 commitlint cli 和 conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

配置要使用的 commitlint 规则
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

加入到husky中：
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
or
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
```

更多详情见官网：github.com/conventiona…

[husky 官方文档](https://github.com/typicode/husky)

当您提交或推送时，您可以使用它来整理您的提交消息、运行测试、lint 代码等。Husky 支持[所有 Git 钩子](https://git-scm.com/docs/githooks)。

## 特征

- 零依赖和轻量级 ( 6 kB)
- 由现代新 Git 功能提供支持 ( core.hooksPath)
- 遵循有关自动安装的 npm 和 Yarn 最佳实践
- 用户友好的消息
- 可选安装
- 喜欢哈士奇 4，支持
  - macOS、Linux 和 Windows
  - Git 图形用户界面
  - 自定义目录
  - 单体仓库

## 安装

`husky-init`是用 `husky` 快速初始化项目的一次性命令。

```sh
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```

它将设置 `husky`，修改`package.json`并创建一个`pre-commit`您可以编辑的示例挂钩。`npm test`默认情况下，它会在您提交时运行。

要添加另一个挂钩，请使用`husky add.`

例如：

```sh
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

_对于 `Windows` 用户，如果您在运行时看到帮助消息`npx husky add` ...，请尝试`node node_modules/husky/lib/bin add ...`改用。这不是哈士奇代码的问题。_

## lint-staged

**`lint-staged` 是一个在 git 暂存区上运行 linters 的工具。**

它将根据`package.json`依赖项中的代码质量工具来安装和配置 `husky` 和 `lint-staged` ，因此请确保在此之前安装（`npm install --save-dev`）并配置所有代码质量工具，比如`Prettier`和`ESlint`。

```js
执行 npx lint-staged --help 命令可以看到相关的所有参数如下：
用法: lint-staged [options]

Options:
  -V, --version                      输出版本号
  --allow-empty                      当任务撤消所有分阶段的更改时允许空提交（默认值：false）
  -c, --config [path]                配置文件的路径
  -d, --debug                        打印其他调试信息（默认值：false）
  -p, --concurrent <parallel tasks>  要同时运行的任务数，或者为false则要连续运行任务（默认值：true）
  -q, --quiet                        自己的控制台输出（默认值：false）
  -r, --relative                     将相对文件路径传递给任务（默认值：false）
  -x, --shell                        跳过任务解析以更好地支持shell（默认值：false）
  -h, --help                         输出用法信息
```

## git commit 提交规范

通常使用 Google AnguarJS 规范的要求。 格式要求：

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- `<type>`代表某次提交的类型，比如是修复一个 `bug` 或是增加一个 `feature`，具体类型如下：
  | 类型 | 描述 |
  | -------- | ------------------------------------------------------- |
  | feat | 新增 feature |
  | fix | 修复 bug |
  | docs | 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等 |
  | style | 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑 |
  | refactor | 代码重构，没有加新功能或者修复 bug |
  | perf | 优化相关，比如提升性能、体验 |
  | test | 测试用例，包括单元测试、集成测试等 |
  | chore | 改变构建流程、或者增加依赖库、工具等 |
  | revert | 回滚到上一个版本 |
- `scope` 说明 `commit` 影响的范围。`scope` 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。
- `subject` 是 `commit` 的简短描述；
- `body` 提交代码的详细描述；
- `footer` 如果代码的提交是不兼容变更或关闭缺陷，则 `footer` 必需，否则可以省略。

## 结束语

统一规范的最根本目的是为了保证团队成员的一致性，从而减少沟通成本，提高开发效率。
学会热爱标准，但要确保它们不是一成不变的。如果制定的规范不适合您的团队，请确保可以适应和重写所需要的任何规则。它并不是要强制执行一种工作方式，而是为了帮助促进团队之间的互动 👏👏👏。
