import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Main from './pages/Main'
import Navbar from './components/navbar';
import MakeupDetails from './components/makeupDetails'; 
import BlushDetail from './pages/blushDetail';
import BronzerDetail from './pages/bronzerDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
   <BrowserRouter>
    <Routes>
       <Route path='/' element={<Main/>} />
       <Route path='/details' element={<MakeupDetails/>} />
       <Route path='/blushdetails' element={<BlushDetail/>} />
       <Route path='/bronzerdetails' element={<BronzerDetail/>} />
    </Routes>
 </BrowserRouter>


    </div>
  );
}

export default App;
