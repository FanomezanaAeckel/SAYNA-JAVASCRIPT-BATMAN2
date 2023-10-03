// -------------------------------------  Animation scroll vers haut et bas ------------------------------------------------
const toTop= document.getElementById('Top');
const toBottom=document.getElementById('Bottom');
toTop.addEventListener('click',()=>{
    window.scrollTo({
            top:0 ,behavior:'smooth'
        }  
        )
});
toBottom.addEventListener('click',()=>{
    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:'smooth'
    })
});

//animation curseur souris 

const canvas = document.getElementById('canvas');
console.log(canvas); 

const c = canvas.getContext('2d');
const img = new Image();
const clones = [];

img.src = './assets/Logos/logohome.png';

const bat = {
    positions: [],
    draw() {
        c.drawImage(img, 0, 0, 50, 20);
    }
}
//  -------------------------- deplacement selon le navigateur -----------------------------
window.addEventListener("mousemove", deplacement);

function deplacement(event) {
    canvas.style.top = event.clientY + window.scrollY + 10 + "px";
    canvas.style.left = event.clientX + window.scrollX + 10 + "px";
}

//------------------------------------ Montrer l'image ---------------------------------------------------------
img.onload = function () {
    console.log('Image chargée avec succès'); 
    bat.draw(); 
};
