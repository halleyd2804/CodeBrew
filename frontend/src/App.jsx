// Root JSX file where all the components are collated within

import './App.css'
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";

const App = function () {

  return (
      <StrictMode>
        <div className="test motion-scale-in-0">Hello</div>
      </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
