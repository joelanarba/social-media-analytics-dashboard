import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Analytics from './pages/Analytics';
import Competitors from './pages/Competitors';
import Reports from './pages/Reports';
import Team from './pages/Team';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
        <Sidebar />
        <Header />
        <main className="ml-64 pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/competitors" element={<Competitors />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;