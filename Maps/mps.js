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
                var destination = 28.5535 + "," + 77.2588;
                getDistance(orgin, destination);

            }


            function getDistance(orgin, destination) {
                console.log("Origin: " + orgin);
                console.log("Destination: " + destination);
                
                var resultElement = document.getElementById("result");
                var url = "https://api.nextbillion.io/distancematrix/json?origins=" + orgin + "&destinations=" + destination + "&mode=4w&key=" + apiKey;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        data.rows.forEach(function (row) {

                            row.elements.forEach(function (element) {
                                resultElement.style.display = "block";
                                resultElement.innerText = "Distance: " + ((element.distance.value > 999) ? (element.distance.value / 1000) + " KM" : element.distance.value + " M") + " | Duration: " + secondsToHms(element.duration.value)

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
