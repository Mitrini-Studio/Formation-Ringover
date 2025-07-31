document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const ssoButtons = document.querySelectorAll('.sso-button');
    const passwordInput = document.getElementById("password");
    const togglePasswordText = document.getElementById("togglePasswordText");
    const flagIcons = document.querySelectorAll('.flag-icon');

    // Language translations
    const translations = {
        fr: {
            login_title: "Connexion",
            email_label: "Email",
            password_label: "Mot de passe",
            forgot_password: "Mot de passe oublié ?",
            show_password: "VOIR",
            hide_password: "CACHER",
            login_button: "Connexion",
            sso_title: "Utiliser le SSO",
            or_text: "ou",
            continue_apple: "Continuer avec Apple",
            continue_facebook: "Continuer avec Facebook",
            continue_google: "Continuer avec Google",
            continue_microsoft: "Continuer avec Microsoft",
            continue_linkedin: "Continuer avec LinkedIn",
            privacy_policy: "Politique de Confidentialité et d'utilisation des Cookies",
            login_success_alert: "Connexion réussie ! Bienvenue sur la plateforme de formation.",
            login_error_alert: "Identifiants incorrects. Veuillez utiliser '  userringover@gmail.com  ' pour l'email et '  TEST.2025.R  ' pour le mot de passe.",
            forgot_password_alert: "Si vous avez un problème de connexion, veuillez contacter votre supérieur. Réessayer avec des codes erronés pourrait désactiver le compte. (AVERTISSEMENT)",
            sso_alert: "Veuillez utiliser uniquement le login qui vous a été attribué (adresse email et mot de passe)."
        },
        en: {
            login_title: "Login",
            email_label: "Email",
            password_label: "Password",
            forgot_password: "Forgot password ?",
            show_password: "SHOW",
            hide_password: "HIDE",
            login_button: "Login",
            sso_title: "Use SSO",
            or_text: "or",
            continue_apple: "Continue with Apple",
            continue_facebook: "Continue with Facebook",
            continue_google: "Continue with Google",
            continue_microsoft: "Continue with Microsoft",
            continue_linkedin: "Continue with LinkedIn",
            privacy_policy: "Privacy Policy and Cookie Usage",
            login_success_alert: "Login successful! Welcome to the training platform.",
            login_error_alert: "Incorrect credentials. Please use '  userringover@gmail.com  ' for email and '  TEST.2025.R  ' for password.",
            forgot_password_alert: "If you have a login issue, please contact your supervisor. Retrying with incorrect codes could disable the account. (WARNING)",
            sso_alert: "Please only use the login assigned to you (email address and password)."
        },
        es: {
            login_title: "Iniciar Sesión",
            email_label: "Correo Electrónico",
            password_label: "Contraseña",
            forgot_password: "¿Olvidaste tu contraseña?",
            show_password: "VER",
            hide_password: "OCULTAR",
            login_button: "Iniciar Sesión",
            sso_title: "Usar SSO",
            or_text: "o",
            continue_apple: "Continuar con Apple",
            continue_facebook: "Continuar con Facebook",
            continue_google: "Continuar con Google",
            continue_microsoft: "Continuar con Microsoft",
            continue_linkedin: "Continuar con LinkedIn",
            privacy_policy: "Política de Privacidad y Uso de Cookies",
            login_success_alert: "¡Inicio de sesión exitoso! Bienvenido a la plataforma de capacitación.",
            login_error_alert: "Credenciales incorrectas. Utilice '  userringover@gmail.com  ' para el correo electrónico y '  TEST.2025.R  ' para la contraseña.",
            forgot_password_alert: "Si tiene un problema de inicio de sesión, póngase en contacto con su superior. Reintentar con códigos incorrectos podría deshabilitar la cuenta. (ADVERTENCIA)",
            sso_alert: "Utilice únicamente el inicio de sesión que le fue asignado (dirección de correo electrónico y contraseña)."
        }
    };

    // Function to update content based on current language
    function updateContent(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // Update password toggle text specifically
        if (passwordInput.type === "password") {
            togglePasswordText.textContent = translations[lang].show_password;
        } else {
            togglePasswordText.textContent = translations[lang].hide_password;
        }
    }

    // Initialize with French (or preferred default)
    let currentLang = document.documentElement.lang;
    updateContent(currentLang);

    // Event listener for password toggle
    if (togglePasswordText) {
        togglePasswordText.addEventListener('click', function() {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordText.textContent = translations[currentLang].hide_password;
            } else {
                passwordInput.type = "password";
                togglePasswordText.textContent = translations[currentLang].show_password;
            }
        });
    }

    // Event listeners for language flags
    flagIcons.forEach(flag => {
        flag.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang');
            if (newLang !== currentLang) {
                currentLang = newLang;
                document.documentElement.lang = currentLang; // Update html lang attribute
                updateContent(currentLang); // Update all content
                
                // Update active flag visual
                flagIcons.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Form submission logic
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === "userringover@gmail.com" && password === "TEST.2025.R") {
                alert(translations[currentLang].login_success_alert);
                // Redirect to appel.html on successful login
                window.location.href = "loading.html"; 
            } else {
                alert(translations[currentLang].login_error_alert);
            }
        });
    }

    // Forgot password link logic
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            alert(translations[currentLang].forgot_password_alert);
        });
    }

    // SSO buttons logic
    ssoButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default button behavior
            alert(translations[currentLang].sso_alert);
        });
    });
});