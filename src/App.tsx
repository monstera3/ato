import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Appbar';
import { SearchBar } from './components/Search';
import { Routes,Route } from "react-router-dom"
import { ExhibitionList } from './components/ExhibitionList';
import { MuseumList } from './components/MuseumList';
import { Home } from './components/Home';
import { About } from './components/About';
import { Login } from './components/Login';

export const App=()=> {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="login" element={<Login />}/>
        <Route path="museums" element={<MuseumList />}/>
        <Route path="exhibitions" element={<ExhibitionList />}/>
      </Routes>
    </div>
  );
};
