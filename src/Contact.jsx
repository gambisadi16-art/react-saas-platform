import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@flowsync.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "Chat with us",
      description: "Get instant support from our team members"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us during business hours (9 AM - 6 PM EST)"
    },
    {
      icon: "🏢",
      title: "Visit Us",
      value: "San Francisco, CA",
      description: "100 Market Street, Suite 500"
    }
  ];

  const faqs = [
    {
      question: "What's your average response time?",
      answer: "We typically respond to emails within 2-4 hours during business days. Chat support is available 24/7 for urgent issues."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes! Phone support is available for Pro and Enterprise plans. Starter plan customers can reach us via email or chat."
    },
    {
      question: "Can I schedule a demo?",
      answer: "Absolutely! Click 'Schedule a Demo' or mention it in your message and our team will get back to you within one business day."
    },
    {
      question: "What's your support language policy?",
      answer: "We provide support in English, Spanish, and French. Other languages available for Enterprise customers."
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
            <Link to="/pricing" className="hover:text-cyan-400 transition">Pricing</Link>
            <Link to="/reviews" className="hover:text-cyan-400 transition">Reviews</Link>
            <Link to="/contact" className="text-cyan-400">Contact</Link>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-medium transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Get In Touch
            <br />
            <span className="text-cyan-400">
              We're Here to Help
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{method.value}</p>
                <p className="text-slate-400 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-slate-400">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none transition text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none transition text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none transition text-white"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none transition text-white resize-none"
                      placeholder="Tell us what we can help you with..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info & CTA */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Quick Links</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-3">Schedule a Demo</h3>
                  <p className="text-slate-400 mb-4">
                    See FlowSync in action with a personalized walkthrough from our team.
                  </p>
                  <button className="w-full bg-slate-800 hover:bg-slate-700 py-2 rounded-lg transition font-semibold">
                    Book a Demo
                  </button>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-3">Documentation</h3>
                  <p className="text-slate-400 mb-4">
                    Check out our comprehensive guides and API documentation.
                  </p>
                  <button className="w-full bg-slate-800 hover:bg-slate-700 py-2 rounded-lg transition font-semibold">
                    View Docs
                  </button>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-3">Community</h3>
                  <p className="text-slate-400 mb-4">
                    Join our community forum to connect with other users and get help.
                  </p>
                  <button className="w-full bg-slate-800 hover:bg-slate-700 py-2 rounded-lg transition font-semibold">
                    Join Community
                  </button>
                </div>

                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-3">Start Free Trial</h3>
                  <p className="mb-4">
                    14 days free. No credit card required. Full access to all features.
                  </p>
                  <button className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-slate-100 transition">
                    Try Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Can't find what you're looking for?</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3 text-cyan-400">
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

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 FlowSync. All rights reserved.
      </footer>
    </div>
  );
}
