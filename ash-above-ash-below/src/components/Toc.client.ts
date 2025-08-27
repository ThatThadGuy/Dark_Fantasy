export function mountToc(containerSelector = '#toc') {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const headings = Array.from(document.querySelectorAll('main h2, main h3')) as HTMLElement[];
  const list = document.createElement('ul');
  headings.forEach((h) => {
    if (!h.id) h.id = h.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') ?? '';
    const li = document.createElement('li');
    li.style.marginLeft = h.tagName === 'H3' ? '1rem' : '0';
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent ?? '';
    li.appendChild(a);
    list.appendChild(li);
  });
  container.appendChild(list);
}
