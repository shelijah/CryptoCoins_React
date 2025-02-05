import { useState } from 'react';

import ArrayCoins from './components/arrayItems/array.jsx';
import Container from 'react-bootstrap/Container';
import Navigation from './components/nav/nav.jsx'
import About from './components/about/about.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {

  const [activePage, setActivePage] = useState('home');

  return (
    <>
      <Container className="justify-content-md-center">
        <Navigation activePage={activePage} setActivePage={setActivePage} />
        {activePage === 'home' ? <ArrayCoins /> : <About />}
      </Container>
    </>
  )
}
