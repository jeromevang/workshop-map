import mapShow from "../components/map/map";
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

const data = geoJsonInit()
const map = mapShow(data)



document.getElementById("addplace").addEventListener("click", function () { addPlace(map, data, document.getElementById("pname").value,document.getElementById("cname").value) });
document.getElementById("initgeojson").addEventListener("click", function () { location.reload() });
document.getElementById("delgeojson").addEventListener("click", function () { localStorage.removeItem("geoJSON"),location.reload() });


const placelist = placeList(data)




let content=""
for (const [key, value] of Object.entries(placelist)) {
    content = content + `<div class="listitem"><div>${value[0]}</div><div>${value[1]}</div></div>`;
    //console.log("log"+`${key}: ${value}`);
}
document.getElementById("list").innerHTML = content


