import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Management from './components/Management';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newuser' element={<User/>} />
        <Route path='/management' element={<Management/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
