## npx npm 区别

### npm

> 众所周知，`npm` 是 `Node.js` 的软件包管理器，其目标是自动化的依赖性和软件包管理。

这意味着，可以在 `package.json` 文件中为项目指定所有依赖项（软件包），当需要为其安装依赖项时，只要运行 `npm install`，这样就好啦！

它还提供了版本控制，即可以指定项目的依赖版本，这样可以在大多数情况下，防止更新破坏项目，或者使用首选版本。

另一方面，`npx` 是执行 `Node` 软件包的工具，它从 `npm5.2` 版本开始，就与 `npm` 捆绑在一起。

### npx

1. 默认情况下，首先检查路径中是否存在要执行的包（即在项目中）；
2. 如果存在，它将执行；
3. 若不存在，意味着尚未安装该软件包，npx 将安装其最新版本，然后执行它；

> 上文已说明，此行为是 `npx` 的默认行为之一，但它具有可用来阻止的标志。

例如，如果运行 `npx` `some-package` --no-install，意味着告诉 `npx` ，它应该仅执行。`some-package`，如果之前未安装，则不安装

### 示例

假设有一个名为`my-package`的软件包，想要执行它。

好吧，若没有 npx，要执行一个软件包，必须通过其本地路径运行来完成，如：`./node_modules/bin/my-package`

或在 `package.json`文件的 `scripts section`中将其定义为单独的脚本，如下所示：

```json
{
  "name": "something",
  "version": "1.0.0",
  "scripts": {
    "my-package": "./node_modules/bin/my-package"
  }
}
```

然后使用 `npm run my-package` 运行。

现在，运用 `npx`，只需运行 `npx my-package`，即可轻松实现此目的。
