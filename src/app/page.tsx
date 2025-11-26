"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-2xl z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-lg"></div> */}
              <h1 className="text-xl font-semibold tracking-tight">
                AJS Professional Management Services
              </h1>
            </div>
            <div className="hidden md:flex space-x-10 text-sm">
              <a
                href="#services"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#approach"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Approach
              </a>
              <a
                href="#contact"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="text-sm text-zinc-400">
                Data Analysis & Management Solutions
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
              Transform Data Into
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                Strategic Advantage
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Expert data analysis services, professional management, and
              specialized training to empower your organization with actionable
              insights.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-20">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-sm text-zinc-400">
                  Statistical Analysis
                </span>
              </div>
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-sm text-zinc-400">
                  Predictive Modeling
                </span>
              </div>
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-sm text-zinc-400">
                  Data Visualization
                </span>
              </div>
            </div>
          </div>

          {/* Animated orbs */}
          <div className="flex justify-center gap-8 mt-16">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Comprehensive data solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Expert Data Analysis
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Transform raw data into meaningful insights through advanced
                  statistical analysis, pattern recognition, and comprehensive
                  reporting.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Analytics Management
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  End-to-end management of data analytics workflows,
                  infrastructure, and strategic implementation of data-driven
                  solutions.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  👥
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert Analysts</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Access to specialized data analysts with deep expertise across
                  industries and analytical methodologies.
                </p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  📈
                </div>
                <h3 className="text-2xl font-bold mb-4">Predictive Modeling</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Leverage machine learning and statistical modeling to forecast
                  trends and drive proactive decision-making.
                </p>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  💡
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Visualization</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Create compelling visual narratives that make complex data
                  accessible and actionable for stakeholders.
                </p>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  🎓
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Training & Education
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Empower your team with data analysis skills through customized
                  training programs and one-on-one mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section
        id="approach"
        className="relative py-32 px-6 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Approach
                </span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                We combine technical excellence with business acumen to deliver
                data solutions that drive real results.
              </p>

              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Discovery",
                    desc: "Understanding your data landscape and business objectives",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    number: "02",
                    title: "Analysis",
                    desc: "Deep dive into data patterns, trends, and opportunities",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    number: "03",
                    title: "Implementation",
                    desc: "Deploying solutions with precision and care",
                    color: "from-indigo-500 to-indigo-600",
                  },
                  {
                    number: "04",
                    title: "Optimization",
                    desc: "Continuous improvement and adaptation",
                    color: "from-pink-500 to-pink-600",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.number}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
                <div className="space-y-8">
                  {/* Animated data bars
                  {[80, 95, 70, 88, 92].map((width, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm text-zinc-400">
                        <span>Metric {index + 1}</span>
                        <span>{width}%</span>
                      </div>
                      <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isVisible ? `${width}%` : "0%" }}
                        ></div>
                      </div>
                    </div>
                  ))} */}
                  <div className="grid grid-cols-2 gap-6 pt-8">
                    <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                        500+
                      </div>
                      <div className="text-sm text-zinc-400">
                        Current clients
                      </div>
                    </div>
                    <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                        98%
                      </div>
                      <div className="text-sm text-zinc-400">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                value: "5+",
                label: "Years Experience",
                color: "from-blue-500 to-blue-600",
              },
              {
                value: "500+",
                label: "Happy Clients",
                color: "from-purple-500 to-purple-600",
              },
              {
                value: "50+",
                label: "Enterprise Clients",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                value: "24/7",
                label: "Support Available",
                color: "from-pink-500 to-pink-600",
              },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                  <div
                    className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 text-sm tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative border-t border-white/5 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <h3 className="text-xl font-semibold">AJS</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Professional Management Services specializing in data analysis,
                strategic insights, and analytical excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm tracking-widest uppercase text-zinc-500">
                Navigation
              </h4>
              <div className="space-y-3">
                <a
                  href="#services"
                  className="block text-zinc-400 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#approach"
                  className="block text-zinc-400 hover:text-white transition-colors"
                >
                  Our Approach
                </a>
                <a
                  href="#contact"
                  className="block text-zinc-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-sm tracking-widest uppercase text-zinc-500">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:contact@ajs-services.com"
                  className="block text-zinc-400 hover:text-white transition-colors"
                >
                  contact@ajs-services.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="block text-zinc-400 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
                <div className="text-zinc-400 text-sm">
                  123 Business Ave, Suite 100
                  <br />
                  City, State 12345
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-zinc-500 text-sm">
                © 2025 AJS Professional Management Services. All rights
                reserved.
              </p>
              <div className="flex space-x-8 text-sm">
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
