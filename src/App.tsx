import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Appbar';
import { SearchBar } from './components/Search';
import { FeaturedExhibition } from './components/FeaturedExhibition';

export const App=()=> {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <SearchBar/>
      <FeaturedExhibition/>
    </div>
  );
};
