import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 border-t border-primary-700/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <img
                src="https://cdn.prod.website-files.com/66f8f154e9e4ff2af1e8e3f5/66f8faf031bbec4cdf3e713a_Copy%20of%20Transparent%20Background-p-500.png"
                alt="UMDAC Logo"
                className="w-20 h-20 object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-primary-200 max-w-md font-mono">
              // Empowering students with data analytics skills and fostering<br/>
              // a community of data enthusiasts at University Malaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
              QUICK_LINKS[]
            </h3>
            <ul className="mt-4 space-y-4">
              {['About', 'Events', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-base text-primary-200 hover:text-primary-300 transition-colors duration-300 font-mono"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
              LEGAL_DOCS[]
            </h3>
            <ul className="mt-4 space-y-4">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-base text-primary-200 hover:text-primary-300 transition-colors duration-300 font-mono"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-primary-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-primary-300 font-mono">
              © {currentYear} UMDAC. All rights reserved.
            </p>
            <p className="mt-4 md:mt-0 text-sm text-primary-400 font-mono">
              console.log("Made with ❤️ by UMDAC Tech Team");
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 