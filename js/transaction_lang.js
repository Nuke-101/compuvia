let languageData = {
    "en":{
        "transactions":"Transactions",
        "today":"Today",
        "yesterday":"Yesterday",
        "load_more":"Load More",
        "overview":"Overview",
        "pages":"Pages",
        "components":"Components",
        "my_cards":"My Cards",
        "settings":"Settings",

    },
    "ge":{
        "transactions":"Transaktionen",
        "today":"Heute",
        "yesterday":"Gestern",
        "load_more":"Mehr laden",
        "overview":"Überblick",
        "pages":"Seiten",
        "components":"Komponenten",
        "my_cards":"Meine Karten",
        "settings":"Einstellungen",

    }, 
    "fr":{
        "transactions":"Transactions",
        "today":"Aujourd'hui",
        "yesterday":"Hier",
        "load_more":"Charger plus",
        "overview":"Aperçu",
        "pages":"Pages",
        "components":"Composants",
        "my_cards":"Mes cartes",
        "settings":"Paramètres",
    },
    "pt":{
        "transactions":"Transações",
        "today":"Hoje",
        "yesterday":"Ontem",
        "load_more":"Carregue mais",
        "overview":"Visão geral",
        "pages":"Páginas",
        "components":"Componentes",
        "my_cards":"Minhas cartas",
        "settings":"Configurações",
    },
     "sp":{
        "transactions":"Actas",
        "today":"Hoy dia",
        "yesterday":"El dia de ayer",
        "load_more":"Carga más",
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
