**Introduction aux Middleware dans Nuxt 3**

Les middleware dans Nuxt 3 permettent d'exécuter du code avant d'accéder à une page ou de naviguer entre les routes de l'application. Ils sont très utiles pour des tâches comme les redirections, la validation des autorisations ou l'analyse des routes.

### Types de Middleware

1. **Middleware global** : Exécuté automatiquement à chaque changement de route.
2. **Middleware sélectif** : Appliqué uniquement à certaines pages ou routes.

### Création d'un Middleware Global

Un middleware global s'applique à toutes les routes de votre application. Pour créer un middleware global :

1. Créez un fichier dans le répertoire `middleware/` avec le suffixe `.global`. Par exemple : `auth.global.ts`.
2. Ajoutez la logique à exécuter avant chaque navigation.

```typescript
// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user'); // Exemple : état global pour l'utilisateur

  if (!user.value && to.path.startsWith('/admin')) {
    return navigateTo('/login');
  }
});
```

**Explication :** Ce middleware vérifie si l'utilisateur est connecté. Si ce n'est pas le cas et qu'il tente d'accéder à une route admin, il est redirigé vers la page de connexion.

### Création d'un Middleware Sélectif

Pour appliquer un middleware à certaines pages seulement :

1. Créez un fichier middleware sans le suffixe `.global`. Par exemple : `admin.ts`.
2. Définissez la logique pour vérifier l'accès ou effectuer d'autres actions.

```typescript
// middleware/admin.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user');

  if (!user.value || user.value.role !== 'admin') {
    return navigateTo('/login');
  }
});
```

3. Appliquez ce middleware à une page en l'ajoutant dans `definePageMeta`.

```vue
<!-- pages/admin/dashboard.vue -->
<script setup>
definePageMeta({
  middleware: 'admin',
});
</script>

<template>
  <h1>Dashboard Admin</h1>
</template>
```

**Explication :** Ce middleware est appelé uniquement pour la page d'administration. Si l'utilisateur n'est pas administrateur, il est redirigé vers `/login`.

### Détails Supplémentaires

- **Ordre d'exécution** : Les middleware globaux sont toujours exécutés avant les middleware sélectifs.
- **Valeurs de retour** :
  - `navigateTo('/chemin')` : redirige l'utilisateur vers une autre page.
  - `abortNavigation()` : bloque la navigation en cours.

Avec ces éléments, vous pouvez facilement protéger vos routes et gérer les accès dans votre application Nuxt 3.

