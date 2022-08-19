//navigation menu

(() => {
    
    console.log("bishop is a good boy");
    const section = document.querySelectorAll(".section");
    section.forEach((section) => {
        if(!section.classList.contains("show")){
            section.classList.add("hide")
        }
    })
})();

document.addEventListener("click", (event) => {
    if(event.target.classList.contains('link-item')){
        if(event.target.hash !== ""){
            event.preventDefault();
            const hash = event.target.hash;

            document.querySelector(".section.show").classList.add("hide");
            document.querySelector(".section.show").classList.remove("show");

            document.querySelector(hash).classList.add("show");
            document.querySelector(hash).classList.remove("hide");
        }
    }
})
//add hash to url
window.location.hash = hash;

window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    },600)
})








// const hamburger = document.querySelector(".hamburger-btn");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", ()=> {
//     // hamburger.classList.toggle("show")

// })


// // //  about js
// //  (() => {
// //     const aboutSection = document.querySelector(".about-section");
// //      tabsContainer = document.querySelector(".about-tabs");

// //     tabsContainer.addEventListener("click",(event) => {
// //         if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
// //             const target = event.target.getAttribute("data-target");
// //             tabsContainer.querySelector(".active").classList.remove("active")
// //             event.target.classList.add("active")
            
            
//             // function show(){
//             //     document.getElementById("tab-content").removeAttribute("display","none")
//             //     document.getElementById("tab-content").style.display = "block";
//             // }

//             // aboutSection.querySelector(".tab-content.active").classList.removeAttribute("display","none");
//             // aboutSection.querySelector(target).classList.add("active");
//         }
//     })
//  })();
 //about finished not successful

 //portfolio popup
//  document.addEventListener("click",(e) => {
//     if(e.target.classList.contains("view-project-btn")){
//         togglePortfolioPopup();
//     }
//  })

//  function togglePortfolioPopup(){
//     document.querySelector(".portfolio-popup").classList.toggle("open")
//     // document.body.classList.toggle("hide-scrolling");
//     console.log("bishop")
//  }
//  document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);



//  //trial
// let bishop = document.getElementsByClassName("portfolio-popup");
// bishop.s
// function showpopup(){
//     // portfoliopopup.setAttribute("style","visibility: visible;");
//     console.log("open")
// }
// function hidepopup(){
//     console.log("close");
// }



//this one must work
