# نسج · NASJ — Design System

> An Arabic-first intellectual environment operating **between understanding and action**. Nasj weaves relationships between signals, evidence, people, institutions and interventions to create *load-bearing understanding*.

The public experience should feel closer to a **reading room, exhibition space, cartographic gallery and research observatory** than a startup website or consulting firm. This system encodes that feeling as tokens, components and rules.

---

## Sources

- **GitHub:** [`abdelmohymenelbadry-art/nasj`](https://github.com/abdelmohymenelbadry-art/nasj) — *Official website for Nasj.* At the time of authoring this repository contained only a placeholder README (no code, no assets, no design files). **Everything in this system was therefore derived from the written brand brief**, not from source code. When the site codebase lands, re-explore the repo and reconcile these tokens/components against the real implementation.
- **Fonts:** Amiri, IBM Plex Sans Arabic, Cormorant Garamond — all loaded from **Google Fonts CDN** (`tokens/fonts.css`). ⚠️ *Substitution note:* these are the correct families but are served from the CDN rather than self-hosted binaries; if you need offline/vendored TTFs, ask and we'll swap the `@import` for `@font-face`.

---

## The idea in one breath

Arabic is the primary experience. English exists as a parallel orientation layer. One visual idea per screen. One emotional state per section. One cognitive task per section. The **loom grid is structural, not visible** — the warp and weft hold the page together without being drawn. Motion is slow, material, quiet: opacity and translation only.

---

## CONTENT FUNDAMENTALS

**Voice.** Contemplative, precise, unhurried. Nasj speaks the way a curator writes wall text — declarative, load-bearing sentences, no hype. It never sells; it *situates*.

**Language pairing.** Arabic is the primary voice and carries all substantive meaning; it is set in Amiri (display) and IBM Plex Sans Arabic (body), right-to-left. Substantive English does **not** appear in-body on Arabic pages — it lives on its own English page (`/en`). See LOCALIZATION ARCHITECTURE. The only English permitted inside Arabic content is the fixed exception set: citations, metadata, source references, institutional names, external titles — set small, in Cormorant Garamond *italic*, stone-coloured (`--annotation`).

**Person & address.** Institutional and collective ("نسج تنسج…" / *Nasj weaves…*), not chatty first- or second-person. Avoid "you should" imperatives; prefer statements of method and relation.

**Casing (Latin).** English annotations are lowercase, italic, occasionally letter-spaced for labels (e.g. `n a s j`). Reserve capitals for proper nouns only. No ALL-CAPS shouting.

**Register examples.**

- Headline (Arabic display): *النسيج يحمل المعنى* — "the weave carries meaning."
- Body (Arabic): *نسج بيئة فكرية تعمل بين الفهم والفعل، تنسج العلاقات… لبناء فهمٍ يحمل الوزن.*
- Permitted English (citation / metadata only): *Ostrom, E. (1990). Governing the Commons. Cambridge University Press.*
- Permitted English (institutional name / external title): *Max Planck Institute · doi:10.1017/CBO9780511807763*

**Emoji / exclamation.** None. No emoji, no exclamation marks, no marketing punctuation. Quiet.

**Rhythm.** Short paragraphs, wide leading (1.7), generous whitespace. One idea per block. Let silence do work.

---

## LOCALIZATION ARCHITECTURE

NASJ is **Arabic-first**. Arabic is the primary public experience and lives at the root domain. English exists as a *secondary interpretive layer* — for international collaborators, institutions and readers seeking orientation rather than full participation.

**Localization happens at the page level, not the component level.**

**Rules**

- Arabic content lives in dedicated Arabic pages.
- English content lives in dedicated English pages.
- Do not render bilingual layouts.
- Do not place English translations beneath Arabic content.
- Do not mix Arabic and English body copy on the same screen.
- Language switching occurs at the page level, not the content-block level.
- Arabic pages are fully **RTL**.
- English pages are fully **LTR**.

**Exceptions** (may appear on either page): brand lockups · citations · metadata · external references.

**Recommended structure**

- `/` — Arabic public experience (canonical). 100% Arabic, RTL, no in-body English. See the Design System page / Arabic homepage kit.
- `/en` — English orientation layer (`ui_kits/english-experience/index.html`). 100% English, LTR, abbreviated and standalone — not a translation.

> One intellectual identity. Two public experiences. Arabic is canonical; English is an independent orientation layer. The relationship is not translation — it is interpretation.

**English annotations inside Arabic pages are restricted to:**

- citations
- metadata
- source references
- institutional names
- external titles

Nothing else. There is no "margin gloss" or "key-term translation" pattern — those reopen the bilingual layout this architecture forbids. An Arabic headline is never followed by an English line beneath it. All substantive English belongs on `/en`.

> **v1 LOCKED — language & typography.** These rules are frozen for v1:
>
> 1. Two independent public experiences: `/` Arabic-native (RTL, Amiri + IBM Plex Sans Arabic), `/en` English-native (LTR, Cormorant Garamond display + IBM Plex Sans body). No bilingual pages; no subtitle beneath either language.
> 2. **Annotation** is restricted to citations, DOI references, institutional names, figure numbers, and source metadata — never translation, gloss, subtitle, explanatory caption, or poetic parallel text.
> 3. The **only** permitted bilingual pairing in the entire system is the brand lockup: نسج / NASJ. The latin `NASJ` is a *signature lockup* — not a subtitle or transliteration. Two official forms: **primary (stacked)** — mark over signature, 0.32em tracking, lifted 24–28px, ~0.65 opacity, optically centered; and **inline** (headers/footers) — mark leads, signature trails on the baseline. See WORDMARK LOCKUPS.
> 4. Citation/metadata text renders in `--annotation-ink` (`#7B736B`, higher contrast than the `#9C938A` swatch); the swatch value stays authoritative. Annotation stone is never used for English body copy — `/en` body is `--text-en-body` `#6B6058` (**WCAG AA, ≥4.5:1 on paper**), 18px min, line-height 1.8.
> 5. Motion is opacity + translation only; DS motion examples carry motion metadata (duration / easing / transform), never poetic copy.
> 6. **Numerals: Western/ASCII `0 1 2 3 4 5 6 7 8 9` are canonical everywhere** in the public product — both experiences, all UI labels, statistics, references, dates, tables, metadata, citations, identifiers, navigation, forms, figures, pagination, footnotes, glossary, version numbers. Arabic-Indic numerals (`٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩`) are **not** used in the public product — reserved only for historical reproductions, archival/scanned source material, and direct quotations where the original form matters. Mixing numeral systems within one interface is forbidden. Canonical: `2026` · `Version 3` · `12 institutions` · `Issue 14` · `Section 2`.

---

## NUMERALS

**Canonical numeral system: `0 1 2 3 4 5 6 7 8 9` (Western/ASCII).** Mandatory across the entire public product — Arabic experience, English experience, UI labels, statistics, references, dates, tables, metadata, citations, identifiers, navigation, forms, figures, pagination, footnotes, glossary entries, and version numbers.

Arabic-Indic numerals `٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩` are **not used anywhere in the public product**. Reserved only for: historical reproductions, archival source material, scanned documents, and direct quotations where preserving the original form matters.

Mixing numeral systems inside the same interface is **forbidden**.

**Numeric Style Policy (grouping).** Thousands separator: comma. Decimal separator: period. Grouping applies at every three digits, no threshold exception — `5,500`, `34,000`, `1,200,000`. This groups genuine scalar quantities only (a card's headline number, a comparison value); dates, versions, and identifiers are digit-normalized but never grouped (`2025-07-03` stays `2025-07-03`, not `2,025-07-03`; `v2.0` stays `v2.0`).

**Enforcement is code, not convention.** Every numeric-bearing template inlines two small pure functions in its own logic class — `normalizeDigits(input)` (Eastern Arabic-Indic digits/separators → Western only, safe for any text: dates, sources, claims, ids) and `formatNumber(value)` (additionally applies the grouping policy, and only groups when the input is a single clean scalar token, so it safely refuses to mangle multi-part strings like dates or version numbers). They are duplicated per-template rather than loaded from a shared global on purpose: this design-system project's compiler auto-bundles every project `.js` file into `_ds_bundle.js`, which loads asynchronously and would otherwise race a shared `<script src>` helper and intermittently clobber it with a stale copy. Keep both functions' source identical across templates when editing.

Canonical examples: `2026` · `Version 3` · `12 institutions` · `5 interventions` · `Issue 14` · `Section 2`.

> Enforcement is by authoring, not CSS: always type ASCII digits in source (they render Western in every family, including IBM Plex Sans Arabic under RTL). Do not rely on locale/`font-feature-settings` to convert digits.

NUMERALS

Canonical numeral system:

0 1 2 3 4 5 6 7 8 9

Applied universally across:

\- Arabic experience

\- English experience

\- UI labels

\- metadata

\- references

\- statistics

\- dates

\- identifiers

\- versions

\- citations

\- pagination

\- forms

\- tables

Arabic-Indic numerals:

٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩

are not used in the public product.

Reserved only for:

\- historical reproductions

\- archival source material

\- scanned documents

\- direct quotations where preserving the original form matters

Mixing numeral systems within the same interface is forbidden.

---

## VISUAL FOUNDATIONS

> **v3 LOCKED — ink + thread-EVENT.** The palette is **98% ink on paper + one madder weft** `#B23A1A`. There is **no standing accent colour**. The old earthen `#8D5C4B` is retired; `--thread` and every accent alias now resolve to **ink**. The madder red is an **event, not a property** — `--thread-event` is painted *only* at the moment of connection in the loom (one weft thread + its knot), and nowhere else: words, numbers, dividers, active states, links, hover, focus, and email are all ink. The typographic accent in a hero is a woven underline (`border-bottom` in ink), never colour. A page may set `--thread-event: var(--ink)` on its root to defer to pure mono. **No backdrop warp on content pages** — the loom appears only in intentional diagrammatic marks, never as a page-wide background wash.

**Palette.** Three authoritative tokens carry the whole system: warm paper `#F5F1E8` ground, near-black ink `#1E1B18` text, and a muted stone `#9C938A` for English annotation — plus the single reserved event weft `--thread-event` `#B23A1A`. Everything else is derived in `oklch` from paper/ink — paper surfaces (raised/sunken/edge), ink steps (soft/faint), and ink-based rule/wash tokens. Depth comes from value, not from more colours.

**Backgrounds.** Always warm paper — never pure white, never a gradient wash, never a photographic hero, **never a page-wide loom/warp overlay**. An optional paper grain (`.nasj-grain`, ≤0.05) is the only ambient texture. The loom motif appears solely inside intentional diagrammatic marks (the hero weave, a section figure), never as decoration behind content. No full-bleed imagery by default; when imagery is used it is warm, matte, archival — think exhibition documentation, not stock photography.

**Typography.** See CONTENT above for the language split. Scale runs 13→84px; body at 17px/1.7. Display is Amiri; nothing is bolder than it needs to be. Latin annotation is *always italic*.

**Spacing & grid.** Scale `8 · 16 · 24 · 40 · 64 · 96 · 160`. Twelve columns on desktop, four on mobile, 24px gutters — the warp threads. The grid is felt, not seen.

**Corners & edges.** Near-zero radius (`0–3px`). Paper is **cut, not rounded**. Cards read as leaves of paper: a single 1px hairline (`--paper-edge`), optionally a 2px thread rule along the top edge, and **no drop shadow**. Elevation is expressed by a 2px upward *translation* on hover, never by shadow bloom or blur.

**Borders & rules.** Hairlines are 1px in `--paper-edge`; the "thread" rule is 1.5px in the accent and often fades at both ends like a loose weft (see `ThreadDivider`). Focus is a thread-coloured underline, not a glowing ring.

**Shadows / blur / transparency.** Essentially no shadow system. The only overlay is the Dialog backdrop — ink at \~44% opacity, **no blur bloom**. Avoid glassmorphism entirely; this is paper, not glass.

**Motion.** Slow, material, quiet. `--dur-slow: 520ms`, `--dur-slower: 820ms`, eased with `cubic-bezier(.22,.61,.36,1)` (material) or `(.4,0,.2,1)` (quiet). **Opacity and translation only** — no scale-bounce, no rotation, no spring overshoot. Entrances fade + rise 16px; toggles slide; tab underline glides. Respect `prefers-reduced-motion`.

**Hover / press states.** Hover deepens the thread (`--thread-deep`) or lifts paper 2px. Press settles *down* 1px (translateY). No colour flashes, no ripple.

**Cards.** Paper leaf · hairline border · cut edge · optional top thread rule · no shadow · 2px lift on hover when interactive.

---

## WORDMARK LOCKUPS

Two official lockups — and only these two. Both pair نسج (Amiri) with the latin `NASJ` signature; this is the single permitted bilingual pairing in the whole system (a brand exception, never a translation).

- **Primary — stacked.** Mark over signature. Signature: `--font-en-body`, uppercase, **0.32em** tracking, lifted **24–28px** below the mark, opacity **~0.65**, nudged ~5px for optical centering. Use as the standalone brand mark (splash, cover, brand card).
- **Inline — header / footer.** Mark leads on the baseline, signature trails after a ~14px gap at ~13–16px, **0.30em** tracking, opacity ~0.65. Use in navigation bars and footers where vertical room is tight.

The signature always **breathes independently** (wide tracking, quieted opacity) so it reads as a signature, not a subtitle or transliteration. Specimen: `assets/wordmark.card.html`.

---

## EDITORIAL LAYER (optional)

An opt-in layer of *page furniture* for long-form reading surfaces — it deepens the reading-room / archive atmosphere without touching the content model or architecture. Built only from existing tokens and fonts; introduces no new colour, family, or motion. Direction-aware (RTL + LTR); numerals Western. Lives in `editorial.css` (shipped via `styles.css`).

- **Paper grain** (`.nasj-grain`) — a fixed feTurbulence tooth multiplied into the paper at `--grain-opacity` (0.035, max ~0.05). Barely perceptible; adds material warmth.
- **Running head** (`.nasj-runhead`) — a thin repeated header strip: identity on the leading side, issue/date metadata (`.nasj-runhead-meta`) on the trailing side, en-label register over a hairline.
- **Folio** (`.nasj-folio`) — a page/section number as archival metadata (Cormorant italic, tabular).
- **Section index** (`.nasj-section-index` + `.nasj-idx`) — a thread-coloured numeral (`01`, `02`…) preceding a section label; the numeral is the only accent.

Both homepage kits use the full set. It is optional: nothing renders unless the class is added.

---

## ICONOGRAPHY

The source repository contained **no icon set, no icon font, and no SVG assets**. Nasj's aesthetic is deliberately near-iconless — meaning is carried by Arabic type, the thread motif, and whitespace rather than by pictograms.

**Guidance for when icons are genuinely needed** (navigation affordances, form marks):

- Use a **thin, single-weight line set** to match the quiet register. The system's own inline marks (the checkbox tick, radio dot, thread knot) are hand-drawn at 1.5–1.6px stroke — match that weight.
- ⚠️ *Substitution / recommendation:* if you need a fuller icon set, link **[Lucide](https://lucide.dev)** from CDN (1.5px stroke, feathered line style — the closest match to Nasj's hand). This is a substitution, not a brand asset; flag it in any deliverable and keep icons sparse.
- Colour icons in `--ink` or `--annotation`; use the thread accent only for a single active mark.
- **No emoji. No unicode-glyph icons. Never** hand-draw decorative SVG illustration — the brand signature is the woven line and the word, not iconography.

**Assets present in this system:** brand wordmark lockup and the thread/weave motif are expressed as CSS specimens (`assets/wordmark.card.html`, `assets/thread-motif.card.html`) rather than binary files, since no logo art existed to import. If official logo files exist, drop them into `assets/` and update these cards.

---

## Index / manifest

**Root**

- `styles.css` — the single entry point consumers link (`@import` manifest only).
- `editorial.css` — optional editorial-layer utilities (grain, running head, folio, section index); imported by `styles.css`.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for downloading & reuse.

**`tokens/`** — `fonts.css` (Google Fonts import), `colors.css` (palette + derived + semantic aliases), `typography.css` (families, scale, roles), `spacing.css` (spacing, grid, radius, motion).

**`guidelines/`** — foundation specimen cards: colors (base / neutrals / thread), type (display / body / annotation / scale), spacing (scale / loom grid), motion.

**`assets/`** — brand cards: wordmark, thread motif.

**`components/`** — reusable React primitives, imported as `window.NASJDesignSystem_1ee8d7.<Name>`:

- `core/` — **Button, Input, Switch, Checkbox, Radio**
- `content/` — **Card, Badge, Annotation, PullQuote, ThreadDivider, Avatar**
- `navigation/` — **Tabs**
- `feedback/` — **Dialog, Tooltip**

**`ui_kits/`** — full-screen recreations of NASJ public surfaces.

- `arabic-experience/` — **the canonical Arabic homepage** (`index.html`). RTL, Arabic-only (Amiri display + IBM Plex Sans Arabic body). The primary public experience: header + running head, hero, مدخل, المنهج (tabbed), طبقة الأدلة, التعاون, footer. English appears only as the permitted exception (institution names, a citation) plus the page-level `English` switch. Responsive to mobile; uses the editorial layer.
- `english-experience/` — **the `/en` international orientation layer** (`index.html`). English-only, LTR, English-native type (Cormorant Garamond display over IBM Plex Sans body). Inherits every NASJ foundation but is not a translation — a parallel interpretive surface. Sections: header + running head, hero, orientation, practice, evidence, collaboration, footer. Responsive to mobile; uses the editorial layer.

---

## Open items / caveats

- The GitHub repo was an empty placeholder — this system is brief-derived. **Reconcile against real code when it exists.**
- Fonts are CDN-loaded, not vendored. Icons are not yet chosen (Lucide recommended).
- Both homepage kits (Arabic canonical + English orientation) are built, responsive, and AA-contrast on body copy. Remaining polish is optional (copy review, deeper mobile-nav drawer).
