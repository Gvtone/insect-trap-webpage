const dashboardButton = document.querySelector("#dashboard");
const monitorFarmButton = document.querySelector("#monitor-farm");
const manageOthersButton = document.querySelector("#manage-others");
const insectButton = document.querySelector("#insects");
const insecticidesButton = document.querySelector("#insecticides");

// Dashboard Button
dashboardButton.addEventListener("mouseover", () => {
  dashboardButton.style.color = "white";
  dashboardButton.style.backgroundColor = "#00c458";
  dashboardButton.querySelector("img").src = "./images/dashboard selected.png";
});
dashboardButton.addEventListener("mouseleave", () => {
  dashboardButton.style.color = "#00c458";
  dashboardButton.style.backgroundColor = "transparent";
  dashboardButton.querySelector("img").src = "./images/dashboard unselected.png";
});

// Monitor Farm Button
monitorFarmButton.addEventListener("mouseover", () => {
  monitorFarmButton.style.color = "white";
  monitorFarmButton.style.backgroundColor = "#00c458";
  monitorFarmButton.querySelector("img").src = "./images/harvest selected.png";
});
monitorFarmButton.addEventListener("mouseleave", () => {
  monitorFarmButton.style.color = "#00c458";
  monitorFarmButton.style.backgroundColor = "transparent";
  monitorFarmButton.querySelector("img").src = "./images/harvest unselected.png";
});

// Manage Others Button
manageOthersButton.addEventListener("mouseover", () => {
  manageOthersButton.style.color = "white";
  manageOthersButton.style.backgroundColor = "#00c458";
  manageOthersButton.querySelector("img").src = "./images/growth selected.png";
});
manageOthersButton.addEventListener("mouseleave", () => {
  manageOthersButton.style.color = "#00c458";
  manageOthersButton.style.backgroundColor = "transparent";
  manageOthersButton.querySelector("img").src = "./images/growth unselected.png";
});

// Insect Button
insectButton.addEventListener("mouseover", () => {
  insectButton.style.color = "white";
  insectButton.style.backgroundColor = "#00c458";
  insectButton.querySelector("img").src = "./images/growth selected.png";
});
insectButton.addEventListener("mouseleave", () => {
  insectButton.style.color = "#00c458";
  insectButton.style.backgroundColor = "transparent";
  insectButton.querySelector("img").src = "./images/growth unselected.png";
});

// Insecticides Button
insecticidesButton.addEventListener("mouseover", () => {
  insecticidesButton.style.color = "white";
  insecticidesButton.style.backgroundColor = "#00c458";
  insecticidesButton.querySelector("img").src = "./images/growth selected.png";
});
insecticidesButton.addEventListener("mouseleave", () => {
  insecticidesButton.style.color = "#00c458";
  insecticidesButton.style.backgroundColor = "transparent";
  insecticidesButton.querySelector("img").src = "./images/growth unselected.png";
});
