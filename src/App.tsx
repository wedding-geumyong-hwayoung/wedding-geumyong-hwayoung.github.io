import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wedding } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wedding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
