# Benjamin Armstrong Zugu — Writing Archive

The portfolio is a minimal, writing-only scroll narrative inspired by sparse full-viewport editorial chapters. The current presentation uses a deep charcoal canvas for the archive, with EB Garamond/Garamond for literary display text and Montserrat for labels and interface copy. Work cards resolve from blur and low opacity as the reader enters them and dissolve as the reader moves on.

## The Infested Land brochure

The supplied four-page manuscript is now presented as a dedicated reading experience at `/the-infested-land/`. It is treated as a full brochure/book rather than a short archive card: the cover names the work, gives a one-sentence deck, and uses lightweight inline silhouette SVGs to depict the Tiv village, Ate/hospitality, Akoodo’s curse, the rat epidemic, the elders, and the restoration. The reading pages preserve the manuscript’s cultural terms, dialogue, translations, and story arc while lightly correcting obvious extraction artifacts and punctuation for readability.

The primary credit is **Creative writing by Benjamin Armstrong Zugu**. The secondary publisher credit, **Published by Egwuatu Demion Ikenna**, is intentionally small and quiet so it is present without competing with the author or title. The reader includes a print-ready PDF brochure download generated from the built route.

On the portfolio, The Infested Land is the featured item under **Body of work**, labeled as a literary brochure / Tiv story and given a clear **Click to read** CTA to the dedicated page. Earlier publications and research are grouped in one compact archive card so the history of work does not split into multiple space-consuming scenes.

The project remains a static Vite site. `src/main.js` owns the archive composition and featured work CTA; `src/styles.css` owns the dark portfolio system; `public/the-infested-land/index.html` and `reader.css` own the brochure; the PDF is stored beside the reader; and `public/manus-routes.json` declares both public routes.
