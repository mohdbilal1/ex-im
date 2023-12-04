
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import About from './Components/About'
import Features from './Components/Features';
import PlansAndPrice from './Components/Plans&pricing';
import OurData from './Components/OurData';
import Contact from './Components/Contact';
import Login from './Components/Login';
import PrivacyAndPolicy from './Components/PrivacyAndPolicy';
import Disclaimer from './Components/Disclaimer';
import TermAndCondition from './Components/TermAndCondition';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Plans&Pricing' element={<PlansAndPrice />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/OurData' element={<OurData />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/privacypolicy' element={<PrivacyAndPolicy />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/terms&Conditions' element={<TermAndCondition />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
