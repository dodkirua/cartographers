/*
* fonction qui retourne une lettre suivant par rapport à un chiffre retourne
* null si on envoie un nombre plus grand que 26 ou autre chose qu'un nombre
*/
function letterIncrement(y){

   if (!isNaN(y)){
       return null;
   }
    else{
        switch (y){
            case 1:
                return "a";
            case 2:
                return "b";
            case 3:
                return "c";
            case 4:
                return "d";
            case 5:
                return "e";
            case 6:
                return "f";
            case 7:
                return "g";
            case 8:
                return "h";
            case 9:
                return "i";
            case 10:
                return "j";
            case 11:
                return "k";
            case 12:
                return "l";
            case 13:
                return "m";
            case 14:
                return "n";
            case 15:
                return "o";
            case 16:
                return "p";
            case 17:
                return "q";
            case 18:
                return "r";
            case 19:
                return "s";
            case 20:
                return "t";
            case 21:
                return "u";
            case 22:
                return "v";
            case 23:
                return "w";
            case 24:
                return "x";
            case 25:
                return "y";
            case 26:
                return "z";
            default:
                return null;
        }
   }
}
/*
* function remplit la grille de jeu demande un tableau de 11 éléments
* contenant chacun 1 tableau de 11 éléments
*
* reste a faire le test sur la variable rentrer
*
*/

function fillGrid(gridData){
   if(gridData.length===11 && gridData[0].length===11) {
       let x;
       let y;
       let letter;
       for (x = 0; x < 11; x++) {
           for (y = 0; y < 11; y++) {
               letter = letterIncrement(x);
               document.getElementById(letter + y).innerHTML = gridData[x][y];
           }
       }
   }
   else {
       return null;
   }
}

/*
*
* fonction qui retourne la couleur le background en couleur
* premier parametre le contenu du tableau de donnée
*
*/

function gridColor (gridContent){

    switch (gridContent){
        case "mountain":
            return  "saddlebrown";
        case "city":
            return  "red";
        case "forest":
            return "darkgreen";
        case "fields":
            return "yellow";
        case "monster":
            return "darkorchid";
        case "lake":
            return  "blue";
        case "hole":
            return  "black";
        default:
            return  "none";
    }
}

