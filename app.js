 var app = angular.module('myApp', []);

        app.controller('weather', function($scope, $http) {

            $scope.submitSearch = function(cityname) {

                $scope.city = cityname;
                $scope.searchHeader;

                if (cityname != null) {
                    $scope.urlsearch = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city + "&APPID=37c575fac2001e8baeb948b150af6673";

                    $http.get($scope.urlsearch).then(function(response) {

                        $scope.myData = response.data;
                        $scope.searchHeader = $scope.city + " City Current Weather";
                        $scope.longitude = $scope.myData.coord.lon;
                        $scope.latitude = $scope.myData.coord.lat;
                        $scope.weather = $scope.myData.weather[0].main;
                        $scope.sky = $scope.myData.weather[0].description;

                        $scope.temp = $scope.myData.main.temp;
                        $scope.temp_celcius = $scope.temp - 273.15;
                        $scope.tempreture = $scope.temp_celcius;
                        $scope.pressure = $scope.myData.main.pressure;
                        $scope.humidity =  $scope.myData.main.humidity;
                        $scope.sunrise = $scope.myData.sys.sunrise;
                        $scope.sunset = $scope.myData.sys.sunset;


                        $scope.wind_km = ($scope.myData.wind.speed * 60 * 60) / 1000;
                        $scope.wind =  $scope.wind_km ;
                        $scope.winddig = $scope.myData.wind.deg;
                        

                        $scope.urlsearch1 = "https://api.openweathermap.org/data/2.5/forecast?q=" + $scope.city + "&APPID=37c575fac2001e8baeb948b150af6673";
                        $http.get($scope.urlsearch1).then(function(response) {
                            $scope.myData = response.data.list;
                            
                           
                        });

                    });
                } else {
                    $scope.searchHeader = "Please Enter valid City name";
                }

            };

        });
