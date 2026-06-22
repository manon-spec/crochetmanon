# Projet : Boutique crochet de Manon

## Contexte

Site vitrine \+ commande pour les créations crochet de Manon Tapié. Les amis de Manon visitent le site, choisissent une création, indiquent la couleur souhaitée (en référençant le site de la marque de laine), et envoient leur commande. Manon reçoit un mail avec tous les détails.

## Objectif final

- Site épuré, minimaliste, fond blanc  
- Photos des créations gérées par Manon (drag & drop depuis une page admin)  
- Page admin protégée par mot de passe pour gérer les photos et ajouter de nouvelles créations  
- Formulaire de commande → email automatique à [tapie.manon@gmail.com](mailto:tapie.manon@gmail.com)

## Stack technique

- **Frontend** : HTML \+ CSS \+ JS vanilla (un seul fichier index.html au départ)  
- **Hébergement** : Vercel (déploiement automatique depuis GitHub)  
- **Photos** : Cloudinary (stockage images, upload drag & drop)  
- **Emails** : Formspree (gratuit jusqu'à 50 mails/mois)  
- **Admin** : page /admin.html protégée par mot de passe simple

## Créations actuelles

| Nom | Matière | Lien couleurs |
| :---- | :---- | :---- |
| Bonnet fisherman | Laine | À renseigner |
| Bob | Coton | À renseigner |
| Écharpe Sophie | Laine \+ coton | À renseigner |

Manon veut pouvoir ajouter de nouvelles créations facilement depuis l'admin ou via Claude Code.

## Fonctionnement des couleurs

Pas de palette figée dans le site. On affiche un lien vers le site de la marque (Drops Design ou autre) pour que l'ami choisisse parmi les coloris disponibles. Il note la référence dans un champ texte libre.

## Page admin (/admin.html)

- Accès par mot de passe (simple, côté JS)  
- Upload de photos en drag & drop via widget Cloudinary  
- Possibilité d'associer une photo à une création  
- Possibilité d'ajouter une nouvelle création (nom \+ matière \+ lien couleurs)

## Email reçu par Manon

Format souhaité :

\[Prénom\] \[Nom\] a passé une commande

Création : Bonnet fisherman

Couleur : Drops Karisma coloris 100 Off White

Message : Tour de tête \~56cm, pour Noël

## Compte email de Manon

[tapie.manon@gmail.com](mailto:tapie.manon@gmail.com)

## Ce qui reste à décider

- [ ] Nom du site (pas encore choisi)  
- [ ] Liens exacts vers les sites de laine (Drops Design, autre ?)  
- [ ] Mot de passe admin  
- [ ] Compte Cloudinary à créer

## Prochaines étapes pour démarrer

1. Créer un dossier `crochet-shop` sur l'ordi  
2. Placer ce fichier CLAUDE.md dedans  
3. Ouvrir Claude Code dans ce dossier  
4. Dire : "Lis le CLAUDE.md et commence à construire le site"

