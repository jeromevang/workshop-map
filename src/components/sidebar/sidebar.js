import mapShow from "../map/map";
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
    invalidateSize


  } from 'leaflet';

export function addPlace(map,data, pname, cname) {
  console.log(pname);

  const myArray = cname.split(",").map((iNum) => parseFloat(iNum));
  
  feature = {};
  feature["type"] = "Feature";
  feature["geometry"] = { type: "Point", coordinates: myArray };
  feature["properties"] = { name: pname };

    data.features.push(feature);

    console.log(data);

    L.geoJSON(data, {
        style: function (feature) {
            return { color: feature.properties.color };
        }
    }).bindPopup(function (layer) {
        return layer.feature.properties.description;
    }).addTo(map);

  
}

export default addPlace;
