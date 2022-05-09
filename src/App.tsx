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
import { MuseumDetail } from './components/MuseumDetail';
import { User } from './components/User';

export const App=()=> {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="login" element={<Login />}/>
        <Route path="museums">
          <Route index element={<MuseumList />} />
          <Route path=":museumId" element={<MuseumDetail />}/>
        </Route>
        <Route path="users">
          <Route path=":userId" element={<User />}/>
        </Route>
        <Route path="exhibitions" element={<ExhibitionList />}/>
      </Routes>
    </div>
  );
};
