import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Initial } from './pages/Initial';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Account } from './pages/Account';
import { Home } from './pages/Home';
import { MyHome } from './pages/MyHome';

export const App: FC = () => (
  <Routes>
    <Route path="/" element={<Initial />} />
    <Route path="/create" element={<Registration />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);
