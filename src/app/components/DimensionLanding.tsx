import React, { useState, useEffect } from 'react';
import { ChevronRight, Github, Users, Cloud, Zap, Code, MessageCircle, ArrowRight, Sparkles, Star, Play, CheckCircle } from 'lucide-react';

const DimensionLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const features = [
    { icon: MessageCircle, title: "Real-time Chat", desc: "Seamlessly communicate with your team", gradient: "from-blue-500 to-blue-600" },
    { icon: Code, title: "Code Together", desc: "Collaborative code editor with real-time sync", gradient: "from-purple-500 to-purple-600" },
    { icon: Cloud, title: "Cloud Deploy", desc: "Deploy applications instantly to global infrastructure", gradient: "from-green-500 to-green-600" },
    { icon: Users, title: "Team Management", desc: "Organize teams and manage permissions", gradient: "from-red-500 to-red-600" },
    { icon: Zap, title: "Lightning Fast", desc: "Sub-second response times guaranteed", gradient: "from-yellow-500 to-orange-500" },
    { icon: Github, title: "Git Integration", desc: "Native integration with GitHub, GitLab, and Bitbucket", gradient: "from-indigo-500 to-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full animate-pulse opacity-60"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 5)}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          />
        ))}
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full opacity-40 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full opacity-40 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full opacity-30 blur-3xl" />
      </div>

      {/* Enhanced Header */}
      <header className="relative z-10 px-6 py-8 backdrop-blur-sm bg-black/20 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dimension
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span className="font-medium">Get Started</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full border border-blue-200 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Zap className="text-blue-600 animate-pulse" size={16} />
              <span className="text-blue-600 text-sm font-semibold">Now in Beta - Join Early Access</span>
              <Star className="text-yellow-500" size={14} />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
              The New Standard for
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Collaboration
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Chat, code, cloud, deployments, and more. Experience the most complete developer platform 
              that brings your entire team together in one <span className="font-semibold text-blue-400">seamless workspace</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="relative z-10" size={20} />
                <span className="text-lg font-bold relative z-10">Start Building</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <button className="group px-10 py-4 border-2 border-gray-600 text-gray-300 rounded-2xl hover:border-blue-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 flex items-center space-x-3">
                <Github size={20} />
                <span className="text-lg font-semibold">View on GitHub</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Animated trust indicators */}
            <div className="pt-12">
              <p className="text-gray-400 mb-6 font-medium">Trusted by developers at</p>
              <div className="flex justify-center items-center space-x-12">
                {['Microsoft', 'Google', 'Meta', 'Netflix'].map((company, index) => (
                  <div 
                    key={company}
                    className={`text-2xl font-bold text-gray-500 hover:text-gray-300 transition-all duration-500 hover:scale-110 cursor-pointer ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Features Section */}
      <section id="features" className="relative z-10 px-6 py-24 bg-gradient-to-r from-black/40 to-purple-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Everything You Need,
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                All in One Place
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stop juggling multiple tools. Dimension brings together all the features 
              modern development teams need to <span className="font-semibold text-purple-400">build, deploy, and scale</span> applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-blue-500 hover:scale-105 transform ${
                  activeFeature === index ? 'ring-2 ring-blue-400 shadow-blue-500/20 scale-105' : ''
                }`}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {feature.desc}
                </p>
                <div className="flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-medium">Available now</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative z-10 px-6 py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform Your 
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Development Workflow?
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Join <span className="font-bold text-yellow-300">10,000+</span> developers who have already made the switch to Dimension.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-4 bg-white text-blue-600 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center justify-center space-x-3">
              <Sparkles size={20} />
              <span>Start Free Trial</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border-2 border-white/30 text-white rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-bold text-lg flex items-center justify-center space-x-3">
              <Play size={20} />
              <span>Schedule Demo</span>
            </button>
          </div>
          
          {/* Social proof */}
          <div className="mt-16 flex justify-center items-center space-x-8 opacity-70">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-300" size={20} />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Users className="text-green-300" size={20} />
              <span className="font-medium">10K+ Active Users</span>
            </div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Zap className="text-blue-300" size={20} />
              <span className="font-medium">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 px-6 py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white" size={20} />
                </div>
                <span className="text-2xl font-bold">Dimension</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The complete collaboration platform for modern development teams.
              </p>
              <div className="flex space-x-4">
                {[Github, MessageCircle, Users].map((Icon, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
            
            {[
              { title: 'Product', items: ['Features', 'Pricing', 'Security', 'Enterprise'] },
              { title: 'Company', items: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Support', items: ['Help Center', 'Community', 'Contact', 'Status'] }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-6 text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Dimension. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">All systems operational</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DimensionLanding;