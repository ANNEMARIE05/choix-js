const form = document.querySelectorAll('.form-quiz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c']
const emojis = []
const titreResultat = document.querySelector('.resultat h2')
const noteResultat = document.querySelector('.note')
const aideResultat = document.querySelector('.aide')
const toutesLesQuestions = document.querySelectorAll('.question-block')
let verifTableau = []


form.addEventListener('submit', (e) => {
    e.preventDefault();
    for(i = 1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    tableauResultats = [];
})

function verifFunc(tabResultats) {
    for (let a = 0; a < 5; a++) {
       if(tabResultats[a] === reponses[a]){
        verifTableau.push(true)
       }else{
        verifTableau.push(false)
       } 
    }
    afficherResultats(verifTableau)
    verifTableau = [];
}

function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length
    switch(nbDeFautes){
        case 0:
            titreResultat.innerText = `Bravo c'est sans faute !`;
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
        break
        case 1:
            titreResultat.innerText = `Vous y êtes presque !`;
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText = '4/5';
        break
        case 2:
            titreResultat.innerText = `Encore un effort ...`;
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText = '3/5';
        break
        case 3:
            titreResultat.innerText = `Il reste quelques erreurs !`;
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText = '2/5';
        break
        case 4:
            titreResultat.innerText = `Peut mieux faire !`;
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText = '1/5';
        break
        case 5:
            titreResultat.innerText = `Peut mieux faire !`;
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText = '0/5';
        break
        default:
            'Wops, cas innatendu.'
        break
    }
}
