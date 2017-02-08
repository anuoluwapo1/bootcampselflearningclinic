
'use strict'

module.exports = {
	findMinMax : function(numbers){
	
		var min = numbers[0];
		var max = 0;
		var minMax = new Array();
		for(var i = 0; i < numbers.length; i++){
			if(min > numbers[i]){
				min = numbers[i];
			}
			if(max < numbers[i]){
				max = numbers[i];
			}
		}
		if(min === max){
			minMax.push(min);
		}
		else{
			minMax.push(min, max);
		}
		
		return minMax;

	}
}