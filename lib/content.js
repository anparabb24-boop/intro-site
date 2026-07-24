import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// Reads every .md file in content/<collection>/, parses frontmatter,
// converts body markdown to HTML, and returns entries sorted by date desc.
export function getCollection(collection) {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  const entries = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8');
    const { data, content } = matter(raw);
    const html = remark().use(remarkHtml).processSync(content).toString();
    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
      html,
    };
  });

  entries.sort((a, b) => new Date(b.date) - new Date(a.date));
  return entries;
}
