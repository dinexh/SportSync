import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/dashboard/analytics" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4">
            <h2 className="text-xl font-semibold">Welcome to Dashboard</h2>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 