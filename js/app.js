const PHONE = "59171970146";
const views = [...document.querySelectorAll(".view")];
const navButtons = [...document.querySelectorAll("[data-view]")];
const themeToggle = document.getElementById("themeToggle");
const drinkButtons = [...document.querySelectorAll("[data-drink]")];
let selectedDrinks = JSON.parse(localStorage.getItem("dfe-drinks") || "[]");

function showView(id){
  if(!document.getElementById(id)) return;
  views.forEach(v=>v.classList.toggle("active",v.id===id));
  document.querySelectorAll(".nav-link,.mobile-nav").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  document.getElementById("menuToggle").setAttribute("aria-label","Menú de navegación");
}
navButtons.forEach(btn=>btn.addEventListener("click",()=>showView(btn.dataset.view)));
document.querySelector(".brand").addEventListener("click",e=>{e.preventDefault();showView("inicio")});

function updateDrinkUI(){
  drinkButtons.forEach(btn=>{
    const chosen=selectedDrinks.includes(btn.dataset.drink);
    btn.classList.toggle("selected",chosen);
    btn.textContent=chosen?"✓":"+";
    btn.setAttribute("aria-pressed",String(chosen));
  });
  document.getElementById("selectedCount").textContent=`${selectedDrinks.length} seleccionadas`;
  document.getElementById("quoteDrinks").textContent=selectedDrinks.length?`Bebidas: ${selectedDrinks.join(", ")}`:"Bebidas: ninguna seleccionada";
  localStorage.setItem("dfe-drinks",JSON.stringify(selectedDrinks));
}
drinkButtons.forEach(btn=>btn.addEventListener("click",()=>{
  const name=btn.dataset.drink;
  selectedDrinks=selectedDrinks.includes(name)?selectedDrinks.filter(x=>x!==name):[...selectedDrinks,name];
  updateDrinkUI();
}));
document.getElementById("clearDrinks").addEventListener("click",()=>{selectedDrinks=[];updateDrinkUI()});
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");filterDrinks();
}));
document.getElementById("drinkSearch").addEventListener("input",filterDrinks);
function filterDrinks(){
  const cat=document.querySelector(".filter.active").dataset.filter;
  const q=document.getElementById("drinkSearch").value.toLowerCase().trim();
  document.querySelectorAll(".drink-card").forEach(card=>{
    const category=card.dataset.category,name=card.dataset.name;
    card.classList.toggle("hidden",!(cat==="todas"||cat===category)||!name.includes(q));
  });
}
document.querySelectorAll("[data-package]").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelector('[name="servicio"]').value=btn.dataset.package;showView("cotizar");
}));
const savedTheme=localStorage.getItem("dfe-theme");
if(savedTheme==="light")document.body.classList.add("light");
themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("dfe-theme",document.body.classList.contains("light")?"light":"dark");
  themeToggle.textContent=document.body.classList.contains("light")?"☾":"☼";
});
themeToggle.textContent=document.body.classList.contains("light")?"☾":"☼";
document.getElementById("menuToggle").addEventListener("click",()=>{
  const current=views.find(v=>v.classList.contains("active"))?.id||"inicio";
  const ids=["inicio","servicios","bebidas","cotizar","contacto"];
  showView(ids[(ids.indexOf(current)+1)%ids.length]);
});
document.getElementById("quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const fields=[
    "Hola, Don Felipe Events. Quisiera solicitar una cotización.",
    `Nombre: ${data.get("nombre")}`,
    `Evento: ${data.get("evento")}`,
    `Ciudad: ${data.get("ciudad")}`,
    `Fecha: ${data.get("fecha")||"Por definir"}`,
    `Invitados: ${data.get("invitados")||"Por definir"}`,
    `Horas de servicio: ${data.get("horas")||"Por definir"}`,
    `Garzones: ${data.get("garzones")||"Por definir"}`,
    `Servicio: ${data.get("servicio")}`,
    `Bebidas: ${selectedDrinks.length?selectedDrinks.join(", "):"Por definir"}`,
    `Detalles: ${data.get("detalles")||"Sin detalles adicionales"}`
  ];
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(fields.join("\n"))}`,"_blank","noopener");
});
updateDrinkUI();
if("serviceWorker" in navigator && location.protocol!=="file:"){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(err=>console.warn("SW no registrado",err)));
}
