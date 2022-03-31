import { addPlace } from "../components/sidebar/sidebar.js";
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

document.getElementById("addplace").addEventListener("click", function () { addPlace(document.getElementById("pname").value) });

maplink = document.getElementById("map")

// Initialize leaflet.js
//var L = require('leaflet');

// Initialize the map
var map = L.map('map', {
  scrollWheelZoom: true
});

// Set the position and zoom level of the map
map.setView([47.70, 13.35], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);