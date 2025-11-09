# 🎵 Générateur de noms de groupes de musique – Projet Docker

## 📋 Table des matières

- [🧩 Description](#-description)
- [🚀 Lancer le projet](#-lancer-le-projet)
- [🌍 Gestion et réflexion sur les environnements](#-gestion-et-réflexion-sur-les-environnements)
- [🔗 Liens utiles](#-liens-utiles)
- [💬 Remarques](#-remarques)

---

## 🧩 Description

Ce projet consiste à créer un site web permettant de générer des noms de groupes de musique aléatoires, selon le format : **The {adjective} {noun}**.

L’objectif est de conteneuriser l’application avec **Docker Compose**, comprenant :
- un service web (Node.js)
- une base de données MySQL
- un service d’administration Adminer ou phpMyAdmin

L’application permet :
- de vérifier la connexion à la base de données ;
- de générer 10 noms aléatoires de groupes de musique à chaque requête ;
- d’afficher les noms sous forme de liste HTML ou via l’API JSON pour le frontend React. Le backend expose une API REST permettant de générer et récupérer les noms sous format JSON.

---

## 🚀 Lancer le projet

### 🐳 Version Automatique (avec Docker)

Cette version utilise **Docker Compose** pour lancer automatiquement :
- le **backend Node.js**
- la **base de données MySQL**
- l’outil d’administration **Adminer**

#### ⚙️ Prérequis

- VS Code, Docker et Docker Compose installés sur votre machine

#### ▶️ Commandes

1. **Cloner le dépôt**

```bash
git clone https://github.com/Dauv3514/docker-projet-d-valentin

```

2. **Configurer les variables d'environnement**

```bash
cp backend/.env.dist backend/.env

```

3. **Lancer les conteneurs**

```bash
docker compose up

```

4. **Accéder aux services**

- Backend : http://localhost:8085/api/generate-names
- Base de données (Adminer) : http://localhost:8086



### Version Manuelle (sans Docker)

#### Prérequis
- VS Code, Nodejs et npm installés
- MySQL installé localement

#### Instructions

1. **Cloner le dépôt**

```bash
git clone https://github.com/Dauv3514/docker-projet-d-valentin

```

2. **Installer le backend**

```bash
cd backend
npm install

```

3. **Créer le fichier .env à partir de .env.dist**

```bash
cp .env.dist .env

```

4. **Lancer le serveur Backend**

```bash
npm start 

```

5. **Installer le frontend**

```bash
cd frontend
npm install

```

6. **Lancer le serveur Frontend**

```bash
npm run dev
```

7. **Tester**

- Frontend React : http://localhost:5173/

![Frontend](frontend.png)

- Backend API : http://localhost:3001/api/generate-names


### ⚙️ Construire l’image du service web pour la future mise en production

1. **Se déplacer dans le dossier backend**

```bash
cd backend

```

2. **Créer une image Docker prête à être déployée en production**

```bash
docker build -t bandnamesgenerator:1.0.0 .

```

---

## 🌍 Gestion et réflexion sur les environnements

### 🌍 Gestion des environnements

| Élément                   | Développement                       | Production                   |
| ------------------------- | ----------------------------------- | ---------------------------- |
| Base de données           | MySQL local                         | MySQL distant ou cloud       |
| Backend                   | localhost:3001                      | Serveur exposé (port 8085)   |
| Outil d’administration    | **Adminer** sur port 8086           | ❌ Non déployé (sécurité)    |
| Frontend                  | localhost:5173                      | Serveur web ou service cloud |
| Variables d’environnement | `.env` local                        | `.env.prod` sécurisé         |
| Données                   | Jeu de test (10 adjectifs, 10 noms) | Jeu complet ou réel          |
| Logs                      | Console locale                      | Système de logs centralisé   |

### 💭 Réflexion sur les environnements

Lors du passage d’un environnement de **développement** à un environnement de **production**, plusieurs éléments doivent être adaptés :

1. **Base de données**
   - En développement : base MySQL locale, réinitialisable, avec un petit jeu de données de test.
   - En production : base distante (serveur dédié ou cloud), sécurisée, avec des données réelles et persistantes.

2. **Backend**
   - En développement : lancé avec `nodemon` pour le rechargement automatique.
   - En production : exécuté depuis une image Docker optimisée, sans `nodemon`.

3. **Outils d’administration**
   - En développement : utilisation d’un outil comme **Adminer** ou **phpMyAdmin** pour inspecter et modifier facilement la base.
   - En production : ces outils ne sont **pas déployés** pour éviter les failles de sécurité.

4. **Frontend**
   - En développement : exécuté via `npm run dev` (serveur Vite avec hot reload).
   - En production : build statique (`npm run build`) servi par un serveur web (NGINX, Apache ou autre).

5. **Variables d’environnement**
   - En développement : `.env` avec des valeurs simples ou par défaut (ex: `user`, `password`).
   - En production : `.env.prod` (non versionné) contenant des credentials sécurisés et spécifiques au serveur.

6. **Sécurité et réseau**
   - En développement : ports exposés pour tester localement.
   - En production : seule l’API et le frontend sont accessibles publiquement, la base reste privée.

7. **Logs et performances**
   - En développement : logs détaillés en console.
   - En production : logs réduits, éventuellement stockés dans un service externe (CloudWatch, ELK…).

En résumé, le passage en production implique de **sécuriser, optimiser et isoler** les services pour garantir stabilité et confidentialité.

🔁 Transition entre les environnements

Lors du passage du **développement** à la **production** :
- Le service **Adminer** n’est **pas lancé** (réservé au dev).
- La **base MySQL** est protégée et non exposée à l’extérieur.
- Le **backend** est compilé et packagé dans une image (`bandnamesgenerator:1.0.0`).
- Les **variables sensibles** (mots de passe, clés, etc.) sont stockées dans un `.env.prod` non versionné.
- Les **volumes MySQL** assurent la persistance des données.
- Le **logging** passe d’un affichage en console à un système plus sobre et sécurisé.

---

## 🔗 Liens utiles

- [Node.js](https://nodejs.org/fr)
- [React](https://fr.react.dev/)
- [Documentation Docker Compose](https://docs.docker.com/compose/)
- [Image officielle MySQL](https://hub.docker.com/_/mysql)
- [Image officielle Adminer](https://hub.docker.com/_/adminer)
- [Image officielle Node.js](https://hub.docker.com/_/node)
- [Référence du fichier Compose](https://docs.docker.com/reference/compose-file/)

---

## 💬 Remarques

J'ai décidé de ne pas conteneuriser le frontend React dans cette version du projet pour respecter les consignes demandées dans le devoir. Cependant, il est tout à fait envisageable de le faire pour une solution plus complète et cohérente. Le frontend React pourrait être disponible par exemple sur 👉 http://localhost:8080

### 🤔 Améliorations possibles

**Conteneurisation du Frontend**
- Actuellement, seul le backend est conteneurisé avec Node.js
- Le frontend pourrait également être conteneurisé pour une solution complète
- Avantages potentiels :
   - Cohérence de l'environnement de développement
   - Déploiement simplifié
   - Configuration unifiée via Docker Compose
- Possibilité d'utiliser NGINX pour servir le build React en production
   
### 🛠️ Architecture actuelle vs Architecture possible

**Actuel :**
- Backend : Conteneurisé (Node.js)
- Base de données : Conteneurisée (MySQL)
- Admin : Conteneurisé (Adminer)
- Frontend : Non conteneurisé (React en local)

**Possible :**
- Backend : Conteneurisé (Node.js)
- Base de données : Conteneurisée (MySQL)
- Admin : Conteneurisé (Adminer)
- Frontend : Conteneurisé (React + NGINX)
- Reverse Proxy : NGINX pour gérer les routes entre frontend et backend