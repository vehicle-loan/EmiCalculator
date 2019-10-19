
	//New vehicle code //
function outputUpdate(LA) {
	document.querySelector('#loanAmount1').value = LA ;
  TKPJ()
}
function outputUpdate1(R) {
	document.querySelector('#ROI1').value = R;
  TKPJ()
}
function outputUpdate2(N) {
	document.querySelector('#tenure1').value = N ;
  TKPJ()
}
function TKPJ(){
  	 
  		var loanAmount = document.getElementById('loanAmount').value;
  		var ROI = document.getElementById('ROI').value;
			var tenure = document.getElementById('tenure').value;
			var LA = document.getElementById('loanAmount1').value;
  		var R = document.getElementById('ROI1').value;
			var N = document.getElementById('tenure1').value;
			var r1 = R/(1200);	
			var cal1 =  Math.pow(1+ r1,N);
			var cal2 = cal1-1;
  		var Total = ((LA * r1 *cal1)/(cal2)).toFixed(2);

  		Total = Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  		document.getElementById('Total').innerHTML ="EMI per month = ₹ "+ Total;

	}

	//Old vehicle code //
	function outputUpdate3(LA1) {
		document.querySelector('#loanAmount3').value = LA1 ;
		TKPJ1()
	}
	function outputUpdate4(R1) {
		document.querySelector('#ROI3').value = R1;
		TKPJ1()
	}
	function outputUpdate5(N1) {
		document.querySelector('#tenure3').value = N1;
		TKPJ1()
	}
	function TKPJ1(){
			 
				var loanAmount2 = document.getElementById('loanAmount2').value;
				var ROI2 = document.getElementById('ROI2').value;
				var tenure2 = document.getElementById('tenure2').value;
				var LA1 = document.getElementById('loanAmount3').value;
				var R1 = document.getElementById('ROI3').value;
				var N1 = document.getElementById('tenure3').value;
				
				var r2 = R1/(1200);	
				var cal3 =  Math.pow(1+ r2,N1);
				var cal4 = cal3-1;
				var Total1 = ((LA1 * r2 *cal3)/(cal4)).toFixed(2);
	
				Total = Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				document.getElementById('Total1').innerHTML ="EMI per month11 = ₹ "+ Total1;
	
		}

