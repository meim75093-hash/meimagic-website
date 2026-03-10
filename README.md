# MeiMagic Website

A modern, responsive brand website for MeiMagic productivity templates.

## 📁 Files

- `index.html` - Main HTML structure
- `styles.css` - Modern CSS with responsive design
- `script.js` - Interactive features and animations

## 🚀 Deploy to GitHub Pages

### Option 1: Using GitHub UI (Easiest)

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `meimagic-website` (or `meimagic.github.io` for custom domain)
   - Make it **Public**
   - Check "Add a README file" (optional)
   - Click "Create repository"

2. **Upload files:**
   - Click "Add file" → "Upload files"
   - Drag and drop: `index.html`, `styles.css`, `script.js`
   - Click "Commit changes"

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Click "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Branch: Select `main` (or `master`)
   - Folder: Select `/ (root)`
   - Click "Save"

4. **Wait for deployment:**
   - GitHub will build your site (usually takes 1-2 minutes)
   - Your site will be live at: `https://yourusername.github.io/meimagic-website`

### Option 2: Using Git Command Line

```bash
# Navigate to the website folder
cd meimagic-website

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: MeiMagic website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/meimagic-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-4 from Option 1 to enable Pages.

## 🌐 Access Your Website

Once deployed, your website will be available at:

```
https://YOUR_USERNAME.github.io/meimagic-website
```

If you named your repository `YOUR_USERNAME.github.io`, it will be:

```
https://YOUR_USERNAME.github.io
```

## 🎨 Customization

### Update Product Links

Edit `index.html` and replace the Gumroad links with your actual product URLs:

```html
<a href="https://meimagic.gumroad.com/l/product-name" target="_blank" rel="noopener" class="btn btn-product">Get Template</a>
```

### Update Social Media Links

Edit the social section in `index.html`:

```html
<a href="https://x.com/meiMei189561" target="_blank" rel="noopener" class="social-link">
```

### Change Colors

Edit `styles.css` and modify the CSS variables:

```css
:root {
    --primary-color: #6366f1;  /* Main brand color */
    --secondary-color: #ec4899; /* Accent color */
}
```

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern gradient design
- ✅ Smooth scroll animations
- ✅ 10 product cards with tags
- ✅ Social media integration
- ✅ Fast loading (pure HTML/CSS/JS)
- ✅ SEO optimized
- ✅ GitHub Pages ready

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Inter)

## 📝 License

Free to use and modify for your MeiMagic brand.

---

**Need help?** Contact: contact@meimagic.com
