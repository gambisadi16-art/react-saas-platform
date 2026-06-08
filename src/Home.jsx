import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-cyan-400 transition">
            Flow<span className="text-cyan-400">Sync</span>
          </Link>

          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition">Features</a>
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
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full border border-cyan-500/20">
            🚀 Trusted by 10,000+ Teams
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Manage Your Team
            <br />
            <span className="text-cyan-400">
              Faster Than Ever
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Streamline projects, collaborate effortlessly,
            and increase productivity with one powerful platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition">
              Start Free Trial
            </button>

            <button className="border border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-900 transition">
              Watch Demo
            </button>
          </div>

          {/* Dashboard Mockup */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20"></div>

            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl">
                  <h3 className="text-slate-400">Revenue</h3>
                  <p className="text-4xl font-bold mt-2">$128K</p>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl">
                  <h3 className="text-slate-400">Customers</h3>
                  <p className="text-4xl font-bold mt-2">12.4K</p>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl">
                  <h3 className="text-slate-400">Growth</h3>
                  <p className="text-4xl font-bold mt-2 text-green-400">
                    +42%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            Powerful Features
          </h2>

          <p className="text-slate-400 text-center mt-4">
            Everything your team needs to succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                text: "Optimized performance for smooth workflows."
              },
              {
                icon: "🔒",
                title: "Secure",
                text: "Enterprise-grade security and protection."
              },
              {
                icon: "📊",
                title: "Analytics",
                text: "Track progress with real-time insights."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition"
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="text-slate-400 mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            Pricing Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: "Starter",
                price: "$19"
              },
              {
                name: "Pro",
                price: "$49"
              },
              {
                name: "Enterprise",
                price: "$99"
              }
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                <p className="text-5xl font-bold mt-6">
                  {plan.price}
                </p>

                <p className="text-slate-400 mt-2">
                  per month
                </p>

                <Link
                  to="/pricing"
                  className="mt-8 w-full inline-block bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold transition"
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View all pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl"
              >
                <p className="text-slate-400">
                  "This platform completely transformed how our
                  team collaborates and manages projects."
                </p>

                <div className="mt-6">
                  <h4 className="font-bold">
                    Customer {item}
                  </h4>
                  <p className="text-slate-500">
                    CEO, Startup
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Grow Faster?
          </h2>

          <p className="mt-4 text-lg">
            Join thousands of teams already using FlowSync.
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
