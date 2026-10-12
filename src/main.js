import './styles.css';

const works = [
  { id: '01', year: '2022', title: 'Dan-anacha Requiems', meta: 'Amazon Kindle', type: 'Book', note: 'A literary record shaped by place, loss, and the sound of memory.' },
  { id: '02', year: '2019', title: 'God Deliver Us', meta: 'The Markas Anthology', type: 'Poem', note: 'A published poem held in an anthology of contemporary voices.' },
  { id: '03', year: '2019', title: 'Maiduguri', meta: 'The Markas Anthology', type: 'Poem', note: 'A poem that keeps a city present through language.' },
  { id: '04', year: '2022', title: 'Lamentations', meta: 'Echoes of the African Drums', type: 'Poem', note: 'A contribution to a collection resonant with African memory.' },
  { id: '05', year: '2023', title: 'Perceived Roles of Radio Programmes in Sustainability of Indigenous Languages', meta: 'Research', type: 'Research', note: 'An inquiry into how language survives through shared listening.' },
  { id: '06', year: '2024', title: 'Music, Theatre, and Creative Storytelling as Cultural Repositories', meta: 'Research', type: 'Research', note: 'A study of creative forms as containers for cultural knowledge.' },
  { id: '07', year: '2025', title: 'Tiv Written Literature and Genres', meta: 'Research', type: 'Research', note: 'A continuing study of Tiv writing, form, and literary memory.' }
];

const awards = ['Othman Abubakar Poetry Prize for Literary Creativity (2020)', 'Best Graduating Student, English & Literary Studies, University of Maiduguri (2019)'];
const affiliations = ['Literature Secretary, NACAFSEEL (2019)', 'Secretary General, NASELS (2019)', 'Secretary General, NUBESS (2019)'];
const arrow = '<span aria-hidden="true">↗</span>';
const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site-shell" id="top">
    <header class="site-header container">
      <a class="wordmark" href="#top" aria-label="Benjamin Armstrong Zugu home"><span class="woven-mark" aria-hidden="true"></span><span>BAZ / writing</span></a>
      <nav class="nav" aria-label="Primary navigation"><a href="#works">Works</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <span class="edition">Benue · Nigeria</span>
    </header>

    <main>
      <section class="opening scene" aria-labelledby="title">
        <div class="scene-caption"><span>01</span><span>the archive begins</span></div>
        <div class="opening-center">
          <p class="kicker reveal-line">A writer’s portfolio</p>
          <h1 id="title" class="name"><span>Benjamin</span><span>Armstrong</span><span class="name-last">Zugu</span></h1>
          <p class="opening-line reveal-line">Words held close to place, language, and memory.</p>
          <a class="scroll-link" href="#works">Scroll to enter ${arrow}</a>
        </div>
        <div class="scroll-marker" aria-hidden="true"><span></span></div>
      </section>

      <section class="works-intro scene" id="works" aria-labelledby="works-title">
        <div class="scene-caption"><span>02</span><span>the works</span></div>
        <div class="chapter-copy"><p class="overline">Published / researched</p><h2 id="works-title">A body of work<br /><em>in motion.</em></h2><p class="chapter-note">Scroll slowly. Each work arrives as a distinct page.</p></div>
      </section>

      <section class="work-sequence" aria-label="Selected writing and research works">
        ${works.map((work, index) => `<article class="work-scene scene" data-work-index="${index}"><div class="work-orbit" aria-hidden="true"><span class="orbit-ring ring-a"></span><span class="orbit-ring ring-b"></span><span class="orbit-dot"></span></div><div class="work-card"><div class="work-top"><span>${work.id}</span><span>${work.type}</span><span>${work.year}</span></div><h3>${work.title}</h3><p class="work-meta">${work.meta}</p><p class="work-note">${work.note}</p><div class="work-bottom"><span>Benjamin Armstrong Zugu</span><span>Scroll to continue ${arrow}</span></div></div></article>`).join('')}
      </section>

      <section class="interlude scene" aria-label="Writing statement"><div class="scene-caption"><span>03</span><span>the thread</span></div><div class="interlude-copy"><p class="overline">Between the lines</p><p class="interlude-quote">“Writing is where research becomes memory.”</p><p class="interlude-small">A practice grounded in literature, indigenous language, and the cultural imagination of Benue.</p></div></section>

      <section class="about scene" id="about" aria-labelledby="about-title">
        <div class="scene-caption"><span>04</span><span>the author</span></div>
        <div class="about-center"><p class="overline">A short note</p><h2 id="about-title">Benjamin Armstrong Zugu</h2><p>Writer and researcher from Benue State, Nigeria. His writing follows the meeting point of English Literature, Tiv written literature, cultural sustainability, and the forms through which communities remember.</p><button class="contact-trigger text-link" type="button" aria-expanded="false" aria-controls="contact-options">Start a conversation ${arrow}</button><div class="contact-options" id="contact-options" hidden><a href="mailto:benjaminarmstrong89@gmail.com">Email Benjamin ${arrow}</a><a href="tel:+2347032129415">+234 703 212 9415 ${arrow}</a><a href="tel:+2348089010484">+234 808 901 0484 ${arrow}</a></div></div>
      </section>

      <section class="details scene" id="contact" aria-labelledby="details-title">
        <div class="scene-caption"><span>05</span><span>the record</span></div>
        <div class="details-inner"><div><p class="overline">Author’s record</p><h2 id="details-title">The details,<br /><em>kept at the end.</em></h2></div><div class="record-grid"><div class="record-block"><span class="record-label">Education</span><p>M.A. Cultural Sustainability, University of Maiduguri <em>(In View)</em><br />B.A. (Hons) English Literature — Second Class Upper Division<br />PGDE, Ramat Polytechnic, Maiduguri</p></div><div class="record-block"><span class="record-label">Recognition</span><p>${awards.join('<br />')}</p></div><div class="record-block"><span class="record-label">Affiliations</span><p>${affiliations.join('<br />')}</p></div><div class="record-block"><span class="record-label">Place & language</span><p>Benue State (Guma) · Nigeria<br />English · Tiv</p></div></div></div>
      </section>
    </main>

    <footer class="site-footer container"><span>Benjamin Armstrong Zugu / writing archive</span><a href="mailto:benjaminarmstrong89@gmail.com">benjaminarmstrong89@gmail.com ${arrow}</a></footer>
  </div>
`;

const contactTrigger = document.querySelector('.contact-trigger');
const contactOptions = document.querySelector('#contact-options');
contactTrigger.addEventListener('click', () => {
  const open = contactOptions.hidden;
  contactOptions.hidden = !open;
  contactTrigger.setAttribute('aria-expanded', String(open));
});

const canMove = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  entry.target.classList.toggle('is-active', entry.isIntersecting);
}), { threshold: 0.42 });
document.querySelectorAll('.scene, .work-scene').forEach((element) => observer.observe(element));

if (canMove) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * -9;
    const y = (event.clientY / window.innerHeight - 0.5) * -6;
    document.documentElement.style.setProperty('--bg-x', `${x.toFixed(2)}px`);
    document.documentElement.style.setProperty('--bg-y', `${y.toFixed(2)}px`);
  }, { passive: true });
  document.querySelectorAll('.work-card').forEach((card) => card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 3;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -3;
    card.style.setProperty('--tilt-x', `${y.toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${x.toFixed(2)}deg`);
  }));
}
