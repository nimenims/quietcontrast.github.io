# Quiet Contrast — GitHub Pages Site

Graphic Design Studio · Mission Viejo, CA  
**justin@quietcontrast.com**

---

## 🚀 How to deploy to GitHub Pages

### First time setup

1. **Create a new GitHub repository**  
   Go to [github.com/new](https://github.com/new)  
   Name it `quietcontrast.github.io` (or any name — e.g. `website`)

2. **Upload these files**  
   Drag and drop all files from this zip into the repository root, or use:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**  
   - Go to your repo → **Settings** → **Pages**  
   - Under *Source*, select **Deploy from a branch**  
   - Branch: `main` · Folder: `/ (root)`  
   - Click **Save**

4. **Your site will be live at:**  
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`  
   (or `https://YOUR_USERNAME.github.io` if the repo is named `YOUR_USERNAME.github.io`)

---

## 📁 File structure

```
quiet-contrast/
├── index.html          ← The entire site (one page)
├── assets/
│   ├── css/
│   │   └── main.css    ← All styles
│   └── js/
│       └── main.js     ← Scroll reveal, nav, mobile menu
├── _config.yml         ← GitHub Pages / Jekyll config
├── .nojekyll           ← Skips Jekyll processing (required)
└── README.md           ← This file
```

---

## ✏️ Customising

- **Content** — Edit `index.html` directly
- **Styles** — Edit `assets/css/main.css`
- **Behaviour** — Edit `assets/js/main.js`
- **Contact form** — The form links to `mailto:justin@quietcontrast.com`.  
  For a real working form on GitHub Pages (static), sign up for a free [Formspree](https://formspree.io) account and replace the form `action` in `index.html`.

---

## 🔗 Custom domain (optional)

1. Add a `CNAME` file to the repo root containing your domain:
   ```
   quietcontrast.com
   ```
2. Point your domain's DNS to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

---

*Built with the Vodafone design system. © 2026 Quiet Contrast.*
