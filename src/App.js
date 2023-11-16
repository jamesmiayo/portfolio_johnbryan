import React from 'react';
import Nav from './components/navbar/Nav';
import Banner from './frames/banner/Banner';
import Interest from './frames/interest/Interest';
import Logo from './frames/logo/Logo';
import About from './frames/about/About';
import Portfolio from './frames/portfolio/Portfolio';
import Footer from './frames/footer/Footer';
import Contact from './frames/contact/Contact';

const App = () => {
  return (
    <div>
      <div>VERSION CONTROL: 1</div>
      <Nav />
      <Banner />
      <Interest />
      <Logo />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
