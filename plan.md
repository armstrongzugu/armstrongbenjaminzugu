# Benjamin Armstrong Zugu — Writing Archive

The portfolio is a minimal, writing-only scroll narrative inspired by sparse full-viewport editorial chapters. The presentation now uses a deep plum-black canvas with a wine-red and rose accent system. The previous gold/yellow and coral accent colors have been removed. Work cards and archive containers are transparent, leaving the Shakespeare sketch, dark canvas, and wine-red linework visible behind the readable text. Bright ivory, pale rose, and muted blush text provide the contrast needed for the writing to pop.

Typography remains limited to EB Garamond/Garamond for literary display text and Montserrat for labels and interface copy. Work cards resolve from blur and low opacity as the reader enters them and dissolve as the reader moves on.

## The Infested Land brochure

The supplied manuscript is presented as a dedicated reading experience at `/the-infested-land/`. It is treated as a full brochure/book with a cover, chapter pages, Tiv cultural dialogue and translations, and lightweight inline silhouette SVG illustrations. The brochure uses the same Garamond/Montserrat typography and now carries wine-red accents on its off-white vignette paper.

The primary credit is **Creative writing by Benjamin Armstrong Zugu**. The secondary publisher credit, **Published by Egwuatu Demion Ikenna**, is intentionally small and quiet. A print-ready PDF brochure is available from the reader page.

On the portfolio, The Infested Land is the featured item under **Body of work**, labeled as a literary brochure / Tiv story and given a clear **Click to read** CTA. Earlier publications and research are grouped in one compact archive card.

The project remains a static Vite site. `src/main.js` owns the archive composition and featured work CTA; `src/styles.css` owns the dark wine-red portfolio system; `public/the-infested-land/index.html` and `reader.css` own the brochure; the PDF is stored beside the reader; and `public/manus-routes.json` declares both public routes.
