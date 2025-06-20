import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-secondary-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">UMDAC</span>
            </Link>
            <p className="mt-4 text-sm text-secondary-600 max-w-md">
              Empowering students with data analytics skills and fostering a community of data enthusiasts at University Malaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              {['About', 'Events', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-base text-secondary-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-base text-secondary-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-secondary-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-secondary-600">
              © {currentYear} UMDAC. All rights reserved.
            </p>
            <p className="mt-4 md:mt-0 text-sm text-secondary-500">
              Made with ❤️ by UMDAC Tech Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 