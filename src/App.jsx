import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, ArrowRight, Award, Code, Globe, Zap, MapPin, Phone } from 'lucide-react';

export default function EnhancedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Krushi-Pragati Platform',
      category: 'Government Agriculture',
      client: 'Government of Gujarat',
      description: 'Lead technical consultant for designing and implementing a state-wide digital agriculture platform serving 50,000+ farmers. Spearheaded development of real-time geospatial data integration, farmer portal, government scheme access, weather forecasting, crop advisory systems, and market information dissemination.',
      features: [
        'Real-time geospatial data integration',
        'Farmer portal with multi-language support',
        'Government scheme access',
        'Weather forecasting integration',
        'Crop advisory systems',
        'Market information dissemination'
      ],
      tech: ['Google Earth Engine', 'AWS EC2', 'Python', 'Real-time Analytics', 'Multi-language Support'],
      impact: '50,000+ farmers served',
      url: 'platform.krushipragati.co.in'
    },
    {
      id: 2,
      title: 'Gujarat State Decision Support System (GSDSS)',
      category: 'Agriculture Tech',
      description: 'Spearheaded digital agriculture monitoring with real-time geospatial analytics for crop biomass growth, yield prediction, irrigation monitoring, and seasonal damage assessment.',
      features: [
        'Real-time geospatial analytics',
        'Crop biomass monitoring',
        'Yield prediction models',
        'Irrigation monitoring',
        'Seasonal damage assessment'
      ],
      tech: ['Sentinel-1/2', 'Machine Learning', 'Google Earth Engine'],
      impact: 'State-wide deployment'
    },
    {
      id: 3,
      title: 'Bangla Shasya Bima - Crop Insurance',
      category: 'Insurance Tech',
      client: 'Bajaj Allianz Insurance',
      description: 'Developed AI-powered yield loss assessments using RF-CNN-based crop classification and advanced spectral indices for insurance claim processing.',
      features: [
        'AI-powered yield loss assessment',
        'CNN-based crop classification',
        'Spectral indices analysis',
        'Insurance claim processing'
      ],
      tech: ['Deep Learning', 'CNN', 'Spectral Indices'],
      impact: 'Automated claim processing'
    },
    {
      id: 4,
      title: 'National Crop Yield Estimation',
      category: 'Research',
      client: 'MNCFC - Ministry of Agriculture',
      description: 'Designed national-scale crop yield prediction models using geospatial big data analytics and ensemble machine learning techniques.',
      features: [
        'National-scale modeling',
        'Big data analytics',
        'Ensemble learning',
        'Predictive analytics'
      ],
      tech: ['Geospatial Big Data', 'Ensemble ML', 'Python'],
      impact: 'Nationwide coverage'
    },
    {
      id: 5,
      title: 'Climate-Resilient Agriculture Initiative',
      category: 'Climate Tech',
      description: 'Developed climate stress indices and drought early-warning systems using SAR optical satellite data fusion for sustainable crop management.',
      features: [
        'Climate stress indices',
        'Drought early-warning systems',
        'SAR data fusion',
        'Sustainable farming practices'
      ],
      tech: ['SAR Analysis', 'Climate Indices', 'Data Fusion'],
      impact: 'Climate adaptation'
    },
    {
      id: 6,
      title: 'Sentinel-1 Soil Moisture Retrieval',
      category: 'Innovation',
      description: 'Pioneered SAR-based soil moisture retrieval algorithms for precision irrigation advisory. Work registered as copyright (SW15757/2022).',
      features: [
        'Soil moisture algorithms',
        'Precision irrigation advisory',
        'SAR processing',
        'Real-time monitoring'
      ],
      tech: ['Sentinel-1 SAR', 'Algorithm Development'],
      impact: 'Copyright registered'
    }
  ];

  const skills = [
    {
      category: 'GIS & Remote Sensing',
      items: ['ArcGIS Suite', 'QGIS (Advanced)', 'ERDAS Imagine', 'ENVI', 'SNAP', 'Google Earth Engine', 'ArcGIS Online', 'Leaflet.js', 'Mapbox']
    },
    {
      category: 'Cloud Platforms & Big Data',
      items: ['Google Earth Engine (Advanced)', 'AWS EC2', 'Cloud-native Processing', 'Real-time Data Processing']
    },
    {
      category: 'Programming & AI/ML',
      items: ['Python (Advanced)', 'NumPy', 'Pandas', 'GeoPandas', 'Rasterio', 'Fiona', 'Scikit-learn', 'Random Forest', 'SVM', 'XGBoost', 'Deep Learning (CNN)', 'Time Series Analysis']
    },
    {
      category: 'Computer Vision & Geospatial',
      items: ['Image Classification', 'Object Detection', 'Semantic Segmentation', 'NDVI/NDBI/NDMI', 'EVI/GNDVI', 'SAR Processing', 'Sentinel-1 Analysis', 'Soil Moisture Retrieval', 'Change Detection']
    },
    {
      category: 'Emerging Technologies',
      items: ['Drone/UAV Processing', 'Geospatial APIs', 'Real-time Monitoring', 'ESG Integration', 'Climate-Smart Agriculture', 'Git/GitHub', 'Spatial Statistics']
    }
  ];

  const achievements = [
    {
      icon: '🌾',
      title: 'Krushi-Pragati Platform',
      subtitle: 'Government of Gujarat',
      description: 'Designed & implemented state-wide digital agriculture platform serving 50,000+ farmers'
    },
    {
      icon: '📜',
      title: 'Copyright Registration',
      subtitle: 'Sentinel-1 Soil Moisture',
      description: 'SW15757/2022 - Registered August 23, 2022'
    },
    {
      icon: '🏆',
      title: 'Innovator Award',
      subtitle: 'Amnex Infotecnologies',
      description: 'Feb 2023 - Pioneering contributions to remote sensing innovations'
    },
    {
      icon: '📈',
      title: '94%+ Accuracy',
      subtitle: 'ML Models',
      description: 'High accuracy crop classification using ensemble machine learning'
    },
    {
      icon: '☁️',
      title: 'Cloud Optimization',
      subtitle: 'Infrastructure',
      description: '50% cost reduction, 10x performance improvement'
    },
    {
      icon: '👥',
      title: '50,000+ Impact',
      subtitle: 'Farming Households',
      description: 'Successfully deployed crop monitoring systems across Gujarat'
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AS</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Alihabin</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-teal-600 font-medium capitalize transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">Geospatial AI Specialist</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transforming Agricultural Data into Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              7+ years of expertise in Remote Sensing, GIS, and AI. Government-scale platform architect serving 50,000+ farmers with real-time crop monitoring and climate-resilient solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <span>View My Work</span>
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300">
                <span>Get In Touch</span>
                <Mail size={20} />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">7+</div>
                <div className="text-sm text-gray-600">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">50K+</div>
                <div className="text-sm text-gray-600">Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8 text-white space-y-6">
              <div className="space-y-2">
                <div className="text-sm opacity-90">📍 Location</div>
                <div className="font-semibold">Ahmedabad, Gujarat, India</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm opacity-90">📧 Contact</div>
                <div className="font-semibold text-sm">alihabinsaiyed@gmail.com</div>
                <div className="font-semibold text-sm">+918460064513</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm opacity-90">💼 Current Role</div>
                <div className="font-semibold">Team Lead & Senior Agriculture Consultant</div>
                <div className="text-sm opacity-90">Amnex Infotecnologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Professional Background</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovative geospatial professional with 7+ years of progressive experience in Remote Sensing, GIS, Artificial Intelligence, and Synthetic Aperture Radar (SAR) technologies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Proven track record of designing and implementing large-scale government agricultural platforms serving 50,000+ farming households. Expert in transforming petabyte-scale satellite data into actionable intelligence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Specialized in developing scalable digital agriculture solutions using Google Earth Engine, Python frameworks, and modern web technologies.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Core Expertise</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-4 rounded-lg">
                  <div className="font-semibold text-teal-900">Geospatial Intelligence</div>
                  <div className="text-sm text-gray-700">Remote Sensing, GIS, SAR Analysis, Real-time Monitoring</div>
                </div>
                <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-4 rounded-lg">
                  <div className="font-semibold text-teal-900">AI/ML Engineering</div>
                  <div className="text-sm text-gray-700">Deep Learning, Computer Vision, Predictive Analytics</div>
                </div>
                <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-4 rounded-lg">
                  <div className="font-semibold text-teal-900">Platform Architecture</div>
                  <div className="text-sm text-gray-700">Government Systems, Cloud Infrastructure, Real-time Data</div>
                </div>
                <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-4 rounded-lg">
                  <div className="font-semibold text-teal-900">Agricultural Technology</div>
                  <div className="text-sm text-gray-700">Precision Farming, Crop Monitoring, Climate Resilience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
                  <div>
                    <div className="inline-block mb-3">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    {project.client && <p className="text-teal-600 font-medium">{project.client}</p>}
                    {project.url && <p className="text-blue-600 text-sm"><a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.url}</a></p>}
                  </div>
                  <div className="text-right mt-4 sm:mt-0">
                    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">{project.impact}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

                {project.features && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-gray-600">
                          <span className="text-teal-600">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-teal-600 to-blue-600 rounded"></div>
                  <span>{skillGroup.category}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 text-gray-800 rounded-lg font-medium text-sm hover:from-teal-200 hover:to-blue-200 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Awards & Recognition</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-l-4 border-teal-600 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-3">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
              <p className="text-teal-600 font-semibold text-sm">{achievement.subtitle}</p>
              <p className="text-gray-600 text-sm mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Let's Collaborate</h2>
          <p className="text-lg opacity-90">
            I'm passionate about leveraging geospatial technology and AI to solve real-world agricultural challenges and build government-scale solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:alihabinsaiyed@gmail.com" className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-teal-600 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com/in/alihabin-saiyed-88094b12b" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-8 py-3 bg-white/20 text-white border-2 border-white rounded-lg font-bold hover:bg-white/30 transition-colors duration-300">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="tel:+918460064513" className="inline-flex items-center space-x-2 px-8 py-3 bg-white/20 text-white border-2 border-white rounded-lg font-bold hover:bg-white/30 transition-colors duration-300">
              <Phone size={20} />
              <span>+91 8460064513</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2026 Alihabin Saiyed. Geospatial AI Specialist | Agricultural Intelligence Expert</p>
          <p className="text-sm mt-2">📍 Ahmedabad, Gujarat, India</p>
        </div>
      </footer>
    </div>
  );
}
