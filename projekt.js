let navBar = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");
let nav = function (){
    
    let bar="";
        sections.forEach(section=>{
            let o = {
                sectionId : section.id,
                sectionDataNav : section.dataset.nav,
            }
            const li= `<li><a href="#${o.sectionId}" data-nav="${o.sectionId}" class="menu__link">${o.sectionDataNav}</a></li>`;
            bar += li
});
navBar.innerHTML= bar;
}
nav()


window.onscroll = function() {
	document.querySelectorAll("section").forEach(function (activeall) {
    
    if(
        activeall.getBoundingClientRect().top >= -400&& 
        activeall.getBoundingClientRect().top <= 150
        ){
        activeall.classList.add("your-active-class");
        } else{
        activeall.classList.remove("your-active-class");
    }
	});
}






