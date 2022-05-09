import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/page/Appbar';
import { SearchBar } from './components/page/Search';
import { Routes,Route } from "react-router-dom"
import { ExhibitionList } from './components/page/ExhibitionList';
import { MuseumList } from './components/page/MuseumList';
import { Home } from './components/page/Home';
import { About } from './components/page/About';
import { Login } from './components/page/Login';
import { MuseumDetail } from './components/page/MuseumDetail';
import { UserDetail } from './components/page/UserDetail';

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
          <Route path=":userId" element={<UserDetail />}/>
        </Route>
        <Route path="exhibitions" element={<ExhibitionList />}/>
      </Routes>
    </div>
  );
};
