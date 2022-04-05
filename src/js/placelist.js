function placeList(data) {
    console.log(data);
const placelist = [];
const newarray = data ? [...data.features] : "";
    
  if (newarray !== "") {
    newarray.forEach((place) => {
      placelist.push([place.properties.name, place.properties.stars]);
    });
  }
  console.log(placelist);
  return placelist;
}

export default placeList;
