import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AdmissionOpenPage from '../AdmissionOpenPage';
import NotFoundPage from './NotFoundPage';
import AcademicsPage from './AcademicsPage';
import AboutUsPage from '../AboutUsPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admission" element={<AdmissionOpenPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
