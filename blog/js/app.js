var app = angular.module("MUblog", []);


app.filter('moment', function () {
    return function(dateString, format) {
        return moment(dateString).format(format);
    };
});

app.controller('PostsCtrl', function ($scope, $http) {
    
    $http.get('http://mishushakov.ddns.net/api/getPosts/3').
        success(function (data, status, headers, config) {
            $scope.posts = data;
            $("#status").fadeOut();
	        $("#preloader").fadeOut("slow");
        });
    
    var clicked = false;
    $scope.rdmore = function(ID) {
        if (clicked) {
            $("#bodypp" + ID).hide();
            $("#rdmore" + ID).text("READ MORE");
            clicked = false;
        } else {
            $("#bodypp" + ID).slideDown().show();
            $("#rdmore" + ID).text("HIDE");
            clicked = true;
        }

    };
});