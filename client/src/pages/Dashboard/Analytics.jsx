import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Traffic Overview</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex justify-between">
                  <span>/page-{item}</span>
                  <span className="text-gray-500">{1000 - item * 100} views</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">User Demographics</h3>
            <div className="space-y-3">
              {['USA', 'UK', 'Canada', 'Australia'].map((country) => (
                <div key={country} className="flex justify-between">
                  <span>{country}</span>
                  <span className="text-gray-500">{Math.floor(Math.random() * 100)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics; 