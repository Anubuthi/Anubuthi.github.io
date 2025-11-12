import React, { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "lens", "blog", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Anubuthi
          </h1>
          <div className="flex items-center space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "lens", label: "Through My Lens" },
              { id: "blog", label: "Trying to Blog" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300"
            >
              Resume
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-2 border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors duration-300"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="relative inline-block">
            <img
              src="/anubuthi.jpg"
              alt="Anubuthi Kottapalli"
              className="w-48 h-48 rounded-full mx-auto shadow-2xl object-cover border-4 border-blue-400/30"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm Anubuthi 👋
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm an Applied Data Science graduate student at the University of Chicago — passionate about turning complex data into 
            real-world insights and solutions. As someone who is deeply curious about machine learning, AI and data science 
            and their use in fields of marketing, finance, healthcare or product development — 
            I am always eager to explore new methods, tools, and ways to make data impactful.
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I bring a creative, strategic mindset to problem-solving — blending analytical thinking with empathy, adaptability, 
            and collaboration. Whether it's translating sign language in real time or forecasting AI-driven stock trends, I thrive 
            under pressure and enjoy building solutions that matter.
          </p>
          
          <p className="text-md text-gray-500">
            Currently seeking roles where I can grow as a data scientist/analyst, contribute meaningfully, and keep learning.
          </p>
          
          <div className="pt-4">
            <a
              href="https://github.com/Anubuthi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Projects I loved working on !!</h2>
          <p className="text-center text-gray-400 mb-12">Hover over each card to learn more</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Bayesian Deep Learning for Diabetic Retinopathy",
                summary: "Bayesian CNN to classify retinal images with uncertainty-aware predictions.",
                details: "Implemented Bayesian Convolutional Neural Networks using PyTorch and Blitz to provide uncertainty quantification in medical image classification. Explored GANs and Diffusion models for data augmentation and utilized Monte Carlo Dropout for robust predictions.",
                tools: ["PyTorch", "Blitz", "GANs", "Diffusion", "MCDropout"],
                image: "/project1.png",
              },
              {
                title: "Lead-Vehicle Distance Estimation",
                summary: "Estimated vehicle distance using monocular camera and image processing.",
                details: "Developed a computer vision system to estimate distances to lead vehicles using monocular camera input. Deployed on Google Cloud Platform with real-time processing capabilities. Applied depth estimation techniques for autonomous driving applications.",
                tools: ["Image Processing", "GCP", "Depth Estimation"],
                image: "/project2.png",
              },
              {
                title: "Real-time Sign Language Translator",
                summary: "Converted Indian Sign Language to Hindi/Kannada in real-time.",
                details: "Built an end-to-end deep learning system using MediaPipe for hand tracking, CNN for feature extraction, and LSTM for sequence modeling. Deployed as a Flask web application. Published research paper in IEEE conference proceedings.",
                tools: ["MediaPipe", "CNN", "LSTM", "Flask"],
                image: "/project2.jpeg",
                link: "https://ieeexplore.ieee.org/document/10533962",
              },
              {
                title: "Brand Sentiment Analysis with RAG",
                summary: "Analyzed Reddit conversations to understand customer sentiment around footwear brands.",
                details: "Leveraged Retrieval-Augmented Generation models to analyze thousands of Reddit posts and comments. Used Hugging Face Transformers for sentiment classification and entity recognition to generate actionable brand insights and competitive intelligence.",
                tools: ["NLP", "Transformers", "RAG", "Reddit API"],
                image: "/project8.png",
              },
              {
                title: "OList E-commerce Analytics",
                summary: "Optimized sales and customer behavior using data mining techniques.",
                details: "Performed comprehensive analysis of Brazilian e-commerce data including customer segmentation, product recommendations, and sales forecasting. Built interactive Power BI dashboards for business intelligence and used scikit-learn for predictive modeling.",
                tools: ["Scikit-learn", "Pandas", "Power BI"],
                image: "/project4.jpg",
              },
              {
                title: "AI-Driven Tech Stock Dynamics",
                summary: "Predicted stock trends using time series models and AI signals.",
                details: "Developed ensemble time series models combining ARIMA for trend analysis, LSTM networks for pattern recognition, and VARMAX for multivariate forecasting. Integrated alternative data sources including news sentiment and social media signals.",
                tools: ["ARIMA", "LSTM", "VARMAX"],
                image: "/project5.jpg",
              },
              {
                title: "Will TuringBots Replace Developers?",
                summary: "Analyzed GitHub data to evaluate the influence of AI dev tools.",
                details: "Conducted large-scale analysis of GitHub repositories and commits using PySpark. Deployed data pipeline on Google Cloud Platform to process millions of events. Examined trends in AI-assisted coding and developer productivity metrics.",
                tools: ["PySpark", "GCP", "GitHub API"],
                image: "/project6.png",
              },
              {
                title: "Language Network Mapping",
                summary: "Mapped phonetic similarities across Indian languages using graph theory.",
                details: "Applied natural language processing to analyze phonetic patterns across 20+ Indian languages. Used Soundex algorithm for phonetic encoding and NetworkX for graph visualization. Revealed interesting linguistic connections and historical language evolution patterns.",
                tools: ["NLTK", "Soundex", "NetworkX"],
                image: "/project7.png",
              },
            ].map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="min-h-screen py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>
            
            <div className="space-y-12">
              {[
                {
                  logo: "/evoke-logo.png",
                  company: "Evoke Technologies",
                  title: "Data Science Intern — Capital Markets (AI & Financial Research)",
                  date: "Jun 2025 — Present",
                  bullets: [
                    "Build predictive models using financial fundamentals, technical indicators, and sentiment data to generate trading insights.",
                    "Apply NLP to financial news, earnings calls, and social media to extract actionable signals.",
                    "Collect and preprocess structured and unstructured market data, and collaborate with quant researchers and AI experts to document findings.",
                  ],
                },
                {
                  logo: "/uchicago-logo.png",
                  company: "University of Chicago — NBC Tower Campus",
                  title: "Student Assistant — Applied Data Science Program",
                  date: "Mar 2025 — Present",
                  bullets: [
                    "Provide frontline support for instructors and students, handling classroom tech setup, visitor inquiries, and just-in-time troubleshooting.",
                    "Support events, department workflows, and faculty operations with high attention to detail and professional communication.",
                    "Maintain records of support requests, manage supply upkeep, and help ensure compliance with FERPA and university policies.",
                  ],
                },
                {
                  logo: "/gsk-logo.jpeg",
                  company: "GlaxoSmithKline (GSK)",
                  title: "Graduate Intern — Detection Engineering and Cyber Analytics",
                  date: "Jan 2024 — Jul 2024",
                  bullets: [
                    "Automated ServiceNow ticket creation using Streamlit and Python, saving 8.35 hours/day.",
                    "Visualized user behavior anomalies with Power BI to support security response teams.",
                    "Authored 20+ detailed detection playbooks for incidents on SPLUNK and WIZ.",
                  ],
                },
                {
                  logo: "/pes-logo.png",
                  company: "PES University",
                  title: "Teaching Assistant — Data Analytics & Machine Intelligence",
                  date: "Aug 2023 — Dec 2023",
                  bullets: [
                    "Created assignments and materials for ML topics like neural networks, decision trees, and time series.",
                    "Helped design tests and curated foundational material for student success.",
                  ],
                },
                {
                  logo: "/pes-logo.png",
                  company: "PES University",
                  title: "Research Organizer & Workshop Lead",
                  date: "Jun 2022 — Dec 2022",
                  bullets: [
                    "Organized cybersecurity events and student research workshops.",
                    "Presented literature reviews and mentored peers on research methodology.",
                  ],
                },
              ].map((role, i) => (
                <TimelineItem key={i} role={role} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Through My Lens Section */}
      <section id="lens" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Through My Lens</h2>
          <p className="text-center text-gray-400 mb-12">Capturing moments and perspectives</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center group overflow-hidden"
              >
                <div className="text-center text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                  <p className="text-sm">Photo {item}</p>
                  <p className="text-xs mt-2">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trying to Blog Section */}
      <section id="blog" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Trying to Blog</h2>
          <p className="text-center text-gray-400 mb-12">Thoughts, learnings, and reflections</p>
          
          <div className="space-y-6">
            {[
              {
                title: "My Journey into Data Science",
                date: "Coming Soon",
                excerpt: "How I transitioned from engineering to data science and what I learned along the way...",
              },
              {
                title: "Building ML Models: Theory vs Practice",
                date: "Coming Soon",
                excerpt: "The gap between academic learning and real-world implementation...",
              },
              {
                title: "Why I Love Working with Uncertain Data",
                date: "Coming Soon",
                excerpt: "Exploring Bayesian approaches and why uncertainty quantification matters...",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          
          <div className="space-y-4">
            <a
              href="mailto:anubuthi@uchicago.edu"
              className="block p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <p className="text-xl">anubuthi@uchicago.edu</p>
            </a>
            
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/Anubuthi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-gray-400 text-sm mb-1">GitHub</p>
                <p className="text-lg">@Anubuthi</p>
              </a>
              
              <a
                href="https://linkedin.com/in/anubuthi-kottapalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                <p className="text-lg">anubuthi-kottapalli</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-slate-700/50">
        <p>© 2025 Anubuthi Kottapalli</p>
      </footer>
    </div>
  );
}

// Project Card Component with Hover Effect
function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        {/* Default View */}
        <div
          className={`transition-all duration-500 ${
            isHovered ? "opacity-0 transform -translate-y-4" : "opacity-100"
          }`}
        >
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.slice(0, 3).map((tool, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-blue-500/20 border border-blue-500/30 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Hover View */}
        <div
          className={`absolute inset-0 p-6 flex flex-col justify-center transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-4 line-clamp-4">{project.details}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-blue-500/30 border border-blue-500/50 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              View Paper →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ role, index }) {
  return (
    <div className="relative pl-20 pb-8 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      {/* Timeline Dot */}
      <div className="absolute left-6 top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>

      {/* Content Card */}
      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={role.logo}
            alt={`${role.company} logo`}
            className="w-16 h-16 object-contain rounded-lg bg-white p-2"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
            <p className="text-blue-400 font-medium">{role.company}</p>
            <p className="text-sm text-gray-500">{role.date}</p>
          </div>
        </div>
        <ul className="space-y-2 text-gray-300">
          {role.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-sm">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
