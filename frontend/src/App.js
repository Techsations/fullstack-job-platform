import './App.css';
import SignUp from './SignUp';
import { Routes, Route, Navigate } from "react-router-dom";


function App () {
  return (
    <>
    <Routes>
    <Route path= '/' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App;
