
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

