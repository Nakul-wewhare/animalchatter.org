# Animal Chatter

Academic website for Nakul Wewhare, built with Quarto and deployed through GitHub Pages.

## What is in this repo

- A homepage with research overview
- Research project pages
- A publications page
- A small blog
- A CV page with downloadable PDF
- A GitHub Actions workflow for deployment

## Local path

`/Users/nw1238/Library/CloudStorage/OneDrive-PrincetonUniversity/Documents/GitHub/animalchatter.org`

## First-time setup

1. Create a new GitHub repository named `animalchatter.org` under the `Nakul-wewhare` account.
2. In the repo settings on GitHub, set **Pages** to use **GitHub Actions** as the source.
3. Verify `animalchatter.org` in GitHub before attaching it as a Pages custom domain.
4. Point the domain DNS to GitHub Pages:
   - Add `A` records for `animalchatter.org` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`
   - Add a `CNAME` record for `www` pointing to `Nakul-wewhare.github.io`
5. Push this repo to GitHub.

## Push commands

```bash
cd "/Users/nw1238/Library/CloudStorage/OneDrive-PrincetonUniversity/Documents/GitHub/animalchatter.org"
git add .
git commit -m "Initial academic website scaffold"
git remote add origin git@github.com:Nakul-wewhare/animalchatter.org.git
git push -u origin main
```

If you prefer HTTPS instead of SSH for GitHub:

```bash
git remote add origin https://github.com/Nakul-wewhare/animalchatter.org.git
```

## Local preview

Quarto is not installed on this machine yet, so the site will build on GitHub after push. If you want local previews later, install Quarto and run:

```bash
quarto preview
```

## Easy next edits

- Replace or expand the project pages in `projects/`
- Add blog posts inside `blog/posts/`
- Update `publications/index.qmd` when new papers appear
- Replace the PDF in `cv/` when your CV changes
