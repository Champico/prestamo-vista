// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexForm from './components/static/IndexForm';
import StudentForm from './components/static/StudentForm';
import ProfesorForm from './components/static/ProfesorForm';
import LoginForm from './components/static/Login';

import AdminPage from './components/dinamic/AdminPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexForm />} />
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/profesorForm" element={<ProfesorForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
