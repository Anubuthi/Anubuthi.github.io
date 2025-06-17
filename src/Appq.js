import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Anubuthi</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/experience" className="hover:underline">Experience</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/storybook" className="hover:underline text-indigo-600 font-semibold">Storybook</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="p-10 text-center space-y-6">
      <img
        src="/anubuthi.jpg"
        alt="Anubuthi Kottapalli"
        className="w-60 h-60 rounded-full mx-auto shadow-md object-cover"
      />
      <h1 className="text-4xl font-bold">Hi, I’m Anubuthi 👋</h1>
      <p className="text-lg max-w-2xl mx-auto">
        I'm an Applied Data Science graduate student at the University of Chicago — passionate about turning complex data into 
        real-world insights and solutions .As someone who is deeply curious about machine learning, AI and data science 
        and their use in feild of marketing , finance , healthcare or product development — 
        I am always eager to explore new methods, tools, and ways to make data impactful.
      </p>
      <p className="text-md max-w-xl mx-auto text-gray-600">
        I bring a creative, strategic mindset to problem-solving — blending analytical thinking with empathy, adaptability, 
        and collaboration. Whether it’s translating sign language in real time or forecasting AI-driven stock trends, I thrive 
        under pressure and enjoy building solutions that matter.
      </p>
      <p className="text-md text-gray-600">
         Currently seeking roles where I can grow as a data scientist/analyst, contribute meaningfully, and keep learning.
      </p>
      <div className="pt-6">
        <a
          href="https://github.com/Anubuthi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-full hover:bg-indigo-50 transition"
        >
          Visit My GitHub
        </a>
      </div>
    </div>
  );
}


function Projects() {
  const projects = [
    {
      title: "Bayesian Deep Learning for Diabetic Retinopathy",
      summary: "Bayesian CNN to classify retinal images with uncertainty-aware predictions.",
      tools: "PyTorch, Blitz, GANs, Diffusion, MCDropout",
      image: "/project1.png",
    },
    {
      title: "Lead-Vehicle Distance Estimation (Capstone)",
      summary: "Estimated vehicle distance using monocular camera and image processing.",
      tools: "Image Processing, GCP, Depth Estimation",
      image: "/project2.png",
    },
    {
      title: "Real-time Sign Language Translator",
      summary: "Converted Indian Sign Language to Hindi/Kannada in real-time. IEEE paper published.",
      tools: "MediaPipe, CNN, LSTM, Flask",
      image: "/project2.jpeg",
      link: "https://ieeexplore.ieee.org/document/10533962",
    },
      {
    title: "Brand Sentiment Analysis with RAG",
    summary: "Analyzed Reddit conversations to understand customer sentiment around footwear brands, using a Retrieval-Augmented Generation model to generate brand insights.",
    tools: "NLP, Hugging Face Transformers, RAG, Reddit API",
    image: "/project8.png",
    },
    {
      title: "OList E-commerce Analytics",
      summary: "Optimized sales and customer behavior using data mining techniques.",
      tools: "Scikit-learn, Pandas, Power BI",
      image: "/project4.jpg",
    },
    {
      title: "AI-Driven Tech Stock Dynamics",
      summary: "Predicted stock trends using time series models and AI signals.",
      tools: "ARIMA, LSTM, VARMAX",
      image: "/project5.jpg",
    },
    {
      title: "Will TuringBots Replace Developers?",
      summary: "Analyzed GitHub data to evaluate the influence of AI dev tools.",
      tools: "PySpark, GCP, GitHub API",
      image: "/project6.png",
    },
    {
      title: "Language Network Mapping",
      summary: "Mapped phonetic similarities across Indian languages using graph theory.",
      tools: "NLTK, Soundex, NetworkX",
      image: "/project7.png",
    },

  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10">Projects I loved working on !!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white border rounded-lg shadow hover:shadow-lg transition">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700">{proj.summary}</p>
              <p className="text-sm text-gray-500 mt-2">Tools: {proj.tools}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
                >
                  View Paper
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



function Experience() {
  const roles = [
    {
      logo: "/evoke-logo.png",
      company: "Evoke Technologies",
      title: "Data Science Intern – Capital Markets (AI & Financial Research)",
      date: "Jun 2025 – Present",
      bullets: [
      "Build predictive models using financial fundamentals, technical indicators, and sentiment data to generate trading insights.",
      "Apply NLP to financial news, earnings calls, and social media to extract actionable signals.",
      "Collect and preprocess structured and unstructured market data, and collaborate with quant researchers and AI experts to document findings.",
    ],
    },
    {
      logo: "/uchicago-logo.png",
      company: "University of Chicago – NBC Tower Campus",
      title: "Student Assistant – Applied Data Science Program",
      date: "Mar 2025 – Present",
      bullets: [
        "Provide frontline support for instructors and students, handling classroom tech setup, visitor inquiries, and just-in-time troubleshooting.",
        "Support events, department workflows, and faculty operations with high attention to detail and professional communication.",
        "Maintain records of support requests, manage supply upkeep, and help ensure compliance with FERPA and university policies.",
    ],
    },

    {
      logo: "/gsk-logo.jpeg",
      company: "GlaxoSmithKline (GSK)",
      title: "Graduate Intern – Detection Engineering and Cyber Analytics",
      date: "Jan 2024 – Jul 2024",
      bullets: [
        "Automated ServiceNow ticket creation using Streamlit and Python, saving 8.35 hours/day.",
        "Visualized user behavior anomalies with Power BI to support security response teams.",
        "Authored 20+ detailed detection playbooks for incidents on SPLUNK and WIZ.",
      ],
    },
    {
      logo: "/pes-logo.png",
      company: "PES University",
      title: "Teaching Assistant – Data Analytics & Machine Intelligence",
      date: "Aug 2023 – Dec 2023",
      bullets: [
        "Created assignments and materials for ML topics like neural networks, decision trees, and time series.",
        "Helped design tests and curated foundational material for student success.",
      ],
    },
    {
      logo: "/pes-logo.png",
      company: "PES University",
      title: "Research Organizer & Workshop Lead",
      date: "Jun 2022 – Dec 2022",
      bullets: [
        "Organized cybersecurity events and student research workshops.",
        "Presented literature reviews and mentored peers on research methodology.",
      ],
    },
  ];

  return (
    <div className="p-10 space-y-10">
      <h2 className="text-3xl font-bold text-center">Experience</h2>
      {roles.map((role, i) => (
        <div key={i} className="flex border rounded-lg shadow hover:shadow-md transition overflow-hidden">
          <img src={role.logo} alt={`${role.company} logo`} className="w-24 h-24 object-contain p-2 bg-white" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">{role.title}</h3>
            <p className="text-md text-gray-600 italic">{role.company} • {role.date}</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              {role.bullets.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}




function Contact() {
  return (
    <div className="p-6">
      <p>Email: anubuthi@uchicago.edu</p>
      <p>GitHub: <a href="https://github.com/Anubuthi" className="text-blue-600 underline">Anubuthi</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/anubuthi-kottapalli" className="text-blue-600 underline">anubuthi-kottapalli</a></p>
    </div>
  );
}

function Storybook() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">My Storybook</h2>
      <p className="mt-2">This is where the creative, animated version of your journey will go.</p>
    </div>
  );
}
const [darkMode, setDarkMode] = React.useState(true);

React.useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/storybook" element={<Storybook />} />
      </Routes>
    </Router>
  );
}

export default App;