# Meteor et les mails

## Introduction

Le serveur SMTP à utiliser pour l'envoi de mail par Meteor semble ne se configurer que par la variable d'environnement MAIL_URL

```sh
$ export MAIL_URL='smtp://user:password@mailhost:port/'
```

## Configuration de la variable MAIL_URL au démarrage

```
// server/bootstrap.js

Meteor.startup(function () {
    // Données provenant de MongoDB ou d'ailleurs
    smtp = {
        username: 'xxxx',
        password: 'xxxx',
        server:   'smtp.gmail.com',
        port: 587 //25
    };
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

```
