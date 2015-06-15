# Structure de Projet Meteor

## Introduction

Il y a beaucoup d'avis sur cette question mais pour l'instant, pour ma part, j'ai choisi la suivante:

    .meteor/
    client/
        stylesheets/
        lib/
        views/
        helpers.js
        router.js
        startup.js
    common/
        lib/
        collections/
    server/
        lib/
        startup.js
        methods.js
        publish.js
    public/
    private/
    i18n/
    packages/
    settings.json
    README.md

## Installation

    git clone https://github.com/srault95/meteor-app-base.git myproject

    cd myproject/app

    meteor update

