# RTA Taxi English Trainer V2

Application de préparation indépendante en anglais, sans base de données.

## Langue de l’application

Un écran Français / English est affiché à chaque ouverture. La dernière langue choisie est mémorisée et mise en valeur, sans supprimer cet écran.

- Français : menus, consignes, explications et résultats en français ; questions et choix toujours en anglais.
- English : menus, instructions, explanations, results, questions and answer choices all in English.

Le bouton de langue en haut de l’écran permet de revenir au choix. Si une session est en cours, une confirmation explique qu’elle sera quittée sans sauvegarder les réponses en cours. Les résultats des sessions terminées restent conservés, quelle que soit la langue.

## Ce que contient cette version

- Révision : 200 questions disponibles, ordre aléatoire, 10 secondes par question, correction immédiate et explication en français.
- Examen : 50 questions sans répétition, 10 secondes chacune, passage automatique, score et correction à la fin.
- Révision des erreurs, lecture vocale facultative et historique des 30 dernières sessions sur cet appareil.
- Installation PWA et contenu principal hors ligne après le premier chargement réussi.

La banque précédente de 100 exercices contenait 20 questions de base répétées cinq fois. La V2 conserve les 20 questions de base et ajoute 80 exercices différents. Les exercices ajoutés sont des créations de préparation et ne sont pas présentés comme des questions officielles RTA.

## Captures intégrées

Les 100 images originales sont incluses dans le dossier images. Elles ont été récupérées dans une copie locale de l’ancienne application. Les deux dernières images tronquées ont été remplacées par des copies complètes retrouvées parmi les originaux.

La banque contient maintenant 200 questions : 100 issues de tes captures et 100 exercices complémentaires. Le sélecteur de l’accueil permet de choisir l’une de ces banques ou l’ensemble.

90 énoncés écrits ont été transcrits, avec normalisation légère de la ponctuation. 10 captures montrent seulement une icône audio et les choix, sans enregistrement. Pour ces 10 questions, des énoncés de remplacement ont été rédigés ; ils sont clairement signalés. Les contextes nécessaires aux questions de porte et d’horaire sont ajoutés dans les nouveaux énoncés, sans prétendre reconstituer l’audio d’origine.

Trois questions admettent plusieurs réponses plausibles : S055 (greet/charge), S074 (Maghrib/iftar), S087 (slippery/wet). Leur réponse probable est expliquée en révision mais elles sont exclues de la notation et des examens. 197 questions sont donc admissibles à la notation. Les groupes de variantes proches identifiés dans les captures ne sont pas tirés ensemble dans un examen.

Le lecteur Captures originales présente le texte, les options, la réponse et l’image. CORRIGE_CAPTURES.md contient également les 100 fiches. Les anciennes clés personnelles ne remplacent pas le corrigé intégré. Aucun corrigé officiel RTA n’est revendiqué.

Le cache principal inclut les 100 images pour une utilisation hors ligne après une première mise en cache réussie. Copier tous les fichiers, y compris le dossier images, lors de la publication.

## Ouvrir sous Windows

Ne pas ouvrir index.html par double clic : le chargement des fichiers JSON exige un serveur.

Si Python est installé, ouvrir PowerShell dans ce dossier et lancer :

```powershell
python -m http.server 8080
```

Puis ouvrir http://localhost:8080 dans Chrome ou Edge. Autre possibilité : l’extension Live Server de VS Code.

## GitHub Pages

Copier le contenu de ce dossier dans le dépôt utilisé pour l’application, au niveau de index.html. Dans les paramètres du dépôt, activer Pages sur la branche contenant les fichiers. Inclure impérativement le dossier images. Ouvrir l’adresse HTTPS fournie par GitHub Pages.

Le bouton Installer utilise la proposition du navigateur lorsqu’elle est disponible. Sinon : menu de Chrome ou Edge → Installer l’application. Sur iPhone : Safari → Partager → Sur l’écran d’accueil. La disponibilité dépend du navigateur et de ses critères d’installation.

## Données et limites

Les résultats sont sauvegardés uniquement dans le navigateur de cet appareil. Effacer les données du site les supprime. La lecture vocale dépend des voix disponibles et peut nécessiter Internet. Le chronomètre continue lorsque l’onglet est masqué ; au retour, une question expirée est comptée sans réponse. Aucun seuil officiel de réussite n’est présumé.

## Validation

Voir VALIDATION.md pour les vérifications effectuées et leurs limites. Cette version est fournie sous forme de fichiers ; elle n’a pas encore été publiée sur votre dépôt GitHub.
