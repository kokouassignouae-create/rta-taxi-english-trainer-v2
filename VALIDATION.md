# Vérifications de la V2 mise à jour

Vérifications automatisées réussies le 25 novembre 2026 :

- 200 questions : 100 issues des captures, 100 complémentaires.
- 90 énoncés écrits transcrits et 10 énoncés de remplacement pour les captures audio.
- Identifiants uniques, quatre options distinctes et réponse indexée valide pour chaque fiche.
- 100 images incluses, avec récupération complète des deux dernières.
- 600 tirages d’examen, répartis entre les trois banques : 50 questions sans répétition des groupes de variantes repérés.
- Trois questions ambiguës exclues de l’examen et du dénominateur du score en révision.
- Simulation d’un examen complet, verrouillage des réponses, expiration du chronomètre, passage automatique et historique local.
- Syntaxe JavaScript et présence de tous les fichiers du cache principal, images et icônes incluses.

Les parcours ont été vérifiés avec un DOM simulé. La tentative de vérification dans un navigateur réel a rencontré un blocage d’accès au serveur local. L’affichage final, l’installation PWA et le fonctionnement effectif du cache restent à vérifier sur l’hébergement cible.

Le corrigé repose sur l’analyse des propositions, pas sur une clé officielle. Les coches visibles sur certaines captures audio ne prouvent pas que la réponse sélectionnée était correcte. Les dix énoncés de remplacement sont signalés ; l’audio d’origine n’a pas été récupéré.

## Mise à jour bilingue

Vérifications automatisées supplémentaires réussies : choix de langue à l’arrivée, préférence enregistrée sans passage automatique, confirmation de changement pendant une session, parcours révision/examen/résultats/historique/captures dans les deux langues, messages d’erreur localisés et 200 explications anglaises présentes. Les textes des questions et leurs options anglaises sont conservés. Le fichier de traduction est inclus dans le cache hors ligne ; sa version a été augmentée.
