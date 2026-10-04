# API du blog

Petite API REST construite avec Express.js. Les articles et les utilisateurs sont stockés en mémoire et sont réinitialisés au redémarrage du serveur.

## Installation et démarrage

Prérequis : Node.js et npm.

```bash
npm install
npm run dev
```

Le serveur démarre sur `http://localhost:3000`.

## Routes

| Méthode | URL | Description |
| --- | --- | --- |
| `GET` | `/` | Message de bienvenue |
| `GET` | `/about` | Informations sur l'application |
| `GET` | `/api/articles` | Liste des articles |
| `GET` | `/api/articles?author=Aya` | Articles filtrés par auteur |
| `GET` | `/api/articles/:id` | Article correspondant à l'identifiant |
| `POST` | `/api/articles` | Créer un article |
| `GET` | `/api/users` | Liste des utilisateurs |
| `GET` | `/api/users?name=Aya` | Utilisateurs filtrés par nom |
| `GET` | `/api/users/:id` | Utilisateur correspondant à l'identifiant |
| `POST` | `/contact` | Envoyer un message de contact |

### Exemples de requêtes POST

Pour créer un article, envoyer un corps JSON :

```json
{
  "title": "Un nouvel article",
  "author": "Aya"
}
```

Pour envoyer un message de contact :

```json
{
  "email": "exemple@email.com",
  "message": "Bonjour"
}
```

Les requêtes POST doivent avoir l'en-tête `Content-Type: application/json`.