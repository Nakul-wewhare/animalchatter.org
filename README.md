# Animal Chatter

Academic website for Nakul Wewhare, built with Quarto and deployed through GitHub Pages.

For page-by-page editing instructions and the workflow for new Blog posts, see
[`EDITING_GUIDE.md`](EDITING_GUIDE.md).

## What is in this repo

- A photo- and data-ready homepage with a research overview
- Research project pages
- A publications page
- A categorized Blog for field stories, project updates, reading syntheses, and methods writing
- Open Tools and curated Resources sections
- Reusable writing and media templates in `templates/`
- A CV page with downloadable PDF
- A GitHub Actions workflow for deployment

## Local preview

The deployment workflow is pinned to Quarto 1.10.18. With Quarto installed,
preview the site from the repository root with:

```bash
quarto preview
```

For a development-only accessibility scan in the browser console:

```bash
quarto preview --profile accessibility
```

## Easy next edits

- Replace or expand the project pages in `projects/`
- Create a Blog post from one of the starting files in `templates/`
- Keep published posts inside `blog/posts/` so existing URLs remain stable
- Add tools under `methods/tools/` and recommendations under `methods/resources/`
- Update `publications/index.qmd` when new papers appear
- Replace the PDF in `cv/` when your CV changes

## Add a photo-rich field note

1. Make a small, curated Google Photos or Apple Photos album containing only
   images you are comfortable publishing.
2. Export the album outside this repository. Keep the full-resolution originals
   there; do not add them to Git.
3. Make web-sized, sRGB copies with GPS and device metadata removed, then put
   those copies in `assets/images/SHORT-NAME/`.
4. Copy `templates/field-note.qmd.template` to
   `blog/posts/YYYY-MM-DD-short-title/index.qmd` and replace the prompts.
5. Add objective alt text, a useful scientific caption, a broad location, and a
   photographer credit for every published image.
6. Run a full local preview before publishing, especially at a phone-sized
   browser width.

The Panama 2026 post is the first complete example of this workflow. Exact
capture sites, roosts, and other sensitive locations should remain private.

## Update publications and projects

When a paper changes status, update all three places together:

1. `publications/index.qmd` for the complete citation and DOI.
2. The corresponding file in `projects/` for the question, methods, result, and
   current status.
3. `cv/source/NewCVprinceton.tex`, then rebuild `cv/Nakul_Wewhare_CV.pdf`.

Use labels such as **preprint**, **peer-reviewed article**, and **work in
progress** precisely. Link to Google Scholar for live citation counts instead of
copying numbers that will quickly become stale.
