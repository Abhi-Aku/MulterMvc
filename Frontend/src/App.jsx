import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostImage from './PostImage';
import GetImage from './GetImage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostImage />} />
        <Route path='/getimage' element={<GetImage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
