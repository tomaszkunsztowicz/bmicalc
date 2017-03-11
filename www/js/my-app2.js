var a, b, c;

function calculate() {
    
    var info;
  
    a = document.getElementById('height').value;
    b = document.getElementById('weight').value; 
    c = b/Math.pow(a/100, 2);
    c = c.toFixed(2);

        
    if (c < 18.50) {
        info = 'Underweight';
        }
    else if (c >= 18.5 && c <= 24.9) {
        info = 'Normal weight';
    }
    else if (c >= 25 && c <= 29.9) {
        info = 'Overweight';
    }
    else {
        info = "Obese";
    }
    
    //validations
    
    if (!a) {
    myApp.alert("Please give height");
    }
   
    if (!b) {
    myApp.alert("Please give weight");
    }
    
    if (a <= 150 || a >= 220) {
        myApp.alert("Please give height in range 150-220cm");
        document.getElementById('height').value = "";
    }
    else
    if (b <= 50 || b >= 150) {
        myApp.alert("Please give height in range 50-150kg");
        document.getElementById('weight').value = ""; 
    }
   
    document.querySelector('#results').innerHTML = c ;
    document.querySelector('#info').innerHTML = info ;
    
    //height weight
    //color of text
    //settings metric
    //man / woman  
}

function reset() {
    //myApp.alert("Test");
    a = 0;
    b = 0;
    c = 0;
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('results').value = "";
    document.getElementById('info').value = "";
}

window.onload = function() {
    document.getElementById("btn").onclick = function fun() { 
        calculate();
        //validation code to see State field is mandatory.  
    }
    document.getElementById("btn_reset").onclick = function fun() { 
        reset();
        //validation code to see State field is mandatory.  
    }
}


    



 