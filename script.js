var slider =  document.querySelectorAll(".slider")

var conut = 0;


slider.forEach((item,index) => {
        item.addEventListener("click",()=>{
            slider.forEach((elam,i)=>{
                elam.style.width = i === index ? "700px" : "150px"
            })       
        })

})



