import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true,
            enabled: true,  // this category is enabled by default
        },
        functionality: {},
        analytics: {
            autoClear: {
                cookies: [                 
                    {
                        name: /^_hjSession/,   // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: /^_ga/,   // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: '_gid',   // string: exact cookie name
                    }
                ]
            },

            // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
            services: {
                youtube: {
                    label: 'Youtube Embed',
                    onAccept: () => {},
                    onReject: () => {}
                },

            }
        },
        marketing: {}
    },
    language: {
        default: "en",
        autoDetect: "document",
        translations: {
            en: {
                consentModal: {
                    title: "Dear friends, fancy a cookie?",
                    description: "We use cookies to personalize your experience on our site. Read our cookie policy and customize your choices.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"https://mojo-agency.org/privacy-policy/\">Privacy Policy</a>\n<a href=\"https://mojo-agency.org/cookie-policy/\">Cookie Policy</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "We use cookies to personalize your experience on our site. Read our cookie policy and customize your choices."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
                            linkedCategory: "necessary"
                        },

                        {
                            title: "Analytics Cookies",
                            description: "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Advertisement Cookies",
                            description: "Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"https://mojo-agency.org/contact-us/\">contact us</a>."
                        }
                    ]
                }
            },
            fr: {
                consentModal: {
                    title: "On vous présente nos amis...\n<br>les Cookies !",
                    description: "Nous utilisons des cookies pour personnaliser votre expérience sur notre site. Vous pouvez lire notre politique en matière de cookies et personnaliser vos choix.",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: "<a href=\"https://mojo-agency.org/fr/politique-de-confidentialite/\">Politique de confidentialité</a>\n<a href=\"https://mojo-agency.org/fr/politique-dutilisation-des-cookies/\">Politique d’utilisation des cookies</a>"
                },
                preferencesModal: {
                    title: "Préférences de cookies",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    savePreferencesBtn: "Sauvegarder les préférences",
                    closeIconLabel: "Fermer la modale",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation des Cookies",
                            description: "Nous utilisons des cookies pour personnaliser votre expérience sur notre site. Vous pouvez lire notre politique en matière de cookies et personnaliser vos choix."
                        },
                        {
                            title: "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activé</span>",
                            description: "Les cookies nécessaires sont requis pour activer les fonctionnalités de base de ce site, telles que la fourniture d'une connexion sécurisée ou l'ajustement de vos préférences de consentement. Ces cookies ne stockent aucune donnée personnelle identifiable.",//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies Analytiques",
                            description: "Les cookies analytiques sont utilisés pour comprendre comment les visiteurs interagissent avec le site Web. Ces cookies aident à fournir des informations sur des mesures telles que le nombre de visiteurs, le taux de rebond, la source du trafic, etc.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Cookies Publicitaires",
                            description: "Les cookies publicitaires sont utilisés pour fournir aux visiteurs des publicités personnalisées basées sur les pages que vous avez visitées précédemment et pour analyser l'efficacité des campagnes publicitaires.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Plus d'informations",
                            description: "Pour toute question relative à ma politique en matière de cookies et à vos choix, veuillez <a class=\"cc__link\" href=\"https://mojo-agency.org/fr/nous-contacter/\">nous contacter</a>."
                        }
                    ]
                }
            }
        }
    }
});