ANIMAL CHATTER WRITING TEMPLATES

These files are starting points, not pages on the live website. Their
`.qmd.template` extension prevents Quarto from publishing unfinished copies.

For a new Blog post
-------------------
1. Start with blog-post.qmd.template, or choose a more specific template.
2. Copy it into `blog/posts/YYYY-MM-DD-short-title/index.qmd`.
3. Remove `.template` from the copied filename.
4. Replace every instruction in square brackets.
5. Choose one primary category exactly as written: Field Notes, Project
   Updates, Reading Syntheses, or Methods & Tools.
6. Keep `draft: true` while writing; change it to `draft: false` when ready.

Posts stay inside `blog/posts` so their existing web addresses remain stable.
They appear automatically on the Blog page. The old `/blog/` page sends readers
to the new Blog without changing individual post addresses.

For a new tool
--------------
1. Copy `tool-page.qmd.template` into
   `methods/tools/short-tool-name/index.qmd`.
2. Remove `.template` from the copied filename.
3. Add a real licence before describing the tool as open source or reusable.
4. Test every installation command and example before publishing.

For media
---------
Copy the appropriate block from `media-blocks.qmd.template` into a page. Use
web-sized copies of photographs and videos, include alt text and captions, and
remove private metadata such as exact GPS coordinates before publishing.
