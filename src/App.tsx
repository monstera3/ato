import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/page/ResponsiveAppBar';
import { SearchBar } from './components/page/Search';
import { Routes, Route } from 'react-router-dom'
import { ExhibitionList } from './components/page/ExhibitionList';
import { MuseumList } from './components/page/MuseumList';
import { Home } from './components/page/Home';
import { About } from './components/page/About';
import { MuseumDetail } from './components/page/MuseumDetail';
import { UserDetail } from './components/page/UserDetail';
import { Toolbar } from '@mui/material';
import { AuthProvider } from './context/AuthContext'
import { ExhibitionDetail } from './components/page/ExhibitionDetail';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const App=()=> {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="App">
          <ResponsiveAppBar/>
          <SearchBar/>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="museums">
              <Route index element={<MuseumList />} />
              <Route path=":museumId" element={<MuseumDetail />}/>
            </Route>
            <Route path="users">
              <Route path=":userId" element={<UserDetail />}/>
            </Route>
            <Route path="exhibitions">
              <Route index element={<ExhibitionList />} />
              <Route path=":exhibitionId" element={<ExhibitionDetail />}/>
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
};
