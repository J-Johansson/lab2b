import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Portfolio from './pages/Portfolio';
import NoPage from './pages/NoPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="lab2b" />
        <Route path="/" element ={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element ={<About />} />
          <Route path="contact" element ={<Contact />} />
          <Route path="experience" element ={<Experience />} />
          <Route path="portfolio" element ={<Portfolio />} />
          <Route path="*" element ={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


