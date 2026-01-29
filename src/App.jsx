import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [showGoTop, setShowGoTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold">L</div>
            <span className="text-lg font-bold">LuxeMarket <span className="text-slate-400 font-normal">Showcase</span></span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-white transition text-sm">Features</a>
            <a href="#showcase" className="text-slate-300 hover:text-white transition text-sm">Showcase</a>
            <a href="#tech" className="text-slate-300 hover:text-white transition text-sm">Tech Stack</a>
            <a href="#about" className="text-slate-300 hover:text-white transition text-sm">About</a>

            <a
              href="https://superdeveloper1.github.io/luxemarket/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition text-sm"
            >
              Live Demo
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-slate-900/50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Luxury Retail.
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                LuxeMarket is a high-performance e-commerce platform built with React 18, Vite, and Tailwind CSS. Features include admin dashboard with product management, color variants with visual picker, daily deals system, home page customization, and complete shopping cart with checkout flow.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://superdeveloper1.github.io/luxemarket/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition flex items-center gap-2"
                >
                  Launch Storefront <span>↗</span>
                </a>
                <a 
                  href="https://superdeveloper1.github.io/luxemarket/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-full font-semibold transition flex items-center gap-2"
                >
                  Admin Panel <span>⚙</span>
                </a>
                <a 
                  href="https://github.com/superdeveloper1/luxemarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-full font-semibold transition flex items-center gap-2"
                >
                  GitHub <span>⚡</span>
                </a>
              </div>
            </div>

            {/* Right Showcase - Real Images */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                {/* Laptop mockup */}
                <div className="bg-slate-700 rounded-lg overflow-hidden border border-slate-600 mb-4 shadow-lg">
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-3 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-400 ml-2">LuxeMarket Store</span>
                  </div>
                  <div className="bg-slate-800 p-4 h-56 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop" 
                      alt="E-commerce Store" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>

                {/* Product grid preview */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { img: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=200&h=200&fit=crop', name: 'Headphones' },
                    { img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=200&h=200&fit=crop', name: 'Watches' },
                    { img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=200&h=200&fit=crop', name: 'Bags' },
                    { img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=200&h=200&fit=crop', name: 'Glasses' }
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-slate-600 hover:border-blue-400 transition h-24">
                      <img 
                        src={item.img} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">The Tech Stack</h2>
            <p className="text-xl text-slate-400">Leveraging modern web technologies for a reliable and scalable foundation.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'React 18', desc: 'Component Architecture', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&h=400&fit=crop' },
              { title: 'Vite', desc: 'Lightning-fast Build Tool', img: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=400&h=400&fit=crop' },
              { title: 'Tailwind CSS', desc: 'Modern Utility Styling', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=400&h=400&fit=crop' },
              { title: 'LocalStorage', desc: 'State Persistence', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=400&fit=crop' }
            ].map((tech, i) => (
              <div key={i} className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500 transition text-center overflow-hidden">
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-slate-700">
                  <img 
                    src={tech.img} 
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-slate-400 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Product Management', desc: 'Admin dashboard for managing inventory and variants' },
              { title: 'Color Variants', desc: 'Visual picker for product color selection' },
              { title: 'Daily Deals', desc: 'Promotional system for featured products' },
              { title: 'Shopping Cart', desc: 'Full cart management with checkout flow' },
              { title: 'Responsive Design', desc: 'Perfect on desktop, tablet, and mobile' },
              { title: 'Fast Performance', desc: 'Optimized with Vite for lightning speed' }
            ].map((f, i) => (
              <div key={i} className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500 transition">
                <h3 className="font-semibold mb-2 text-lg">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Platform Showcase</h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-12 text-center">
            <p className="text-slate-400 mb-6">Experience the full LuxeMarket platform</p>
            <a
              href="https://superdeveloper1.github.io/luxemarket/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm <strong>Isaias Geronimo</strong>, a Frontend Developer specialized in JavaScript, React, and responsive UI development. 
                With a focus on clean code and polished user interfaces, I build modern web applications that prioritize performance and accessibility.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <span className="text-blue-400">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Education</h4>
                    <p className="text-slate-400 text-sm">AAS, Computer Science — Monroe College</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <span className="text-blue-400">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Experience</h4>
                    <p className="text-slate-400 text-sm">Frontend Developer at LuxeMarket Project & Generation USA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vite', 'JavaScript (ES6+)', 'Tailwind CSS', 'Git', 'HTML5', 'CSS3', 'UI/UX', 'Performance Optimization'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold">L</div>
              <span className="text-lg font-bold">LuxeMarket <span className="text-slate-400 font-normal">Showcase</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              A premium marketplace showcase built with modern web technologies. Focus on performance, aesthetics, and user experience.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-slate-500">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:isaiasgeronimo12@gmail.com" className="hover:text-white transition">isaiasgeronimo12@gmail.com</a></li>
                <li>Rockaway Park, NY</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-slate-500">Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://github.com/superdeveloper1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
                <li><a href="https://isaiasgeronimo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
          <p>© 2026 LuxeMarket. Developed by Isaias Geronimo.</p>
        </div>
      </footer>

      {/* Go to Top Button */}
      {showGoTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 z-50"
          aria-label="Go to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
