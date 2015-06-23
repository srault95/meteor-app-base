# Telescope

* http://www.telescopeapp.org/
* https://github.com/TelescopeJS/Telescope
* http://www.bootstrappers.io/

## Sites / Applications réalisés avec Telescope et dont les sources sont disponibles

* http://www.crunchhunt.com/
  * https://github.com/TelescopeJS/CrunchHunt
* https://crater.io/
  * https://github.com/meteorclub/crater.io
* http://hangouts.codebuddies.org/
  * https://github.com/lpatmo/cb

## TODO

- Suppression des posts
- Ajout Recaptcha

## Création d'un projet Telescope

### Création du projet

```sh
$ meteor create myproject

$ cd myproject

$ rm -f myproject.*
```

### Editez .meteor/packages et ajoutez:

```
telescope:core

telescope:migrations
telescope:api
telescope:daily
telescope:datetimepicker
telescope:email
telescope:embedly
telescope:getting-started
telescope:invites
telescope:kadira
telescope:newsletter
telescope:notifications
telescope:pages
telescope:post-by-feed
telescope:releases
telescope:rss
telescope:scoring
telescope:search
telescope:share
telescope:singleday
telescope:subscribe-to-posts
telescope:tagline-banner
telescope:tags
telescope:theme-base
telescope:theme-hubble
telescope:update-prompt
```

**Modules non installé et non documentés:**

```
# Pas fonctionnel !!!
# https://github.com/TelescopeJS/Telescope/blob/master/packages/telescope-sitemap
# Fournit un /sitemap.xml - Déclenchera une erreur si l'url du site n'est pas renseigné
# $ meteor add telescope:sitemap
```


### Mise à jour et démarrage

Le premier utilisateur enregistré aura les droits Administrateur.

NE pas supprimer tout de suites les utilisateurs de démonstration car ils semblent rattachés aux Post

```
$ meteor update

$ meteor
```

### Configuration

Enregistrez-vous et ouvrez la page http://localhost/settings pour configurer le site

### Configuration des Mail

#### Utilisation du service MailGun

- Inscrivez-vous sur http://www.mailgun.com/

- Entrez l'url avec votre compte mailgun dans le champs Mail Url:

```
smtp://postmaster%40telescope.mailgun.org:password@smtp.mailgun.org:587/
```

#### Liste des services d'envoi de mail

* Utilisable gratuitement (mais limité)
  * http://www.mandrill.com/ (12 000 mails par mois)
  * http://www.mailgun.com/ (10 000 mails par mois - A condition d'ajouter son nom de domaine ?)

* Les payants:
  * https://sendgrid.com/
  * https://fr.mailjet.com/
  * http://mailchimp.com/
    * http://openclassrooms.com/courses/reussir-sa-campagne-d-e-mailing-avec-mailchimp
    * http://mailchimp.meteor.com/

* Comparatifs
  * http://alternativeto.net/software/mailgun/
  * https://www.g2crowd.com/products/mailgun/competitors/alternatives
  * http://www.sitepoint.com/email-as-a-service-part-2-sendgrid-mailgun-and-postmark/

## Déploiement sur meteor.com

Vous devez avoir un compte développeur chez Meteor

Les données de ce compte sont stocké après la premières authentification dans ~/.meteorsession

```sh
$ meteor deploy myproject
```

Ouvrez votre site à l'adresse http://myproject.meteor.com


## Les modules Telescope


## Les thèmes Telescope

* http://www.telescopeapp.org/themes
* http://telescope-iris.meteor.com/
* https://github.com/WebbROI/telescope-themes/tree/master/telescope-theme-iris

```sh

# Avant de l'installer, paramètrer "Navigation Layout" sur Side

$ meteor add webbroi:telescope-theme-iris

```

Pour personnaliser un thème, il suffit de le télécharger dans le répertoire "packages"

## Ajout de page static

Dans settings, utilisez le menu page. Le contenu s'écrit en Markdown

## Ajout de fonctionnalités

### Authentification github

* Sur Telescope, le settings ne prend pas en compte l'ajout du nouveau module pour la configuration

```sh
$ meteor add accounts-github
```

