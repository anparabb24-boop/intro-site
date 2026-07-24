import Layout from '../components/Layout';
import SettleCurve from '../components/SettleCurve';

export default function About() {
  return (
    <Layout title="About" description="About Your Name — engineering, research interests, and badminton background.">
      <div className="section-title">
        <SettleCurve variant="mark" />
        <h2>About</h2>
      </div>

      <p>
        I'm a third-year BTech Electrical Engineering student at VJTI, Mumbai, 19 years
        old. Most of my time outside coursework goes into 3 things: control systems, mathematics, and badminton.
      </p>

      <h3>Engineering</h3>
      <p>
        What draws me to control systems specifically is the math itself — the
        structure of it, the way stability, feedback, and dynamics all sit on precise,
        provable ground. I've spent time exploring this through simulation rather than
        just derivation: modeling the Lorenz system to get an intuition for chaotic
        dynamics, and building electrodynamics simulations to actually watch radiation
        fields propagate instead of just working through the equations on paper.
        I'm currently also working on a research paper — more on that once it's
        published.
      </p>

      <h3>Badminton</h3>
      <p>
        I've competed for 10 years, reaching state-level quarterfinals on multiple
        occasions. I don't compete on the tournament circuit anymore, but the sport is
        still a serious part of my routine — I train regularly and work on
        conditioning in the gym.
      </p>

      <h3>Why both</h3>
      <p>
        I won't pretend there's some grand unifying theory connecting the two — they're
        just both things I take seriously, for their own reasons. If anything carries
        over, it's less a specific mindset and more just the habit of showing up and
        putting in the repetition, whether that's on the court or in a proof.
      </p>

      <hr className="divider" />
      <p className="mono">This page is revised every 6–12 months, not rewritten from scratch.</p>
    </Layout>
  );
}
