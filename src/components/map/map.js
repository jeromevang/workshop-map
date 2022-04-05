import L from "leaflet";
import placeList from "../../js/placelist";

function mapShow(data) {
  // Initialize the map
  var map = L.map("map", {
    scrollWheelZoom: true,
  });
    
  const view = new Array(data.features[0].geometry.coordinates);
  arry = [view[0][1], view[0][0]]; // Berci, data will be modified if i try to reverse lng and lat.

  //[51.920671, 4.395765]
  // Set the position and zoom level of the map
  map.setView(arry, 9);

  L.geoJSON(data, {
    style: function (feature) {
      return { color: feature.properties.color };
    },
  })
    .bindPopup(function (layer) {
      return layer.feature.properties.description;
    })
    .addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  placeList(data);
  return map;
}

export default mapShow;
