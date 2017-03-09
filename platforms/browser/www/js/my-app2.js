function calculate() {
    
    //sex
    a = document.getElementById('height').value;
    b = document.getElementById('weight').value; 
    c = b/Math.pow(a/100, 2);
    c = c.toFixed(2)
    //string
    var info;
    //alert(a);
    //c round to 2 decimal places
    
    
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
    
    if (a <= 150 || a >= 220) {
        myApp.alert("Please give height in range 150-220cm");
        document.getElementById('height').value = "";
    }
    
    if (b <= 50 || b >= 150) {
        myApp.alert("Please give height in range 50-150kg");
        document.getElementById('weight').value = ""; 
    }
    
    
    document.querySelector('#results').innerHTML = c ;
    document.querySelector('#info').innerHTML = info ;
    
    //validations
    //height weight
    //color of text
    //rounding of bmi
    //settings metric
    //man / woman
    
}

window.onload = function() {
    document.getElementById("btn").onclick = function fun() { 
        calculate();
        //validation code to see State field is mandatory.  
    }
}