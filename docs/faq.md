# FAQ

### Meteor est t'il nécessaire sur le serveur de production, une fois publié l'application ?

Non, la commande *meteor build* génère un projet Node.js autonome.

### Est-ce que je peux publier mon application sur meteor.com mais utiliser une adresse avec mon domaine ?

Oui, il suffit d'ajouter un enregistrement CNAME dans le dns de votre domaine

**Exemple:**

    myapp.mydomain.com  CNAME   myapp-v1.meteor.com.