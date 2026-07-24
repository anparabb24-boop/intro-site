import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/badminton', label: 'Badminton' },
  { href: '/now', label: 'Now' },
  { href: '/contact', label: 'Contact' },
];

const SITE_NAME = 'Arya Parab';

export default function Layout({ children, title, description }) {
  const router = useRouter();
  const pageTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || 'Electrical engineering, control systems, and badminton.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="site-header">
        <div className="wrap">
          <Link href="/" className="name">{SITE_NAME}</Link>
          <nav>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={router.pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap">{children}</main>

      <footer className="site-footer">
        <div className="wrap">
          <span className="mono">© {new Date().getFullYear()} {SITE_NAME}</span>
          <a href="/contact">Get in touch →</a>
        </div>
      </footer>
    </>
  );
}
