AppConfig = {
    'configured': false,
    'roles': {
        'admin': 'admin',
        'site_manager': 'site-manager'
    },
    'default_admin': {
        email: "admin@example.net",
        password: "password",
    }
}

UI.registerHelper('AppConfig', AppConfig);