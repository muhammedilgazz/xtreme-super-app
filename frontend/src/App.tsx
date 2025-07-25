import './assets/css/dashboard.css';
import React from 'react';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 pt-4 pb-4 pr-4 pl-0">
          <DashboardPage />
        </main>
      </div>
    </div>
  );
}

export default App;
