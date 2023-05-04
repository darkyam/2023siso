import './App.css';
import Loading from './component/Loading';
import Navibar from './component/Navibar';
import Home from './pages/Home';
import Foot from './component/Foot';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
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
import Proto_3 from './pages/archive_person/proto/proto_3';
import Proto_5 from './pages/archive_person/proto/proto_5';
import Proto_6 from './pages/archive_person/proto/proto_6';
import Proto_7 from './pages/archive_person/proto/proto_7';
import Proto_8 from './pages/archive_person/proto/proto_8';
import Proto_9 from './pages/archive_person/proto/proto_9';
import Proto_10 from './pages/archive_person/proto/proto_10';
import Proto_11 from './pages/archive_person/proto/proto_11';
import Proto_12 from './pages/archive_person/proto/proto_12';
import Proto_13 from './pages/archive_person/proto/proto_13';
import Proto_15 from './pages/archive_person/proto/proto_15';
import Proto_16 from './pages/archive_person/proto/proto_16';
import Proto_17 from './pages/archive_person/proto/proto_17';
import Proto_18 from './pages/archive_person/proto/proto_18';
import Proto_19 from './pages/archive_person/proto/proto_19';
import Proto_20 from './pages/archive_person/proto/proto_20';
import Proto_21 from './pages/archive_person/proto/proto_21';
import Proto_22 from './pages/archive_person/proto/proto_22';
import Hangul_11 from './pages/archive_person/hangul/hangul_11';
import Hangul_12 from './pages/archive_person/hangul/hangul_12';
import Hangul_13 from './pages/archive_person/hangul/hangul_13';
import Hangul_14 from './pages/archive_person/hangul/hangul_14';
import Hangul_15 from './pages/archive_person/hangul/hangul_15';
import Hangul_16 from './pages/archive_person/hangul/hangul_16';
import Hangul_17 from './pages/archive_person/hangul/hangul_17';
import Hangul_18 from './pages/archive_person/hangul/hangul_18';
import Hangul_19 from './pages/archive_person/hangul/hangul_19';
import Hangul_20 from './pages/archive_person/hangul/hangul_20';
import Hangul_21 from './pages/archive_person/hangul/hangul_21';
import Hangul_22 from './pages/archive_person/hangul/hangul_22';
import Hangul_23 from './pages/archive_person/hangul/hangul_23';
import Hangul_24 from './pages/archive_person/hangul/hangul_24';
import Hangul_25 from './pages/archive_person/hangul/hangul_25';
import Droma_21 from './pages/archive_person/droma/droma_21';
import Droma_7 from './pages/archive_person/droma/droma_7';
import Droma_6 from './pages/archive_person/droma/droma_6';
import Droma_4 from './pages/archive_person/droma/droma_4';
import Droma_3 from './pages/archive_person/droma/droma_3';
import Yadz_4 from './pages/archive_person/yadz/yadz_4';
import Yadz_6 from './pages/archive_person/yadz/yadz_6';
import Yadz_8 from './pages/archive_person/yadz/yadz_8';
import Yadz_9 from './pages/archive_person/yadz/yadz_9';
import Yadz_10 from './pages/archive_person/yadz/yadz_10';
import Yadz_11 from './pages/archive_person/yadz/yadz_11';
import Yadz_13 from './pages/archive_person/yadz/yadz_13';
import Yadz_14 from './pages/archive_person/yadz/yadz_14';
import Yadz_15 from './pages/archive_person/yadz/yadz_15';
import Yadz_16 from './pages/archive_person/yadz/yadz_16';
import Yadz_18 from './pages/archive_person/yadz/yadz_18';
import Yadz_19 from './pages/archive_person/yadz/yadz_19';
import Yadz_20 from './pages/archive_person/yadz/yadz_20';
import Yadz_21 from './pages/archive_person/yadz/yadz_21';
import Yadz_22 from './pages/archive_person/yadz/yadz_22';
import Yadz_23 from './pages/archive_person/yadz/yadz_23';
import Yadz_24 from './pages/archive_person/yadz/yadz_24';
import Hip from './pages/archive_info/hips';
import Hips_3 from './pages/archive_person/hips/hips_3';
import Hips_4 from './pages/archive_person/hips/hips_4';
import Hips_5 from './pages/archive_person/hips/hips_5';
import Hips_6 from './pages/archive_person/hips/hips_6';
import Hips_7 from './pages/archive_person/hips/hips_7';
import Hips_8 from './pages/archive_person/hips/hips_8';
import Hips_9 from './pages/archive_person/hips/hips_9.js';
import Hips_10 from './pages/archive_person/hips/hips_10';
import Hips_11 from './pages/archive_person/hips/hips_11';
import Hips_12 from './pages/archive_person/hips/hips_12';
import Ad_4 from './pages/archive_person/ad/ad_4';
import Ad_5 from './pages/archive_person/ad/ad_5';
import Ad_6 from './pages/archive_person/ad/ad_6';
import Ad_7 from './pages/archive_person/ad/ad_7';
import Ad_9 from './pages/archive_person/ad/ad_9';
import Ad_10 from './pages/archive_person/ad/ad_10';
import Ad_12 from './pages/archive_person/ad/ad_12';
import Ad_13 from './pages/archive_person/ad/ad_13';
import Ad_14 from './pages/archive_person/ad/ad_14';
import Ad_15 from './pages/archive_person/ad/ad_15';
import Ad_16 from './pages/archive_person/ad/ad_16';
import Ad_17 from './pages/archive_person/ad/ad_17';
import Ad_18 from './pages/archive_person/ad/ad_18';
import Greenb_3 from './pages/archive_person/greenb/greenb_3';
import Greenb_4 from './pages/archive_person/greenb/greenb_4';
import Greenb_5 from './pages/archive_person/greenb/greenb_5';
import Greenb_6 from './pages/archive_person/greenb/greenb_6';
import Greenb_7 from './pages/archive_person/greenb/greenb_7';
import Greenb_8 from './pages/archive_person/greenb/greenb_8';
import Greenb_9 from './pages/archive_person/greenb/greenb_9';
import Greenb_11 from './pages/archive_person/greenb/greenb_11';
import Greenb_12 from './pages/archive_person/greenb/greenb_12';
import Greenb_13 from './pages/archive_person/greenb/greenb_13';
import Greenb_14 from './pages/archive_person/greenb/greenb_14';
import Greenb_15 from './pages/archive_person/greenb/greenb_15';
import Greenb_16 from './pages/archive_person/greenb/greenb_16';
import Greenb_17 from './pages/archive_person/greenb/greenb_17';
import Greenb_18 from './pages/archive_person/greenb/greenb_18';
import Greenb_20 from './pages/archive_person/greenb/greenb_20';
import Greenb_10 from './pages/archive_person/greenb/greenb_10';
import Greenb_23 from './pages/archive_person/greenb/greenb_23';
import Hyphen_6 from './pages/archive_person/hyphen/hyphen_6';
import Hyphen_10 from './pages/archive_person/hyphen/hyphen_10';
import Hyphen_11 from './pages/archive_person/hyphen/hyphen_11';
import Hyphen_12 from './pages/archive_person/hyphen/hyphen_12';
import Hyphen_14 from './pages/archive_person/hyphen/hyphen_14';
import Hyphen_18 from './pages/archive_person/hyphen/hyphen_18';
import Hyphen_21 from './pages/archive_person/hyphen/hyphen_21';
import Hyphen_24 from './pages/archive_person/hyphen/hyphen_24';
import Hyphen_28 from './pages/archive_person/hyphen/hyphen_28';
import Entry_change from './component/entry_change';




function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      setContentLoaded(true);
    }, 3800);
  }, []);
  return (
    
      <BrowserRouter>
      <div className='App'>
      {showLoading && <Loading />}
      <Navibar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/entry/' element={<Entry_change/>}/>
        <Route path="/entry/ADRENALIN" element={<Adre/>}/>
        <Route path='/entry/DROMAPIC' element={<Droma/>}/>
        <Route path='/entry/GREENBEE' element={<Greenb/>}/>
        <Route path='/entry/HANGULGGOL' element={<Hangul/>}/>
        <Route path='/entry/Hyphen' element={<Hyphen/>}/>
        <Route path='/entry/HIPS' element={<Hips/>}/>
        <Route path='/entry/I-RAY' element={<Iray/>}/>
        <Route path='/entry/PROTO' element={<Proto/>}/>
        <Route path='/entry/YADZ' element={<Yadz/>}/>
        <Route path='/credit' element={<Credit/>}/>
        <Route path='/archieve/' element={<Archieve/>}/>
        <Route path='/archieve/ADRENALIN' element={<Adr/>}/>
        <Route path='/archieve/ADRENALIN/4' element={<Ad_4/>}/>
        <Route path='/archieve/ADRENALIN/5' element={<Ad_5/>}/>
        <Route path='/archieve/ADRENALIN/6' element={<Ad_6/>}/>
        <Route path='/archieve/ADRENALIN/7' element={<Ad_7/>}/>
        <Route path='/archieve/ADRENALIN/9' element={<Ad_9/>}/>
        <Route path='/archieve/ADRENALIN/10' element={<Ad_10/>}/>
        <Route path='/archieve/ADRENALIN/12' element={<Ad_12/>}/>
        <Route path='/archieve/ADRENALIN/13' element={<Ad_13/>}/>
        <Route path='/archieve/ADRENALIN/14' element={<Ad_14/>}/>
        <Route path='/archieve/ADRENALIN/15' element={<Ad_15/>}/>
        <Route path='/archieve/ADRENALIN/16' element={<Ad_16/>}/>
        <Route path='/archieve/ADRENALIN/17' element={<Ad_17/>}/>
        <Route path='/archieve/ADRENALIN/18' element={<Ad_18/>}/>
        <Route path='/archieve/DROMAPIC' element={<Dro/>}/>
        <Route path='/archieve/DROMAPIC/3' element={<Droma_3/>}/>
        <Route path='/archieve/DROMAPIC/4' element={<Droma_4/>}/>
        <Route path='/archieve/DROMAPIC/6' element={<Droma_6/>}/>
        <Route path='/archieve/DROMAPIC/7' element={<Droma_7/>}/>
        <Route path='/archieve/DROMAPIC/21' element={<Droma_21/>}/>
        <Route path='/archieve/GREENBEE' element={<Grb/>}/>
        <Route path='/archieve/GREENBEE/3' element={<Greenb_3/>}/>
        <Route path='/archieve/GREENBEE/4' element={<Greenb_4/>}/>
        <Route path='/archieve/GREENBEE/5' element={<Greenb_5/>}/>
        <Route path='/archieve/GREENBEE/6' element={<Greenb_6/>}/>
        <Route path='/archieve/GREENBEE/7' element={<Greenb_7/>}/>
        <Route path='/archieve/GREENBEE/8' element={<Greenb_8/>}/>
        <Route path='/archieve/GREENBEE/9' element={<Greenb_9/>}/>
        <Route path='/archieve/GREENBEE/10' element={<Greenb_10/>}/>
        <Route path='/archieve/GREENBEE/11' element={<Greenb_11/>}/>
        <Route path='/archieve/GREENBEE/12' element={<Greenb_12/>}/>
        <Route path='/archieve/GREENBEE/13' element={<Greenb_13/>}/>
        <Route path='/archieve/GREENBEE/14' element={<Greenb_14/>}/>
        <Route path='/archieve/GREENBEE/15' element={<Greenb_15/>}/>
        <Route path='/archieve/GREENBEE/16' element={<Greenb_16/>}/>
        <Route path='/archieve/GREENBEE/17' element={<Greenb_17/>}/>
        <Route path='/archieve/GREENBEE/18' element={<Greenb_18/>}/>
        <Route path='/archieve/GREENBEE/20' element={<Greenb_20/>}/>
        <Route path='/archieve/GREENBEE/23' element={<Greenb_23/>}/>
        <Route path='/archieve/HANGULGGOL' element={<Hang/>}/>
        <Route path='/archieve/HANGULGGOL/11' element={<Hangul_11/>}/>
        <Route path='/archieve/HANGULGGOL/12' element={<Hangul_12/>}/>
        <Route path='/archieve/HANGULGGOL/13' element={<Hangul_13/>}/>
        <Route path='/archieve/HANGULGGOL/14' element={<Hangul_14/>}/>
        <Route path='/archieve/HANGULGGOL/15' element={<Hangul_15/>}/>
        <Route path='/archieve/HANGULGGOL/16' element={<Hangul_16/>}/>
        <Route path='/archieve/HANGULGGOL/17' element={<Hangul_17/>}/>
        <Route path='/archieve/HANGULGGOL/18' element={<Hangul_18/>}/>
        <Route path='/archieve/HANGULGGOL/19' element={<Hangul_19/>}/>
        <Route path='/archieve/HANGULGGOL/20' element={<Hangul_20/>}/>
        <Route path='/archieve/HANGULGGOL/21' element={<Hangul_21/>}/>
        <Route path='/archieve/HANGULGGOL/22' element={<Hangul_22/>}/>
        <Route path='/archieve/HANGULGGOL/23' element={<Hangul_23/>}/>
        <Route path='/archieve/HANGULGGOL/24' element={<Hangul_24/>}/>
        <Route path='/archieve/HANGULGGOL/25' element={<Hangul_25/>}/>
        <Route path='/archieve/HYPHEN' element={<Hyp/>}/>
        <Route path='/archieve/HYPHEN/6' element={<Hyphen_6/>}/>
        <Route path='/archieve/HYPHEN/10' element={<Hyphen_10/>}/>
        <Route path='/archieve/HYPHEN/11' element={<Hyphen_11/>}/>
        <Route path='/archieve/HYPHEN/12' element={<Hyphen_12/>}/>
        <Route path='/archieve/HYPHEN/14' element={<Hyphen_14/>}/>
        <Route path='/archieve/HYPHEN/18' element={<Hyphen_18/>}/>
        <Route path='/archieve/HYPHEN/21' element={<Hyphen_21/>}/>
        <Route path='/archieve/HYPHEN/24' element={<Hyphen_24/>}/>
        <Route path='/archieve/HYPHEN/28' element={<Hyphen_28/>}/>
        <Route path='/archieve/HIPS' element={<Hip/>}/>
        <Route path='/archieve/HIPS/3' element={<Hips_3/>}/>
        <Route path='/archieve/HIPS/4' element={<Hips_4/>}/>
        <Route path='/archieve/HIPS/5' element={<Hips_5/>}/>
        <Route path='/archieve/HIPS/6' element={<Hips_6/>}/>
        <Route path='/archieve/HIPS/7' element={<Hips_7/>}/>
        <Route path='/archieve/HIPS/8' element={<Hips_8/>}/>
        <Route path='/archieve/HIPS/9' element={<Hips_9/>}/>
        <Route path='/archieve/HIPS/10' element={<Hips_10/>}/>
        <Route path='/archieve/HIPS/11' element={<Hips_11/>}/>
        <Route path='/archieve/HIPS/12' element={<Hips_12/>}/>
        <Route path='/archieve/I-RAY' element={<Ir/>}/>
        <Route path='/archieve/PROTO' element={<Pro/>}/>
        <Route path='/archieve/PROTO/3' element={<Proto_3/>}/>
        <Route path='/archieve/PROTO/5' element={<Proto_5/>}/>
        <Route path='/archieve/PROTO/6' element={<Proto_6/>}/>
        <Route path='/archieve/PROTO/7' element={<Proto_7/>}/>
        <Route path='/archieve/PROTO/8' element={<Proto_8/>}/>
        <Route path='/archieve/PROTO/9' element={<Proto_9/>}/>
        <Route path='/archieve/PROTO/10' element={<Proto_10/>}/>
        <Route path='/archieve/PROTO/11' element={<Proto_11/>}/>
        <Route path='/archieve/PROTO/12' element={<Proto_12/>}/>
        <Route path='/archieve/PROTO/13' element={<Proto_13/>}/>
        <Route path='/archieve/PROTO/15' element={<Proto_15/>}/>
        <Route path='/archieve/PROTO/16' element={<Proto_16/>}/>
        <Route path='/archieve/PROTO/17' element={<Proto_17/>}/>
        <Route path='/archieve/PROTO/18' element={<Proto_18/>}/>
        <Route path='/archieve/PROTO/19' element={<Proto_19/>}/>
        <Route path='/archieve/PROTO/20' element={<Proto_20/>}/>
        <Route path='/archieve/PROTO/21' element={<Proto_21/>}/>
        <Route path='/archieve/PROTO/22' element={<Proto_22/>}/>
        <Route path='/archieve/YADZ' element={<Yad/>}/>
        <Route path='/archieve/YADZ/4' element={<Yadz_4/>}/>
        <Route path='/archieve/YADZ/6' element={<Yadz_6/>}/>
        <Route path='/archieve/YADZ/8' element={<Yadz_8/>}/>
        <Route path='/archieve/YADZ/9' element={<Yadz_9/>}/>
        <Route path='/archieve/YADZ/10' element={<Yadz_10/>}/>
        <Route path='/archieve/YADZ/11' element={<Yadz_11/>}/>
        <Route path='/archieve/YADZ/13' element={<Yadz_13/>}/>
        <Route path='/archieve/YADZ/14' element={<Yadz_14/>}/>
        <Route path='/archieve/YADZ/15' element={<Yadz_15/>}/>
        <Route path='/archieve/YADZ/16' element={<Yadz_16/>}/>
        <Route path='/archieve/YADZ/18' element={<Yadz_18/>}/>
        <Route path='/archieve/YADZ/19' element={<Yadz_19/>}/>
        <Route path='/archieve/YADZ/20' element={<Yadz_20/>}/>
        <Route path='/archieve/YADZ/21' element={<Yadz_21/>}/>
        <Route path='/archieve/YADZ/22' element={<Yadz_22/>}/>
        <Route path='/archieve/YADZ/23' element={<Yadz_23/>}/>
        <Route path='/archieve/YADZ/24' element={<Yadz_24/>}/>
        <Route path='/exhibition' element={<Exhibition/>}/>
      </Routes>
      <Foot/>
      </div>
      </BrowserRouter>
  );
}

export default App;
