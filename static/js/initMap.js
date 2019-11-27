function initMap() {
  var myLatLng = {
    lat: 53.9108546,
    lng: 27.5855715
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
