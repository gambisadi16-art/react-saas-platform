import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$19',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 projects',
        '2GB storage',
        'Basic analytics',
        'Email support',
        '1 team member'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'For growing teams and businesses',
      features: [
        'Unlimited projects',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'Up to 10 team members',
        'Custom integrations',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'For large-scale operations',
      features: [
        'Everything in Pro',
        'Unlimited storage',
        'Real-time analytics',
        '24/7 phone support',
        'Unlimited team members',
        'Advanced security',
        'SSO & SAML',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
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
            <Link to="/features" className="hover:text-cyan-400 transition">Features</Link>
            <Link to="/pricing" className="text-cyan-400">Pricing</Link>
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
            Simple, Transparent
            <br />
            <span className="text-cyan-400">
              Pricing for Everyone
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your team. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl transition ${plan.popular
                    ? 'bg-gradient-to-b from-cyan-600/20 to-slate-900 border-2 border-cyan-500 shadow-2xl md:scale-105'
                    : 'bg-slate-900 border border-slate-800 hover:border-slate-700'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-cyan-500 text-slate-950 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    {plan.name}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {plan.description}
                  </p>

                  <div className="mt-8">
                    <p className="text-5xl font-bold">
                      {plan.price}
                    </p>
                    <p className="text-slate-400 mt-2">
                      per month
                    </p>
                  </div>

                  <button
                    className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${plan.popular
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                        : 'border border-slate-700 hover:bg-slate-800'
                      }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="mt-8 border-t border-slate-800 pt-8">
                    <p className="text-sm font-semibold text-slate-300 mb-6">
                      What's included:
                    </p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'Can I switch plans anytime?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, all plans come with a 14-day free trial. No credit card required to get started.'
              },
              {
                question: 'Do you offer discounts for annual billing?',
                answer: 'Yes! Get 20% off when you choose annual billing instead of monthly.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Get Started?
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
