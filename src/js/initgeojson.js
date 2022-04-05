function geoJsonInit() {
  return{
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [4.395765, 51.920671]
        },
        properties: {
          id: "asd-123",
          name: 'Yokohama Ramen Saito',
          stars: 5
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [4.295715, 51.820611]
        },
        properties: {
          id: "asd-123",
          name: 'Yokohama Ramen Saito1',
          stars: 4
        }
      },
    ]
  }
}

export default geoJsonInit
