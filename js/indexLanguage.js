let languageData = {
    en: {
        balance: "Total Balance",
        withdraw: "Withdraw",
        send: "Send",
        card: "Cards",
        exchange: "Exchange",
        add_balance: "Add Balance",
        from: "From",
        to: "To",
        enter_amount: "Enter Amount",
        deposit: "Deposit",
        income: "Income",
        expenses: "Expenses",
        total_bills: "Total Bills",
        savings: "Savings",
        transactions: "Transactions",
        view_all: "View All",
        my_cards: "My Cards",
        send_money: "Send Money",
        add_new: "Add New",
        monthly_bills: "Monthly Bills",
        saving_goals: "Saving Goals",
        news: "Latest News",
    },
    ge: {
        balance: "Gesamtsaldo",
        withdraw: "abheben",
        send: "senden",
        card: "Karte",
        exchange: "Austausch",
        add_balance: "Guthaben hinzufügen",
        from: "aus",
        to: "zu",
        enter_amount: "Menge eingeben",
        deposit: "Hinterlegung",
        income: "Einkommen",
        expenses: "Kosten",
        total_bills: "Gesamtrechnungen",
        savings: "Ersparnisse",
        transactions: "Transaktionen",
        view_all: "Alle ansehen",
        my_cards: "meine Karten",
        send_money: "schick Geld",
        add_new: "Geld hinzufügen",
        monthly_bills: "monatliche Rechnungen",
        saving_goals: "Sparziele",
        news: "neuesten Nachrichten",
    },
    fr: {
        balance: "Solde total",
        withdraw: "Retrait",
        send: "Envoyer",
        card: "Cartes",
        exchange: "Échanger",
        add_balance: "Ajouter un solde",
        from: "Depuis",
        to: "A",
        enter_amount: "Entrer le montant",
        deposit: "Dépôt",
        income: "Revenu",
        expenses: "Dépenses",
        total_bills: "Total des factures",
        savings: "Épargne",
        transactions: "Transactions",
        view_all: "Afficher tout",
        my_cards: "Mes cartes",
        send_money: "Envoyer de l'argent",
        add_new: "Ajouter une nouvelle carte",
        monthly_bills: "Factures mensuelles",
        saving_goals: "Objectifs d'épargne",
        news: "Dernières nouvelles",
    },
    pt: {
        balance: "Saldo total",
        withdraw: "Retirada",
        send: "Enviar",
        card: "Cartões",
        exchange: "Troca",
        add_balance: "Adicionar equilíbrio",
        from: "De",
        to: "Para",
        enter_amount: "Digite o valor",
        deposit: "Depósito",
        income: "Renda",
        expenses: "Gastos",
        total_bills: "Total de contas",
        savings: "Economia",
        transactions: "Transações",
        view_all: "Ver tudo",
        my_cards: "Meus Cartões",
        send_money: "Enviar dinheiro",
        add_new: "Adicionar Novo",
        monthly_bills: "Contas Mensais",
        saving_goals: "Objetivos de economia",
        news: "Últimas notícias",
    },
    sp: {
        balance: "Saldo total",
        withdraw: "Retirar",
        send: "Enviar",
        card: "Tarjetas",
        exchange: "Intercambiar",
        add_balance: "Añadir saldo",
        from: "Desde",
        to: "A",
        enter_amount: "Introducir importe",
        deposit: "Depositar",
        income: "Ingresos",
        expenses: "Gastos",
        total_bills: "Total de facturas",
        savings: "Ahorros",
        transactions: "Transacciones",
        view_all: "Ver todo",
        my_cards: "Mis tarjetas",
        send_money: "Enviar dinero",
        add_new: "Añadir nuevo",
        monthly_bills: "Facturas mensuales",
        saving_goals: "Objetivos de ahorro",
        news: "Últimas noticias",
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