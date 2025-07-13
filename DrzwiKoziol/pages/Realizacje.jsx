
import React from 'react';

function Realizacje() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nasze Realizacje</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Projekt 1</h2>
              <p className="text-gray-600">Opis projektu 1...</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Projekt 2</h2>
              <p className="text-gray-600">Opis projektu 2...</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Projekt 3</h2>
              <p className="text-gray-600">Opis projektu 3...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realizacje;