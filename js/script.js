

/* HERO SLIDER */
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
let index = 0;

function update(){
slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(()=>{
index = (index + 1) % slide.length;
update();
},5000);

function openMenu(){
document.querySelector('.menu').classList.add('active');
}

function closeMenu(){
document.querySelector('.menu').classList.remove('active');
}

/* TOUCH SWIPE MOBILE */
let startX=0

const slider=document.querySelector('.hero-slider')

slider.addEventListener('touchstart',e=>{
 startX=e.touches[0].clientX
})

slider.addEventListener('touchend',e=>{
 let endX=e.changedTouches[0].clientX
 if(startX-endX>50) nextHero()
 if(endX-startX>50) prevHero()
})

/* TRANSLATIONS */
const translations={

en:{
 title:"Holiday Apartments near Lake Constance",
 subtitle:"Enjoy your stay in Hard, Vorarlberg",
 apartments:"Apartments",
 region:"Region",
 contact:"Contact",
 regionTitle:"Discover the Bodensee Region",
 regionText:"Hard is located directly on Lake Constance and is a perfect starting point for cycling, swimming, hiking and visiting Austria, Germany and Switzerland."
},

de:{
 title:"Ferienwohnungen am Bodensee",
 subtitle:"Genießen Sie Ihren Aufenthalt in Hard, Vorarlberg",
 apartments:"Apartments",
 region:"Region",
 contact:"Kontakt",
 regionTitle:"Entdecken Sie die Bodenseeregion",
 regionText:"Hard liegt direkt am Bodensee und ist ein idealer Ausgangspunkt für Radfahren, Schwimmen, Wandern und Ausflüge nach Österreich, Deutschland und in die Schweiz."
}
}

function setLang(lang){
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  const key=el.getAttribute('data-i18n')
  el.textContent=translations[lang][key]
 })
}
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const menuClose = document.querySelector(".menu_close")

menuClose.addEventListener("click", () => {
menu.classList.remove("active")
})

hamburger.addEventListener("click", () => {
menu.classList.toggle("active")
})

