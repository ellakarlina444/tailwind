console.log("index.js")
import "./style.css"

// if(document.getElementById('menu-loopstudio')!==undefined || document.getElementById('menu-loopstudio')){
//     const btn=document.getElementById('menu-loopstudio');
//     const menu=document.getElementById('menu');
//     btn.addEventListener('click',navToggle);
    
//     function navToggle(){
//         btn.classList.toggle('open');
//         menu.classList.toggle('flex');
//         menu.classList.toggle('hidden');
//     }

// }

var lastScroll = 0;
var isScrolled = false;
window.addEventListener("scroll", function () {
    var topHeader = document.querySelectorAll(".topmenu");
    var currentScroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
    var scrollDirection = currentScroll < lastScroll;
    var shouldToggle = isScrolled && scrollDirection;
    isScrolled = currentScroll > 100;
    console.log(currentScroll,lastScroll,isScrolled);
    console.log(topHeader);
    for (const iterator of topHeader) {
        iterator.classList.toggle("active", shouldToggle);
    }
    
    if(isScrolled){
        if(document.getElementById("ella")){
            // document.getElementById("ella").classList.toggle("stylesticky",shouldToggle)
            document.getElementById("ella").classList.remove("stickydeff")
            document.getElementById("ella").classList.add("stylesticky")
            // document.getElementById("ella").setAttribute("class","stylesticky")

        }
    }else{
        if(document.getElementById("ella")){
            document.getElementById("ella").classList.remove("stylesticky")
            document.getElementById("ella").classList.add("stickydeff")

        }

    }
    // else{
    //     document.getElementById("ella").setAttribute("class","rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16")

    // }
    lastScroll = currentScroll;
});

// (() => {
//     const application = Stimulus.Application.start()
  
//     application.register("slider", class extends Stimulus.Controller {
//       static get targets() {
//         return [ "scrollContainer", "image", "indicator" ]
//       }
//       initialize() {
//         this.observer = new IntersectionObserver(this.onIntersectionObserved.bind(this), {
//           root: this.scrollContainerTarget,
//           threshold: 0.5
//         })
//         this.imageTargets.forEach(image => {
//           this.observer.observe(image)
//         })
//       }
//       onIntersectionObserved(entries) {
//         entries.forEach(entry => {
//           if (entry.intersectionRatio > 0.5) {
//             const intersectingIndex = this.imageTargets.indexOf(entry.target)
//             this.indicatorTargets[intersectingIndex].classList.add("bg-blue-900")
//           }
//           else { 
//             const intersectingIndex = this.imageTargets.indexOf(entry.target)
//             this.indicatorTargets[intersectingIndex].classList.remove("bg-blue-900")
//           }
//         })
//       }
//       scrollTo() {
//         const imageId = event.target.dataset.imageId
//         const imageElement = document.getElementById(imageId)
//         const imageCoordinates = imageElement.getBoundingClientRect()
//         this.scrollContainerTarget.scrollTo({ left: (this.scrollContainerTarget.scrollLeft + imageCoordinates.left), top: false, behavior: "smooth" })
//       }
//     })
//   })()