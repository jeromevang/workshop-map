import L, {
    LatLngExpression,
    FeatureGroup,
    TileLayerOptions,
    LayerEvent,
    LeafletMouseEvent,
    Marker,
    Layer,
    icon,
    LayerGroup,
    GeoJSON,
    remove
  } from 'leaflet';
function mapShow(data) {

    // Initialize the map
   
    var map = L.map('map', {
        scrollWheelZoom: true
    });
    
  
    // Set the position and zoom level of the map
    map.setView([51.920671, 4.395765], 9);
  
  
    //L.marker([47.70, 13.35]).addTo(map);
  
  
    L.geoJSON(data, {
        style: function (feature) {
            return { color: feature.properties.color };
        }
    }).bindPopup(function (layer) {
        return layer.feature.properties.description;
    }).addTo(map);
  
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map
}

export default mapShow