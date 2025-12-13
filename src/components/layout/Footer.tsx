import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/', label: 'Course' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const WHAT_WE_OFFER = [
  { to: '/exercise/vocabulary', label: '词汇' },
  { to: '/exercise/listening', label: '听力' },
  { to: '/exercise/reading', label: '阅读' },
  { to: '/exercise/writing', label: '写作' },
];

export function Footer() {
  return (
    <footer className="bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py12 md:py-16">
        <div className="flex flex-wrap justify-between gap-12">
          {/* brand */}
          <div className="max-w-40">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AEASy.</h2>
            <p className="text-sm text-gray-800">
              AI辅助高效学习，帮助学生快速提升词汇、听力、阅读、写作、口语五个题型。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-800 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* What We Offer */}
          {/* What We Offer */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">What We Offer</h3>
            <ul className="space-y-2">
              {WHAT_WE_OFFER.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-800 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>1232555555</li>
              <li>company.name@gmail.com</li>
              <li>WeChat</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <p className="text-center text-sm text-gray-800">
            AEASy © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
