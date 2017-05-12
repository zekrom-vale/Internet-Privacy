var latlon, 
lct, 
st= "https://maps.googleapis.com/maps/api/staticmap?center=", 
end = "&size=400x300&sensor=false&key=AIzaSyBu        -916DdpKAjTmJNIgngS6HL_kDIKU0aU";
function checkCookieLct() {
    var lct=getCookieLct("location");
    if (lct !== "") {
        latlonExists(lct);
    } else {
       getLocation();
       }
}
function getCookieLct(ct) {
    var lct = ct + "=", decodedCookie = decodeURIComponent(document.cookie), ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(lct) === 0) {
            return c.substring(lct.length, c.length);
        }
    }
    return "";
}
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                document.getElementById("mapholder").innerHTML = "Geolocation is not supported.";
            }
        }
        function showPosition(position) {
            latlon = position.coords.latitude + "," + position.coords.longitude;
            setCookieLct("location", latlon, 30);
            var img_url = st+latlon+"&zoom=18"+end;
            var img_URL = st+latlon+"&zoom=14"+end;
            document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"' id='ex'>" + "<img src='"+img_URL+"'>";
            document.getElementById("loc").innerHTML = "Latitude= " + position.coords.latitude + "    Longitude= " + position.coords.longitude;
        }
    function latlonExists(lct) {
        var img_url = st+lct+"&zoom=18"+end, 
        img_URL = st+lct+"&zoom=14"+end;
        document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"' id='ex'>" + "<img src='"+img_URL+"'>";
        var res = lct.split(",");
        document.getElementById("loc").innerHTML = "Latitude= " + res[0] + "    Longitude= " + res[1] 
        + "</br>" + "I know where you are...";
        //Required peramiter lct
    }
//To use this code on your website, get a free API key from Google.
//Read more at: w3schools.com/graphics/google_maps_basic.asp
function showError(error) {
    console.log('"latlon"' + latlon);
    console.log('"lct="' + lct);
    console.log("showError");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("mapholder").innerHTML = "Alert:  User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("mapholder").innerHTML = "Error: Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("mapholder").innerHTML = "Error: The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("mapholder").innerHTML = "Error: An unknown error occurred.";
            break;
    }
}
function setCookieLct(ct,cv,ed) {
    var d = new Date();
    d.setTime(d.getTime() + (ed*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = ct + "=" + cv + ";" + expires + ";path=/";
}