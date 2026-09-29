import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { marked } from 'marked';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function slug(title) {
  return title.toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .trim()
    .replace(/\s/g, '-');
}

async function renderReadme(path, language) {
  let markdown = (await readFile(join(root, path), 'utf8')).replace(/^\[!\[[^\n]+\n\n/, '');
  if (language === 'zh') markdown = markdown.replace('# 🧭 AI Researcher Roadmap｜人工智能研究者学习路线', '# 🧭 人工智能研究者学习路线');
  const html = marked.parse(markdown, { gfm: true })
    .replace(/href="#([^"]+)"/g, (_, anchor) => `href="#${language}-${decodeURIComponent(anchor)}"`)
    .replace(/href="(CONTRIBUTING(?:\.zh-CN)?\.md|LICENSE)"/g, (_, file) => `href="https://github.com/Taiz388/AI-Researcher-Roadmap/blob/main/${file}"`);
  return html.replace(/<h([1-6])>(.*?)<\/h\1>/g, (_, level, inner) => {
    const title = inner.replace(/<[^>]*>/g, '');
    return `<h${level} id="${language}-${escapeHtml(slug(title))}">${inner}</h${level}>`;
  });
}

const [english, chinese] = await Promise.all([
  renderReadme('README.md', 'en'),
  renderReadme('README.zh-CN.md', 'zh'),
]);

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="A four-month, bilingual roadmap from deep learning to LLMs, agents, VLMs, and VLAs.">
  <title>AI Researcher Roadmap</title>
  <link rel="stylesheet" href="site.css">
  <script src="site.js" defer></script>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <div class="language-switch" role="group" aria-label="Language / 语言">
        <button type="button" data-language="en" aria-pressed="true">English</button>
        <button type="button" data-language="zh" aria-pressed="false">简体中文</button>
      </div>
      <a class="repo-link" href="https://github.com/Taiz388/AI-Researcher-Roadmap" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </div>
  </header>
  <main id="roadmap-en" class="roadmap" lang="en">${english}</main>
  <main id="roadmap-zh" class="roadmap" lang="zh-CN" hidden>${chinese}</main>
</body>
</html>
`;

await writeFile(join(root, 'docs', 'index.html'), page, 'utf8');
