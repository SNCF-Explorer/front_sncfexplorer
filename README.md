# NextJS App - JWT Authentication & Agent Map

## Description

Cette application Next.js permet aux utilisateurs de s'authentifier via JWT.  
Les utilisateurs possédant le rôle **"agent"** peuvent accéder à une carte interactive affichant des **popups** avec des informations spécifiques.

---

## Fonctionnalités

-   Authentification sécurisée avec JWT
-   Gestion des rôles (ex. agent, utilisateur normal)
-   Tableau de bord utilisateur
-   Carte interactive pour les agents
    -   Popups affichant des informations sur des points spécifiques
-   Responsive design

---

## Technologies utilisées

-   **Next.js** - Framework React pour le rendu côté serveur et le routing
-   **React** - Bibliothèque UI
-   **JWT** - Authentification sécurisée
-   **Leaflet** ou **Google Maps API** - Carte interactive
-   **Tailwind CSS / CSS Modules** - Styles

---

## Installation

1. Cloner le projet :

```bash
git clone https://github.com/Luuxio/next_sncf
cd next_sncf
npm i
```

2. Installer les dépendances :

```bash
npm install
# ou
yarn install
```

3. Créer un fichier `.env.local` à la racine et ajouter les variables d'environnement nécessaires :

```env
JWT_SECRET=tonSecretJWT
NEXT_PUBLIC_MAP_API_KEY=taCleMap
```

---

## Lancer l'application

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

```
/pages
  |_ api
      |_ auth.js       # Route pour login et génération JWT
      |_ users.js      # Gestion des utilisateurs
  |_ index.js          # Page d'accueil
  |_ dashboard.js      # Dashboard utilisateur / agent
/components
  |_ Map.js            # Composant carte avec popups
  |_ Navbar.js         # Navbar avec gestion rôle
/lib
  |_ auth.js           # Fonctions JWT (sign, verify)
/styles
  |_ globals.css
```

---

## Authentification JWT

-   Lors du login, l'utilisateur reçoit un **JWT** contenant son rôle (`agent` ou `user`).
-   Les routes protégées vérifient le token et le rôle de l'utilisateur.
-   Les agents ont accès à des composants spécifiques (ex. la carte avec popups).

---

## Carte interactive (pour les agents)

-   La carte affiche différents points (locations, tâches, etc.)
-   Chaque point peut avoir un **popup** avec des informations détaillées
-   Exemple avec **Leaflet** :

```jsx
export default function MapComponent() {
    return (
        <div className="h-[80vh] w-full rounded shadow">
            <MapContainer
                center={[48.8584, 2.2945]} // Coordonnées par défaut : Paris
                zoom={13}
                scrollWheelZoom={true}
                className="h-full w-full z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[48.8584, 2.2945]}>
                    <Popup>Bonjour depuis Paris !</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
```

---

## Licence

MIT
