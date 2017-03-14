//init variables
var a, b, c;
var gender;
var age;
var name;
var units;

$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    
    age = localStorage.getItem('age');
    name = localStorage.getItem('name');
    gender = localStorage.getItem('gender');
    units = localStorage.getItem('units');
    
    document.getElementById("btn_save").onclick = function fun() { 
        settings();
    }
    
    var textbox = document.getElementById('name');
    textbox.value = name;
    
    var textbox = document.getElementById('age');
    textbox.value = age;
    //document.getElementById('t').value = 'new value';

    
    var radios = document.getElementsByName('gender');
    
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value == gender) {   
            radios[i].checked = true;
        // do whatever you want with the checked radio
        // only one radio can be logically checked, don't check the rest
        break;
    }
    }
    
    var radios = document.getElementsByName('units');
    
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value == units) {
            //alert(gender);
            radios[i].checked = true;
            //alert("alert");
        // do whatever you want with the checked radio
        // only one radio can be logically checked, don't check the rest
        break;
    }
    } 
})


function calculate() {
    
    var info;
  
    /*age = localStorage.getItem('age');
    name = localStorage.getItem('name');
    gender = localStorage.getItem('gender');
    units = localStorage.getItem('units');*/
    
    a = parseInt(document.getElementById('height_m').value);
    a_cm = parseInt(document.getElementById('height_cm').value);
      
    b = document.getElementById('weight').value; 
    
    
    if (units == 0) {
    
    a = (a*100)+a_cm;   
    c = b/Math.pow(a/100, 2);
        
    
    } else {
       
    a = (a*12)+a_cm;  
    c = 703*(b/Math.pow(a, 2));
        
       
    }
      
    
    
    if (c < 15) {
        info = 'Very severely underweight';
    }
    else if (c >= 15 && c <= 16) {
        
    info = 'Severely nderweight';
    } 
    else if (c > 16 && c < 18.5)  {
        info = 'Underweight';
        }
    else if (c >= 18.5 && c <= 24.9) {
        info = 'Normal weight';
    }
    else if (c >= 25 && c <= 29.9) {
        info = 'Overweight';
    }
    else if (c >= 30 && c <= 34.9) {
        info = 'Moderately obese';
    }
    else if (c >= 35 && c <= 39.9) {
        info = 'Severely obese';
    }
    else if (c >= 40) {
        info = 'Very severely obese';
    }
    
    //validations
    if (units == 0) {
    
        if (a <= 50 || a >= 240) {
            myApp.alert("Please give height in range 50-240cm", 'Info');
            document.getElementById('height').value = "";
        }
        else
        if (b <= 50 || b >= 150) {
            myApp.alert("Please give height in range 1-150kg", 'Info');
            document.getElementById('weight').value = ""; 
        }
   
    } else {
        
    if (!a) {
        myApp.alert("Please give height in feet", 'Info');
        }

        if (!a_cm) {
        myApp.alert("Please give height in inches", 'Info');
        }

        if (!b) {
        myApp.alert("Please give weight", 'Info');
        }

    }
    
    if (c) {
        document.querySelector('#results').innerHTML = c ;
        document.querySelector('#info').innerHTML = info ;
    }
    
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
    a_cm = 0;
    document.getElementById('height_m').value = "";
    document.getElementById('height_cm').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('results').value = "";
    document.getElementById('info').value = "";
    myApp.alert('Values have been reset', 'Info');
}

function settings() {
    
    var radios = document.getElementsByName('gender');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {      
            gender = radios[i].value;
        break;
    }
    }
    
    var radios = document.getElementsByName('units');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            units = radios[i].value;
        break;
    }
    }
    
    age = document.getElementById('age').value;
    name = document.getElementById('name').value;
    
    localStorage.setItem('age', age);
    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender);
    localStorage.setItem('units', units);
    
    myApp.alert('Settings saved', 'Info');

}


window.onload = function() {
    
    age = localStorage.getItem('age');
    name = localStorage.getItem('name');
    gender = localStorage.getItem('gender');
    units = localStorage.getItem('units');
    
    document.getElementById("btn").onclick = function fun() { 
        calculate();
        //validation code to see State field is mandatory.  
    }
    document.getElementById("btn_reset").onclick = function fun() { 
       
        reset();

        //validation code to see State field is mandatory.  
    } 
    
    if (units != 0) {
        document.querySelector('#height_mt_label').innerHTML = 'feet' ;
        document.querySelector('#height_cm_label').innerHTML = 'inches' ;      
    } else {
        document.querySelector('#height_mt_label').innerHTML = 'meters' ;
        document.querySelector('#height_cm_label').innerHTML = 'centimeters' ;    
    }     
}







 