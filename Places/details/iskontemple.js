$(document).ready(function () {
    $(".invisible-content").hide();
    $(document).on('click', "#btn", function () {
        var moreLessButton = $(".invisible-content").is(":visible") ? 'Read More' : 'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".box").find(".invisible-content").toggle();
        $(this).parent(".box").find(".visible-content").toggle();
    });
});

var apiKey = "b98e9dd2f9414231bae19340b76feff0";



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var orgin = latitude + "," + longitude;
    var destination = 28.6007 + "," + 77.0364;
    getDistance(orgin, destination);

}


function getDistance(orgin, destination) {
    console.log("Origin: " + orgin);
    console.log("Destination: " + destination);

    var fromdata = document.getElementById("fromdata");
    var destinationdata = document.getElementById("destinationdata");
    var durationdata = document.getElementById("durationdata");
    var distancedata = document.getElementById("distancedata");




    var url = "https://api.nextbillion.io/distancematrix/json?origins=" + orgin + "&destinations=" + destination + "&mode=4w&key=" + apiKey;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.rows.forEach(function (row) {

                row.elements.forEach(function (element) {
                    fromdata.style.display = "block";
                    destinationdata.style.display = "block";
                    durationdata.style.display = "block";
                    distancedata.style.display = "block";

                    fromdata.innerText = "Current Location";
                    destinationdata.innerText = "Iskon Temple"
                    durationdata.innerText = secondsToHms(element.duration.value);
                    distancedata.innerText = ((element.distance.value > 999) ? (element.distance.value / 1000) + " KM" : element.distance.value + " M");

                    // resultElement.innerText = "Distance: " + ((element.distance.value > 999) ? (element.distance.value / 1000) + " KM" : element.distance.value + " M") + " | Duration: " + secondsToHms(element.duration.value)

                });
            });
        });
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}