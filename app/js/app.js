
var demoApp = angular.module('CountryPickerDemo', ['CountryPicker']);

demoApp.controller('DemoController', DemoController);

// Sample filtering of the countries based on the exclusion list
function DemoController($scope) {

	$scope.countries = '';
	
	$scope.filterCountries = function(arg) {
		
		// List of country codes to be excluded from the country list
		var toExclude = ['AF', 'BY'];
		
		var filtered = []
		
		angular.forEach(arg, function(country) {
			 
			  if(toExclude.indexOf(country.code) == -1) {
				  filtered.push({"name":country.name, "code": country.code})
			  }
			  
			});
		
		return filtered;	
	}	  
}