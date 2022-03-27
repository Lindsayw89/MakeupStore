import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Main from './pages/Main'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <BrowserRouter>
    <Routes>
       <Route path='/' element={<Main/>} />
    </Routes>
 </BrowserRouter>


    </div>
  );
}

export default App;
