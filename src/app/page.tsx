import React from 'react';
import { ChevronRight, Github, Users, Cloud, Zap, Code, MessageCircle } from 'lucide-react';

const DimensionLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 absolute top-32 left-32 animate-pulse" />
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 absolute top-64 right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 absolute bottom-48 left-64 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dimension
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
              <span>Get Started</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <Zap className="text-blue-600" size={16} />
              <span className="text-blue-600 text-sm font-medium">Now in Beta - Join Early Access</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              The New Standard for
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Collaboration
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chat, code, cloud, deployments, and more. Experience the most complete developer platform 
              that brings your entire team together in one seamless workspace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group">
                <span className="text-lg font-semibold">Start Building</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center space-x-3">
                <Github size={20} />
                <span className="text-lg font-semibold">View on GitHub</span>
              </button>
            </div>
            
            <div className="pt-8">
              <p className="text-gray-500 mb-4">Trusted by developers at</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                <div className="text-2xl font-bold text-gray-400">Google</div>
                <div className="text-2xl font-bold text-gray-400">Meta</div>
                <div className="text-2xl font-bold text-gray-400">Netflix</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need,
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                All in One Place
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop juggling multiple tools. Dimension brings together all the features 
              modern development teams need to build, deploy, and scale applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Chat</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly communicate with your team through integrated chat, voice, and video. 
                Share code snippets, files, and collaborate in real-time.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Code Together</h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborative code editor with real-time sync, syntax highlighting, 
                and intelligent autocomplete for over 30 programming languages.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Deploy</h3>
              <p className="text-gray-600 leading-relaxed">
                Deploy your applications instantly to our global cloud infrastructure. 
                Scale automatically with zero configuration required.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize your teams, manage permissions, and track progress with 
                built-in project management and analytics tools.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience blazing-fast performance with our optimized infrastructure. 
                Sub-second response times and 99.9% uptime guarantee.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Git Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Native Git integration with GitHub, GitLab, and Bitbucket. 
                Manage repositories, branches, and pull requests seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Development Workflow?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands of developers who have already made the switch to Dimension.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-2xl font-bold">Dimension</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The complete collaboration platform for modern development teams.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dimension. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DimensionLanding;