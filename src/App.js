import React from 'react';
import Nav from './components/navbar/Nav';
import Banner from './frames/banner/Banner';
import Interest from './frames/interest/Interest';
import Logo from './frames/logo/Logo';

const App = () => {
  return (
    <div>
      <div>VERSION CONTROL: 1</div>
      <Nav />
      <Banner />
      <Interest />
      <Logo />
    </div>
  );
};

export default App;
