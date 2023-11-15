import React from 'react';
import Nav from './components/navbar/Nav';
import Banner from './frames/banner/Banner';
import Interest from './frames/interest/Interest';

const App = () => {
  return (
    <div>
      <div>VERSION CONTROL: 1</div>
      <Nav />
      <Banner />
      <Interest />
    </div>
  );
};

export default App;
