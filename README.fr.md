## Biche, ô ma biche

La biche est innaccessible cachée derrière tous ces arbustes. Héraclès reste à l'affut, attendant qu'elle sorte de là. Pour cela, il faudrait déjà que l'animal puisse bouger !

La biche va être un monstre avec un comportement un peu particulier, notamment car elle va pouvoir bouger, ce qui n'est pas le cas des autre monstres.

> Remarque SOLID : Tu pourrais implémenter un comportement spécifique aux biches directement dans `Monster`. Cependant, notre héros à encore pas mal de bêtes à combattre et donc autant de spécificités, ce qui rendrait au final la classe `Monster` très chargée et certainement pleine de conditions spécifiques à tel ou tel sous-type de monstres.

> Une autre solution est de ne pas toucher directement à `Monster`, et de créer une classe `Hind` (pour Biche), heritant de `Monster`, qui contiendra le code spécifique aux biches. À chaque nouveau type de monstre ayant une spécificité propre, tu ajoutes une nouvelle classe. Et il reste toujours possible d'instancier un monstre "de base" si tu le souhaites. C'est cela, le "Open/Close Principle" de SOLID. Les classes, une fois définies, devraient rester "fermées" à toute modification (qui ne concernerait pas tous les objets de cette classe). S'il t'arrive de rencontrer un tel cas, la classe doit cependant être ouverte à une extension, tu dois pouvoir créer une classe fille facilement.

Dans ta nouvelle classe `Hind`, ajoute une propriété `image` avec pour valeur *hind.svg*.
Pense à importer ta nouvelle classe dans le *index.html* (Attention à l'ordre des imports)

Dans le fichier *index.js*, modifie l'instanciation d'un `Monster` par un `Hind`.

1. À chaque fois que le héros a fini de bouger, les monstres ayant la capacité de bouger vont le faire, en utilisant eux même la méthode `move()` qui contient déjà toute la logique de déplacement (directions, contrôle des cases...). On doit donc modifier notre `move()` methods pour qu'elle puisse réagir à différents *moveable* `Fighters`. Ajoute donc un paramètre `fighter` en deuxième (Le `Fighter` a bougé) à la méthode et corrige le code en conséquence.

2. Le *gameplay* va être le suivant : le héros bouge puis, si son mouvement s'est bien effectué, tous les monstres qui en ont la capacité bougent à leur tour. Pour différencier les `Fighters` qui peuvent bouger, ajoute une propriété `moveable` à Fighters à `false` par défaut. Passe la à `true` dans `Hero` et `Hind` class.

3. Héros et monstres vont utiliser la même méthode `move()` pour gérer leur mouvement, afin de bénéficier des vérifications propres à tous les `moveable`. Pour gérer cela, on se sert de la methode `globalMove(direction, hero)`, celle-ci déjà est prise en compte.

> Hint : Dans la méthode `globalMove(direction, hero)`, notre héros se déplace déjà grace à `move()`. PEnse à lui transmettre la paramètre `hero` pour mettre à jour ton code avec tes développements précédents

5. Puis toujours dans `globalMove()` boucle sur les monstres implémentant `moveable` à `true`.
- Génère une direction en créant une nouvelle méthode dans monsters `getDirection()` qui retournera `N/S/W/E` aléatoirement.
- Puis bouge le monstre dans cette direction en réutilisant la méthode `move()`.
- Pour pouvoir bouger, il faut modifier notre methode `CheckNoMonster()` pour ne pas la prendre en compte si le monstre de la case est celui qui se déplace... Attention les méninges

6. Tu peux réinitiliaser la partie, tu devrais voir la biche bouger après chaque mouvement d'Héraclès.

> Si tu souhaites tester, tu peux également ajouter une seconde Hind et un Monster, les biches devraient bouger et pas le monstre car il n'implémente pas `moveable` ! Reviens ensuite à une seule biche sur la carte.

## Cache cache

Dernier point, notre biche bouge mais est bloquée derrière les buissons. Modifions cela. Si Héraclès ne sait comment traverser les épineux buissons de la forêt, cela n'est pas un problème pour la biche. Nous allons donc faire en sorte que la tuile Bush soit non traversable, **sauf** pour une biche !

1. Pour cela, crée la méthode `isCrossable()` dans Tile qui renvoie la valeur de `crossable` par defaut. Elle prends en paramètre une instance de `Monster`. Dans `Arena`, lorsque tu utilises `isCrossable()`, passe en paramètre ce qui est en train d'essayer de bouger sur cette tuile.

2. Dans `Bush` maitenant, redéfinis `isCrossable()` afin que la fonction renvoie *true* si et seulement si `moveable` est une instance de `Hind`. Utilise pour cela la methode `js` *instanceOf*. Dans les autres cas, renvoie la valeur de la propriété `crossable` (qui doit être *false*). En d'autres termes, la tuile n'est pas traversable sauf si c'est une biche qui essaie !

3. Dans *Arena.js*, corrige l'appel à la vérification `crossable` par ta nouvelle méthode `isCrossable(fighter)`.

Effectue plusieurs mouvements, tu vas voir que la biche devrait finir par traverser les buissons, c'est le moment tant attendu, attrape la !

> Nous ne chercherons pas à implémenter le fait qu'Héraclès capture effectivement la Biche car cela demanderait pas mal d'efforts supplémentaires, mais comme toujours, si tu souhaites essayer, n'hésite pas !
