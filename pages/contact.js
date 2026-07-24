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
        <li><a href="mailto:you@example.com">you@example.com</a></li>
        <li><a href="https://linkedin.com/in/yourhandle">LinkedIn →</a></li>
        <li><a href="https://github.com/yourhandle">GitHub →</a></li>
        <li><a href="/resume.pdf">Resume (PDF) →</a></li>
      </ul>

      <p className="mono">[Replace the placeholders above with your real links, and drop your resume PDF into /public/resume.pdf]</p>
    </Layout>
  );
}
