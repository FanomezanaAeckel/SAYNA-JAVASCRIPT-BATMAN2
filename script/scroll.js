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
