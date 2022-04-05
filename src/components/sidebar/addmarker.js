import mapShow from "../map/map";
import L from "leaflet";
import placeList from "../../js/placelist";

export function addPlace(map, data, pname, cname, rname) {
  if (pname == "") {
    alert("enter a name");
    return;
  }
  if (rname == "") {
    alert("enter a score");
    return;
  }
  if (cname == "") {
    alert("enter a location");
    return;
  }

  const myArray = cname.split(",").map((iNum) => parseFloat(iNum));

  feature = {};
  feature["type"] = "Feature";
  feature["geometry"] = { type: "Point", coordinates: myArray };
  feature["properties"] = { name: pname, stars: rname };

  data.features.push(feature);

  //console.log(data);

  L.geoJSON(data, {
    style: function (feature) {
      return { color: feature.properties.color };
    },
  })
    .bindPopup(function (layer) {
      return layer.feature.properties.description;
    })
    .addTo(map);

  placeList(data); //not happy with this, im unable to do a proper map reload.
}

export default addPlace;
