// Root JSX file where all the components are collated within


// Imports
import './App.css'
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import RenderLineChart from "./charts/Line.jsx";

// Main App component
const App = function () {

  return (
      <StrictMode>
        <div className="test">
            <RenderLineChart />
        </div>
      </StrictMode>
  );
}

// Rendering App component to index.html
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
