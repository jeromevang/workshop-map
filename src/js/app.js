import { addPlace } from "../components/sidebar/sidebar.js";
import * as L from 'leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';
import markerIconPng from '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import markerIconPngShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png';


document.getElementById("addplace").addEventListener("click", function () { addPlace(document.getElementById("pname").value) });

// Initialize the map
var map = L.map('map', {
  scrollWheelZoom: true
});

// Set the position and zoom level of the map
map.setView([47.70, 13.35], 7);

var myIcon = L.icon({
    iconUrl: markerIconPng,
    iconSize: [38, 50],
    iconAnchor: [22, 50],
    popupAnchor: [-3, -76],
    shadowUrl: markerIconPngShadow,
    shadowSize: [68, 50],
    shadowAnchor: [22, 50]
});
L.marker([47.70, 13.35], {icon: myIcon}).addTo(map);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);