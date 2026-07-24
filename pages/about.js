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
        [One paragraph: who you are, in your own voice — casual but precise. Third-year
        BTech Electrical at VJTI, 19, based in Mumbai.]
      </p>

      <h3>Engineering</h3>
      <p>
        [What pulled you toward EE, then specifically toward control systems and applied
        math. Mention any sub-areas you're drawn to — e.g. nonlinear control, estimation
        theory, optimization, robotics — whatever's actually true for you right now. This
        will evolve as your interests sharpen, and that's fine.]
      </p>

      <h3>Badminton</h3>
      <p>
        [Your competitive history — years playing, state-level achievement, what you
        reached. Then, plainly: you no longer compete, but you train and play seriously —
        badminton plus gym conditioning is a real part of your routine, not a footnote.]
      </p>

      <h3>Why both</h3>
      <p>
        [The paragraph that makes people remember you. Don't force a metaphor — if there's
        a genuine connection between how you approach training and how you approach
        problem-solving, say it plainly. If not, it's fine to just present both as two
        things you take seriously.]
      </p>

      <hr className="divider" />
      <p className="mono">This page is revised every 6–12 months, not rewritten from scratch.</p>
    </Layout>
  );
}
