
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Modal from './Component/Modal'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Modal/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;