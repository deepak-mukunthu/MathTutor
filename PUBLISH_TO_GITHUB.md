# Publishing Math Tutor to GitHub

Your Math Tutor project is ready to publish! Here's how to push it to your personal GitHub account.

## Quick Setup (5 minutes)

### Step 1: Create the Repository on GitHub

1. Go to https://github.com/new
2. Sign in as **deepak-mukunthu** (your personal account)
3. Fill in the details:
   - **Repository name**: `MathTutor`
   - **Description**: `Interactive math tutor and quiz master for middle school students`
   - **Visibility**: Public ✓
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### Step 2: Push Your Code

The local repository is already initialized and committed. Just run these commands:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/deepak-mukunthu/MathTutor.git

# Push to GitHub
git push -u origin main
```

That's it! Your project will be live at:
**https://github.com/deepak-mukunthu/MathTutor**

---

## Optional: Deploy to GitHub Pages

Want to let people use your Math Tutor online? Deploy it for free:

### Step 3: Configure Vite for GitHub Pages

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy scripts to package.json (already done below)
```

### Step 4: Update vite.config.js

Add this line to your vite.config.js:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/MathTutor/',  // Add this line
})
```

### Step 5: Add Deploy Scripts

Your package.json needs these scripts (I'll add them):

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 6: Deploy

```bash
npm run deploy
```

### Step 7: Enable GitHub Pages

1. Go to your repo: https://github.com/deepak-mukunthu/MathTutor/settings/pages
2. Source: Select `gh-pages` branch
3. Click Save

Your app will be live at:
**https://deepak-mukunthu.github.io/MathTutor/**

---

## What's Already Done

✅ Git repository initialized
✅ All files committed
✅ Branch renamed to `main`
✅ README.md with full documentation
✅ .gitignore configured
✅ Clean commit history

## Project Statistics

- **17 files** committed
- **3,671 lines** of code
- **Technologies**: React 18, Vite 5, Vanilla CSS
- **Features**: 6 topics, 3 difficulties, coaching system, multi-attempt learning

---

## Need Help?

If you get any errors or need assistance, just ask!
