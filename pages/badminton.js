import Layout from '../components/Layout';
import SettleCurve from '../components/SettleCurve';
import { getCollection } from '../lib/content';

export async function getStaticProps() {
  const training = getCollection('training');
  const videos = getCollection('videos');
  return { props: { training, videos } };
}

export default function Badminton({ training, videos }) {
  return (
    <Layout title="Badminton" description="Badminton background, training log, and match highlights.">
      <div className="section-title">
        <SettleCurve variant="mark" />
        <h2>Badminton</h2>
      </div>

      <p>
        [Playing history — years active competitively, level reached, state-level
        achievements.] I no longer compete on the tournament circuit, but badminton is
        still a serious part of my routine — I train, play, and work on conditioning in
        the gym regularly.
      </p>

      <hr className="divider" />

      <div className="section-title">
        <h3>Training log</h3>
      </div>
      {training.length === 0 && (
        <p className="empty-state">
          No entries yet — add a markdown file to content/training/ to start the log.
        </p>
      )}
      {training.map((t) => (
        <article className="entry" key={t.slug}>
          <div className="entry-head">
            <h3>{t.title}</h3>
            <span className="entry-date">{t.date}</span>
          </div>
          <div className="entry-body" dangerouslySetInnerHTML={{ __html: t.html }} />
        </article>
      ))}

      <hr className="divider" />

      <div className="section-title">
        <h3>Video highlights</h3>
      </div>
      {videos.length === 0 && (
        <p className="empty-state">
          No clips yet — add a markdown file to content/videos/ with a youtube field to
          embed a highlight.
        </p>
      )}
      {videos.map((v) => (
        <article className="entry" key={v.slug}>
          <div className="entry-head">
            <h3>{v.title}</h3>
            <span className="entry-date">{v.date}</span>
          </div>
          <div className="entry-body" dangerouslySetInnerHTML={{ __html: v.html }} />
          {v.youtube && (
            <div className="video-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${v.youtube}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </article>
      ))}
    </Layout>
  );
}
