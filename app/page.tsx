export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Privacy Tool for Developers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Are your coding profiles<br />
          <span className="text-[#58a6ff]">accidentally public?</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Scan GitHub, GitLab, Bitbucket, LeetCode and more to instantly detect privacy leaks across your developer profiles before recruiters or strangers find them.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Scanning — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* Platform badges */}
      <section className="mb-20">
        <p className="text-center text-[#8b949e] text-sm mb-6 uppercase tracking-widest">Platforms scanned</p>
        <div className="flex flex-wrap justify-center gap-3">
          {['GitHub', 'GitLab', 'Bitbucket', 'LeetCode', 'HackerRank', 'Codeforces', 'CodePen', 'Stack Overflow'].map((p) => (
            <span key={p} className="bg-[#161b22] border border-[#30363d] rounded-md px-4 py-2 text-sm text-[#c9d1d9]">{p}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Scan 8+ coding platforms',
              'Real-time privacy alerts',
              'Weekly automated re-scans',
              'Detailed exposure report',
              'Email notifications'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does the scanner work?</h3>
            <p className="text-[#8b949e] text-sm">We use profile detection algorithms and public API endpoints to check the visibility settings of your accounts across major coding platforms, flagging anything that appears publicly accessible.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Do you store my credentials?</h3>
            <p className="text-[#8b949e] text-sm">Never. We only need your public usernames to perform scans. No passwords or tokens are ever requested or stored.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel your subscription at any time from your billing portal with no questions asked and no cancellation fees.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} Profile Privacy Checker. All rights reserved.</p>
      </footer>
    </main>
  )
}
