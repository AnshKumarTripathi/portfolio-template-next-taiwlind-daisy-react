import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Details and Message */}
          <div className="bg-base-100 p-4 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="mb-4 space-y-1">
              <p>Email: your.email@example.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: Your City, Country</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Message</h4>
              <p className="text-base-content/90">
                I'm passionate about creating innovative solutions and helping businesses grow through technology. 
                Feel free to reach out for collaborations or just to say hello!
              </p>
            </div>
          </div>

          {/* Automation Tools and Startups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Automation Tools */}
            <div className="bg-base-100 p-4 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Recent Automation Tools</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/automation-tools/social-media-scheduler" className="hover:text-primary">
                    Social Media Scheduler
                  </Link>
                </li>
                <li>
                  <Link href="/automation-tools/data-backup-tool" className="hover:text-primary">
                    Data Backup Tool
                  </Link>
                </li>
                <li>
                  <Link href="/automation-tools/content-generator" className="hover:text-primary">
                    AI Content Generator
                  </Link>
                </li>
                <li>
                  <Link href="/automation-tools/email-marketing" className="hover:text-primary">
                    Email Marketing Automation
                  </Link>
                </li>
                <li>
                  <Link href="/automation-tools/seo-analyzer" className="hover:text-primary">
                    SEO Analyzer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Startups */}
            <div className="bg-base-100 p-4 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Popular Startups</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/startups/eco-tech" className="hover:text-primary">
                    EcoTech Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/startups/health-tech" className="hover:text-primary">
                    HealthTech Innovations
                  </Link>
                </li>
                <li>
                  <Link href="/startups/fintech" className="hover:text-primary">
                    FinTech Revolution
                  </Link>
                </li>
                <li>
                  <Link href="/startups/edtech" className="hover:text-primary">
                    EduTech Platform
                  </Link>
                </li>
                <li>
                  <Link href="/startups/ai-startup" className="hover:text-primary">
                    AI Startup Hub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 text-center">
          <p className="text-base-content/80">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 