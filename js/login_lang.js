let languageData = {
    en: {
        login: "Log in",
        fill_form: "Fill the form to log in",
        email_label: "E-mail",
        password_label: "Password",
        register_now: "Register Now",
        forgot_pass: "Forgot Password",
        email_placeholder: "Your Email",
        password_placeholder: "Your Password",
    },
    ge: {
        login: "Anmeldung",
        fill_form: "Füllen Sie das Formular aus, um sich anzumelden",
        email_label: "E-mail",
        password_label: "Passwort",
        register_now: "Jetzt registrieren",
        forgot_pass: "Passwort vergessen",
        email_placeholder: "Ihr E-Mail",
        password_placeholder: "Ihr Passwort",
    },
    fr: {
        login: "Connexion",
        fill_form: "Remplissez le formulaire pour vous connecter",
        email_label: "E-mail",
        password_label: "Mot de passe",
        register_now: "S'inscrire maintenant",
        forgot_pass: "Mot de passe oublié",
        email_placeholder: "Votre E-mail",
        password_placeholder: "Votre Mot de passe",
    },
    pt: {
        login: "Conecte-se",
        fill_form: "Preencha o formulário para entrar",
        email_label: "E-mail",
        password_label: "Senha",
        register_now: "Registrar agora",
        forgot_pass: "Esqueceu sua senha",
        email_placeholder: "Seu email",
        password_placeholder: "Sua senha",
    },
    sp: {
        login: "Acceso",
        fill_form: "Rellena el formulario para iniciar sesión",
        email_label: "Correo electrónico",
        password_label: "Clave",
        register_now: "Regístrate ahora",
        forgot_pass: "Has olvidado tu contraseña",
        email_placeholder: "Tu correo electrónico",
        password_placeholder: "Tu Clave",
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