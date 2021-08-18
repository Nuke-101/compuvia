let languageData = {
    "en":{
        "transaction_detail":"Transaction Detail",
        "payment_sent":"Payment Sent",
        "status":"Status",
        "success":"Success",
        "to":"To",
        "bank_name":"Bank Name",
        "transaction_category":"Transaction Category",
        "receipt":"Reciept",
        "date":"Date",
        "yes":"Yes",
        "amount":"Amount",
        "overview":"Overview",
        "pages":"Pages",
        "components":"Components",
        "my_cards":"My Cards",
        "settings":"Settings",

    },
    "ge":{
        "transaction_detail":"Transaktions Details",
        "payment_sent":"Bezahlung gesendet",
        "status":"Status",
        "success":"Erfolg",
        "to":"Zu",
        "bank_name":"Bank Name",
        "transaction_category":"Transaktions Kategorie",
        "receipt":"Empfangen",
        "date":"Datum",
        "yes":"Jawohl",
        "amount":"Menge",
        "overview":"Überblick",
        "pages":"Seiten",
        "components":"Komponenten",
        "my_cards":"Meine Karten",
        "settings":"Einstellungen",

    }, 
    "fr":{
        "transaction_detail":"Détails de la transaction",
        "payment_sent":"Paiement envoyé",
        "status":"Statut",
        "success":"Succès",
        "to":"À",
        "bank_name":"Nom de banque",
        "transaction_category":"Catégorie de transaction",
        "receipt":"Le reçu",
        "date":"Date",
        "yes":"Oui",
        "amount":"Montant",
        "overview":"Aperçu",
        "pages":"Pages",
        "components":"Composants",
        "my_cards":"Mes cartes",
        "settings":"Paramètres",
    },
    "pt":{
       "transaction_detail":"Detalhes da transação",
        "payment_sent":"Pagamento enviado",
        "status":"Status",
        "success":"Sucesso",
        "to":"Para",
        "bank_name":"Nome do banco",
        "transaction_category":"Categoria de transação",
        "receipt":"Recibo",
        "date":"Encontro: Data",
        "yes":"Sim",
        "amount":"Quantia",
        "overview":"Visão geral",
        "pages":"Páginas",
        "components":"Componentes",
        "my_cards":"Minhas cartas",
        "settings":"Configurações",
    },
     "sp":{
         "transaction_detail":"Detalles de la transacción",
        "payment_sent":"Pago enviado",
        "status":"Estado",
        "success":"Éxito",
        "to":"Para",
        "bank_name":"Nombre del banco",
        "transaction_category":"Categoría de transacción",
        "receipt":"Recibo",
        "date":"Fecha",
        "yes":"sí",
        "amount":"Monto",
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
