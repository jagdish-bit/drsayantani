# 📸 HOW TO ADD THE DOCTOR PHOTO
## (Read this first — takes 2 minutes)

---

## THE ONLY RULE

Your photo file MUST be named exactly:

```
photo.jpg
```

All lowercase. `.jpg` extension. Nothing else.

---

## STEP 1 — Prepare the Photo

- Crop it **square** (equal width and height)
- Professional headshot, facing front or slightly left
- Plain or blurred background preferred
- Save as `.jpg` (not `.JPG`, not `.png`, not `.jpeg`)
- Keep file size **under 200KB** for fast loading

---

## STEP 2 — Put Photo in the Right Folder

Place `photo.jpg` here:

```
drsayantani-v4/
├── index.html
├── config.js
├── styles.css
├── images/
│   └── photo.jpg    ← PUT IT HERE
└── README.md
```

---

## STEP 3 — That's It

The website automatically shows the photo in:
- ✅ Hero section (right side card)
- ✅ About section (portrait card)

**No changes needed in config.js or anywhere else.**
The path `images/photo.jpg` is already set.

---

## If Photo Still Not Showing After Upload to GitHub/Vercel

**Check 1 — File name is exact**
Open your `images/` folder and confirm the file is named:
`photo.jpg` — not `Photo.jpg`, not `photo.JPG`, not `photo.jpeg`

**Check 2 — Hard refresh browser**
Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

**Check 3 — Check GitHub uploaded correctly**
Go to your GitHub repo → click `images/` folder →
you should see `photo.jpg` listed there

**Check 4 — Wait for Vercel to redeploy**
After uploading to GitHub, Vercel takes ~30 seconds to redeploy.
Wait and then refresh.

---

## Fallback

If photo is missing or fails to load, the initials **"SC"** show
automatically in the avatar circle. Nothing breaks.

---

## Want to Use a Different File Name?

Open `config.js` and change line 1 of the photos section:

```js
doctorPhoto: "images/photo.jpg",   // change to your actual filename
```

Examples:
```js
doctorPhoto: "images/dr-sayantani.jpg",
doctorPhoto: "images/portrait.jpg",
doctorPhoto: "images/doctor-photo.jpg",
```

Just make sure the filename in config matches exactly
what you named the file in the `images/` folder.
