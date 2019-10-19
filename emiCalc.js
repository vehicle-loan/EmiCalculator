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
			var n1 = N*12;
			var cal1 =  (1+r1)^n1;
			console.log(cal1);
			var cal2 = cal1-1;
  		var Total = ((LA * r1 *cal1)/(cal2)).toFixed(2);

  		Total = Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  		document.getElementById('Total').innerHTML ="EMI per month = ₹ "+ Total;

  }

