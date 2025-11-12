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
      const sections = ["home", "experience", "projects", "lens", "blog", "contact"];
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
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Anubuthi's Portfolio
          </h1>
          <div className="flex items-center space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "lens", label: "Through My Lens" },
              { id: "blog", label: "Trying to Blog" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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

      {/* Experience Timeline - Horizontal with Alternating */}
      <ExperienceTimeline />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Through My Lens Section */}
      <section id="lens" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Through My Lens</h2>
          <p className="text-center text-gray-400 mb-12">Capturing moments and perspectives</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "/photo10.jpg",
              "/photo2.jpg",
              "/photo3.jpg",
              "/photo4.jpg",
              "/photo5.jpg",
              "/photo6.jpg",
              "/photo7.jpg",
              "/photo8.jpg",
              "/photo19.jpg",
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <img
                  src={photo}
                  alt={`Through my lens ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
                date: "September 2025",
                title: "Post-Internship Reflections: Three Months in Capital Markets",
                content: (
                  <div className="text-gray-300 space-y-3">
                    <p>
                      My internship at Evoke Technologies was an incredible learning experience that pushed me to grow as a data scientist and engineer. 
                      Over three months, I got to work hands-on with real-world financial data and build systems that actually mattered to the team.
                    </p>
                    <p>
                      One of my proudest achievements was automating the ingestion pipeline to process 9,000+ daily stock trades and analyst estimates using GCP Cloud Functions. 
                      This cut manual processing time by over 5 hours a day. I also built a custom Variational Autoencoder (VAE) alongside XGBoost and LightGBM models 
                      to classify trading anomalies as bullish, bearish, or neutral — a challenging but rewarding deep learning project.
                    </p>
                    <p>
                      Beyond machine learning, I got to brush up on fundamental data engineering skills. I used SQL functions extensively for detecting anomalies 
                      in the options dataset daily, built GCP Cloud Functions for data pipelines, and even created an internal dashboard to visualize daily data and analyst estimates. 
                      I also automated the generation of daily EPS and revenue estimate revisions as clean HTML documents, making it easy for the team to review changes at a glance.
                    </p>
                    <p>
                      Working with 500+ daily news articles and applying NLP to uncover patterns in market activity and investor sentiment was fascinating. 
                      The goal was to identify unusual activity in options data that might indicate "smart money" moves — and seeing those models work in production was incredibly satisfying.
                    </p>
                    <p>
                      I also appreciated the chance to refine my software engineering practices — using GitHub for version control, writing modular and maintainable code, 
                      and collaborating with senior analysts to deliver actionable insights.
                    </p>
                    <p>
                      This internship reminded me how much I enjoy the intersection of data science, engineering, and finance. I'm excited to carry these skills forward 
                      as I continue my journey in applied data science.
                    </p>
                  </div>
                ),
              },
              {
                date: "June 2025",
                title: "First Week at Evoke: A Week Full of Bulls, Bears, and Breakthroughs",
                content: (
                  <div className="text-gray-300 space-y-3">
                    <p>
                      My first week working on capital markets data was a whirlwind. I dove into all the possible data sources and tried to identify what information I could use.
                    </p>
                    <p>
                      Although I've only been working with market data for a few days now, I was able to learn so much about financial data. 
                      I know this is only the tip of the iceberg, and I am extremely excited to dive deep into this over the next few months...
                    </p>
                  </div>
                ),
              },
              {
                date: "May 2025",
                title: "Bayesian ML and Diabetic Retinopathy",
                content: (
                  <div className="text-gray-300 space-y-3">
                    <p>
                      I've been working on a project to classify diabetic retinopathy (DR) from retinal images — but instead of just building another confident model, 
                      I wanted to build one that knows when to say "I'm not sure."
                    </p>
                    <p>
                      I trained four versions — ResNet and custom CNNs, each with 1 or 2 Bayesian layers — and used Monte Carlo Dropout to generate multiple predictions per image. 
                      From those, I calculated entropy to quantify uncertainty. If the entropy was high, the model simply said "IDK" rather than risk a bad prediction.
                    </p>
                    <p>
                      I also applied class-specific thresholds — being extra cautious for severe DR stages and more lenient for early ones — so the model isn't just accurate, 
                      but aware of clinical stakes. Because sometimes, a model that tells us when not to trust it is more valuable than one that's confidently wrong.
                    </p>
                    <p>
                      Still a work in progress, but I'm excited about where it's headed — maybe even toward a paper.
                    </p>
                  </div>
                ),
              },
            ].map((post, i) => (
              <div
                key={i}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{post.title}</h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{post.date}</span>
                </div>
                <div className="text-gray-400">{post.content}</div>
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

// Projects Section Component with Click-to-Expand
function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Bayesian Deep Learning for Diabetic Retinopathy",
      summary: "Bayesian CNN with uncertainty-aware predictions",
      details: "Implemented Bayesian Convolutional Neural Networks using PyTorch and Blitz to provide uncertainty quantification in medical image classification. Explored GANs and Diffusion models for data augmentation and utilized Monte Carlo Dropout for robust predictions. Applied class-specific thresholds for clinical safety.",
      tools: ["PyTorch", "Blitz", "GANs", "Diffusion", "MCDropout"],
      image: "/project1.png",
    },
    {
      title: "Lead-Vehicle Distance Estimation",
      summary: "Monocular camera-based distance estimation",
      details: "Built 3-branch CNN architecture (EfficientNetB4 + MobileNetV2 + geometric features) achieving 1.40m MAE on 2,107 real-world test images; initially validated approach using CARLA simulator before deploying on production dashcam data. Processed 14,800+ images with comprehensive preprocessing pipeline including YOLO-based vehicle detection, achieving 68% accuracy within 1 meter for safety-critical close-range scenarios. Addressed 5:1 data imbalance through targeted augmentation strategy (33,372 training samples), demonstrating 68.4% improvement over geometric baselines with R² of 0.897",
      tools: ["Image Processing", "GCP", "Depth Estimation"],
      image: "/project2.png",
    },
    {
      title: "Real-time Sign Language Translator",
      summary: "Indian Sign Language to Hindi/Kannada translator",
      details: "Built an end-to-end deep learning system using MediaPipe for hand tracking, CNN for feature extraction, and LSTM for sequence modeling. Deployed as a Flask web application. Published research paper in IEEE conference proceedings.",
      tools: ["MediaPipe", "CNN", "LSTM", "Flask"],
      image: "/project2.jpeg",
      link: "https://ieeexplore.ieee.org/document/10533962",
    },
    {
      title: "Brand Sentiment Analysis with RAG",
      summary: "Reddit sentiment analysis for footwear brands",
      details: "Leveraged Retrieval-Augmented Generation models to analyze thousands of Reddit posts and comments. Used Hugging Face Transformers for sentiment classification and entity recognition to generate actionable brand insights and competitive intelligence.",
      tools: ["NLP", "Transformers", "RAG", "Reddit API"],
      image: "/project8.png",
    },
    {
      title: "OList E-commerce Analytics",
      summary: "Sales optimization and customer behavior analysis",
      details: "Performed comprehensive analysis of Brazilian e-commerce data including customer segmentation, product recommendations, and sales forecasting. Built interactive Power BI dashboards for business intelligence and used scikit-learn for predictive modeling.",
      tools: ["Scikit-learn", "Pandas", "Power BI"],
      image: "/project4.jpg",
    },
    {
      title: "AI-Driven Tech Stock Dynamics",
      summary: "Stock trend prediction with time series models",
      details: "Developed ensemble time series models combining ARIMA for trend analysis, LSTM networks for pattern recognition, and VARMAX for multivariate forecasting. Integrated alternative data sources including news sentiment and social media signals.",
      tools: ["ARIMA", "LSTM", "VARMAX"],
      image: "/project5.jpg",
    },
    {
      title: "Will TuringBots Replace Developers?",
      summary: "GitHub analysis of AI dev tool influence",
      details: "Conducted large-scale analysis of GitHub repositories and commits using PySpark. Deployed data pipeline on Google Cloud Platform to process millions of events. Examined trends in AI-assisted coding and developer productivity metrics.",
      tools: ["PySpark", "GCP", "GitHub API"],
      image: "/project6.png",
    },
    {
      title: "Language Network Mapping",
      summary: "Phonetic similarities across Indian languages",
      details: "Applied natural language processing to analyze phonetic patterns across 20+ Indian languages. Used Soundex algorithm for phonetic encoding and NetworkX for graph visualization. Revealed interesting linguistic connections and historical language evolution patterns.",
      tools: ["NLTK", "Soundex", "NetworkX"],
      image: "/project7.png",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Projects I loved working on !!</h2>
        <p className="text-center text-gray-400 mb-8">Click on any project to see full details</p>
        
        <div className="overflow-x-auto pb-8">
          <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(project)}
                className="relative h-80 w-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 group"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/20"></div>
                </div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-blue-500/20 border border-blue-500/30 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-3xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
            
            <div className="flex gap-6 mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-48 h-48 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-4">{selectedProject.details}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                View Paper →
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

// Experience Timeline Component - Horizontal with Alternating Above/Below
function ExperienceTimeline() {
  const [selectedRole, setSelectedRole] = useState(null);
  
  const roles = [
    {
      logo: "/pes-logo.png",
      company: "PES University",
      title: "Bachelor of Technology in Computer Science - Started",
      shortTitle: "Started Bachelor's",
      displayDate: "Sep 2020",
      date: "Sep 2020",
      type: "education",
      bullets: [
        "Started B.Tech in Computer Science at PES University",
        "Focus on Machine Intelligence and Data Science",
      ],
    },
    {
      logo: "/pes-logo.png",
      company: "PES University",
      title: "Research Organizer & Cybersecurity Workshop Lead",
      shortTitle: "Research Lead",
      displayDate: "Jun 2022",
      date: "Jun 2022",
      dateEnd: "Nov 2022",
      type: "education",
      bullets: [
        "Organized cybersecurity events and student research workshops.",
        "Presented literature reviews and mentored peers on research methodology.",
      ],
    },
    {
      logo: "/pes-logo.png",
      company: "PES University",
      title: "Teaching Assistant — Data Analytics & Machine Intelligence",
      shortTitle: "TA",
      displayDate: "Aug 2023",
      date: "Aug 2023",
      dateEnd: "Dec 2023",
      type: "education",
      bullets: [
        "Created assignments and materials for ML topics like neural networks, decision trees, and time series.",
        "Helped design tests and curated foundational material for student success.",
      ],
    },
    {
      logo: "/gsk-logo.jpeg",
      company: "GlaxoSmithKline",
      title: "Graduate Intern — Detection Engineering and Cyber Analytics",
      shortTitle: "GSK Intern",
      displayDate: "Jan 2024",
      date: "Jan 2024",
      dateEnd: "Jul 2024",
      type: "work",
      bullets: ["Automated internal service request triage with a Streamlit-Python tool, saving 8+ hours every day in analyst time.",
                "Visualized anomalous behavior using Power BI dashboards for behavior analytics (UEBA project)",
                "Authored 20+ detailed response playbooks for threat detection cases on SPLUNK and WIZ platforms.",
                "Earned a certificate in advanced Splunk workflows to support cyber threat detection and strengthen data science analyst capabilities.",
                "Acted as a bridge between Cyber Analytics and Detection Engineering teams, applying data science to map O365 telemetry to the MITRE ATT&CK framework for early threat detection modeling."
      ],


    },
    {
      logo: "/pes-logo.png",
      company: "PES University",
      title: "Bachelor of Technology in Computer Science - Graduated",
      shortTitle: "Graduated Bachelor's",
      displayDate: "May 2024",
      date: "May 2024",
      type: "education",
      bullets: [
        "Graduated with 3.92/4.0 GPA",
        "Specialization in Machine Intelligence and Data Science",
      ],
    },
    {
      logo: "/uchicago-logo.png",
      company: "University of Chicago",
      title: "Master of Science in Applied Data Science - Started",
      shortTitle: "Started Master's",
      displayDate: "Sep 2024",
      date: "Sep 2024",
      type: "education",
      bullets: [
        "Started MS in Applied Data Science at University of Chicago",
        "Current GPA: 4.0/4.0",
        "Advanced coursework in machine learning, deep learning, and data engineering",
      ],
    },
    {
      logo: "/uchicago-logo.png",
      company: "UChicago",
      title: "Student Assistant — Applied Data Science Program",
      shortTitle: "Student Asst",
      displayDate: "Mar 2025",
      date: "Mar 2025",
      dateEnd: "Present",
      type: "work",
      bullets: [
        "Provide frontline support for instructors and students, handling classroom tech setup, visitor inquiries, and just-in-time troubleshooting.",
        "Support events, department workflows, and faculty operations with high attention to detail and professional communication.",
        "Maintain records of support requests, manage supply upkeep, and help ensure compliance with FERPA and university policies.",
      ],
    },
    {
      logo: "/argonne_logo.jpg",
      company: "Argonne National Lab",
      title: "MS Capstone Project",
      shortTitle: "Capstone",
      displayDate: "Mar 2025",
      date: "Mar 2025",
      dateEnd: "Dec 2025",
      type: "work",
      bullets: ["Developed hybrid CNN architecture for monocular distance estimation in autonomous vehicles, combining EfficientNetB4 (scene context), MobileNetV2 (vehicle features), and geometric priors to achieve 1.40m MAE with 68% predictions within 1 meter on real-world dashcam footage" ,
                "Designed end-to-end pipeline processing 14,800+ images from Nashville, LA, Chattanooga, and Chicago, including lens distortion correction, CLAHE enhancement, and YOLO-based lead vehicle detection with intelligent ROI filtering",
                "Addressed severe data imbalance (10-20m: 33% vs 0-2m: 10% of samples) through targeted augmentation using Albumentations library, generating 33,372 training samples with randomized brightness, contrast, and weather effects",
                "Achieved R² of 0.897 with exceptional close-range performance critical for safety (0-2m), demonstrating production-ready accuracy across diverse weather and lighting conditions",
                "Initially prototyped and validated approach using CARLA simulator for synthetic data generation before transitioning to real-world dashcam datasets for robust model training and evaluation"
      ],
    },
    {
      logo: "/evoke-logo.png",
      company: "Evoke Technologies",
      title: "Data Science Intern — Capital Markets (AI & Financial Research)",
      shortTitle: "Evoke Intern",
      displayDate: "Jun 2025",
      date: "Jun 2025",
      dateEnd: "Aug 2025",
      type: "work",
      bullets: [
        "Automated an ingestion pipeline to process 9,000+ daily stock trades and analyst estimates using GCP Cloud Functions, reducing manual processing time by over 5 hours a day.",
        "Conducted weekly equity research reports on companies using technical indicators, earnings revisions, industry outlook, and macro sentiment; delivered insights to senior analysts to support portfolio evaluation and positioning.",
        "Engineered advanced features from options data (e.g., delta, IV, vega, moneyness) and built a custom VAE along with XGBoost and LightGBM models to classify trading anomalies as bullish, bearish, or neutral.",
        "Implemented machine learning and NLP to uncover patterns in 500+ daily news articles, market activity, investor sentiment, and company performance, enhancing anomaly detection to identify unusual activity in the options data that can indicate smart money and trade signal generation.",
        "Created automated functions for daily EPS and revenue estimate revisions as HTML documents for easy viewing. Built an internal dashboard hosted on GCP for viewing daily data and analyst estimates.",
        "Utilized SQL functions for detecting anomalies in the options dataset daily, strengthened data engineering skills with GCP Cloud Functions, and used GitHub for version control.",
      ],
    },
    {
      logo: "/uchicago-logo.png",
      company: "University of Chicago",
      title: "Master of Science in Applied Data Science - Graduating",
      shortTitle: "Graduating Master's",
      displayDate: "Dec 2025",
      date: "Dec 2025",
      type: "education",
      bullets: [
        "Expected graduation with MS in Applied Data Science",
        "Current GPA: 4.0/4.0",
        "Advanced coursework in machine learning, deep learning, and data engineering",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Journey</h2>
        <p className="text-center text-gray-400 mb-12">
          <span className="text-purple-400 font-bold">Education</span>
          <span className="mx-4 text-gray-600">|</span>
          <span className="text-blue-400 font-bold"> Work & Internships</span>
          <span className="mx-4 text-gray-600">•</span>
          <span className="text-gray-500">Click any milestone for full details</span>
        </p>
        
        {/* Horizontal Timeline with Center Line */}
        <div className="relative overflow-x-auto pb-12">
          <div className="relative px-8" style={{ minHeight: '450px', width: 'max-content', minWidth: '100%' }}>
            {/* Center horizontal line */}
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" style={{ top: '225px' }}></div>
            
            {/* Timeline items */}
            <div className="flex gap-1">
              {roles.map((role, i) => {
                const isEducation = role.type === "education";
                
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedRole(role)}
                    className="relative cursor-pointer group min-w-[180px] flex flex-col"
                    style={{
                      height: '450px',
                      alignItems: 'center',
                      justifyContent: isEducation ? 'flex-end' : 'flex-start',
                      paddingTop: isEducation ? '0' : '225px',
                      paddingBottom: isEducation ? '225px' : '0',
                    }}
                  >
                    {isEducation ? (
                      // Education - ABOVE the line
                      <>
                        <div className="w-40 text-center mb-4">
                          <img
                            src={role.logo}
                            alt={role.company}
                            className="w-20 h-20 mx-auto mb-2 object-contain rounded-lg bg-white p-2 shadow-lg"
                          />
                          <p className="text-sm font-semibold text-gray-200">{role.shortTitle}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50 z-10 mb-4 transition-transform group-hover:scale-125 bg-purple-500"></div>
                        <p className="text-sm font-bold text-purple-300">{role.displayDate}</p>
                      </>
                    ) : (
                      // Work/Internships - BELOW the line
                      <>
                        <p className="text-sm font-bold text-blue-300 mb-4">{role.displayDate}</p>
                        <div className="w-8 h-8 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50 z-10 mb-4 transition-transform group-hover:scale-125 bg-blue-500"></div>
                        <div className="w-40 text-center">
                          <img
                            src={role.logo}
                            alt={role.company}
                            className="w-20 h-20 mx-auto mb-2 object-contain rounded-lg bg-white p-2 shadow-lg"
                          />
                          <p className="text-sm font-semibold text-gray-200">{role.shortTitle}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Role Modal */}
      {selectedRole && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedRole(null)}
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-3xl w-full p-8 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
            
            <div className="flex items-start gap-4 mb-6">
              <img
                src={selectedRole.logo}
                alt={selectedRole.company}
                className="w-20 h-20 object-contain rounded-lg bg-white p-2"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{selectedRole.title}</h3>
                <p className={`text-lg font-medium mb-1 ${
                  selectedRole.type === "education" ? 'text-purple-400' : 'text-blue-400'
                }`}>{selectedRole.company}</p>
                <p className="text-sm text-gray-500">{selectedRole.date} {selectedRole.dateEnd ? `— ${selectedRole.dateEnd}` : ''}</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              {selectedRole.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className={selectedRole.type === "education" ? 'text-purple-400' : 'text-blue-400'}>•</span>
                  <span className="ml-2">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;