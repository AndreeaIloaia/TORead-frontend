import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import bbox from '@turf/bbox';

  import '../styles/Map.css';
import CITIES from '../data/countries.json';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWhhYnkiLCJhIjoiY2xwcjJuNmR6MDB5ODJscXB1eHV0djhybyJ9.uIERGNkfcsjD2BdcsV3VpA';

export default function CustomMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(23);
  const [lat, setLat] = useState(44.35);
  const [zoom, setZoom] = useState(6.7);

  useEffect(() => {
    // initialize map only once
    if (map.current) {
      return; 
    }
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/ahaby/clpr32q9y016901o09tpi9gjb',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // Add markers to the map.
    for (const marker of CITIES) {
      // Create a DOM element for each marker.
      const el = document.createElement('div');
      el.className = 'marker';
      // el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
      el.style.backgroundImage = 'url(/assets/pin.svg)';
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.backgroundSize = '100%';
      console.log(marker.city);

      el.addEventListener('click', () => {
      window.alert(marker.city);
      });
       
      // Add markers to the map.
      new mapboxgl.Marker(el)
      .setLngLat([marker.lng, marker.lat])
      .addTo(map.current);
      }
  });


  const onClickEvent = (event) => {
    // const feature = event.features[0];

    // if (feature) {
    //   const [minLng, minLat, maxLng, maxLat] = bbox(feature);

    //   if (map.current) {
        
    //     return; 
    //   }

    //   map.current.fitBounds([
    //     [minLng, minLat], [maxLng, maxLat]
    //   ], {padding:40, duration: 1000});
    // }
  };

  return (
    <div className='Map'>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div onClick={onClickEvent} ref={mapContainer} id="custom-map" className="map-container" />
    </div>
  );
}
