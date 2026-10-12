# Benjamin Armstrong Zugu — Writing Archive

The portfolio is now a **minimal, writing-only scroll narrative**. The reference at https://heronaiapp.com/?ref=a1.gallery uses a sparse full-viewport structure where a central visual or statement becomes the focus, short chapter labels orient the reader, and scroll progression reveals the story in deliberate stages. This project adapts those interaction principles without copying the reference’s product content, branding, or art direction.

The new experience places Benjamin Armstrong Zugu’s name at the opening, then moves into a centered sequence of published poems, research works, and book writing. Each work gets its own near-full-screen scene. Orbit-like Tiv-inspired line geometry and the Shakespeare sketch move subtly with pointer depth, while scroll activation changes the scale and opacity of each work card. The pace is quiet, editorial, and accessible, with reduced-motion support.

Teaching, classroom, tutoring, and departmental material has been removed. Resume details are limited to writing-relevant education, literary recognition, affiliations, place, and languages, and appear in the author/about and final record sections rather than competing with the works. Future stories and poems can be inserted as additional individual work scenes in `src/main.js`.

The project remains a static Vite site. `src/main.js` owns the works sequence and scroll observers; `src/styles.css` owns the centered stage, animation, responsive layout, and Tiv textile-inspired line system; `public/shakespeare-sketch.webp` provides the bundled background for GitHub Pages; `dist/` is the Pages artifact.
