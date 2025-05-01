import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { codeSnippets } from './codeSnippets'

function App() {
  const [selectedCode, setSelectedCode] = useState(codeSnippets.Lab1);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(selectedCode);
      toast.success('Code copied to clipboard!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark"
      });
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <>
      <div className="content-wrapper p-8">
        <div className="max-w-4xl mx-auto">
          <div className="logo-container mb-8">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform cursor-default">
              CodeStream
            </h1>
          </div>
          
          {/* Lab Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {Object.keys(codeSnippets).map((lab) => (
              <button
                key={lab}
                onClick={() => setSelectedCode(codeSnippets[lab])}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-gray-100 rounded-lg 
                  hover:bg-gray-700/70 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 
                  transition-all duration-300 border border-gray-700/50 hover:border-indigo-500/50"
              >
                {lab}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-4 border border-gray-700/50 
            hover:border-indigo-500/50 hover:shadow-indigo-500/20 transition-all duration-300 group">
            <pre className="bg-gray-900/50 p-4 rounded-md overflow-x-auto border border-gray-700/50 
              group-hover:border-indigo-500/30 transition-all duration-300 relative">
              {/* Copy Button */}
              <button
                onClick={copyToClipboard}
                className="absolute top-3 right-3 px-4 py-1.5 bg-indigo-600/80 text-gray-100 rounded-md 
                  hover:bg-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 
                  transition-all duration-300 backdrop-blur-sm text-sm font-sans font-medium"
              >
                Copy
              </button>
              <code className="text-sm text-gray-100 font-mono group-hover:text-indigo-100 transition-colors duration-300">
                {selectedCode}
              </code>
            </pre>
          </div>

          {/* Toast Container */}
          <ToastContainer 
            theme="dark"
            toastClassName="bg-gray-800 text-gray-100"
          />
        </div>
      </div>
    </>
  );
}

export default App;
