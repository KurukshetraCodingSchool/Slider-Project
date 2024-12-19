var slider =  document.querySelectorAll(".slider")

var conut = 0;


slider.forEach((item) => {
    if(conut===0){
        item.addEventListener("click",()=>{
            item.style.width = "500px"
            conut++;
            console.log(conut)
        })
    }
    
    
})