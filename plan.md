# Benjamin Armstrong Zugu — Literary Portfolio

## Product intent

Build a clean, professional, responsive portfolio for Benjamin Armstrong Zugu that presents him first as a writer, literary researcher, and cultural educator, then as an experienced English Language/Literature teacher. The resume remains the source of truth for biography, experience, education, publications, awards, affiliations, personal details, and contact information. Stories and poems supplied later will become individual work entries without inventing titles or content in advance.

## Design direction

- **Design movement:** contemporary literary editorial with tactile archive-room warmth, informed by the motion language of the supplied modern-portfolio repository.
- **Core principles:** writing-led hierarchy; cultural specificity without costume or cliché; quiet authority; responsive clarity.
- **Color philosophy:** warm paper (`#efe8dc`) and ink (`#171817`) create a reading-room foundation. Deep Tiv indigo (`#1d3442`) anchors trust and scholarship. Ox-blood rust (`#9b3f2e`) and woven gold (`#c79247`) are used as small, ownable signals rather than generic SaaS gradients.
- **Layout paradigm:** editorial one-column narrative with offset metadata rails, a horizontal career ribbon, and a writing archive that alternates between large feature cards and compact record cards. Avoid a centered marketing-grid feel.
- **Signature elements:** (1) a faint animated graphite Shakespeare sketch in the background, (2) hand-drawn Tiv textile line motifs and a small woven mark in the wordmark, (3) numbered archive labels and ruled-paper separators.
- **Interaction philosophy:** motion should feel like a manuscript being revealed—slow parallax, soft lift, measured fades, and no distracting autoplay. Pointer tilt is limited to featured writing cards and disabled under reduced-motion preferences.
- **Animation:** background portrait follows a low-amplitude pointer parallax; sections reveal on scroll; hero copy enters in a stagger; archive cards lift by 4px and rotate by less than 1deg on hover; all transitions have a reduced-motion fallback.
- **Typography system:** `DM Serif Display` for display headlines and literary titles; `Manrope` for interface, metadata, and body copy. Use generous line-height and narrow text measure for comfortable reading.
- **Brand essence:** “A living archive of language, teaching, and Tiv cultural memory.” Personality: grounded, reflective, exacting.
- **Brand voice:** assured, human, and literary; never inflated. Example lines: “Language is a classroom, a record, and a home.” / “Writing is where research becomes memory.”
- **Wordmark & logo:** a small woven-knot glyph beside `BAZ / archive`, suggesting interlaced Tiv textile bands and the initials of the author.
- **Signature brand color:** deep Tiv indigo `#1d3442`.

## Technical approach

- Static Vite site with semantic HTML, CSS, and vanilla JavaScript for a lightweight, portable portfolio.
- `src/main.js` renders the resume-derived content, interaction hooks, project placeholders, navigation, and accessible mobile menu.
- `src/styles.css` owns the responsive editorial system, cultural motifs, animation, reduced-motion rules, and background treatment.
- `public/shakespeare-sketch.png` is referenced through managed storage at runtime so the background can be replaced asynchronously without changing the layout.
- `public/manus-routes.json` declares the home route for Webdev routing metadata.
- `app.config.ts` provides project logo metadata.
- The static build emits `dist/` with `index.html` for managed publication.

## Content architecture

1. Hero: name, writing-led positioning, contact CTA, and scroll cue.
2. Writing desk: publication and research highlights, explicitly framing writing as the primary practice.
3. Works archive: one card per supplied story/poem later; current UI uses clearly labeled “Awaiting manuscript” slots and never fabricates works.
4. Practice: teaching, research, and cultural sustainability narrative.
5. Career: chronological experience and leadership.
6. Education & recognition: qualifications, awards, and affiliations.
7. Contact: email, phone, Nigeria / Benue identity, languages, and references status.

## Material constraints

- Do not invent story/poem titles, biographies, links, or achievements beyond the resume.
- Do not imply specific Tiv symbols or sacred meanings; motifs remain abstract woven line geometry.
- Keep the Shakespeare image atmospheric and low contrast behind text.
- Preserve readability and touch targets on mobile.
