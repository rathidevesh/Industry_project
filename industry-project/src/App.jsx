import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import Instruction from './components/Instruction';
import AddCandidateForm from './components/AddCandidateForm';
// import './App.css'; 

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          
          
          <div className="appcontainer">
            <Routes>
            {/* <Route exact path="/home" element={<Home showAlert={showAlert}/>} /> */}
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/instruction" element={<Instruction/>} />
            <Route exact path='/addcandidate' element={<AddCandidateForm />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
