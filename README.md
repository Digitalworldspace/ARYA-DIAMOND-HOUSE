# Arya Diamond House — Lab-Grown Diamond & Jewelry Website

A single, self-contained website: no build step, no dependencies to install.
Open `index.html` in a browser and it works.

**Right now the site is wired up to real, free stock video and photos from
Pexels** (hotlinked directly, no download needed) so it looks fully finished
out of the box. These are placeholders standing in for your own footage —
swap them out as soon as you have real photos/video of your own pieces (see
below). Pexels content is free to use commercially with no attribution
required, but it is *stock* — other sites can use the same clips, so treat it
as a placeholder, not your final brand imagery.

## Folder structure

```
facet-site/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/     ← your photos go here
│   └── video/      ← your videos go here
└── README.md
```

## 1. Connect your Google Sheet of certified diamonds

There are two "Certified Diamonds" buttons in `index.html` — one in the
header (always visible), one in a banner in "What actually makes a diamond"
— both currently point to a placeholder:

```
https://docs.google.com/spreadsheets/d/PASTE-YOUR-SHEET-ID-HERE/edit#gid=0
```

Search for `PASTE-YOUR-SHEET-ID-HERE` in `index.html` (it appears twice) and
replace both with your real Google Sheet link. To get a shareable link:
open your sheet → **Share** → **General access** → set to "Anyone with the
link" → **Viewer**, then copy the link. Both buttons open it in a new tab
(`target="_blank"`) so people don't lose your site; delete `target="_blank"`
on either one if you'd rather it open in the same tab instead.

## 2. Add your own photos and videos

The site currently pulls video and photos live from Pexels (a free stock
site) via direct links in `index.html`, so nothing needs to be downloaded for
it to work today. When you're ready to switch to your own media, add files
to the folders below with these exact names, then in `index.html` change the
`src="https://videos.pexels.com/..."` and
`background-image:url('https://images.pexels.com/...')` values to point at
your local files instead (e.g. `assets/video/hero.mp4`,
`assets/images/rings.jpg`) — every spot that needs swapping has an HTML
comment right above it saying "Stock placeholder — replace with...".

**Videos** — `assets/video/`
- `hero.mp4` — the looping background video at the very top of the site. Best
  as a close, slow shot of a stone or a piece of jewelry catching light, no
  audio needed since it autoplays muted.
- `process.mp4` — a short video of the growing/cutting/setting process, shown
  in the "Grown, then cut by hand" section. This one has visible controls.

**Images** — `assets/images/`
- `hero-poster.jpg` — the still frame shown before `hero.mp4` loads.
- `process-poster.jpg` — still frame for the process video.
- `rings.jpg`, `necklaces.jpg`, `earrings.jpg`, `bracelets.jpg`, `bridal.jpg`
  — one representative photo per collection card.

Keep video files reasonably small (a few MB, 15–30 seconds, 1080p is plenty)
so the page loads fast — GitHub has a 100MB per-file limit and pages load
faster with lighter media. If your originals are large, compress them first
(e.g. with HandBrake or `ffmpeg`).

## 3. Personalize the placeholder text

A few spots in `index.html` are marked with HTML comments (`<!-- ... -->`)
where you should drop in your own details:
- The studio **address** and **hours** in the "Visit the studio" section.
- The **Google Maps embed** — go to Google Maps, find your location, click
  Share → Embed a map, and paste the `src` URL in over the placeholder one.
- Certification wording (GIA/IGI or whichever lab you use).

Phone and WhatsApp are already wired up:
- Call button → `+91 89801 50550`
- WhatsApp button → `+91 63529 25472`

## 4. Put it on GitHub

If you don't already have a repository:

1. Create a new repository on GitHub (e.g. `facet-site`), public.
2. On your computer, in this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/facet-site.git
   git push -u origin main
   ```
   (Replace `<your-username>` with your GitHub username.)

If you already have a repository, just copy these files into it, then
`git add .`, `git commit -m "Add website"`, `git push`.

## 5. Turn on GitHub Pages (free hosting)

1. In your repository on GitHub, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. GitHub will give you a live URL, usually:
   `https://<your-username>.github.io/facet-site/`
   It can take a minute or two to go live after the first push.

Every time you `git push` new changes (including new photos/videos), the
live site updates automatically within a minute or so.

## Notes

- The site is fully responsive (phone, tablet, desktop) and works with
  keyboard navigation.
- No frameworks or build tools — just HTML, CSS and a small bit of vanilla
  JavaScript for the scroll effect and mobile menu.
- Fonts (Fraunces + Inter) load from Google Fonts over the internet; the
  site needs an internet connection to show them at their best, but falls
  back to system fonts if that's ever unavailable.
