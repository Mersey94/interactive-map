mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyc2V5OTQiLCJhIjoiY2t0dXRyN2s1MjNxazJvbzNqcWE5dTZlNyJ9.SJkUN2U772GpgsZRxlO3Wg";
let maps = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mersey94/cktus0r581g1b18oaenx1t9mv", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 3, // starting zoom
});

let geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 38.913],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.414, 37.776],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
  ],
};

// add markers to map
for (const { geometry, properties } of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
}

// function precarica(img) {
//   $(img).each(function () {
//     $("<img/>")[0].src = this;
//   });
// }
// precarica([
//   "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png",
//   "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png",
//   "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png",
//   "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png",
//   "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png",
// ]);

// /*******jQuery for external title*********/

// jQuery(document).ready(function () {
//   $(".title-blue").mouseout(function () {
//     $("#map").attr(
//       "src",
//       "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
//     );
//   }),
//     $(".title-blue").mouseover(function () {
//       $("#map").attr(
//         "src",
//         "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png"
//       );
//     });
//   $(".title-red").mouseout(function () {
//     $("#map").attr(
//       "src",
//       "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
//     );
//   }),
//     $(".title-red").mouseover(function () {
//       $("#map").attr(
//         "src",
//         "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png"
//       );
//     });
//   $(".title-green").mouseout(function () {
//     $("#map").attr(
//       "src",
//       "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
//     );
//   }),
//     $(".title-green").mouseover(function () {
//       $("#map").attr(
//         "src",
//         "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png"
//       );
//     });
//   $(".title-yellow").mouseout(function () {
//     $("#map").attr(
//       "src",
//       "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
//     );
//   }),
//     $(".title-yellow").mouseover(function () {
//       $("#map").attr(
//         "src",
//         "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png"
//       );
//     });
//   $(".title-pink").mouseout(function () {
//     $("#map").attr(
//       "src",
//       "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
//     );
//   }),
//     $(".title-pink").mouseover(function () {
//       $("#map").attr(
//         "src",
//         "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png"
//       );
//     });
// });
