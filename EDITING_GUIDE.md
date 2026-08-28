# Editing Animal Chatter

The site is written in Quarto Markdown. Most pages are ordinary text files with
the extension `.qmd`; the layout and styling are supplied separately. You do
not need to edit HTML to update the scientific content.

## The safest workflow

1. Edit the relevant `.qmd` source file.
2. Preview the complete site locally.
3. Read the changed page on both a desktop-sized and phone-sized window.
4. Commit and push the source files only after the preview is correct.
5. GitHub Actions rebuilds and publishes the site automatically after a push to
   `main`.

Never edit anything inside `_site/`. That directory is generated from the
source and is replaced during each full render.

If you prefer not to use a code editor, edit the companion Word document
`Animal-Chatter-Website-Copy.docx` with Track Changes or comments and give it back to
Codex. The Word file is an editorial copy, not the file that publishes the
site; approved edits still need to be transferred into the corresponding
`.qmd` pages.

## Where each page lives

| Public page | Editable source |
|---|---|
| Home | `index.qmd` |
| About | `about/index.qmd` |
| Research overview | `research/index.qmd` |
| Vocal matching | `research/themes/vocal-matching/index.qmd` |
| Call combinations | `research/themes/call-combinations/index.qmd` |
| Acoustic spaces | `research/themes/acoustic-spaces/index.qmd` |
| Linguistic laws | `research/themes/linguistic-laws/index.qmd` |
| Mapping calls to behaviour | `research/themes/mapping-bat-social-calls/index.qmd` |
| Vocal identity | `research/themes/identity-cue-or-signal/index.qmd` |
| Contextual embeddings | `projects/contextual-embeddings-vocal-sequences.qmd` |
| Other research projects | one file per project inside `projects/` |
| Publications | `publications/index.qmd` |
| Blog | `notes/index.qmd` |
| Individual blog posts | `blog/posts/YYYY-MM-DD-title/index.qmd` |
| Old `/blog/` forwarding page | `blog/index.qmd` |
| Methods overview | `methods/index.qmd` |
| Resources | `methods/resources/index.qmd` |
| Open Tools | `methods/tools/index.qmd` |
| Contact | `contact.qmd` |
| CV landing page | `cv/index.qmd` |
| CV content | `cv/source/NewCVprinceton.tex` and `cv/Nakul_Wewhare_CV.pdf` |

The top navigation is configured in `_quarto.yml`. Site-wide visual design is
in `styles.scss`.

## Editing an existing page

Every `.qmd` page begins with a metadata block between two lines containing
`---`:

```yaml
---
title: "Page title"
description: "One-sentence description for search engines and link previews."
date: 2026-08-28
categories: [bioacoustics, vampire bats]
toc: true
---
```

Edit the words after each field, but retain the colons, brackets, and closing
`---`. Below that block, the scientific prose uses simple Markdown:

```markdown
## Section heading

Ordinary paragraph text. Use **bold** sparingly and *italics* for journal or
species names when appropriate.

- First item
- Second item

[Descriptive link text](https://example.org)
```

Lines containing `:::` open or close styled page components. Raw HTML blocks
control videos and complex figures. Unless you intend to change the layout,
edit the prose inside those blocks and leave the markers, classes, file paths,
and closing tags intact.

## Previewing a change

From the repository root, run:

```bash
quarto preview
```

Quarto prints a local address such as `http://localhost:4200/`. Keep the command
running while you edit; the browser refreshes after saved changes. Before
publication, stop the preview and run a clean render:

```bash
quarto render
```

Useful final checks:

- the page has one clear title and a logical heading order;
- links open the intended source;
- figures have specific alt text and visible captions;
- preliminary analyses are labelled as preliminary;
- claims match the current manuscript or analysis;
- collaborators, data owners, and photographers have approved public release;
- the page remains readable at approximately 390 pixels wide.

## Creating a new blog post

The Blog automatically lists every published `index.qmd` inside `blog/posts/`.
The quickest workflow is:

### 1. Make a dated folder and copy the simple template

```bash
mkdir -p blog/posts/2026-09-15-vocal-matching-update
cp templates/blog-post.qmd.template blog/posts/2026-09-15-vocal-matching-update/index.qmd
```

Use lowercase words separated by hyphens in the folder name. The folder name
becomes the permanent web address, so do not rename it after publication.

### 2. Replace the capitalized instructions

Open the new `index.qmd`. Set its title, one-sentence description, date, and
categories, then replace the placeholder paragraphs. Keep `draft: true` while
writing and change it to `draft: false` when the post is ready to appear.

Choose **one primary category**, written exactly as shown:

- `Field Notes`
- `Project Updates`
- `Reading Syntheses`
- `Methods & Tools`

After it, add one to three subject categories such as `Vampire bats`,
`Bioacoustics`, `Vocal matching`, or `Sequence analysis`. These categories
become clickable filters on the Blog page.

More structured starting points remain available in
`templates/field-note.qmd.template`, `templates/project-update.qmd.template`,
`templates/reading-synthesis.qmd.template`, and
`templates/methods-note.qmd.template`.

### 3. Add media if useful

For a post-specific image, make an `images/` folder beside `index.qmd` and use a
relative path. Publish web-sized JPEG or WebP derivatives rather than original
RAW or HEIC files. Remove EXIF/GPS metadata, confirm permissions, and generalize
sensitive field locations.

```markdown
![A sound camera directed toward a recording enclosure.](images/sound-camera.jpg)

*The sound-camera configuration used to localize callers. Photo: Name.*
```

### 4. Keep the scientific status clear

A project update will usually need:

1. the research question;
2. the dataset and study design;
3. the current analysis or visualization;
4. the result, with uncertainty and status;
5. limitations and alternative explanations;
6. the next discriminating test;
7. links to the associated project, data, code, preprint, or publication.

A reading synthesis should be organized around a question rather than one
paper at a time. Distinguish the literature's conclusions from your own
interpretation, cite primary sources, and state when the synthesis was last
updated.

### 5. Preview and publish

Run a full preview, check the new page and the Blog listing, then commit and
push the source. A practical commit message is:

```bash
git add blog/posts/2026-09-15-vocal-matching-update
git commit -m "Add vocal matching project update"
git push origin main
```

If you are working with Codex, the simplest instruction is: “Create a new Blog
post from my draft, show me the local preview, and do not publish until I
approve it.” After reviewing, explicitly ask Codex to publish.

## Updating publications and projects

When a manuscript changes status, update these together:

1. `publications/index.qmd` for the citation and status;
2. the corresponding file in `projects/` for the current scientific account;
3. any homepage or research-theme text that summarizes the result;
4. `cv/source/NewCVprinceton.tex`, followed by a rebuilt PDF if the CV changed.

Use exact labels such as `analysis in progress`, `manuscript in preparation`,
`submitted manuscript`, `preprint`, and `peer-reviewed article`. Avoid treating
an exploratory embedding, cluster, association, or model coefficient as a
demonstrated communicative function.

## Asking Codex for routine updates

Specific instructions produce safer changes. For example:

- “Change only the About page. Preserve all links and media.”
- “Add this result to the vocal-matching project, label it preliminary, and
  show me the wording before publishing.”
- “Create a Reading Synthesis Blog post from these papers and verify every DOI.”
- “Optimize these five approved photographs, strip their metadata, and build a
  gallery with the captions in this spreadsheet.”
- “Preview the site on desktop and mobile, but do not commit or push.”

Always distinguish **edit**, **preview**, and **publish**. A preview is local;
publishing changes the public website.
