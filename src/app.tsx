import React, { FunctionComponent } from 'react'
import {Initial} from './pages/Initial';
import {Registration} from './pages/Registration';
import {Login} from './pages/Login';
import {Account} from './pages/Account';
import {Home} from './pages/Home';
import {MyHome} from './pages/MyHome';
import { Routes, Route } from 'react-router-dom';

export const App: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={ <Initial /> } />
        <Route path="/create" element={ <Registration />} />
        <Route path="/login" element={ <Login />} />
      </Routes>
    </>
  )
}
