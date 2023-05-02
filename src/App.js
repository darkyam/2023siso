import './App.css';
import Loading from './component/Loading';
import Navibar from './component/Navibar';
import Home from './pages/Home';
import Foot from './component/Foot';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Entry from './pages/Entry';
import Archieve from './pages/Archieve';
import Exhibition from './pages/Exhibition';
import Credit from './pages/Credit';
import Adre from './pages/entry_info/adre';
import Droma from './pages/entry_info/droma';
import Greenb from './pages/entry_info/green';
import Hangul from './pages/entry_info/hangul';
import Hyphen from './pages/entry_info/hyph';
import Hips from './pages/entry_info/hips';
import Iray from './pages/entry_info/iray';
import Proto from './pages/entry_info/proto';
import Yadz from './pages/entry_info/yadz';
import Grb from './pages/archive_info/grb';
import Dro from './pages/archive_info/dro';
import Ir from './pages/archive_info/iray';
import Pro from './pages/archive_info/proto';
import Adr from './pages/archive_info/adre';
import Hang from './pages/archive_info/hangul';
import Yad from './pages/archive_info/yadz';
import Hyp from './pages/archive_info/hyp';

function App() {
  return (
    
      <BrowserRouter>
      <div className='App'>
      <Navibar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/entry/' element={<Entry/>}/>
        <Route path="/entry/Adrenalin" element={<Adre/>}/>
        <Route path='/entry/Dromapic' element={<Droma/>}/>
        <Route path='/entry/Greenbee' element={<Greenb/>}/>
        <Route path='/entry/Hangulggol' element={<Hangul/>}/>
        <Route path='/entry/Hyphen' element={<Hyphen/>}/>
        <Route path='/entry/Hips' element={<Hips/>}/>
        <Route path='/entry/I-ray' element={<Iray/>}/>
        <Route path='/entry/Proto' element={<Proto/>}/>
        <Route path='/entry/Yadz' element={<Yadz/>}/>
        <Route path='/credit' element={<Credit/>}/>
        <Route path='/archieve/' element={<Archieve/>}/>
        <Route path='/archieve/Adrenalin' element={<Adr/>}/>
        <Route path='/archieve/Dromapic' element={<Dro/>}/>
        <Route path='/archieve/Greenbee' element={<Grb/>}/>
        <Route path='/archieve/Hangulggol' element={<Hang/>}/>
        <Route path='/archieve/Hyphen' element={<Hyp/>}/>
        <Route path='/archieve/Hips' element={<Archieve/>}/>
        <Route path='/archieve/I-ray' element={<Ir/>}/>
        <Route path='/archieve/Proto' element={<Pro/>}/>
        <Route path='/archieve/Yadz' element={<Yad/>}/>
        <Route path='/exhibition' element={<Exhibition/>}/>
      </Routes>
      <Foot/>
      </div>

      
      </BrowserRouter>
  );
}

export default App;
