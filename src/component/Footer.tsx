
const Footer = () => {
  return (
    <footer className="mt-16 bg-[#111827] text-gray-300">
      <div className="mx-auto max-w-7xl px-4">

        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Bangla <span className="text-red-500">News 24</span>
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-red-500"></div>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400">
              দেশের ও বিশ্বের সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা,
              বিনোদন, প্রযুক্তি এবং গুরুত্বপূর্ণ সব খবর একসাথে।
              সত্য ও নির্ভরযোগ্য সংবাদ পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-red-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-red-600 hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-red-600 hover:text-white"
              >
                ▶
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-red-600 hover:text-white"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative mb-5 inline-block text-lg font-bold text-white">
              গুরুত্বপূর্ণ লিংক
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 bg-red-500"></span>
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="transition hover:ml-1 hover:text-red-500"
                >
                  → হোম
                </a>
              </li>

              <li>
                <a
                  href="/news"
                  className="transition hover:ml-1 hover:text-red-500"
                >
                  → সর্বশেষ সংবাদ
                </a>
              </li>

              <li>
                <a
                  href="/category"
                  className="transition hover:ml-1 hover:text-red-500"
                >
                  → ক্যাটাগরি
                </a>
              </li>

              <li>
                <a
                  href="/profile"
                  className="transition hover:ml-1 hover:text-red-500"
                >
                  → আমার প্রোফাইল
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="relative mb-5 inline-block text-lg font-bold text-white">
              যোগাযোগ
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 bg-red-500"></span>
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <p className="leading-6 text-gray-400">
                  ঢাকা, বাংলাদেশ
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">✉️</span>
                <p className="text-gray-400">
                  info@banglanews24.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">📞</span>
                <p className="text-gray-400">
                  +880 1XXX-XXXXXX
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-gray-800 py-5 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-400">
              Bangla News 24
            </span>
            . All rights reserved.
          </p>

          <div className="flex justify-center gap-5">
            <a href="#" className="transition hover:text-red-500">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-red-500">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

