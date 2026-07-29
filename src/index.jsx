import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import HolidayFX from './HolidayFX';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HolidayFX />
    <App />
  </StrictMode>
);
