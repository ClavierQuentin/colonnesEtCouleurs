const margeB = 50 ;
const margeW = 200 ;
const margeG = 50 ;
const margeD = 20 ;

WhichColor(ColorRandom());

function ColorRandom() {
    let tableau = []; // création d'une variable type tableau
    tableau.push(Math.floor(Math.random() * 255)); //Ajout d'un nombre aléatoire compris entre 0 et 254 dans le tableau
    tableau.push(Math.floor(Math.random() * 255)); //Ajout d'un nombre aléatoire compris entre 0 et 254 dans le tableau
    tableau.push(Math.floor(Math.random() * 255)); //Ajout d'un nombre aléatoire compris entre 0 et 254 dans le tableau
    //document.body.style.backgroundColor = "rgb("+tableau.join(",")+")";
    return "rgb("+tableau.join(",")+")"; //on retourne une chaîne de caractères sous la forme : "rgb(" + les valeurs du tableau + ")"
}

function IsItBlue(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
        if (tableau[2] > tableau[0] && tableau[2] > tableau[1]){ // Test: si la valeur du bleu est supérieure au rouge ET aussi supérieure au vert... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //Si la valeur du bleu n'est pas supérieure au rouge ET au vert, on retourne la valeur booléenne false
        }
    }

function IsItGreen(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
        if (tableau[1] > tableau[0] && tableau[1] > tableau[2]){ // Test: si la valeur du vert est supérieure au rouge ET aussi supérieure au bleu... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //Si la valeur du vert n'est pas supérieure au rouge ET au bleu, on retourne la valeur booléenne false
        }
    }


function IsItRed(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]);  // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
        if (tableau[0] > tableau[2] && tableau[0] > tableau[1]){ // Test: si la valeur du rouge est supérieure au bleu ET aussi supérieure au vert... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //Si la valeur du rouge n'est pas supérieure au bleu ET au vert, on retourne la valeur booléenne false
        }
    }

function IsItBlack(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
    //let marge = 50; // Définition du seuil sous lequel les couleurs seront considérées noires
        if (tableau[0] < margeB && tableau[1] < margeB && tableau[2] < margeB){ //Test: si TOUTES les valeurs du tableau sont inférieures à la marge, la couleur est considérée comme noire
            return true; // On retourne la valeur booléenne true 
        } else{
            return false; //Si au moins une des valeurs est supérieure à la marge, alors la couleur n'est pas considérée comme noire et on retourne la valeur booléenne false
        }
    }

function IsItWhite(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
    //let marge = 200; // Définition du seuil au-dessus duquel les couleurs seront considérées blanches
        if (tableau[0] > margeW && tableau[1] > margeW && tableau[2] > margeW){ //Test: si TOUTES les valeurs du tableau sont supérieures à la marge, la couleur est considérée comme blanche
            return true;  // On retourne la valeur booléenne true 
        } else{
            return false; //Si au moins une des valeurs est inférieure à la marge, alors la couleur n'est pas considérée comme blanche et on retourne la valeur booléenne false
        }
    }

function IsItGrey(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
    let moitie = 127; // définition du seuil moyen de gris
    //let marge = 50; // définition de la marge maximum d'écart avec le seuil
        if (Math.abs(tableau[0]-moitie) < margeG && Math.abs(tableau[1]-moitie) < margeG && Math.abs(tableau[2]-moitie) < margeG){ // Test: si les valeurs du tableau sont TOUTES comprises à l'intérieur de l'intervalle défini précédemment, la couleur est considérée comme grise
            return true; // On retourne la valeur booléenne true 
        } else{
            return false; //si au moins une valeur du tableau n'est pas comprise à l'intérieur de l'intervalle défini précédemment, la couleur n'est pas considérée comme grise et on retourne la valeur booléenne false
        }
    
}

function IsItYellow(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
        for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
            tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
        }
        //let margeD=20;
        if (Math.abs( tableau[0] - tableau[1] ) < margeD && tableau[2] < Math.min(tableau[0],tableau[1])){ // Test: si l'écart entre les valeurs du rouge et vert est inférieur à la marge ET que la valeur du bleu est inférieur aux autres alors ... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //si l'écart entre les valeurs du rouge et vert n'est pas inférieur à la marge, on retourne la valeur booléenne false
        }
    }

function IsItMagenta(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
        for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
            tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
        }
        //let marge=20;
        if (Math.abs( tableau[0] - tableau[2] ) < margeD && tableau[1] < Math.min(tableau[0],tableau[2])){ // Test: si l'écart entre les valeurs du rouge et bleu est inférieur à la marge ET que la valeur du vert est inférieur aux autres alors ... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //si l'écart entre les valeurs du rouge et bleu n'est pas inférieur à la marge, on retourne la valeur booléenne false
        }
    }

function IsItCyan(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
        for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
            tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
        }
        //let marge=20;
        if (Math.abs( tableau[1] - tableau[2] ) < margeD && tableau[0] < Math.min(tableau[2],tableau[1])){ // Test: si l'écart entre les valeurs du vert et bleu est inférieur à la marge  ET que la valeur du rouge est inférieur aux autres alors ... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //si l'écart entre les valeurs du vert et bleu n'est pas inférieur à la marge, on retourne la valeur booléenne false
        }
    }
function WhichColor(rgb){       // On vérifie la couleur en argument en faisant appel à chaque fonction puis on retourne le nom de la couleur 
   // console.log(rgb);
    if(IsItBlack(rgb)){             
        console.log('Black')
        return "Black";
    }else if(IsItWhite(rgb)){
        console.log('White')
        return "White";
    }else if(IsItGrey(rgb)){
        console.log("Grey")
        return "Grey";
    }else if(IsItYellow(rgb)){
        console.log('Yellow')
       return "Yellow";
    }else if(IsItMagenta(rgb)){
        console.log('Magenta')
        return "Magenta";
    }else if(IsItCyan(rgb)){
        console.log('Cyan')
        return "Cyan";
    }else if(IsItRed(rgb)){
        console.log('Red')
        return "Red";
    }else if(IsItGreen(rgb)){
        console.log('Green')
        return "Green";
    }else if(IsItBlue(rgb)){
        console.log('Blue')
        return "Blue";
    }
}


let monContainer = document.getElementById('container'); //On récupère le conteneur html existant
function generateRow(){
    let x = document.getElementById('nombreDeLigne').value
    //On boucle x fois pour créer x lignes
    for(let i = 0; i <= x; i++){ 
        //on crée un élément HTML
        let maRow = document.createElement('div');
        //On rajoute 2 classes à l'élément pour créer une Row
        maRow.classList.add('row', 'hauteurFixe');
        //On y rajoute une bordure 
        maRow.style.border = "1px solid " + ColorRandom();
        // On rajoute l'élément Row au DOM
        monContainer.appendChild(maRow)
        //J'appelle un compteur  
        let compteur = 1
        let derniereCouleur = ColorRandom();
        //On boucle 12 fois pour créer 12 colonnes
        for(let z = 0; z < 12; z++){ 
            //Création de l'élément HTML
            let maCol = document.createElement('div'); 
            maCol.classList.add('col');
            let couleurDeColonne = ColorRandom();
            while(WhichColor(couleurDeColonne) == WhichColor(derniereCouleur)){
                couleurDeColonne = ColorRandom();
            }
            derniereCouleur = couleurDeColonne; 
            maCol.style.backgroundColor = couleurDeColonne;
            //On rajoute l'élément aux row
            maRow.appendChild(maCol);
            //A partir de la 6eme colonne
            if(z > 5){
                // On crée un nouvel élément html row pour chaque colonne à partir de la 6eme
                let nouvelleRow = document.createElement('div');
                nouvelleRow.classList.add('row','hauteurVariable');
                nouvelleRow.style.backgroundColor = ColorRandom()
                //On rajoute chaque nouvel élément à toutes les colonnes
                maCol.appendChild(nouvelleRow);
                //Tant que nous ne sommes pas sur la dernière colonne
                if(z < 11){
                    //Je boucle le nombre de fois du compteur
                    for(let d = 0; d <= compteur; d++ ){
                        //On crée un nouvel élément html col pour la nouvelle row à chaque boucle
                        let maPetiteCol = document.createElement('div');
                        maPetiteCol.classList.add('col');
                        maPetiteCol.style.backgroundColor = ColorRandom();
                        nouvelleRow.appendChild(maPetiteCol);
                        maPetiteCol.addEventListener('mouseover', () =>{
                            maPetiteCol.style.backgroundColor = ColorRandom()
                        })
                        monContainer.addEventListener('dblclick', () =>{
                            maPetiteCol.style.backgroundColor = ColorRandom()
                        })
                    }
                }
                //J'incrémente mon compteur à chaque sortie de la boucle
                compteur = compteur +1;
                //Si on arrive à la dernière colonne
                if(z === 11) {
                    //On boucle 12 fois pour faire 12 colonnes dedans
                    for(let k = 0; k < 12; k++){
                        let maPetiteCol = document.createElement('div');
                        maPetiteCol.classList.add('col');
                        maPetiteCol.style.backgroundColor = ColorRandom();
                        nouvelleRow.appendChild(maPetiteCol);
                        maPetiteCol.addEventListener('mouseover', () =>{
                            maPetiteCol.style.backgroundColor = ColorRandom()
                        })
                        monContainer.addEventListener('dblclick', () =>{
                            maPetiteCol.style.backgroundColor = ColorRandom()
                        })
                    }
                }
            } else{
                maCol.textContent = WhichColor(couleurDeColonne)
                //Pour les 6 premières colonnes, on crée un eventlistenner au survol
                maCol.addEventListener('mouseover', () =>{
                    maCol.style.backgroundColor = ColorRandom()
                    maCol.textContent = WhichColor(maCol.style.backgroundColor)
                })
                monContainer.addEventListener('dblclick', () =>{
                    maCol.style.backgroundColor = ColorRandom()
                    maCol.textContent = WhichColor(maCol.style.backgroundColor)
                })                    
            }
        }
    }
    
}


//generateRow(40);

/*monContainer.addEventListener('mouseover',(event) => {
    event.target.style.backgroundColor = ColorRandom();
})*/

/*let divs = document.querySelectorAll('div')
let mesColonnes = document.getElementsByClassName('col');
mesColonnes.addEventListener('dblclick', () => {
    mesColonnes.forEach(element => {
        element.style.backgroundColor = ColorRandom();
        //element.textContent = WhichColor(style.backgroundColor);
    });
 })*/
