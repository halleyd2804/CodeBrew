// Root JSX file where all the components are collated within


// Imports
import './App.css'
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home.jsx";

const queryClient = new QueryClient();

// Main App component
const App = function () {

  return (
      <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            </QueryClientProvider>
        </BrowserRouter>
      </StrictMode>
  );
}

// Rendering App component to index.html
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
