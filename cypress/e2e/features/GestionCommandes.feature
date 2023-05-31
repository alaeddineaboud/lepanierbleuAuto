Feature: Achat d'un produit

    As a valid marchant
    I want to gerer les commandes

    Scenario: Modifier l'état du bon de commande
        Given l'utilisateur est sur le site marchant
        And le marchant est connecté avec les identifiants du "Alaeddine"
        When l'utilisateur rentre dans le menu "Bons de commande"
        And l'utilisateur selectionne le Bon de commande numéro "16000002857"
        And l'utilisateur modife l'état du bon de commande à "Prêt à être expédié"
        And l'utilisateur choisir un expediteur "TestAuto" avec un numéro "123456" et il valide
        Then vérifier la présence d'un message de validation "Le numéro de suivi de commande a été ajouté"
        And verifier la présence du lien 'Bordereau d'expédition' pour téléchargemant




          
