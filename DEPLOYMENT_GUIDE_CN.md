# 🚀 MeiMagic 网站部署指南

## ✅ 已完成的文件

网站文件已创建在 `meimagic-website` 文件夹中：

```
meimagic-website/
├── index.html      # 主页面（Hero + 10 个产品 + 关于 + 社交 + 页脚）
├── styles.css      # 现代化样式（响应式设计）
├── script.js       # 交互效果（平滑滚动、动画）
├── README.md       # 完整说明文档
└── deploy.bat      # Windows 快速部署脚本
```

## 📋 部署步骤（3 种方式）

### 方式一：GitHub 网页上传（最简单，推荐新手）

#### 步骤 1：创建 GitHub 仓库

1. 打开 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `meimagic-website`
   - **Description**: MeiMagic 品牌官网 - Productivity Templates
   - **Public**: ✅ 选中
   - **Add a README file**: ❌ 不选中（我们已有文件）
3. 点击 **"Create repository"**

#### 步骤 2：上传网站文件

1. 在新仓库页面，点击 **"Add file"** → **"Upload files"**
2. 将以下文件拖拽到上传区域：
   - `index.html`
   - `styles.css`
   - `script.js`
3. 在 "Commit changes" 输入框填写：`Initial commit: MeiMagic website`
4. 点击 **"Commit changes"**

#### 步骤 3：启用 GitHub Pages

1. 点击仓库顶部的 **"Settings"**（设置）
2. 在左侧菜单找到并点击 **"Pages"**
3. 在 "Build and deployment" 部分：
   - **Source**: Deploy from a branch
   - **Branch**: 选择 `main`，文件夹选择 `/ (root)`
4. 点击 **"Save"**

#### 步骤 4：等待部署完成

- GitHub 会自动构建你的网站（通常 1-2 分钟）
- 刷新 Pages 设置页面，你会看到部署成功的消息
- 网站地址格式：`https://你的用户名.github.io/meimagic-website`

---

### 方式二：使用部署脚本（自动化）

如果你已安装 Git，可以双击运行 `deploy.bat` 文件：

1. 双击 `deploy.bat`
2. 按提示输入你的 GitHub 仓库 URL
   - 格式：`https://github.com/你的用户名/meimagic-website.git`
3. 脚本会自动完成 Git 初始化和推送
4. 然后手动执行步骤 3-4（启用 Pages）

---

### 方式三：Git 命令行（适合开发者）

```bash
# 进入网站文件夹
cd meimagic-website

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: MeiMagic website"

# 添加远程仓库（替换为你的用户名）
git remote add origin https://github.com/YOUR_USERNAME/meimagic-website.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

然后执行步骤 3-4 启用 Pages。

---

## 🌐 访问你的网站

部署成功后，网站将在以下地址可访问：

```
https://YOUR_USERNAME.github.io/meimagic-website
```

**示例：**
- 如果你的 GitHub 用户名是 `meimagic`
- 网站地址就是：`https://meimagic.github.io/meimagic-website`

---

## 🔧 自定义内容

### 1. 更新产品链接

编辑 `index.html`，找到所有 Gumroad 链接并替换为你的实际产品 URL：

```html
<!-- 查找所有这样的链接 -->
<a href="https://meimagic.gumroad.com" target="_blank" rel="noopener" class="btn btn-product">Get Template</a>

<!-- 替换为具体产品链接，例如 -->
<a href="https://meimagic.gumroad.com/l/finance-tracker" target="_blank" rel="noopener" class="btn btn-product">Get Template</a>
```

### 2. 更新社交媒体链接

编辑 `index.html` 的社交部分：

```html
<!-- X (Twitter) -->
<a href="https://x.com/meiMei189561" target="_blank" rel="noopener" class="social-link">

<!-- TikTok（替换为你的账号） -->
<a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener" class="social-link">

<!-- 小红书（替换为你的账号） -->
<a href="https://xiaohongshu.com/user/profile/yourid" target="_blank" rel="noopener" class="social-link">

<!-- Reddit（替换为你的账号） -->
<a href="https://reddit.com/user/yourusername" target="_blank" rel="noopener" class="social-link">
```

### 3. 更新联系邮箱

编辑 `index.html` 页脚部分：

```html
<a href="mailto:contact@meimagic.com">Contact</a>
```

### 4. 修改品牌颜色

编辑 `styles.css`，在文件顶部找到：

```css
:root {
    --primary-color: #6366f1;  /* 主色调（紫色） */
    --secondary-color: #ec4899; /* 辅助色（粉色） */
}
```

修改为你喜欢的颜色代码。

---

## 📱 网站结构

```
首页
├── Hero 区域
│   ├── 品牌名：MeiMagic
│   ├── Slogan: Transform Your Productivity
│   ├── CTA 按钮：Browse Templates / Visit Gumroad Shop
│   └── 数据统计：10+ Templates / $8-20 / Instant Download
│
├── 产品展示（10 个模板卡片）
│   ├── Finance Tracker Pro - $12.99
│   ├── Notion Life OS - $15.99
│   ├── Content Calendar - $9.99
│   ├── Goal Tracker Ultimate - $11.99
│   ├── Business Dashboard - $18.99
│   ├── Study Planner - $8.99
│   ├── Fitness Tracker - $10.99
│   ├── Reading List Manager - $7.99
│   ├── Creative Project Hub - $13.99
│   └── Investment Portfolio - $16.99
│
├── 关于我
│   ├── 品牌介绍
│   └── 4 个亮点：Professionally Designed / Instant Download / 
│       Regular Updates / Email Support
│
├── 社交媒体链接
│   ├── X (Twitter): @meiMei189561
│   ├── TikTok
│   ├── 小红书
│   └── Reddit
│
└── 页脚
    ├── 品牌信息
    ├── Gumroad Shop 链接
    ├── 联系邮箱
    └── 版权声明
```

---

## ✨ 网站特性

- ✅ **完全响应式**：完美适配手机、平板、桌面
- ✅ **现代渐变设计**：紫色主题，专业美观
- ✅ **平滑滚动动画**：优秀的用户体验
- ✅ **10 个产品卡片**：带标签和价格
- ✅ **社交媒体集成**：X/TikTok/小红书/Reddit
- ✅ **快速加载**：纯 HTML/CSS/JS，无框架依赖
- ✅ **SEO 优化**：包含 meta 描述
- ✅ **GitHub Pages 就绪**：一键部署

---

## 🎨 技术栈

- **HTML5**：语义化结构
- **CSS3**：Flexbox、Grid、自定义属性
- **Vanilla JavaScript**：无框架，轻量级
- **Google Fonts**：Inter 字体

---

## 📞 需要帮助？

如果在部署过程中遇到问题：

1. 检查 GitHub 仓库是否为 **Public**
2. 确认 Pages 设置中选择了正确的分支和文件夹
3. 等待 2-3 分钟让 GitHub 完成构建
4. 刷新页面查看部署状态

---

**祝部署顺利！🎉**
