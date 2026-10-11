import './styles.css';

const publications = [
  ['Dan-anacha Requiems', '2022', 'Amazon Kindle'],
  ['“God Deliver Us” & “Maiduguri”', '2019', 'The Markas Anthology'],
  ['“Lamentations”', '2022', 'Echoes of the African Drums'],
  ['Perceived Roles of Radio Programmes in Sustainability of Indigenous Languages', '2023', 'Research'],
  ['Music, Theatre, and Creative Storytelling as Cultural Repositories', '2024', 'Research'],
  ['Tiv Written Literature and Genres', '2025', 'Research']
];

const workSlots = [
  { label: 'Poem / manuscript 01', title: 'A place is being kept for the first poem.', body: 'Send the poem when ready and it will be presented here as its own work—with its title, voice, and context kept intact.', type: 'Featured work' },
  { label: 'Story / manuscript 02', title: 'A separate shelf for the first story.', body: 'Each story will receive an individual project card so the writing archive can grow without being folded into a generic list.', type: 'Upcoming story' },
  { label: 'Poem / manuscript 03', title: 'The archive remains open.', body: 'Future poems and stories will join this living record as distinct literary projects.', type: 'Open archive' }
];

const experience = [
  { year: '2021 — Present', place: 'Best Schools International, Abuja', role: 'Senior English Language/Literature Tutor', points: ['Deliver high-quality instruction in English Language and Literature.', 'Prepare students for internal and external examinations with excellent outcomes.', 'Utilize digital tools to enhance virtual and in-person learning experiences.', 'Support curriculum planning and academic development initiatives.'] },
  { year: '2020 — 2021', place: 'Bara’Imul Iman College, Maiduguri', role: 'Senior English Language/Literature Tutor', points: ['Delivered engaging lessons tailored to diverse student learning needs.', 'Improved students’ reading, writing, and analytical skills.'] },
  { year: '2018 — 2020', place: 'Godiya Secondary School, Maiduguri', role: 'Senior English Language/Literature Tutor', points: ['Designed lesson plans aligned with curriculum standards.', 'Fostered a positive and interactive learning environment.'] },
  { year: '2013 — 2015', place: 'Government Day Secondary School, Dan-anacha', role: 'English Language/Literature Teacher', points: ['Built foundational language and literacy skills among students.', 'Encouraged creativity and literary appreciation.'] }
];

const awards = ['Best Graduating Student, Office Technology & Management (2012)', 'Best Graduating Student, English & Literary Studies, University of Maiduguri (2019)', 'Othman Abubakar Poetry Prize for Literary Creativity (2020)'];
const affiliations = ['President, NAOTMRS (2012)', 'President, Network for Education & Social Change (2012)', 'Secretary General, NASELS (2019)', 'Secretary General, NUBESS (2019)', 'Literature Secretary, NACAFSEEL (2019)'];

const arrow = '<span aria-hidden="true">↗</span>';
const list = (items) => items.map((item) => `<li>${item}</li>`).join('');

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="site-shell" id="top">
    <header class="container topbar">
      <a class="wordmark" href="#top" aria-label="Benjamin Armstrong Zugu home"><span class="woven-mark" aria-hidden="true"></span><span>BAZ / archive</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation"><span></span><span></span><span></span></button>
      <nav class="nav" id="site-nav" aria-label="Primary navigation">
        <a href="#writing">Writing</a><a href="#practice">Practice</a><a href="#career">Career</a><a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="container hero" aria-labelledby="hero-title">
        <div class="hero-grid">
          <div>
            <div class="eyebrow" data-stagger="1">Writer · Educator · Cultural researcher</div>
            <h1 id="hero-title" data-stagger="2">Benjamin<br /><em>Armstrong</em><br />Zugu.</h1>
            <p class="hero-intro" data-stagger="3">An English Language and Literature educator building a living record of language, memory, and the cultural imagination of Benue.</p>
            <div class="hero-actions" data-stagger="4"><a class="button" href="#writing">Enter the writing archive ${arrow}</a><a class="text-link" href="mailto:benjaminarmstrong89@gmail.com">Open a conversation</a></div>
          </div>
          <aside class="hero-aside" data-stagger="4"><p>Based in Nigeria<br />State of origin: Benue State (Guma)</p><strong>Language is a classroom, a record, and a home.</strong></aside>
        </div>
        <div class="scroll-cue" aria-hidden="true">Scroll to read</div>
      </section>

      <section class="section container reveal" id="writing" aria-labelledby="writing-title">
        <div class="section-heading"><div class="section-index">01 / The writing life</div><div><h2 class="section-title" id="writing-title">Writing is not a side note.</h2><p class="section-lede">It is where research becomes memory, where the classroom opens into culture, and where stories can keep a language in motion.</p></div></div>
        <div class="writing-lead">
          <div class="manifesto"><p class="quote">“To write is to keep listening—across classrooms, communities, and generations.”</p><p class="attribution">A practice shaped by literature, language, and cultural sustainability</p></div>
          <div class="stat-stack"><div class="stat"><b>06</b><span>Publications & research works recorded in the current archive</span></div><div class="stat"><b>08+</b><span>Years of classroom teaching experience</span></div><div class="stat"><b>02+</b><span>Years as an online tutor</span></div></div>
        </div>
        <div class="section-heading" style="margin-top:76px;margin-bottom:28px"><div class="section-index">01.1 / Recorded works</div><div><h3 class="section-title" style="font-size:clamp(2rem,3.4vw,3.6rem)">Publications & research</h3></div></div>
        <div class="timeline">${publications.map(([title, year, outlet]) => `<div class="timeline-item"><div class="timeline-year">${year}</div><div><div class="timeline-role">${title}</div><div class="timeline-place">${outlet}</div></div></div>`).join('')}</div>
      </section>

      <section class="section container reveal" id="works" aria-labelledby="works-title">
        <div class="section-heading"><div class="section-index">02 / Works archive</div><div><h2 class="section-title" id="works-title">Every manuscript gets its own room.</h2><p class="section-lede">Stories and poems will appear here as individual projects. The shelves are ready; the next entries will come from the author’s own pages.</p></div></div>
        <div class="archive">${workSlots.map((work, index) => `<article class="work-card ${index === 0 ? 'featured' : 'secondary'} awaiting" data-tilt><div class="card-label">${work.label}</div><h3>${work.title}</h3><p>${work.body}</p><div class="card-foot">${work.type} ${arrow}</div></article>`).join('')}</div>
      </section>

      <section class="section container reveal" id="practice" aria-labelledby="practice-title">
        <div class="section-heading"><div class="section-index">03 / The practice</div><div><h2 class="section-title" id="practice-title">A discipline with more than one classroom.</h2><p class="section-lede">Benjamin’s work moves between teaching, research, digital learning, and the preservation of indigenous language and cultural expression.</p></div></div>
        <div class="practice-grid"><article class="practice-card"><h3>Teaching</h3><p>High-quality English Language and Literature instruction, curriculum delivery, examination preparation, student engagement, behaviour management, and virtual learning facilitation.</p></article><article class="practice-card"><h3>Research</h3><p>Academic writing and publishing focused on indigenous languages, creative storytelling, music, theatre, cultural repositories, and Tiv written literature.</p></article><article class="practice-card"><h3>Leadership</h3><p>As Head of Languages Department: supervising language teachers, coordinating departmental activities, standardizing assessment, reviewing academics, and promoting ICT adoption.</p></article></div>
      </section>

      <section class="section container reveal" id="career" aria-labelledby="career-title">
        <div class="section-heading"><div class="section-index">04 / Career record</div><div><h2 class="section-title" id="career-title">The work behind the work.</h2><p class="section-lede">A career in language education, built across Abuja, Maiduguri, and Dan-anacha.</p></div></div>
        <div class="timeline">${experience.map((item) => `<div class="timeline-item"><div class="timeline-year">${item.year}</div><div><div class="timeline-role">${item.role}</div><div class="timeline-place">${item.place}</div><ul>${list(item.points)}</ul></div></div>`).join('')}</div>
        <div class="section-heading" style="margin-top:76px;margin-bottom:28px"><div class="section-index">04.1 / Education</div><div><h3 class="section-title" style="font-size:clamp(2rem,3.4vw,3.6rem)">Education & preparation</h3></div></div>
        <div class="timeline"><div class="timeline-item"><div class="timeline-year">2026</div><div><div class="timeline-role">Teachers Registration Council of Nigeria</div><div class="timeline-place">TRCN</div></div></div><div class="timeline-item"><div class="timeline-year">2023 — Present</div><div><div class="timeline-role">M.A. Cultural Sustainability <em>(In View)</em></div><div class="timeline-place">University of Maiduguri</div></div></div><div class="timeline-item"><div class="timeline-year">2023</div><div><div class="timeline-role">Postgraduate Diploma in Education (PGDE)</div><div class="timeline-place">Ramat Polytechnic, Maiduguri</div></div></div><div class="timeline-item"><div class="timeline-year">2015 — 2020</div><div><div class="timeline-role">B.A. (Hons) English Literature — Second Class Upper Division</div><div class="timeline-place">University of Maiduguri</div></div></div><div class="timeline-item"><div class="timeline-year">2010 — 2012</div><div><div class="timeline-role">National Diploma in Office Technology & Management — Distinction</div><div class="timeline-place">Adamawa State Polytechnic, Yola</div></div></div><div class="timeline-item"><div class="timeline-year">2012 / 2008</div><div><div class="timeline-role">Computer/Digital Literacy · Senior Secondary School Certificate (NECO)</div><div class="timeline-place">Click2Tech Solutions · General Murtala Mohammed College, Yola</div></div></div></div>
      </section>

      <section class="section container reveal" id="recognition" aria-labelledby="recognition-title">
        <div class="section-heading"><div class="section-index">05 / Recognition</div><div><h2 class="section-title" id="recognition-title">Honours, affiliations, and the details that locate the author.</h2></div></div>
        <div class="details-grid"><div class="awards"><h3>Awards & achievements</h3><ul>${list(awards)}</ul></div><div class="awards"><h3>Affiliations & leadership</h3><ul>${list(affiliations)}</ul></div></div>
        <div class="details-grid" style="margin-top:58px"><dl class="detail-list"><div class="detail-row"><dt>Core competencies</dt><dd>English Language & Literature Instruction · Online Teaching & Virtual Learning Facilitation · Curriculum Development & Lesson Planning · Departmental Leadership & Academic Coordination · ICT Integration (Zoom, Google Meet, MS Office Tools) · Research, Writing & Academic Publishing · Classroom & Behaviour Management · Communication & Interpersonal Skills</dd></div><div class="detail-row"><dt>Personal details</dt><dd>Place of Birth: Misau, Bauchi State<br />State of Origin: Benue State (Guma)<br />Nationality: Nigerian<br />Languages: English, Tiv</dd></div></dl><div class="awards"><h3>A note on references</h3><p style="color:var(--muted);font-size:13px;line-height:1.8;margin:0">References are available upon request.</p></div></div>
      </section>

      <section class="contact" id="contact" aria-labelledby="contact-title"><div class="container"><div class="contact-grid"><div><div class="section-heading" style="margin-bottom:0"><div class="section-index">06 / Contact</div><div><h2 class="section-title" id="contact-title">The next page can start with a conversation.</h2><p class="section-lede">For teaching, literary collaboration, research, or the next manuscript, reach Benjamin directly.</p></div></div><div class="contact-links"><a class="contact-link" href="mailto:benjaminarmstrong89@gmail.com">Email ${arrow}</a><a class="contact-link" href="tel:+2347032129415">0703 212 9415 ${arrow}</a><a class="contact-link" href="tel:+2348089010448">0808 901 0448 ${arrow}</a></div></div><aside class="contact-side"><p><strong>Location</strong>Nigeria</p><p><strong>Identity</strong>Benue State (Guma) · Nigerian · English / Tiv</p><p><strong>References</strong>Available upon request.</p></aside></div></div></section>
    </main>
    <footer class="container footer"><span>Benjamin Armstrong Zugu / Literary portfolio</span><span>Language · memory · culture</span></footer>
  </div>
`;

const hero = document.querySelector('.hero');
requestAnimationFrame(() => hero.classList.add('loaded'));

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const canMove = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (canMove) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * -13;
    const y = (event.clientY / window.innerHeight - 0.5) * -9;
    document.documentElement.style.setProperty('--bg-x', `${x.toFixed(2)}px`);
    document.documentElement.style.setProperty('--bg-y', `${y.toFixed(2)}px`);
  }, { passive: true });
  document.querySelectorAll('[data-tilt]').forEach((card) => card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const rx = ((event.clientY - rect.top) / rect.height - .5) * -2.3;
    const ry = ((event.clientX - rect.left) / rect.width - .5) * 2.3;
    card.style.transform = `translateY(-5px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }));
  document.querySelectorAll('[data-tilt]').forEach((card) => card.addEventListener('pointerleave', () => { card.style.transform = ''; }));
}
