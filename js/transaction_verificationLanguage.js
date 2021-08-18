let languageData = {
    en: {
        transaction_verification: "Transaction Verification",
        amount: "Amount",
        verify: "Verify the Transaction",
        send_verify: "You are sending",
        sure: "Are you Sure?",
        cancel: "Cancel",
        confirm: "Confirm",
    },
    ge: {
        transaction_verification: "Überprüfung der Transaktion",
        amount: "Betrag",
        verify: "Überprüfen Sie die Transaktion",
        send_verify: "Sie senden",
        sure: "Sind Sie sicher?",
        cancel: "Abbrechen",
        confirm: "Bestätigen Sie",
    },
    fr: {
        transaction_verification: "Vérification de la transaction",
        amount: "Montant",
        verify: "Vérifier la transaction",
        send_verify: "Vous envoyez",
        sure: "Vous êtes sûr ?",
        cancel: "Annuler",
        confirm: "Confirmez",
    },
    pt: {
        transaction_verification: "Verificação da transação",
        amount: "Montante",
        verify: "Verificar a Transação",
        send_verify: "Você está enviando",
        sure: "Você tem certeza?",
        cancel: "Cancele",
        confirm: "Confirme",
    },
    sp: {
        transaction_verification: "Verificación de la transacción",
        amount: "Importe",
        verify: "Verificar la transacción",
        send_verify: "Está enviando",
        sure: "Está seguro?",
        cancel: "Cancelar",
        confirm: "Confirmar",
    },
};

window.onload = function() {
    var currentLang = localStorage.getItem("currentLanguage");
    if (currentLang == null) {
        localStorage.setItem("currentLanguage", "en");
        var currentLang = localStorage.getItem("currentLanguage");
    }

    let elements = document.querySelectorAll("html [data-key]");
    let inputElements = document.querySelectorAll("html [data-input]");
    translate(elements, currentLang);
    translatePlaceHolders(inputElements, currentLang);
};

function translate(elements, language) {
    elements.forEach((element) => {
        let key = element.getAttribute("data-key");
        let lang = language;

        if (key) {
            element.innerHTML = languageData[lang][key];
        }
    });
}

function translatePlaceHolders(elements, language) {
    elements.forEach((element) => {
        let key = element.getAttribute("data-input");
        let lang = language;

        if (key) {
            console.log(element);
            element.placeholder = languageData[lang][key];
        }
    });
}