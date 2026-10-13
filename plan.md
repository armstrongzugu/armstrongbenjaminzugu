# Benjamin Armstrong Zugu — Writing Archive

The portfolio is a minimal, writing-only scroll narrative inspired by sparse full-viewport editorial chapters. The visual system uses a dark neutral canvas with ivory-white text, gold primary accents, and restrained bronze details. Work cards and archive containers remain transparent, allowing the Shakespeare sketch and fine linework to remain visible behind readable text.

Typography remains limited to EB Garamond/Garamond for literary display text and Montserrat for labels and interface copy. Work cards resolve from blur and low opacity as the reader enters them and dissolve as the reader moves on.

## Body of work categories

The main archive presents four compact stages: **Short cultural story** for *The Infested Land*, **Published book** for *Dan-Anacha Requiems*, **Poems** for the supplied ten-poem collection, and a grouped archive for the remaining books and research. The supplied title, cover, author, and Goodreads record are confirmed. The published-book CTA now points to the exact Goodreads destination requested by the author: `https://www.goodreads.com/book/show/62081952-dan-anacha-requiems#CommunityReviews`.

The Poems category has its own reader route at `/poems/`. Each of the ten supplied poems is presented as a separate numbered entry: Dan-anacha I, Dan-anacha II, Maiduguri, Forewarned, Election, Hypocrisy?, Saints, The Reverend Politician, Grey, and Kpatu. The supplied wording, line breaks, quotations, and Tiv references are preserved.

## Search and AI discoverability

All three public routes have route-specific titles, descriptions, keywords, canonical URLs, Open Graph metadata, Twitter card metadata, and JSON-LD structured data. The home page has crawler-visible HTML content before JavaScript runs and clearly describes Benjamin as a Nigerian writer of Tiv culture, poems, short cultural stories, and cultural-sustainability research. The story and Poems routes have their own public work schemas and links back to the author page.

`public/sitemap.xml` lists the portfolio, Poems, and Short cultural story URLs. `public/robots.txt` allows public indexing and points crawlers to the sitemap. These changes improve eligibility for Google and AI retrieval; they do not guarantee ranking or inclusion in any search or AI answer.

## The Infested Land brochure

The supplied manuscript remains a dedicated reading experience at `/the-infested-land/`, treated as a full brochure/book with Tiv cultural dialogue, translations, and lightweight inline silhouette SVG illustrations. The primary credit is Creative writing by Benjamin Armstrong Zugu. The secondary publisher credit, Published by Egwuatu Demion Ikenna, is intentionally small and quiet. A print-ready PDF brochure is available from the reader page.

The project remains a static Vite site. `src/main.js` owns the archive composition and CTAs; `src/styles.css` owns the portfolio system; `public/poems/index.html` and `poems.css` own the poem archive; `public/the-infested-land/index.html` and `reader.css` own the short cultural story; and `public/manus-routes.json` declares all public routes.
