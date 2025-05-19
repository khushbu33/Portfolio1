export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#5E3A87] to-[#7C5BA0] text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Left Side: Branding and Text */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-3xl font-semibold text-white tracking-tight">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-200">
              Open to work, internships, and learning opportunities.
            </p>
            <a
              href="mailto:khushbk2004@email.com"
              className="inline-block text-[#EADDF2] hover:text-white transition-colors duration-300 font-semibold text-lg"
              aria-label="Email Khushbu Kumari"
            >
              khushbk2004@email.com
            </a>
          </div>

          {/* Right Side: Social Links */}
          <div className="flex space-x-8">
            {/* GitHub */}
            <a
              href="https://github.com/khushbu33"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="GitHub Profile"
            >
              <svg
                className="h-8 w-8 fill-current text-[#D9CBE8] hover:text-white transition-colors duration-300"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.69.91.69 1.84 0 1.33-.01 2.4-.01 2.72 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/khushbu-kumari-00476a295"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="h-8 w-8 fill-current text-[#D9CBE8] hover:text-white transition-colors duration-300"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 3.9 0 4.6 2.6 4.6 6v9h-4v-8c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2H8V8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/girlwithnojob3127"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Instagram Profile"
            >
              <svg
                className="h-8 w-8 fill-current text-[#D9CBE8] hover:text-white transition-colors duration-300"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-300 mt-12 border-t border-[#a187c5] pt-4">
          © {new Date().getFullYear()} Khushbu Kumari. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
