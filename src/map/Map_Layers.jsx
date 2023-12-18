import { GeoJSONSourceRaw, FillLayer, LineLayer } from "react-map-gl";

const sfNeighborhoods = {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/feature-example-sf.json'
  };

const fillLayer = {
    id: 'sf-neighborhoods-fill',
    source: 'sf-neighborhoods',
    type: 'fill',
    paint: {
        'fill-outline-color': '#0040c8',
        'fill-color': '#fff',
        'fill-opacity': 0
    }
};

const lineLayer = {
    id: 'sf-neighborhoods-outline',
    source: 'sf-neighborhoods',
    type: 'line',
    paint: {
        'line-width': 2,
        'line-color': '#0080ef'
    }
};

export default {
    ...MAP_STYLE,
    sources: {
        ...MAP_STYLE.sources,
        ['sf-neighborhoods']: sfNeighborhoods
    },
    layers: [...MAP_STYLE.layers, fillLayer, lineLayer]
};