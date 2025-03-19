# 🚀 环境启动器 (Env Runner)

**环境启动器 (Env Runner)** 是一个 VS Code 插件，允许你 **快速启动前端不同环境**，如 `开发环境`、`测试环境`、`生产环境`。只需 **点击侧边栏** 选择环境，即可在终端执行相应的 `npm` 命令。

---

## **🎯 功能特点**

- **📌 一键启动环境**：支持 `npm run`
- **📌 侧边栏管理环境**：在 Explorer 侧边栏显示环境，点击即可运行。
- **📌 支持自定义**：可在 `settings.json` 配置自己的环境命令。
- **📌 自动更新**：修改 `settings.json` 后，列表会自动刷新。

---

## **📥 安装**

### **方法 从 VS Code 扩展市场安装**

1. 打开 VS Code
2. 进入 **扩展商店 (Extensions)**
3. 搜索 `Env Runner`
4. 点击 **安装 (Install)**
5. 如果修改了配置文件内容，需要重新加载一下窗口

---

## **🚀 如何使用**

### **1️⃣ 在侧边栏启动环境**

1. 打开 **资源管理器 (Explorer)**
2. 在 **环境启动器 (Env Runner)** 面板中，选择一个环境
3. 点击 `🛠️ 开发环境` 或 `🚀 生产环境`
4. 终端会自动执行对应的命令，例如：
   ```sh
   npm run dev
   ```

### **2️⃣ 自定义环境 (可选)**

你可以在 `settings.json` 里修改环境列表：

```json
"envRunner.commands": [
  { "label": "🌱 本地开发", "command": "npm run dev" },
  { "label": "🛸 测试环境", "command": "npm run test" },
  { "label": "💥 生产环境", "command": "npm run prod" }
]
```

**修改后，插件会自动更新环境列表！** 🎯

![Env Runner 示例](https://github.com/wuqiaoli/env-runner/blob/main/images/20250318-103929.png?raw=true)

## **📜 许可证**

**本项目基于 MIT 许可证开源。 许可证** 🎯
