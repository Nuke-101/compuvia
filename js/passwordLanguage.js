let languageData = {
    en: {
        log_in: "Log In",
        fill_form: "Fill the form to log in",
        email: "E-mail",
        enter_email: "Your e-mail",
        password: "Password",
        enter_password: "Your Password",
        register: "Register Now",
        forgot_password: "Forgot Password?",
    },
    ge: {
        log_in: "Einloggen",
        fill_form: "Füllen Sie das Formular aus, um sich anzumelden",
        email: "E-Mail",
        enter_email: "Ihre E-Mail",
        password: "Kennwort",
        enter_password: "Ihr Kennwort",
        register: "Jetzt anmelden",
        forgot_password: "Passwort vergessen?",
    },
    fr: {
        log_in: "Se connecter",
        fill_form: "Remplissez le formulaire pour vous connecter",
        email: "Courriel",
        enter_email: "Votre e-mail",
        password: "Mot de passe",
        enter_password: "Votre mot de passe",
        register: "S'inscrire maintenant",
        forgot_password: "Mot de passe oublié ?",
    },
    pt: {
        log_in: "Log In",
        fill_form: "Preencha o formulário para fazer o login",
        email: "E-mail",
        enter_email: "Seu e-mail",
        password: "Senha",
        enter_password: "Sua senha",
        register: "Registre-se agora",
        forgot_password: "Esqueceu a senha?",
    },
    sp: {
        log_in: "Iniciar sesión",
        fill_form: "Rellene el formulario para iniciar la sesión",
        email: "Correo electrónico",
        enter_email: "Su correo electrónico",
        password: "Contraseña",
        enter_password: "Su contraseña",
        register: "Regístrese ahora",
        forgot_password: "¿Olvidó su contraseña?",
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