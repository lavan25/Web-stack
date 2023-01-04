var app = angular.module("myMod",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
	
	$routeProvider.
	when("/coach",{
		templateUrl:'views/coach.html',
		controller:'coach_ctr'
	}).
	when("/student",{
		templateUrl:'views/students.html',
		controller:'student_ctr'
	}).
	when("/sport",{
		templateUrl:'views/sp.html',
		controller:'sport_ctr'
	}).
	when("/gallery",{
		templateUrl:'views/gallery.html',
		controller:'gallery_ctr'
	}).
	otherwise({
		redirectTo:'index.html'
	});
	
}]);


app.controller("coach_ctr",function($scope){
	
	$scope.coach = [
		{name:'Adil',age:27,sport:'Basketball'},
		{name:'Asad',age:28,sport:'Football'},
		{name:'Amjad',age:26,sport:'Volleyball'},
		{name:'Khalid',age:33,sport:'Cricket'},
		{name:'Adeel',age:28,sport:'basketball'},
	];
	
});

app.controller("student_ctr",function($scope){
	
	$scope.students = ["Ali","Usman","Osama","Zain","Dua","Zoha","Imran","Atif","Noman","Nasir"];
	
});

app.controller("sport_ctr",function($scope){
	
	$scope.sport = ["Basketball","Football","Volleyball","cricket","Basketball","Volleyball","cricket","Basketball","Football"];
	
});

app.controller("gallery_ctr",function($scope){
	
	$scope.pic1 = "images/basketball.jpg";
	$scope.pic2 = "images/cricket.jpg";
	$scope.pic3 = "images/football.jpg";
	
});



