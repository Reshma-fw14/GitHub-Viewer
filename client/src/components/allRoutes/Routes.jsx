import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from '../Homepage/Home';
import { UserDetail } from '../Userdetails/UserDetail';

export default function AllRoutes() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user-detail' element={<UserDetail/>} />
      </Routes>
    </div>
  )
}
