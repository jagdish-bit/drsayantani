# 🚀 HOW TO DEPLOY — GitHub + Vercel
## Step by step. No experience needed.

---

## PART 1 — GitHub (Store your files online)

### Step 1 — Create a GitHub Account
1. Go to **https://github.com**
2. Click **Sign up**
3. Enter email, password, username
4. Verify your email

---

### Step 2 — Create a New Repository
1. After login, click the **"+"** icon (top right)
2. Click **"New repository"**
3. Fill in:
   - Repository name: `drsayantani`
   - Visibility: **Public**
   - ✅ Check **"Add a README file"** ← Important
4. Click **"Create repository"**

---

### Step 3 — Upload Your Files

You now see the repository page with a README file.

**Upload files:**
1. Click **"Add file"** button (near top right of file list)
2. Click **"Upload files"**
3. A drag-and-drop page opens
4. Open your `drsayantani-v4/` folder on your computer
5. Select ALL files and the `images/` folder together:
   - `index.html`
   - `config.js`
   - `styles.css`
   - `HOW-TO-ADD-PHOTO.md`
   - `HOW-TO-DEPLOY.md`
   - `README.md`
   - `images/` folder (with `photo.jpg` inside)
6. Drag them all onto the upload zone
7. Scroll down — write commit message: `Initial upload`
8. Click **"Commit changes"**

Wait 10-20 seconds. You should now see all files listed.

---

### Step 4 — Verify Files Are There

Your repo should look like this:
```
drsayantani/
├── images/
│   └── photo.jpg
├── index.html
├── config.js
├── styles.css
└── README.md
```

If `images/` folder is missing — go back and upload it separately:
1. Click **"Add file"** → **"Upload files"**
2. Open your `images/` folder locally
3. Drag `photo.jpg` onto the upload zone
4. The file will upload but GitHub needs you to specify the path.
   After selecting the file, GitHub shows the filename —
   click it and add `images/` before the filename
5. Commit changes

---

## PART 2 — Vercel (Make it live on the internet)

### Step 5 — Create Vercel Account
1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Click **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. You're in ✅

---

### Step 6 — Import Your Repository
1. On the Vercel dashboard, click **"Add New..."**
2. Click **"Project"**
3. You'll see a list of your GitHub repositories
4. Find **`drsayantani`** and click **"Import"**

---

### Step 7 — Configure (Important)

On the configuration screen:

| Setting | Value |
|---|---|
| Project Name | `drsayantani` |
| Framework Preset | **Other** |
| Root Directory | `.` (leave as default) |
| Build Command | **leave blank** |
| Output Directory | **leave blank** |

Click **"Deploy"**

---

### Step 8 — Wait 30 Seconds

Vercel deploys your site. You'll see a progress animation then:

```
🎉 Congratulations!
```

---

### Step 9 — Get Your Live URL

1. Click **"Continue to Dashboard"**
2. Your URL is shown — something like:
   ```
   https://drsayantani.vercel.app
   ```
3. Click **"Visit"** to confirm it's working
4. Copy the URL and share it with Dr. Sayantani

---

## PART 3 — Updating the Site Later

### To change any text/content:
1. Open `config.js` on your computer and make changes
2. Go to your GitHub repo
3. Click `config.js` in the file list
4. Click the **pencil (✏️) icon** to edit
5. Make your change → click **"Commit changes"**
6. Vercel auto-redeploys in ~30 seconds ✅

### To update the doctor photo:
1. Go to your GitHub repo
2. Click the `images/` folder
3. Click **"Add file"** → **"Upload files"**
4. Upload the new `photo.jpg`
5. If asked to overwrite — confirm
6. Commit → Vercel redeploys automatically ✅

### To update any other file:
1. Click the file in GitHub
2. Click the pencil ✏️ icon
3. Edit → Commit changes ✅

---

## dcosmedics Is Safe — Zero Overlap

Your two projects on Vercel are completely separate:

```
Vercel Dashboard
├── dcosmedics    → https://dcosmedics.vercel.app    ✅ untouched
└── drsayantani   → https://drsayantani.vercel.app   ✅ new
```

Changing one never affects the other.
They have different repos, different projects, different URLs.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Photo not showing | See HOW-TO-ADD-PHOTO.md |
| Site shows blank page | Check index.html is in root, not inside a subfolder |
| Old content showing | Press Ctrl+Shift+R to hard refresh |
| Vercel build failed | Make sure Framework is set to "Other" and build command is blank |
| Can't upload images/ folder | Upload files one by one, add `images/` prefix to filename path |
