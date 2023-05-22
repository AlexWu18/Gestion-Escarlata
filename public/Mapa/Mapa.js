function getLocation() {
    navigator.geolocation.getCurrentPosition(iniciarMap);
}

function iniciarMap(position){
    coord = {lat: position.coords.latitude ,lng: position.coords.longitude};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}