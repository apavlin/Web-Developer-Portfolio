//   'use strict';

// $(document).ready(function() {
//     if ($('#aboutme__map').length) {
//         googlemap();
//     }
// });


var map,
myLatLng =  {lat: 41.398986, lng:  2.198376},
image = '../assets/img/map_marker.svg',
style= [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#1bab3f"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#86a77a"}]},{"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#262926"}]}];

function initMap() {
  map = new google.maps.Map(document.getElementById('aboutme__map'), {
    center: {lat: 41.397514, lng:2.161748},
    zoom: 14,
    scrollwheel:false,
    styles: style,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    streetViewControl: false

  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image

  });

}
