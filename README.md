# Dr. Sayantani Chakraborty — Website
## Quick Reference Guide

---

## Files in This Package

```
drsayantani-v4/
├── index.html              ← Website — do NOT edit content here
├── config.js               ← Edit THIS for all content changes
├── styles.css              ← Edit THIS for design changes
├── images/
│   └── photo.jpg           ← Put doctor photo here (exact name)
├── HOW-TO-ADD-PHOTO.md     ← Photo instructions
├── HOW-TO-DEPLOY.md        ← GitHub + Vercel step by step
└── README.md               ← This file
```

---

## Add Doctor Photo

1. Name your file exactly: `photo.jpg`
2. Put it in the `images/` folder
3. Done — shows automatically in Hero + About

📖 See `HOW-TO-ADD-PHOTO.md` for troubleshooting

---

## Deploy to Vercel

📖 See `HOW-TO-DEPLOY.md` for full step-by-step

Quick version:
1. Create GitHub repo named `drsayantani`
2. Upload all files including `images/` folder
3. Go to vercel.com → Import repo → Framework: Other → Deploy

---

## Change Any Content

Open `config.js` — everything is labelled:

| What | Where in config.js |
|---|---|
| Doctor name & degrees | `doctor { }` |
| Biography paragraphs | `bio [ ]` |
| Services cards | `services [ ]` |
| Patient reviews | `reviews [ ]` |
| Video testimonials | `videos [ ]` |
| Phone & WhatsApp | `contact { }` |
| Google Maps pin | `mapUrl` |
| OPD hours | `opdHours [ ]` |
| Clinic locations | `primaryClinic` + `otherClinics` |
| Booking form options | `concerns`, `timeSlots`, `bookingClinics` |
| AI chatbot topics | `aiTopics { }` |
| Brand colours | `colors { }` |
| SEO title & description | `seo { }` |

---

## Add a Real Video Testimonial

1. Open YouTube video → Share → Embed
2. Copy the `src="..."` URL e.g. `https://www.youtube.com/embed/VIDEO_ID`
3. Open `config.js` → find `videos`
4. Paste URL as `videoUrl` value

---

## Fix Google Maps Pin

1. Go to maps.google.com
2. Search: `ILS Hospitals Dum Dum Kolkata`
3. Click the result (red pin appears)
4. Click Share → Embed a map → copy `src="..."` URL
5. Paste in `config.js` → `mapUrl`

---

## Change Brand Colours

Open `config.js` → `colors { }` → update hex values
All colours update site-wide automatically.

---

## Reuse for Another Doctor

1. Open `config.js`
2. Update every section with the new doctor's details
3. Replace `images/photo.jpg` with new doctor's photo
4. Deploy as a new Vercel project
5. Zero changes needed in `index.html` or `styles.css`
