const dashboardButton = document.querySelector('#dashboard');
const monitorFarmButton = document.querySelector('#monitor-farm');
const manageOthersButton = document.querySelector('#manage-others');

// Dashboard Button
dashboardButton.addEventListener('mouseover', () => {
    dashboardButton.style.color = 'white';
    dashboardButton.style.backgroundColor = '#00c458';
    dashboardButton.querySelector('img').src = './images/dashboard selected.png'
})
dashboardButton.addEventListener('mouseleave', () => {
    dashboardButton.style.color = '#00c458';
    dashboardButton.style.backgroundColor = 'transparent';
    dashboardButton.querySelector('img').src = './images/dashboard unselected.png'
})

// Monitor Farm Button
monitorFarmButton.addEventListener('mouseover', () => {
    monitorFarmButton.style.color = 'white';
    monitorFarmButton.style.backgroundColor = '#00c458';
    monitorFarmButton.querySelector('img').src = './images/harvest selected.png'
})
monitorFarmButton.addEventListener('mouseleave', () => {
    monitorFarmButton.style.color = '#00c458';
    monitorFarmButton.style.backgroundColor = 'transparent';
    monitorFarmButton.querySelector('img').src = './images/harvest unselected.png'
})

// Manage Others Button
manageOthersButton.addEventListener('mouseover', () => {
    manageOthersButton.style.color = 'white';
    manageOthersButton.style.backgroundColor = '#00c458';
    manageOthersButton.querySelector('img').src = './images/growth selected.png'
})
manageOthersButton.addEventListener('mouseleave', () => {
    manageOthersButton.style.color = '#00c458';
    manageOthersButton.style.backgroundColor = 'transparent';
    manageOthersButton.querySelector('img').src = './images/growth unselected.png'
})