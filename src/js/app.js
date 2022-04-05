import mapShow from "../components/map/map";
import { addPlace } from "../components/sidebar/addmarker.js";
import geoJsonInit from "./initgeojson.js";
("../js/initgeojson");

import "../../node_modules/leaflet/dist/leaflet.css";
import iconRetinaUrl from "../../node_modules/leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "../../node_modules/leaflet/dist/images/marker-icon.png";
import shadowUrl from "../../node_modules/leaflet/dist/images/marker-shadow.png";
import L, { Marker, icon } from "leaflet";

import mapShow from "../components/map/map.js";

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

const data = geoJsonInit();
const map = mapShow(data);

document.getElementById("addplace").addEventListener("click", function () {
  addPlace(
    map,
    data,
    document.getElementById("pname").value,
    document.getElementById("cname").value,
    document.getElementById("rname").value
  );
});
