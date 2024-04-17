const star = document.querySelectorAll(".star")



star.forEach(sta =>{
    sta.addEventListener('click',()=>{
        const color =parseInt(sta.getAttribute("data-value"));
        activeStar(color);

    });
});



function activeStar(color){
    star.forEach((star, index) =>{
        if(index <color){
            star.classList.add('active');

        }else{
            star.classList.remove('active');
        }
    });


}



