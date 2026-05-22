# GenieBlog ⚡

Personal blog for **Kamal Nadh Sunkara** — notes on cloud platforms, FinOps and
the build journey behind [CloudGenie](https://cloudgenie.io).

Built with [Astro](https://astro.build) · auto-deployed to GitHub Pages on every push.

**Live at:** [`https://sunkarakamal.github.io/GenieBlog/`](https://sunkarakamal.github.io/GenieBlog/)

---

## ✍️ How to write a new post

1. Create a markdown file inside [`src/content/posts/`](src/content/posts/):
   ```
   src/content/posts/my-new-post.md
   ```
2. Add front-matter at the top:
   ```yaml
   ---
   title: "Catchy title here"
   description: "One-line teaser shown on the homepage card."
   pubDate: 2026-06-01
   heroEmoji: "🚀"            # optional
   tags: ["finops", "aws"]    # optional
   draft: false               # set to true to hide while drafting
   ---
   ```
3. Write the post body in Markdown.
4. `git add` → `git commit` → `git push`.
5. GitHub Actions builds and deploys in ~60 seconds. ✅

---

## 🚀 One-time GitHub Pages setup

> Skip this section if Pages is already enabled.

1. Open this repo on GitHub → **Settings** (top of repo)
2. Left sidebar → **Pages**
3. Under **"Build and deployment"** → **Source** dropdown → pick **GitHub Actions**
   - ⚠️ NOT "Deploy from a branch" — that's the old way and won't work with our workflow.
4. Save (auto-saves on change).

That's all. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
runs on every push to `main` and deploys to `https://sunkarakamal.github.io/GenieBlog/`.

---

## 🛠️ Local dev

```bash
yarn install
yarn dev          # → http://localhost:4321/GenieBlog/
yarn build        # production build into ./dist
yarn preview      # preview the production build locally
```

---

## 🌐 (Optional) Custom domain

1. Create `public/CNAME` with one line — your domain, e.g. `blog.cloudgenie.io`.
2. At your DNS provider, add a CNAME record pointing the subdomain to `sunkarakamal.github.io`.
3. Update `astro.config.mjs`:
   ```js
   site: 'https://blog.cloudgenie.io',
   base: '/',
   ```
4. Push. GitHub Pages auto-provisions an SSL cert within a few minutes.

---

## 📁 Project layout

```
.
├── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages on every push
├── astro.config.mjs               # site URL + base path
├── package.json
├── public/                        # static assets (favicon, CNAME, og images…)
└── src/
    ├── components/{Header,Footer}.astro
    ├── layouts/BaseLayout.astro
    ├── content/
    │   ├── config.ts              # post schema (Zod)
    │   └── posts/
    │       └── why-i-built-cloudgenie.md
    └── pages/
        ├── index.astro            # homepage (hero + post list)
        ├── about.astro            # bio
        ├── posts/
        │   ├── index.astro        # post archive
        │   └── [...slug].astro    # individual posts
        └── rss.xml.js             # RSS feed
```

---

## 📡 RSS

Auto-generated at `/GenieBlog/rss.xml` from all non-draft posts.

---

## 🔗 Contact

- LinkedIn → [kamal-nadh](https://www.linkedin.com/in/kamal-nadh-b1156b75/)
- GitHub → [sunkarakamal](https://github.com/sunkarakamal)
- Email → kamsun.uk@gmail.com
