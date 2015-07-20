

angular.module('CountryPicker', []).directive('countryPicker', function(countriesFactory) {
	return {
		restrict: 'E',
		link: function(scope, e, attrs) {
			
			countriesFactory.getCountries(function(allCountries) {
			    scope.allCountries = scope.filter({arg: allCountries});;
			});
			
			
		},
		templateUrl: 'countryPicker.html',
		replace: true,
		scope: {
			
			// Two way binding of the countries scope variable
			bindTo: '=',
			// Filtering function binding
			filter: '&'
			
		}
	}
}).factory('countriesFactory', function($http){
	
	var factory = {};
	
	factory.getCountries = function(callback){
	      $http.get('data/countries.json').success(callback);
    }
	
	return factory;	
});