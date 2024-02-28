var cursor = document.querySelector("#cursor");
var main = document.querySelector("body");

// main.addEventListener("mousemove",(dets)=>{
//     document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
//     // document.querySelector("#cursor").style.left = dets.x + "px";
//     // document.querySelector("#cursor").style.top = dets.y + "px";
//     console.log(dets.clientY)

// })

window.addEventListener("mousemove",function(dets){
    document.querySelector("#cursor").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
    // this.document.querySelector(".circle").style.style.opacity=1;
})

var overlay1 = document.querySelector("#overlay1").addEventListener("mousemove",(dets)=>{
    // console.log("hi")
    // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
   
    document.querySelector("#elem1>img").style.scale = 1;
   
    document.querySelector("#elem1>img").style.transform= `translate(${dets.clientX - 500}px,${dets.clientY-340}px)`;

    document.querySelector("#elem1>img").style.backgroundColor = "red";

    document.querySelector("#elem1>img").style.opacity = 1;

    document.querySelector("#cursor").style.opacity = 0;

})

document.querySelector("#overlay1").addEventListener("mouseleave",(dets)=>{
    // console.log("hi")
    //  var overlay1 = document.querySelector("#overlay1")
    // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
   
    document.querySelector("#elem1>img").style.scale = 0;
   
    document.querySelector("#elem1>img").style.transform= `translate(${dets.clientX - 290}px,${dets.clientY-410}px)`;

    // document.querySelector("#elem1>img").style.backgroundColor = "red";

    document.querySelector("#elem1>img").style.opacity = 0;

    document.querySelector("#cursor").style.opacity = 1;

})

var overlay2 = document.querySelector("#overlay2").addEventListener("mousemove",(dets)=>{
    // console.log("hi")
    // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
   
    document.querySelector("#elem2>img").style.scale = 1;
   
    document.querySelector("#elem2>img").style.transform= `translate(${dets.clientX - 500}px,${dets.clientY-340}px)`;

    document.querySelector("#elem2>img").style.backgroundColor = "red";

    document.querySelector("#elem2>img").style.opacity = 1;

    document.querySelector("#cursor").style.opacity = 0;

})

document.querySelector("#overlay2").addEventListener("mouseleave",(dets)=>{
    // console.log("hi")
    //  var overlay1 = document.querySelector("#overlay1")
    // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
   
    document.querySelector("#elem2>img").style.scale = 0;
   
    document.querySelector("#elem2>img").style.transform= `translate(${dets.clientX - 290}px,${dets.clientY-410}px)`;

    // document.querySelector("#elem1>img").style.backgroundColor = "red";

    document.querySelector("#elem2>img").style.opacity = 0;

    document.querySelector("#cursor").style.opacity = 1;

})

var overlay3 = document.querySelector("#overlay3").addEventListener("mousemove",(dets)=>{
    // console.log("hi")
    // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
   
    document.querySelector("#elem3>img").style.scale = 1;
   
    document.querySelector("#elem3>img").style.transform= `translate(${dets.clientX - 500}px,${dets.clientY-340}px)`;

    document.querySelector("#elem3>img").style.backgroundColor = "red";

    document.querySelector("#elem3>img").style.opacity = 1;

    document.querySelector("#cursor").style.opacity = 0;
})

document.querySelector("#overlay3").addEventListener("mouseleave",(dets)=>{
    // console.log("hi")
    //  var overlay1 = document.querySelector("#overlay1")
    // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
   
    document.querySelector("#elem3>img").style.scale = 0;
   
    document.querySelector("#elem3>img").style.transform= `translate(${dets.clientX - 290}px,${dets.clientY-410}px)`;

    // document.querySelector("#elem1>img").style.backgroundColor = "red";

    document.querySelector("#elem3>img").style.opacity = 0;

    document.querySelector("#cursor").style.opacity = 1;

})


document.querySelector("#txt1").addEventListener("mousemove",(dets)=>{
    // console.log("hi")
    // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
   
    // document.querySelector("#txt1>span>img").style.scale = 1;

    document.querySelector("#txt1>span>img").style.scale = 1;

   
    document.querySelector("#txt1>span>img").style.transform= `translate(${dets.clientX - 220}px,${dets.clientY-350}px)`;

    document.querySelector("#txt1>span>img").style.backgroundColor = "red";

    document.querySelector("#txt1>span>img").style.opacity = 1;

    document.querySelector("#cursor").style.opacity = 0;})


 document.querySelector("#txt1").addEventListener("mouseleave",(dets)=>{
        // console.log("hi")
        //  var overlay1 = document.querySelector("#overlay1")
        // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
       
        document.querySelector("#txt1>span>img").style.scale = 0;
       
        document.querySelector("#txt1>span>img").style.transform= `translate(${dets.clientX - 290}px,${dets.clientY-410}px)`;
    
        // document.querySelector("#txt1>span>img").style.backgroundColor = "red";
    
        document.querySelector("#txt1>span>img").style.opacity = 0;
    
        document.querySelector("#cursor").style.opacity = 1;
    
    })
    
    document.querySelector("#txt2").addEventListener("mousemove",(dets)=>{
        // console.log("hi")
        // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
       
        // document.querySelector("#txt2>span>img").style.scale = 1;
    
        document.querySelector("#txt2>span>img").style.scale = 1;
    
       
        document.querySelector("#txt2>span>img").style.transform= `translate(${dets.clientX- 220 }px,${dets.clientY-350}px)`;
    
        document.querySelector("#txt2>span>img").style.backgroundColor = "red";
    
        document.querySelector("#txt2>span>img").style.opacity = 1;
    
        document.querySelector("#cursor").style.opacity = 0;})
    
    
     document.querySelector("#txt2").addEventListener("mouseleave",(dets)=>{
            // console.log("hi")
            //  var overlay1 = document.querySelector("#overlay1")
            // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
           
            document.querySelector("#txt2>span>img").style.scale = 0;
           
            document.querySelector("#txt2>span>img").style.transform= `translate(${dets.clientX - 290}px,${dets.clientY-410}px)`;
        
            // document.querySelector("#txt2>span>img").style.backgroundColor = "red";
        
            document.querySelector("#txt2>span>img").style.opacity = 0;
        
            document.querySelector("#cursor").style.opacity = 1;
        
        })

        document.querySelector("#txt3").addEventListener("mousemove",(dets)=>{
            // console.log("hi")
            // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
           
            // document.querySelector("#txt3>span>img").style.scale = 1;
        
            document.querySelector("#txt3>span>img").style.scale = 1;
        
           
            document.querySelector("#txt3>span>img").style.transform= `translate(${dets.clientX- 220  }px,${dets.clientY-400}px)`;
        
            document.querySelector("#txt3>span>img").style.backgroundColor = "red";
        
            document.querySelector("#txt3>span>img").style.opacity = 1;
        
            document.querySelector("#cursor").style.opacity = 0;})
        
        
         document.querySelector("#txt3").addEventListener("mouseleave",(dets)=>{
                // console.log("hi")
                //  var overlay1 = document.querySelector("#overlay1")
                // document.querySelector("#elem1 img").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`;
               
                document.querySelector("#txt3>span>img").style.scale = 0;
               
                document.querySelector("#txt3>span>img").style.transform= `translate(${dets.clientX - 290}px,${dets.clientY-410}px)`;
            
                // document.querySelector("#txt3>span>img").style.backgroundColor = "red";
            
                document.querySelector("#txt3>span>img").style.opacity = 0;
            
                document.querySelector("#cursor").style.opacity = 1;
            
            })



            // ----------------------------------------------next ---------------


            VanillaTilt.init(document.querySelector(".circle"),{
                max:20,
                speed:600,
                scale:1.1,
                transition:true,
                easing:"cubic-bezier(.03,.98,.52,.999)"
            });