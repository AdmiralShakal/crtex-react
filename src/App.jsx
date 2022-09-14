import Header from './components/Header';
import About from './components/About';
import Directions from './components/Directions';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Companies from './components/Companies';
import Program from './components/Program';
import Blog from './components/Blog';
import Questions from './components/Questions';
import Footer from './components/Footer';
import { useState } from 'react';

import './scss/app.scss';

function App() {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <div className="wraper">
      <div
        className={burgerActive ? 'overlay overlay--active' : 'overlay'}
        onClick={() => setBurgerActive(!burgerActive)}></div>
      <Header burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
      <main className="main">
        <About />
        <Directions />
        <Team />
        <Testimonials />
        <Companies />
        <Program />
        <Blog />
        <Questions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
