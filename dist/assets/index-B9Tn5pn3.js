(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(a){if(a.ep)return;a.ep=!0;const t=r(a);fetch(a.href,t)}})();const n={id:"01",year:"2026",title:"The Infested Land",meta:"The Infested Land · Tiv story",type:"Short cultural story",note:"A story of hospitality, consequence, and the work of gathering a people back together."},p=["Dan-anacha Requiems — Amazon Kindle (2022)","God Deliver Us · Maiduguri — The Markas Anthology (2019)","Perceived Roles of Radio Programmes in Sustainability of Indigenous Languages (2023)","Music, Theatre, and Creative Storytelling as Cultural Repositories (2024)","Tiv Written Literature and Genres (2025)"],u=["Othman Abubakar Poetry Prize for Literary Creativity (2020)","Best Graduating Student, English & Literary Studies, University of Maiduguri (2019)"],h=["Literature Secretary, NACAFSEEL (2019)","Secretary General, NASELS (2019)","Secretary General, NUBESS (2019)"],i='<span aria-hidden="true">↗</span>',m=document.querySelector("#app");m.innerHTML=`
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
          <a class="scroll-link" href="#works">Scroll to enter ${i}</a>
        </div>
        <div class="scroll-marker" aria-hidden="true"><span></span></div>
      </section>

      <section class="works-intro scene" id="works" aria-labelledby="works-title">
        <div class="scene-caption"><span>02</span><span>the works</span></div>
        <div class="chapter-copy"><p class="overline">Published / researched</p><h2 id="works-title">A body of work<br /><em>in motion.</em></h2><p class="chapter-note">Scroll slowly. Each work arrives as a distinct page.</p></div>
      </section>

      <section class="work-sequence" aria-label="Selected writing and research works">
        <article class="work-scene scene featured-work" data-work-index="0"><div class="work-orbit" aria-hidden="true"><span class="orbit-ring ring-a"></span><span class="orbit-ring ring-b"></span><span class="orbit-dot"></span></div><div class="work-card"><div class="work-top"><span>${n.id}</span><span>${n.type}</span><span>${n.year}</span></div><h3>${n.title}</h3><p class="work-meta">${n.meta}</p><p class="work-note">${n.note}</p><div class="work-bottom"><span>Creative writing by Benjamin Armstrong Zugu</span><a class="read-cta" href="./the-infested-land/">Click to read ${i}</a></div></div></article>
        <article class="work-scene scene poems-work" data-work-index="1"><div class="work-orbit" aria-hidden="true"><span class="orbit-ring ring-a"></span><span class="orbit-ring ring-b"></span><span class="orbit-dot"></span></div><div class="work-card"><div class="work-top"><span>02</span><span>Poems</span><span>11 works</span></div><h3>Poems<br /><em>of place.</em></h3><p class="work-meta">Dan-anacha · Maiduguri · Tiv dance</p><p class="work-note">Eleven poems on place, violence, faith, politics, memory, and the cultural life of home.</p><div class="work-bottom"><span>Body of work</span><a class="read-cta" href="./poems/">Read poems ${i}</a></div></div></article>
        <article class="work-scene scene archive-work" data-work-index="2"><div class="work-orbit" aria-hidden="true"><span class="orbit-ring ring-a"></span><span class="orbit-ring ring-b"></span><span class="orbit-dot"></span></div><div class="work-card"><div class="work-top"><span>03</span><span>Earlier work</span><span>Archive</span></div><h3>Other work,<br /><em>kept together.</em></h3><p class="work-note">The archive continues through books and research already recorded in Benjamin’s writing life.</p><ul class="work-archive-list">${p.map(e=>`<li>${e}</li>`).join("")}</ul><div class="work-bottom"><span>Body of work</span><span>Scroll to continue ${i}</span></div></div></article>
      </section>

      <section class="interlude scene" aria-label="Writing statement"><div class="scene-caption"><span>03</span><span>the thread</span></div><div class="interlude-copy"><p class="overline">Between the lines</p><p class="interlude-quote">“Writing is where research becomes memory.”</p><p class="interlude-small">A practice grounded in literature, indigenous language, and the cultural imagination of Benue.</p></div></section>

      <section class="about scene" id="about" aria-labelledby="about-title">
        <div class="scene-caption"><span>04</span><span>the author</span></div>
        <div class="about-center"><p class="overline">A short note</p><h2 id="about-title">Benjamin Armstrong Zugu</h2><p>Writer and researcher from Benue State, Nigeria. His writing follows the meeting point of English Literature, Tiv written literature, cultural sustainability, and the forms through which communities remember.</p><button class="contact-trigger text-link" type="button" aria-expanded="false" aria-controls="contact-options">Start a conversation ${i}</button><div class="contact-options" id="contact-options" hidden><a href="mailto:benjaminarmstrong89@gmail.com">Email Benjamin ${i}</a><a href="tel:+2347032129415">+234 703 212 9415 ${i}</a><a href="tel:+2348089010484">+234 808 901 0484 ${i}</a></div></div>
      </section>

      <section class="details scene" id="contact" aria-labelledby="details-title">
        <div class="scene-caption"><span>05</span><span>the record</span></div>
        <div class="details-inner"><div><p class="overline">Author’s record</p><h2 id="details-title">The details,<br /><em>kept at the end.</em></h2></div><div class="record-grid"><div class="record-block"><span class="record-label">Education</span><p>M.A. Cultural Sustainability, University of Maiduguri <em>(In View)</em><br />B.A. (Hons) English Literature — Second Class Upper Division<br />PGDE, Ramat Polytechnic, Maiduguri</p></div><div class="record-block"><span class="record-label">Recognition</span><p>${u.join("<br />")}</p></div><div class="record-block"><span class="record-label">Affiliations</span><p>${h.join("<br />")}</p></div><div class="record-block"><span class="record-label">Place & language</span><p>Benue State (Guma) · Nigeria<br />English · Tiv</p></div></div></div>
      </section>
    </main>

    <footer class="site-footer container"><span>Benjamin Armstrong Zugu / writing archive</span><a href="mailto:benjaminarmstrong89@gmail.com">benjaminarmstrong89@gmail.com ${i}</a></footer>
  </div>
`;const l=document.querySelector(".contact-trigger"),d=document.querySelector("#contact-options");l.addEventListener("click",()=>{const e=d.hidden;d.hidden=!e,l.setAttribute("aria-expanded",String(e))});const v=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=new IntersectionObserver(e=>e.forEach(s=>{s.target.classList.toggle("is-active",s.isIntersecting)}),{threshold:.42});document.querySelectorAll(".scene, .work-scene").forEach(e=>g.observe(e));v&&(window.addEventListener("pointermove",e=>{const s=(e.clientX/window.innerWidth-.5)*-9,r=(e.clientY/window.innerHeight-.5)*-6;document.documentElement.style.setProperty("--bg-x",`${s.toFixed(2)}px`),document.documentElement.style.setProperty("--bg-y",`${r.toFixed(2)}px`)},{passive:!0}),document.querySelectorAll(".work-card").forEach(e=>e.addEventListener("pointermove",s=>{const r=e.getBoundingClientRect(),o=((s.clientX-r.left)/r.width-.5)*3,a=((s.clientY-r.top)/r.height-.5)*-3;e.style.setProperty("--tilt-x",`${a.toFixed(2)}deg`),e.style.setProperty("--tilt-y",`${o.toFixed(2)}deg`)})));
