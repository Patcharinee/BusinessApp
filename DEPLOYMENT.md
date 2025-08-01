# GitHub Pages Deployment Guide

This guide will help you deploy your React app to GitHub Pages.

## Prerequisites

1. **Node.js and npm** (if you want to build locally)
   - Download from: https://nodejs.org/
   - Install and restart your terminal

2. **Git** (if not already installed)
   - Download from: https://git-scm.com/

## Method 1: Automatic Deployment (Recommended)

### Step 1: Push to GitHub
1. You already have a GitHub repository created
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Patcharinee/BusinessApp.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Click **Save**

### Step 3: Automatic Deployment
The GitHub Actions workflow will automatically:
- Build your app when you push to main branch
- Deploy to GitHub Pages
- Your app will be available at: `https://patcharinee.github.io/BusinessApp/`

## Method 2: Manual Deployment

### Step 1: Install Node.js
Download and install Node.js from https://nodejs.org/

### Step 2: Build Locally
```bash
npm install
npm run build
```

### Step 3: Deploy
1. The `dist` folder will be created
2. Upload the contents of `dist` folder to GitHub Pages

## Troubleshooting

### If you get "npm not found":
- Install Node.js from https://nodejs.org/
- Restart your terminal/command prompt

### If the build fails:
- Make sure all dependencies are installed: `npm install`
- Check for any syntax errors in your code

### If GitHub Pages shows a 404:
- Make sure the repository name in vite.config.js matches your actual repository name
- Check that the gh-pages branch was created
- Wait a few minutes for deployment to complete

## Custom Domain (Optional)

To use a custom domain:
1. Go to repository Settings > Pages
2. Enter your domain in the **Custom domain** field
3. Add a CNAME file to your repository root with your domain
4. Update your DNS settings

## Local Development

To test locally before deploying:
```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your app.

## Build Output

After running `npm run build`, you'll find:
- `dist/` folder with all built files
- `dist/index.html` - Main HTML file
- `dist/assets/` - CSS, JS, and other assets

## Support

If you encounter issues:
1. Check the GitHub Actions tab for build errors
2. Verify your repository settings
3. Make sure all files are committed and pushed 