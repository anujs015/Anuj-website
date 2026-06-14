import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-accent">
      <div className="container-narrow py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="font-display font-bold text-text mb-2">Anuj Sharma</p>
          <p className="text-sm text-grey">
            Presales Professional with a Consultant&apos;s Mindset.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-text mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-grey">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-primary transition-colors">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-primary transition-colors">
                Insights
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-text mb-3">Connect</p>
          <ul className="space-y-2 text-sm text-grey">
            <li>
              <a
                href="https://www.linkedin.com/in/anuj-sharma-892593276"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:anuj152002@example.com"
                className="hover:text-primary transition-colors"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-narrow py-6 border-t border-accent text-xs text-grey">
        © {new Date().getFullYear()} Anuj Sharma. Built with intention.
      </div>
    </footer>
  );
}
