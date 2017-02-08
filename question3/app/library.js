
'use strict'

module.exports = {

	aritGeo : function(numbers){
		if(numbers.length < 1){
			return 0;
		}
		var a = numbers[0];
		var d = numbers[1] - numbers[0];
		var i = 0;
		var ap = false;
		while(i < numbers.length -1){
			if( i == 0){
				arithProgression = numbers[0];
			}
			else
			{
				arithProgression = a + (i - 1) * d;
			}
			
			if( arithProgression == numbers[i]){
				ap = true;
			}
			else{
				ap = false;
			}
			i++;
		}
		
		if(ap == true){
			return 'Arithmetic';
		}
		else{
			this.isSequenceGeometric(numbers);
		}
	},

	isSequenceGeometric : function(numbers){
		var a = numbers[0];
		var r = numbers[1] / numbers[0];
		var i = 0;
		var gp = false;
		while(i < numbers.length -1){
			if( i == 0){
				geoProgression = numbers[0];
			}
			else
			{
				geoProgression = a * d ** i;
			}
			
			if( geoProgression == numbers[i]){
				gp = true;
			}
			else{
				gp = false;
			}
			i++;
		}
		if(gp == true){
			return 'Geometric';
		}
		else{
			return -1;
		}

		
	}
}