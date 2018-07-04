
function httpRequest(){
    var result = document.querySelector("h3");
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4){
            if(XHR.status == 200){
            result.innerHTML = XHR.responseText;

            }else{
                result.innerHTML = "Something Went Wrong..."
                
            }
        
    }
}

XHR.open("GET","https://api.github.com/zen");
XHR.send();

}


