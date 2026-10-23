const grid = document.querySelector('#project-grid');
for (const project of window.portfolioProjects) {
  const article = document.createElement('article');
  article.className = `project${project.placeholder ? ' placeholder' : ''}`;
  if (project.placeholder) {
    const preview = document.createElement('div');
    preview.className = 'preview placeholder-preview';
    preview.innerHTML = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4.5" y="6.5" width="23" height="19" rx="2" stroke="currentColor"/><path d="M5 12h22M9 9.5h1m2 0h1" stroke="currentColor"/></svg><span>项目占位</span>';
    article.append(preview);
  } else {
    const preview = document.createElement('a');
    preview.className = 'preview';
    preview.href = project.url;
    preview.target = '_blank';
    preview.rel = 'noopener noreferrer';
    preview.setAttribute('aria-label', `访问${project.title}`);
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.imageAlt;
    img.width = 1600;
    img.height = 1000;
    preview.append(img);
    article.append(preview);
  }
  const heading = document.createElement('h3');
  heading.textContent = project.title;
  const description = document.createElement('p');
  description.textContent = project.description;
  article.append(heading, description);
  if (project.placeholder) {
    const pending = document.createElement('span');
    pending.className = 'pending';
    pending.textContent = '待补充';
    article.append(pending);
  } else {
    const links = document.createElement('div');
    links.className = 'project-links';
    for (const [label, url] of [['访问网站', project.url], ['源码', project.source]]) {
      if (!url) continue;
      const link = document.createElement('a');
      link.href = url;
      link.textContent = `${label} ↗`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${label}：${project.title}（新窗口）`);
      links.append(link);
    }
    article.append(links);
  }
  grid.append(article);
}
