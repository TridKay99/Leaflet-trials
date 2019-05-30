// knitializing the map and set its view to a chosen geographical 
// coordinates and zoom level.
// By default all mouse and touch interactions are enabled when your mouse goes 
// over the map.
// Below is adding the map to the html page along with the access token obtained
// from Mapbox.
// DEFINE MYMAP THAT IS USED TO REFER TO MAP. MAP VARIABLE
const mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidHJpZGR5IiwiYSI6ImNqd2E4OHpwNzAydHo0NW1kdWZndmV3YXUifQ.9kVkmG-RtfsbRfpt_-CQ2w'
}).addTo(mymap);

// Below is adding a marker to the map
const marker = L.marker([51.5, -0.09]).addTo(mymap);

// Below is adding a red circle on the map
const circle = L.circle([51.508, -0.11], {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 500
}).addTo(mymap);

const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>123456/b>").openPopup();
circle.bindPopup("Click the Pointer").openPopup();


// setTimeout popping up in log but not on page.
setTimeout(function(){ 
  polygon.bindPopup("HIRE ME!"); 
  console.log("hello");
}, 3000);


// This method invokes when someone clicks on the map telling them the lat long
// of the position
const popup = L.popup();


// the argument 'e' that is passed through the function is the point on the map
// that is clicked
function onMapClick(e) {
  console.log(e);
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);