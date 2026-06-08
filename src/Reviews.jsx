import { Link } from 'react-router-dom';

export default function Reviews() {
  const reviews = [
    {
      author: "Sarah Johnson",
      company: "TechVision Inc.",
      role: "Product Manager",
      image: "👩‍💼",
      rating: 5,
      title: "Game-changer for our team",
      text: "FlowSync completely transformed how our team manages projects. The real-time collaboration features are incredible, and our productivity has increased by 40%. Highly recommended!"
    },
    {
      author: "Michael Chen",
      company: "StartupHub",
      role: "CEO",
      image: "👨‍💼",
      rating: 5,
      title: "Best investment for our startup",
      text: "We've tried multiple project management tools, but FlowSync stands out. The ease of use combined with powerful features makes it perfect for scaling teams. Customer support is exceptional!"
    },
    {
      author: "Emily Rodriguez",
      company: "Creative Studio Pro",
      role: "Design Lead",
      image: "👩‍🎨",
      rating: 5,
      title: "Finally, a tool designed for designers",
      text: "As a design-heavy team, we needed something intuitive and visually appealing. FlowSync's interface is beautiful, and the collaboration tools make working with developers seamless."
    },
    {
      author: "David Kim",
      company: "Global Consulting Group",
      role: "Operations Manager",
      image: "👨‍💻",
      rating: 5,
      title: "Perfect for remote teams",
      text: "Managing a distributed team across 5 time zones is challenging, but FlowSync makes it effortless. The async collaboration features and time zone support are fantastic."
    },
    {
      author: "Jessica Williams",
      company: "Digital Marketing Agency",
      role: "Agency Director",
      image: "👩‍💼",
      rating: 5,
      title: "Scaled our agency with confidence",
      text: "We scaled from 10 to 50 employees, and FlowSync scaled with us seamlessly. The API access allowed us to build custom integrations specific to our workflow."
    },
    {
      author: "Robert Martinez",
      company: "SaaS Company",
      role: "CTO",
      image: "👨‍💻",
      rating: 5,
      title: "Robust and reliable",
      text: "The technical architecture is solid. We've been running FlowSync for 2 years in production, and it's been rock-solid. Zero complaints about downtime or data integrity."
    },
    {
      author: "Laura Bennett",
      company: "Non-profit Organization",
      role: "Project Coordinator",
      image: "👩‍🔬",
      rating: 5,
      title: "Affordable for non-profits",
      text: "As a non-profit, budget is tight. FlowSync's pricing is reasonable, and they even offered us a discount. The free tier was perfect for us to get started."
    },
    {
      author: "James Wilson",
      company: "Educational Institution",
      role: "Professor",
      image: "👨‍🏫",
      rating: 5,
      title: "Great for academic collaboration",
      text: "I use FlowSync to manage my research team and student projects. The learning curve is minimal, and students love the intuitive interface. It's become essential to our workflow."
    },
    {
      author: "Amanda Foster",
      company: "Marketing Tech Startup",
      role: "VP Product",
      image: "👩‍💼",
      rating: 5,
      title: "Feature-rich and constantly improving",
      text: "What impressed me most is how the team listens to feedback. We've requested features and seen them implemented within weeks. The product roadmap is transparent and exciting."
    }
  ];

  const stats = [
    {
      number: "10,000+",
      label: "Active Teams",
      icon: "👥"
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: "⭐"
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      icon: "😊"
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "🎯"
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
            <Link to="/reviews" className="text-cyan-400">Reviews</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
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
            Loved By
            <br />
            <span className="text-cyan-400">
              Teams Worldwide
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg">
            See what thousands of users say about their experience with FlowSync.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <p className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">
                  {review.title}
                </h3>

                {/* Review Text */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-slate-800 pt-6 flex items-center gap-4">
                  <div className="text-4xl">
                    {review.image}
                  </div>
                  <div>
                    <p className="font-bold">
                      {review.author}
                    </p>
                    <p className="text-sm text-slate-400">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Watch What Others Say</h2>
            <p className="text-slate-400">Hear directly from our happy customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative">
                <div className="bg-slate-800 rounded-2xl p-8 aspect-video flex items-center justify-center cursor-pointer">
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition">
                      ▶️
                    </div>
                    <p className="text-slate-400">
                      Customer Testimonial {item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-slate-400">Companies that rely on FlowSync daily</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "TechVision", logo: "🏢" },
              { name: "StartupHub", logo: "🚀" },
              { name: "Creative Studio", logo: "🎨" },
              { name: "Global Consulting", logo: "🌍" }
            ].map((company, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition"
              >
                <div className="text-5xl mb-4">{company.logo}</div>
                <p className="font-semibold">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">
            Join Thousands of Happy Teams
          </h2>

          <p className="mt-4 text-lg">
            Experience the FlowSync difference with a 14-day free trial.
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
