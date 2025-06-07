import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md text-black dark:text-white">
      <h1 className="text-xl font-bold">Anubuthi</h1>
      <div className="space-x-4 flex items-center">
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

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/storybook" element={<Storybook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
