import GlobalStyle from './globalStyles';
import { Navbar } from './components/Navbar';
import { Dropdown } from './components/Dropdown';
import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { SliderData } from './data/SliderData';
import { InfoSection } from './components/InfoSection';
import { InfoDataOne, InfoDataTwo } from './data/InfoData';
import { Footer } from './components/Footer';

function App() {
  const [isOpen, setOpen] = useState(false);
  
  const toggle = () => {
    setOpen(!isOpen);
  }

  const resizeHandler = () => {
      if(window.innerWidth > 700) setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler )
  }, []);

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoDataOne}/>
      <InfoSection {...InfoDataTwo}/>
      <Footer/>
    </>
  );
}

export default App;
