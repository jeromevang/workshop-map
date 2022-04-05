function placeList(data) {
  const placelist = [];
  const newarray = data ? [...data.features] : "";

  if (newarray !== "") {
    newarray.forEach((place) => {
      placelist.push([place.properties.name, place.properties.stars]);
    });
  }

  let content = "";
  for (const [key, value] of Object.entries(placelist)) {
    content =
      content +
      `<div class="listitem"><div>${value[0]}</div><div>${value[1]}</div></div>`;
  }
  document.getElementById("list").innerHTML = content;
}

export default placeList;
