import Layout from '../components/Layout';
import SettleCurve from '../components/SettleCurve';

export default function Contact() {
  return (
    <Layout title="Contact" description="Get in touch, resume, and links.">
      <div className="section-title">
        <SettleCurve variant="mark" />
        <h2>Contact</h2>
      </div>

      <p>
        Best way to reach me is email. I'm also on LinkedIn and GitHub — links below.
      </p>

      <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'var(--font-mono)', fontSize: '0.95rem', lineHeight: 2.2 }}>
        <li><a href="mailto:anparab_b24@ee.vjti.ac.in">anparab_b24@ee.vjti.ac.in</a></li>
        <li><a href="https://linkedin.com/in/arya-parab-0a7418329">LinkedIn →</a></li>
        <li><a href="https://github.com/anparabb24-boop">GitHub →</a></li>
        <li><a href="/intro-site/public/resume.pdf">Resume (PDF) →</a></li>
      </ul>

    </Layout>
  );
}
