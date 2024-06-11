import React, { useEffect } from 'react';
import 'ol/ol.css';
import OlMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const Map = () => {
  useEffect(() => {
    const map = new OlMap({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;
