
function httpRequest(){
    var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    if(XHR.readyState == 4){

     var result = document.querySelector("h3");
     result.innerHTML = XHR.responseText;

    }
}

XHR.open("GET","https://api.github.com/zen");
XHR.send();

}


