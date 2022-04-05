import { addPlace } from "../components/sidebar/sidebar.js";
import geoJsonInit from "./initgeojson.js"; "../js/initgeojson";
import placeList from "../js/placelist";
import '../../node_modules/leaflet/dist/leaflet.css';
import iconRetinaUrl from '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import iconUrl from '../../node_modules/leaflet/dist/images/marker-icon.png';
import shadowUrl from '../../node_modules/leaflet/dist/images/marker-shadow.png';
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
  GeoJSON
} from 'leaflet';

Marker.prototype.options.icon = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

document.getElementById("addplace").addEventListener("click", function () { addPlace(document.getElementById("pname").value) });
document.getElementById("initgeojson").addEventListener("click", function () { geoJsonInit(), location.reload() });
document.getElementById("delgeojson").addEventListener("click", function () { localStorage.removeItem("geoJSON"),location.reload() });


const placelist = placeList()
const data = JSON.parse(localStorage.getItem("geoJSON"));

// Initialize the map
var map = L.map('map', {
  scrollWheelZoom: true
});

// Set the position and zoom level of the map
map.setView([47.70, 13.35], 7);


L.marker([47.70, 13.35]).addTo(map);


L.geoJSON(data, {
    style: function (feature) {
        return {color: feature.properties.color};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
}).addTo(map);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let content=""
for (const [key, value] of Object.entries(placelist)) {
    content = content + `<div class="listitem"><div>${value[0]}</div><div>${value[1]}</div></div>`;
    console.log("log"+`${key}: ${value}`);
}
document.getElementById("list").innerHTML = content


