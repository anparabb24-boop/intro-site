import Layout from '../components/Layout';
import SettleCurve from '../components/SettleCurve';
import { getCollection } from '../lib/content';

export async function getStaticProps() {
  const entries = getCollection('now');
  return { props: { entries } };
}

export default function Now({ entries }) {
  return (
    <Layout title="Now" description="What I'm reading, building, and training on right now.">
      <div className="section-title">
        <SettleCurve variant="mark" />
        <h2>Now</h2>
      </div>
      <p className="mono">Updated roughly monthly. Newest first.</p>

      <hr className="divider" />

      {entries.length === 0 && (
        <p className="empty-state">
          No entries yet — add a markdown file to content/now/ to start.
        </p>
      )}
      {entries.map((e) => (
        <article className="entry" key={e.slug}>
          <div className="entry-head">
            <h3>{e.title}</h3>
            <span className="entry-date">{e.date}</span>
          </div>
          <div className="entry-body" dangerouslySetInnerHTML={{ __html: e.html }} />
        </article>
      ))}
    </Layout>
  );
}
