import Layout from '../components/Layout';
import SettleCurve from '../components/SettleCurve';
import { getCollection } from '../lib/content';

export async function getStaticProps() {
  const projects = getCollection('projects');
  const reading = getCollection('reading');
  return { props: { projects, reading } };
}

export default function Research({ projects, reading }) {
  return (
    <Layout title="Research" description="Control systems, mathematics, and ongoing project log.">
      <div className="section-title">
        <SettleCurve variant="mark" />
        <h2>Research</h2>
      </div>

      <p>
        Current interests: control theory, dynamical systems, applied linear algebra and
        optimization. Working mostly in MATLAB/Simulink and Python.
        <br />
        [Edit this block in <code>pages/research.js</code> as your interests sharpen.]
      </p>

      <hr className="divider" />

      <div className="section-title">
        <h3>Projects log</h3>
      </div>
      {projects.length === 0 && (
        <p className="empty-state">
          No entries yet — add a markdown file to content/projects/ to start the log.
        </p>
      )}
      {projects.map((p) => (
        <article className="entry" key={p.slug}>
          <div className="entry-head">
            <h3>{p.title}</h3>
            <span className="entry-date">{p.date}</span>
          </div>
          <div className="entry-body" dangerouslySetInnerHTML={{ __html: p.html }} />
          {p.links && (
            <p className="mono">
              {p.links.map((l, i) => (
                <span key={i}>
                  <a href={l.url}>{l.label}</a>{i < p.links.length - 1 ? '  ·  ' : ''}
                </span>
              ))}
            </p>
          )}
        </article>
      ))}

      <hr className="divider" />

      <div className="section-title">
        <h3>Reading notes</h3>
      </div>
      {reading.length === 0 && (
        <p className="empty-state">
          No entries yet — add a markdown file to content/reading/ to start the log.
        </p>
      )}
      {reading.map((r) => (
        <article className="entry" key={r.slug}>
          <div className="entry-head">
            <h3>{r.title}</h3>
            <span className="entry-date">{r.date}</span>
          </div>
          <div className="entry-body" dangerouslySetInnerHTML={{ __html: r.html }} />
        </article>
      ))}
    </Layout>
  );
}
