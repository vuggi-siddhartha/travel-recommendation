# GitHub Setup & Deployment Guide

## Complete Step-by-Step Instructions

### Prerequisites
- GitHub account (create at https://github.com if you don't have one)
- Git installed on your machine
- PowerShell or Command Prompt

---

## Phase 1: Create GitHub Repository

### Step 1.1: Create New Repository on GitHub

1. Go to **https://github.com/new**
2. Fill in the repository details:
   - **Repository name**: `travel-recommendation` (or your preferred name)
   - **Description**: "A modern travel recommendation website with HTML, CSS, JavaScript, and JSON data"
   - **Visibility**: Select **PUBLIC** ⭐ (Important for GitHub Pages)
   - **Initialize this repository with**: Leave unchecked (we'll add files manually)
3. Click **Create repository**

### Step 1.2: Copy Your Repository URL

After creation, you'll see a page with your repository URL. It looks like:
```
https://github.com/YOUR-USERNAME/travel-recommendation.git
```

**Save this URL** — you'll need it in the next phase.

---

## Phase 2: Initialize Git Locally

### Step 2.1: Open PowerShell

1. Press `Win + X` and select **Windows PowerShell (Admin)**
2. Or search for "PowerShell" in Start menu

### Step 2.2: Navigate to Your Project

```powershell
cd "C:\Users\sidvuggi\Desktop\ME_OBSERV\travelRecommendation"
```

### Step 2.3: Initialize Git Repository

```powershell
git init
```

**Output**: `Initialized empty Git repository in C:\Users\sidvuggi\Desktop\ME_OBSERV\travelRecommendation\.git\`

### Step 2.4: Configure Git User (One-time setup)

```powershell
git config --global user.name "Your Full Name"
git config --global user.email "your-email@gmail.com"
```

**Example**:
```powershell
git config --global user.name "Sidharth Vuggi"
git config --global user.email "sidvuggi@example.com"
```

---

## Phase 3: Add & Commit Files

### Step 3.1: Check Git Status

```powershell
git status
```

**Expected output**: Shows all untracked files (travel_recommendation.html, style.css, etc.)

### Step 3.2: Add All Files

```powershell
git add .
```

This stages all files for commit.

### Step 3.3: Verify Files Are Staged

```powershell
git status
```

**Expected output**: All files should show as "Changes to be committed" in green

### Step 3.4: Create First Commit

```powershell
git commit -m "Initial commit: Travel Recommendation website with HTML, CSS, JS, and JSON data"
```

**Output**: Shows files changed, insertions, etc.

---

## Phase 4: Connect Remote & Push

### Step 4.1: Add Remote Repository

Replace `YOUR-USERNAME` with your actual GitHub username:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/travel-recommendation.git
```

**Example**:
```powershell
git remote add origin https://github.com/sidvuggi/travel-recommendation.git
```

### Step 4.2: Verify Remote Connection

```powershell
git remote -v
```

**Expected output**:
```
origin  https://github.com/YOUR-USERNAME/travel-recommendation.git (fetch)
origin  https://github.com/YOUR-USERNAME/travel-recommendation.git (push)
```

### Step 4.3: Rename Branch to Main (if needed)

```powershell
git branch -M main
```

### Step 4.4: Push to GitHub

```powershell
git push -u origin main
```

**First time**: You may be prompted to authenticate. Follow the GitHub authentication flow.

**Output**: Shows files being pushed, e.g., `5 files changed, 2500 insertions(+)`

---

## Phase 5: Enable GitHub Pages

### Step 5.1: Go to Repository Settings

1. Go to your repository: `https://github.com/YOUR-USERNAME/travel-recommendation`
2. Click **Settings** (top navigation bar)

### Step 5.2: Navigate to Pages

1. In the left sidebar, scroll down and click **Pages**
2. You should see "GitHub Pages" settings

### Step 5.3: Configure GitHub Pages

1. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main**
   - **Folder**: Select **/ (root)**
2. Click **Save**

### Step 5.4: Wait for Deployment

- GitHub will build your site (takes 1-2 minutes)
- You'll see a green checkmark when it's live
- A message will appear: "Your site is live at https://YOUR-USERNAME.github.io/travel-recommendation/"

---

## Phase 6: Access Your Live Website

### Option A: Using travel_recommendation.html

```
https://YOUR-USERNAME.github.io/travel-recommendation/travel_recommendation.html
```

**Example**:
```
https://sidvuggi.github.io/travel-recommendation/travel_recommendation.html
```

### Option B: Create index.html (Optional)

If you want the site to load at the root URL without specifying the filename:

1. Create a file named `index.html` in your travelRecommendation folder
2. Add this content:
```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0; url=travel_recommendation.html">
</head>
<body>
  <p>Redirecting to Travel Recommendation...</p>
</body>
</html>
```
3. Commit and push:
```powershell
git add index.html
git commit -m "Add index.html redirect"
git push
```

Then access at:
```
https://YOUR-USERNAME.github.io/travel-recommendation/
```

---

## Phase 7: Verify Your Site

### Step 7.1: Test the Website

1. Open your browser
2. Navigate to: `https://YOUR-USERNAME.github.io/travel-recommendation/travel_recommendation.html`
3. Verify:
   - ✅ Page loads without errors
   - ✅ Navigation bar appears
   - ✅ Hero section displays
   - ✅ Search functionality works
   - ✅ Images load correctly
   - ✅ Social media icons visible

### Step 7.2: Test Search Functionality

1. Type "beach" in the search box
2. Click **Search**
3. Verify at least 2 beach destinations appear with images

### Step 7.3: Take Screenshot for Submission

1. Search for "beach"
2. Scroll to see at least 2 beach results
3. Take a screenshot
4. Save as `beach.png` or `beach.jpeg` in your travelRecommendation folder

---

## Phase 8: Submission Checklist

Before submitting, verify:

- ✅ GitHub repository is **PUBLIC**
- ✅ All files pushed to `main` branch
- ✅ GitHub Pages enabled and site is **LIVE**
- ✅ Website accessible at: `https://YOUR-USERNAME.github.io/travel-recommendation/travel_recommendation.html`
- ✅ Search works and displays results
- ✅ At least 2 beaches visible in search results
- ✅ Screenshot saved as `beach.png` or `beach.jpeg`

---

## Phase 9: Prepare Submission Materials

### Required for Submission:

1. **GitHub Repository URL**:
   ```
   https://github.com/YOUR-USERNAME/travel-recommendation
   ```

2. **GitHub Pages Live URL**:
   ```
   https://YOUR-USERNAME.github.io/travel-recommendation/travel_recommendation.html
   ```

3. **Screenshot** (beach.png or beach.jpeg):
   - Shows at least 2 beach destinations
   - Includes images and descriptions

4. **Code Snippets** (from your repository):
   - Key sections of HTML, CSS, JavaScript
   - JSON data structure

---

## Troubleshooting

### Issue: "fatal: not a git repository"
**Solution**: Make sure you're in the correct directory:
```powershell
cd "C:\Users\sidvuggi\Desktop\ME_OBSERV\travelRecommendation"
git init
```

### Issue: "Permission denied (publickey)"
**Solution**: Set up SSH key or use HTTPS with GitHub token:
```powershell
git config --global credential.helper wincred
```

### Issue: GitHub Pages not showing
**Solution**:
1. Verify repository is PUBLIC
2. Check Settings → Pages → Source is set to "main" branch
3. Wait 2-3 minutes for deployment
4. Clear browser cache (Ctrl+Shift+Delete)

### Issue: Images not loading on GitHub Pages
**Solution**: Ensure image URLs in JSON are absolute URLs (https://...), not relative paths

### Issue: Fetch API not working
**Solution**: GitHub Pages serves files correctly. Make sure `travel_recommendation_api.json` is in the same folder as HTML file.

---

## Future Updates

After initial setup, to push new changes:

```powershell
cd "C:\Users\sidvuggi\Desktop\ME_OBSERV\travelRecommendation"
git add .
git commit -m "Your commit message"
git push
```

GitHub Pages will automatically rebuild within 1-2 minutes.

---

## Additional Resources

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Pages Guide**: https://pages.github.com/
- **GitHub Help**: https://docs.github.com/en/pages

---

**Good luck with your submission! 🚀**
