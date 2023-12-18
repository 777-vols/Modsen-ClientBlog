'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import { Map, Marker, NavigationControl } from 'react-map-gl';

import { envVariables, initialViewSettings, mapMarkers, mapStyles } from '@/constants';

const { mapBoxApiKey } = envVariables;

const mapHeight = 355;

const MapGl = () => {
  const markers = mapMarkers.map(({ longitude, latitude }) => (
    <Marker key={longitude} longitude={longitude} latitude={latitude} />
  ));
  return (
    <section>
      <Map
        initialViewState={initialViewSettings}
        mapStyle={mapStyles}
        style={{ height: mapHeight }}
        mapboxAccessToken={mapBoxApiKey}>
        {markers}
        <NavigationControl showCompass={false} />
      </Map>
    </section>
  );
};

export default MapGl;
