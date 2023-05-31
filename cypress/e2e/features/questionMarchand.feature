Feature: Achat d'un produit

    As a valid user
    I want to verifier l'achat



    Scenario: Poser une question à un marchand sur une commande expédiée
        Given l'utilisateur est sur le site web panier bleu avec "pc"
        And l'utilisateur est connecté avec les identifiants du "Axel"
        When dans le menu, l'utilisateur clique sur "Bonjour alaeddine"
        And l'utilisateur clique sur 'Mes questions aux marchands'
        And l'utilisateur clique sur 'Poser une nouvelle question'
        And l'utilisateur écri ma question dans "Texte de la question" pour le marchand "Abieze Laboratoires"
        And l'utilisateur clique sur 'Soumettre'
        Then verifier que la nouvelle question est ajoutée dans la liste
        And  l'utilisateur clique sur 'Voir les détails de la question' pour visualiser les détails

    