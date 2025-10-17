# WebGameStation

WebGameStation 是一个部署在 GitHub Pages 上的静态网页游戏平台。首页采用 iOS 风格的卡片菜单，展示所有可玩的小游戏；点击卡片后进入对应的独立页面，无需任何后端服务即可畅玩。

## 功能亮点
- 🌈 **iOS 风格体验**：柔和渐变背景、毛玻璃卡片与圆角按钮，为浏览器页面带来近似 App 的质感。
- 🎮 **独立游戏子页**：每个游戏对应一个 `games/<slug>/` 目录，便于维护与扩展。
- 🚀 **纯静态部署**：只依赖 HTML/CSS/JS 与静态资源，可直接发布到 GitHub Pages。
- 📱 **移动端友好**：使用响应式布局，兼顾桌面与移动设备体验。
- 🌐 **中英双语**：首页与最新的贪吃蛇游戏支持实时中英文切换，适配不同语言偏好的玩家。

## 当前收录游戏
| 游戏 | 简介 | 子页面 | 试玩入口 |
| ---- | ---- | ------ | -------- |
| AI 五子棋 | 与智能对手对弈的五子棋游戏，支持多种 AI 策略。 | `games/ai-gobang/` | https://jinchen.space/Web_Gobang/ |
| 像素贪吃蛇 | 经典贪吃蛇玩法的像素重制版，提供键盘与触控双操控。 | `games/snake/` | ./games/snake/ |
| 极光灯阵 | 点击翻转灯面并熄灭整局 5×5 灯阵的轻量解谜小游戏。 | `games/lights-out/` | ./games/lights-out/ |

> 📌 说明：AI 五子棋暂以 iframe 形式嵌入外部部署（上方试玩链接）；像素贪吃蛇已完整收录于仓库，可离线游玩。

## 目录结构（规划）
```
WebGameStation/
├─ index.html                # 首页：iOS 风格游戏菜单
├─ styles/
│  ├─ base.css               # 全局变量、渐变背景、字体定义
│  ├─ home.css               # 首页与通用组件样式
│  └─ game-detail.css        # 游戏详情页样式
├─ assets/
│  ├─ images/                # 游戏卡片、封面图
│  └─ icons/                 # 图标资源
├─ games/
│  ├─ ai-gobang/
│  │  └─ index.html          # AI 五子棋详情与嵌入页面
│  └─ snake/
│     ├─ index.html          # 像素贪吃蛇详情 + 游戏主体
│     ├─ snake.css           # 贪吃蛇专属样式
│     └─ snake.js            # 贪吃蛇游戏逻辑
├─ agent.md
└─ README.md
```

## 本地预览
仓库仅包含静态文件，可直接双击 `index.html` 在浏览器查看。若涉及模块化脚本或需模拟生产环境，推荐使用本地静态服务器：

```bash
# Python
python -m http.server 4173

# Node
npx serve .
```

启动后访问 `http://localhost:<port>/` 查看首页效果。

## 部署指南
1. 将最终静态文件推送到 `main` 分支。
2. 在 GitHub 仓库设置中启用 Pages（来源选择 `main` 分支根目录或 `/docs`，与实际结构一致）。
3. 等待 GitHub Pages 构建完成后访问发布链接，确认首页和各游戏页面可用。
4. 每次更新游戏或样式，重复上述流程即可完成部署。

## 添加新游戏
1. 在 `games/<slug>/` 下创建游戏所需的 HTML、CSS、JS 文件及资源。
2. 在首页卡片列表中新增该游戏，包含名称、简介、标签、按钮等信息。
3. 将游戏的封面或预览图放入 `assets/images/`，并在 README 表格中登记游戏信息。
4. 进行桌面和移动端的手动测试，确保链接、交互与资源路径正确。
5. 提交 PR 并合并至 `main`，验证 GitHub Pages 部署状态。

## 许可
待确定。在引入第三方资源或游戏时，请确保遵守其授权条款并在 README 中注明出处。
