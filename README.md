# Quiz React Application

## Description

Il s'agit d'une application de quiz en temps réel construite avec React, Socket.IO et ChatGPT , où les utilisateurs
peuvent répondre à des questions de culture générale.

## Pré-requis

Assurez vous d'avoir [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/) installé sur votre mahcine.

Nous utilisons un fichier *.env* à la racine du projet pour stocker notre OPENAI_API_KEY.

## Démarrage

### Installation des dépendances

```bash
npm install
```

## Lancement de l'application React

```bash
npm run dev
```

## Lancement du serveur Socket.IO

```bash
nodemon server.js
```

## Utilisation

- Ouvrez votre navigateur et accédez à http://localhost:3000 pour accéder à l'application de quiz.
- Choisissez votre niveau de difficulté et commencez le quiz.
- Répondez aux questions de culture générale en temps réel en cliquant directement sur une réponse.
- Consultez les résultats et obtenez des indices pendant le quiz.