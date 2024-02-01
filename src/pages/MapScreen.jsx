// src/pages/MapScreen.jsx

import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapScreen = () => {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7749, // Latitud válida
    longitude: -122.4194, // Longitud válida
    zoom: 13,
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con el término de búsqueda (por ejemplo, enviar a un servidor)
    console.log('Término de búsqueda:', searchTerm);
  };

  return (
    <div className="h-screen w-screen">
      {/* Mapa de fondo */}
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(newViewport) => setViewport(newViewport)}
        mapboxAccessToken="pk.eyJ1IjoiY2F0cmllbDE5ODkiLCJhIjoiY2xzMmlxZzR0MGpqNTJpcGl1cW1icjE3aCJ9.BbWLfwpMtC6Gh7j9cJmcgQ"    
        >
        {/* Marcador para la posición actual o resultados de búsqueda */}
        <Marker latitude={37.7749} longitude={-122.4194} offsetLeft={-20} offsetTop={-10}>
          <div className="marker"></div>
        </Marker>
      </ReactMapGL>

      {/* Barra de búsqueda */}
      <div className="absolute top-0 left-0 p-4 w-full">
        <form onSubmit={handleSearch} className="flex items-center bg-white rounded-md p-2 shadow-md">
          <input
            type="text"
            placeholder="Buscar lugares..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-none outline-none p-2 flex-grow"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default MapScreen;

