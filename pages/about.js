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
        [I am a 3rd-year Electrical Engineering student at VJTI Mumbai, driven by a fascination with the mathematical mechanics that govern dynamic systems. My technical focus lies at the intersection of Control Systems, Optimization Theory, and AI/ML for Science—exploring how mathematical models and machine learning can solve complex physical problems, optimize performance, and drive automation.
Whether analyzing transformation matrices, modeling feedback loops, or implementing computer vision models, I approach engineering with a commitment to analytical depth and technical precision.]
      </p>

      <h3>Badminton</h3>
      <p>
        [Discipline is multi-dimensional. As a competitive badminton player who has competed in state-level tournaments, I view sport through the same lens as engineering: dynamic strategy, instantaneous decision-making, and continuous optimization under pressure.
My week is structured around high-intensity badminton sessions and rigorous strength training at the gym. Athletic training isn't just a hobby—it's the foundation of my focus, resilience, and drive.]
      </p>

      <h3>Why both</h3>
      <p>
        [I believe that the mindset of an athlete and the analytical rigor of an engineer build on each other. I am constantly pushing the boundaries of what I can build, learn, and achieve—synthesizing high-level academics with physical excellence to continuously evolve into the best version of myself.]
      </p>

      <hr className="divider" />
      <p className="mono">This page is revised every 6–12 months, not rewritten from scratch.</p>
    </Layout>
  );
}
