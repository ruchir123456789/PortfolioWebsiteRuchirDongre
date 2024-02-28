var cursor = document.querySelector("#cursor")

//here e is the events that occure on mouse move
var main = document.querySelector(".main").addEventListener("mousemove",(e)=>{
    cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
    // cursor.style.transform = `translateY()`
    // cursor.style.left=e.clientX +"px";
    // cursor.style.top=e.clientY +"px";

})
// transform: translateX();
// var arr = ["overlay1", "overlay2", "overlay3"]
var arr1 = ["overlay1"]
var arr2= ["overlay2"]
var arr3 = ["overlay3"]
var overlay = document.querySelector(".overlay").style.backgroundColor ="red";
function myfuction(dets){
    var overlay1 = document.querySelector("#overlay1")
    console.log(dets)
    // .addEventListener("mousemove",(e)=>{
    //     document.querySelector("#elem1 img").style.scale = 1;
    //     document.querySelector("#elem1 img").style.transform=`translate(${e.clientX - 300}px, ${e.clientY - 400}px)`
    //     document.querySelector("#elem1 img").style.opacity = 1;
    //     document.querySelector("#cursor").style.opacity = 0;
    
    
    // })
  
        document.querySelector("#elem1 img").style.scale = 1;
        document.querySelector("#elem1 img").style.transform=`translate(${e.clientX - 300}px, ${e.clientY - 400}px)`
        document.querySelector("#elem1 img").style.opacity = 1;
        document.querySelector("#cursor").style.opacity = 0;
    

    
    // document.querySelector("#overlay1").addEventListener("mouseleave",(e)=>{
    //     document.querySelector("#elem1 img").style.scale = 0;
    
    // })
    document.querySelector(`${dets}`).addEventListener("mouseleave",(e)=>{
        document.querySelector("#elem1 img").style.scale = 0;
        document.querySelector("#cursor").style.opacity = 1;
    
    
    })
    
    }

    // document.querySelector(`${dets}`).addEventListener("mousemove",
   
    // arr1.forEach(myfuction(dets)))

    // (e)=>{}function
      
    overlay.forEach(function(dets){
        dets.addEventListener('mousemove',()=>{
            console.log(dets)

            document.querySelector("#elem1 img").style.scale = 1;
            document.querySelector("#elem1 img").style.transform=`translate(${e.clientX - 300}px, ${e.clientY - 400}px)`
            document.querySelector("#elem1 img").style.opacity = 1;
            document.querySelector("#cursor").style.opacity = 0;
        
        })
    })