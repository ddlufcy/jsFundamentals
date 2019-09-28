if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.TERRAIN,

            disableDefaultUI: false,
        }
        var iconBase = 'https://visualpharm.com/assets/835/Map-595b40b65ba036ed117d480b.svg';
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        var marker = new google.maps.Marker({
            position: latlng,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10
              },
            map: map
        });

    });
} else {
    var para = document.createElement('p');
    para.textContent = 'Argh, no geolocation!';
    document.body.appendChild(para);
}