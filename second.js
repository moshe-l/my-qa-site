

function plus() {
    var parVar = document.getElementById("parId");
    var style = getComputedStyle(parVar);
    var clearFontSize = style.fontSize.replace("px", ""); // 35
    var numberFontSize = Number.parseInt(clearFontSize);
    if (numberFontSize < 70) {
        var newSize = numberFontSize + 5;
        var newSizeString = newSize + "px";
        parVar.style.fontSize = newSizeString;
    }
    else {
        alert("maximum 70 px");
    }
}

function minus() {  
    var parVar = document.getElementById("parId");
    var style = getComputedStyle(parVar);
    var clearFontSize = style.fontSize.replace("px", ""); // 35
    var numberFontSize = Number.parseInt(clearFontSize);
    if (numberFontSize > 10) {
        var newSize = numberFontSize - 5;
        var newSizeString = newSize + "px";
        parVar.style.fontSize = newSizeString;
    }
    else{
        //short way
       var element = document.getElementById("errorMsg");
       element.style.display = "block";
       
        // long way
        // error message (in div) 
        // var element = document.createElement("div");        
        // var text = document.createTextNode("minimum 10 px");
        // element.appendChild(text);
        // var form = document.getElementById("wrap_form");
        // form.appendChild(element);       
    }
}





function validateEmptyFiled(){
  var inputValue = document.getElementById("email").value;
  var inputValueLength = document.getElementById("email").value.length;

  if(inputValue == '' || !inputValue.includes("@") )
  {
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("email").classList.add("errorFilde");

  }
  else{
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("email").classList.remove("errorFilde");
  }
}














function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone){
    var re = /[0-9]{2}-[0-9]{7}/;
    return re.test(phone);
}


//refael87@gmail.com
//inbbar@gmail.com