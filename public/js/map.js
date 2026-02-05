mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const markerEl= document.createElement("div");
markerEl.innerHTML = `<i class="fa-regular fa-compass"></i>`;
markerEl.style.cursor = "pointer";

const icon = markerEl.querySelector("i");
let rotated = false;

icon.addEventListener("click", () => {
  rotated = !rotated;

  if (rotated) {
    // rotate
    icon.style.transform = "rotate(360deg)";
    // change icon
    icon.className = "fa-solid fa-house";
  } else {
    // reset
    icon.style.transform = "rotate(0deg)";
    icon.className = "fa-regular fa-compass";
  }
});

const marker = new mapboxgl.Marker({element: markerEl, offset: [10, -5]})
        .setLngLat(listing.geometry.coordinates)       // listing.geometry.coordinates
        .setPopup(new mapboxgl.Popup({offset: 25})
            .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking<p>`)
            .setMaxWidth("400px"))
        .addTo(map);