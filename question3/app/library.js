
'use strict'

module.exports = {

	aritGeo : function (numbers){
		if(numbers.length < 1){
			return 0;
		}
		var a = numbers[0];
		var arithProgression;
		var d = numbers[1] - numbers[0];
		var r = numbers[1] / numbers[0];
		var i = 0;
		var ap = true;
		var gp = true;
		for(i = 0; i < numbers.length - 1; i++){
			if(numbers[i] === (a + (i * d))){
				continue;
			}
			else{
			  ap = false;
			  break;
			}
		}
		if(ap === true){
			return 'Arithmetic';
		}
		else{
			for(i = 0; i < numbers.length -1; i++){
		  		if(numbers[i] === (a * Math.pow(r, i))){
		  			continue;
		  		}
		  		else{
		  			gp = false;
		  			break;
		  		}
		  	}
		  
		  	if(gp === true){
	  			return 'Geometric';
	  		}
	  		else{
	  			return -1;
	  		}
		}
	}
}