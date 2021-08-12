
window.onload = function(){
    var currentLang = localStorage.getItem("currentLanguage");

    if(currentLang ==null){
        localStorage.setItem("currentLanguage", "en");
         var currentLang = localStorage.getItem("currentLanguage");
        document.getElementById("en").checked = true;
    }else{
        document.getElementById(currentLang).checked = true;
    }
}

function changeLanguage(language) {
 localStorage.setItem("currentLanguage", language);
 var currentLang = localStorage.getItem("currentLanguage");
 console.log(currentLang);
}