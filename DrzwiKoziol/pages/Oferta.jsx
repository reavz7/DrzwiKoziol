import React from 'react';

function Oferta() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nasza Oferta</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Usługa 1</h2>
            <p className="text-gray-600">Opis usługi 1...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Usługa 2</h2>
            <p className="text-gray-600">Opis usługi 2...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Usługa 3</h2>
            <p className="text-gray-600">Opis usługi 3...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oferta;