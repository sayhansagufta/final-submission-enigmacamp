import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home';
import Catatan from '../pages/Catatan';
import Favorit from '../pages/Favorit';
import TentangKami from '../pages/TentangKami';
import DetailCatatan from '../pages/DetailCatatan';

function Routing() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catatan" element={<Catatan />} />
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/catatan/detail" element={<DetailCatatan />} />
      </Routes>
  );
}

export default Routing;