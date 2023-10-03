const questions = [
    "Quel est l’autre nom de l’Homme-Mystère ?",
    "Quelle est l’ancienne profession de Harley Quinn ?",
    "Quel est l’objet fétiche de Double Face ?",
    "Quelle ville Batman défend-il ?",
    "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
    "Quel est le prénom des parents du jeune Bruce Wayne ?",
    "Dans son premier Batman (1989) Jack Nicholson jouait :",
    "Qui interprète le Joker en 2008 ?",
    "En quelle année Robin fait il sa première apparition ?",
    "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
    "Qui est Jonathan Crane ?",
    "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
    "Batman c’est aussi le nom d’une ville en...",
    "Qui a realisé Batman en 1964 ?",
    "Quel vilain apparaît pour la première fois dans le Batman 232 ?"
];    
const options = [
    ["Le Saphinx","Le Saphir","Le Joker"],
    ["Infimière","Psychiatre","Dentiste"],
    ["Une pièce","Un livre","Un couteau"],
    ["Gotham City","Starling City","Tananarive"],
    ["Georges Clooney","Val Kilmer","Mickael Keaton"],
    ["Matina et Adam","Elaine et Georges","Martha et James"],
    ["Le Pingouin","L'Homme mystère","Le Geek"],
    ["Heath Legder","Haeth Ledger","Heath Ledger"],
    ["1940","1936","1941"],
    ["Oracle Huntress","Black Canary","L'Epouvantail"],
    ["L’Épouvantail","Le Joker","Hugo Strange"],
    ["Emma Watson","Gigi Hadid","Lola Iolani Momoa","Zoë Kravitz"],
    ["Islande","Turquie","Allemagne"],
    ["Stanley Kubrick","Andy Warhol","Leslie Martinson"],
    ["Le Pingouin","Ra’s al Ghul","Poison Ivy"]
];    
const answers = [
    "Le Saphinx",
    "Psychiatre",
    "Une pièce",
    "Gotham City",
    "Mickael Keaton",
    "Elaine et Georges",
    "L'Homme mystère",
    "Heath Ledger",
    "1940",
    "Oracle Huntress",
    "L’Épouvantail",
    "Zoë Kravitz",
    "Turquie",
    "Leslie Martinson",
    "Ra’s al Ghul"
];    
const Imgs = [
    "/Assets/Illustrations/Batgame_3.png",
    "/Assets/Illustrations/Batgame_4.png",
    "/Assets/Illustrations/Batgame_5.png",
    "/Assets/Illustrations/Batgame_10.png",
    "/Assets/Illustrations/Batgame_11.png",
    "/Assets/Illustrations/Batgame_18.png",
    "/Assets/Illustrations/Batgame_12.png",
    "/Assets/Illustrations/Batgame_19.png",
    "/Assets/Illustrations/Batgame_20.png",
    "/Assets/Illustrations/Batgame_21.png",
    "/Assets/Illustrations/Batgame_14.png",
    "/Assets/Illustrations/Batgame_17.png",
    "/Assets/Illustrations/Batgame_7.png",
    "/Assets/Illustrations/Batgame_6.png",
    "/Assets/Illustrations/Batgame_8.png"
];    
let index =0;
let score= 0;
let QuestBegin= 1;
const Images = document.getElementById('Image');
const demarrer= document.querySelector('.begin');
const gamepart=document.getElementById('game');
const first=document.getElementById('butonBegin');
gamepart.style.display='none';
const allHeader=document.querySelector('header');
const allBody=document.querySelector('main div.container');
const contentResult=document.getElementById('Result');
const contentResultFin=document.getElementById('resulcont');
contentResult.style.display='none';
// --------------------------- Initialisation du game ---------------------------------------

demarrer.addEventListener('click',()=>{
    first.style.display='none';
    gamepart.style.display='flex';

    DisplayQuestion();
})    

// ---------------------------------------- AFFICHAGE DU JEU ------------------------------------------------
function DisplayQuestion(){
    // ------- declaration de tout les variables local  -----------------

    const questionValue = document.getElementById('QuestionValue');
    const OptValue=document.getElementById('AnswerValue');

    const report=document.getElementById('NavQuestion');
    report.innerHTML="<h2>"+`${QuestBegin}/15`+"</h2>";

    Images.src=Imgs[index];

    questionValue.textContent = questions[index];
    OptValue.innerHTML='';
    options[index].forEach((option)=>{
        const content=document.createElement('div');
            content.className ="contentbox";
        const check=document.createElement('input');    
            check.type="checkbox";
            check.value=option;
            check.required='true';
        content.appendChild(check);    
        const label=document.createElement('Label');
        label.appendChild(check);
        label.appendChild(document.createTextNode(option));
        content.append(label);
        OptValue.appendChild(content);
    })        
    }
    // ----------------- fonction pour evaluer les reponse des joueurs -------------------
function checkValue(){
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    checkboxes.forEach((checkbox) => {
        const selectedOption = checkbox.value;
        const correctAnswer = answers[index];

        if(selectedOption === correctAnswer){
            score += 1;
        };        
    });        
    console.log("Score : " + score);
    index++;
    QuestBegin++;
    if(index<questions.length){
        DisplayQuestion();
    }    
    else{
        displayResult();
    }    
}    
// -----------------------Function pour changement generale--------------------------------
function changeImage(){
    Images.src=Imgs[index];
}    
function NextFunctions(){
    checkValue();
    changeImage();
}    

function displayResult(){
    contentResult.style.display='flex';
    allHeader.classList.add('hidden');
    allBody.classList.add('hidden');
    const finalResult=document.getElementById('finalScore');
    const remerciement=document.getElementById('finalP');
    const btnFin = document.createElement("button");
    btnFin.id = "mybutton";
    btnFin.textContent = "recommencer le quiz";
    const reAgain = document.createElement("a");
    reAgain.id="finbtn";
    if(score<5){
        finalResult.textContent=`${score}/${questions.length}`+" C'est pas tout a fait ça...";
        remerciement.textContent="Oula ! heureusement que le Riddler est sous les verous... il faut que vous vous repassiez les films, cette fois en enlevant peut-etre le masque qui vous a bloqué la vue ! Aller, rien n'est perdu ! ";
    }
    if(score>=5 && score<=10){
        finalResult.textContent=`${score}/${questions.length}`+" Pas mal!";
        remerciement.textContent= "Encore un peu d'entrainement avec le Chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tete haute vos connaissances sont là, A vous de les consolider, foncez Gotham est votre terrain de chasse ! ";
    }
    if(score>10 && score<=questions.length){
        finalResult.textContent=`${score}/${questions.length}`+" Bravo!";
        remerciement.textContent="Vous etes véritablement un super fan de l'univers de Batman ! Comics, films, rien ne vous échapper. Bruce Wayne a de quoi etre fier, Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux gains ! ";
    } 
    reAgain.appendChild(btnFin);
    contentResultFin.appendChild(reAgain);
    reAgain.addEventListener('click',()=>{
        reAgain.href="index2.html"
    });
}    
const eval=document.getElementById('Next');
eval.addEventListener('click',NextFunctions);

