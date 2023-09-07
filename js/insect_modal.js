const brownplanthopper = document.getElementById("brownplanthopper");
const greenleafhopper = document.getElementById("greenleafhopper");
const pinkstemborer = document.getElementById("pinkstemborer");
const whitestemborer = document.getElementById("whitestemborer");
const yellowstemborer = document.getElementById("yellowstemborer");
const whorlmaggot = document.getElementById("whorlmaggot");
const armyworm = document.getElementById("armyworm");
const zigzagleafhopper = document.getElementById("zigzagleafhopper");
const locust = document.getElementById("locust");
const caseworm = document.getElementById("caseworm");
const modal_container_brown = document.getElementById("modal_container_brown");
const modal_container_green = document.getElementById("modal_container_green");
const modal_container_pink = document.getElementById("modal_container_pink");
const modal_container_white = document.getElementById("modal_container_white");
const modal_container_yellow = document.getElementById("modal_container_yellow");
const modal_container_whorl = document.getElementById("modal_container_whorl");
const modal_container_army = document.getElementById("modal_container_army");
const modal_container_zigzag = document.getElementById("modal_container_zigzag");
const modal_container_locust = document.getElementById("modal_container_locust");
const modal_container_caseworm = document.getElementById("modal_container_caseworm");
const close_green = document.getElementById("close_green");
const close_pink = document.getElementById("close_pink");
const close_brown = document.getElementById("close_brown");
const close_white = document.getElementById("close_white");
const close_yellow = document.getElementById("close_yellow");
const close_whorl = document.getElementById("close_whorl");
const close_army = document.getElementById("close_army");
const close_zigzag = document.getElementById("close_zigzag");
const close_locust = document.getElementById("close_locust");
const close_caseworm = document.getElementById("close_caseworm");

//MODAL

//Brown PlantHopper
brownplanthopper.addEventListener("click", () => {
  modal_container_brown.classList.add("show");
});

close_brown.addEventListener("click", () => {
  modal_container_brown.classList.remove("show");
});

//Green leafhopper
greenleafhopper.addEventListener("click", () => {
  modal_container_green.classList.add("show");
});
close_green.addEventListener("click", () => {
  modal_container_green.classList.remove("show");
});

//pink stem borer
pinkstemborer.addEventListener("click", () => {
  modal_container_pink.classList.add("show");
});

close_pink.addEventListener("click", () => {
  modal_container_pink.classList.remove("show");
});

//white stem borer
whitestemborer.addEventListener("click", () => {
  modal_container_white.classList.add("show");
});

close_white.addEventListener("click", () => {
  modal_container_white.classList.remove("show");
});

//yellow stem borer
yellowstemborer.addEventListener("click", () => {
  modal_container_yellow.classList.add("show");
});

close_yellow.addEventListener("click", () => {
  modal_container_yellow.classList.remove("show");
});

//whorl maggot
whorlmaggot.addEventListener("click", () => {
  modal_container_whorl.classList.add("show");
});

close_whorl.addEventListener("click", () => {
  modal_container_whorl.classList.remove("show");
});

//armyworm
armyworm.addEventListener("click", () => {
  modal_container_army.classList.add("show");
});

close_army.addEventListener("click", () => {
  modal_container_army.classList.remove("show");
});

//zigzag
zigzagleafhopper.addEventListener("click", () => {
  modal_container_zigzag.classList.add("show");
});

close_zigzag.addEventListener("click", () => {
  modal_container_zigzag.classList.remove("show");
});

//locust
locust.addEventListener("click", () => {
  modal_container_locust.classList.add("show");
});

close_locust.addEventListener("click", () => {
  modal_container_locust.classList.remove("show");
});

//locust
caseworm.addEventListener("click", () => {
  modal_container_caseworm.classList.add("show");
});

close_caseworm.addEventListener("click", () => {
  modal_container_caseworm.classList.remove("show");
});
