import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Main from './pages/Main'
import Navbar from './components/navbar';
import MakeupDetails from './components/makeupDetails'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
   <BrowserRouter>
    <Routes>
       <Route path='/' element={<Main/>} />
       <Route path='/details' element={<MakeupDetails/>} />
    </Routes>
 </BrowserRouter>


    </div>
  );
}

export default App;
