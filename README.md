# 🎵 Générateur de noms de groupes de musique – Projet Docker

## 📋 Table des matières

- [🧩 Description](#-description)
- [🚀 Lancer le projet](#-lancer-le-projet)
- [🌍 Gestion des environnements](#-gestion-des-environnements)
- [🔗 Liens utiles](#-liens-utiles)
- [💬 Remarques](#-remarques)

---

## 🧩 Description

Ce projet consiste à créer un site web permettant de générer des noms de groupes de musique aléatoires, selon le format : **The {adjective} {noun}**.

L’objectif est de conteneuriser l’application avec **Docker Compose**, comprenant :
- un service web (Node.js)
- une base de données MySQL
- un service d’administration phpMyAdmin

L’application permet :
- de vérifier la connexion à la base de données ;
- de générer 10 noms aléatoires de groupes de musique à chaque requête ;
- d’afficher les noms sous forme de liste HTML ou via l’API JSON pour le frontend React.

---

## 🚀 Lancer le projet

### Prérequis
- Nodejs et npm installés
- MySQL installé localement

### Instructions

1. **Cloner le dépôt**

git clone https://github.com/Dauv3514/docker-projet-d-valentin

2. **Lancer le backend**

cd backend
npm install
# créer le fichier .env à partir de .env.dist
cp .env.dist .env
# lancer le serveur Backend
npm start 

3. **Lancer le frontend**

cd frontend
npm install
# lancer le serveur Frontend
npm run dev

3. **Tester**

# Frontend React
http://localhost:5173/

# Backend API
http://localhost:3001/api/generate-names

---

## 🌍 Gestion des environnements

| Élément                   | Développement                       | Production                   |
| ------------------------- | ----------------------------------- | ---------------------------- |
| Base de données           | MySQL local                         | MySQL distant ou cloud       |
| Backend                   | localhost:3000                      | Serveur exposé (port 8085)   |
| Frontend                  | localhost:5173                      | Serveur web ou service cloud |
| Variables d’environnement | `.env` local                        | `.env.prod` sécurisé         |
| Données                   | Jeu de test (10 adjectifs, 10 noms) | Jeu complet ou réel          |
| Logs                      | Console locale                      | Système de logs centralisé   |

Lors du passage de l'environnement de développement à l'environnement de production :

- La base de données utilise des identifiants sécurisés et phpMyAdmin n'est pas exposé.
- Seul le service web est accessible publiquement, la base reste interne.
- Les fichiers `.env` contiennent les vraies variables pour la production.
- Les volumes MySQL sont persistants pour conserver les données.
- Le logging est adapté : moins verbeux et centralisé.

---

## 🔗 Liens utiles

- [Node.js](https://nodejs.org/fr)
- [React](https://fr.react.dev/)
- [Documentation Docker Compose](https://docs.docker.com/compose/)
- [Image officielle MySQL](https://hub.docker.com/_/mysql)
- [Référence du fichier Compose](https://docs.docker.com/reference/compose-file/)

---

## 💬 Remarques

