const paths = {
  search:'<circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  layout:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
  pen:'<path d="m13 6 5 5M4 20l5-1L20 8a2 2 0 0 0-4-4L5 15zM13 20h7"/>',
  play:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 8 6 4-6 4z"/>',
  sparkles:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5zM5 3v4M3 5h4"/>',
  chart:'<path d="M4 4v16h16M9 16v-4m5 4V8m5 8V5"/>'
};
const home = document.querySelector('#home');
const reader = document.querySelector('#reader');
const program = document.querySelector('#program');
const lessonWord = count => count === 3 || count === 4 ? 'урока' : 'уроков';
const lessonLink = (moduleIndex, lessonIndex) => '#lesson-' + (moduleIndex + 1) + '-' + (lessonIndex + 1);
const sequence = modules.flatMap((item, moduleIndex) => item.lessons.map((_, lessonIndex) => lessonLink(moduleIndex, lessonIndex)));
document.querySelector('#module-count').textContent = String(modules.length).padStart(2, '0');
document.querySelector('#lesson-count').textContent = String(sequence.length);
document.querySelector('#modules').innerHTML = modules.map((item, index) => `
<a class="card" href="${lessonLink(index, 0)}">
<div class="card-top"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths[item.icon]}</svg></span><span class="card-no">МОДУЛЬ ${String(index + 1).padStart(2, '0')}</span></div>
<h3>${item.title}</h3><p>${item.summary}</p>
<div class="card-footer"><span>${item.lessons.length} ${lessonWord(item.lessons.length)}</span><span class="arrow" aria-hidden="true">↗</span></div>
</a>`).join('');

function render() {
  const match = location.hash.match(/^#lesson-(\d+)-(\d+)$/);
  const moduleIndex = match ? Number(match[1]) - 1 : -1;
  const lessonIndex = match ? Number(match[2]) - 1 : -1;
  const activeModule = modules[moduleIndex];
  const lesson = activeModule?.lessons[lessonIndex];
  const wasReading = !reader.hidden;
  home.hidden = Boolean(lesson);
  reader.hidden = !lesson;
  if (!lesson) {
    document.title = 'SMM / ПРАКТИКА — учебник по SMM';
    if (location.hash === '#program') program.scrollIntoView();
    else if (wasReading) window.scrollTo(0, 0);
    return;
  }
  const activeLink = lessonLink(moduleIndex, lessonIndex);
  const position = sequence.indexOf(activeLink);
  const toc = modules.map((item, idx) => `<details ${idx === moduleIndex ? 'open' : ''}><summary>${idx + 1}. ${item.title}</summary>
    ${item.lessons.map(([title], sub) => `<a href="${lessonLink(idx, sub)}" ${idx === moduleIndex && sub === lessonIndex ? 'aria-current="page"' : ''}>${title}</a>`).join('')}</details>`).join('');
  const previous = sequence[position - 1];
  const next = sequence[position + 1];
  reader.innerHTML = `<a class="back" href="#program">← Все модули</a><div class="reader-layout">
    <nav class="toc" aria-label="Оглавление уроков">${toc}</nav>
    <article class="lesson"><div class="eyebrow"><i></i> ${activeModule.tag} / УРОК ${lessonIndex + 1}</div>
      <h1 tabindex="-1">${lesson[0]}</h1>${lesson[1]}
      <nav class="lesson-nav" aria-label="Переход между уроками"><span>${previous ? `<a href="${previous}">← Предыдущий урок</a>` : ''}</span>
      <a href="${next ?? '#program'}">${next ? 'Следующий урок →' : 'К программе →'}</a></nav>
    </article></div>`;
  document.title = lesson[0] + ' — SMM / ПРАКТИКА';
  window.scrollTo({ top: 0, behavior: 'instant' });
  reader.querySelector('h1').focus({ preventScroll: true });
}
window.addEventListener('hashchange', render);
render();
