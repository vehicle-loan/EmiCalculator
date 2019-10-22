	//New vehicle code //
    function outputUpdate(LA) {
        document.querySelector('#loanAmount1').value = LA ;
      //TKPJ()
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
                var dp = document.getElementById('downPayment').value;
                var r1 = R/(1200);	
                var cal1 =  Math.pow(1+ r1,N);
                var cal2 = cal1-1;
              var EMI = (((LA - dp)  * r1 *cal1)/(cal2)).toFixed(2);
              var total = (EMI * N).toFixed(2)
              var Interest = (total - (LA - dp )).toFixed(2);

             
             // dp = dp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              document.getElementById('downPayment1').innerHTML ="DownPayment  = ₹ "+ dp;

              EMI = EMI.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              document.getElementById('EMI').innerHTML ="EMI per month = ₹ "+ EMI;

              total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              document.getElementById('total').innerHTML ="Total amount to be paid = ₹ "+ total;

              Interest = Interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              document.getElementById('Interest').innerHTML ="Total interest to be paid over the tenure of "+N+" months is = ₹ "+ Interest;
         
              var VP = Number(document.getElementById('loanAmount').value);
              var Int = Number( document.getElementById('Interest').value);
             
              var Vpp = (VP * 100 /(VP+Int));
              var Intp= (Int* 100 /(VP+Int));
        
			  var dps = [Vpp,Intp];
			  console.log("chart")
              var chart = new CanvasJS.Chart("chartContainer", {
                  animationEnabled: true,
                  title: {
                     // text: "Desktop Search Engine Market Share - 2016"
                  },
                  data: [{
                      type: "pie",
                      startAngle: 240,
                      yValueFormatString: "##0.00\"%\"",
                      indexLabel: "{label} {y}",
                      dataPoints: dps
                  }]
              });
            //   function parseDataPoints () {
            //     for (var i = 0; i <= myArr.length; i++)
            //       dps.push({y: myArr[i]});     
            //  };
               
            //   parseDataPoints();
            //   chart.options.data[0].dataPoints = dps;
              chart.render();
              

            //   var d = new Date(year, month, day);
            //   d.setMonth(d.getMonth() + N);
              
            //  d = d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            //  document.getElementById('d').innerHTML ="EMI finishes on :  "+ d;
        }
    
        //Old vehicle code //
        function outputUpdate3(LA1) {
            document.querySelector('#loanAmount3').value = LA1 ;
           // TKPJ1()
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
                    var dp1 = document.getElementById('downPayment2').value;
                    var r2 = R1/(1200);	
                    var cal3 =  Math.pow(1+ r2,N1);
                    var cal4 = cal3-1;
                    var EMI1 = (((LA1-dp1) * r2 *cal3)/(cal4)).toFixed(2);
                    var total1 = (EMI1 * N1).toFixed(2);
                   var Interest1 =(total1 - (LA1-dp1)).toFixed(2);

                  //  var d1 = new Date(year, month, day);
                  //   d1.setMonth(d1.getMonth() + N1);

                  //   d1 = d1.toDateString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				  //   document.getElementById('d1').innerHTML ="EMI finishes on :  "+ d1;
				  
				    document.getElementById('downPayment3').innerHTML ="DownPayment  = ₹ "+ dp1;
					
					EMI1 = EMI1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById('EMI1').innerHTML ="EMI per month = ₹ "+ EMI1;

                    total1 = total1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById('total1').innerHTML ="Total amount to be paid = ₹ "+ total1;

                    Interest1 = Interest1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById('Interest1').innerHTML ="Total interest to be paid over the tenure of "+N1+" months is = ₹ "+ Interest1;
    
        
            }
      // function chart1() {
      //         var VP = Number(document.getElementById('loanAmount').value);
      //         var Int = Number( document.getElementById('Interest').value);
      //         var Vp_percentage = (VP * 100 /(VP+Int));
      //         var Int_percentage = (Int* 100 /(VP+Int));
      //         var chart = new CanvasJS.Chart("chartContainer", {
      //             animationEnabled: true,
      //             title: {
      //                // text: "Desktop Search Engine Market Share - 2016"
      //             },
      //             data: [{
      //                 type: "pie",
      //                 startAngle: 240,
      //                 yValueFormatString: "##0.00\"%\"",
      //                 indexLabel: "{label} {y}",
      //                 dataPoints: [
      //                     {y: Vp_percentage, label: "Vehicle Price"},
      //                     {y: Int_percentage, label: "Total Interest"}
                          
      //                 ]
      //             }]
      //         });
      //         chart.render();
              
      //         }




            