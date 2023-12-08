import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import PostOverview from './pages/PostOverview';


function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/posts' element={<PostOverview />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
