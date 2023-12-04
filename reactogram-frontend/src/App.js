import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
