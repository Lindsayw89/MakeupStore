import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Main from './pages/Main'
import Navbar from './components/navbar';
import MakeupDetails from './components/makeupDetails'; 
import BlushDetail from './pages/blushDetail';
import BronzerDetail from './pages/bronzerDetails';
import FoundationDetail from './pages/foundationDetails';
import LiplinerDetail from './pages/liplinerDetail'; 
import EyeshadowDetail from './pages/eyeshadowDetail';
import LipstickDetail from './pages/lipstickDetail';
import MascaraDetail from './pages/mascaraDetail';
import NailpolishDetail from './pages/nailpolishDetail';
import ProductDetails from './pages/productDetails';
import TopRated from './pages/TopRated';
import FindStore from './pages/findStore';

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
       <Route path='/eyeshadowdetails' element={<EyeshadowDetail/>} />
       <Route path='/liplinerdetails' element={<LiplinerDetail/>} />
       <Route path='/lipstickdetails' element={<LipstickDetail/>} />
       <Route path='/mascaradetails' element={<MascaraDetail/>} />
       <Route path='/nailpolishdetails' element={<NailpolishDetail/>} />
       <Route path='/foundationdetails' element={<FoundationDetail/>} />
       <Route path='/findstore' element={<FindStore/>} />

       <Route path='/productdetails/:type/:id' element={<ProductDetails/>} />
       <Route path='/toprated' element={<TopRated/>} />
    </Routes>
 </BrowserRouter>


    </div>
  );
}

export default App;
