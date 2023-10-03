const images= document.querySelectorAll('.imag');
images.forEach((image)=>{
    image.addEventListener('mouseenter',()=>{
        image.classList.add('imgZoom');
    })
    image.addEventListener('mouseleave',()=>{
        image.classList.remove('imgZoom');
    })
});