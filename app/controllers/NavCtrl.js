"use strict";

app.controller("NavCtrl", function($scope, searchTermData, $location) {
  $scope.searchText = searchTermData;
  $scope.navItems = [
      {url: "#/logout", name: "Logout", showState: "$parent.isLoggedIn"},
      {url: "#/login", name: "Login", showState: "!$parent.isLoggedIn"},
      {url: "#/items/list", name: "All Items", showState: "$parent.isLoggedIn"},
      {url: "#/items/new", name: "New Items", showState: "$parent.isLoggedIn"}
  ];

  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
//this is sharing data with the view. All navItems are available in the HTML to be used. Anywhere wtih in the nav tags can make an expression to bind to the nav controller. Cannot call anything outside the scope of the controller. For example, you cannot call anything nav outside the divs the nav is located.



