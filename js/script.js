const crossIcon = document.querySelector('#cross-button')
const dropDown = document.querySelector('#dropdown-button')
const navBar = document.querySelector('#nav-list')
const navLeft = document.querySelector('#nav-item-list-left')
const navRight = document.querySelector('#nav-item-list-right')

function dropdown() {
    crossIcon.classList.toggle('hidden')
    dropDown.classList.toggle('hidden')
    navLeft.classList.toggle('hidden')
    navRight.classList.toggle('hidden')
    navBar.style.background = 'rgba(0,0,0,0.8)'
}

function removeDropdown() {
    dropDown.classList.toggle('hidden')
    crossIcon.classList.toggle('hidden')
    navLeft.classList.toggle('hidden')
    navRight.classList.toggle('hidden')
    navBar.style.background = ('none')
    navBar.style.opacity = '1'
}