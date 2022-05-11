let languageData = {
    "en":{
        "languages":"Languages",
        "default":"Default",
        "others":"Others",
        "overview":"Overview",
        "pages":"Pages",
        "components":"Components",
        "my_cards":"My Cards",
        "settings":"Settings",

    },
    "ge":{
        "languages":"Idiomas",
        "default":"Defecto",
        "others":"Otros",
        "overview":"Überblick",
        "pages":"Seiten",
        "components":"Komponenten",
        "my_cards":"Meine Karten",
        "settings":"Einstellungen",

    }, 
    "fr":{
        "languages":"Langages",
        "default":"Défaut",
        "others":"Les autres",
        "overview":"Aperçu",
        "pages":"Pages",
        "components":"Composants",
        "my_cards":"Mes cartes",
        "settings":"Paramètres",
    },
    "pt":{
        "languages":"línguas",
        "default":"Padrão",
        "others":"Outros",
        "overview":"Visão geral",
        "pages":"Páginas",
        "components":"Componentes",
        "my_cards":"Minhas cartas",
        "settings":"Configurações",
    },
     "sp":{
        "languages":"Idiomas",
        "default":"Defecto",
        "others":"Otros",
        "overview":"Visión general",
        "pages":"Paginas",
        "components":"Componentes",
        "my_cards":"Mis cartas",
        "settings":"Ajustes",
    },
}


window.onload = function(){
    var currentLang = localStorage.getItem("currentLanguage");
    if(currentLang ==null){
        localStorage.setItem("currentLanguage", "en");
        var currentLang = localStorage.getItem("currentLanguage");
    }
  
    
    let elements = document.querySelectorAll('html [data-key]');
    let inputElements = document.querySelectorAll('html [data-input]');
    translate(elements,currentLang);
    translatePlaceHolders(inputElements,currentLang);

}

function translate(elements,language){
    elements.forEach(element => {
        let key = element.getAttribute('data-key');
        let lang = language;

        if(key){
            element.innerHTML= languageData[lang][key];
        }
    });
}


function translatePlaceHolders(elements,language){
    elements.forEach(element => {
        let key = element.getAttribute('data-input');
        let lang = language;

        if(key){
            console.log(element);
            element.placeholder = languageData[lang][key];
        }
    });
}
