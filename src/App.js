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
    <BrowserRouter basename="lab2b">
      <Routes>
        <Route path="/" element ={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element ={<About />} />
          <Route path="Contact" element ={<Contact />} />
          <Route path="Experience" element ={<Experience />} />
          <Route path="Portfolio" element ={<Portfolio />} />
          <Route path="*" element ={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/* ROUTE PROBLEM MÅSTE FIXAS */
