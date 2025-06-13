import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlgorithmVisualizer from './components/algorithmvisualizer';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex justify-content-center align-items-center">
      <AlgorithmVisualizer />
    </div>
  );
}

export default App;
