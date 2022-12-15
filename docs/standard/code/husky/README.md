---
lang: zh-CN
title: husky
description: husky
---

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
