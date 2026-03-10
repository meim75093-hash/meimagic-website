# MeiMagic Website - GitHub Pages 部署指南

## 📋 部署前检查清单

- [x] 网站文件完整（index.html, styles.css, script.js）
- [x] `.nojekyll` 文件已创建（防止 GitHub Pages 处理 Jekyll）
- [x] Git 仓库已初始化
- [x] 初始提交已完成

---

## 🚀 部署方式（3 选 1）

### 方式一：GitHub 网页上传（最简单，推荐新手）

1. **创建 GitHub 仓库**
   - 访问 https://github.com/new
   - 仓库名：`meimagic-website`
   - 设为 **Public**（公开）
   - 不要初始化 README/.gitignore
   - 点击 "Create repository"

2. **上传文件**
   - 点击 "uploading an existing file"
   - 拖拽或选择以下文件：
     - `index.html`
     - `styles.css`
     - `script.js`
     - `.nojekyll`
   - 点击 "Commit changes"

3. **启用 GitHub Pages**
   - 进入仓库 **Settings** → **Pages**
   - Source 选择：`Deploy from a branch`
   - Branch 选择：`main`（或 `master`）
   - Folder 选择：`/ (root)`
   - 点击 **Save**

4. **等待部署**
   - 等待 1-2 分钟
   - 刷新页面查看部署状态
   - 成功后会显示访问 URL

---

### 方式二：使用部署脚本（Windows）

```bash
cd C:\Users\Administrator\.openclaw\workspace\meimagic-website
.\deploy.bat
```

按提示输入你的 GitHub 仓库 URL，脚本会自动完成推送。

---

### 方式三：Git 命令行（推荐开发者）

```bash
# 进入网站目录
cd C:\Users\Administrator\.openclaw\workspace\meimagic-website

# 添加远程仓库（替换为你的仓库 URL）
git remote add origin https://github.com/YOUR_USERNAME/meimagic-website.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

---

## 🌐 访问你的网站

部署成功后，网站 URL 为：

```
https://YOUR_USERNAME.github.io/meimagic-website
```

例如：`https://meimagic.github.io/meimagic-website`

---

## ⚙️ 启用 GitHub Actions（可选）

如果需要自动部署：

1. 进入仓库 **Settings** → **Actions** → **General**
2. 选择 **Allow all actions and reusable workflows**
3. 点击 **Save**

---

## 🎨 自定义域名（可选）

1. 在 **Settings** → **Pages** → **Custom domain** 输入你的域名
2. 在你的 DNS 提供商处添加 CNAME 记录：
   - 主机记录：`www` 或 `@`
   - 记录值：`YOUR_USERNAME.github.io`
3. 等待 DNS 生效（最多 48 小时）

---

## 📝 后续更新

每次修改网站后：

```bash
git add .
git commit -m "描述你的更改"
git push
```

GitHub Pages 会自动重新部署（约 1-2 分钟）。

---

## 🆘 常见问题

**Q: 页面显示 404？**
- 等待 1-2 分钟让 GitHub 处理
- 检查文件名是否为 `index.html`（小写）
- 确认 `.nojekyll` 文件存在

**Q: CSS/JS 不加载？**
- 检查文件路径是否正确
- 清除浏览器缓存（Ctrl+F5）
- 查看浏览器控制台错误

**Q: 如何查看部署日志？**
- 进入仓库 **Actions** 标签
- 查看 `pages-build-deployment` 工作流

---

*最后更新：2026-03-10*
*部署状态：✅ 本地 Git 准备完成，待推送至 GitHub*
