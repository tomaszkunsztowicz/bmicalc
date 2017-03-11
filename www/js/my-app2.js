$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
    
    //set name
    //set settings
    //set settings
    
    document.getElementById("btn_save").onclick = function fun() { 
        settings();
    }
})

//init variables
var a, b, c;
var gender;
var age;
var name;
var units;

function calculate() {
    
    var info;
  
    /*age = localStorage.getItem('age');
    name = localStorage.getItem('name');
    gender = localStorage.getItem('gender');
    units = localStorage.getItem('units');*/
    
    a = document.getElementById('height').value;
    b = document.getElementById('weight').value; 
    
    
    if (units == 0) {
    
    c = b/Math.pow(a/100, 2);
    c = c.toFixed(2);

    } else {
        
    c = 703*(b/Math.pow(a/100, 2));
    c = c.toFixed(2);
        
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
    
    if (!a) {
    myApp.alert("Please give height");
    }
   
    if (!b) {
    myApp.alert("Please give weight");
    }
    
    if (a <= 50 || a >= 240) {
        myApp.alert("Please give height in range 50-240cm");
        document.getElementById('height').value = "";
    }
    else
    if (b <= 50 || b >= 150) {
        myApp.alert("Please give height in range 1-150kg");
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

function settings() {
    
    //gender = document.getElementById('h').value;   
    var radios = document.getElementsByName('gender');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
        // do whatever you want with the checked radio
        alert(radios[i].value);
            gender = radios[i].value;
            //alert(gender);
        // only one radio can be logically checked, don't check the rest
        break;
    }
    }
    
    var radios = document.getElementsByName('units');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
        // do whatever you want with the checked radio
        alert(radios[i].value);
            units = radios[i].value;
            alert(units);
        // only one radio can be logically checked, don't check the rest
        break;
    }
    }
    
    age = document.getElementById('age').value;
    name = document.getElementById('name').value;
    
    //metric / inches
    //dajemy pomiary z wiki
    //wersja dla dzieci
    //cale dolozyc
    //layout
    //wypuszczamy
   
    localStorage.setItem('age', age);
    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender);
    localStorage.setItem('units', units);
      
    //localStorage getItem
    //age = localStorage.getItem('age');
    //name = localStorage.getItem('name');
    //gender = localStorage.getItem('gender');
    
    
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
}



//TO DO S
//BUTTONY wycentrowac
//INCHES LAYOUT zmienia sie w zaleznosci od settingow
//WYPELNIANIE SETTINGOW AUTOMATYCZNIE
//WYSWIETLANIE IMIENIA W WYNIKU
//INFO O WLASCIWYM BMI, porownywanie z wynikiem




 