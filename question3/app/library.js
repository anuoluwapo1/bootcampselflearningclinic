
'use strict'

module.exports = {

	aritGeo : function (numbers){
		if(numbers.length < 1){
			return 0;
		}
		var firstTerm = numbers[0]; //First term a of an Arithmetic or Geometric Progression
		var diffAP = numbers[1] - numbers[0]; //Difference between nth terms of an Arithmetic Progression
		var ratio = numbers[1] / numbers[0]; //Ratio between nth terms of a Geometric Progression
		var nth; //This will be (n-1) term of the sequence since sequence starts from 1 and array starts from 0
		var isArithProgression = true; 
		var isGeoProgression = true;
		for(nth = 0; nth < numbers.length - 1; nth++){
			if(numbers[nth] === (firstTerm + (nth * diffAP))){ //Using the formula for AP  - nth_term = [a + (n-1)d] where (n - i) = nth
				continue;
			}
			else{
			  isArithProgression = false; //If an element in the array is out of sequence. The array is not an AP and break the loop
			  break;
			}
		}
		if(isArithProgression === true){ 
			return 'Arithmetic';
		}
		//If the sequence is not an Arithmetic Progression, test if it a Geometric Progression
		else{
			for(nth = 0; nth < numbers.length - 1; nth++){
		  		if(numbers[nth] === (firstTerm * Math.pow(ratio, nth))){
		  			continue;
		  		}
		  		else{
		  			isGeoProgression = false;
		  			break;
		  		}
		  	}
		  
		  	if(isGeoProgression === true){
	  			return 'Geometric';
	  		}
	  		else{
	  			return -1;
	  		}
		}
	}
}