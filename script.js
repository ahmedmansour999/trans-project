// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -10 &&
        rect.left >= -10 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Apply the transition effect when the element is in the viewport
function handleScroll() {
    const container4 = document.getElementById('container4');


    if (isElementInViewport(container4)) {
        container4.classList.add('show-content');
    } else {
        container4.classList.remove('show-content');
    }

}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Apply the transition effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
});
 

// card paragraph view 
const buttonArticle = document.getElementById('buttonArticle') ; 
const paragraph = document.getElementById('paragraph')
const eye = document.getElementById('eye') ;
const buttonArticle1 = document.getElementById('buttonArticle1') ; 
const paragraph1 = document.getElementById('paragraph1') ;
const bullseye = document.getElementById('bullseye') ;
const buttonArticle2= document.getElementById('buttonArticle2') ; 
const paragraph2 = document.getElementById('paragraph2') ;
const chart = document.getElementById('chart') ;



buttonArticle.onclick = ()=>{
    if (paragraph.style.display === "none") {
        paragraph.style.display = 'block'
        eye.style.color= "red"
    }else{
        paragraph.style.display = "none"
        eye.style.color= "rgb(2 11 56)"
    }
}
buttonArticle1.onclick = ()=>{
    if (paragraph1.style.display === "none") {
        paragraph1.style.display = 'block'
        bullseye.style.color= "red"
    }else{
        paragraph1.style.display = "none"
        bullseye.style.color= "rgb(2 11 56)"
    }
}
buttonArticle2.onclick = ()=>{
    if (paragraph2.style.display === "none") {
        paragraph2.style.display = 'block'
        chart.style.color= "red"
    }else{
        paragraph2.style.display = "none"
        chart.style.color= "rgb(2 11 56)"
    }
}
