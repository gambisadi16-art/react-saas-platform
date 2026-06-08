import { Link } from 'react-router-dom';

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure. Handle thousands of concurrent users without breaking a sweat.",
      details: ["Real-time updates", "Sub-millisecond latency", "Auto-scaling"]
    },
    {
      icon: "🔒",
      title: "Enterprise-Grade Security",
      description: "Your data is protected with industry-leading security standards and compliance certifications.",
      details: ["256-bit encryption", "SOC 2 Type II certified", "Regular security audits"]
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Gain deep insights into your team's productivity with comprehensive analytics and reporting tools.",
      details: ["Real-time dashboards", "Custom reports", "Data export"]
    },
    {
      icon: "🤝",
      title: "Seamless Collaboration",
      description: "Built for teams. Collaborate in real-time with comments, mentions, and shared workspaces.",
      details: ["Real-time sync", "Comments & mentions", "Activity feeds"]
    },
    {
      icon: "🔌",
      title: "Powerful Integrations",
      description: "Connect with your favorite tools. Integrate with 100+ applications and create custom workflows.",
      details: ["REST API", "Webhooks", "OAuth support"]
    },
    {
      icon: "📱",
      title: "Mobile First Design",
      description: "Manage projects on the go. Fully responsive design works perfectly on all devices.",
      details: ["iOS & Android apps", "Offline mode", "Push notifications"]
    }
  ];

  const comparison = [
    { feature: "Project Management", flowsync: true, competitor: false },
    { feature: "Team Collaboration", flowsync: true, competitor: true },
    { feature: "Real-time Analytics", flowsync: true, competitor: false },
    { feature: "API Access", flowsync: true, competitor: true },
    { feature: "Unlimited Storage", flowsync: true, competitor: false },
    { feature: "24/7 Support", flowsync: true, competitor: false },
    { feature: "Custom Integrations", flowsync: true, competitor: false },
    { feature: "White Label", flowsync: true, competitor: false }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-cyan-400 transition">
            Flow<span className="text-cyan-400">Sync</span>
          </Link>

          <div className="hidden md:flex gap-8 text-slate-300">
            <Link to="/features" className="text-cyan-400">Features</Link>
            <Link to="/pricing" className="hover:text-cyan-400 transition">Pricing</Link>
            <Link to="/reviews" className="hover:text-cyan-400 transition">Reviews</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-medium transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Powerful Features
            <br />
            <span className="text-cyan-400">
              Built for Scale
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to manage projects, collaborate with your team, and drive success.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-400 mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <span className="text-cyan-400">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How We Compare
            </h2>
            <p className="text-slate-400">
              FlowSync vs other project management tools
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-cyan-400">FlowSync</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-400">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-slate-800 ${index % 2 === 0 ? 'bg-slate-900/50' : ''}`}
                  >
                    <td className="px-6 py-4">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.flowsync ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : (
                        <span className="text-slate-600">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.competitor ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : (
                        <span className="text-slate-600">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Perfect For Any Industry
            </h2>
            <p className="text-slate-400">
              Whether you're a startup or enterprise, we have the right features for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Startups",
                description: "Scale your operations with our affordable, flexible plans designed for growing teams."
              },
              {
                icon: "🏢",
                title: "Enterprises",
                description: "Custom solutions with SSO, advanced security, and dedicated support for large organizations."
              },
              {
                icon: "🎓",
                title: "Education",
                description: "Empower students and teachers with collaborative tools built for academic success."
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">
            Experience the Power
          </h2>

          <p className="mt-4 text-lg">
            Start with a free trial and discover why thousands of teams trust FlowSync.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 FlowSync. All rights reserved.
      </footer>
    </div>
  );
}
