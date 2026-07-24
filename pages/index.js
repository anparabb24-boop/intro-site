import Layout from '../components/Layout';
import SettleCurve from '../components/SettleCurve';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Home">
      <section className="hero">
        <p className="eyebrow"><SettleCurve variant="mark" /> Electrical Engineering · VJTI</p>
        <h1>Your Name</h1>
        <p className="lede">
          Third-year BTech Electrical Engineering student at VJTI, working toward
          research in control systems and applied mathematics. Former state-level
          badminton player — still training, still competitive in spirit, just not on
          the tournament circuit anymore.
        </p>
        <SettleCurve variant="hero" />
        <p className="mono">a system, disturbed, finding its way back to steady</p>
      </section>

      <hr className="divider" />

      <div className="card-grid">
        <div className="card">
          <Link className="card-link" href="/research">
            <h3>Research</h3>
            <p>Control systems, math, and the projects I'm working through.</p>
          </Link>
        </div>
        <div className="card">
          <Link className="card-link" href="/badminton">
            <h3>Badminton</h3>
            <p>State-level history, current training, and match highlights.</p>
          </Link>
        </div>
        <div className="card">
          <Link className="card-link" href="/now">
            <h3>Now</h3>
            <p>What I'm reading, building, and training on this month.</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
