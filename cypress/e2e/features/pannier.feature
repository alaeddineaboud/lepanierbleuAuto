Feature: Achat d'un produit

    As a valid user
    I want to verifier l'achat

    Scenario: Achat d'un produit vendu par plusieurs marchands
        Given l'utilisateur est sur le site web panier bleu avec "samsung-s10"
        And l'utilisateur est connecté avec les identifiants du "Axel"
        When l'utilisateur recherche le produit "Star Wars"
        And l'utilisateur fait défiler les résultats de recherche jusqu'à trouver le produit "T-Shirts Star Wars le Mandalorien Grogu de la St-Patric"
        And l'utilisateur selectionne le produit
        And l'utilisateur repère l'encadré 'VENDU ET EXPÉDIÉ PAR' et clique sur '2 marchands pour ce produit'
        And l'utilisateur voit apparaître une pop-up latérale avec les différents vendeurs proposant le produit
        And l'utilisateur clique sur le bouton 'Ajouter au panier' pour le vendeur "Peluche et Fanfreluche"
        ##And la pop-up se ferme automatiquement
        And l'utilisateur voit apparaître un bandeau de notifications "Vous avez ajouté T-Shirts Star Wars le Mandalorien Grogu de la St-Patric à votre panier."
        And l'utilisateur clique sur le lien 'Panier'
        #And l'utilisateur se trouve sur la page de son panier et il repère le champ quantité
        #And l'utilisateur écrit "2" dans le champ et il clique sur 'Mettre à jour'
        And l'utilisateur voit apparaître le récapitulatif de son panier à droite de la page et il clique sur 'Estimer les frais de livraisons et les taxes'
        And dans le champ 'Code Postal', l'utilisateur saisit "H2T 2S5" et il clique sur 'Livraison standard'
        And l'utilisateur clique sur 'Passer à la caisse'
        #And l'utilisateur saisit ses identifiants  "Axel" dans la pop-up de connexion et il valide
        And l'utilisateur saisit ses informations de paiement et il clique sur 'Procéder au paiement'
        Then vérifier que l'utilisateur se trouve sur la page du paiement
        When l'utilisateur choisir le mode de paiement "Chèque / Mandat"
        Then verifier la presence Le numéro de commande




            #| Preset        | width | height |
            #| ipad-2        | 768   | 1024   |
            #| ipad-mini     | 768   | 1024   |
            #| iphone-3      | 320   | 480    |
            #| iphone-4      | 320   | 480    |
            #| iphone-5      | 320   | 568    |
            #| iphone-6      | 375   | 667    |
            #| iphone-6+     | 414   | 736    |
            #| iphone-7      | 375   | 667    |
            #| iphone-8      | 375   | 667    |
            #| iphone-x      | 375   | 812    |
            #| iphone-xr     | 414   | 896    |
            #| iphone-se2    | 375   | 667    |
            #| macbook-11    | 1366  | 768    |
            #| macbook-13    | 1280  | 800    |
            #| macbook-15    | 1440  | 900    |
            #| macbook-16    | 1536  | 960    |
            #| samsung-note9 | 414   | 846    |
            #| samsung-s10   | 360   | 760    |
